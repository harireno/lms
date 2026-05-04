import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { pool } from "@/lib/db";
import {
  SESSION_COOKIE_NAME,
  readSessionValue,
} from "@/lib/session";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
    const user = readSessionValue(sessionCookie?.value);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    const result = await pool.query(
      `
      SELECT
        c.slug AS course_slug,
        l.slug AS lesson_slug,
        l.title AS lesson_title,
        lp.is_completed,
        lp.completed_at,
        lp.updated_at
      FROM lesson_progress lp
      JOIN lessons l ON l.id = lp.lesson_id
      JOIN courses c ON c.id = l.course_id
      WHERE lp.user_id = $1
        AND lp.is_completed = true
      ORDER BY lp.updated_at DESC
      `,
      [user.id]
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("GET /api/lesson-progress error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load lesson progress",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
    const user = readSessionValue(sessionCookie?.value);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    const courseSlug = String(body.courseSlug || "").trim();
    const lessonId = String(body.lessonId || "").trim();

    if (!courseSlug || !lessonId) {
      return NextResponse.json(
        {
          success: false,
          message: "Course slug and lesson ID are required",
        },
        { status: 400 }
      );
    }

    const lessonResult = await pool.query(
      `
      SELECT
        l.id AS lesson_db_id,
        l.slug AS lesson_slug,
        c.id AS course_db_id,
        c.slug AS course_slug
      FROM lessons l
      JOIN courses c ON c.id = l.course_id
      WHERE c.slug = $1
        AND l.slug = $2
        AND c.is_published = true
      LIMIT 1
      `,
      [courseSlug, lessonId]
    );

    const lesson = lessonResult.rows[0];

    if (!lesson) {
      return NextResponse.json(
        {
          success: false,
          message: "Lesson not found in database",
        },
        { status: 404 }
      );
    }

    const enrollmentResult = await pool.query(
      `
      SELECT id
      FROM enrollments
      WHERE user_id = $1
        AND course_id = $2
        AND status = 'active'
      LIMIT 1
      `,
      [user.id, lesson.course_db_id]
    );

    if (enrollmentResult.rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not enrolled in this course",
        },
        { status: 403 }
      );
    }

    const progressResult = await pool.query(
      `
      INSERT INTO lesson_progress (
        user_id,
        lesson_id,
        is_completed,
        completed_at,
        updated_at
      )
      VALUES ($1, $2, true, NOW(), NOW())
      ON CONFLICT (user_id, lesson_id)
      DO UPDATE SET
        is_completed = true,
        completed_at = COALESCE(lesson_progress.completed_at, NOW()),
        updated_at = NOW()
      RETURNING id, user_id, lesson_id, is_completed, completed_at, updated_at
      `,
      [user.id, lesson.lesson_db_id]
    );

    return NextResponse.json({
      success: true,
      data: progressResult.rows[0],
    });
  } catch (error) {
    console.error("POST /api/lesson-progress error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save lesson progress",
      },
      { status: 500 }
    );
  }
}