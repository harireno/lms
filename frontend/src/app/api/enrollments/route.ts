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
        e.id AS enrollment_id,
        e.status,
        e.enrolled_at,
        c.id AS course_id,
        c.slug,
        c.title,
        c.description,
        c.access_type
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = $1
      ORDER BY e.enrolled_at DESC
      `,
      [user.id]
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("GET /api/enrollments error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load enrollments",
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

    if (!courseSlug) {
      return NextResponse.json(
        {
          success: false,
          message: "Course slug is required",
        },
        { status: 400 }
      );
    }

    const courseResult = await pool.query(
      "SELECT id, slug, title, access_type FROM courses WHERE slug = $1 AND is_published = true LIMIT 1",
      [courseSlug]
    );

    const course = courseResult.rows[0];

    if (!course) {
      return NextResponse.json(
        {
          success: false,
          message: "Course not found",
        },
        { status: 404 }
      );
    }

    if (course.access_type !== "free") {
      return NextResponse.json(
        {
          success: false,
          message: "This course is not available for free enrollment",
        },
        { status: 403 }
      );
    }

    const enrollmentResult = await pool.query(
      `
      INSERT INTO enrollments (user_id, course_id, status)
      VALUES ($1, $2, 'active')
      ON CONFLICT (user_id, course_id)
      DO UPDATE SET status = 'active'
      RETURNING id, user_id, course_id, status, enrolled_at
      `,
      [user.id, course.id]
    );

    return NextResponse.json({
      success: true,
      data: {
        enrollment: enrollmentResult.rows[0],
        course,
      },
    });
  } catch (error) {
    console.error("POST /api/enrollments error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to enroll course",
      },
      { status: 500 }
    );
  }
}