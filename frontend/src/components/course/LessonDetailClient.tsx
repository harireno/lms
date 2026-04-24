"use client";

import { useMemo } from "react";
import LessonProgressPanel from "@/components/course/LessonProgressPanel";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import type { Course, LearnerCourseProgress, Lesson } from "@/types/course.types";

type LessonDetailClientProps = {
  course: Course;
  lesson: Lesson;
  initialProgress: LearnerCourseProgress | null;
  previousLessonId?: string | null;
  nextLessonId?: string | null;
};

export default function LessonDetailClient({
  course,
  lesson,
  initialProgress,
  previousLessonId,
  nextLessonId,
}: LessonDetailClientProps) {
  const { progress, summary } = useCourseProgress(course, initialProgress);

  const liveCurrentLesson = progress.currentLessonId
    ? course.lessons.find((item) => item.id === progress.currentLessonId) ?? null
    : null;

  const continueHref = liveCurrentLesson
    ? `/courses/${course.slug}/lessons/${liveCurrentLesson.id}`
    : course.lessons[0]
      ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
      : `/courses/${course.slug}`;

  const currentLesson = progress.currentLessonId === lesson.id;
  const completedLesson = progress.completedLessonIds.includes(lesson.id);

  const lessonCompletedMaterialCount = useMemo(
    () =>
      lesson.materials.filter((material) =>
        progress.completedMaterialIds.includes(material.id)
      ).length,
    [lesson.materials, progress.completedMaterialIds]
  );

  const lessonMaterialPercent = lesson.materials.length
    ? Math.round((lessonCompletedMaterialCount / lesson.materials.length) * 100)
    : 0;

  return (
    <div className="lesson-page">
      <section className="lesson-hero">
        <div className="lesson-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/courses">Courses</a>
              <span>/</span>
              <a href={`/courses/${course.slug}`}>{course.title}</a>
              <span>/</span>
              <span>{lesson.title}</span>
            </div>

            <span className="course-detail-badge">Lesson Detail</span>

            <h1 className="lesson-title">{lesson.title}</h1>
            <p className="lesson-text">{lesson.summary}</p>

            <div className="lesson-hero-meta">
              <div className="course-detail-stat">
                <strong>{lesson.duration}</strong>
                <span>Lesson Duration</span>
              </div>
              <div className="course-detail-stat">
                <strong>{lesson.materials.length}</strong>
                <span>Materials</span>
              </div>
              <div className="course-detail-stat">
                <strong>
                  {completedLesson
                    ? "Completed"
                    : currentLesson
                      ? "In Progress"
                      : "Open"}
                </strong>
                <span>Status</span>
              </div>
            </div>

            <div className="lesson-hero-progress-card">
              <div className="progress-inline-head">
                <span>This Lesson Progress</span>
                <strong>{lessonMaterialPercent}%</strong>
              </div>
              <div className="progress-bar-shell progress-bar-shell-tight">
                <div
                  className="progress-bar-fill progress-bar-fill-material"
                  style={{ width: `${lessonMaterialPercent}%` }}
                />
              </div>
              <small className="lesson-hero-progress-text">
                {lessonCompletedMaterialCount}/{lesson.materials.length} materials completed
              </small>
            </div>

            <div className="lesson-hero-actions">
              <a href={`/courses/${course.slug}`} className="btn-secondary">
                Back to Course
              </a>
              <a href={continueHref} className="btn-primary">
                {liveCurrentLesson?.id === lesson.id ? "Continue Learning" : "Go to Current Lesson"}
              </a>
            </div>
          </div>

          <aside className="lesson-outline-card">
            <p className="course-sidebar-label">Course Overview</p>
            <h3>{course.title}</h3>
            <p className="course-sidebar-copy">{course.description}</p>

            <div className="course-sidebar-meta">
              <div className="course-sidebar-meta-item">
                <span>Total Lessons</span>
                <strong>{course.lessons.length}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Total Duration</span>
                <strong>{course.totalDuration}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Started</span>
                <strong>{new Date(progress.startedAt).toLocaleDateString("en-GB")}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Last Access</span>
                <strong>{new Date(progress.lastAccessedAt).toLocaleDateString("en-GB")}</strong>
              </div>
            </div>

            <div className="course-sidebar-meta course-sidebar-meta-progress">
              <div className="course-sidebar-meta-item">
                <span>Lessons Done</span>
                <strong>{progress.completedLessonIds.length}/{summary.totalLessons}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Materials Done</span>
                <strong>{progress.completedMaterialIds.length}/{summary.totalMaterials}</strong>
              </div>
            </div>

            {liveCurrentLesson ? (
              <div className="lesson-outline-current">
                <span className="course-sidebar-label">Current Lesson</span>
                <strong>{liveCurrentLesson.title}</strong>
                <small>{liveCurrentLesson.duration}</small>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="lesson-content-layout">
        <div>
          <div className="section-head">
            <h2>Lesson Materials</h2>
            <p>
              This page now supports live lesson progress, per-material completion,
              and automatic current-lesson movement.
            </p>
          </div>

          <LessonProgressPanel
            course={course}
            lesson={lesson}
            initialProgress={progress}
            previousLessonId={previousLessonId}
            nextLessonId={nextLessonId}
          />
        </div>

        <aside className="lesson-sidebar">
          <div className="lesson-sidebar-card">
            <p className="course-sidebar-label">Lesson List</p>

            <div className="lesson-sidebar-list">
              {course.lessons.map((item, index) => {
                const isCurrent = progress.currentLessonId === item.id;
                const isViewedLesson = item.id === lesson.id;
                const isDone = progress.completedLessonIds.includes(item.id);
                const completedMaterials = item.materials.filter((material) =>
                  progress.completedMaterialIds.includes(material.id)
                ).length;
                const lessonStatusLabel = isDone
                  ? "Done"
                  : isCurrent
                    ? "Current"
                    : "Open";

                return (
                  <a
                    key={item.id}
                    href={`/courses/${course.slug}/lessons/${item.id}`}
                    className={`lesson-sidebar-item ${isViewedLesson ? "lesson-sidebar-item-active" : ""} ${isCurrent ? "lesson-sidebar-item-current" : ""}`}
                  >
                    <div>
                      <strong>
                        Lesson {index + 1}: {item.title}
                      </strong>
                      <span>{item.duration}</span>
                      <em className="lesson-sidebar-progress-text">
                        {completedMaterials}/{item.materials.length} materials
                      </em>
                    </div>
                    <small
                      className={`lesson-sidebar-status ${isDone ? "lesson-sidebar-status-done" : isCurrent ? "lesson-sidebar-status-current" : ""}`}
                    >
                      {lessonStatusLabel}
                    </small>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
