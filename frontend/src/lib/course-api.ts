export type DynamicCourse = {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  access_type: string;
  is_published: boolean;
};

export async function fetchDynamicCourses(): Promise<DynamicCourse[]> {
  const response = await fetch("/api/courses", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const result = await response.json();

  return result.data ?? [];
}