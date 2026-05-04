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
