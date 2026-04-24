"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import MaterialViewer from "@/components/course/MaterialViewer";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import type { Course, LearnerCourseProgress, Lesson } from "@/types/course.types";

type LessonProgressPanelProps = {
  course: Course;
  lesson: Lesson;
  initialProgress: LearnerCourseProgress | null;
  nextLessonId?: string | null;
  previousLessonId?: string | null;
};

export default function LessonProgressPanel({
  course,
  lesson,
  initialProgress,
  nextLessonId,
  previousLessonId,
}: LessonProgressPanelProps) {
  const router = useRouter();
  const {
    progress,
    summary,
    handleMarkMaterialCompleted,
    handleMarkLessonCompleted,
  } = useCourseProgress(course, initialProgress);

  const isCurrentLesson = progress.currentLessonId === lesson.id;
  const isLessonCompleted = progress.completedLessonIds.includes(lesson.id);

  const completedMaterialCount = useMemo(
    () =>
      lesson.materials.filter((material) =>
        progress.completedMaterialIds.includes(material.id)
      ).length,
    [lesson.materials, progress.completedMaterialIds]
  );

  const lessonMaterialPercent = lesson.materials.length
    ? Math.round((completedMaterialCount / lesson.materials.length) * 100)
    : 0;

  const goToCurrentLesson = () => {
    if (!progress.currentLessonId) {
      return;
    }

    router.push(`/courses/${course.slug}/lessons/${progress.currentLessonId}`);
  };

  return (
    <>
      <section className="lesson-live-progress-panel">
        <div className="section-head">
          <h2>Live Lesson Progress</h2>
          <p>
            This lesson now tracks progress per material and updates the current lesson automatically.
          </p>
        </div>

        <div className="progress-summary-grid">
          <div className="progress-summary-card">
            <span>Course Lesson Progress</span>
            <strong>{summary.lessonProgressPercent}%</strong>
            <small>
              {progress.completedLessonIds.length} of {summary.totalLessons} lessons completed
            </small>
          </div>
          <div className="progress-summary-card">
            <span>Course Material Progress</span>
            <strong>{summary.materialProgressPercent}%</strong>
            <small>
              {progress.completedMaterialIds.length} of {summary.totalMaterials} materials completed
            </small>
          </div>
          <div className="progress-summary-card">
            <span>This Lesson</span>
            <strong>{lessonMaterialPercent}%</strong>
            <small>
              {completedMaterialCount} of {lesson.materials.length} materials completed
            </small>
          </div>
        </div>

        <div className="progress-bar-shell lesson-progress-shell">
          <div
            className="progress-bar-fill"
            style={{ width: `${lessonMaterialPercent}%` }}
          />
        </div>

        <div className="lesson-progress-action-row">
          <button
            type="button"
            className="lesson-complete-button"
            onClick={() => {
              const nextProgress = handleMarkLessonCompleted(lesson.id);

              if (
                nextProgress.currentLessonId &&
                nextProgress.currentLessonId !== lesson.id
              ) {
                router.push(
                  `/courses/${course.slug}/lessons/${nextProgress.currentLessonId}`
                );
              } else {
                router.refresh();
              }
            }}
          >
            {isLessonCompleted ? "Lesson Completed" : "Mark Lesson as Completed"}
          </button>

          <button
            type="button"
            className="lesson-jump-button"
            onClick={goToCurrentLesson}
          >
            Go to Current Lesson
          </button>
        </div>
      </section>

      <div className="lesson-material-stack">
        {lesson.materials.map((material, index) => {
          const isMaterialCompleted = progress.completedMaterialIds.includes(material.id);

          return (
            <div key={material.id} className="lesson-material-progress-card">
              <div className="lesson-material-progress-head">
                <div>
                  <span className="lesson-number">Material {index + 1}</span>
                  <h3>{material.title}</h3>
                </div>

                <span
                  className={`lesson-status-pill ${isMaterialCompleted ? "lesson-status-complete" : ""}`}
                >
                  {isMaterialCompleted ? "Completed" : "Open"}
                </span>
              </div>

              <MaterialViewer material={material} />

              <div className="lesson-material-progress-actions">
                <button
                  type="button"
                  className="lesson-complete-button"
                  onClick={() => {
                    const nextProgress = handleMarkMaterialCompleted(
                      lesson.id,
                      material.id
                    );

                    if (
                      nextProgress.currentLessonId &&
                      nextProgress.currentLessonId !== lesson.id
                    ) {
                      router.push(
                        `/courses/${course.slug}/lessons/${nextProgress.currentLessonId}`
                      );
                    } else {
                      router.refresh();
                    }
                  }}
                  disabled={isMaterialCompleted}
                >
                  {isMaterialCompleted ? "Material Completed" : "Mark as Completed"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lesson-navigation">
        {previousLessonId ? (
          <a
            href={`/courses/${course.slug}/lessons/${previousLessonId}`}
            className="btn-secondary"
          >
            Previous Lesson
          </a>
        ) : (
          <span />
        )}

        {nextLessonId ? (
          <a
            href={`/courses/${course.slug}/lessons/${nextLessonId}`}
            className="btn-primary"
          >
            Next Lesson
          </a>
        ) : (
          <a href={`/courses/${course.slug}`} className="btn-primary">
            Finish Course View
          </a>
        )}
      </div>

      {isCurrentLesson && !isLessonCompleted ? (
        <div className="lesson-current-state-note">
          You are currently on the active lesson. Complete all materials or mark the lesson complete to move the course forward automatically.
        </div>
      ) : null}
    </>
  );
}
