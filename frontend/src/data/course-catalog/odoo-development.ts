import type { Course, CurriculumSection } from "@/types/course.types";
import { flattenCurriculum } from "./utils";

const odooCurriculum: CurriculumSection[] = [
  {
    id: "odoo-sec-1",
    title: "Odoo Module Essentials",
    summary:
      "Learn how Odoo modules are structured and how backend pieces work together.",
    order: 1,
    lessons: [
      {
        id: "od-1",
        title: "Odoo Architecture Overview",
        duration: "14 min",
        summary:
          "Understand models, views, menus, actions, and module structure.",
        order: 1,
        materials: [
          {
            id: "od-1-html",
            title: "Architecture Notes",
            type: "html",
            description: "HTML reading material for Odoo architecture.",
            htmlContent:
              "<h2>Odoo Architecture</h2><p>Odoo modules are built around models, views, menus, security, and business actions.</p>",
          },
        ],
      },
      {
        id: "od-2",
        title: "Creating a Custom Module",
        duration: "25 min",
        summary: "Learn the basic folder structure and manifest setup.",
        order: 2,
        materials: [
          {
            id: "od-2-video",
            title: "Module Scaffold Walkthrough",
            type: "video",
            description: "Video walkthrough for creating a starter addon.",
            url: "https://example.com/videos/odoo-custom-module",
            duration: "25 min",
          },
        ],
      },
      {
        id: "od-3",
        title: "Models and Fields",
        duration: "28 min",
        summary: "Define business objects using Python models and fields.",
        order: 3,
        materials: [
          {
            id: "od-3-pdf",
            title: "Models and Fields Reference",
            type: "pdf",
            description: "Reference sheet for common model fields.",
            fileName: "odoo-models-fields-reference.pdf",
            url: "https://example.com/files/odoo-models-fields-reference.pdf",
          },
        ],
      },
      {
        id: "od-4",
        title: "Views and Menus",
        duration: "24 min",
        summary:
          "Create form, list, and search views, then link them to menus.",
        order: 4,
        materials: [
          {
            id: "od-4-docx",
            title: "View Practice Pack",
            type: "docx",
            description:
              "Practice instructions for creating views and menus.",
            fileName: "odoo-views-practice-pack.docx",
            url: "https://example.com/files/odoo-views-practice-pack.docx",
          },
        ],
      },
    ],
  },
];


export const odooDevelopmentCourse: Course = {
  id: "2",
  slug: "odoo-development",
  title: "Odoo Development",
  price: 89,
  accessType: "paid",
  level: "Beginner",
  totalDuration: "1h 31m",
  shortDescription: "Build real Odoo modules step by step.",
  description: "Build real modules and customize Odoo step by step.",
  curriculum: odooCurriculum,
  lessons: flattenCurriculum(odooCurriculum),
};
