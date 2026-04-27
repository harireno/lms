import type { Course, CurriculumSection } from "@/types/course.types";
import { flattenCurriculum } from "./utils";

const staticToDynamicCurriculum: CurriculumSection[] = [
  {
    id: "s2d-sec-1",
    title: "Module 1 — Database Mindset & Architecture",
    summary:
      "Memahami kenapa LMS perlu database, kenapa tidak langsung menulis ke database Odoo, dan bagaimana arsitektur enterprise-grade dibangun bertahap.",
    order: 1,
    lessons: [
      {
        id: "s2d-1",
        title: "Kenapa LMS Butuh Database",
        duration: "18 min",
        summary:
          "Memahami perbedaan LMS static dan dynamic, serta kenapa login, member area, enrollment, dan progress membutuhkan database.",
        order: 1,
        materials: [
          {
            id: "s2d-1-html",
            title: "Kenapa LMS Butuh Database",
            type: "html",
            description:
              "Pengantar transformasi LMS dari static content menjadi dynamic learning platform.",
            htmlContent: `
<h2>Kenapa LMS Butuh Database</h2>
<p>Sampai tahap ini, LMS kita sudah berhasil berjalan di local, GitHub, dan VPS. Website sudah bisa diakses online dengan lancar. Ini adalah pencapaian besar, karena aplikasi sudah melewati tahap frontend static menuju deployment production.</p>

<p>Namun, LMS yang belum memakai database masih memiliki batas penting: sistem belum benar-benar mengenal user, belum bisa menyimpan progress belajar, belum bisa membedakan course yang dimiliki setiap member, dan belum bisa membangun pengalaman belajar yang personal.</p>

<h3>Apa arti LMS static?</h3>
<p>LMS static adalah LMS yang kontennya sudah tersedia di source code. Course, lesson, dan materi bisa ditampilkan, tetapi data learner belum benar-benar hidup di database.</p>

<p>Contohnya:</p>
<ul>
  <li>course ditulis di file TypeScript,</li>
  <li>lesson tampil dari data lokal,</li>
  <li>progress masih dummy atau simulasi,</li>
  <li>login belum benar-benar menyimpan session user dari database.</li>
</ul>

<h3>Apa arti LMS dynamic?</h3>
<p>LMS dynamic adalah LMS yang mulai menyimpan dan membaca data dari database. Artinya sistem bisa mengenali user, menyimpan enrollment, mencatat lesson yang sudah selesai, dan menampilkan progress yang berbeda untuk setiap member.</p>

<h3>Fitur yang membutuhkan database</h3>
<ul>
  <li><strong>Register dan login</strong> — agar user punya akun.</li>
  <li><strong>Member area</strong> — agar setiap user punya dashboard sendiri.</li>
  <li><strong>Course assignment</strong> — agar course free bisa otomatis diberikan kepada member.</li>
  <li><strong>Progress tracking</strong> — agar sistem tahu lesson mana yang sudah selesai.</li>
  <li><strong>Continue learning</strong> — agar user bisa lanjut dari lesson terakhir.</li>
  <li><strong>Payment dan order</strong> — nanti untuk course berbayar.</li>
</ul>

<h3>Mindset enterprise-grade</h3>
<p>Kita tidak akan langsung membuat semua fitur besar sekaligus. Pondasi enterprise-grade dibangun bertahap:</p>

<pre><code>Login → Member Area → Enrollment → Progress → Payment → Odoo Integration</code></pre>

<p>Dengan cara ini, LMS tetap stabil, mudah diuji, dan tidak merusak aplikasi yang sudah online.</p>

<h3>Kesimpulan lesson ini</h3>
<p>Database adalah langkah berikutnya agar LMS berubah dari website course biasa menjadi platform belajar yang benar-benar mengenal member dan menyimpan aktivitas belajar.</p>
`,
          },
        ],
      },
      {
        id: "s2d-2",
        title: "Arsitektur Database LMS Enterprise",
        duration: "22 min",
        summary:
          "Mendesain arsitektur awal Next.js LMS dengan database PostgreSQL sendiri sebelum nanti dihubungkan ke Odoo 19 CE.",
        order: 2,
        materials: [
          {
            id: "s2d-2-html",
            title: "Arsitektur Database LMS Enterprise",
            type: "html",
            description:
              "Pola arsitektur bertahap dari Next.js LMS ke PostgreSQL lalu ke Odoo 19 CE.",
            htmlContent: `
<h2>Arsitektur Database LMS Enterprise</h2>
<p>Karena LMS sudah selesai di level local, GitHub, dan VPS, tahap berikutnya adalah menambahkan database tanpa mengganggu aplikasi yang sudah berjalan.</p>

<h3>Arsitektur tahap awal</h3>
<p>Untuk tahap pertama, kita memakai database LMS sendiri:</p>

<pre><code>Next.js LMS → API Layer → PostgreSQL LMS</code></pre>

<p>Database ini akan menyimpan data yang memang khusus untuk pengalaman belajar, seperti user, enrollment, lesson progress, dan status pembelajaran.</p>

<h3>Kenapa tidak langsung ke database Odoo?</h3>
<p>Karena database Odoo tidak boleh dianggap seperti database biasa. Odoo memiliki ORM, access rights, record rules, computed fields, workflow, sequence, dan business logic. Jika aplikasi luar langsung menulis ke tabel PostgreSQL Odoo, data bisa menjadi tidak konsisten.</p>

<h3>Arsitektur enterprise yang kita tuju</h3>
<p>Target jangka panjangnya adalah:</p>

<pre><code>Next.js LMS
  ↓
API / Middleware
  ↓
Odoo 19 ORM / API
  ↓
PostgreSQL Odoo</code></pre>

<p>Dengan pola ini, LMS tetap modern sebagai web app, sedangkan Odoo tetap menjadi business system untuk data enterprise seperti partner, product, order, invoice, dan payment.</p>

<h3>Data yang cocok disimpan di LMS</h3>
<ul>
  <li>lesson progress,</li>
  <li>last opened lesson,</li>
  <li>quiz attempt,</li>
  <li>course completion,</li>
  <li>member learning activity.</li>
</ul>

<h3>Data yang nanti cocok masuk Odoo</h3>
<ul>
  <li>member sebagai contact / partner,</li>
  <li>course sebagai product,</li>
  <li>order course,</li>
  <li>invoice,</li>
  <li>payment,</li>
  <li>enterprise reporting.</li>
</ul>

<h3>Kesimpulan lesson ini</h3>
<p>Kita mulai dari database LMS sendiri agar fitur login, member area, assignment course free, dan progress bisa cepat berjalan. Setelah itu, integrasi Odoo 19 CE dibangun sebagai layer berikutnya melalui API, bukan direct database write.</p>
`,
          },
        ],
      },
      {
        id: "s2d-3",
        title: "Roadmap Fitur Pertama: Login, Member Area, Free Course & Progress",
        duration: "24 min",
        summary:
          "Menentukan scope awal agar development database tidak melebar: login, member dashboard, auto assign free course, dan progress tracking.",
        order: 3,
        materials: [
          {
            id: "s2d-3-html",
            title: "Roadmap Fitur Pertama",
            type: "html",
            description:
              "Scope awal implementasi database LMS agar development tetap fokus dan aman.",
            htmlContent: `
<h2>Roadmap Fitur Pertama</h2>
<p>Saat menambahkan database ke LMS yang sudah live, kita tidak boleh langsung membuat semua fitur sekaligus. Kita mulai dari fitur paling inti yang membuktikan bahwa LMS sudah benar-benar dynamic.</p>

<h3>Target awal</h3>
<p>Target awal course ini adalah membuat pondasi berikut:</p>

<ol>
  <li>Register user</li>
  <li>Login user</li>
  <li>Session member</li>
  <li>Member dashboard</li>
  <li>Auto assign course free</li>
  <li>Progress lesson</li>
  <li>Progress course</li>
</ol>

<h3>Workflow yang ingin dicapai</h3>
<pre><code>User register
  ↓
Account dibuat di database
  ↓
Course free otomatis di-assign
  ↓
User login
  ↓
User masuk member dashboard
  ↓
User membuka lesson
  ↓
User mark lesson as completed
  ↓
Progress course berubah</code></pre>

<h3>Database minimal</h3>
<p>Untuk tahap awal, tabel minimal yang kita butuhkan adalah:</p>

<ul>
  <li><code>users</code></li>
  <li><code>courses</code></li>
  <li><code>lessons</code></li>
  <li><code>enrollments</code></li>
  <li><code>lesson_progress</code></li>
</ul>

<h3>Formula progress</h3>
<p>Progress course bisa dihitung dengan rumus sederhana:</p>

<pre><code>completed lessons / total lessons × 100</code></pre>

<p>Contoh: jika course memiliki 10 lesson dan user sudah menyelesaikan 3 lesson, maka progress-nya adalah 30%.</p>

<h3>Kenapa mulai dari course free?</h3>
<p>Course free adalah titik awal terbaik karena belum membutuhkan payment, order, invoice, atau integrasi Odoo yang kompleks. Dengan course free, kita bisa menguji flow utama LMS dynamic dengan lebih cepat.</p>

<h3>Kesimpulan lesson ini</h3>
<p>Scope awal kita jelas: login, member area, free course assignment, dan progress tracking. Setelah pondasi ini stabil, barulah kita masuk ke payment, admin panel, dan integrasi Odoo 19 CE.</p>
`,
          },
        ],
      },
    ],
  },
];


export const fromStaticLmsToDynamicLmsCourse: Course = {
  id: "6",
  slug: "from-static-lms-to-dynamic-lms",
  title: "From Static LMS to Dynamic LMS (Database & Member System)",
  price: null,
  accessType: "free",
  level: "Beginner",
  totalDuration: "1 Module • 3 Lessons",
  shortDescription:
    "Mengubah LMS static menjadi LMS dynamic dengan database, login, member area, course assignment, dan progress tracking.",
  description:
    "Course gratis lanjutan setelah From Localhost to Live LMS. Kita membangun pondasi database untuk LMS yang sudah online: mulai dari arsitektur PostgreSQL, login, member area, auto assign course free, progress belajar, sampai arah integrasi enterprise dengan Odoo 19 CE melalui API/ORM.",
  curriculum: staticToDynamicCurriculum,
  lessons: flattenCurriculum(staticToDynamicCurriculum),
};
