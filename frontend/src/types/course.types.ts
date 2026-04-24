export type MaterialType = "html" | "pdf" | "docx" | "video";

export type LessonMaterial = {
  id: string;
  title: string;
  type: MaterialType;
  description: string;
  url?: string;
  htmlContent?: string;
  fileName?: string;
  duration?: string;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  order: number;
  isPreview?: boolean;
  materials: LessonMaterial[];
};

export type CurriculumSection = {
  id: string;
  title: string;
  summary: string;
  order: number;
  lessons: Lesson[];
};

export type CourseAccessType = "free" | "paid";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  slug: string;
  price: number | null;
  accessType: CourseAccessType;
  description?: string;
  shortDescription?: string;
  level: CourseLevel;
  totalDuration: string;
  lessons: Lesson[];
  curriculum: CurriculumSection[];
};

export type LearnerCourseProgress = {
  courseId: string;
  startedAt: string;
  lastAccessedAt: string;
  currentLessonId: string;
  completedLessonIds: string[];
  completedMaterialIds: string[];
  enrollmentStatus: "active" | "completed" | "not_started";
};
