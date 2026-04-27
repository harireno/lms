import type { Course } from "@/types/course.types";
import { pythonBasicCourse } from "./course-catalog/python-basic";
import { odooDevelopmentCourse } from "./course-catalog/odoo-development";
import { promptEngineeringCourse } from "./course-catalog/prompt-engineering";
import { fleetoneAcademyCourse } from "./course-catalog/fleetone-academy";
import { fromLocalhostToLiveLmsCourse } from "./course-catalog/from-localhost-to-live-lms";
import { fromStaticLmsToDynamicLmsCourse } from "./course-catalog/from-static-lms-to-dynamic-lms";

export function getCourseImageBySlug(slug: string) {
  if (slug === "python-basic") {
    return "/images/course-python-card.png";
  }

  if (slug === "odoo-development") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "fleetone-academy") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "from-localhost-to-live-lms") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "from-static-lms-to-dynamic-lms") {
    return "/images/course-prompt-card.png";
  }

  return "/images/course-prompt-card.png";
}

export const courses: Course[] = [
  pythonBasicCourse,
  odooDevelopmentCourse,
  promptEngineeringCourse,
  fleetoneAcademyCourse,
  fromLocalhostToLiveLmsCourse,
  fromStaticLmsToDynamicLmsCourse,
];
