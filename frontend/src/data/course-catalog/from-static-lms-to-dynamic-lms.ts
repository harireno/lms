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
      {
        id: "s2d-4",
        title: "Menyiapkan PostgreSQL untuk LMS",
        duration: "30 min",
        summary:
          "Menyiapkan PostgreSQL sebagai database awal LMS dynamic, mulai dari install, cek status service, membuat database, membuat user, dan validasi koneksi.",
        order: 4,
        materials: [
          {
            id: "s2d-4-html",
            title: "Menyiapkan PostgreSQL untuk LMS",
            type: "html",
            description:
              "Panduan awal menyiapkan PostgreSQL untuk LMS dynamic tanpa langsung menyentuh database Odoo.",
            htmlContent: `
<h2>Menyiapkan PostgreSQL untuk LMS</h2>
<p>Pada lesson ini, kita akan menyiapkan PostgreSQL sebagai database awal untuk LMS dynamic.</p>
<p>Database ini akan dipakai untuk menyimpan data LMS seperti user, enrollment, dan progress belajar. Untuk tahap ini, kita belum menyentuh database Odoo agar arsitektur tetap aman dan tidak merusak business logic Odoo.</p>

<h3>Kenapa PostgreSQL?</h3>
<p>PostgreSQL adalah database relasional yang stabil, powerful, dan banyak digunakan untuk aplikasi production.</p>
<p>PostgreSQL juga cocok untuk arsitektur jangka panjang karena nanti Odoo juga menggunakan PostgreSQL, walaupun database LMS dan database Odoo tetap harus diperlakukan sebagai sistem berbeda.</p>

<h3>Folder kerja command</h3>
<p>Install PostgreSQL dilakukan di level sistem VPS, jadi command boleh dijalankan dari folder mana saja.</p>
<p>Namun agar course ini konsisten, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek dulu:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Cek apakah PostgreSQL sudah terinstall</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>psql --version</code></pre>

<p>Jika muncul versi PostgreSQL, berarti PostgreSQL client sudah tersedia.</p>
<p>Jika belum ada, lanjut install PostgreSQL.</p>

<h3>Langkah 2 — Install PostgreSQL</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo apt update
sudo apt install postgresql postgresql-contrib -y</code></pre>

<p>Setelah install, cek versi:</p>

<pre><code>psql --version</code></pre>

<h3>Langkah 3 — Cek status service PostgreSQL</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo systemctl status postgresql</code></pre>

<p>Jika statusnya <code>active (exited)</code> atau <code>active (running)</code>, PostgreSQL sudah aktif.</p>

<p>Jika belum aktif, jalankan:</p>

<pre><code>sudo systemctl enable postgresql
sudo systemctl start postgresql
sudo systemctl status postgresql</code></pre>

<h3>Langkah 4 — Masuk ke user postgres</h3>
<p>PostgreSQL biasanya memiliki user sistem bernama <code>postgres</code>.</p>

<pre><code>sudo -i -u postgres</code></pre>

<p>Setelah itu masuk ke PostgreSQL shell:</p>

<pre><code>psql</code></pre>

<p>Jika berhasil, prompt akan berubah menjadi seperti:</p>

<pre><code>postgres=#</code></pre>

<h3>Langkah 5 — Buat database LMS</h3>
<p>Di dalam prompt <code>postgres=#</code>, jalankan:</p>

<pre><code>CREATE DATABASE lms_db;</code></pre>

<p>Cek daftar database:</p>

<pre><code>\\l</code></pre>

<h3>Langkah 6 — Buat user database LMS</h3>
<p>Masih di dalam prompt <code>postgres=#</code>, buat user khusus LMS:</p>

<pre><code>CREATE USER lms_user WITH ENCRYPTED PASSWORD 'ganti_password_kuat_di_sini';</code></pre>

<p>Berikan akses ke database:</p>

<pre><code>GRANT ALL PRIVILEGES ON DATABASE lms_db TO lms_user;</code></pre>

<h3>Langkah 7 — Keluar dari PostgreSQL shell</h3>

<pre><code>\\q
exit</code></pre>

<p><code>\\q</code> keluar dari psql, sedangkan <code>exit</code> keluar dari user postgres kembali ke user VPS biasa.</p>

<h3>Langkah 8 — Test koneksi database</h3>
<p>Command ini dijalankan dari user VPS biasa:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Masukkan password yang tadi dibuat.</p>

<p>Jika berhasil, kita akan masuk ke prompt database:</p>

<pre><code>lms_db=&gt;</code></pre>

<p>Keluar dengan:</p>

<pre><code>\\q</code></pre>

<h3>Langkah 9 — Siapkan DATABASE_URL</h3>
<p>Next.js atau ORM nanti biasanya membaca koneksi database dari environment variable.</p>
<p>Format umum:</p>

<pre><code>postgresql://lms_user:ganti_password_kuat_di_sini@localhost:5432/lms_db</code></pre>

<p>Nanti value ini akan dimasukkan ke file environment production, misalnya <code>.env.production</code>, tetapi jangan pernah commit password asli ke Git.</p>

<h3>Langkah 10 — Catatan keamanan dasar</h3>
<ul>
  <li>Gunakan password database yang kuat.</li>
  <li>Jangan memakai user <code>postgres</code> langsung untuk aplikasi.</li>
  <li>Jangan membuka port PostgreSQL ke internet jika belum benar-benar perlu.</li>
  <li>Untuk tahap awal, koneksi database cukup dari localhost.</li>
  <li>Jangan share file environment yang berisi password.</li>
</ul>

<h3>Troubleshooting</h3>

<h4>1. psql: command not found</h4>
<p>Artinya PostgreSQL client belum terinstall.</p>

<pre><code>sudo apt update
sudo apt install postgresql postgresql-contrib -y
psql --version</code></pre>

<h4>2. PostgreSQL service tidak aktif</h4>

<pre><code>sudo systemctl status postgresql
sudo systemctl start postgresql
sudo systemctl status postgresql</code></pre>

<h4>3. Peer authentication failed</h4>
<p>Ini biasanya terjadi saat mencoba login PostgreSQL dengan cara yang tidak sesuai metode authentication lokal.</p>
<p>Untuk administrasi awal, gunakan:</p>

<pre><code>sudo -i -u postgres
psql</code></pre>

<h4>4. Password authentication failed</h4>
<p>Pastikan username, password, dan database benar.</p>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Jika lupa password, masuk sebagai postgres lalu ubah password:</p>

<pre><code>sudo -i -u postgres
psql
ALTER USER lms_user WITH ENCRYPTED PASSWORD 'password_baru_yang_kuat';
\\q
exit</code></pre>

<h4>5. Database tidak muncul</h4>
<p>Masuk ke PostgreSQL shell lalu cek daftar database:</p>

<pre><code>sudo -i -u postgres
psql
\\l</code></pre>

<h4>6. User tidak punya akses ke schema public</h4>
<p>Pada beberapa versi PostgreSQL, user perlu diberi permission tambahan pada schema.</p>

<pre><code>sudo -i -u postgres
psql
\\c lms_db
GRANT ALL ON SCHEMA public TO lms_user;
\\q
exit</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
psql --version
sudo apt update
sudo apt install postgresql postgresql-contrib -y
sudo systemctl status postgresql
sudo systemctl enable postgresql
sudo systemctl start postgresql
sudo -i -u postgres
psql
CREATE DATABASE lms_db;
CREATE USER lms_user WITH ENCRYPTED PASSWORD 'ganti_password_kuat_di_sini';
GRANT ALL PRIVILEGES ON DATABASE lms_db TO lms_user;
\\l
\\q
exit
psql -h localhost -U lms_user -d lms_db</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menyiapkan PostgreSQL sebagai database awal LMS dynamic.</p>
<p>Kita sudah menyiapkan database <code>lms_db</code>, user <code>lms_user</code>, dan format koneksi <code>DATABASE_URL</code>.</p>
<p>Di lesson berikutnya, kita akan mulai menyambungkan aplikasi Next.js ke database melalui dependency dan konfigurasi environment.</p>
`,
          },
          {
            id: "s2d-4-video",
            title: "Video Menyiapkan PostgreSQL untuk LMS",
            type: "video",
            description:
              "Video pendamping untuk memahami instalasi dan persiapan PostgreSQL sebagai database awal LMS dynamic.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min",
          },
        ],
      },  
      {
         id: "s2d-5",
         title: "Integrasi Next.js ke PostgreSQL",
        duration: "35 min",
        summary:
          "Menghubungkan aplikasi Next.js LMS ke PostgreSQL menggunakan environment variable dan library database sederhana.",
        order: 5,
        materials: [
          {
            id: "s2d-5-html",
            title: "Integrasi Next.js ke PostgreSQL",
            type: "html",
            description:
              "Menghubungkan Next.js ke PostgreSQL menggunakan DATABASE_URL dan library database.",
            htmlContent: `
<h2>Integrasi Next.js ke PostgreSQL</h2>
<p>Pada lesson ini, kita akan menghubungkan aplikasi LMS berbasis Next.js ke database PostgreSQL yang sudah kita siapkan di lesson sebelumnya.</p>

<h3>Tujuan lesson ini</h3>
<ul>
  <li>Membaca DATABASE_URL dari environment.</li>
  <li>Menginstall library PostgreSQL.</li>
  <li>Membuat koneksi database sederhana.</li>
  <li>Melakukan test query pertama.</li>
</ul>

<h3>Folder kerja</h3>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Install library PostgreSQL</h3>

<pre><code>cd /var/www/lms/frontend
npm install pg</code></pre>

<p>Cek apakah sudah terinstall:</p>

<pre><code>npm list pg</code></pre>

<h3>Langkah 2 — Tambahkan DATABASE_URL</h3>

<pre><code>nano .env.production</code></pre>

<p>Isi contoh:</p>

<pre><code>DATABASE_URL=postgresql://lms_user:password@localhost:5432/lms_db</code></pre>

<h3>Langkah 3 — Buat file koneksi database</h3>

<pre><code>mkdir -p lib
nano lib/db.js</code></pre>

<p>Isi file:</p>

<pre><code>import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;</code></pre>

<h3>Langkah 4 — Test koneksi database</h3>

<pre><code>nano test-db.js</code></pre>

<pre><code>import pool from "./lib/db.js";

async function test() {
  const res = await pool.query("SELECT NOW()");
  console.log(res.rows);
}

test();</code></pre>

<p>Jalankan test:</p>

<pre><code>node test-db.js</code></pre>

<p>Jika berhasil, akan muncul timestamp dari PostgreSQL.</p>

<h3>Langkah 5 — Build ulang aplikasi</h3>

<pre><code>cd /var/www/lms/frontend
npm run build</code></pre>

<h3>Langkah 6 — Restart PM2</h3>

<pre><code>pm2 restart lms
pm2 status</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Cannot find module 'pg'</h4>

<pre><code>npm install pg</code></pre>

<h4>2. DATABASE_URL undefined</h4>

<pre><code>cat .env.production</code></pre>

<p>Pastikan variable ada dan tidak typo.</p>

<h4>3. Connection refused</h4>

<pre><code>sudo systemctl status postgresql</code></pre>

<h4>4. Password salah</h4>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
npm install pg
nano .env.production
mkdir -p lib
nano lib/db.js
nano test-db.js
node test-db.js
npm run build
pm2 restart lms</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita berhasil menghubungkan Next.js ke PostgreSQL.</p>
<p>Langkah ini adalah fondasi penting sebelum kita mulai membuat fitur dynamic seperti login, member system, dan enrollment.</p>
`,
          },
          {
            id: "s2d-5-video",
            title: "Video Integrasi Next.js ke PostgreSQL",
            type: "video",
            description:
              "Video pendamping untuk memahami koneksi Next.js ke PostgreSQL.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",
          },
        ],
      },        
      {
        id: "s2d-6",
        title: "Desain Schema Database LMS",
        duration: "35 min",
        summary:
          "Mendesain schema database awal untuk LMS dynamic: users, courses, lessons, enrollments, dan lesson_progress sebagai pondasi member system.",
        order: 6,
        materials: [
          {
            id: "s2d-6-html",
            title: "Desain Schema Database LMS",
            type: "html",
            description:
              "Mendesain struktur tabel awal PostgreSQL untuk login, member area, course assignment, dan progress tracking.",
            htmlContent: `
<h2>Desain Schema Database LMS</h2>
<p>Pada lesson ini, kita akan mendesain schema database awal untuk LMS dynamic.</p>
<p>Lesson sebelumnya sudah membahas integrasi Next.js ke PostgreSQL. Sekarang kita mulai menentukan tabel apa saja yang dibutuhkan agar LMS bisa menyimpan data member, course, enrollment, dan progress belajar.</p>

<h3>Target schema awal</h3>
<p>Untuk tahap pertama, kita belum membuat fitur payment atau integrasi Odoo. Kita fokus pada pondasi member learning system.</p>

<ul>
  <li><code>users</code> — menyimpan data member.</li>
  <li><code>courses</code> — menyimpan data course.</li>
  <li><code>lessons</code> — menyimpan data lesson per course.</li>
  <li><code>enrollments</code> — menyimpan relasi user dengan course.</li>
  <li><code>lesson_progress</code> — menyimpan progress lesson per user.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Command database bisa dijalankan dari folder mana saja, tetapi agar konsisten kita mulai dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Pastikan koneksi PostgreSQL bisa dilakukan</h3>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Jika berhasil, prompt akan berubah menjadi:</p>

<pre><code>lms_db=&gt;</code></pre>

<p>Keluar dari PostgreSQL:</p>

<pre><code>\\q</code></pre>

<h3>Langkah 2 — Buat file SQL schema</h3>
<p>Kita buat folder khusus database agar rapi:</p>

<pre><code>cd /var/www/lms/frontend
mkdir -p database
nano database/schema.sql</code></pre>

<h3>Langkah 3 — Isi schema awal</h3>

<pre><code>CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'member',
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  access_type VARCHAR(50) NOT NULL DEFAULT 'free',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lessons (
  id SERIAL PRIMARY KEY,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  slug VARCHAR(150) NOT NULL,
  title VARCHAR(255) NOT NULL,
  order_no INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(course_id, slug)
);

CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  status VARCHAR(50) NOT NULL DEFAULT 'active',
  enrolled_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

CREATE TABLE IF NOT EXISTS lesson_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);</code></pre>

<h3>Langkah 4 — Jalankan schema ke database</h3>

<pre><code>cd /var/www/lms/frontend
psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h3>Langkah 5 — Cek tabel yang sudah dibuat</h3>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Di dalam prompt PostgreSQL:</p>

<pre><code>\\dt</code></pre>

<p>Jika berhasil, tabel seperti <code>users</code>, <code>courses</code>, <code>lessons</code>, <code>enrollments</code>, dan <code>lesson_progress</code> akan muncul.</p>

<h3>Langkah 6 — Test insert data course</h3>

<pre><code>INSERT INTO courses (slug, title, description, access_type)
VALUES ('from-localhost-to-live-lms', 'From Localhost to Live LMS', 'Course deployment LMS dari local ke VPS.', 'free');</code></pre>

<p>Cek data:</p>

<pre><code>SELECT id, slug, title, access_type FROM courses;</code></pre>

<h3>Langkah 7 — Test insert lesson</h3>

<pre><code>INSERT INTO lessons (course_id, slug, title, order_no)
VALUES (1, 'intro', 'Introduction', 1);</code></pre>

<p>Cek data:</p>

<pre><code>SELECT id, course_id, slug, title FROM lessons;</code></pre>

<h3>Catatan desain</h3>
<p>Schema ini masih sederhana, tetapi cukup untuk membangun fitur awal:</p>

<ul>
  <li>register user,</li>
  <li>login member,</li>
  <li>assign course free,</li>
  <li>menyimpan lesson progress,</li>
  <li>menghitung progress course.</li>
</ul>

<h3>Troubleshooting</h3>

<h4>1. relation already exists</h4>
<p>Jika muncul pesan tabel sudah ada, itu aman karena kita memakai <code>CREATE TABLE IF NOT EXISTS</code>.</p>

<h4>2. permission denied for schema public</h4>
<p>Berikan akses schema ke user LMS:</p>

<pre><code>sudo -i -u postgres
psql
\\c lms_db
GRANT ALL ON SCHEMA public TO lms_user;
\\q
exit</code></pre>

<h4>3. psql: command not found</h4>

<pre><code>sudo apt update
sudo apt install postgresql-client -y</code></pre>

<h4>4. password authentication failed</h4>
<p>Pastikan password database benar. Jika perlu reset:</p>

<pre><code>sudo -i -u postgres
psql
ALTER USER lms_user WITH ENCRYPTED PASSWORD 'password_baru_yang_kuat';
\\q
exit</code></pre>

<h4>5. foreign key error saat insert lesson</h4>
<p>Pastikan <code>course_id</code> yang dipakai benar-benar ada di tabel <code>courses</code>.</p>

<pre><code>SELECT id, title FROM courses;</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
mkdir -p database
nano database/schema.sql
psql -h localhost -U lms_user -d lms_db -f database/schema.sql
psql -h localhost -U lms_user -d lms_db
\\dt
SELECT id, slug, title FROM courses;
SELECT id, course_id, slug, title FROM lessons;</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat desain schema database awal untuk LMS dynamic.</p>
<p>Schema ini menjadi pondasi untuk fitur member system: user, course, lesson, enrollment, dan progress tracking.</p>
<p>Di lesson berikutnya, kita akan mulai membuat seed data agar database LMS memiliki data awal yang bisa dibaca oleh aplikasi.</p>
`,
          },
          {
            id: "s2d-6-video",
            title: "Video Desain Schema Database LMS",
            type: "video",
            description:
              "Video pendamping untuk memahami desain tabel awal PostgreSQL untuk LMS dynamic.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",
          },
        ],
      },
      {
        id: "s2d-7",
        title: "Seed Data Awal LMS",
        duration: "32 min",
        summary:
          "Membuat seed data awal untuk tabel courses dan lessons agar database LMS langsung memiliki data awal yang bisa dibaca aplikasi.",
        order: 7,
        materials: [
          {
            id: "s2d-7-html",
            title: "Seed Data Awal LMS",
            type: "html",
            description:
              "Membuat file seed SQL, menjalankannya ke PostgreSQL, mengecek hasil insert, dan memperbaiki error umum saat seeding data awal LMS.",
            htmlContent: `
<h2>Seed Data Awal LMS</h2>
<p>Pada lesson ini, kita akan membuat seed data awal untuk database LMS.</p>
<p>Lesson sebelumnya sudah membuat schema database. Sekarang kita isi database dengan data awal agar aplikasi punya course dan lesson yang bisa dibaca.</p>

<h3>Apa itu seed data?</h3>
<p><strong>Seed data</strong> adalah data awal yang dimasukkan ke database untuk kebutuhan development, testing, atau setup awal production.</p>
<p>Contohnya:</p>
<ul>
  <li>Course default</li>
  <li>Lesson awal</li>
  <li>Role awal</li>
  <li>User admin awal jika diperlukan</li>
</ul>

<h3>Folder kerja command</h3>
<p>Command dijalankan dari folder frontend LMS karena folder <code>database</code> kita simpan di sana.</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan folder database sudah ada:</p>

<pre><code>ls -la database</code></pre>

<p>Jika belum ada:</p>

<pre><code>mkdir -p database</code></pre>

<h3>Langkah 1 — Buat file seed.sql</h3>

<pre><code>cd /var/www/lms/frontend
nano database/seed.sql</code></pre>

<h3>Langkah 2 — Isi seed data course</h3>

<pre><code>INSERT INTO courses (slug, title, description, access_type, is_published)
VALUES
  (
    'from-localhost-to-live-lms',
    'From Localhost to Live LMS',
    'Course deployment LMS dari localhost sampai live di VPS.',
    'free',
    true
  ),
  (
    'from-static-lms-to-dynamic-lms',
    'From Static LMS to Dynamic LMS',
    'Course lanjutan untuk menambahkan database dan member system ke LMS.',
    'free',
    true
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  access_type = EXCLUDED.access_type,
  is_published = EXCLUDED.is_published,
  updated_at = NOW();</code></pre>

<h3>Langkah 3 — Isi seed data lesson</h3>

<pre><code>INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 'intro', 'Introduction', 1
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 'database-architecture', 'Arsitektur Database LMS', 2
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 'postgresql-setup', 'Setup PostgreSQL untuk LMS', 3
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();</code></pre>

<h3>Langkah 4 — Jalankan seed ke database</h3>

<pre><code>cd /var/www/lms/frontend
psql -h localhost -U lms_user -d lms_db -f database/seed.sql</code></pre>

<h3>Langkah 5 — Cek hasil seed</h3>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Di dalam prompt PostgreSQL:</p>

<pre><code>SELECT id, slug, title, access_type FROM courses;

SELECT
  lessons.id,
  courses.slug AS course_slug,
  lessons.slug AS lesson_slug,
  lessons.title,
  lessons.order_no
FROM lessons
JOIN courses ON courses.id = lessons.course_id
ORDER BY courses.slug, lessons.order_no;</code></pre>

<p>Keluar dari PostgreSQL:</p>

<pre><code>\\q</code></pre>

<h3>Kenapa memakai ON CONFLICT?</h3>
<p><code>ON CONFLICT</code> membuat seed lebih aman dijalankan berkali-kali.</p>
<p>Jika data belum ada, PostgreSQL akan insert. Jika data sudah ada, PostgreSQL akan update data yang sama.</p>

<h3>Troubleshooting</h3>

<h4>1. psql: command not found</h4>

<pre><code>sudo apt update
sudo apt install postgresql-client -y</code></pre>

<h4>2. relation "courses" does not exist</h4>
<p>Schema belum dijalankan. Jalankan dulu schema:</p>

<pre><code>cd /var/www/lms/frontend
psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h4>3. permission denied for table courses</h4>
<p>Berikan permission ke user database:</p>

<pre><code>sudo -i -u postgres
psql
\\c lms_db
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO lms_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lms_user;
\\q
exit</code></pre>

<h4>4. duplicate key value violates unique constraint</h4>
<p>Pastikan query memakai <code>ON CONFLICT</code> pada field unique seperti <code>slug</code>.</p>

<h4>5. Lesson tidak masuk</h4>
<p>Pastikan course dengan slug yang dipakai sudah ada.</p>

<pre><code>SELECT id, slug, title FROM courses;</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
mkdir -p database
nano database/seed.sql
psql -h localhost -U lms_user -d lms_db -f database/seed.sql
psql -h localhost -U lms_user -d lms_db
SELECT id, slug, title FROM courses;
SELECT id, course_id, slug, title FROM lessons;
\\q</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat seed data awal agar database LMS tidak kosong.</p>
<p>Dengan seed data, aplikasi bisa mulai membaca course dan lesson dari PostgreSQL.</p>
<p>Di lesson berikutnya, kita akan mulai membuat API route untuk membaca data course dari database.</p>
`,
          },
          {
            id: "s2d-7-video",
            title: "Video Seed Data Awal LMS",
            type: "video",
            description:
              "Video pendamping untuk memahami seed data awal PostgreSQL pada LMS dynamic.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "32 min",
          },
        ],
      },
      {
        id: "s2d-8",
        title: "API Route Courses dari Database",
        duration: "35 min",
        summary:
          "Membuat API route Next.js untuk membaca data courses dan lessons langsung dari PostgreSQL agar LMS mulai benar-benar dynamic.",
        order: 8,
        materials: [
          {
            id: "s2d-8-html",
            title: "API Route Courses dari Database",
            type: "html",
            description:
              "Membuat endpoint API courses, membaca data dari PostgreSQL, mengetes response JSON, dan troubleshooting koneksi database.",
            htmlContent: `
<h2>API Route Courses dari Database</h2>
<p>Pada lesson ini, kita mulai membaca data course dari PostgreSQL melalui API route Next.js.</p>
<p>Lesson sebelumnya sudah membuat schema dan seed data. Sekarang kita buat endpoint agar aplikasi bisa mengambil data dari database, bukan lagi hanya dari file static.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat API route untuk daftar courses.</li>
  <li>Membaca data dari PostgreSQL.</li>
  <li>Menampilkan response JSON.</li>
  <li>Mengetes API dengan browser dan curl.</li>
  <li>Memahami troubleshooting error koneksi database.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan ada file <code>package.json</code>:</p>

<pre><code>ls -la</code></pre>

<h3>Langkah 1 — Pastikan dependency pg sudah terinstall</h3>

<pre><code>npm list pg</code></pre>

<p>Jika belum ada, install:</p>

<pre><code>npm install pg</code></pre>

<p>Jika memakai TypeScript, install type definition:</p>

<pre><code>npm install -D @types/pg</code></pre>

<h3>Langkah 2 — Pastikan DATABASE_URL tersedia</h3>
<p>Cek file environment:</p>

<pre><code>ls -la | grep env</code></pre>

<p>Pastikan <code>.env.local</code> atau <code>.env.production</code> memiliki:</p>

<pre><code>DATABASE_URL=postgresql://lms_user:ganti_password_kuat_di_sini@localhost:5432/lms_db</code></pre>

<p>Jangan commit file environment yang berisi password asli ke Git.</p>

<h3>Langkah 3 — Buat helper koneksi database</h3>
<p>Buat folder library jika belum ada:</p>

<pre><code>mkdir -p src/lib</code></pre>

<p>Buat file:</p>

<pre><code>nano src/lib/db.ts</code></pre>

<p>Isi file:</p>

<pre><code>import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

export const pool = new Pool({
  connectionString,
});</code></pre>

<h3>Langkah 4 — Buat API route courses</h3>
<p>Untuk App Router Next.js, buat folder:</p>

<pre><code>mkdir -p src/app/api/courses
nano src/app/api/courses/route.ts</code></pre>

<p>Jika struktur project kamu memakai <code>app/</code> langsung tanpa <code>src/</code>, gunakan path:</p>

<pre><code>mkdir -p app/api/courses
nano app/api/courses/route.ts</code></pre>

<p>Isi file route:</p>

<pre><code>import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(&#96;
      SELECT
        id,
        slug,
        title,
        description,
        access_type,
        is_published,
        created_at,
        updated_at
      FROM courses
      WHERE is_published = true
      ORDER BY id ASC
    &#96;);

    return NextResponse.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("GET /api/courses error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load courses",
      },
      { status: 500 }
    );
  }
}</code></pre>

<h3>Langkah 5 — Jalankan development server</h3>

<pre><code>npm run dev</code></pre>

<p>Test dari browser:</p>

<pre><code>http://localhost:3000/api/courses</code></pre>

<p>Atau dari terminal:</p>

<pre><code>curl http://localhost:3000/api/courses</code></pre>

<h3>Langkah 6 — Test di VPS production</h3>
<p>Jika aplikasi berjalan via PM2:</p>

<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<p>Test API production:</p>

<pre><code>curl https://domainkita.com/api/courses</code></pre>

<h3>Langkah 7 — Expected response</h3>

<pre><code>{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "from-localhost-to-live-lms",
      "title": "From Localhost to Live LMS",
      "description": "...",
      "access_type": "free",
      "is_published": true
    }
  ]
}</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Error DATABASE_URL is not defined</h4>
<p>Pastikan env tersedia dan restart server setelah mengubah env.</p>

<pre><code>cat .env.local
cat .env.production
npm run build
pm2 restart lms</code></pre>

<h4>2. Module not found: Can't resolve pg</h4>

<pre><code>npm install pg
npm install -D @types/pg</code></pre>

<h4>3. relation "courses" does not exist</h4>
<p>Schema belum dijalankan.</p>

<pre><code>psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h4>4. Data kosong</h4>
<p>Seed data belum dijalankan atau course belum published.</p>

<pre><code>psql -h localhost -U lms_user -d lms_db -f database/seed.sql
psql -h localhost -U lms_user -d lms_db
SELECT id, slug, title, is_published FROM courses;
\\q</code></pre>

<h4>5. Permission denied for table courses</h4>

<pre><code>sudo -i -u postgres
psql
\\c lms_db
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO lms_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lms_user;
\\q
exit</code></pre>

<h4>6. API 500 Internal Server Error</h4>
<p>Cek log aplikasi:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<p>Jika masih development:</p>

<pre><code>npm run dev</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
npm install pg
npm install -D @types/pg
mkdir -p src/lib
nano src/lib/db.ts
mkdir -p src/app/api/courses
nano src/app/api/courses/route.ts
npm run dev
curl http://localhost:3000/api/courses
npm run build
pm2 restart lms
curl https://domainkita.com/api/courses</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat API route pertama yang membaca data courses langsung dari PostgreSQL.</p>
<p>Ini adalah titik penting karena LMS mulai berubah dari static data menjadi dynamic data.</p>
<p>Di lesson berikutnya, kita akan mulai menggunakan API ini di halaman frontend agar daftar course dibaca dari database.</p>
`,
          },
          {
            id: "s2d-8-video",
            title: "Video API Route Courses dari Database",
            type: "video",
            description:
              "Video pendamping untuk memahami cara membuat API route Next.js yang membaca courses dari PostgreSQL.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",
          },
        ],
      },
      {
        id: "s2d-9",
        title: "Menampilkan Courses dari API",
        duration: "35 min",
        summary:
          "Mengubah halaman daftar course agar membaca data dari API route PostgreSQL, bukan lagi sepenuhnya dari data static.",
        order: 9,
        materials: [
          {
            id: "s2d-9-html",
            title: "Menampilkan Courses dari API",
            type: "html",
            description:
              "Membuat fetch data courses dari API, menampilkan hasilnya di frontend, handling loading, error, dan troubleshooting API response.",
            htmlContent: `
<h2>Menampilkan Courses dari API</h2>
<p>Pada lesson ini, kita akan mulai menampilkan daftar course dari API route yang sudah dibuat pada lesson sebelumnya.</p>
<p>Ini adalah langkah penting karena tampilan LMS mulai membaca data dari PostgreSQL melalui API, bukan hanya dari file static.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat fungsi fetch courses dari API.</li>
  <li>Menampilkan data course di halaman frontend.</li>
  <li>Menangani loading state.</li>
  <li>Menangani error state.</li>
  <li>Melakukan test dari browser dan terminal.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan ada file <code>package.json</code>:</p>

<pre><code>ls -la</code></pre>

<h3>Langkah 1 — Pastikan API courses sudah berjalan</h3>
<p>Sebelum membuat UI, pastikan endpoint API dari lesson sebelumnya sudah bisa diakses.</p>

<pre><code>npm run dev</code></pre>

<p>Buka terminal lain, lalu test:</p>

<pre><code>curl http://localhost:3000/api/courses</code></pre>

<p>Atau buka dari browser:</p>

<pre><code>http://localhost:3000/api/courses</code></pre>

<p>Jika response JSON muncul, kita bisa lanjut ke frontend.</p>

<h3>Langkah 2 — Buat helper fetch courses</h3>
<p>Buat folder library jika belum ada:</p>

<pre><code>mkdir -p src/lib</code></pre>

<p>Buat file helper:</p>

<pre><code>nano src/lib/course-api.ts</code></pre>

<p>Isi file:</p>

<pre><code>export type DynamicCourse = {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  access_type: string;
  is_published: boolean;
};

export async function fetchDynamicCourses(): Promise&lt;DynamicCourse[]&gt; {
  const response = await fetch("/api/courses", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const result = await response.json();

  return result.data ?? [];
}</code></pre>

<h3>Langkah 3 — Buat komponen client untuk daftar course</h3>
<p>Karena kita memakai loading state dan error state, kita buat client component.</p>

<pre><code>mkdir -p src/components/courses
nano src/components/courses/DynamicCourseList.tsx</code></pre>

<p>Isi file:</p>

<pre><code>"use client";

import { useEffect, useState } from "react";
import {
  DynamicCourse,
  fetchDynamicCourses,
} from "@/lib/course-api";

export function DynamicCourseList() {
  const [courses, setCourses] = useState&lt;DynamicCourse[]&gt;([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() =&gt; {
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
    return &lt;p&gt;Loading courses...&lt;/p&gt;;
  }

  if (errorMessage) {
    return &lt;p&gt;{errorMessage}&lt;/p&gt;;
  }

  if (courses.length === 0) {
    return &lt;p&gt;Belum ada course dari database.&lt;/p&gt;;
  }

  return (
    &lt;div className="grid gap-4"&gt;
      {courses.map((course) =&gt; (
        &lt;article
          key={course.id}
          className="rounded-lg border p-4"
        &gt;
          &lt;h3 className="text-lg font-semibold"&gt;
            {course.title}
          &lt;/h3&gt;
          &lt;p className="text-sm opacity-80"&gt;
            {course.description}
          &lt;/p&gt;
          &lt;p className="mt-2 text-xs uppercase"&gt;
            {course.access_type}
          &lt;/p&gt;
        &lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

<h3>Langkah 4 — Tampilkan komponen di halaman test</h3>
<p>Buat halaman test agar tidak mengganggu halaman course utama yang sudah ada.</p>

<pre><code>mkdir -p src/app/dynamic-courses
nano src/app/dynamic-courses/page.tsx</code></pre>

<p>Isi file:</p>

<pre><code>import { DynamicCourseList } from "@/components/courses/DynamicCourseList";

export default function DynamicCoursesPage() {
  return (
    &lt;main className="mx-auto max-w-4xl p-6"&gt;
      &lt;h1 className="mb-4 text-2xl font-bold"&gt;
        Dynamic Courses
      &lt;/h1&gt;
      &lt;p className="mb-6"&gt;
        Data di halaman ini dibaca dari PostgreSQL melalui API route.
      &lt;/p&gt;
      &lt;DynamicCourseList /&gt;
    &lt;/main&gt;
  );
}</code></pre>

<h3>Langkah 5 — Test dari browser</h3>
<p>Jalankan development server:</p>

<pre><code>npm run dev</code></pre>

<p>Buka:</p>

<pre><code>http://localhost:3000/dynamic-courses</code></pre>

<p>Jika course dari database muncul, berarti frontend sudah berhasil membaca API.</p>

<h3>Langkah 6 — Test build production</h3>
<p>Setelah berhasil di development, test build:</p>

<pre><code>npm run build</code></pre>

<p>Jika build sukses dan aplikasi berjalan via PM2:</p>

<pre><code>pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<p>Test dari domain production:</p>

<pre><code>https://domainkita.com/dynamic-courses</code></pre>

<h3>Langkah 7 — Cek alur data</h3>
<p>Alur yang sekarang kita punya adalah:</p>

<pre><code>PostgreSQL
  ↓
API Route /api/courses
  ↓
fetchDynamicCourses()
  ↓
DynamicCourseList
  ↓
Halaman /dynamic-courses</code></pre>

<h3>Catatan penting</h3>
<p>Pada tahap ini, halaman dynamic masih dibuat sebagai halaman test terpisah. Tujuannya agar kita bisa memvalidasi integrasi database tanpa merusak halaman LMS utama.</p>
<p>Setelah alur ini stabil, barulah kita bisa memindahkan atau menggabungkan data dynamic ke halaman course catalog utama.</p>

<h3>Troubleshooting</h3>

<h4>1. Halaman menampilkan “Courses belum bisa dimuat dari database”</h4>
<p>Cek API route:</p>

<pre><code>curl http://localhost:3000/api/courses</code></pre>

<p>Jika API error, cek terminal atau PM2 log.</p>

<h4>2. Module not found: Can't resolve '@/lib/course-api'</h4>
<p>Pastikan file benar-benar ada:</p>

<pre><code>ls -la src/lib
ls -la src/lib/course-api.ts</code></pre>

<p>Jika project belum memakai alias <code>@</code>, gunakan relative import sesuai struktur folder project.</p>

<h4>3. Module not found: DynamicCourseList</h4>
<p>Pastikan file komponen ada:</p>

<pre><code>ls -la src/components/courses
ls -la src/components/courses/DynamicCourseList.tsx</code></pre>

<h4>4. API berhasil tetapi halaman kosong</h4>
<p>Cek apakah response API memiliki field <code>data</code>.</p>

<pre><code>curl http://localhost:3000/api/courses</code></pre>

<p>Jika <code>data</code> kosong, jalankan seed ulang:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db -f database/seed.sql</code></pre>

<h4>5. Build gagal karena JSX di file salah</h4>
<p>Pastikan file yang berisi JSX memakai ekstensi <code>.tsx</code>, bukan <code>.ts</code>.</p>

<pre><code>ls -la src/components/courses</code></pre>

<h4>6. Error DATABASE_URL saat production</h4>
<p>Pastikan file environment production tersedia dan PM2 direstart setelah build.</p>

<pre><code>ls -la | grep env
npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
curl http://localhost:3000/api/courses
mkdir -p src/lib
nano src/lib/course-api.ts
mkdir -p src/components/courses
nano src/components/courses/DynamicCourseList.tsx
mkdir -p src/app/dynamic-courses
nano src/app/dynamic-courses/page.tsx
npm run dev
npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat halaman frontend yang membaca data courses dari API.</p>
<p>Sekarang LMS sudah mulai memiliki alur dynamic: data disimpan di PostgreSQL, dibaca API route, lalu ditampilkan di frontend.</p>
<p>Di lesson berikutnya, kita akan mulai membuat halaman detail course dynamic berdasarkan slug.</p>
`,
          },
          {
            id: "s2d-9-video",
            title: "Video Menampilkan Courses dari API",
            type: "video",
            description:
              "Video pendamping untuk memahami cara menampilkan data courses dari API PostgreSQL ke frontend LMS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",
          },
        ],
      },
      {
        id: "s2d-10",
        title: "Halaman Detail Course Dynamic",
        duration: "38 min",
        summary:
          "Membuat halaman detail course berdasarkan slug yang membaca data course dan lessons dari PostgreSQL melalui API route.",
        order: 10,
        materials: [
          {
            id: "s2d-10-html",
            title: "Halaman Detail Course Dynamic",
            type: "html",
            description:
              "Membuat API detail course by slug, halaman dynamic route, validasi response, dan troubleshooting jika slug atau lesson tidak terbaca.",
            htmlContent: `
<h2>Halaman Detail Course Dynamic</h2>
<p>Pada lesson ini, kita akan membuat halaman detail course dynamic berdasarkan <code>slug</code>.</p>
<p>Lesson sebelumnya sudah menampilkan daftar courses dari API. Sekarang, saat user memilih satu course, aplikasi akan membaca detail course dan daftar lessons dari PostgreSQL.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat API route detail course berdasarkan slug.</li>
  <li>Mengambil data course dan lessons dari PostgreSQL.</li>
  <li>Membuat halaman dynamic route <code>/dynamic-courses/[slug]</code>.</li>
  <li>Menampilkan informasi course dan daftar lesson.</li>
  <li>Menangani kondisi course tidak ditemukan.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan ada file <code>package.json</code>:</p>

<pre><code>ls -la</code></pre>

<h3>Langkah 1 — Pastikan API courses sebelumnya berjalan</h3>

<pre><code>npm run dev</code></pre>

<p>Dari terminal lain, test:</p>

<pre><code>curl http://localhost:3000/api/courses</code></pre>

<p>Jika daftar course muncul, kita bisa lanjut membuat API detail.</p>

<h3>Langkah 2 — Buat API route detail course</h3>
<p>Untuk App Router Next.js, buat folder route dynamic:</p>

<pre><code>cd /var/www/lms/frontend
mkdir -p src/app/api/courses/[slug]
nano src/app/api/courses/[slug]/route.ts</code></pre>

<h3>Langkah 3 — Isi API detail course</h3>

<pre><code>import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

type RouteParams = {
  params: {
    slug: string;
  };
};

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  try {
    const courseResult = await pool.query(
      "SELECT id, slug, title, description, access_type, is_published FROM courses WHERE slug = $1 AND is_published = true LIMIT 1",
      [params.slug]
    );

    const course = courseResult.rows[0];

    if (!course) {
      return NextResponse.json(
        {
          success: false,
          message: "Course not found",
        },
        { status: 404 }
      );
    }

    const lessonsResult = await pool.query(
      "SELECT id, slug, title, order_no FROM lessons WHERE course_id = $1 ORDER BY order_no ASC",
      [course.id]
    );

    return NextResponse.json({
      success: true,
      data: {
        ...course,
        lessons: lessonsResult.rows,
      },
    });
  } catch (error) {
    console.error("GET /api/courses/[slug] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load course detail",
      },
      { status: 500 }
    );
  }
}</code></pre>

<h3>Langkah 4 — Test API detail course</h3>

<pre><code>curl http://localhost:3000/api/courses/from-static-lms-to-dynamic-lms</code></pre>

<h3>Langkah 5 — Buat halaman dynamic route</h3>

<pre><code>mkdir -p src/app/dynamic-courses/[slug]
nano src/app/dynamic-courses/[slug]/page.tsx</code></pre>

<p>Isi file:</p>

<pre><code>import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
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
  const course = await getCourse(params.slug);

  if (!course) {
    notFound();
  }

  return (
    &lt;main className="mx-auto max-w-4xl p-6"&gt;
      &lt;p className="mb-2 text-sm uppercase opacity-70"&gt;
        {course.access_type}
      &lt;/p&gt;

      &lt;h1 className="mb-4 text-3xl font-bold"&gt;
        {course.title}
      &lt;/h1&gt;

      &lt;p className="mb-8 opacity-80"&gt;
        {course.description}
      &lt;/p&gt;

      &lt;section&gt;
        &lt;h2 className="mb-4 text-xl font-semibold"&gt;
          Lessons
        &lt;/h2&gt;

        {course.lessons.length === 0 ? (
          &lt;p&gt;Belum ada lesson untuk course ini.&lt;/p&gt;
        ) : (
          &lt;ol className="space-y-3"&gt;
            {course.lessons.map((lesson: any) =&gt; (
              &lt;li
                key={lesson.id}
                className="rounded-lg border p-4"
              &gt;
                &lt;span className="text-sm opacity-70"&gt;
                  Lesson {lesson.order_no}
                &lt;/span&gt;
                &lt;h3 className="font-semibold"&gt;
                  {lesson.title}
                &lt;/h3&gt;
              &lt;/li&gt;
            ))}
          &lt;/ol&gt;
        )}
      &lt;/section&gt;
    &lt;/main&gt;
  );
}</code></pre>

<h3>Langkah 6 — Tambahkan link dari daftar course</h3>
<p>Buka komponen daftar course:</p>

<pre><code>nano src/components/courses/DynamicCourseList.tsx</code></pre>

<p>Tambahkan import:</p>

<pre><code>import Link from "next/link";</code></pre>

<p>Tambahkan link di dalam card:</p>

<pre><code>&lt;Link
  href={"/dynamic-courses/" + course.slug}
  className="mt-4 inline-block text-sm font-semibold underline"
&gt;
  Lihat detail course
&lt;/Link&gt;</code></pre>

<h3>Langkah 7 — Test dari browser</h3>

<pre><code>npm run dev</code></pre>

<p>Buka:</p>

<pre><code>http://localhost:3000/dynamic-courses/from-static-lms-to-dynamic-lms</code></pre>

<h3>Langkah 8 — Test build production</h3>

<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. API detail menghasilkan 404</h4>
<p>Pastikan slug course benar:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db
SELECT id, slug, title, is_published FROM courses;
\\q</code></pre>

<h4>2. Lessons kosong</h4>
<p>Cek isi tabel lessons:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db
SELECT id, course_id, slug, title, order_no FROM lessons;
\\q</code></pre>

<h4>3. NEXT_PUBLIC_APP_URL belum tersedia</h4>
<p>Tambahkan ke file environment:</p>

<pre><code>NEXT_PUBLIC_APP_URL=http://localhost:3000</code></pre>

<p>Untuk production:</p>

<pre><code>NEXT_PUBLIC_APP_URL=https://domainkita.com</code></pre>

<h4>4. Build gagal karena JSX ditulis di file .ts</h4>
<p>Pastikan halaman React memakai ekstensi <code>.tsx</code>.</p>

<pre><code>ls -la src/app/dynamic-courses/[slug]</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
mkdir -p src/app/api/courses/[slug]
nano src/app/api/courses/[slug]/route.ts
curl http://localhost:3000/api/courses/from-static-lms-to-dynamic-lms
mkdir -p src/app/dynamic-courses/[slug]
nano src/app/dynamic-courses/[slug]/page.tsx
nano src/components/courses/DynamicCourseList.tsx
npm run dev
npm run build
pm2 restart lms</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat halaman detail course dynamic berdasarkan slug.</p>
<p>Sekarang LMS sudah bisa membaca daftar course dan detail course dari PostgreSQL melalui API route.</p>
<p>Di lesson berikutnya, kita akan mulai menyiapkan pondasi register dan login member.</p>
`,
          },
          {
            id: "s2d-10-video",
            title: "Video Halaman Detail Course Dynamic",
            type: "video",
            description:
              "Video pendamping untuk memahami halaman detail course dynamic berdasarkan slug dari PostgreSQL.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "38 min",
          },
        ],
      },
      {
        id: "s2d-11",
        title: "Pondasi Register Member",
        duration: "38 min",
        summary:
          "Membuat pondasi register member dengan API route Next.js, validasi input, hash password, dan penyimpanan user ke PostgreSQL.",
        order: 11,
        materials: [
          {
            id: "s2d-11-html",
            title: "Pondasi Register Member",
            type: "html",
            description:
              "Membuat API register member, install bcryptjs, validasi email, hash password, simpan user ke PostgreSQL, dan test endpoint register.",
            htmlContent: `
<h2>Pondasi Register Member</h2>
<p>Pada lesson ini, kita mulai masuk ke bagian member system.</p>
<p>Kita akan membuat pondasi register member agar user baru bisa disimpan ke tabel <code>users</code> di PostgreSQL.</p>

<h3>Target lesson</h3>
<ul>
  <li>Menginstall library untuk hash password.</li>
  <li>Membuat API route register.</li>
  <li>Validasi input dasar.</li>
  <li>Mencegah email duplicate.</li>
  <li>Menyimpan password dalam bentuk hash, bukan plain text.</li>
  <li>Mengetes register dengan curl.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan ada file <code>package.json</code>:</p>

<pre><code>ls -la</code></pre>

<h3>Langkah 1 — Pastikan tabel users sudah ada</h3>
<p>Masuk ke database:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Cek tabel:</p>

<pre><code>\\dt</code></pre>

<p>Cek struktur tabel users:</p>

<pre><code>\\d users</code></pre>

<p>Keluar:</p>

<pre><code>\\q</code></pre>

<h3>Langkah 2 — Install bcryptjs</h3>
<p>Kita tidak boleh menyimpan password asli di database. Password harus di-hash.</p>

<pre><code>npm install bcryptjs</code></pre>

<p>Jika memakai TypeScript, install type definition:</p>

<pre><code>npm install -D @types/bcryptjs</code></pre>

<h3>Langkah 3 — Buat API route register</h3>

<pre><code>mkdir -p src/app/api/auth/register
nano src/app/api/auth/register/route.ts</code></pre>

<h3>Langkah 4 — Isi API register</h3>

<pre><code>import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and password are required",
        },
        { status: 400 }
      );
    }

    if (password.length &lt; 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters",
        },
        { status: 400 }
      );
    }

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1 LIMIT 1",
      [email]
    );

    if (existingUser.rows.length &gt; 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is already registered",
        },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await pool.query(
      "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at",
      [name, email, passwordHash, "member"]
    );

    return NextResponse.json(
      {
        success: true,
        data: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/auth/register error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to register member",
      },
      { status: 500 }
    );
  }
}</code></pre>

<h3>Langkah 5 — Jalankan development server</h3>

<pre><code>npm run dev</code></pre>

<h3>Langkah 6 — Test register dengan curl</h3>
<p>Buka terminal lain dari folder frontend LMS, lalu jalankan:</p>

<pre><code>curl -X POST http://localhost:3000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\\"name\\":\\"Demo Member\\",\\"email\\":\\"member@example.com\\",\\"password\\":\\"password123\\"}"</code></pre>

<p>Jika memakai Linux/WSL:</p>

<pre><code>curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Demo Member","email":"member@example.com","password":"password123"}'</code></pre>

<h3>Langkah 7 — Cek data user di database</h3>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Jalankan:</p>

<pre><code>SELECT id, name, email, role, created_at FROM users;</code></pre>

<p>Keluar:</p>

<pre><code>\\q</code></pre>

<h3>Catatan keamanan penting</h3>
<ul>
  <li>Jangan pernah menyimpan password asli.</li>
  <li>Jangan mengembalikan <code>password_hash</code> ke frontend.</li>
  <li>Gunakan HTTPS di production.</li>
  <li>Validasi input harus diperketat pada tahap berikutnya.</li>
  <li>Register API ini masih pondasi, belum login session.</li>
</ul>

<h3>Troubleshooting</h3>

<h4>1. Module not found: bcryptjs</h4>

<pre><code>npm install bcryptjs
npm install -D @types/bcryptjs</code></pre>

<h4>2. relation "users" does not exist</h4>
<p>Schema belum dijalankan.</p>

<pre><code>psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h4>3. Email is already registered</h4>
<p>Artinya email sudah ada di database. Gunakan email lain atau cek tabel users:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db
SELECT id, email FROM users;
\\q</code></pre>

<h4>4. Permission denied for table users</h4>

<pre><code>sudo -i -u postgres
psql
\\c lms_db
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO lms_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lms_user;
\\q
exit</code></pre>

<h4>5. API 500 Internal Server Error</h4>
<p>Cek terminal development atau PM2 log:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<h4>6. Body JSON tidak terbaca</h4>
<p>Pastikan request memakai header:</p>

<pre><code>Content-Type: application/json</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
npm install bcryptjs
npm install -D @types/bcryptjs
mkdir -p src/app/api/auth/register
nano src/app/api/auth/register/route.ts
npm run dev
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"name":"Demo Member","email":"member@example.com","password":"password123"}'
psql -h localhost -U lms_user -d lms_db
SELECT id, name, email, role, created_at FROM users;
\\q</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat pondasi register member.</p>
<p>User baru sekarang bisa dikirim melalui API, password di-hash dengan bcrypt, lalu data member disimpan ke PostgreSQL.</p>
<p>Di lesson berikutnya, kita akan mulai membuat pondasi login member.</p>
`,
          },
          {
            id: "s2d-11-video",
            title: "Video Pondasi Register Member",
            type: "video",
            description:
              "Video pendamping untuk memahami pembuatan API register member dengan Next.js dan PostgreSQL.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "38 min",
          },
        ],
      },
      {
        id: "s2d-12",
        title: "Pondasi Login Member",
        duration: "40 min",
        summary:
          "Membuat pondasi login member dengan API route Next.js, verifikasi email dan password, serta response user yang aman tanpa mengirim password hash.",
        order: 12,
        materials: [
          {
            id: "s2d-12-html",
            title: "Pondasi Login Member",
            type: "html",
            description:
              "Membuat API login member, membandingkan password dengan bcrypt, validasi user, test endpoint login, dan troubleshooting error login.",
            htmlContent: `
<h2>Pondasi Login Member</h2>
<p>Pada lesson ini, kita akan membuat pondasi login member.</p>
<p>Lesson sebelumnya sudah membuat register member. Sekarang kita membuat API login untuk mengecek email dan password yang dikirim user.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat API route login.</li>
  <li>Mencari user berdasarkan email.</li>
  <li>Membandingkan password input dengan password hash di database.</li>
  <li>Mengembalikan data user yang aman.</li>
  <li>Mengetes login dengan curl.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan ada file <code>package.json</code>:</p>

<pre><code>ls -la</code></pre>

<h3>Langkah 1 — Pastikan user demo sudah ada</h3>
<p>Masuk ke database:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<p>Cek user:</p>

<pre><code>SELECT id, name, email, role, created_at FROM users;</code></pre>

<p>Keluar:</p>

<pre><code>\\q</code></pre>

<p>Jika belum ada user, jalankan register dari lesson sebelumnya terlebih dahulu.</p>

<h3>Langkah 2 — Pastikan bcryptjs sudah terinstall</h3>

<pre><code>npm list bcryptjs</code></pre>

<p>Jika belum ada:</p>

<pre><code>npm install bcryptjs
npm install -D @types/bcryptjs</code></pre>

<h3>Langkah 3 — Buat API route login</h3>

<pre><code>mkdir -p src/app/api/auth/login
nano src/app/api/auth/login/route.ts</code></pre>

<h3>Langkah 4 — Isi API login</h3>

<pre><code>import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    const userResult = await pool.query(
      "SELECT id, name, email, password_hash, role, created_at FROM users WHERE email = $1 LIMIT 1",
      [email]
    );

    const user = userResult.rows[0];

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.error("POST /api/auth/login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to login",
      },
      { status: 500 }
    );
  }
}</code></pre>

<h3>Langkah 5 — Jalankan development server</h3>

<pre><code>npm run dev</code></pre>

<h3>Langkah 6 — Test login dengan curl</h3>
<p>Jika memakai Windows PowerShell:</p>

<pre><code>curl.exe -X POST http://localhost:3000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\\"email\\":\\"member@example.com\\",\\"password\\":\\"password123\\"}"</code></pre>

<p>Jika memakai Linux/WSL:</p>

<pre><code>curl -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"member@example.com","password":"password123"}'</code></pre>

<h3>Langkah 7 — Expected response</h3>

<pre><code>{
  "success": true,
  "data": {
    "id": 1,
    "name": "Demo Member",
    "email": "member@example.com",
    "role": "member"
  }
}</code></pre>

<p>Perhatikan bahwa response tidak mengirim <code>password_hash</code>. Ini penting untuk keamanan.</p>

<h3>Langkah 8 — Test password salah</h3>

<pre><code>curl -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"member@example.com","password":"password_salah"}'</code></pre>

<p>Response yang benar adalah status <code>401</code> dengan pesan login gagal.</p>

<h3>Langkah 9 — Test build production</h3>

<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<p>Test production:</p>

<pre><code>curl -X POST https://domainkita.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"member@example.com","password":"password123"}'</code></pre>

<h3>Catatan keamanan penting</h3>
<ul>
  <li>Login API ini masih pondasi awal.</li>
  <li>Kita belum membuat session atau cookie login.</li>
  <li>Jangan pernah mengirim <code>password_hash</code> ke frontend.</li>
  <li>Pesan error login sebaiknya dibuat umum: <code>Invalid email or password</code>.</li>
  <li>Production wajib memakai HTTPS.</li>
</ul>

<h3>Troubleshooting</h3>

<h4>1. Login selalu gagal</h4>
<p>Cek apakah user benar-benar ada:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db
SELECT id, email, role FROM users;
\\q</code></pre>

<h4>2. Module not found: bcryptjs</h4>

<pre><code>npm install bcryptjs
npm install -D @types/bcryptjs</code></pre>

<h4>3. relation "users" does not exist</h4>
<p>Schema belum dijalankan.</p>

<pre><code>psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h4>4. password_hash undefined</h4>
<p>Pastikan query login mengambil kolom <code>password_hash</code>.</p>

<pre><code>SELECT id, email, password_hash FROM users;</code></pre>

<h4>5. Body JSON tidak terbaca</h4>
<p>Pastikan request memakai header:</p>

<pre><code>Content-Type: application/json</code></pre>

<h4>6. API 500 Internal Server Error</h4>
<p>Cek terminal development atau PM2 log:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<h4>7. Permission denied for table users</h4>

<pre><code>sudo -i -u postgres
psql
\\c lms_db
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO lms_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lms_user;
\\q
exit</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
npm list bcryptjs
npm install bcryptjs
npm install -D @types/bcryptjs
mkdir -p src/app/api/auth/login
nano src/app/api/auth/login/route.ts
npm run dev
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"member@example.com","password":"password123"}'
npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat pondasi login member.</p>
<p>API login sudah bisa mencari user berdasarkan email, membandingkan password dengan hash, dan mengembalikan data user yang aman.</p>
<p>Di lesson berikutnya, kita akan mulai menyiapkan session atau cookie agar status login bisa dipakai oleh halaman member.</p>
`,
          },
          {
            id: "s2d-12-video",
            title: "Video Pondasi Login Member",
            type: "video",
            description:
              "Video pendamping untuk memahami pembuatan API login member dengan Next.js dan PostgreSQL.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "40 min",
          },
        ],
      },
      {
        id: "s2d-13",
        title: "Session Cookie untuk Login Member",
        duration: "42 min",
        summary:
          "Membuat pondasi session login menggunakan signed cookie sederhana agar status login member bisa dibaca oleh halaman dan API berikutnya.",
        order: 13,
        materials: [
          {
            id: "s2d-13-html",
            title: "Session Cookie untuk Login Member",
            type: "html",
            description:
              "Menambahkan SESSION_SECRET, membuat helper session, menyimpan cookie saat login, membuat endpoint current user, dan test status login member.",
            htmlContent: `
<h2>Session Cookie untuk Login Member</h2>
<p>Pada lesson ini, kita akan membuat pondasi session login menggunakan cookie.</p>
<p>Lesson sebelumnya sudah berhasil membuat API login. Tetapi login belum benar-benar “diingat” oleh browser. Sekarang kita akan menyimpan status login member dalam cookie sederhana.</p>

<h3>Target lesson</h3>
<ul>
  <li>Menambahkan <code>SESSION_SECRET</code> ke environment.</li>
  <li>Membuat helper session sederhana.</li>
  <li>Mengubah API login agar mengirim cookie.</li>
  <li>Membuat API <code>/api/auth/me</code> untuk membaca user login.</li>
  <li>Mengetes cookie login dengan curl.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Pastikan ada file <code>package.json</code>:</p>

<pre><code>ls -la</code></pre>

<h3>Langkah 1 — Tambahkan SESSION_SECRET</h3>
<p>Buka file environment local:</p>

<pre><code>nano .env.local</code></pre>

<p>Tambahkan secret:</p>

<pre><code>SESSION_SECRET=ganti_dengan_string_panjang_random_yang_kuat</code></pre>

<p>Untuk production, tambahkan juga ke <code>.env.production</code>:</p>

<pre><code>nano .env.production</code></pre>

<p>Contoh:</p>

<pre><code>SESSION_SECRET=ganti_dengan_secret_production_yang_berbeda</code></pre>

<p><strong>Penting:</strong> jangan commit file env yang berisi secret ke Git.</p>

<h3>Langkah 2 — Buat helper session</h3>
<p>Buat file helper:</p>

<pre><code>mkdir -p src/lib
nano src/lib/session.ts</code></pre>

<p>Isi file:</p>

<pre><code>import crypto from "crypto";

export type SessionUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const SESSION_COOKIE_NAME = "lms_session";

function getSessionSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret) {
    throw new Error("SESSION_SECRET is not defined");
  }

  return secret;
}

function signPayload(payload: string) {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("hex");
}

export function createSessionValue(user: SessionUser) {
  const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
  const signature = signPayload(payload);

  return payload + "." + signature;
}

export function readSessionValue(value: string | undefined) {
  if (!value) {
    return null;
  }

  const parts = value.split(".");

  if (parts.length !== 2) {
    return null;
  }

  const [payload, signature] = parts;
  const expectedSignature = signPayload(payload);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    return JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    ) as SessionUser;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE_NAME };</code></pre>

<h3>Langkah 3 — Update API login agar mengirim cookie</h3>
<p>Buka file login:</p>

<pre><code>nano src/app/api/auth/login/route.ts</code></pre>

<p>Tambahkan import session:</p>

<pre><code>import {
  SESSION_COOKIE_NAME,
  createSessionValue,
} from "@/lib/session";</code></pre>

<p>Ganti bagian response login sukses menjadi pola berikut:</p>

<pre><code>const safeUser = {
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
};

const response = NextResponse.json({
  success: true,
  data: {
    ...safeUser,
    created_at: user.created_at,
  },
});

response.cookies.set({
  name: SESSION_COOKIE_NAME,
  value: createSessionValue(safeUser),
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
});

return response;</code></pre>

<h3>Langkah 4 — Buat API current user</h3>
<p>Endpoint ini dipakai untuk mengecek siapa user yang sedang login.</p>

<pre><code>mkdir -p src/app/api/auth/me
nano src/app/api/auth/me/route.ts</code></pre>

<p>Isi file:</p>

<pre><code>import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  SESSION_COOKIE_NAME,
  readSessionValue,
} from "@/lib/session";

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  const user = readSessionValue(sessionCookie?.value);

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Not authenticated",
      },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: user,
  });
}</code></pre>

<h3>Langkah 5 — Jalankan development server</h3>

<pre><code>npm run dev</code></pre>

<h3>Langkah 6 — Test login dan simpan cookie</h3>
<p>Jika memakai Linux/WSL:</p>

<pre><code>curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"member@example.com","password":"password123"}'</code></pre>

<p>Jika memakai Windows PowerShell, gunakan:</p>

<pre><code>curl.exe -i -c cookies.txt -X POST http://localhost:3000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\\"email\\":\\"member@example.com\\",\\"password\\":\\"password123\\"}"</code></pre>

<p>Jika berhasil, response header akan memiliki <code>Set-Cookie</code>.</p>

<h3>Langkah 7 — Test current user dengan cookie</h3>
<p>Gunakan cookie yang tadi disimpan:</p>

<pre><code>curl -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<p>Expected response:</p>

<pre><code>{
  "success": true,
  "data": {
    "id": 1,
    "name": "Demo Member",
    "email": "member@example.com",
    "role": "member"
  }
}</code></pre>

<h3>Langkah 8 — Test tanpa cookie</h3>

<pre><code>curl http://localhost:3000/api/auth/me</code></pre>

<p>Expected response:</p>

<pre><code>{
  "success": false,
  "message": "Not authenticated"
}</code></pre>

<h3>Langkah 9 — Test build production</h3>

<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Catatan keamanan penting</h3>
<ul>
  <li>Cookie memakai <code>httpOnly</code> agar tidak mudah dibaca JavaScript browser.</li>
  <li><code>secure</code> aktif saat production agar cookie hanya dikirim melalui HTTPS.</li>
  <li>Session ini masih pondasi sederhana, belum menggantikan sistem auth enterprise.</li>
  <li>Untuk production besar, kita bisa lanjut ke session table, JWT yang lebih matang, atau library auth khusus.</li>
</ul>

<h3>Troubleshooting</h3>

<h4>1. SESSION_SECRET is not defined</h4>
<p>Pastikan file env sudah berisi <code>SESSION_SECRET</code>, lalu restart server.</p>

<pre><code>cat .env.local
npm run dev</code></pre>

<p>Untuk production:</p>

<pre><code>cat .env.production
npm run build
pm2 restart lms</code></pre>

<h4>2. Cookie tidak muncul</h4>
<p>Cek response login dengan <code>-i</code> agar header terlihat:</p>

<pre><code>curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"member@example.com","password":"password123"}'</code></pre>

<h4>3. /api/auth/me selalu 401</h4>
<p>Pastikan request membawa cookie:</p>

<pre><code>curl -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<h4>4. Login sukses tapi production cookie tidak tersimpan</h4>
<p>Jika <code>NODE_ENV=production</code>, cookie memakai <code>secure: true</code>. Jadi harus diakses lewat HTTPS.</p>

<pre><code>https://domainkita.com</code></pre>

<h4>5. Error crypto atau Buffer</h4>
<p>Helper session ini dipakai di server-side route, bukan client component. Jangan import <code>session.ts</code> ke komponen client.</p>

<h4>6. Build gagal karena cookies harus await</h4>
<p>Pada Next.js versi baru, <code>cookies()</code> bisa bersifat async. Pastikan memakai:</p>

<pre><code>const cookieStore = await cookies();</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
nano .env.local
nano .env.production
mkdir -p src/lib
nano src/lib/session.ts
nano src/app/api/auth/login/route.ts
mkdir -p src/app/api/auth/me
nano src/app/api/auth/me/route.ts
npm run dev
curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"member@example.com","password":"password123"}'
curl -b cookies.txt http://localhost:3000/api/auth/me
npm run build
pm2 restart lms</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat pondasi session cookie untuk login member.</p>
<p>Setelah login sukses, browser menerima cookie <code>lms_session</code>. Endpoint <code>/api/auth/me</code> bisa membaca cookie tersebut untuk mengetahui user yang sedang login.</p>
<p>Di lesson berikutnya, kita akan membuat logout agar session bisa dihapus dengan aman.</p>
`,
          },
          {
            id: "s2d-13-video",
            title: "Video Session Cookie untuk Login Member",
            type: "video",
            description:
              "Video pendamping untuk memahami pondasi session cookie login member pada Next.js.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "42 min",
          },
        ],
      },
      {
        id: "s2d-14",
        title: "Logout Member",
        duration: "30 min",
        summary:
          "Membuat endpoint logout untuk menghapus session cookie member agar user bisa keluar dari sistem dengan aman.",
        order: 14,
        materials: [
          {
            id: "s2d-14-html",
            title: "Logout Member",
            type: "html",
            description:
              "Membuat API logout, menghapus cookie session, test logout dengan curl, dan validasi bahwa /api/auth/me kembali menjadi unauthenticated.",
            htmlContent: `
<h2>Logout Member</h2>
<p>Pada lesson ini, kita akan membuat fitur logout member.</p>
<p>Lesson sebelumnya sudah membuat session cookie. Sekarang kita perlu menyediakan endpoint untuk menghapus cookie tersebut agar user bisa keluar dari sistem.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat API route logout.</li>
  <li>Menghapus cookie <code>lms_session</code>.</li>
  <li>Mengetes logout dengan curl.</li>
  <li>Memastikan <code>/api/auth/me</code> kembali menghasilkan status unauthenticated.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Buat API route logout</h3>

<pre><code>mkdir -p src/app/api/auth/logout
nano src/app/api/auth/logout/route.ts</code></pre>

<h3>Langkah 2 — Isi file logout route</h3>

<pre><code>import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/session";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return response;
}</code></pre>

<h3>Langkah 3 — Jalankan development server</h3>

<pre><code>npm run dev</code></pre>

<h3>Langkah 4 — Login dan simpan cookie</h3>

<pre><code>curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"member@example.com","password":"password123"}'</code></pre>

<h3>Langkah 5 — Pastikan user sedang login</h3>

<pre><code>curl -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<p>Jika berhasil, response berisi data user login.</p>

<h3>Langkah 6 — Logout</h3>

<pre><code>curl -i -b cookies.txt -c cookies.txt -X POST http://localhost:3000/api/auth/logout</code></pre>

<p>Perintah ini membawa cookie lama dan menyimpan hasil cookie baru yang sudah dihapus.</p>

<h3>Langkah 7 — Cek ulang current user</h3>

<pre><code>curl -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<p>Expected response:</p>

<pre><code>{
  "success": false,
  "message": "Not authenticated"
}</code></pre>

<h3>PowerShell version</h3>

<pre><code>curl.exe -i -c cookies.txt -X POST http://localhost:3000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\\"email\\":\\"member@example.com\\",\\"password\\":\\"password123\\"}"

curl.exe -b cookies.txt http://localhost:3000/api/auth/me

curl.exe -i -b cookies.txt -c cookies.txt -X POST http://localhost:3000/api/auth/logout

curl.exe -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<h3>Test build production</h3>

<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Logout sukses tetapi /api/auth/me masih login</h4>
<p>Pastikan test logout memakai <code>-b cookies.txt -c cookies.txt</code> agar cookie hasil logout disimpan ulang.</p>

<pre><code>curl -i -b cookies.txt -c cookies.txt -X POST http://localhost:3000/api/auth/logout</code></pre>

<h4>2. SESSION_COOKIE_NAME tidak ditemukan</h4>
<p>Pastikan file session helper sudah ada:</p>

<pre><code>ls -la src/lib/session.ts</code></pre>

<h4>3. Production logout tidak menghapus cookie</h4>
<p>Jika production memakai <code>secure: true</code>, pastikan akses dilakukan lewat HTTPS.</p>

<pre><code>https://domainkita.com</code></pre>

<h4>4. API logout 404</h4>
<p>Pastikan path file benar:</p>

<pre><code>ls -la src/app/api/auth/logout/route.ts</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
mkdir -p src/app/api/auth/logout
nano src/app/api/auth/logout/route.ts
npm run dev
curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"member@example.com","password":"password123"}'
curl -b cookies.txt http://localhost:3000/api/auth/me
curl -i -b cookies.txt -c cookies.txt -X POST http://localhost:3000/api/auth/logout
curl -b cookies.txt http://localhost:3000/api/auth/me
npm run build
pm2 restart lms</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat endpoint logout member.</p>
<p>Logout bekerja dengan cara menghapus cookie <code>lms_session</code>. Setelah logout, endpoint <code>/api/auth/me</code> kembali menghasilkan status tidak login.</p>
<p>Di lesson berikutnya, kita bisa mulai membuat halaman login dan logout di frontend agar member tidak hanya test lewat curl.</p>
`,
          },
          {
            id: "s2d-14-video",
            title: "Video Logout Member",
            type: "video",
            description:
              "Video pendamping untuk memahami cara membuat logout member dengan menghapus session cookie.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min",
          },
        ],
      },
      {
        id: "s2d-15",
        title: "Halaman Login Member",
        duration: "40 min",
        summary:
          "Membuat halaman login frontend yang terhubung ke API login, menyimpan session cookie, mengecek current user, dan menyediakan tombol logout.",
        order: 15,
        materials: [
          {
            id: "s2d-15-html",
            title: "Halaman Login Member",
            type: "html",
            description:
              "Membuat UI login member dengan form email/password, fetch ke API login, cek /api/auth/me, logout, dan troubleshooting error login frontend.",
            htmlContent: `
<h2>Halaman Login Member</h2>
<p>Pada lesson ini, kita akan membuat halaman login member di frontend.</p>
<p>Lesson sebelumnya sudah membuat API login, session cookie, current user, dan logout. Sekarang kita buat UI agar member bisa login dari browser, bukan hanya lewat curl.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat halaman <code>/login</code>.</li>
  <li>Membuat form email dan password.</li>
  <li>Mengirim data login ke <code>/api/auth/login</code>.</li>
  <li>Mengecek current user dari <code>/api/auth/me</code>.</li>
  <li>Membuat tombol logout yang memanggil <code>/api/auth/logout</code>.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Semua command dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Buat halaman login</h3>

<pre><code>mkdir -p src/app/login
nano src/app/login/page.tsx</code></pre>

<h3>Langkah 2 — Isi halaman login</h3>

<pre><code>"use client";

import { FormEvent, useEffect, useState } from "react";

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("member@example.com");
  const [password, setPassword] = useState("password123");
  const [user, setUser] = useState&lt;CurrentUser | null&gt;(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadCurrentUser() {
    const response = await fetch("/api/auth/me", {
      cache: "no-store",
    });

    if (!response.ok) {
      setUser(null);
      return;
    }

    const result = await response.json();
    setUser(result.data);
  }

  useEffect(() =&gt; {
    loadCurrentUser();
  }, []);

  async function handleLogin(event: FormEvent&lt;HTMLFormElement&gt;) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || "Login gagal");
        return;
      }

      setMessage("Login berhasil");
      await loadCurrentUser();
    } catch (error) {
      console.error(error);
      setMessage("Terjadi error saat login");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    setMessage("");

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      setUser(null);
      setMessage("Logout berhasil");
    } catch (error) {
      console.error(error);
      setMessage("Terjadi error saat logout");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    &lt;main className="mx-auto max-w-md p-6"&gt;
      &lt;h1 className="mb-4 text-2xl font-bold"&gt;
        Login Member
      &lt;/h1&gt;

      {user ? (
        &lt;section className="rounded-lg border p-4"&gt;
          &lt;p className="mb-2 font-semibold"&gt;
            Sudah login sebagai:
          &lt;/p&gt;
          &lt;p&gt;{user.name}&lt;/p&gt;
          &lt;p className="text-sm opacity-80"&gt;{user.email}&lt;/p&gt;
          &lt;p className="text-sm opacity-80"&gt;Role: {user.role}&lt;/p&gt;

          &lt;button
            type="button"
            onClick={handleLogout}
            disabled={isLoading}
            className="mt-4 rounded bg-black px-4 py-2 text-white disabled:opacity-60"
          &gt;
            {isLoading ? "Processing..." : "Logout"}
          &lt;/button&gt;
        &lt;/section&gt;
      ) : (
        &lt;form onSubmit={handleLogin} className="space-y-4"&gt;
          &lt;div&gt;
            &lt;label className="mb-1 block text-sm font-medium"&gt;
              Email
            &lt;/label&gt;
            &lt;input
              type="email"
              value={email}
              onChange={(event) =&gt; setEmail(event.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            /&gt;
          &lt;/div&gt;

          &lt;div&gt;
            &lt;label className="mb-1 block text-sm font-medium"&gt;
              Password
            &lt;/label&gt;
            &lt;input
              type="password"
              value={password}
              onChange={(event) =&gt; setPassword(event.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            /&gt;
          &lt;/div&gt;

          &lt;button
            type="submit"
            disabled={isLoading}
            className="w-full rounded bg-black px-4 py-2 text-white disabled:opacity-60"
          &gt;
            {isLoading ? "Login..." : "Login"}
          &lt;/button&gt;
        &lt;/form&gt;
      )}

      {message ? (
        &lt;p className="mt-4 rounded border p-3 text-sm"&gt;
          {message}
        &lt;/p&gt;
      ) : null}
    &lt;/main&gt;
  );
}</code></pre>

<h3>Langkah 3 — Jalankan development server</h3>

<pre><code>npm run dev</code></pre>

<h3>Langkah 4 — Buka halaman login</h3>

<pre><code>http://localhost:3000/login</code></pre>

<p>Coba login memakai user demo:</p>

<pre><code>Email: member@example.com
Password: password123</code></pre>

<h3>Langkah 5 — Cek cookie di browser</h3>
<p>Buka Developer Tools → Application → Cookies → pilih domain localhost.</p>
<p>Jika login berhasil, harus ada cookie bernama <code>lms_session</code>.</p>

<h3>Langkah 6 — Test logout</h3>
<p>Klik tombol logout. Setelah logout, halaman harus kembali menampilkan form login.</p>

<h3>Langkah 7 — Test build production</h3>

<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Login gagal padahal email/password benar</h4>
<p>Cek API login:</p>

<pre><code>curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"member@example.com","password":"password123"}'</code></pre>

<h4>2. Cookie tidak muncul di browser</h4>
<p>Pastikan API login mengirim <code>Set-Cookie</code> dan akses production memakai HTTPS.</p>

<h4>3. /api/auth/me selalu 401</h4>
<p>Pastikan cookie <code>lms_session</code> ada dan belum logout.</p>

<h4>4. Build gagal karena JSX di file .ts</h4>
<p>Pastikan halaman login memakai file <code>page.tsx</code>.</p>

<h4>5. SESSION_SECRET is not defined</h4>
<p>Pastikan file env sudah diisi lalu restart server.</p>

<pre><code>cat .env.local
npm run dev</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
mkdir -p src/app/login
nano src/app/login/page.tsx
npm run dev
npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita membuat halaman login member di frontend.</p>
<p>Member sekarang bisa login, melihat status login, dan logout melalui browser.</p>
<p>Di lesson berikutnya, kita akan membuat halaman member dashboard sederhana yang hanya bisa dipakai setelah login.</p>
`,
          },
          {
            id: "s2d-15-video",
            title: "Video Halaman Login Member",
            type: "video",
            description:
              "Video pendamping untuk memahami pembuatan halaman login member yang terhubung ke API auth.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "40 min",
          },
        ],
      },
      {
        id: "s2d-16",
        title: "Proteksi Member Dashboard",
        duration: "38 min",
        summary:
          "Melindungi halaman dashboard agar hanya bisa dibuka oleh member yang sudah login, tanpa merusak UI dashboard yang sudah ada.",
        order: 16,
        materials: [
          {
            id: "s2d-16-html",
            title: "Proteksi Member Dashboard",
            type: "html",
            description:
              "Membuat auth guard sederhana untuk dashboard, cek /api/auth/me, redirect ke login jika belum login, dan menjaga UI DashboardClient tetap utuh.",
            htmlContent: `
<h2>Proteksi Member Dashboard</h2>
<p>Pada lesson ini, kita akan melindungi halaman dashboard agar hanya bisa dibuka oleh member yang sudah login.</p>
<p>UI dashboard yang sudah ada tidak akan kita ubah dari nol. Kita hanya menambahkan lapisan pengecekan login sebelum dashboard ditampilkan.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat komponen auth guard.</li>
  <li>Mengecek status login melalui <code>/api/auth/me</code>.</li>
  <li>Redirect ke <code>/login</code> jika user belum login.</li>
  <li>Menampilkan dashboard jika user sudah login.</li>
  <li>Menjaga tampilan dashboard lama tetap aman.</li>
</ul>

<h3>Folder kerja command</h3>
<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Buat komponen Auth Guard</h3>
<pre><code>mkdir -p src/components/auth
nano src/components/auth/RequireAuth.tsx</code></pre>

<p>Isi file:</p>

<pre><code>"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const [user, setUser] = useState&lt;CurrentUser | null&gt;(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() =&gt; {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth/me", {
          cache: "no-store",
        });

        if (!response.ok) {
          router.replace("/login");
          return;
        }

        const result = await response.json();
        setUser(result.data);
      } catch (error) {
        console.error(error);
        router.replace("/login");
      } finally {
        setIsChecking(false);
      }
    }

    checkAuth();
  }, [router]);

  if (isChecking) {
    return (
      &lt;main className="mx-auto max-w-4xl p-6"&gt;
        &lt;p&gt;Checking member session...&lt;/p&gt;
      &lt;/main&gt;
    );
  }

  if (!user) {
    return null;
  }

  return &lt;&gt;{children}&lt;/&gt;;
}</code></pre>

<h3>Langkah 2 — Update halaman dashboard</h3>
<p>Buka file:</p>

<pre><code>nano src/app/dashboard/page.tsx</code></pre>

<p>Ganti isinya menjadi:</p>

<pre><code>import RequireAuth from "@/components/auth/RequireAuth";
import DashboardClient from "@/components/dashboard/DashboardClient";
import { learnerCourseProgress } from "@/data/course-progress";

export default function DashboardPage() {
  return (
    &lt;RequireAuth&gt;
      &lt;DashboardClient initialProgressList={learnerCourseProgress} /&gt;
    &lt;/RequireAuth&gt;
  );
}</code></pre>

<h3>Langkah 3 — Test belum login</h3>
<pre><code>npm run dev</code></pre>

<p>Buka:</p>

<pre><code>http://localhost:3000/dashboard</code></pre>

<p>Jika belum login, halaman harus diarahkan ke:</p>

<pre><code>http://localhost:3000/login</code></pre>

<h3>Langkah 4 — Test setelah login</h3>
<p>Login lewat halaman:</p>

<pre><code>http://localhost:3000/login</code></pre>

<p>Setelah login berhasil, buka lagi:</p>

<pre><code>http://localhost:3000/dashboard</code></pre>

<p>Dashboard harus tampil seperti sebelumnya.</p>

<h3>Langkah 5 — Test logout</h3>
<p>Logout dari halaman login, lalu buka lagi dashboard.</p>
<p>Jika cookie sudah terhapus, dashboard harus kembali redirect ke login.</p>

<h3>Langkah 6 — Test build</h3>
<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Dashboard tetap terbuka walau belum login</h4>
<p>Pastikan file <code>src/app/dashboard/page.tsx</code> sudah dibungkus dengan <code>RequireAuth</code>.</p>

<h4>2. Selalu redirect ke login padahal sudah login</h4>
<p>Cek apakah cookie <code>lms_session</code> ada di browser.</p>
<p>Cek juga endpoint:</p>

<pre><code>curl -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<h4>3. Error Module not found</h4>
<p>Pastikan path file benar:</p>

<pre><code>ls -la src/components/auth/RequireAuth.tsx</code></pre>

<h4>4. Build gagal karena ReactNode</h4>
<p>Pastikan import ini ada:</p>

<pre><code>import { ReactNode, useEffect, useState } from "react";</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
mkdir -p src/components/auth
nano src/components/auth/RequireAuth.tsx
nano src/app/dashboard/page.tsx
npm run dev
npm run build
pm2 restart lms</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita tidak merombak UI dashboard. Kita hanya menambahkan auth guard agar dashboard hanya bisa dibuka oleh member yang sudah login.</p>
<p>Ini membuat LMS mulai terasa seperti aplikasi member system sungguhan.</p>
<p>Di lesson berikutnya, kita bisa lanjut menampilkan status login member di header tanpa merusak tampilan header yang sudah ada.</p>
`,
          },
          {
            id: "s2d-16-video",
            title: "Video Proteksi Member Dashboard",
            type: "video",
            description:
              "Video pendamping untuk memahami proteksi halaman dashboard dengan session cookie.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "38 min",
          },
        ],
      },
      {
        id: "s2d-17",
        title: "Header Login Logout Dynamic",
        duration: "34 min",
        summary:
          "Mengubah tombol header agar otomatis menampilkan Login/Register saat belum login, dan nama member plus Logout saat sudah login.",
        order: 17,
        materials: [
          {
            id: "s2d-17-html",
            title: "Header Login Logout Dynamic",
            type: "html",
            description:
              "Membuat HeaderAuthActions client component agar header membaca session dari /api/auth/me tanpa merusak UI header yang sudah ada.",
            htmlContent: `
<h2>Header Login Logout Dynamic</h2>
<p>Pada lesson ini, kita memperbaiki header agar status login terlihat benar.</p>
<p>Masalah sebelumnya: dashboard sudah bisa dibuka setelah login, tetapi header masih menampilkan tombol <code>Login</code>. Penyebabnya adalah tombol header masih static.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat komponen <code>HeaderAuthActions</code>.</li>
  <li>Membaca user login dari <code>/api/auth/me</code>.</li>
  <li>Menampilkan <code>Login</code> dan <code>Get Started</code> jika belum login.</li>
  <li>Menampilkan nama user dan tombol <code>Logout</code> jika sudah login.</li>
  <li>Menjaga layout header lama tetap utuh.</li>
</ul>

<h3>Folder kerja command</h3>
<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Buat komponen HeaderAuthActions</h3>
<pre><code>nano src/components/layout/HeaderAuthActions.tsx</code></pre>

<h3>Langkah 2 — Update Header.tsx</h3>
<pre><code>nano src/components/layout/Header.tsx</code></pre>

<p>Ganti blok <code>header-actions</code> static menjadi:</p>

<pre><code>&lt;HeaderAuthActions /&gt;</code></pre>

<h3>Langkah 3 — Test belum login</h3>
<pre><code>npm run dev</code></pre>

<p>Buka:</p>
<pre><code>http://localhost:3000</code></pre>

<p>Jika belum login, header harus menampilkan:</p>
<ul>
  <li><code>Login</code></li>
  <li><code>Get Started</code></li>
</ul>

<h3>Langkah 4 — Test setelah login</h3>
<p>Login dari:</p>
<pre><code>http://localhost:3000/login</code></pre>

<p>Setelah login, buka dashboard:</p>
<pre><code>http://localhost:3000/dashboard</code></pre>

<p>Header harus menampilkan nama member dan tombol <code>Logout</code>.</p>

<h3>Langkah 5 — Test Logout dari header</h3>
<p>Klik tombol <code>Logout</code> di header.</p>
<p>Setelah logout, user diarahkan ke halaman login dan header kembali menampilkan tombol <code>Login</code>.</p>

<h3>Langkah 6 — Test build</h3>
<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Header masih menampilkan Login setelah login</h4>
<p>Pastikan <code>Header.tsx</code> sudah memakai <code>HeaderAuthActions</code>, bukan blok static lama.</p>

<h4>2. Header selalu logout / tidak mengenali user</h4>
<p>Cek endpoint current user:</p>
<pre><code>curl -b cookies.txt http://localhost:3000/api/auth/me</code></pre>

<h4>3. Error Module not found</h4>
<p>Pastikan file ini ada:</p>
<pre><code>ls -la src/components/layout/HeaderAuthActions.tsx</code></pre>

<h4>4. Logout tidak berubah di header</h4>
<p>Pastikan fungsi logout memanggil:</p>
<pre><code>router.push("/login");
router.refresh();</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, header menjadi dynamic berdasarkan status login member.</p>
<p>UI header lama tetap dijaga, tetapi action button sekarang sudah mengikuti session user.</p>
<p>Di lesson berikutnya, kita bisa mulai menghubungkan enrollment course free ke member dashboard.</p>
`,
          },
          {
            id: "s2d-17-video",
            title: "Video Header Login Logout Dynamic",
            type: "video",
            description:
              "Video pendamping untuk memahami header auth actions yang membaca session member.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "34 min",
          },
        ],
      },
      {
        id: "s2d-18",
        title: "Auto Enroll Free Course ke Dashboard",
        duration: "36 min",
        summary:
          "Menghubungkan tombol Start Free Course agar course masuk ke dashboard member tanpa merusak UI course detail dan dashboard yang sudah ada.",
        order: 18,
        materials: [
          {
            id: "s2d-18-html",
            title: "Auto Enroll Free Course ke Dashboard",
            type: "html",
            description:
              "Menambahkan startBrowserCourseProgress, memperbaiki status not_started, lalu menghubungkan tombol Start Free Course dan Access Now ke dashboard progress.",
            htmlContent: `
<h2>Auto Enroll Free Course ke Dashboard</h2>
<p>Pada lesson ini, kita menghubungkan tombol <code>Start Free Course</code> agar course benar-benar masuk ke dashboard member.</p>
<p>UI course detail dan dashboard tidak kita rombak. Kita hanya memperbaiki logic enrollment progress yang sudah ada.</p>

<h3>Folder kerja command</h3>
<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>File yang diubah</h3>
<ul>
  <li><code>src/lib/course-progress.ts</code></li>
  <li><code>src/components/course/CourseDetailClient.tsx</code></li>
</ul>

<h3>Alur yang ingin dicapai</h3>
<pre><code>Member login
  ↓
Buka detail course
  ↓
Klik Start Free Course / Access Now
  ↓
Progress tersimpan di browser
  ↓
Course muncul di dashboard
  ↓
Member bisa Continue Learning</code></pre>

<h3>Langkah 1 — Update course-progress.ts</h3>
<p>Kita membuat default progress tetap <code>not_started</code>, lalu menambahkan helper <code>startBrowserCourseProgress()</code>.</p>

<pre><code>nano src/lib/course-progress.ts</code></pre>

<h3>Langkah 2 — Update CourseDetailClient</h3>
<p>Kita ubah tombol access menjadi button yang menjalankan enrollment logic, bukan hanya link biasa.</p>

<pre><code>nano src/components/course/CourseDetailClient.tsx</code></pre>

<h3>Langkah 3 — Test dari browser</h3>
<pre><code>npm run dev</code></pre>

<p>Buka course detail:</p>
<pre><code>http://localhost:3000/courses/from-static-lms-to-dynamic-lms</code></pre>

<p>Klik <code>Start Free Course</code> atau <code>Access Now</code>.</p>

<h3>Langkah 4 — Cek dashboard</h3>
<pre><code>http://localhost:3000/dashboard</code></pre>

<p>Course yang baru dimulai harus muncul di dashboard.</p>

<h3>Langkah 5 — Test build</h3>
<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Course tidak muncul di dashboard</h4>
<p>Pastikan tombol course detail sudah memanggil <code>startBrowserCourseProgress(course)</code>.</p>

<h4>2. Semua course langsung muncul di dashboard</h4>
<p>Pastikan default progress memakai:</p>
<pre><code>enrollmentStatus: "not_started"</code></pre>

<h4>3. Button terlihat berubah style</h4>
<p>Pastikan button tetap memakai class lama:</p>
<pre><code>btn-primary course-sidebar-btn
btn-secondary</code></pre>

<h4>4. Build error useRouter</h4>
<p>Pastikan import ini ada:</p>
<pre><code>import { useRouter } from "next/navigation";</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, tombol mulai course sudah menjadi enrollment action.</p>
<p>Member yang login bisa memulai course gratis, lalu course tersebut muncul di dashboard tanpa merusak UI yang sudah ada.</p>
`,
          },
          {
            id: "s2d-18-video",
            title: "Video Auto Enroll Free Course ke Dashboard",
            type: "video",
            description:
              "Video pendamping untuk memahami auto enroll course gratis ke dashboard member.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "36 min",
          },
        ],
      },
      {
        id: "s2d-19",
        title: "Persist Enrollment ke PostgreSQL",
        duration: "42 min",
        summary:
          "Menyimpan enrollment course gratis ke tabel PostgreSQL agar proses start course tidak hanya tersimpan di browser.",
        order: 19,
        materials: [
          {
            id: "s2d-19-html",
            title: "Persist Enrollment ke PostgreSQL",
            type: "html",
            description:
              "Membuat API enrollment, membaca session cookie, validasi course free, menyimpan data ke tabel enrollments, lalu menghubungkannya ke tombol Start Free Course.",
            htmlContent: `
<h2>Persist Enrollment ke PostgreSQL</h2>
<p>Pada lesson sebelumnya, tombol <code>Start Free Course</code> sudah bisa membuat course muncul di dashboard melalui browser progress.</p>
<p>Pada lesson ini, kita naik satu level: enrollment juga disimpan ke PostgreSQL.</p>

<h3>Target lesson</h3>
<ul>
  <li>Membuat API <code>/api/enrollments</code>.</li>
  <li>Membaca user login dari session cookie.</li>
  <li>Validasi course berdasarkan slug.</li>
  <li>Hanya mengizinkan auto enroll untuk course free.</li>
  <li>Menyimpan data ke tabel <code>enrollments</code>.</li>
  <li>Menghubungkan tombol course detail ke API enrollment.</li>
</ul>

<h3>Folder kerja command</h3>
<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<h3>Langkah 1 — Pastikan tabel enrollments sudah ada</h3>
<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<pre><code>\\d enrollments
SELECT id, slug, title, access_type FROM courses;
\\q</code></pre>

<p>Jika tabel belum ada, jalankan ulang schema:</p>

<pre><code>psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h3>Langkah 2 — Buat API enrollment</h3>
<pre><code>mkdir -p src/app/api/enrollments
nano src/app/api/enrollments/route.ts</code></pre>

<p>Isi file sesuai patch di atas.</p>

<h3>Langkah 3 — Update CourseDetailClient</h3>
<pre><code>nano src/components/course/CourseDetailClient.tsx</code></pre>

<p>Ubah function <code>handleStartFreeCourse()</code> menjadi async dan panggil:</p>

<pre><code>await fetch("/api/enrollments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    courseSlug: course.slug,
  }),
});</code></pre>

<h3>Langkah 4 — Test dari browser</h3>
<pre><code>npm run dev</code></pre>

<p>Login terlebih dahulu:</p>
<pre><code>http://localhost:3000/login</code></pre>

<p>Buka course detail:</p>
<pre><code>http://localhost:3000/courses/from-static-lms-to-dynamic-lms</code></pre>

<p>Klik <code>Start Free Course</code> atau <code>Access Now</code>.</p>

<h3>Langkah 5 — Cek data enrollment di database</h3>
<pre><code>psql -h localhost -U lms_user -d lms_db</code></pre>

<pre><code>SELECT
  e.id,
  u.email,
  c.slug,
  c.title,
  e.status,
  e.enrolled_at
FROM enrollments e
JOIN users u ON u.id = e.user_id
JOIN courses c ON c.id = e.course_id
ORDER BY e.enrolled_at DESC;
\\q</code></pre>

<h3>Langkah 6 — Test via curl dengan cookie</h3>
<pre><code>curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"member@example.com","password":"password123"}'

curl -i -b cookies.txt -X POST http://localhost:3000/api/enrollments \\
  -H "Content-Type: application/json" \\
  -d '{"courseSlug":"from-static-lms-to-dynamic-lms"}'</code></pre>

<h3>Langkah 7 — Test build</h3>
<pre><code>npm run build
pm2 restart lms
pm2 logs lms --lines 80</code></pre>

<h3>Troubleshooting</h3>

<h4>1. API enrollment menghasilkan 401</h4>
<p>Artinya user belum login atau cookie tidak terkirim. Login dulu dari halaman login, atau gunakan curl dengan <code>-b cookies.txt</code>.</p>

<h4>2. Course not found</h4>
<p>Pastikan data course sudah ada di database:</p>
<pre><code>SELECT id, slug, title FROM courses;</code></pre>

<h4>3. relation "enrollments" does not exist</h4>
<p>Jalankan schema:</p>
<pre><code>psql -h localhost -U lms_user -d lms_db -f database/schema.sql</code></pre>

<h4>4. duplicate key error</h4>
<p>Patch ini memakai <code>ON CONFLICT (user_id, course_id)</code>, jadi klik berulang tidak membuat data dobel.</p>

<h4>5. Tombol berubah style</h4>
<p>Jangan ubah class tombol. Tetap gunakan class lama:</p>
<pre><code>btn-secondary
btn-primary course-sidebar-btn</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, enrollment tidak lagi hanya menjadi state browser.</p>
<p>Saat member klik <code>Start Free Course</code>, LMS menyimpan enrollment ke PostgreSQL, lalu tetap menjalankan progress browser agar dashboard yang sudah ada tetap bekerja.</p>
<p>Di lesson berikutnya, kita bisa mulai membuat dashboard membaca enrollment dari database.</p>
`,
          },
          {
            id: "s2d-19-video",
            title: "Video Persist Enrollment ke PostgreSQL",
            type: "video",
            description:
              "Video pendamping untuk memahami penyimpanan enrollment member ke PostgreSQL.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "42 min",
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
  totalDuration: "1 Module • 19 Lessons",
  shortDescription:
    "Mengubah LMS static menjadi LMS dynamic dengan database, login, member area, course assignment, dan progress tracking.",
  description:
    "Course gratis lanjutan setelah From Localhost to Live LMS. Kita membangun pondasi database untuk LMS yang sudah online: mulai dari arsitektur PostgreSQL, login, member area, auto assign course free, progress belajar, sampai arah integrasi enterprise dengan Odoo 19 CE melalui API/ORM.",
  curriculum: staticToDynamicCurriculum,
  lessons: flattenCurriculum(staticToDynamicCurriculum),
};
