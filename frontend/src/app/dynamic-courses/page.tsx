import { DynamicCourseList } from "@/components/courses/DynamicCourseList";

export default function DynamicCoursesPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Dynamic Courses
      </h1>
      <p className="mb-6">
        Data di halaman ini dibaca dari PostgreSQL melalui API route.
      </p>
      <DynamicCourseList />
    </main>
  );
}