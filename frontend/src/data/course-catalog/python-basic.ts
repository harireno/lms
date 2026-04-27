import type { Course, CurriculumSection } from "@/types/course.types";
import { flattenCurriculum } from "./utils";

const pythonCurriculum: CurriculumSection[] = [
  {
    id: "python-sec-1",
    title: "Python Foundations",
    summary:
      "Build a practical foundation in syntax, variables, loops, and reusable logic.",
    order: 1,
    lessons: [
      {
        id: "py-1",
        title: "Introduction to Python",
        duration: "10 min",
        summary: "Understand what Python is and why it is widely used.",
        order: 1,
        materials: [
          {
            id: "py-1-html",
            title: "Lesson Notes",
            type: "html",
            description: "Readable HTML notes for quick review.",
            htmlContent:
              "<h2>Introduction to Python</h2><p>Python is popular because it is readable, productive, and widely used for automation, backend apps, and data work.</p>",
          },
          {
            id: "py-1-video",
            title: "Intro Video",
            type: "video",
            description: "Short walkthrough for the lesson.",
            url: "https://example.com/videos/python-introduction",
            duration: "10 min",
          },
        ],
      },
      {
        id: "py-2",
        title: "Variables and Data Types",
        duration: "18 min",
        summary:
          "Learn strings, numbers, booleans, and basic variable usage.",
        order: 2,
        materials: [
          {
            id: "py-2-html",
            title: "Variables Cheatsheet",
            type: "html",
            description: "Quick HTML guide for variables and types.",
            htmlContent:
              "<h2>Variables and Data Types</h2><p>Use variables to store values and basic data types such as strings, integers, floats, and booleans.</p>",
          },
        ],
      },
      {
        id: "py-3",
        title: "Conditionals and Loops",
        duration: "22 min",
        summary: "Use if statements, for loops, and while loops effectively.",
        order: 3,
        materials: [
          {
            id: "py-3-pdf",
            title: "Practice Worksheet",
            type: "pdf",
            description: "PDF worksheet for conditionals and loops.",
            fileName: "python-conditionals-loops.pdf",
            url: "https://example.com/files/python-conditionals-loops.pdf",
          },
        ],
      },
      {
        id: "py-4",
        title: "Functions",
        duration: "20 min",
        summary:
          "Create reusable logic with function parameters and return values.",
        order: 4,
        materials: [
          {
            id: "py-4-docx",
            title: "Function Exercises",
            type: "docx",
            description: "Downloadable exercise sheet.",
            fileName: "python-functions-exercises.docx",
            url: "https://example.com/files/python-functions-exercises.docx",
          },
        ],
      },
    ],
  },
];


export const pythonBasicCourse: Course = {
  id: "1",
  slug: "python-basic",
  title: "Python Basic",
  price: 49,
  accessType: "paid",
  level: "Beginner",
  totalDuration: "1h 10m",
  shortDescription: "Python fundamentals for new developers.",
  description: "Learn Python fundamentals from zero to solid foundation.",
  curriculum: pythonCurriculum,
  lessons: flattenCurriculum(pythonCurriculum),
};
