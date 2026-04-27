import type { CurriculumSection, Lesson } from "@/types/course.types";

export function flattenCurriculum(curriculum: CurriculumSection[]): Lesson[] {
  return curriculum
    .slice()
    .sort((a, b) => a.order - b.order)
    .flatMap((section) =>
      section.lessons.slice().sort((a, b) => a.order - b.order)
    );
}
