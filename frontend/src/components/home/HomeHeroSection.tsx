"use client";

import { useEffect, useState } from "react";
import { courses } from "@/data/courses";
import {
  getActiveLearnerState,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { ActiveLearnerState } from "@/lib/course-progress";

export default function HomeHeroSection() {
  const [activeLearner, setActiveLearner] = useState<ActiveLearnerState | null>(null);

  useEffect(() => {
    const loadActiveLearner = () => {
      setActiveLearner(getActiveLearnerState(courses));
    };

    loadActiveLearner();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadActiveLearner();
    });

    return unsubscribe;
  }, []);

  const primaryHref =
    activeLearner && activeLearner.currentLesson
      ? `/courses/${activeLearner.course.slug}/lessons/${activeLearner.currentLesson.id}`
      : "/courses";

  const primaryLabel = activeLearner
    ? `Continue ${activeLearner.course.title}`
    : "Explore Courses";

  const secondaryHref =
    activeLearner && activeLearner.currentLesson
      ? `/courses/${activeLearner.course.slug}`
      : "/about";

  const secondaryLabel =
    activeLearner && activeLearner.currentLesson
      ? activeLearner.currentLesson.title
      : "Learn More";

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div>
          <span className="hero-badge">
            {activeLearner ? "Your Learning Momentum" : "247 OpenSource"}
          </span>

          <h1 className="hero-title">
            {activeLearner
              ? `Continue ${activeLearner.course.title}.`
              : "Learn Real Skills."}
            <br />
            {activeLearner ? "Keep Building Consistently." : "Build Real Projects."}
          </h1>

          <p className="hero-text">
            {activeLearner && activeLearner.currentLesson
              ? `You are currently on "${activeLearner.currentLesson.title}" in ${activeLearner.course.title}. Jump back in and keep your learning streak moving.`
              : "Master Python, Odoo Development, and Prompt Engineering through structured open-source, project-based courses."}
          </p>

          {activeLearner ? (
            <div className="hero-learner-panel">
              <div className="hero-learner-panel-head">
                <strong>{activeLearner.course.title}</strong>
                <span>{activeLearner.lessonProgressPercent}% complete</span>
              </div>

              <div className="progress-bar-shell hero-progress-shell">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${activeLearner.lessonProgressPercent}%` }}
                />
              </div>

              <div className="hero-learner-meta">
                <div className="hero-learner-meta-item">
                  <small>Current Lesson</small>
                  <strong>{activeLearner.currentLesson?.title ?? "Ready to continue"}</strong>
                </div>
                <div className="hero-learner-meta-item">
                  <small>Material Progress</small>
                  <strong>{activeLearner.materialProgressPercent}%</strong>
                </div>
                <div className="hero-learner-meta-item">
                  <small>Last Access</small>
                  <strong>
                    {new Date(activeLearner.progress.lastAccessedAt).toLocaleDateString("en-GB")}
                  </strong>
                </div>
              </div>
            </div>
          ) : null}

          <div className="hero-actions">
            <a href={primaryHref} className="btn-primary">
              {primaryLabel}
            </a>

            <a href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-lms-student.png"
            alt="Learning platform"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
