"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "@/data/courses";
import {
  getActiveLearnerState,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { ActiveLearnerState } from "@/lib/course-progress";

export default function HeaderLearnerIndicator() {
  const [indicator, setIndicator] = useState<ActiveLearnerState | null>(null);

  useEffect(() => {
    const loadIndicator = () => {
      setIndicator(getActiveLearnerState(courses));
    };

    loadIndicator();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadIndicator();
    });

    return unsubscribe;
  }, []);

  const ringStyle = useMemo(() => {
    const percent = indicator?.lessonProgressPercent ?? 0;
    return {
      background: `conic-gradient(#2563eb 0% ${percent}%, #e5e7eb ${percent}% 100%)`,
    };
  }, [indicator]);

  if (!indicator || !indicator.currentLesson) {
    return (
      <a href="/courses" className="header-learner-indicator header-learner-indicator-empty">
        <div className="header-progress-ring header-progress-ring-empty">
          <div className="header-progress-ring-inner">
            <span>0%</span>
          </div>
        </div>
        <div className="header-learner-copy">
          <small>Learning</small>
          <strong>Start a course</strong>
          <span>Choose a course and begin your progress.</span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={`/courses/${indicator.course.slug}/lessons/${indicator.currentLesson.id}`}
      className="header-learner-indicator"
    >
      <div className="header-progress-ring" style={ringStyle}>
        <div className="header-progress-ring-inner">
          <span>{indicator.lessonProgressPercent}%</span>
        </div>
      </div>

      <div className="header-learner-copy">
        <small>Continue</small>
        <strong>{indicator.currentLesson.title}</strong>
        <span>
          {indicator.course.title} • {indicator.materialProgressPercent}% material progress
        </span>
      </div>
    </a>
  );
}
