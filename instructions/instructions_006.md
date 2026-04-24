Step selanjutnya agar home page “hidup” adalah:

1. Featured Courses jangan hardcoded statis lagi
2. data course disimpan di file terpisah
3. card course dirender dengan loop
4. ada tombol yang bisa diklik
5. ada link ke halaman detail course

Saya sarankan kerjakan dulu versi paling aman ini:
home page statis → dynamic data lokal → klik card/tombol → route detail

Saya pakai asumsi struktur project kamu seperti ini:

```text
frontend/
  app/
    page.tsx
    layout.tsx
  public/
  package.json
```

Kalau sekarang file home page kamu bukan `frontend/app/page.tsx`, tinggal sesuaikan path-nya.

Berikut step yang jelas.

==================================================
STEP 1 — Buat file data course
==============================

Buat file baru:

`frontend/data/courses.ts`

Isi:

```ts
export type Course = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  price: number;
  level: string;
  lessons: number;
};

export const featuredCourses: Course[] = [
  {
    id: 1,
    slug: "python-basic",
    title: "Python Basic",
    shortDescription: "Belajar Python dari nol sampai paham dasar pemrograman.",
    price: 49000,
    level: "Beginner",
    lessons: 12,
  },
  {
    id: 2,
    slug: "odoo-development",
    title: "Odoo Development",
    shortDescription: "Pengenalan pengembangan module Odoo step by step.",
    price: 89000,
    level: "Intermediate",
    lessons: 18,
  },
  {
    id: 3,
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    shortDescription: "Belajar menyusun prompt yang rapi, efektif, dan reusable.",
    price: 129000,
    level: "All Levels",
    lessons: 10,
  },
];
```

==================================================
STEP 2 — Ubah home page supaya render data dinamis
==================================================

Ubah file:

`frontend/app/page.tsx`

Kalau kamu mau langsung replace isi file, pakai versi ini:

```tsx
import Link from "next/link";
import { featuredCourses } from "../data/courses";

export default function HomePage() {
  return (
    <main>
      <header style={{ padding: "24px", borderBottom: "1px solid #ddd" }}>
        <h1>LMS Starter</h1>
      </header>

      <section style={{ padding: "48px 24px" }}>
        <h2>Welcome to LMS Starter</h2>
        <p>Build your LMS step by step.</p>
      </section>

      <section style={{ padding: "24px" }}>
        <h2>Featured Courses</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {featuredCourses.map((course) => (
            <article
              key={course.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <h3>{course.title}</h3>
              <p>{course.shortDescription}</p>
              <p>
                <strong>Level:</strong> {course.level}
              </p>
              <p>
                <strong>Lessons:</strong> {course.lessons}
              </p>
              <p>
                <strong>Price:</strong> Rp {course.price.toLocaleString("id-ID")}
              </p>

              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <Link
                  href={`/courses/${course.slug}`}
                  style={{
                    padding: "10px 14px",
                    border: "1px solid #111",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  View Detail
                </Link>

                <button
                  type="button"
                  onClick={() => alert(`Enroll clicked: ${course.title}`)}
                  style={{
                    padding: "10px 14px",
                    border: "1px solid #111",
                    borderRadius: "8px",
                    background: "#111",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Enroll
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px", borderTop: "1px solid #ddd", marginTop: "32px" }}>
        © LMS Starter
      </footer>
    </main>
  );
}
```

Dengan langkah ini, home page sudah mulai hidup karena:

* section Featured Courses diambil dari data
* card muncul otomatis dari array
* tombol Enroll bisa diklik
* tombol View Detail bisa pindah halaman

==================================================
STEP 3 — Buat halaman detail course
===================================

Buat folder dan file baru:

`frontend/app/courses/[slug]/page.tsx`

Isi:

```tsx
import { notFound } from "next/navigation";
import { featuredCourses } from "../../../data/courses";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function CourseDetailPage({ params }: PageProps) {
  const course = featuredCourses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>{course.title}</h1>
      <p>{course.shortDescription}</p>

      <div style={{ marginTop: "16px" }}>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>
          <strong>Lessons:</strong> {course.lessons}
        </p>
        <p>
          <strong>Price:</strong> Rp {course.price.toLocaleString("id-ID")}
        </p>
      </div>
    </main>
  );
}
```

Sekarang saat klik:

* `/courses/python-basic`
* `/courses/odoo-development`
* `/courses/prompt-engineering`

halaman detail sudah terbuka.

==================================================
STEP 4 — Kalau kamu mau patch diff, ini versi diff-nya
======================================================

File baru:
`frontend/data/courses.ts`

```diff
--- /dev/null
+++ frontend/data/courses.ts
@@ -0,0 +1,31 @@
+export type Course = {
+  id: number;
+  slug: string;
+  title: string;
+  shortDescription: string;
+  price: number;
+  level: string;
+  lessons: number;
+};
+
+export const featuredCourses: Course[] = [
+  {
+    id: 1,
+    slug: "python-basic",
+    title: "Python Basic",
+    shortDescription: "Belajar Python dari nol sampai paham dasar pemrograman.",
+    price: 49000,
+    level: "Beginner",
+    lessons: 12,
+  },
+  {
+    id: 2,
+    slug: "odoo-development",
+    title: "Odoo Development",
+    shortDescription: "Pengenalan pengembangan module Odoo step by step.",
+    price: 89000,
+    level: "Intermediate",
+    lessons: 18,
+  },
+  {
+    id: 3,
+    slug: "prompt-engineering",
+    title: "Prompt Engineering",
+    shortDescription: "Belajar menyusun prompt yang rapi, efektif, dan reusable.",
+    price: 129000,
+    level: "All Levels",
+    lessons: 10,
+  },
+];
```

Ubah file:
`frontend/app/page.tsx`

```diff
--- frontend/app/page.tsx
+++ frontend/app/page.tsx
@@ -1,999 +1,67 @@
+import Link from "next/link";
+import { featuredCourses } from "../data/courses";
+
 export default function HomePage() {
   return (
-    <main>
-      <header>
-        <h1>LMS Starter</h1>
-      </header>
-
-      <section>
-        <h2>Welcome to LMS Starter</h2>
-        <p>Build your LMS step by step.</p>
-      </section>
-
-      <section>
-        <h2>Featured Courses</h2>
-      </section>
-
-      <footer>© LMS Starter</footer>
+    <main>
+      <header style={{ padding: "24px", borderBottom: "1px solid #ddd" }}>
+        <h1>LMS Starter</h1>
+      </header>
+
+      <section style={{ padding: "48px 24px" }}>
+        <h2>Welcome to LMS Starter</h2>
+        <p>Build your LMS step by step.</p>
+      </section>
+
+      <section style={{ padding: "24px" }}>
+        <h2>Featured Courses</h2>
+
+        <div
+          style={{
+            display: "grid",
+            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
+            gap: "16px",
+            marginTop: "16px",
+          }}
+        >
+          {featuredCourses.map((course) => (
+            <article
+              key={course.id}
+              style={{
+                border: "1px solid #ddd",
+                borderRadius: "12px",
+                padding: "16px",
+              }}
+            >
+              <h3>{course.title}</h3>
+              <p>{course.shortDescription}</p>
+              <p><strong>Level:</strong> {course.level}</p>
+              <p><strong>Lessons:</strong> {course.lessons}</p>
+              <p><strong>Price:</strong> Rp {course.price.toLocaleString("id-ID")}</p>
+
+              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
+                <Link
+                  href={`/courses/${course.slug}`}
+                  style={{
+                    padding: "10px 14px",
+                    border: "1px solid #111",
+                    borderRadius: "8px",
+                    textDecoration: "none",
+                  }}
+                >
+                  View Detail
+                </Link>
+
+                <button
+                  type="button"
+                  onClick={() => alert(`Enroll clicked: ${course.title}`)}
+                  style={{
+                    padding: "10px 14px",
+                    border: "1px solid #111",
+                    borderRadius: "8px",
+                    background: "#111",
+                    color: "#fff",
+                    cursor: "pointer",
+                  }}
+                >
+                  Enroll
+                </button>
+              </div>
+            </article>
+          ))}
+        </div>
+      </section>
+
+      <footer style={{ padding: "24px", borderTop: "1px solid #ddd", marginTop: "32px" }}>
+        © LMS Starter
+      </footer>
     </main>
   );
 }
```

File baru:
`frontend/app/courses/[slug]/page.tsx`

```diff
--- /dev/null
+++ frontend/app/courses/[slug]/page.tsx
@@ -0,0 +1,29 @@
+import { notFound } from "next/navigation";
+import { featuredCourses } from "../../../data/courses";
+
+type PageProps = {
+  params: {
+    slug: string;
+  };
+};
+
+export default function CourseDetailPage({ params }: PageProps) {
+  const course = featuredCourses.find((item) => item.slug === params.slug);
+
+  if (!course) {
+    notFound();
+  }
+
+  return (
+    <main style={{ padding: "24px" }}>
+      <h1>{course.title}</h1>
+      <p>{course.shortDescription}</p>
+
+      <div style={{ marginTop: "16px" }}>
+        <p><strong>Level:</strong> {course.level}</p>
+        <p><strong>Lessons:</strong> {course.lessons}</p>
+        <p><strong>Price:</strong> Rp {course.price.toLocaleString("id-ID")}</p>
+      </div>
+    </main>
+  );
+}
```

==================================================
STEP 5 — Hasil setelah patch ini
================================

Home page kamu akan berubah dari “cuma tampil” menjadi:

* Featured Courses tampil dari data
* jumlah course gampang ditambah
* card bisa diklik
* detail page sudah ada
* ada interaksi tombol

Jadi ini sudah masuk kategori “home page hidup” versi awal.

==================================================
STEP 6 — Setelah ini langkah berikutnya yang paling masuk akal
==============================================================

Sesudah langkah di atas berhasil, lanjut ke urutan ini:

1. pecah UI jadi komponen

   * `frontend/components/Header.tsx`
   * `frontend/components/Hero.tsx`
   * `frontend/components/CourseCard.tsx`
   * `frontend/components/Footer.tsx`

2. tambah search box di home

   * file: `frontend/app/page.tsx`

3. pindahkan data dari file lokal ke API route

   * `frontend/app/api/courses/route.ts`

4. sambungkan ke database

   * PostgreSQL + ORM

5. buat login/register

   * `frontend/app/login/page.tsx`
   * `frontend/app/register/page.tsx`

Kalau kamu mau, saya bisa lanjutkan step berikutnya dalam format yang sama, yaitu:
“pecah home page menjadi komponen-komponen lengkap dengan nama file, folder, dan patch diff.”
