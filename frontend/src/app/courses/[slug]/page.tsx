import { notFound } from "next/navigation";
import { courses, getCourseImageBySlug } from "@/data/courses";
import { getCourseProgressBySlug } from "@/data/course-progress";
import CourseDetailClient from "@/components/course/CourseDetailClient";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  const progress = getCourseProgressBySlug(slug);

  const courseImage = getCourseImageBySlug(course.slug);

  return (
    <CourseDetailClient
      course={course}
      courseImage={courseImage}
      initialProgress={progress}
    />
  );
}
