import { courses } from "@/data/courses";
import type { LearnerCourseProgress } from "@/types/course.types";

export const learnerCourseProgress: LearnerCourseProgress[] = [
  {
    courseId: "1",
    startedAt: "2026-04-02T09:00:00.000Z",
    lastAccessedAt: "2026-04-12T13:20:00.000Z",
    currentLessonId: "py-3",
    completedLessonIds: ["py-1", "py-2"],
    completedMaterialIds: ["py-1-html", "py-1-video", "py-2-html"],
    enrollmentStatus: "active",
  },
  {
    courseId: "3",
    startedAt: "2026-04-18T08:15:00.000Z",
    lastAccessedAt: "2026-04-21T03:45:00.000Z",
    currentLessonId: "pe-3",
    completedLessonIds: ["pe-1", "pe-2"],
    completedMaterialIds: ["pe-1-html", "pe-1-video", "pe-2-pdf", "pe-2-html"],
    enrollmentStatus: "active",
  },
];

export function getCourseProgressByCourseId(courseId: string) {
  return learnerCourseProgress.find((item) => item.courseId === courseId) ?? null;
}

export function getCourseProgressBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return null;
  }

  return getCourseProgressByCourseId(course.id);
}

export function getContinueLearningHrefBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return null;
  }

  const progress = getCourseProgressByCourseId(course.id);

  if (progress?.currentLessonId) {
    return `/courses/${slug}/lessons/${progress.currentLessonId}`;
  }

  const firstLesson = course.lessons[0];

  if (!firstLesson) {
    return `/courses/${slug}`;
  }

  return `/courses/${slug}/lessons/${firstLesson.id}`;
}

export function getSeedCourseProgressByCourseId(courseId: string) {
  return learnerCourseProgress.find((item) => item.courseId === courseId) ?? null;
}
