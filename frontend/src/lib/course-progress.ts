import { getSeedCourseProgressByCourseId } from "@/data/course-progress";
import type { Course, LearnerCourseProgress, Lesson } from "@/types/course.types";

const STORAGE_KEY = "lmsstarter-course-progress";
const COURSE_PROGRESS_EVENT = "lmsstarter:course-progress-changed";

type StoredProgressMap = Record<string, LearnerCourseProgress>;
type CourseProgressChangedDetail = {
  courseId: string;
};
export type ActiveLearnerState = {
  course: Course;
  progress: LearnerCourseProgress;
  currentLesson: Lesson | null;
  lessonProgressPercent: number;
  materialProgressPercent: number;
};

function isBrowser() {
  return typeof window !== "undefined";
}

function getAllLessons(course: Course): Lesson[] {
  return course.lessons;
}

function getAllMaterialIds(course: Course) {
  return course.lessons.flatMap((lesson) => lesson.materials.map((material) => material.id));
}

function buildDefaultProgress(course: Course): LearnerCourseProgress {
  const seed = getSeedCourseProgressByCourseId(course.id);

  if (seed) {
    return {
      ...seed,
      completedMaterialIds: seed.completedMaterialIds ?? [],
    };
  }

  return {
    courseId: course.id,
    startedAt: new Date().toISOString(),
    lastAccessedAt: new Date().toISOString(),
    // currentLessonId: course.lessons[0]?.id ?? "",
    currentLessonId: "",
    completedLessonIds: [],
    completedMaterialIds: [],
    // enrollmentStatus: course.lessons.length ? "active" : "not_started",
    enrollmentStatus: "not_started",
  };
}

function readProgressMap(): StoredProgressMap {
  if (!isBrowser()) {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredProgressMap) : {};
  } catch {
    return {};
  }
}

function writeProgressMap(map: StoredProgressMap) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

function emitCourseProgressChanged(courseId: string) {
  if (!isBrowser()) {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<CourseProgressChangedDetail>(COURSE_PROGRESS_EVENT, {
      detail: { courseId },
    })
  );
}

function getNextLessonId(course: Course, lessonId: string) {
  const lessons = getAllLessons(course);
  const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (currentIndex === -1 || currentIndex >= lessons.length - 1) {
    return lessonId;
  }

  return lessons[currentIndex + 1].id;
}

function isLessonCompleteByMaterials(
  lesson: Lesson,
  completedMaterialIds: string[]
) {
  return lesson.materials.every((material) => completedMaterialIds.includes(material.id));
}

function normalizeProgress(
  course: Course,
  progress: LearnerCourseProgress
): LearnerCourseProgress {
  const validMaterialIds = new Set(getAllMaterialIds(course));
  const completedMaterialIds = progress.completedMaterialIds.filter((id) =>
    validMaterialIds.has(id)
  );

  const completedLessonIds = course.lessons
    .filter((lesson) => isLessonCompleteByMaterials(lesson, completedMaterialIds))
    .map((lesson) => lesson.id);

  const allLessonsCompleted = completedLessonIds.length === course.lessons.length;
  const hasStarted =
    progress.enrollmentStatus !== "not_started" ||
    completedLessonIds.length > 0 ||
    completedMaterialIds.length > 0; 

  return {
    ...progress,
    completedLessonIds,
    completedMaterialIds,
    // enrollmentStatus: allLessonsCompleted ? "completed" : "active",
    // currentLessonId: allLessonsCompleted
    enrollmentStatus: !hasStarted
      ? "not_started"
      : allLessonsCompleted
        ? "completed"
        : "active",
    currentLessonId: !hasStarted
      ? ""
      : allLessonsCompleted    
      ? course.lessons[course.lessons.length - 1]?.id ?? progress.currentLessonId
      : progress.currentLessonId || course.lessons[0]?.id || "",
  };
}


export function startBrowserCourseProgress(course: Course): LearnerCourseProgress {
  const existing = getOptionalBrowserCourseProgress(course);

  if (existing && existing.enrollmentStatus !== "not_started") {
    return existing;
  }

  const now = new Date().toISOString();

  return saveBrowserCourseProgress(course, {
    courseId: course.id,
    startedAt: now,
    lastAccessedAt: now,
    currentLessonId: course.lessons[0]?.id ?? "",
    completedLessonIds: [],
    completedMaterialIds: [],
    enrollmentStatus: "active",
  });
}

export function getBrowserCourseProgress(course: Course) {
  const map = readProgressMap();
  const stored = map[course.id];
  return normalizeProgress(course, stored ?? buildDefaultProgress(course));
}

export function getOptionalBrowserCourseProgress(course: Course) {
  const map = readProgressMap();
  const stored = map[course.id];
  const seed = getSeedCourseProgressByCourseId(course.id);

  if (!stored && !seed) {
    return null;
  }

  return normalizeProgress(course, stored ?? buildDefaultProgress(course));
}

export function saveBrowserCourseProgress(course: Course, progress: LearnerCourseProgress) {
  const map = readProgressMap();
  map[course.id] = normalizeProgress(course, progress);
  writeProgressMap(map);
  emitCourseProgressChanged(course.id);
  return map[course.id];
}

export function getAllBrowserCourseProgress(catalog: Course[]) {
  return catalog.map((course) => getBrowserCourseProgress(course));
}

export function getOptionalBrowserCourseProgressMap(catalog: Course[]) {
  return Object.fromEntries(
    catalog.map((course) => [course.id, getOptionalBrowserCourseProgress(course)])
  ) as Record<string, LearnerCourseProgress | null>;
}

export function getActiveLearnerState(catalog: Course[]): ActiveLearnerState | null {
  const progressList = getAllBrowserCourseProgress(catalog).filter(
    (item) => item.enrollmentStatus !== "not_started"
  );

  if (!progressList.length) {
    return null;
  }

  const activeProgress = progressList
    .slice()
    .sort(
      (a, b) =>
        new Date(b.lastAccessedAt).getTime() - new Date(a.lastAccessedAt).getTime()
    )[0];

  const course = catalog.find((item) => item.id === activeProgress.courseId);

  if (!course) {
    return null;
  }

  const totalLessons = course.lessons.length;
  const totalMaterials = course.lessons.reduce(
    (total, lesson) => total + lesson.materials.length,
    0
  );

  const lessonProgressPercent = totalLessons
    ? Math.round((activeProgress.completedLessonIds.length / totalLessons) * 100)
    : 0;

  const materialProgressPercent = totalMaterials
    ? Math.round((activeProgress.completedMaterialIds.length / totalMaterials) * 100)
    : 0;

  const currentLesson =
    course.lessons.find((lesson) => lesson.id === activeProgress.currentLessonId) ?? null;

  return {
    course,
    progress: activeProgress,
    currentLesson,
    lessonProgressPercent,
    materialProgressPercent,
  };
}

export function subscribeToCourseProgressChange(
  callback: (courseId?: string) => void,
  courseId?: string
) {
  if (!isBrowser()) {
    return () => undefined;
  }

  const handleCustomEvent = (event: Event) => {
    const customEvent = event as CustomEvent<CourseProgressChangedDetail>;
    const changedCourseId = customEvent.detail?.courseId;

    if (!courseId || changedCourseId === courseId) {
      callback(changedCourseId);
    }
  };

  const handleStorageEvent = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(courseId);
  };

  window.addEventListener(COURSE_PROGRESS_EVENT, handleCustomEvent as EventListener);
  window.addEventListener("storage", handleStorageEvent);

  return () => {
    window.removeEventListener(
      COURSE_PROGRESS_EVENT,
      handleCustomEvent as EventListener
    );
    window.removeEventListener("storage", handleStorageEvent);
  };
}

export function markMaterialCompleted(
  course: Course,
  progress: LearnerCourseProgress,
  lessonId: string,
  materialId: string
) {
  const completedMaterialIds = Array.from(
    new Set([...progress.completedMaterialIds, materialId])
  );

  const lesson = course.lessons.find((item) => item.id === lessonId);
  const lessonCompleted = lesson
    ? isLessonCompleteByMaterials(lesson, completedMaterialIds)
    : false;

  const nextCurrentLessonId = lessonCompleted
    ? getNextLessonId(course, lessonId)
    : progress.currentLessonId || lessonId;

  return normalizeProgress(course, {
    ...progress,
    completedMaterialIds,
    currentLessonId: nextCurrentLessonId,
    lastAccessedAt: new Date().toISOString(),
  });
}

export function markLessonCompleted(
  course: Course,
  progress: LearnerCourseProgress,
  lessonId: string
) {
  const lesson = course.lessons.find((item) => item.id === lessonId);

  if (!lesson) {
    return normalizeProgress(course, progress);
  }

  const lessonMaterialIds = lesson.materials.map((material) => material.id);
  const completedMaterialIds = Array.from(
    new Set([...progress.completedMaterialIds, ...lessonMaterialIds])
  );

  return normalizeProgress(course, {
    ...progress,
    completedMaterialIds,
    currentLessonId: getNextLessonId(course, lessonId),
    lastAccessedAt: new Date().toISOString(),
  });
}
