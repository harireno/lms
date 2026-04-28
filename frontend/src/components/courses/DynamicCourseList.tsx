"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DynamicCourse,
  fetchDynamicCourses,
} from "@/lib/course-api";

<Link
  href={"/dynamic-courses/" + course.slug}
  className="mt-4 inline-block text-sm font-semibold underline"
>
  Lihat detail course
</Link>

export function DynamicCourseList() {
  const [courses, setCourses] = useState<DynamicCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await fetchDynamicCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Courses belum bisa dimuat dari database.");
      } finally {
        setIsLoading(false);
      }
    }

    loadCourses();
  }, []);

  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (courses.length === 0) {
    return <p>Belum ada course dari database.</p>;
  }

  return (
    <div className="grid gap-4">
      {courses.map((course) => (
        <article
          key={course.id}
          className="rounded-lg border p-4"
        >
          <h3 className="text-lg font-semibold">
            {course.title}
          </h3>
          <p className="text-sm opacity-80">
            {course.description}
          </p>
          <p className="mt-2 text-xs uppercase">
            {course.access_type}
          </p>
        </article>
      ))}
    </div>
  );
}