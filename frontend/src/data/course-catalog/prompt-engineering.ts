import type { Course, CurriculumSection } from "@/types/course.types";
import { flattenCurriculum } from "./utils";

const promptCurriculum: CurriculumSection[] = [
  {
    id: "prompt-sec-1",
    title: "Prompt Foundations",
    summary:
      "Understand the building blocks of high-quality prompting and how prompts shape outputs.",
    order: 1,
    lessons: [
      {
        id: "pe-1",
        title: "Prompting Fundamentals",
        duration: "12 min",
        summary:
          "Understand how instructions, context, and constraints shape outputs.",
        order: 1,
        isPreview: true,
        materials: [
          {
            id: "pe-1-html",
            title: "HTML Lesson Content",
            type: "html",
            description: "Rich text lesson content rendered directly in the LMS.",
            htmlContent:
              "<h2>Prompting Fundamentals</h2><p>A strong prompt gives the model a clear task, useful context, and explicit output expectations.</p><ul><li>State the task clearly</li><li>Provide relevant context</li><li>Add constraints and success criteria</li></ul>",
          },
          {
            id: "pe-1-video",
            title: "Lesson Video",
            type: "video",
            description:
              "Short video explaining the fundamentals of prompting.",
            url: "https://example.com/videos/prompting-fundamentals",
            duration: "12 min",
          },
        ],
      },
      {
        id: "pe-2",
        title: "Role and Context Design",
        duration: "16 min",
        summary:
          "Guide the model by defining role, audience, and task clearly.",
        order: 2,
        materials: [
          {
            id: "pe-2-pdf",
            title: "Prompt Role Design PDF",
            type: "pdf",
            description: "Portable lesson handout for offline reading.",
            fileName: "prompt-role-context-design.pdf",
            url: "https://example.com/files/prompt-role-context-design.pdf",
          },
          {
            id: "pe-2-html",
            title: "Worked Examples",
            type: "html",
            description: "Extra examples for role framing and context quality.",
            htmlContent:
              "<h2>Role and Context Design</h2><p>Specify who the model should act as, who the audience is, and the constraints for the final answer.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "prompt-sec-2",
    title: "Reusable Patterns",
    summary:
      "Move from basic prompting to repeatable prompt structures for real work.",
    order: 2,
    lessons: [
      {
        id: "pe-3",
        title: "Prompt Patterns for Coding",
        duration: "21 min",
        summary:
          "Use reusable prompt patterns for refactoring, debugging, and reviews.",
        order: 3,
        materials: [
          {
            id: "pe-3-docx",
            title: "Coding Prompt Workbook",
            type: "docx",
            description: "Downloadable workbook with prompt templates.",
            fileName: "prompt-patterns-for-coding.docx",
            url: "https://example.com/files/prompt-patterns-for-coding.docx",
          },
          {
            id: "pe-3-video",
            title: "Live Coding Prompt Demo",
            type: "video",
            description:
              "Video demo for code review and debugging prompts.",
            url: "https://example.com/videos/prompt-patterns-for-coding",
            duration: "21 min",
          },
        ],
      },
      {
        id: "pe-4",
        title: "Prompt Iteration and Evaluation",
        duration: "19 min",
        summary:
          "Improve prompts by testing, comparing, and refining results.",
        order: 4,
        materials: [
          {
            id: "pe-4-html",
            title: "Iteration Framework",
            type: "html",
            description:
              "Framework for improving prompts using side-by-side comparisons.",
            htmlContent:
              "<h2>Prompt Iteration</h2><p>Iterate prompts by changing one variable at a time, comparing outputs, and recording what improved clarity and consistency.</p>",
          },
          {
            id: "pe-4-pdf",
            title: "Evaluation Checklist",
            type: "pdf",
            description: "Checklist for evaluating prompt quality.",
            fileName: "prompt-evaluation-checklist.pdf",
            url: "https://example.com/files/prompt-evaluation-checklist.pdf",
          },
        ],
      },
    ],
  },
];


export const promptEngineeringCourse: Course = {
  id: "3",
  slug: "prompt-engineering",
  title: "Prompt Engineering",
  price: null,
  accessType: "free",
  level: "Beginner",
  totalDuration: "1h 08m",
  shortDescription: "A free flagship course with mixed lesson materials.",
  description:
    "Learn effective prompting for productivity, content creation, and development workflows.",
  curriculum: promptCurriculum,
  lessons: flattenCurriculum(promptCurriculum),
};
