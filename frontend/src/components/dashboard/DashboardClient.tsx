"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "@/data/courses";
import {
  getAllBrowserCourseProgress,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { LearnerCourseProgress } from "@/types/course.types";

type DashboardClientProps = {
  initialProgressList: LearnerCourseProgress[];
};

export default function DashboardClient({
  initialProgressList,
}: DashboardClientProps) {
  const [progressList, setProgressList] = useState<LearnerCourseProgress[]>(initialProgressList);

  useEffect(() => {
    const loadProgressList = () => {
      const nextProgressList = getAllBrowserCourseProgress(courses).filter(
        (progress) => progress.enrollmentStatus !== "not_started"
      ) as LearnerCourseProgress[];

      setProgressList(nextProgressList);
    };

    loadProgressList();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadProgressList();
    });

    return unsubscribe;
  }, []);

  const enrolledCourses = useMemo(
    () =>
      progressList
        .map((progress) => {
          const course = courses.find((item) => item.id === progress.courseId);

          if (!course) {
            return null;
          }

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
          const continueHref = progress.currentLessonId
            ? `/courses/${course.slug}/lessons/${progress.currentLessonId}`
            : course.lessons[0]
              ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
              : `/courses/${course.slug}`;

          return {
            ...progress,
            course,
            totalLessons,
            totalMaterials,
            lessonProgressPercent,
            materialProgressPercent,
            continueHref,
          };
        })
        .filter(Boolean),
    [progressList]
  );

  const combinedLessonPercent = enrolledCourses.length
    ? Math.round(
        enrolledCourses.reduce(
          (total, item) => total + item!.lessonProgressPercent,
          0
        ) / enrolledCourses.length
      )
    : 0;

  const combinedMaterialPercent = enrolledCourses.length
    ? Math.round(
        enrolledCourses.reduce(
          (total, item) => total + item!.materialProgressPercent,
          0
        ) / enrolledCourses.length
      )
    : 0;

  return (
    <div className="dashboard-page">
      <section className="courses-hero">
        <div className="courses-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Dashboard</span>
            </div>

            <span className="course-detail-badge">Learning Dashboard</span>

            <h1 className="courses-title">
              Track your active
              <br />
              learning progress
            </h1>

            <p className="courses-text">
              View enrolled courses, completion status, start access date,
              and your last learning activity in one place.
            </p>
          </div>

          <div className="courses-summary-card">
            <div className="courses-summary-item">
              <strong>{enrolledCourses.length}</strong>
              <span>Active Courses</span>
            </div>
            <div className="courses-summary-item">
              <strong>{combinedLessonPercent}%</strong>
              <span>Lesson Progress</span>
            </div>
            <div className="courses-summary-item">
              <strong>{combinedMaterialPercent}%</strong>
              <span>Material Progress</span>
            </div>
            <div className="courses-summary-item">
              <strong>
                {enrolledCourses.reduce(
                  (total, item) => total + item!.completedLessonIds.length,
                  0
                )}
              </strong>
              <span>Lessons Done</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-course-list">
        <div className="section-head">
          <h2>Your Courses</h2>
          <p>Enterprise-style progress visibility using the same client-side learner state.</p>
        </div>

        <div className="dashboard-grid">
          {enrolledCourses.map((item) => (
            <div key={item!.course.id} className="dashboard-card">
              <div className="dashboard-card-top">
                <span
                  className={`course-badge ${item!.course.accessType === "free" ? "course-badge-free" : ""}`}
                >
                  {item!.course.accessType === "free" ? "Free Course" : "Enrolled"}
                </span>
                <strong>{item!.lessonProgressPercent}%</strong>
              </div>

              <h3>{item!.course.title}</h3>
              <p>{item!.course.description}</p>

              <div className="dashboard-meta-grid">
                <div>
                  <span>Started</span>
                  <strong>{new Date(item!.startedAt).toLocaleDateString("en-GB")}</strong>
                </div>
                <div>
                  <span>Last Access</span>
                  <strong>{new Date(item!.lastAccessedAt).toLocaleDateString("en-GB")}</strong>
                </div>
                <div>
                  <span>Lessons</span>
                  <strong>{item!.completedLessonIds.length}/{item!.totalLessons}</strong>
                </div>
                <div>
                  <span>Materials</span>
                  <strong>{item!.completedMaterialIds.length}/{item!.totalMaterials}</strong>
                </div>
              </div>

              <div className="dashboard-progress-group">
                <div className="progress-inline-head">
                  <span>Lesson Completion</span>
                  <strong>{item!.lessonProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${item!.lessonProgressPercent}%` }}
                  />
                </div>
              </div>

              <div className="dashboard-progress-group">
                <div className="progress-inline-head">
                  <span>Material Completion</span>
                  <strong>{item!.materialProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill progress-bar-fill-material"
                    style={{ width: `${item!.materialProgressPercent}%` }}
                  />
                </div>
              </div>

              <a
                href={item!.continueHref}
                className="btn-primary dashboard-action"
              >
                Continue Learning
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
