"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getCourseImageBySlug } from "@/data/courses";
import {
  getOptionalBrowserCourseProgressMap,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { LearnerCourseProgress } from "@/types/course.types";
import type { Course } from "@/types/course.types";

export default function CourseList({
  courses,
}: {
  courses: Course[];
}) {
  const router = useRouter();
  const [progressMap, setProgressMap] = useState<Record<string, LearnerCourseProgress | null>>(
    {}
  );

  useEffect(() => {
    const loadProgressMap = () => {
      setProgressMap(getOptionalBrowserCourseProgressMap(courses));
    };

    loadProgressMap();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadProgressMap();
    });

    return unsubscribe;
  }, [courses]);

  const cardStateMap = useMemo(() => {
    return Object.fromEntries(
      courses.map((course) => {
        const progress = progressMap[course.id] ?? null;
        const totalLessons = course.lessons.length;
        const totalMaterials = course.lessons.reduce(
          (total, lesson) => total + lesson.materials.length,
          0
        );
        const lessonProgressPercent = progress
          ? Math.round((progress.completedLessonIds.length / totalLessons) * 100)
          : 0;
        const materialProgressPercent = progress
          ? Math.round((progress.completedMaterialIds.length / totalMaterials) * 100)
          : 0;
        const currentLesson = progress?.currentLessonId
          ? course.lessons.find((lesson) => lesson.id === progress.currentLessonId) ?? null
          : null;
        const continueHref = currentLesson
          ? `/courses/${course.slug}/lessons/${currentLesson.id}`
          : `/courses/${course.slug}`;
        const isStarted =
          !!progress &&
          (progress.completedLessonIds.length > 0 ||
            progress.completedMaterialIds.length > 0 ||
            !!progress.currentLessonId);

        return [
          course.id,
          {
            progress,
            currentLesson,
            continueHref,
            isStarted,
            lessonProgressPercent,
            materialProgressPercent,
          },
        ];
      })
    ) as Record<
      string,
      {
        progress: LearnerCourseProgress | null;
        currentLesson: Course["lessons"][number] | null;
        continueHref: string;
        isStarted: boolean;
        lessonProgressPercent: number;
        materialProgressPercent: number;
      }
    >;
  }, [courses, progressMap]);

  return (
    <div className="course-grid">
      {courses.map((course) => {
        const isFreeCourse = course.price === null;
        const cardState = cardStateMap[course.id];
        const isStarted = cardState?.isStarted ?? false;
        const currentLesson = cardState?.currentLesson ?? null;
        const lessonProgressPercent = cardState?.lessonProgressPercent ?? 0;
        const materialProgressPercent = cardState?.materialProgressPercent ?? 0;
        const progress = cardState?.progress ?? null;
        const cardHref = isStarted
          ? cardState.continueHref
          : `/courses/${course.slug}`;
        const buttonLabel = isStarted
          ? "Continue Course"
          : isFreeCourse
            ? "Access Course"
            : "Enroll Now";
        const badgeLabel = isStarted
          ? isFreeCourse
            ? "Free • In Progress"
            : "In Progress"
          : isFreeCourse
            ? "Free Course"
            : "Bestseller";

        return (
          <div
            key={course.id}
            className={`course-card ${isStarted ? "course-card-active" : ""}`}
          >
            <div className="course-thumb-wrap">
              <img
                src={getCourseImageBySlug(course.slug)}
                alt={course.title}
                className="course-thumb"
              />
            </div>

            <div className="course-body">
              <div className="course-card-badge-row">
                <span
                  className={`course-badge ${isFreeCourse ? "course-badge-free" : ""} ${isStarted ? "course-badge-active" : ""}`}
                >
                  {badgeLabel}
                </span>

                {isStarted ? (
                  <span className="course-progress-pill">
                    {lessonProgressPercent}%
                  </span>
                ) : null}
              </div>

              <h3>
                {course.title}
              </h3>

              <p>
                {course.lessons.length} lessons • {course.totalDuration}
              </p>

              {isStarted && progress ? (
                <div className="course-card-progress-box">
                  <div className="progress-inline-head">
                    <span>Lesson Progress</span>
                    <strong>{lessonProgressPercent}%</strong>
                  </div>
                  <div className="progress-bar-shell progress-bar-shell-tight course-card-progress-shell">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${lessonProgressPercent}%` }}
                    />
                  </div>

                  <div className="progress-inline-head course-card-progress-inline">
                    <span>Material Progress</span>
                    <strong>{materialProgressPercent}%</strong>
                  </div>
                  <div className="progress-bar-shell progress-bar-shell-tight course-card-progress-shell">
                    <div
                      className="progress-bar-fill progress-bar-fill-material"
                      style={{ width: `${materialProgressPercent}%` }}
                    />
                  </div>

                  {currentLesson ? (
                    <div className="course-current-lesson-note">
                      <small>Continue:</small>
                      <strong>{currentLesson.title}</strong>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className={`course-price ${isFreeCourse ? "course-price-free" : ""}`}>
                {isFreeCourse ? "Free" : `$${course.price}`}
              </div>

              {isStarted && progress ? (
                <div className="course-card-meta-row">
                  <span>
                    {progress.completedLessonIds.length}/{course.lessons.length} lessons done
                  </span>
                  <span>
                    Last access {new Date(progress.lastAccessedAt).toLocaleDateString("en-GB")}
                  </span>
                </div>
              ) : null}

              <button
                onClick={() => router.push(cardHref)}
                className={`enroll-button ${isFreeCourse ? "enroll-button-free" : ""} ${isStarted ? "enroll-button-continue" : ""}`}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
