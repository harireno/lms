import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type DynamicLesson = {
  id: number;
  slug: string;
  title: string;
  order_no: number;
};

async function getCourse(slug: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const response = await fetch(baseUrl + "/api/courses/" + slug, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load course detail");
  }

  const result = await response.json();
  return result.data;
}

export default async function DynamicCourseDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <p className="mb-2 text-sm uppercase opacity-70">
        {course.access_type}
      </p>

      <h1 className="mb-4 text-3xl font-bold">
        {course.title}
      </h1>

      <p className="mb-8 opacity-80">
        {course.description}
      </p>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          Lessons
        </h2>

        {course.lessons.length === 0 ? (
          <p>Belum ada lesson untuk course ini.</p>
        ) : (
          <ol className="space-y-3">
            {course.lessons.map((lesson: DynamicLesson) => (
              <li
                key={lesson.id}
                className="rounded-lg border p-4"
              >
                <span className="text-sm opacity-70">
                  Lesson {lesson.order_no}
                </span>
                <h3 className="font-semibold">
                  {lesson.title}
                </h3>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}