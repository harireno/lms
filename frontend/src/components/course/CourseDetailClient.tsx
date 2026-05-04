"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { startBrowserCourseProgress } from "@/lib/course-progress";
import type { Course, LearnerCourseProgress } from "@/types/course.types";

type CourseDetailClientProps = {
  course: Course;
  courseImage: string;
  initialProgress: LearnerCourseProgress | null;
};

export default function CourseDetailClient({
  course,
  courseImage,
  initialProgress,
}: CourseDetailClientProps) {
  const router = useRouter();
  const { progress, summary } = useCourseProgress(course, initialProgress);
  const [isStarting, setIsStarting] = useState(false);

  const isFreeCourse = course.price === null;
  const hasStarted = progress.enrollmentStatus !== "not_started";
  const currentLesson = progress.currentLessonId
    ? course.lessons.find((lesson) => lesson.id === progress.currentLessonId) ?? null
    : null;
  const continueHref = currentLesson
    ? `/courses/${course.slug}/lessons/${currentLesson.id}`
    : course.lessons[0]
      ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
      : `/courses/${course.slug}`;
  const totalMaterialCount = summary.totalMaterials;
  const startHref = course.lessons[0]
    ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
    : `/courses/${course.slug}`;

  async function handleStartFreeCourse() {
    if (!isFreeCourse) {
      router.push(continueHref);
      return;
    }

    setIsStarting(true);

    try {
      const response = await fetch("/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseSlug: course.slug,
        }),
      });

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to enroll course");
      }

      const nextProgress = startBrowserCourseProgress(course);
      router.push(
        nextProgress.currentLessonId
          ? `/courses/${course.slug}/lessons/${nextProgress.currentLessonId}`
          : startHref
      );
    } catch (error) {
      console.error(error);
      setIsStarting(false);
    }
  }

  return (
    <div className="course-detail-page">
      <section className="course-detail-hero">
        <div className="course-detail-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/courses">Courses</a>
              <span>/</span>
              <span>{course.title}</span>
            </div>

            <span
              className={`course-detail-badge ${isFreeCourse ? "course-detail-badge-free" : ""}`}
            >
              {isFreeCourse ? "Free Course" : "Premium Course"}
            </span>

            <h1 className="course-detail-title">{course.title}</h1>

            <p className="course-detail-text">{course.description}</p>

            <div className="course-detail-stats">
              <div className="course-detail-stat">
                <strong>{course.curriculum.length}</strong>
                <span>Sections</span>
              </div>

              <div className="course-detail-stat">
                <strong>{course.totalDuration}</strong>
                <span>Total Duration</span>
              </div>

              <div className="course-detail-stat">
                <strong>{summary.lessonProgressPercent}%</strong>
                <span>Your Progress</span>
              </div>
            </div>

            <div className="course-detail-actions">
              <a href="#course-curriculum" className="btn-primary">
                View Curriculum
              </a>
              {/* <a href={continueHref} className="btn-secondary">
                {progress.completedLessonIds.length > 0 */}
              <button
                type="button"
                onClick={hasStarted ? () => router.push(continueHref) : handleStartFreeCourse}
                disabled={isStarting}
                className="btn-secondary"
              >
                {isStarting
                  ? "Starting..."
                  : progress.completedLessonIds.length > 0                          
                  ? "Continue Learning"
                  : isFreeCourse
                    ? "Start Free Course"
                    : "Browse Courses"}
              {/* </a> */}
              </button>
            </div>
          </div>

          <div className="course-detail-visual">
            <img
              src={courseImage}
              alt={course.title}
              className="course-detail-image"
            />
          </div>
        </div>
      </section>

      <section className="course-detail-content">
        <div>
          <section className="course-progress-panel">
            <div className="section-head">
              <h2>Your Learning Progress</h2>
              <p>
                Track live progress from the same client-side learner state used in lesson pages.
              </p>
            </div>

            <div className="progress-summary-grid">
              <div className="progress-summary-card">
                <span>Lesson Progress</span>
                <strong>{summary.lessonProgressPercent}%</strong>
                <small>
                  {progress.completedLessonIds.length} of {summary.totalLessons} lessons completed
                </small>
              </div>
              <div className="progress-summary-card">
                <span>Material Progress</span>
                <strong>{summary.materialProgressPercent}%</strong>
                <small>
                  {progress.completedMaterialIds.length} of {summary.totalMaterials} materials completed
                </small>
              </div>
              <div className="progress-summary-card">
                <span>Last Access</span>
                <strong>{new Date(progress.lastAccessedAt).toLocaleDateString("en-GB")}</strong>
                <small>Most recent learning activity on this browser</small>
              </div>
            </div>

            <div className="progress-dual-shell">
              <div className="progress-dual-item">
                <div className="progress-inline-head">
                  <span>Lesson Completion</span>
                  <strong>{summary.lessonProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${summary.lessonProgressPercent}%` }}
                  />
                </div>
              </div>

              <div className="progress-dual-item">
                <div className="progress-inline-head">
                  <span>Material Completion</span>
                  <strong>{summary.materialProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill progress-bar-fill-material"
                    style={{ width: `${summary.materialProgressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {currentLesson ? (
              <div className="current-lesson-card">
                <p className="course-sidebar-label">Current Lesson</p>
                <h3>{currentLesson.title}</h3>
                <p>{currentLesson.summary}</p>
                <div className="current-lesson-meta">
                  <span>{currentLesson.duration}</span>
                  <span>{currentLesson.materials.length} materials</span>
                </div>
                <a
                  href={`/courses/${course.slug}/lessons/${currentLesson.id}`}
                  className="btn-primary current-lesson-button"
                >
                  Continue Learning
                </a>
              </div>
            ) : null}
          </section>

          <div className="section-head">
            <h2 id="course-curriculum">Course Curriculum</h2>
            <p>
              Structured sections, lessons, and materials designed so this
              course can evolve into a full LMS content engine.
            </p>
          </div>

          <div className="curriculum-section-list">
            {course.curriculum.map((section, sectionIndex) => (
              <div key={section.id} className="curriculum-section-card">
                <div className="curriculum-section-head">
                  <div>
                    <span className="lesson-number">Section {sectionIndex + 1}</span>
                    <h3>{section.title}</h3>
                    <p>{section.summary}</p>
                  </div>
                  <div className="curriculum-section-count">
                    {section.lessons.length} lessons
                  </div>
                </div>

                <div className="lesson-grid">
                  {section.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = progress.completedLessonIds.includes(lesson.id);
                    const isCurrentLesson = progress.currentLessonId === lesson.id;
                    const completedMaterials = lesson.materials.filter((material) =>
                      progress.completedMaterialIds.includes(material.id)
                    ).length;
                    const lessonMaterialPercent = lesson.materials.length
                      ? Math.round((completedMaterials / lesson.materials.length) * 100)
                      : 0;

                    return (
                      <div
                        key={lesson.id}
                        className={`lesson-card ${isCurrentLesson ? "lesson-card-current" : ""}`}
                      >
                        <div className="lesson-card-top">
                          <span className="lesson-number">
                            Lesson {lessonIndex + 1}
                          </span>
                          <span className="lesson-duration">{lesson.duration}</span>
                        </div>

                        <h3>{lesson.title}</h3>
                        <p>{lesson.summary}</p>

                        <div className="lesson-status-row">
                          <span
                            className={`lesson-status-pill ${isCompleted ? "lesson-status-complete" : ""}`}
                          >
                            {isCompleted
                              ? "Completed"
                              : isCurrentLesson
                                ? "In Progress"
                                : "Not Started"}
                          </span>
                          {lesson.isPreview ? (
                            <span className="lesson-status-pill lesson-status-preview">
                              Preview
                            </span>
                          ) : null}
                        </div>

                        <div className="lesson-progress-mini">
                          <div className="progress-inline-head">
                            <span>Materials</span>
                            <strong>{lessonMaterialPercent}%</strong>
                          </div>
                          <div className="progress-bar-shell progress-bar-shell-tight">
                            <div
                              className="progress-bar-fill progress-bar-fill-material"
                              style={{ width: `${lessonMaterialPercent}%` }}
                            />
                          </div>
                          <small className="lesson-progress-mini-text">
                            {completedMaterials}/{lesson.materials.length} materials completed
                          </small>
                        </div>

                        <div className="lesson-material-inline">
                          {lesson.materials.map((material) => (
                            <span key={material.id} className="material-chip">
                              {material.type.toUpperCase()}
                            </span>
                          ))}
                        </div>

                        <a
                          href={`/courses/${course.slug}/lessons/${lesson.id}`}
                          className="lesson-open-link"
                        >
                          Open Lesson
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="section-head section-head-spaced">
            <h2 id="course-materials">Lesson Materials</h2>
            <p>
              Each lesson can contain rich HTML content, downloadable PDF or
              DOCX files, and video resources.
            </p>
          </div>

          <div className="material-catalog">
            {course.lessons.map((lesson) => (
              <div key={lesson.id} className="material-lesson-card">
                <div className="material-lesson-head">
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.summary}</p>
                  </div>
                  <span className="lesson-duration">{lesson.duration}</span>
                </div>

                <div className="material-list">
                  {lesson.materials.map((material) => {
                    const isCompleted = progress.completedMaterialIds.includes(material.id);

                    return (
                      <div
                        key={material.id}
                        className={`material-item ${isCompleted ? "material-item-completed" : ""}`}
                      >
                        <div className="material-item-top">
                          <span className="material-chip">
                            {material.type.toUpperCase()}
                          </span>
                          <strong>{material.title}</strong>
                          <span
                            className={`lesson-status-pill material-status-pill ${isCompleted ? "lesson-status-complete" : ""}`}
                          >
                            {isCompleted ? "Completed" : "Open"}
                          </span>
                        </div>
                        <p>{material.description}</p>

                        {material.type === "html" && material.htmlContent ? (
                          <div
                            className="material-html-preview"
                            dangerouslySetInnerHTML={{ __html: material.htmlContent }}
                          />
                        ) : null}

                        {material.fileName ? (
                          <small className="material-file-name">
                            File: {material.fileName}
                          </small>
                        ) : null}

                        {material.url ? (
                          <a href={material.url} className="material-link">
                            Open Resource
                          </a>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="course-sidebar">
          <div className="course-sidebar-card">
            <p className="course-sidebar-label">
              {isFreeCourse ? "Course Access" : "Course Price"}
            </p>
            <div
              className={`course-sidebar-price ${isFreeCourse ? "course-sidebar-price-free" : ""}`}
            >
              {isFreeCourse ? "Free" : `$${course.price}`}
            </div>

            <p className="course-sidebar-copy">
              {isFreeCourse
                ? "This course is available for free and can be accessed directly. Perfect for starting the next phase of our LMS content structure."
                : "Get access to all lessons in this course and start learning at your own pace."}
            </p>

            <div className="course-sidebar-meta">
              <div className="course-sidebar-meta-item">
                <span>Level</span>
                <strong>{course.level}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Total Lessons</span>
                <strong>{course.lessons.length}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Materials</span>
                <strong>{totalMaterialCount}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Total Duration</span>
                <strong>{course.totalDuration}</strong>
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

            {/* <a href={continueHref} className="btn-primary course-sidebar-btn">
              {progress.completedLessonIds.length > 0 ? "Continue Learning" : isFreeCourse ? "Access Now" : "Enroll Now"}
            </a> */}
            <button
              type="button"
              onClick={hasStarted ? () => router.push(continueHref) : handleStartFreeCourse}
              disabled={isStarting}
              className="btn-primary course-sidebar-btn"
            >
              {isStarting
                ? "Starting..."
                : progress.completedLessonIds.length > 0
                  ? "Continue Learning"
                  : isFreeCourse
                    ? "Access Now"
                    : "Enroll Now"}
            </button>            

            <a href="/courses" className="btn-secondary course-sidebar-btn">
              View All Courses
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
