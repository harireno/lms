import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  try {
    const courseResult = await pool.query(
      "SELECT id, slug, title, description, access_type, is_published FROM courses WHERE slug = $1 AND is_published = true LIMIT 1",
      [slug]
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

    const lessonsResult = await pool.query(
      "SELECT id, slug, title, order_no FROM lessons WHERE course_id = $1 ORDER BY order_no ASC",
      [course.id]
    );

    return NextResponse.json({
      success: true,
      data: {
        ...course,
        lessons: lessonsResult.rows,
      },
    });
  } catch (error) {
    console.error("GET /api/courses/[slug] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load course detail",
      },
      { status: 500 }
    );
  }
}