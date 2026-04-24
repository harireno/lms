import { courses } from "@/data/courses";
import {
  getContinueLearningHrefBySlug,
  getCourseProgressBySlug,
} from "@/data/course-progress";

export async function getCourses() {
  return courses;
}

export async function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug) ?? null;
}

export async function getCourseWithProgressBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug) ?? null;
  const progress = getCourseProgressBySlug(slug);

  if (!course) {
    return null;
  }

  return {
    course,
    progress,
  };
}

export async function getCourseLessonBySlugAndLessonId(
  slug: string,
  lessonId: string
) {
  const course = courses.find((item) => item.slug === slug) ?? null;

  if (!course) {
    return null;
  }

  const lesson = course.lessons.find((item) => item.id === lessonId) ?? null;

  if (!lesson) {
    return null;
  }

  const progress = getCourseProgressBySlug(slug);
  const continueHref = getContinueLearningHrefBySlug(slug);
  const lessonIndex = course.lessons.findIndex((item) => item.id === lessonId);
  const previousLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < course.lessons.length - 1
      ? course.lessons[lessonIndex + 1]
      : null;

  return {
    course,
    lesson,
    progress,
    continueHref,
    previousLesson,
    nextLesson,
  };
}
