"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getBrowserCourseProgress,
  markLessonCompleted,
  markMaterialCompleted,
  saveBrowserCourseProgress,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { Course, LearnerCourseProgress } from "@/types/course.types";

type DatabaseLessonProgress = {
  course_slug: string;
  lesson_slug: string;
  is_completed: boolean;
};

export function useCourseProgress(
  course: Course,
  initialProgress: LearnerCourseProgress | null
) {
  const [progress, setProgress] = useState<LearnerCourseProgress>(() => {
    if (initialProgress) {
      return {
        ...initialProgress,
        completedMaterialIds: initialProgress.completedMaterialIds ?? [],
      };
    }

    return {
      courseId: course.id,
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
      currentLessonId: course.lessons[0]?.id ?? "",
      completedLessonIds: [],
      completedMaterialIds: [],
      enrollmentStatus: course.lessons.length ? "active" : "not_started",
    };
  });

  useEffect(() => {
    const browserProgress = getBrowserCourseProgress(course);
    setProgress(browserProgress);
  }, [course]);

  useEffect(() => {
    async function syncProgressFromDatabase() {
      try {
        const response = await fetch("/api/lesson-progress", {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const result = await response.json();
        const databaseLessonProgressList: DatabaseLessonProgress[] =
          result.data || [];

        const completedLessonIdsFromDatabase = databaseLessonProgressList
          .filter(
            (item) =>
              item.course_slug === course.slug &&
              item.is_completed === true
          )
          .map((item) => item.lesson_slug)
          .filter((lessonId) =>
            course.lessons.some((lesson) => lesson.id === lessonId)
          );

        if (completedLessonIdsFromDatabase.length === 0) {
          return;
        }

        const browserProgress = getBrowserCourseProgress(course);
        const completedLessonIds = Array.from(
          new Set([
            ...browserProgress.completedLessonIds,
            ...completedLessonIdsFromDatabase,
          ])
        );

        const nextIncompleteLesson = course.lessons.find(
          (lesson) => !completedLessonIds.includes(lesson.id)
        );

        const syncedProgress: LearnerCourseProgress = {
          ...browserProgress,
          completedLessonIds,
          currentLessonId:
            browserProgress.currentLessonId ||
            nextIncompleteLesson?.id ||
            course.lessons[0]?.id ||
            "",
          enrollmentStatus:
            browserProgress.enrollmentStatus === "not_started"
              ? "active"
              : browserProgress.enrollmentStatus,
          lastAccessedAt: new Date().toISOString(),
        };

        saveBrowserCourseProgress(course, syncedProgress);
        setProgress(syncedProgress);
      } catch (error) {
        console.error("Failed to sync progress from database:", error);
      }
    }

    void syncProgressFromDatabase();
  }, [course]);

  useEffect(() => {
    const unsubscribe = subscribeToCourseProgressChange(() => {
      const browserProgress = getBrowserCourseProgress(course);
      setProgress(browserProgress);
    }, course.id);

    return unsubscribe;
  }, [course]);

  const summary = useMemo(() => {
    const totalLessons = course.lessons.length;
    const totalMaterials = course.lessons.reduce(
      (total, lesson) => total + lesson.materials.length,
      0
    );

    const lessonProgressPercent = totalLessons
      ? Math.round((progress.completedLessonIds.length / totalLessons) * 100)
      : 0;

    const materialProgressPercent = totalMaterials
      ? Math.round((progress.completedMaterialIds.length / totalMaterials) * 100)
      : 0;

    return {
      totalLessons,
      totalMaterials,
      lessonProgressPercent,
      materialProgressPercent,
    };
  }, [course, progress]);

  async function syncLessonProgressToDatabase(lessonId: string) {
    try {
      const response = await fetch("/api/lesson-progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseSlug: course.slug,
          lessonId,
        }),
      });

      if (!response.ok) {
        console.warn("Lesson progress was saved in browser, but not synced to database.");
      }
    } catch (error) {
      console.error("Failed to sync lesson progress to database:", error);
    }
  }

  const handleMarkMaterialCompleted = (lessonId: string, materialId: string) => {
    const nextProgress = markMaterialCompleted(course, progress, lessonId, materialId);
    saveBrowserCourseProgress(course, nextProgress);
    setProgress(nextProgress);

    const isLessonCompletedAfterMaterialClick =
      nextProgress.completedLessonIds.includes(lessonId);

    if (isLessonCompletedAfterMaterialClick) {
      void syncLessonProgressToDatabase(lessonId);
    }

    return nextProgress;
  };

  const handleMarkLessonCompleted = (lessonId: string) => {
    const nextProgress = markLessonCompleted(course, progress, lessonId);
    saveBrowserCourseProgress(course, nextProgress);
    setProgress(nextProgress);
    void syncLessonProgressToDatabase(lessonId);
    return nextProgress;
  };

  return {
    progress,
    summary,
    handleMarkMaterialCompleted,
    handleMarkLessonCompleted,
  };
}
