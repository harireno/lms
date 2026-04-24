import LessonDetailClient from "@/components/course/LessonDetailClient";
import { getCourseLessonBySlugAndLessonId } from "@/services/course.service";
import { notFound } from "next/navigation";

type LessonDetailPageProps = {
  params: Promise<{ slug: string; lessonId: string }>;
};

export default async function LessonDetailPage({
  params,
}: LessonDetailPageProps) {
  const { slug, lessonId } = await params;

  const result = await getCourseLessonBySlugAndLessonId(slug, lessonId);

  if (!result) {
    notFound();
  }

  const {
    course,
    lesson,
    progress,
    previousLesson,
    nextLesson,
  } = result;

  return (
    <LessonDetailClient
      course={course}
      lesson={lesson}
      initialProgress={progress}
      previousLessonId={previousLesson?.id ?? null}
      nextLessonId={nextLesson?.id ?? null}
    />
  );
}
