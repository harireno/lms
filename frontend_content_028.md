# frontend_content_028

=== START FILE: frontend/.env.local.example ===
Folder: frontend
Nama file: .env.local.example
Tipe: content
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```
=== END FILE: frontend/.env.local.example ===

=== START FILE: frontend/next-env.d.ts ===
Folder: frontend
Nama file: next-env.d.ts
Tipe: content
```
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```
=== END FILE: frontend/next-env.d.ts ===

=== START FILE: frontend/next.config.js ===
Folder: frontend
Nama file: next.config.js
Tipe: content
```
module.exports = {};

```
=== END FILE: frontend/next.config.js ===

=== START FILE: frontend/package.json ===
Folder: frontend
Nama file: package.json
Tipe: content
```
{
  "name": "frontend",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.5.15",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.15.30",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "eslint": "^9.25.0",
    "eslint-config-next": "15.3.3",
    "typescript": "^5.8.3"
  }
}

```
=== END FILE: frontend/package.json ===

=== START FILE: frontend/public/icons/.gitkeep ===
Folder: frontend/public/icons
Nama file: .gitkeep
Tipe: content
```


```
=== END FILE: frontend/public/icons/.gitkeep ===

=== START FILE: frontend/public/images/.gitkeep ===
Folder: frontend/public/images
Nama file: .gitkeep
Tipe: content
```


```
=== END FILE: frontend/public/images/.gitkeep ===

=== START FILE: frontend/public/images/course-odoo-card.png ===
Folder: frontend/public/images
Nama file: course-odoo-card.png
Tipe: image
Isi: file gambar, hanya nama file dan letak folder dicantumkan.
=== END FILE: frontend/public/images/course-odoo-card.png ===

=== START FILE: frontend/public/images/course-prompt-card.png ===
Folder: frontend/public/images
Nama file: course-prompt-card.png
Tipe: image
Isi: file gambar, hanya nama file dan letak folder dicantumkan.
=== END FILE: frontend/public/images/course-prompt-card.png ===

=== START FILE: frontend/public/images/course-python-card.png ===
Folder: frontend/public/images
Nama file: course-python-card.png
Tipe: image
Isi: file gambar, hanya nama file dan letak folder dicantumkan.
=== END FILE: frontend/public/images/course-python-card.png ===

=== START FILE: frontend/public/images/cta-learning.png ===
Folder: frontend/public/images
Nama file: cta-learning.png
Tipe: image
Isi: file gambar, hanya nama file dan letak folder dicantumkan.
=== END FILE: frontend/public/images/cta-learning.png ===

=== START FILE: frontend/public/images/hero-lms-student.png ===
Folder: frontend/public/images
Nama file: hero-lms-student.png
Tipe: image
Isi: file gambar, hanya nama file dan letak folder dicantumkan.
=== END FILE: frontend/public/images/hero-lms-student.png ===

=== START FILE: frontend/src/app/about/page.tsx ===
Folder: frontend/src/app/about
Nama file: page.tsx
Tipe: content
```
export default function AboutPage() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="info-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>About</span>
            </div>

            <span className="course-detail-badge">About OdooCamp 247</span>

            <h1 className="info-title">
              Open-source learning energy
              <br />
              for practical developer growth
            </h1>

            <p className="info-text">
              OdooCamp 247 is built for learners who want practical, open-source,
              project-based growth in Python, Odoo Development, and Prompt Engineering.
            </p>
          </div>

          <div className="info-highlight-card">
            <div className="info-highlight-item">
              <strong>Practical</strong>
              <span>Courses built around real project outcomes</span>
            </div>
            <div className="info-highlight-item">
              <strong>Structured</strong>
              <span>Step-by-step lessons from beginner to applied learning</span>
            </div>
            <div className="info-highlight-item">
              <strong>Responsive</strong>
              <span>Comfortable experience on desktop, tablet, and mobile</span>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section-grid">
        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            We believe technical learning should be practical, structured, and
            connected to real open-source work. Instead of stopping at theory,
            OdooCamp 247 helps learners build skills they can actually use.
          </p>
        </div>

        <div className="info-card">
          <h2>What We Teach</h2>
          <p>
            Our learning paths focus on Python fundamentals, Odoo Development,
            and Prompt Engineering. Each course is designed to be beginner-friendly,
            practical, and useful for developers who want real momentum.
          </p>
        </div>

        <div className="info-card">
          <h2>Why OdooCamp 247</h2>
          <p>
            Because learners need more than static content. They need a clear path,
            hands-on lessons, and an ecosystem that feels alive, open, and worth
            returning to every day.
          </p>
        </div>
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/app/about/page.tsx ===

=== START FILE: frontend/src/app/contact/page.tsx ===
Folder: frontend/src/app/contact
Nama file: page.tsx
Tipe: content
```
export default function ContactPage() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="info-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Contact</span>
            </div>

            <span className="course-detail-badge">Contact OdooCamp 247</span>

            <h1 className="info-title">
              Let&apos;s connect
              <br />
              and grow open-source learning
            </h1>

            <p className="info-text">
              Whether you want to ask about courses, partnerships, community learning,
              or developer support, we would love to hear from you.
            </p>
          </div>

          <div className="info-highlight-card">
            <div className="info-highlight-item">
              <strong>Email</strong>
              <span>hello@odoocamp247.local</span>
            </div>
            <div className="info-highlight-item">
              <strong>Response Time</strong>
              <span>Usually within 1–2 business days</span>
            </div>
            <div className="info-highlight-item">
              <strong>Support</strong>
              <span>Course questions, onboarding, and general inquiries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <div className="info-card">
          <h2>Get in Touch</h2>
          <p>
            Send us a message and we will get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <label className="auth-label" htmlFor="contactName">
              Full Name
            </label>
            <input id="contactName" type="text" placeholder="Your full name" className="auth-input" />

            <label className="auth-label" htmlFor="contactEmail">
              Email Address
            </label>
            <input id="contactEmail" type="email" placeholder="you@example.com" className="auth-input" />

            <label className="auth-label" htmlFor="contactMessage">
              Message
            </label>
            <textarea
              id="contactMessage"
              placeholder="Write your message here..."
              className="contact-textarea"
              rows={6}
            />

            <button type="submit" className="auth-submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="info-card">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> hello@odoocamp247.local</p>
          <p><strong>Support:</strong> support@odoocamp247.local</p>
          <p><strong>Availability:</strong> Monday – Friday</p>
          <p><strong>Focus:</strong> Open-source developer education and practical learning support</p>
        </div>
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/app/contact/page.tsx ===

=== START FILE: frontend/src/app/courses/[slug]/lessons/[lessonId]/page.tsx ===
Folder: frontend/src/app/courses/[slug]/lessons/[lessonId]
Nama file: page.tsx
Tipe: content
```
import LessonDetailClient from "@/components/course/LessonDetailClient";
import { getCourseLessonBySlugAndLessonId } from "@/services/course.service";
import { notFound } from "next/navigation";

type LessonDetailPageProps = {
  params: Promise<{ slug: string; lessonId: string }>;
};

export default async function LessonDetailPage({
  params,
}: LessonDetailPageProps) {
  const { slug, lessonId } = await params;

  const result = await getCourseLessonBySlugAndLessonId(slug, lessonId);

  if (!result) {
    notFound();
  }

  const {
    course,
    lesson,
    progress,
    previousLesson,
    nextLesson,
  } = result;

  return (
    <LessonDetailClient
      course={course}
      lesson={lesson}
      initialProgress={progress}
      previousLessonId={previousLesson?.id ?? null}
      nextLessonId={nextLesson?.id ?? null}
    />
  );
}

```
=== END FILE: frontend/src/app/courses/[slug]/lessons/[lessonId]/page.tsx ===

=== START FILE: frontend/src/app/courses/[slug]/page.tsx ===
Folder: frontend/src/app/courses/[slug]
Nama file: page.tsx
Tipe: content
```
import { notFound } from "next/navigation";
import { courses, getCourseImageBySlug } from "@/data/courses";
import { getCourseProgressBySlug } from "@/data/course-progress";
import CourseDetailClient from "@/components/course/CourseDetailClient";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  const progress = getCourseProgressBySlug(slug);

  const courseImage = getCourseImageBySlug(course.slug);

  return (
    <CourseDetailClient
      course={course}
      courseImage={courseImage}
      initialProgress={progress}
    />
  );
}

```
=== END FILE: frontend/src/app/courses/[slug]/page.tsx ===

=== START FILE: frontend/src/app/courses/page.tsx ===
Folder: frontend/src/app/courses
Nama file: page.tsx
Tipe: content
```
import CourseList from "@/components/CourseList";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  const totalLessons = courses.reduce(
    (total, course) => total + course.lessons.length,
    0
  );
  const freeCourses = courses.filter((course) => course.price === null).length;

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Courses</span>
            </div>

            <span className="course-detail-badge">Explore All Courses</span>

            <h1 className="courses-title">
              Learn practical skills
              <br />
              with structured open-source courses
            </h1>

            <p className="courses-text">
              Choose from curated learning paths designed to help you build real projects,
              strengthen your portfolio, and grow your open-source development skills step by step.
            </p>

            <div className="courses-actions">
              <a href="/register" className="btn-primary">
                Start Learning
              </a>
              <a href="/about" className="btn-secondary">
                Why OdooCamp 247
              </a>
            </div>
          </div>

          <div className="courses-summary-card">
            <div className="courses-summary-item">
              <strong>{courses.length}</strong>
              <span>Total Courses</span>
            </div>
            <div className="courses-summary-item">
              <strong>{totalLessons}</strong>
              <span>Total Lessons</span>
            </div>
            <div className="courses-summary-item">
              <strong>{freeCourses}</strong>
              <span>Free Course</span>
            </div>
            <div className="courses-summary-item">
              <strong>Beginner</strong>
              <span>Friendly</span>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-list-section">
        <div className="section-head">
          <h2>Available Courses</h2>
          <p>Browse all available courses and choose the one that fits your goals.</p>
        </div>

        <CourseList courses={courses} />
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/app/courses/page.tsx ===

=== START FILE: frontend/src/app/dashboard/page.tsx ===
Folder: frontend/src/app/dashboard
Nama file: page.tsx
Tipe: content
```
import DashboardClient from "@/components/dashboard/DashboardClient";
import { learnerCourseProgress } from "@/data/course-progress";

export default function DashboardPage() {
  return <DashboardClient initialProgressList={learnerCourseProgress} />;
}

```
=== END FILE: frontend/src/app/dashboard/page.tsx ===

=== START FILE: frontend/src/app/globals.css ===
Folder: frontend/src/app
Nama file: globals.css
Tipe: content
```
*{
box-sizing:border-box;
}

html,
body{
margin:0;
padding:0;
font-family:Arial,sans-serif;
background:#f7f9fc;
color:#111827;
}

body{
overflow-x:hidden;
}

main{
max-width:1200px;
margin:auto;
padding:40px 24px;
}

img{
max-width:100%;
display:block;
}

a{
text-decoration:none;
}

.hero-section{
padding:70px 0;
}

.hero-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
align-items:center;
}

.hero-badge{
display:inline-block;
padding:10px 16px;
border-radius:999px;
background:#dbeafe;
font-weight:700;
margin-bottom:20px;
}

.hero-title{
font-size:60px;
line-height:1.1;
margin-bottom:24px;
}

.hero-text{
font-size:20px;
line-height:1.7;
color:#4b5563;
max-width:580px;
}

.hero-learner-panel{
margin-top:24px;
padding:18px;
border-radius:22px;
background:#ffffff;
border:1px solid #dbeafe;
box-shadow:0 14px 34px rgba(37,99,235,0.08);
max-width:620px;
}

.hero-learner-panel-head{
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
flex-wrap:wrap;
margin-bottom:12px;
}

.hero-learner-panel-head strong{
font-size:18px;
color:#111827;
}

.hero-learner-panel-head span{
display:inline-flex;
align-items:center;
justify-content:center;
padding:7px 12px;
border-radius:999px;
background:#eff6ff;
color:#1d4ed8;
font-size:12px;
font-weight:800;
}

.hero-progress-shell{
margin-bottom:14px;
}

.hero-learner-meta{
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
gap:12px;
}

.hero-learner-meta-item{
padding:14px;
border-radius:16px;
background:#f8fafc;
border:1px solid #e5e7eb;
}

.hero-learner-meta-item small{
display:block;
font-size:11px;
font-weight:700;
color:#6b7280;
margin-bottom:6px;
}

.hero-learner-meta-item strong{
display:block;
font-size:14px;
line-height:1.5;
color:#111827;
}

.hero-actions{
display:flex;
gap:16px;
margin-top:28px;
flex-wrap:wrap;
}

.btn-primary{
display:inline-flex;
align-items:center;
justify-content:center;
padding:14px 22px;
border-radius:12px;
background:#2563eb;
color:#ffffff;
font-weight:700;
transition:0.2s ease;
}

.btn-primary:hover{
background:#1d4ed8;
}

.btn-secondary{
display:inline-flex;
align-items:center;
justify-content:center;
padding:14px 22px;
border-radius:12px;
background:#ffffff;
color:#111827;
font-weight:700;
border:1px solid #d1d5db;
transition:0.2s ease;
}

.btn-secondary:hover{
background:#f3f4f6;
}

.hero-visual{
display:flex;
justify-content:center;
}

.hero-image{
width:100%;
max-width:520px;
border-radius:24px;
box-shadow:0 20px 50px rgba(15,23,42,0.14);
}

.stats-section{
padding:10px 0 30px;
}

.stats-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:18px;
}

.stats-grid > div{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:18px;
padding:24px;
text-align:center;
box-shadow:0 10px 30px rgba(15,23,42,0.05);
}

.stats-grid h3{
margin:0 0 8px;
font-size:28px;
}

.stats-grid p{
margin:0;
color:#6b7280;
}

.section-block{
padding:28px 0 16px;
}

.section-head{
margin-bottom:20px;
}

.section-head h2{
margin:0 0 8px;
font-size:34px;
}

.section-head p{
margin:0;
color:#6b7280;
line-height:1.7;
}

.course-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:24px;
}

.course-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:20px;
overflow:hidden;
box-shadow:0 12px 30px rgba(15,23,42,0.06);
transition:transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card-active{
border-color:#bfdbfe;
box-shadow:0 18px 38px rgba(37,99,235,0.10);
}

.course-card:hover{
transform:translateY(-4px);
box-shadow:0 18px 40px rgba(15,23,42,0.10);
}

.course-thumb-wrap{
width:100%;
aspect-ratio:4/3;
overflow:hidden;
background:#e5e7eb;
}

.course-thumb{
width:100%;
height:100%;
object-fit:cover;
}

.course-body{
padding:20px;
}

.course-card-badge-row{
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-bottom:12px;
}

.course-badge{
display:inline-block;
padding:6px 10px;
border-radius:999px;
background:#eef2ff;
color:#4338ca;
font-size:12px;
font-weight:700;
margin-bottom:12px;
}

.course-badge-free{
background:#dcfce7;
color:#166534;
}

.course-badge-active{
background:#dbeafe;
color:#1d4ed8;
}

.course-progress-pill{
display:inline-flex;
align-items:center;
justify-content:center;
min-width:52px;
padding:6px 10px;
border-radius:999px;
background:#eff6ff;
color:#1d4ed8;
font-size:12px;
font-weight:800;
border:1px solid #bfdbfe;
}

.course-body h3{
margin:0 0 10px;
font-size:24px;
}

.course-body p{
margin:0 0 12px;
color:#6b7280;
}

.course-price{
font-size:22px;
font-weight:800;
margin-bottom:18px;
}

.course-card-progress-box{
margin:0 0 16px;
padding:14px;
border-radius:16px;
background:#f8fafc;
border:1px solid #e5e7eb;
}

.course-card-progress-shell{
margin-bottom:12px;
}

.course-card-progress-inline{
margin-top:2px;
}

.course-current-lesson-note{
margin-top:4px;
padding:12px;
border-radius:14px;
background:#ffffff;
border:1px solid #dbeafe;
}

.course-current-lesson-note small{
display:block;
font-size:11px;
font-weight:700;
color:#6b7280;
margin-bottom:4px;
}

.course-current-lesson-note strong{
display:block;
font-size:14px;
line-height:1.4;
color:#1e3a8a;
}

.course-card-meta-row{
display:flex;
flex-direction:column;
gap:6px;
margin-bottom:16px;
font-size:12px;
color:#6b7280;
}

.course-price-free{
color:#166534;
}

.enroll-button{
width:100%;
padding:14px 16px;
border:none;
border-radius:12px;
background:#111827;
color:#ffffff;
font-weight:700;
cursor:pointer;
transition:0.2s ease;
}

.enroll-button:hover{
background:#1f2937;
}

.enroll-button-free{
background:#16a34a;
}

.enroll-button-free:hover{
background:#15803d;
}

.enroll-button-continue{
background:#2563eb;
}

.enroll-button-continue:hover{
background:#1d4ed8;
}

.why-section{
padding:40px 0;
}

.why-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

.why-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:18px;
padding:24px;
box-shadow:0 10px 30px rgba(15,23,42,0.05);
}

.why-card h3{
margin-top:0;
margin-bottom:10px;
}

.why-card p{
margin:0;
color:#6b7280;
line-height:1.7;
}

.cta-banner{
margin-top:30px;
padding:28px;
border-radius:24px;
background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%);
display:grid;
grid-template-columns:1.2fr 0.8fr;
gap:24px;
align-items:center;
color:#ffffff;
overflow:hidden;
}

.cta-content h2{
margin-top:0;
margin-bottom:12px;
font-size:36px;
}

.cta-content p{
margin:0 0 20px;
line-height:1.7;
color:rgba(255,255,255,0.9);
}

.cta-actions{
display:flex;
gap:16px;
flex-wrap:wrap;
}

.cta-image-wrap{
display:flex;
justify-content:center;
align-items:center;
}

.cta-image{
width:100%;
max-width:420px;
border-radius:20px;
box-shadow:0 18px 40px rgba(0,0,0,0.25);
}

@media (max-width: 991px){
.hero-grid{
grid-template-columns:1fr;
gap:32px;
}

.hero-title{
font-size:42px;
}

.stats-grid{
grid-template-columns:repeat(2,1fr);
}

.why-grid{
grid-template-columns:1fr;
}

.cta-banner{
grid-template-columns:1fr;
}

.hero-learner-meta{
grid-template-columns:1fr;
}
}

@media (max-width: 640px){
main{
padding:28px 16px;
}

.hero-section{
padding:36px 0;
}

.hero-title{
font-size:34px;
}

.hero-text{
font-size:17px;
}

.stats-grid{
grid-template-columns:1fr;
}

.section-head h2{
font-size:28px;
}

.hero-learner-panel{
padding:16px;
border-radius:18px;
}

.course-card-progress-box{
padding:12px;
}
}

.site-header{
position:sticky;
top:0;
z-index:50;
backdrop-filter:blur(14px);
background:rgba(255,255,255,0.9);
border-bottom:1px solid rgba(229,231,235,0.9);
}

.header-container{
max-width:1200px;
margin:0 auto;
padding:16px 24px;
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
}

.header-brand{
display:flex;
align-items:center;
gap:12px;
color:#111827;
min-width:0;
}

.header-brand-mark{
width:42px;
height:42px;
display:flex;
align-items:center;
justify-content:center;
border-radius:12px;
background:linear-gradient(135deg,#2563eb 0%,#1e3a8a 100%);
color:#ffffff;
font-weight:800;
font-size:20px;
box-shadow:0 10px 24px rgba(37,99,235,0.28);
}

.header-brand-text{
display:flex;
flex-direction:column;
}

.header-brand-text strong{
font-size:18px;
line-height:1.2;
}

.header-brand-text span{
font-size:12px;
color:#6b7280;
line-height:1.2;
}

.header-nav{
display:flex;
align-items:center;
gap:24px;
flex-wrap:wrap;
}

.header-nav a{
color:#374151;
font-weight:600;
transition:0.2s ease;
}

.header-nav a:hover{
color:#111827;
}

.header-actions{
display:flex;
align-items:center;
gap:12px;
flex-wrap:wrap;
}

.header-learner-indicator{
display:flex;
align-items:center;
gap:12px;
min-width:0;
padding:10px 14px;
border-radius:16px;
background:rgba(255,255,255,0.92);
border:1px solid #dbeafe;
box-shadow:0 10px 24px rgba(37,99,235,0.08);
color:#111827;
transition:0.2s ease;
}

.header-learner-indicator:hover{
transform:translateY(-1px);
box-shadow:0 14px 28px rgba(37,99,235,0.12);
}

.header-learner-indicator-empty{
border-color:#e5e7eb;
box-shadow:0 10px 24px rgba(15,23,42,0.05);
}

.header-progress-ring{
position:relative;
width:50px;
height:50px;
border-radius:999px;
display:flex;
align-items:center;
justify-content:center;
flex-shrink:0;
}

.header-progress-ring-empty{
background:conic-gradient(#cbd5e1 0% 100%, #e5e7eb 100% 100%);
}

.header-progress-ring-inner{
width:36px;
height:36px;
border-radius:999px;
background:#ffffff;
display:flex;
align-items:center;
justify-content:center;
box-shadow:inset 0 0 0 1px #e5e7eb;
}

.header-progress-ring-inner span{
font-size:11px;
font-weight:800;
color:#1d4ed8;
}

.header-learner-copy{
min-width:0;
display:flex;
flex-direction:column;
}

.header-learner-copy small{
font-size:11px;
font-weight:700;
color:#6b7280;
margin-bottom:2px;
}

.header-learner-copy strong{
font-size:14px;
line-height:1.3;
color:#111827;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
max-width:240px;
}

.header-learner-copy span{
font-size:12px;
line-height:1.4;
color:#6b7280;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
max-width:240px;
}

.header-link-button{
display:inline-flex;
align-items:center;
justify-content:center;
padding:10px 16px;
border-radius:12px;
border:1px solid #d1d5db;
background:#ffffff;
color:#111827;
font-weight:700;
transition:0.2s ease;
}

.header-link-button:hover{
background:#f3f4f6;
}

.header-cta-button{
display:inline-flex;
align-items:center;
justify-content:center;
padding:10px 18px;
border-radius:12px;
background:#111827;
color:#ffffff;
font-weight:700;
box-shadow:0 10px 24px rgba(17,24,39,0.16);
transition:0.2s ease;
}

.header-cta-button:hover{
background:#1f2937;
}

.site-footer{
margin-top:60px;
background:#0f172a;
color:#e5e7eb;
}

.footer-container{
max-width:1200px;
margin:0 auto;
padding:48px 24px 32px;
display:grid;
grid-template-columns:1.2fr 1fr 1fr;
gap:28px;
}

.footer-brand{
display:flex;
align-items:flex-start;
gap:14px;
}

.footer-brand-mark{
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:14px;
background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%);
color:#ffffff;
font-weight:800;
font-size:20px;
}

.footer-brand strong{
display:block;
font-size:18px;
margin-bottom:8px;
color:#ffffff;
}

.footer-brand p{
margin:0;
line-height:1.7;
color:#cbd5e1;
max-width:320px;
}

.footer-links-block h4{
margin:0 0 14px;
font-size:16px;
color:#ffffff;
}

.footer-links{
display:flex;
flex-direction:column;
gap:12px;
}

.footer-links a{
color:#cbd5e1;
transition:0.2s ease;
}

.footer-links a:hover{
color:#ffffff;
}

.footer-bottom{
max-width:1200px;
margin:0 auto;
padding:18px 24px 28px;
border-top:1px solid rgba(255,255,255,0.08);
display:flex;
align-items:center;
justify-content:space-between;
gap:16px;
flex-wrap:wrap;
}

.footer-bottom small{
color:#94a3b8;
}

.footer-bottom-links{
display:flex;
align-items:center;
gap:16px;
flex-wrap:wrap;
}

.footer-bottom-links a{
color:#cbd5e1;
font-size:14px;
}

.footer-bottom-links a:hover{
color:#ffffff;
}

@media (max-width: 991px){
.header-container{
flex-wrap:wrap;
justify-content:center;
}

.header-brand{
width:100%;
justify-content:center;
}

.header-nav{
justify-content:center;
}

.header-learner-indicator{
order:4;
width:100%;
justify-content:flex-start;
}

.header-actions{
justify-content:center;
}

.footer-container{
grid-template-columns:1fr 1fr;
}
}

@media (max-width: 640px){
.header-container{
padding:14px 16px;
}

.header-nav{
gap:16px;
}

.header-actions{
width:100%;
}

.header-learner-indicator{
padding:10px 12px;
}

.header-learner-copy strong,
.header-learner-copy span{
max-width:100%;
}

.header-link-button,
.header-cta-button{
flex:1;
}

.footer-container{
grid-template-columns:1fr;
padding:36px 16px 24px;
}

.footer-bottom{
padding:16px 16px 24px;
flex-direction:column;
align-items:flex-start;
}
}

.course-detail-page{
padding-top:12px;
}

.course-detail-hero{
margin-bottom:32px;
padding:36px;
border-radius:28px;
background:linear-gradient(135deg,#eff6ff 0%,#ffffff 55%,#eef2ff 100%);
border:1px solid #dbeafe;
box-shadow:0 18px 40px rgba(15,23,42,0.06);
}

.course-detail-grid{
display:grid;
grid-template-columns:1.15fr 0.85fr;
gap:32px;
align-items:center;
}

.course-breadcrumb{
display:flex;
align-items:center;
gap:10px;
flex-wrap:wrap;
margin-bottom:18px;
font-size:14px;
color:#6b7280;
}

.course-breadcrumb a{
color:#2563eb;
font-weight:600;
}

.course-detail-badge{
display:inline-block;
padding:8px 14px;
border-radius:999px;
background:#dbeafe;
color:#1d4ed8;
font-weight:700;
margin-bottom:18px;
}

.course-detail-badge-free{
background:#dcfce7;
color:#166534;
}

.course-detail-title{
margin:0 0 16px;
font-size:52px;
line-height:1.08;
}

.course-detail-text{
margin:0 0 24px;
font-size:18px;
line-height:1.8;
color:#4b5563;
max-width:680px;
}

.course-detail-stats{
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
gap:16px;
margin-bottom:24px;
}

.course-detail-stat{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:18px;
padding:18px;
box-shadow:0 10px 28px rgba(15,23,42,0.05);
}

.course-detail-stat strong{
display:block;
font-size:24px;
margin-bottom:6px;
}

.course-detail-stat span{
display:block;
color:#6b7280;
font-size:14px;
}

.course-detail-actions{
display:flex;
gap:16px;
flex-wrap:wrap;
}

.course-detail-visual{
display:flex;
justify-content:center;
}

.course-detail-image{
width:100%;
max-width:480px;
border-radius:24px;
box-shadow:0 22px 50px rgba(15,23,42,0.16);
object-fit:cover;
}

.course-detail-content{
display:grid;
grid-template-columns:minmax(0,1fr) 320px;
gap:28px;
align-items:start;
}

.lesson-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.lesson-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:20px;
padding:22px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
transition:transform 0.2s ease, box-shadow 0.2s ease;
}

.lesson-card:hover{
transform:translateY(-4px);
box-shadow:0 18px 38px rgba(15,23,42,0.09);
}

.lesson-card-top{
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-bottom:14px;
flex-wrap:wrap;
}

.lesson-number{
display:inline-flex;
align-items:center;
justify-content:center;
padding:7px 12px;
border-radius:999px;
background:#eef2ff;
color:#4338ca;
font-size:12px;
font-weight:700;
}

.lesson-duration{
font-size:13px;
font-weight:700;
color:#374151;
}

.lesson-card h3{
margin:0 0 10px;
font-size:22px;
line-height:1.3;
}

.lesson-card p{
margin:0;
line-height:1.7;
color:#6b7280;
}

.course-sidebar{
position:sticky;
top:110px;
}

.course-sidebar-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 14px 34px rgba(15,23,42,0.06);
}

.course-sidebar-label{
margin:0 0 8px;
font-size:14px;
font-weight:700;
color:#6b7280;
}

.course-sidebar-price{
font-size:42px;
font-weight:800;
line-height:1;
margin-bottom:14px;
}

.course-sidebar-price-free{
color:#166534;
}

.course-sidebar-copy{
margin:0 0 20px;
line-height:1.7;
color:#6b7280;
}

.course-sidebar-btn{
width:100%;
margin-bottom:12px;
}

.course-sidebar-meta{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
margin:0 0 20px;
}

.course-sidebar-meta-item{
background:#f8fafc;
border:1px solid #e5e7eb;
border-radius:16px;
padding:14px;
}

.course-sidebar-meta-item span{
display:block;
font-size:12px;
color:#6b7280;
margin-bottom:6px;
}

.course-sidebar-meta-item strong{
display:block;
font-size:16px;
}

.course-progress-panel{
margin-bottom:28px;
}

.progress-summary-grid{
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
gap:16px;
margin-bottom:18px;
}

.progress-summary-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:20px;
padding:20px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.progress-summary-card span{
display:block;
font-size:13px;
font-weight:700;
color:#6b7280;
margin-bottom:8px;
}

.progress-summary-card strong{
display:block;
font-size:30px;
margin-bottom:8px;
}

.progress-summary-card small{
display:block;
line-height:1.6;
color:#6b7280;
}

.progress-bar-shell{
width:100%;
height:12px;
border-radius:999px;
background:#e5e7eb;
overflow:hidden;
margin-bottom:18px;
}

.progress-bar-fill{
height:100%;
border-radius:999px;
background:linear-gradient(90deg,#2563eb 0%,#16a34a 100%);
}

.progress-bar-fill-material{
background:linear-gradient(90deg,#7c3aed 0%,#2563eb 100%);
}

.progress-bar-shell-tight{
margin-bottom:0;
height:10px;
}

.progress-inline-head{
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-bottom:8px;
}

.progress-inline-head span{
font-size:13px;
font-weight:700;
color:#6b7280;
}

.progress-inline-head strong{
font-size:14px;
}

.progress-dual-shell{
display:grid;
grid-template-columns:1fr;
gap:16px;
margin-bottom:18px;
}

.progress-dual-item{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:18px;
padding:16px;
box-shadow:0 10px 28px rgba(15,23,42,0.04);
}

.current-lesson-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:20px;
padding:22px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.current-lesson-card h3{
margin:0 0 10px;
font-size:24px;
}

.current-lesson-card p{
margin:0 0 14px;
line-height:1.7;
color:#6b7280;
}

.current-lesson-meta{
display:flex;
gap:10px;
flex-wrap:wrap;
}

.current-lesson-meta span{
display:inline-flex;
padding:8px 12px;
border-radius:999px;
background:#eef2ff;
font-size:13px;
font-weight:700;
color:#4338ca;
}

.current-lesson-button{
margin-top:16px;
}

.curriculum-section-list{
display:flex;
flex-direction:column;
gap:24px;
}

.curriculum-section-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.curriculum-section-head{
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:20px;
margin-bottom:18px;
}

.curriculum-section-head h3{
margin:12px 0 10px;
font-size:28px;
}

.curriculum-section-head p{
margin:0;
line-height:1.7;
color:#6b7280;
max-width:760px;
}

.curriculum-section-count{
white-space:nowrap;
padding:10px 14px;
border-radius:999px;
background:#eff6ff;
color:#1d4ed8;
font-weight:700;
font-size:14px;
}

.lesson-card-current{
border-color:#bfdbfe;
box-shadow:0 18px 38px rgba(37,99,235,0.10);
}

.lesson-status-row{
display:flex;
gap:10px;
flex-wrap:wrap;
margin-top:16px;
}

.lesson-status-pill{
display:inline-flex;
align-items:center;
padding:7px 12px;
border-radius:999px;
background:#f3f4f6;
color:#374151;
font-size:12px;
font-weight:700;
}

.lesson-status-complete{
background:#dcfce7;
color:#166534;
}

.lesson-status-preview{
background:#fef3c7;
color:#92400e;
}

.lesson-material-inline{
display:flex;
gap:8px;
flex-wrap:wrap;
margin-top:16px;
}

.lesson-open-link{
display:inline-flex;
margin-top:16px;
font-weight:700;
color:#2563eb;
}

.lesson-open-link:hover{
color:#1d4ed8;
}

.lesson-progress-mini{
margin-top:16px;
padding:14px;
border-radius:16px;
background:#f8fafc;
border:1px solid #e5e7eb;
}

.lesson-progress-mini-text{
display:block;
margin-top:8px;
font-size:12px;
color:#6b7280;
}

.material-chip{
display:inline-flex;
align-items:center;
padding:7px 10px;
border-radius:999px;
background:#eef2ff;
color:#4338ca;
font-size:12px;
font-weight:700;
}

.section-head-spaced{
margin-top:34px;
}

.material-catalog{
display:flex;
flex-direction:column;
gap:24px;
}

.material-lesson-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.material-lesson-head{
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:16px;
margin-bottom:18px;
}

.material-lesson-head h3{
margin:0 0 10px;
font-size:26px;
}

.material-lesson-head p{
margin:0;
line-height:1.7;
color:#6b7280;
}

.material-list{
display:grid;
gap:16px;
}

.material-item{
border:1px solid #e5e7eb;
border-radius:20px;
padding:20px;
background:#f8fafc;
}

.material-item-completed{
border-color:#bbf7d0;
background:#f0fdf4;
}

.material-status-pill{
margin-left:auto;
}

.material-item-top{
display:flex;
align-items:center;
gap:12px;
flex-wrap:wrap;
margin-bottom:10px;
}

.material-item p{
margin:0 0 14px;
line-height:1.7;
color:#6b7280;
}

.material-html-preview{
padding:16px;
border-radius:16px;
background:#ffffff;
border:1px solid #e5e7eb;
line-height:1.7;
color:#374151;
margin-bottom:12px;
}

.material-html-preview h2{
margin-top:0;
font-size:22px;
}

.material-file-name{
display:block;
margin-bottom:12px;
color:#6b7280;
}

.material-link{
display:inline-flex;
align-items:center;
justify-content:center;
padding:10px 16px;
border-radius:12px;
background:#111827;
color:#ffffff;
font-weight:700;
}

.material-link:hover{
background:#1f2937;
}

.dashboard-page{
padding-top:12px;
}

.dashboard-course-list{
padding:8px 0 16px;
}

.dashboard-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:24px;
}

.dashboard-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.dashboard-card-top{
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-bottom:14px;
}

.dashboard-card h3{
margin:0 0 10px;
font-size:28px;
}

.dashboard-card p{
margin:0 0 18px;
line-height:1.7;
color:#6b7280;
}

.dashboard-meta-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
margin-bottom:18px;
}

.dashboard-meta-grid div{
background:#f8fafc;
border:1px solid #e5e7eb;
border-radius:16px;
padding:14px;
}

.dashboard-meta-grid span{
display:block;
font-size:12px;
color:#6b7280;
margin-bottom:6px;
}

.dashboard-meta-grid strong{
display:block;
font-size:16px;
}

.dashboard-action{
width:100%;
}

.dashboard-progress-group{
margin-bottom:16px;
}

.lesson-page{
padding-top:12px;
}

.lesson-hero{
margin-bottom:32px;
padding:36px;
border-radius:28px;
background:linear-gradient(135deg,#eff6ff 0%,#ffffff 55%,#eef2ff 100%);
border:1px solid #dbeafe;
box-shadow:0 18px 40px rgba(15,23,42,0.06);
}

.lesson-hero-grid{
display:grid;
grid-template-columns:1.1fr 0.9fr;
gap:28px;
align-items:start;
}

.lesson-title{
margin:0 0 16px;
font-size:48px;
line-height:1.08;
}

.lesson-text{
margin:0 0 24px;
font-size:18px;
line-height:1.8;
color:#4b5563;
max-width:760px;
}

.lesson-hero-meta{
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
gap:16px;
margin-bottom:24px;
}

.lesson-hero-actions{
display:flex;
gap:16px;
flex-wrap:wrap;
}

.lesson-hero-progress-card{
margin-bottom:24px;
padding:18px;
border-radius:18px;
background:#ffffff;
border:1px solid #e5e7eb;
box-shadow:0 10px 28px rgba(15,23,42,0.05);
}

.lesson-hero-progress-text{
display:block;
margin-top:8px;
font-size:12px;
color:#6b7280;
}

.lesson-outline-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 14px 34px rgba(15,23,42,0.06);
}

.lesson-outline-card h3{
margin:0 0 10px;
font-size:28px;
}

.lesson-content-layout{
display:grid;
grid-template-columns:minmax(0,1fr) 320px;
gap:28px;
align-items:start;
}

.lesson-material-stack{
display:flex;
flex-direction:column;
gap:24px;
}

.lesson-live-progress-panel{
margin-bottom:28px;
}

.lesson-progress-shell{
margin-bottom:16px;
}

.lesson-progress-action-row{
display:flex;
gap:12px;
flex-wrap:wrap;
}

.lesson-complete-button{
display:inline-flex;
align-items:center;
justify-content:center;
padding:14px 18px;
border:none;
border-radius:12px;
background:#16a34a;
color:#ffffff;
font-weight:700;
cursor:pointer;
transition:0.2s ease;
}

.lesson-complete-button:hover{
background:#15803d;
}

.lesson-complete-button:disabled{
background:#94a3b8;
cursor:not-allowed;
}

.lesson-jump-button{
display:inline-flex;
align-items:center;
justify-content:center;
padding:14px 18px;
border:1px solid #d1d5db;
border-radius:12px;
background:#ffffff;
color:#111827;
font-weight:700;
cursor:pointer;
transition:0.2s ease;
}

.lesson-jump-button:hover{
background:#f3f4f6;
}

.lesson-material-progress-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:20px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.lesson-material-progress-head{
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:16px;
margin-bottom:16px;
}

.lesson-material-progress-head h3{
margin:12px 0 0;
font-size:26px;
}

.lesson-material-progress-actions{
margin-top:16px;
display:flex;
justify-content:flex-end;
}

.lesson-current-state-note{
margin-top:20px;
padding:18px 20px;
border-radius:18px;
background:#eff6ff;
border:1px solid #bfdbfe;
line-height:1.7;
color:#1e3a8a;
font-weight:600;
}

.lesson-material-viewer{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.lesson-viewer-head{
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:16px;
margin-bottom:14px;
}

.lesson-viewer-head h3{
margin:12px 0 0;
font-size:28px;
}

.lesson-viewer-copy{
margin:0 0 18px;
line-height:1.7;
color:#6b7280;
}

.lesson-html-renderer{
padding:20px;
border-radius:20px;
background:#f8fafc;
border:1px solid #e5e7eb;
line-height:1.8;
color:#374151;
}

.lesson-html-renderer h2,
.lesson-html-renderer h3{
margin-top:0;
}

.lesson-video-placeholder{
display:flex;
align-items:center;
gap:18px;
padding:20px;
border-radius:20px;
background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%);
color:#ffffff;
margin-bottom:18px;
}

.lesson-video-placeholder-icon{
width:64px;
height:64px;
display:flex;
align-items:center;
justify-content:center;
border-radius:999px;
background:rgba(255,255,255,0.18);
font-size:24px;
font-weight:800;
}

.lesson-video-placeholder p{
margin:8px 0 0;
color:rgba(255,255,255,0.86);
}

.lesson-file-card{
display:flex;
align-items:center;
gap:16px;
padding:18px;
border-radius:20px;
background:#f8fafc;
border:1px solid #e5e7eb;
margin-bottom:18px;
}

.lesson-file-icon{
min-width:68px;
height:68px;
display:flex;
align-items:center;
justify-content:center;
border-radius:18px;
background:#111827;
color:#ffffff;
font-weight:800;
font-size:14px;
}

.lesson-file-card p{
margin:8px 0 0;
line-height:1.6;
color:#6b7280;
}

.lesson-navigation{
display:flex;
justify-content:space-between;
gap:16px;
margin-top:28px;
flex-wrap:wrap;
}

.lesson-sidebar{
position:sticky;
top:110px;
}

.lesson-sidebar-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 14px 34px rgba(15,23,42,0.06);
}

.lesson-sidebar-list{
display:flex;
flex-direction:column;
gap:12px;
}

.lesson-sidebar-item{
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:12px;
padding:14px 16px;
border-radius:18px;
background:#f8fafc;
border:1px solid #e5e7eb;
color:#111827;
}

.lesson-sidebar-item strong{
display:block;
margin-bottom:6px;
font-size:14px;
line-height:1.5;
}

.lesson-sidebar-item span{
display:block;
font-size:12px;
color:#6b7280;
}

.lesson-sidebar-item small{
font-size:12px;
font-weight:700;
color:#2563eb;
white-space:nowrap;
}

.lesson-sidebar-item-active{
border-color:#bfdbfe;
background:#eff6ff;
}

.lesson-sidebar-item-current{
border-color:#c7d2fe;
background:#eef2ff;
}

.lesson-sidebar-progress-text{
display:block;
margin-top:6px;
font-style:normal;
font-size:12px;
color:#6b7280;
}

.lesson-sidebar-status{
display:inline-flex;
align-items:center;
justify-content:center;
padding:7px 10px;
border-radius:999px;
background:#f3f4f6;
color:#374151;
min-width:72px;
}

.lesson-sidebar-status-current{
background:#dbeafe;
color:#1d4ed8;
}

.lesson-sidebar-status-done{
background:#dcfce7;
color:#166534;
}

.lesson-outline-current{
margin-top:4px;
padding:16px;
border-radius:18px;
background:#eff6ff;
border:1px solid #bfdbfe;
}

.lesson-outline-current strong{
display:block;
font-size:16px;
margin-bottom:6px;
}

.lesson-outline-current small{
display:block;
font-size:12px;
color:#4b5563;
}

@media (max-width: 991px){
.course-detail-grid{
grid-template-columns:1fr;
}

.course-detail-title{
font-size:40px;
}

.course-detail-stats{
grid-template-columns:1fr;
}

.course-detail-content{
grid-template-columns:1fr;
}

.course-sidebar{
position:static;
}

.progress-summary-grid{
grid-template-columns:1fr;
}

.curriculum-section-head{
flex-direction:column;
}

.material-lesson-head{
flex-direction:column;
}

.lesson-hero-grid{
grid-template-columns:1fr;
}

.lesson-hero-meta{
grid-template-columns:1fr;
}

.lesson-content-layout{
grid-template-columns:1fr;
}

.lesson-sidebar{
position:static;
}
}

@media (max-width: 640px){
.course-detail-hero{
padding:22px;
border-radius:22px;
}

.course-detail-title{
font-size:32px;
}

.course-detail-text{
font-size:16px;
}

.lesson-card{
padding:18px;
}

.course-sidebar-card{
padding:20px;
border-radius:20px;
}

.course-sidebar-price{
font-size:34px;
}

.course-sidebar-meta{
grid-template-columns:1fr;
}

.curriculum-section-card,
.material-lesson-card{
padding:20px;
border-radius:20px;
}

.dashboard-meta-grid{
grid-template-columns:1fr;
}

.lesson-hero{
padding:22px;
border-radius:22px;
}

.lesson-title{
font-size:32px;
}

.lesson-text{
font-size:16px;
}

.lesson-material-viewer,
.lesson-outline-card,
.lesson-sidebar-card{
padding:20px;
border-radius:20px;
}

.lesson-material-progress-card{
padding:18px;
border-radius:20px;
}

.lesson-video-placeholder,
.lesson-file-card{
flex-direction:column;
align-items:flex-start;
}
}

.courses-page{
padding-top:12px;
}

.courses-hero{
margin-bottom:32px;
padding:36px;
border-radius:28px;
background:linear-gradient(135deg,#ffffff 0%,#eff6ff 55%,#eef2ff 100%);
border:1px solid #dbeafe;
box-shadow:0 18px 40px rgba(15,23,42,0.06);
}

.courses-hero-grid{
display:grid;
grid-template-columns:1.1fr 0.9fr;
gap:28px;
align-items:center;
}

.courses-title{
margin:0 0 16px;
font-size:52px;
line-height:1.08;
}

.courses-text{
margin:0 0 24px;
font-size:18px;
line-height:1.8;
color:#4b5563;
max-width:720px;
}

.courses-actions{
display:flex;
gap:16px;
flex-wrap:wrap;
}

.courses-summary-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
display:grid;
grid-template-columns:repeat(2,minmax(0,1fr));
gap:16px;
box-shadow:0 14px 34px rgba(15,23,42,0.06);
}

.courses-summary-item{
background:#f8fafc;
border:1px solid #e5e7eb;
border-radius:18px;
padding:18px;
}

.courses-summary-item strong{
display:block;
font-size:28px;
margin-bottom:8px;
}

.courses-summary-item span{
display:block;
font-size:14px;
color:#6b7280;
}

.courses-list-section{
padding:8px 0 16px;
}

@media (max-width: 991px){
.courses-hero-grid{
grid-template-columns:1fr;
}

.courses-title{
font-size:40px;
}
}

@media (max-width: 640px){
.courses-hero{
padding:22px;
border-radius:22px;
}

.courses-title{
font-size:32px;
}

.courses-text{
font-size:16px;
}

.courses-summary-card{
grid-template-columns:1fr;
padding:20px;
}
}


.auth-page{
padding-top:12px;
}

.auth-shell{
padding:12px 0 20px;
}

.auth-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:28px;
align-items:stretch;
}

.auth-panel{
border-radius:28px;
padding:32px;
}

.auth-panel-primary{
background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%);
color:#ffffff;
box-shadow:0 20px 50px rgba(15,23,42,0.16);
}

.auth-panel-form{
background:#ffffff;
border:1px solid #e5e7eb;
box-shadow:0 16px 40px rgba(15,23,42,0.06);
}

.auth-badge{
display:inline-block;
padding:8px 14px;
border-radius:999px;
background:rgba(255,255,255,0.14);
color:#ffffff;
font-weight:700;
margin-bottom:20px;
}

.auth-title{
margin:0 0 18px;
font-size:46px;
line-height:1.08;
}

.auth-text{
margin:0 0 24px;
font-size:18px;
line-height:1.8;
color:rgba(255,255,255,0.88);
max-width:560px;
}

.auth-feature-list{
display:flex;
flex-direction:column;
gap:14px;
}

.auth-feature-item{
padding:14px 16px;
border-radius:16px;
background:rgba(255,255,255,0.1);
border:1px solid rgba(255,255,255,0.14);
font-weight:600;
line-height:1.6;
}

.auth-form-head{
margin-bottom:22px;
}

.auth-eyebrow{
margin:0 0 8px;
font-size:14px;
font-weight:700;
color:#2563eb;
}

.auth-form-head h2{
margin:0 0 10px;
font-size:30px;
line-height:1.2;
}

.auth-form-head p{
margin:0;
line-height:1.7;
color:#6b7280;
}

.auth-form{
display:flex;
flex-direction:column;
gap:12px;
}

.auth-label{
font-size:14px;
font-weight:700;
color:#374151;
margin-top:2px;
}

.auth-input{
width:100%;
padding:14px 16px;
border:1px solid #d1d5db;
border-radius:14px;
background:#ffffff;
color:#111827;
font-size:15px;
outline:none;
transition:border-color 0.2s ease, box-shadow 0.2s ease;
}

.auth-input:focus{
border-color:#2563eb;
box-shadow:0 0 0 4px rgba(37,99,235,0.12);
}

.auth-submit-button{
margin-top:10px;
width:100%;
padding:15px 18px;
border:none;
border-radius:14px;
background:#111827;
color:#ffffff;
font-weight:700;
font-size:15px;
cursor:pointer;
transition:0.2s ease;
}

.auth-submit-button:hover{
background:#1f2937;
}

.auth-footer-note{
margin-top:18px;
display:flex;
gap:8px;
flex-wrap:wrap;
font-size:14px;
color:#6b7280;
}

.auth-footer-note a{
color:#2563eb;
font-weight:700;
}

@media (max-width: 991px){
.auth-grid{
grid-template-columns:1fr;
}

.auth-title{
font-size:38px;
}
}

@media (max-width: 640px){
.auth-panel{
padding:22px;
border-radius:22px;
}

.auth-title{
font-size:30px;
}

.auth-text{
font-size:16px;
}

.auth-form-head h2{
font-size:24px;
}
}

.info-page{
padding-top:12px;
}

.info-hero{
margin-bottom:32px;
padding:36px;
border-radius:28px;
background:linear-gradient(135deg,#ffffff 0%,#eff6ff 55%,#eef2ff 100%);
border:1px solid #dbeafe;
box-shadow:0 18px 40px rgba(15,23,42,0.06);
}

.info-hero-grid{
display:grid;
grid-template-columns:1.1fr 0.9fr;
gap:28px;
align-items:center;
}

.info-title{
margin:0 0 16px;
font-size:52px;
line-height:1.08;
}

.info-text{
margin:0;
font-size:18px;
line-height:1.8;
color:#4b5563;
max-width:720px;
}

.info-highlight-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
display:grid;
gap:16px;
box-shadow:0 14px 34px rgba(15,23,42,0.06);
}

.info-highlight-item{
background:#f8fafc;
border:1px solid #e5e7eb;
border-radius:18px;
padding:18px;
}

.info-highlight-item strong{
display:block;
font-size:20px;
margin-bottom:8px;
}

.info-highlight-item span{
display:block;
line-height:1.7;
color:#6b7280;
}

.info-section-grid{
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
gap:20px;
}

.info-card{
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:24px;
padding:24px;
box-shadow:0 12px 30px rgba(15,23,42,0.05);
}

.info-card h2{
margin-top:0;
margin-bottom:12px;
font-size:28px;
}

.info-card p{
margin:0 0 12px;
line-height:1.8;
color:#6b7280;
}

.contact-grid{
display:grid;
grid-template-columns:1.15fr 0.85fr;
gap:24px;
align-items:start;
}

.contact-form{
display:flex;
flex-direction:column;
gap:12px;
margin-top:18px;
}

.contact-textarea{
width:100%;
padding:14px 16px;
border:1px solid #d1d5db;
border-radius:14px;
background:#ffffff;
color:#111827;
font-size:15px;
font-family:Arial,sans-serif;
outline:none;
resize:vertical;
transition:border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-textarea:focus{
border-color:#2563eb;
box-shadow:0 0 0 4px rgba(37,99,235,0.12);
}

@media (max-width: 991px){
.info-hero-grid{
grid-template-columns:1fr;
}

.info-title{
font-size:40px;
}

.info-section-grid{
grid-template-columns:1fr;
}

.contact-grid{
grid-template-columns:1fr;
}
}

@media (max-width: 640px){
.info-hero{
padding:22px;
border-radius:22px;
}

.info-title{
font-size:32px;
}

.info-text{
font-size:16px;
}

.info-card{
padding:20px;
border-radius:20px;
}
}

```
=== END FILE: frontend/src/app/globals.css ===

=== START FILE: frontend/src/app/layout.tsx ===
Folder: frontend/src/app
Nama file: layout.tsx
Tipe: content
```
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "OdooCamp 247",
  description: "OdooCamp 247 learning platform",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

```
=== END FILE: frontend/src/app/layout.tsx ===

=== START FILE: frontend/src/app/login/page.tsx ===
Folder: frontend/src/app/login
Nama file: page.tsx
Tipe: content
```
export default function LoginPage() {
  return (
    <div className="auth-page">
      <section className="auth-shell">
        <div className="auth-grid">
          <div className="auth-panel auth-panel-primary">
            <span className="auth-badge">Welcome Back</span>

            <h1 className="auth-title">
              Continue your
              <br />
              open-source journey
            </h1>

            <p className="auth-text">
              Sign in to access your courses, continue your lessons,
              and keep building practical open-source development skills.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">Access your enrolled courses</div>
              <div className="auth-feature-item">Track your learning progress</div>
              <div className="auth-feature-item">Continue from where you stopped</div>
            </div>
          </div>

          <div className="auth-panel auth-panel-form">
            <div className="auth-form-head">
              <p className="auth-eyebrow">Login</p>
              <h2>Sign in to OdooCamp 247</h2>
              <p>Use your email and password to access your OdooCamp 247 learning dashboard.</p>
            </div>

            <form className="auth-form">
              <label className="auth-label" htmlFor="email">
                Email Address
              </label>
              <input id="email" type="email" placeholder="you@example.com" className="auth-input" />

              <label className="auth-label" htmlFor="password">
                Password
              </label>
              <input id="password" type="password" placeholder="Enter your password" className="auth-input" />

              <button type="submit" className="auth-submit-button">
                Sign In
              </button>
            </form>

            <div className="auth-footer-note">
              <span>Don&apos;t have an account?</span>
              <a href="/register">Create one now</a>
            </div>
          </div>
        </div>
      </section>
    </div>    
  );
}

```
=== END FILE: frontend/src/app/login/page.tsx ===

=== START FILE: frontend/src/app/not-found.tsx ===
Folder: frontend/src/app
Nama file: not-found.tsx
Tipe: content
```
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found in OdooCamp 247.</p>
    </div>
  );
}

```
=== END FILE: frontend/src/app/not-found.tsx ===

=== START FILE: frontend/src/app/page.tsx ===
Folder: frontend/src/app
Nama file: page.tsx
Tipe: content
```
import HomeHeroSection from "@/components/home/HomeHeroSection";
import CourseList from "@/components/CourseList";
import { courses } from "@/data/courses";

export default function HomePage() {
  const totalLessons = courses.reduce(
    (total, course) => total + course.lessons.length,
    0
  );
  const freeCourses = courses.filter((course) => course.price === null).length;

  return (
    <>
      <HomeHeroSection />

      <section className="stats-section">
        <div className="stats-grid">
          <div>
            <h3>{courses.length}</h3>
            <p>Courses</p>
          </div>

          <div>
            <h3>{totalLessons}+</h3>
            <p>Lessons</p>
          </div>

          <div>
            <h3>{freeCourses}</h3>
            <p>Free Course</p>
          </div>

          <div>
            <h3>Beginner</h3>
            <p>Friendly</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Featured Courses</h2>
          <p>
            Start learning with structured courses
            built for open-source developers.
          </p>
        </div>

        <CourseList courses={courses} />
      </section>

      <section className="why-section">
        <div className="why-grid">
          <div className="why-card">
            <h3>Practical</h3>
            <p>
              Learn by building real open-source projects.
            </p>
          </div>

          <div className="why-card">
            <h3>Structured</h3>
            <p>
              Step-by-step curriculum from foundations to real implementation.
            </p>
          </div>

          <div className="why-card">
            <h3>Open</h3>
            <p>
              Grow with a learning experience shaped around open-source momentum.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-content">
          <div>
            <h2>Build with OdooCamp 247</h2>
            <p>
              Upgrade your open-source development skills with practical courses and consistent learning flow.
            </p>
          </div>

          <div className="cta-actions">
            <a href="/courses" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>

        <div className="cta-image-wrap">
          <img
            src="/images/cta-learning.png"
            alt="Start learning today"
            className="cta-image"
          />
        </div>        
      </section>
    </>
  );
}

```
=== END FILE: frontend/src/app/page.tsx ===

=== START FILE: frontend/src/app/register/page.tsx ===
Folder: frontend/src/app/register
Nama file: page.tsx
Tipe: content
```
export default function RegisterPage() {
  return (
    <div className="auth-page">
      <section className="auth-shell">
        <div className="auth-grid">
          <div className="auth-panel auth-panel-primary">
            <span className="auth-badge">Start Learning Today</span>

            <h1 className="auth-title">
              Create your account
              <br />
              and build real open-source skills
            </h1>

            <p className="auth-text">
              Join OdooCamp 247 and explore practical courses in Python,
              Odoo Development, and Prompt Engineering.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">Beginner-friendly structured learning</div>
              <div className="auth-feature-item">Project-based open-source developer courses</div>
              <div className="auth-feature-item">Responsive learning experience for daily momentum</div>
            </div>
          </div>

          <div className="auth-panel auth-panel-form">
            <div className="auth-form-head">
              <p className="auth-eyebrow">Register</p>
              <h2>Create your OdooCamp 247 account</h2>
              <p>Fill in your information below to begin your OdooCamp 247 learning journey.</p>
            </div>

            <form className="auth-form">
              <label className="auth-label" htmlFor="fullName">
                Full Name
              </label>
              <input id="fullName" type="text" placeholder="Your full name" className="auth-input" />

              <label className="auth-label" htmlFor="registerEmail">
                Email Address
              </label>
              <input id="registerEmail" type="email" placeholder="you@example.com" className="auth-input" />

              <label className="auth-label" htmlFor="registerPassword">
                Password
              </label>
              <input id="registerPassword" type="password" placeholder="Create a password" className="auth-input" />

              <label className="auth-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input id="confirmPassword" type="password" placeholder="Repeat your password" className="auth-input" />

              <button type="submit" className="auth-submit-button">
                Create Account
              </button>
            </form>

            <div className="auth-footer-note">
              <span>Already have an account?</span>
              <a href="/login">Sign in here</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/app/register/page.tsx ===

=== START FILE: frontend/src/components/CourseList.tsx ===
Folder: frontend/src/components
Nama file: CourseList.tsx
Tipe: content
```
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getCourseImageBySlug } from "@/data/courses";
import {
  getOptionalBrowserCourseProgressMap,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { LearnerCourseProgress } from "@/types/course.types";
import type { Course } from "@/types/course.types";

export default function CourseList({
  courses,
}: {
  courses: Course[];
}) {
  const router = useRouter();
  const [progressMap, setProgressMap] = useState<Record<string, LearnerCourseProgress | null>>(
    {}
  );

  useEffect(() => {
    const loadProgressMap = () => {
      setProgressMap(getOptionalBrowserCourseProgressMap(courses));
    };

    loadProgressMap();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadProgressMap();
    });

    return unsubscribe;
  }, [courses]);

  const cardStateMap = useMemo(() => {
    return Object.fromEntries(
      courses.map((course) => {
        const progress = progressMap[course.id] ?? null;
        const totalLessons = course.lessons.length;
        const totalMaterials = course.lessons.reduce(
          (total, lesson) => total + lesson.materials.length,
          0
        );
        const lessonProgressPercent = progress
          ? Math.round((progress.completedLessonIds.length / totalLessons) * 100)
          : 0;
        const materialProgressPercent = progress
          ? Math.round((progress.completedMaterialIds.length / totalMaterials) * 100)
          : 0;
        const currentLesson = progress?.currentLessonId
          ? course.lessons.find((lesson) => lesson.id === progress.currentLessonId) ?? null
          : null;
        const continueHref = currentLesson
          ? `/courses/${course.slug}/lessons/${currentLesson.id}`
          : `/courses/${course.slug}`;
        const isStarted =
          !!progress &&
          (progress.completedLessonIds.length > 0 ||
            progress.completedMaterialIds.length > 0 ||
            !!progress.currentLessonId);

        return [
          course.id,
          {
            progress,
            currentLesson,
            continueHref,
            isStarted,
            lessonProgressPercent,
            materialProgressPercent,
          },
        ];
      })
    ) as Record<
      string,
      {
        progress: LearnerCourseProgress | null;
        currentLesson: Course["lessons"][number] | null;
        continueHref: string;
        isStarted: boolean;
        lessonProgressPercent: number;
        materialProgressPercent: number;
      }
    >;
  }, [courses, progressMap]);

  return (
    <div className="course-grid">
      {courses.map((course) => {
        const isFreeCourse = course.price === null;
        const cardState = cardStateMap[course.id];
        const isStarted = cardState?.isStarted ?? false;
        const currentLesson = cardState?.currentLesson ?? null;
        const lessonProgressPercent = cardState?.lessonProgressPercent ?? 0;
        const materialProgressPercent = cardState?.materialProgressPercent ?? 0;
        const progress = cardState?.progress ?? null;
        const cardHref = isStarted
          ? cardState.continueHref
          : `/courses/${course.slug}`;
        const buttonLabel = isStarted
          ? "Continue Course"
          : isFreeCourse
            ? "Access Course"
            : "Enroll Now";
        const badgeLabel = isStarted
          ? isFreeCourse
            ? "Free • In Progress"
            : "In Progress"
          : isFreeCourse
            ? "Free Course"
            : "Bestseller";

        return (
          <div
            key={course.id}
            className={`course-card ${isStarted ? "course-card-active" : ""}`}
          >
            <div className="course-thumb-wrap">
              <img
                src={getCourseImageBySlug(course.slug)}
                alt={course.title}
                className="course-thumb"
              />
            </div>

            <div className="course-body">
              <div className="course-card-badge-row">
                <span
                  className={`course-badge ${isFreeCourse ? "course-badge-free" : ""} ${isStarted ? "course-badge-active" : ""}`}
                >
                  {badgeLabel}
                </span>

                {isStarted ? (
                  <span className="course-progress-pill">
                    {lessonProgressPercent}%
                  </span>
                ) : null}
              </div>

              <h3>
                {course.title}
              </h3>

              <p>
                {course.lessons.length} lessons • {course.totalDuration}
              </p>

              {isStarted && progress ? (
                <div className="course-card-progress-box">
                  <div className="progress-inline-head">
                    <span>Lesson Progress</span>
                    <strong>{lessonProgressPercent}%</strong>
                  </div>
                  <div className="progress-bar-shell progress-bar-shell-tight course-card-progress-shell">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${lessonProgressPercent}%` }}
                    />
                  </div>

                  <div className="progress-inline-head course-card-progress-inline">
                    <span>Material Progress</span>
                    <strong>{materialProgressPercent}%</strong>
                  </div>
                  <div className="progress-bar-shell progress-bar-shell-tight course-card-progress-shell">
                    <div
                      className="progress-bar-fill progress-bar-fill-material"
                      style={{ width: `${materialProgressPercent}%` }}
                    />
                  </div>

                  {currentLesson ? (
                    <div className="course-current-lesson-note">
                      <small>Continue:</small>
                      <strong>{currentLesson.title}</strong>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className={`course-price ${isFreeCourse ? "course-price-free" : ""}`}>
                {isFreeCourse ? "Free" : `$${course.price}`}
              </div>

              {isStarted && progress ? (
                <div className="course-card-meta-row">
                  <span>
                    {progress.completedLessonIds.length}/{course.lessons.length} lessons done
                  </span>
                  <span>
                    Last access {new Date(progress.lastAccessedAt).toLocaleDateString("en-GB")}
                  </span>
                </div>
              ) : null}

              <button
                onClick={() => router.push(cardHref)}
                className={`enroll-button ${isFreeCourse ? "enroll-button-free" : ""} ${isStarted ? "enroll-button-continue" : ""}`}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

```
=== END FILE: frontend/src/components/CourseList.tsx ===

=== START FILE: frontend/src/components/course/CourseCard.tsx ===
Folder: frontend/src/components/course
Nama file: CourseCard.tsx
Tipe: content
```
type CourseCardProps = {
  title: string;
};

export default function CourseCard({ title }: CourseCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <h3>{title}</h3>
      <p>Course card placeholder.</p>
    </div>
  );
}

```
=== END FILE: frontend/src/components/course/CourseCard.tsx ===

=== START FILE: frontend/src/components/course/CourseDetailClient.tsx ===
Folder: frontend/src/components/course
Nama file: CourseDetailClient.tsx
Tipe: content
```
"use client";

import { useCourseProgress } from "@/hooks/useCourseProgress";
import type { Course, LearnerCourseProgress } from "@/types/course.types";

type CourseDetailClientProps = {
  course: Course;
  courseImage: string;
  initialProgress: LearnerCourseProgress | null;
};

export default function CourseDetailClient({
  course,
  courseImage,
  initialProgress,
}: CourseDetailClientProps) {
  const { progress, summary } = useCourseProgress(course, initialProgress);

  const isFreeCourse = course.price === null;
  const currentLesson = progress.currentLessonId
    ? course.lessons.find((lesson) => lesson.id === progress.currentLessonId) ?? null
    : null;
  const continueHref = currentLesson
    ? `/courses/${course.slug}/lessons/${currentLesson.id}`
    : course.lessons[0]
      ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
      : `/courses/${course.slug}`;
  const totalMaterialCount = summary.totalMaterials;

  return (
    <div className="course-detail-page">
      <section className="course-detail-hero">
        <div className="course-detail-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/courses">Courses</a>
              <span>/</span>
              <span>{course.title}</span>
            </div>

            <span
              className={`course-detail-badge ${isFreeCourse ? "course-detail-badge-free" : ""}`}
            >
              {isFreeCourse ? "Free Course" : "Premium Course"}
            </span>

            <h1 className="course-detail-title">{course.title}</h1>

            <p className="course-detail-text">{course.description}</p>

            <div className="course-detail-stats">
              <div className="course-detail-stat">
                <strong>{course.curriculum.length}</strong>
                <span>Sections</span>
              </div>

              <div className="course-detail-stat">
                <strong>{course.totalDuration}</strong>
                <span>Total Duration</span>
              </div>

              <div className="course-detail-stat">
                <strong>{summary.lessonProgressPercent}%</strong>
                <span>Your Progress</span>
              </div>
            </div>

            <div className="course-detail-actions">
              <a href="#course-curriculum" className="btn-primary">
                View Curriculum
              </a>
              <a href={continueHref} className="btn-secondary">
                {progress.completedLessonIds.length > 0
                  ? "Continue Learning"
                  : isFreeCourse
                    ? "Start Free Course"
                    : "Browse Courses"}
              </a>
            </div>
          </div>

          <div className="course-detail-visual">
            <img
              src={courseImage}
              alt={course.title}
              className="course-detail-image"
            />
          </div>
        </div>
      </section>

      <section className="course-detail-content">
        <div>
          <section className="course-progress-panel">
            <div className="section-head">
              <h2>Your Learning Progress</h2>
              <p>
                Track live progress from the same client-side learner state used in lesson pages.
              </p>
            </div>

            <div className="progress-summary-grid">
              <div className="progress-summary-card">
                <span>Lesson Progress</span>
                <strong>{summary.lessonProgressPercent}%</strong>
                <small>
                  {progress.completedLessonIds.length} of {summary.totalLessons} lessons completed
                </small>
              </div>
              <div className="progress-summary-card">
                <span>Material Progress</span>
                <strong>{summary.materialProgressPercent}%</strong>
                <small>
                  {progress.completedMaterialIds.length} of {summary.totalMaterials} materials completed
                </small>
              </div>
              <div className="progress-summary-card">
                <span>Last Access</span>
                <strong>{new Date(progress.lastAccessedAt).toLocaleDateString("en-GB")}</strong>
                <small>Most recent learning activity on this browser</small>
              </div>
            </div>

            <div className="progress-dual-shell">
              <div className="progress-dual-item">
                <div className="progress-inline-head">
                  <span>Lesson Completion</span>
                  <strong>{summary.lessonProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${summary.lessonProgressPercent}%` }}
                  />
                </div>
              </div>

              <div className="progress-dual-item">
                <div className="progress-inline-head">
                  <span>Material Completion</span>
                  <strong>{summary.materialProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill progress-bar-fill-material"
                    style={{ width: `${summary.materialProgressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {currentLesson ? (
              <div className="current-lesson-card">
                <p className="course-sidebar-label">Current Lesson</p>
                <h3>{currentLesson.title}</h3>
                <p>{currentLesson.summary}</p>
                <div className="current-lesson-meta">
                  <span>{currentLesson.duration}</span>
                  <span>{currentLesson.materials.length} materials</span>
                </div>
                <a
                  href={`/courses/${course.slug}/lessons/${currentLesson.id}`}
                  className="btn-primary current-lesson-button"
                >
                  Continue Learning
                </a>
              </div>
            ) : null}
          </section>

          <div className="section-head">
            <h2 id="course-curriculum">Course Curriculum</h2>
            <p>
              Structured sections, lessons, and materials designed so this
              course can evolve into a full LMS content engine.
            </p>
          </div>

          <div className="curriculum-section-list">
            {course.curriculum.map((section, sectionIndex) => (
              <div key={section.id} className="curriculum-section-card">
                <div className="curriculum-section-head">
                  <div>
                    <span className="lesson-number">Section {sectionIndex + 1}</span>
                    <h3>{section.title}</h3>
                    <p>{section.summary}</p>
                  </div>
                  <div className="curriculum-section-count">
                    {section.lessons.length} lessons
                  </div>
                </div>

                <div className="lesson-grid">
                  {section.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = progress.completedLessonIds.includes(lesson.id);
                    const isCurrentLesson = progress.currentLessonId === lesson.id;
                    const completedMaterials = lesson.materials.filter((material) =>
                      progress.completedMaterialIds.includes(material.id)
                    ).length;
                    const lessonMaterialPercent = lesson.materials.length
                      ? Math.round((completedMaterials / lesson.materials.length) * 100)
                      : 0;

                    return (
                      <div
                        key={lesson.id}
                        className={`lesson-card ${isCurrentLesson ? "lesson-card-current" : ""}`}
                      >
                        <div className="lesson-card-top">
                          <span className="lesson-number">
                            Lesson {lessonIndex + 1}
                          </span>
                          <span className="lesson-duration">{lesson.duration}</span>
                        </div>

                        <h3>{lesson.title}</h3>
                        <p>{lesson.summary}</p>

                        <div className="lesson-status-row">
                          <span
                            className={`lesson-status-pill ${isCompleted ? "lesson-status-complete" : ""}`}
                          >
                            {isCompleted
                              ? "Completed"
                              : isCurrentLesson
                                ? "In Progress"
                                : "Not Started"}
                          </span>
                          {lesson.isPreview ? (
                            <span className="lesson-status-pill lesson-status-preview">
                              Preview
                            </span>
                          ) : null}
                        </div>

                        <div className="lesson-progress-mini">
                          <div className="progress-inline-head">
                            <span>Materials</span>
                            <strong>{lessonMaterialPercent}%</strong>
                          </div>
                          <div className="progress-bar-shell progress-bar-shell-tight">
                            <div
                              className="progress-bar-fill progress-bar-fill-material"
                              style={{ width: `${lessonMaterialPercent}%` }}
                            />
                          </div>
                          <small className="lesson-progress-mini-text">
                            {completedMaterials}/{lesson.materials.length} materials completed
                          </small>
                        </div>

                        <div className="lesson-material-inline">
                          {lesson.materials.map((material) => (
                            <span key={material.id} className="material-chip">
                              {material.type.toUpperCase()}
                            </span>
                          ))}
                        </div>

                        <a
                          href={`/courses/${course.slug}/lessons/${lesson.id}`}
                          className="lesson-open-link"
                        >
                          Open Lesson
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="section-head section-head-spaced">
            <h2 id="course-materials">Lesson Materials</h2>
            <p>
              Each lesson can contain rich HTML content, downloadable PDF or
              DOCX files, and video resources.
            </p>
          </div>

          <div className="material-catalog">
            {course.lessons.map((lesson) => (
              <div key={lesson.id} className="material-lesson-card">
                <div className="material-lesson-head">
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.summary}</p>
                  </div>
                  <span className="lesson-duration">{lesson.duration}</span>
                </div>

                <div className="material-list">
                  {lesson.materials.map((material) => {
                    const isCompleted = progress.completedMaterialIds.includes(material.id);

                    return (
                      <div
                        key={material.id}
                        className={`material-item ${isCompleted ? "material-item-completed" : ""}`}
                      >
                        <div className="material-item-top">
                          <span className="material-chip">
                            {material.type.toUpperCase()}
                          </span>
                          <strong>{material.title}</strong>
                          <span
                            className={`lesson-status-pill material-status-pill ${isCompleted ? "lesson-status-complete" : ""}`}
                          >
                            {isCompleted ? "Completed" : "Open"}
                          </span>
                        </div>
                        <p>{material.description}</p>

                        {material.type === "html" && material.htmlContent ? (
                          <div
                            className="material-html-preview"
                            dangerouslySetInnerHTML={{ __html: material.htmlContent }}
                          />
                        ) : null}

                        {material.fileName ? (
                          <small className="material-file-name">
                            File: {material.fileName}
                          </small>
                        ) : null}

                        {material.url ? (
                          <a href={material.url} className="material-link">
                            Open Resource
                          </a>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="course-sidebar">
          <div className="course-sidebar-card">
            <p className="course-sidebar-label">
              {isFreeCourse ? "Course Access" : "Course Price"}
            </p>
            <div
              className={`course-sidebar-price ${isFreeCourse ? "course-sidebar-price-free" : ""}`}
            >
              {isFreeCourse ? "Free" : `$${course.price}`}
            </div>

            <p className="course-sidebar-copy">
              {isFreeCourse
                ? "This course is available for free and can be accessed directly. Perfect for starting the next phase of our LMS content structure."
                : "Get access to all lessons in this course and start learning at your own pace."}
            </p>

            <div className="course-sidebar-meta">
              <div className="course-sidebar-meta-item">
                <span>Level</span>
                <strong>{course.level}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Total Lessons</span>
                <strong>{course.lessons.length}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Materials</span>
                <strong>{totalMaterialCount}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Total Duration</span>
                <strong>{course.totalDuration}</strong>
              </div>
            </div>

            <div className="course-sidebar-meta course-sidebar-meta-progress">
              <div className="course-sidebar-meta-item">
                <span>Lessons Done</span>
                <strong>{progress.completedLessonIds.length}/{summary.totalLessons}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Materials Done</span>
                <strong>{progress.completedMaterialIds.length}/{summary.totalMaterials}</strong>
              </div>
            </div>

            <a href={continueHref} className="btn-primary course-sidebar-btn">
              {progress.completedLessonIds.length > 0 ? "Continue Learning" : isFreeCourse ? "Access Now" : "Enroll Now"}
            </a>

            <a href="/courses" className="btn-secondary course-sidebar-btn">
              View All Courses
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/components/course/CourseDetailClient.tsx ===

=== START FILE: frontend/src/components/course/LessonDetailClient.tsx ===
Folder: frontend/src/components/course
Nama file: LessonDetailClient.tsx
Tipe: content
```
"use client";

import { useMemo } from "react";
import LessonProgressPanel from "@/components/course/LessonProgressPanel";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import type { Course, LearnerCourseProgress, Lesson } from "@/types/course.types";

type LessonDetailClientProps = {
  course: Course;
  lesson: Lesson;
  initialProgress: LearnerCourseProgress | null;
  previousLessonId?: string | null;
  nextLessonId?: string | null;
};

export default function LessonDetailClient({
  course,
  lesson,
  initialProgress,
  previousLessonId,
  nextLessonId,
}: LessonDetailClientProps) {
  const { progress, summary } = useCourseProgress(course, initialProgress);

  const liveCurrentLesson = progress.currentLessonId
    ? course.lessons.find((item) => item.id === progress.currentLessonId) ?? null
    : null;

  const continueHref = liveCurrentLesson
    ? `/courses/${course.slug}/lessons/${liveCurrentLesson.id}`
    : course.lessons[0]
      ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
      : `/courses/${course.slug}`;

  const currentLesson = progress.currentLessonId === lesson.id;
  const completedLesson = progress.completedLessonIds.includes(lesson.id);

  const lessonCompletedMaterialCount = useMemo(
    () =>
      lesson.materials.filter((material) =>
        progress.completedMaterialIds.includes(material.id)
      ).length,
    [lesson.materials, progress.completedMaterialIds]
  );

  const lessonMaterialPercent = lesson.materials.length
    ? Math.round((lessonCompletedMaterialCount / lesson.materials.length) * 100)
    : 0;

  return (
    <div className="lesson-page">
      <section className="lesson-hero">
        <div className="lesson-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/courses">Courses</a>
              <span>/</span>
              <a href={`/courses/${course.slug}`}>{course.title}</a>
              <span>/</span>
              <span>{lesson.title}</span>
            </div>

            <span className="course-detail-badge">Lesson Detail</span>

            <h1 className="lesson-title">{lesson.title}</h1>
            <p className="lesson-text">{lesson.summary}</p>

            <div className="lesson-hero-meta">
              <div className="course-detail-stat">
                <strong>{lesson.duration}</strong>
                <span>Lesson Duration</span>
              </div>
              <div className="course-detail-stat">
                <strong>{lesson.materials.length}</strong>
                <span>Materials</span>
              </div>
              <div className="course-detail-stat">
                <strong>
                  {completedLesson
                    ? "Completed"
                    : currentLesson
                      ? "In Progress"
                      : "Open"}
                </strong>
                <span>Status</span>
              </div>
            </div>

            <div className="lesson-hero-progress-card">
              <div className="progress-inline-head">
                <span>This Lesson Progress</span>
                <strong>{lessonMaterialPercent}%</strong>
              </div>
              <div className="progress-bar-shell progress-bar-shell-tight">
                <div
                  className="progress-bar-fill progress-bar-fill-material"
                  style={{ width: `${lessonMaterialPercent}%` }}
                />
              </div>
              <small className="lesson-hero-progress-text">
                {lessonCompletedMaterialCount}/{lesson.materials.length} materials completed
              </small>
            </div>

            <div className="lesson-hero-actions">
              <a href={`/courses/${course.slug}`} className="btn-secondary">
                Back to Course
              </a>
              <a href={continueHref} className="btn-primary">
                {liveCurrentLesson?.id === lesson.id ? "Continue Learning" : "Go to Current Lesson"}
              </a>
            </div>
          </div>

          <aside className="lesson-outline-card">
            <p className="course-sidebar-label">Course Overview</p>
            <h3>{course.title}</h3>
            <p className="course-sidebar-copy">{course.description}</p>

            <div className="course-sidebar-meta">
              <div className="course-sidebar-meta-item">
                <span>Total Lessons</span>
                <strong>{course.lessons.length}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Total Duration</span>
                <strong>{course.totalDuration}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Started</span>
                <strong>{new Date(progress.startedAt).toLocaleDateString("en-GB")}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Last Access</span>
                <strong>{new Date(progress.lastAccessedAt).toLocaleDateString("en-GB")}</strong>
              </div>
            </div>

            <div className="course-sidebar-meta course-sidebar-meta-progress">
              <div className="course-sidebar-meta-item">
                <span>Lessons Done</span>
                <strong>{progress.completedLessonIds.length}/{summary.totalLessons}</strong>
              </div>
              <div className="course-sidebar-meta-item">
                <span>Materials Done</span>
                <strong>{progress.completedMaterialIds.length}/{summary.totalMaterials}</strong>
              </div>
            </div>

            {liveCurrentLesson ? (
              <div className="lesson-outline-current">
                <span className="course-sidebar-label">Current Lesson</span>
                <strong>{liveCurrentLesson.title}</strong>
                <small>{liveCurrentLesson.duration}</small>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="lesson-content-layout">
        <div>
          <div className="section-head">
            <h2>Lesson Materials</h2>
            <p>
              This page now supports live lesson progress, per-material completion,
              and automatic current-lesson movement.
            </p>
          </div>

          <LessonProgressPanel
            course={course}
            lesson={lesson}
            initialProgress={progress}
            previousLessonId={previousLessonId}
            nextLessonId={nextLessonId}
          />
        </div>

        <aside className="lesson-sidebar">
          <div className="lesson-sidebar-card">
            <p className="course-sidebar-label">Lesson List</p>

            <div className="lesson-sidebar-list">
              {course.lessons.map((item, index) => {
                const isCurrent = progress.currentLessonId === item.id;
                const isViewedLesson = item.id === lesson.id;
                const isDone = progress.completedLessonIds.includes(item.id);
                const completedMaterials = item.materials.filter((material) =>
                  progress.completedMaterialIds.includes(material.id)
                ).length;
                const lessonStatusLabel = isDone
                  ? "Done"
                  : isCurrent
                    ? "Current"
                    : "Open";

                return (
                  <a
                    key={item.id}
                    href={`/courses/${course.slug}/lessons/${item.id}`}
                    className={`lesson-sidebar-item ${isViewedLesson ? "lesson-sidebar-item-active" : ""} ${isCurrent ? "lesson-sidebar-item-current" : ""}`}
                  >
                    <div>
                      <strong>
                        Lesson {index + 1}: {item.title}
                      </strong>
                      <span>{item.duration}</span>
                      <em className="lesson-sidebar-progress-text">
                        {completedMaterials}/{item.materials.length} materials
                      </em>
                    </div>
                    <small
                      className={`lesson-sidebar-status ${isDone ? "lesson-sidebar-status-done" : isCurrent ? "lesson-sidebar-status-current" : ""}`}
                    >
                      {lessonStatusLabel}
                    </small>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/components/course/LessonDetailClient.tsx ===

=== START FILE: frontend/src/components/course/LessonProgressPanel.tsx ===
Folder: frontend/src/components/course
Nama file: LessonProgressPanel.tsx
Tipe: content
```
"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import MaterialViewer from "@/components/course/MaterialViewer";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import type { Course, LearnerCourseProgress, Lesson } from "@/types/course.types";

type LessonProgressPanelProps = {
  course: Course;
  lesson: Lesson;
  initialProgress: LearnerCourseProgress | null;
  nextLessonId?: string | null;
  previousLessonId?: string | null;
};

export default function LessonProgressPanel({
  course,
  lesson,
  initialProgress,
  nextLessonId,
  previousLessonId,
}: LessonProgressPanelProps) {
  const router = useRouter();
  const {
    progress,
    summary,
    handleMarkMaterialCompleted,
    handleMarkLessonCompleted,
  } = useCourseProgress(course, initialProgress);

  const isCurrentLesson = progress.currentLessonId === lesson.id;
  const isLessonCompleted = progress.completedLessonIds.includes(lesson.id);

  const completedMaterialCount = useMemo(
    () =>
      lesson.materials.filter((material) =>
        progress.completedMaterialIds.includes(material.id)
      ).length,
    [lesson.materials, progress.completedMaterialIds]
  );

  const lessonMaterialPercent = lesson.materials.length
    ? Math.round((completedMaterialCount / lesson.materials.length) * 100)
    : 0;

  const goToCurrentLesson = () => {
    if (!progress.currentLessonId) {
      return;
    }

    router.push(`/courses/${course.slug}/lessons/${progress.currentLessonId}`);
  };

  return (
    <>
      <section className="lesson-live-progress-panel">
        <div className="section-head">
          <h2>Live Lesson Progress</h2>
          <p>
            This lesson now tracks progress per material and updates the current lesson automatically.
          </p>
        </div>

        <div className="progress-summary-grid">
          <div className="progress-summary-card">
            <span>Course Lesson Progress</span>
            <strong>{summary.lessonProgressPercent}%</strong>
            <small>
              {progress.completedLessonIds.length} of {summary.totalLessons} lessons completed
            </small>
          </div>
          <div className="progress-summary-card">
            <span>Course Material Progress</span>
            <strong>{summary.materialProgressPercent}%</strong>
            <small>
              {progress.completedMaterialIds.length} of {summary.totalMaterials} materials completed
            </small>
          </div>
          <div className="progress-summary-card">
            <span>This Lesson</span>
            <strong>{lessonMaterialPercent}%</strong>
            <small>
              {completedMaterialCount} of {lesson.materials.length} materials completed
            </small>
          </div>
        </div>

        <div className="progress-bar-shell lesson-progress-shell">
          <div
            className="progress-bar-fill"
            style={{ width: `${lessonMaterialPercent}%` }}
          />
        </div>

        <div className="lesson-progress-action-row">
          <button
            type="button"
            className="lesson-complete-button"
            onClick={() => {
              const nextProgress = handleMarkLessonCompleted(lesson.id);

              if (
                nextProgress.currentLessonId &&
                nextProgress.currentLessonId !== lesson.id
              ) {
                router.push(
                  `/courses/${course.slug}/lessons/${nextProgress.currentLessonId}`
                );
              } else {
                router.refresh();
              }
            }}
          >
            {isLessonCompleted ? "Lesson Completed" : "Mark Lesson as Completed"}
          </button>

          <button
            type="button"
            className="lesson-jump-button"
            onClick={goToCurrentLesson}
          >
            Go to Current Lesson
          </button>
        </div>
      </section>

      <div className="lesson-material-stack">
        {lesson.materials.map((material, index) => {
          const isMaterialCompleted = progress.completedMaterialIds.includes(material.id);

          return (
            <div key={material.id} className="lesson-material-progress-card">
              <div className="lesson-material-progress-head">
                <div>
                  <span className="lesson-number">Material {index + 1}</span>
                  <h3>{material.title}</h3>
                </div>

                <span
                  className={`lesson-status-pill ${isMaterialCompleted ? "lesson-status-complete" : ""}`}
                >
                  {isMaterialCompleted ? "Completed" : "Open"}
                </span>
              </div>

              <MaterialViewer material={material} />

              <div className="lesson-material-progress-actions">
                <button
                  type="button"
                  className="lesson-complete-button"
                  onClick={() => {
                    const nextProgress = handleMarkMaterialCompleted(
                      lesson.id,
                      material.id
                    );

                    if (
                      nextProgress.currentLessonId &&
                      nextProgress.currentLessonId !== lesson.id
                    ) {
                      router.push(
                        `/courses/${course.slug}/lessons/${nextProgress.currentLessonId}`
                      );
                    } else {
                      router.refresh();
                    }
                  }}
                  disabled={isMaterialCompleted}
                >
                  {isMaterialCompleted ? "Material Completed" : "Mark as Completed"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lesson-navigation">
        {previousLessonId ? (
          <a
            href={`/courses/${course.slug}/lessons/${previousLessonId}`}
            className="btn-secondary"
          >
            Previous Lesson
          </a>
        ) : (
          <span />
        )}

        {nextLessonId ? (
          <a
            href={`/courses/${course.slug}/lessons/${nextLessonId}`}
            className="btn-primary"
          >
            Next Lesson
          </a>
        ) : (
          <a href={`/courses/${course.slug}`} className="btn-primary">
            Finish Course View
          </a>
        )}
      </div>

      {isCurrentLesson && !isLessonCompleted ? (
        <div className="lesson-current-state-note">
          You are currently on the active lesson. Complete all materials or mark the lesson complete to move the course forward automatically.
        </div>
      ) : null}
    </>
  );
}

```
=== END FILE: frontend/src/components/course/LessonProgressPanel.tsx ===

=== START FILE: frontend/src/components/course/MaterialViewer.tsx ===
Folder: frontend/src/components/course
Nama file: MaterialViewer.tsx
Tipe: content
```
import type { LessonMaterial } from "@/types/course.types";

type MaterialViewerProps = {
  material: LessonMaterial;
};

export default function MaterialViewer({ material }: MaterialViewerProps) {
  if (material.type === "html") {
    return (
      <article className="lesson-material-viewer lesson-material-viewer-html">
        <div className="lesson-viewer-head">
          <div>
            <span className="material-chip">HTML</span>
            <h3>{material.title}</h3>
          </div>
        </div>

        <p className="lesson-viewer-copy">{material.description}</p>

        <div
          className="lesson-html-renderer"
          dangerouslySetInnerHTML={{
            __html:
              material.htmlContent ??
              "<p>No HTML content is available for this lesson material yet.</p>",
          }}
        />
      </article>
    );
  }

  if (material.type === "video") {
    return (
      <article className="lesson-material-viewer lesson-material-viewer-video">
        <div className="lesson-viewer-head">
          <div>
            <span className="material-chip">VIDEO</span>
            <h3>{material.title}</h3>
          </div>
          {material.duration ? (
            <span className="lesson-duration">{material.duration}</span>
          ) : null}
        </div>

        <p className="lesson-viewer-copy">{material.description}</p>

        <div className="lesson-video-placeholder">
          <div className="lesson-video-placeholder-icon">▶</div>
          <div>
            <strong>Video lesson resource</strong>
            <p>Use the button below to open the video material.</p>
          </div>
        </div>

        {material.url ? (
          <a
            href={material.url}
            className="material-link"
            target="_blank"
            rel="noreferrer"
          >
            Watch Video
          </a>
        ) : null}
      </article>
    );
  }

  if (material.type === "pdf") {
    return (
      <article className="lesson-material-viewer lesson-material-viewer-file">
        <div className="lesson-viewer-head">
          <div>
            <span className="material-chip">PDF</span>
            <h3>{material.title}</h3>
          </div>
        </div>

        <p className="lesson-viewer-copy">{material.description}</p>

        <div className="lesson-file-card">
          <div className="lesson-file-icon">PDF</div>
          <div>
            <strong>{material.fileName ?? "lesson-material.pdf"}</strong>
            <p>Portable reading material for structured offline review.</p>
          </div>
        </div>

        {material.url ? (
          <a
            href={material.url}
            className="material-link"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
          </a>
        ) : null}
      </article>
    );
  }

  return (
    <article className="lesson-material-viewer lesson-material-viewer-file">
      <div className="lesson-viewer-head">
        <div>
          <span className="material-chip">DOCX</span>
          <h3>{material.title}</h3>
        </div>
      </div>

      <p className="lesson-viewer-copy">{material.description}</p>

      <div className="lesson-file-card">
        <div className="lesson-file-icon">DOCX</div>
        <div>
          <strong>{material.fileName ?? "lesson-material.docx"}</strong>
          <p>Document resource for downloadable worksheets or lesson packs.</p>
        </div>
      </div>

      {material.url ? (
        <a
          href={material.url}
          className="material-link"
          target="_blank"
          rel="noreferrer"
        >
          Open DOCX
        </a>
      ) : null}
    </article>
  );
}

```
=== END FILE: frontend/src/components/course/MaterialViewer.tsx ===

=== START FILE: frontend/src/components/dashboard/DashboardClient.tsx ===
Folder: frontend/src/components/dashboard
Nama file: DashboardClient.tsx
Tipe: content
```
"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "@/data/courses";
import {
  getAllBrowserCourseProgress,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { LearnerCourseProgress } from "@/types/course.types";

type DashboardClientProps = {
  initialProgressList: LearnerCourseProgress[];
};

export default function DashboardClient({
  initialProgressList,
}: DashboardClientProps) {
  const [progressList, setProgressList] = useState<LearnerCourseProgress[]>(initialProgressList);

  useEffect(() => {
    const loadProgressList = () => {
      const nextProgressList = getAllBrowserCourseProgress(courses).filter(
        (progress) => progress.enrollmentStatus !== "not_started"
      ) as LearnerCourseProgress[];

      setProgressList(nextProgressList);
    };

    loadProgressList();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadProgressList();
    });

    return unsubscribe;
  }, []);

  const enrolledCourses = useMemo(
    () =>
      progressList
        .map((progress) => {
          const course = courses.find((item) => item.id === progress.courseId);

          if (!course) {
            return null;
          }

          const totalLessons = course.lessons.length;
          const totalMaterials = course.lessons.reduce(
            (total, lesson) => total + lesson.materials.length,
            0
          );
          const lessonProgressPercent = totalLessons
            ? Math.round((progress.completedLessonIds.length / totalLessons) * 100)
            : 0;
          const materialProgressPercent = totalMaterials
            ? Math.round((progress.completedMaterialIds.length / totalMaterials) * 100)
            : 0;
          const continueHref = progress.currentLessonId
            ? `/courses/${course.slug}/lessons/${progress.currentLessonId}`
            : course.lessons[0]
              ? `/courses/${course.slug}/lessons/${course.lessons[0].id}`
              : `/courses/${course.slug}`;

          return {
            ...progress,
            course,
            totalLessons,
            totalMaterials,
            lessonProgressPercent,
            materialProgressPercent,
            continueHref,
          };
        })
        .filter(Boolean),
    [progressList]
  );

  const combinedLessonPercent = enrolledCourses.length
    ? Math.round(
        enrolledCourses.reduce(
          (total, item) => total + item!.lessonProgressPercent,
          0
        ) / enrolledCourses.length
      )
    : 0;

  const combinedMaterialPercent = enrolledCourses.length
    ? Math.round(
        enrolledCourses.reduce(
          (total, item) => total + item!.materialProgressPercent,
          0
        ) / enrolledCourses.length
      )
    : 0;

  return (
    <div className="dashboard-page">
      <section className="courses-hero">
        <div className="courses-hero-grid">
          <div>
            <div className="course-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Dashboard</span>
            </div>

            <span className="course-detail-badge">Learning Dashboard</span>

            <h1 className="courses-title">
              Track your active
              <br />
              learning progress
            </h1>

            <p className="courses-text">
              View enrolled courses, completion status, start access date,
              and your last learning activity in one place.
            </p>
          </div>

          <div className="courses-summary-card">
            <div className="courses-summary-item">
              <strong>{enrolledCourses.length}</strong>
              <span>Active Courses</span>
            </div>
            <div className="courses-summary-item">
              <strong>{combinedLessonPercent}%</strong>
              <span>Lesson Progress</span>
            </div>
            <div className="courses-summary-item">
              <strong>{combinedMaterialPercent}%</strong>
              <span>Material Progress</span>
            </div>
            <div className="courses-summary-item">
              <strong>
                {enrolledCourses.reduce(
                  (total, item) => total + item!.completedLessonIds.length,
                  0
                )}
              </strong>
              <span>Lessons Done</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-course-list">
        <div className="section-head">
          <h2>Your Courses</h2>
          <p>Enterprise-style progress visibility using the same client-side learner state.</p>
        </div>

        <div className="dashboard-grid">
          {enrolledCourses.map((item) => (
            <div key={item!.course.id} className="dashboard-card">
              <div className="dashboard-card-top">
                <span
                  className={`course-badge ${item!.course.accessType === "free" ? "course-badge-free" : ""}`}
                >
                  {item!.course.accessType === "free" ? "Free Course" : "Enrolled"}
                </span>
                <strong>{item!.lessonProgressPercent}%</strong>
              </div>

              <h3>{item!.course.title}</h3>
              <p>{item!.course.description}</p>

              <div className="dashboard-meta-grid">
                <div>
                  <span>Started</span>
                  <strong>{new Date(item!.startedAt).toLocaleDateString("en-GB")}</strong>
                </div>
                <div>
                  <span>Last Access</span>
                  <strong>{new Date(item!.lastAccessedAt).toLocaleDateString("en-GB")}</strong>
                </div>
                <div>
                  <span>Lessons</span>
                  <strong>{item!.completedLessonIds.length}/{item!.totalLessons}</strong>
                </div>
                <div>
                  <span>Materials</span>
                  <strong>{item!.completedMaterialIds.length}/{item!.totalMaterials}</strong>
                </div>
              </div>

              <div className="dashboard-progress-group">
                <div className="progress-inline-head">
                  <span>Lesson Completion</span>
                  <strong>{item!.lessonProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${item!.lessonProgressPercent}%` }}
                  />
                </div>
              </div>

              <div className="dashboard-progress-group">
                <div className="progress-inline-head">
                  <span>Material Completion</span>
                  <strong>{item!.materialProgressPercent}%</strong>
                </div>
                <div className="progress-bar-shell progress-bar-shell-tight">
                  <div
                    className="progress-bar-fill progress-bar-fill-material"
                    style={{ width: `${item!.materialProgressPercent}%` }}
                  />
                </div>
              </div>

              <a
                href={item!.continueHref}
                className="btn-primary dashboard-action"
              >
                Continue Learning
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

```
=== END FILE: frontend/src/components/dashboard/DashboardClient.tsx ===

=== START FILE: frontend/src/components/home/HeroSection.tsx ===
Folder: frontend/src/components/home
Nama file: HeroSection.tsx
Tipe: content
```
export default function HeroSection() {
  return (
    <section>
      <h1>Welcome to OdooCamp 247</h1>
      <p>Build your LMS step by step.</p>
    </section>
  );
}

```
=== END FILE: frontend/src/components/home/HeroSection.tsx ===

=== START FILE: frontend/src/components/home/HomeHeroSection.tsx ===
Folder: frontend/src/components/home
Nama file: HomeHeroSection.tsx
Tipe: content
```
"use client";

import { useEffect, useState } from "react";
import { courses } from "@/data/courses";
import {
  getActiveLearnerState,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { ActiveLearnerState } from "@/lib/course-progress";

export default function HomeHeroSection() {
  const [activeLearner, setActiveLearner] = useState<ActiveLearnerState | null>(null);

  useEffect(() => {
    const loadActiveLearner = () => {
      setActiveLearner(getActiveLearnerState(courses));
    };

    loadActiveLearner();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadActiveLearner();
    });

    return unsubscribe;
  }, []);

  const primaryHref =
    activeLearner && activeLearner.currentLesson
      ? `/courses/${activeLearner.course.slug}/lessons/${activeLearner.currentLesson.id}`
      : "/courses";

  const primaryLabel = activeLearner
    ? `Continue ${activeLearner.course.title}`
    : "Explore Courses";

  const secondaryHref =
    activeLearner && activeLearner.currentLesson
      ? `/courses/${activeLearner.course.slug}`
      : "/about";

  const secondaryLabel =
    activeLearner && activeLearner.currentLesson
      ? activeLearner.currentLesson.title
      : "Learn More";

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div>
          <span className="hero-badge">
            {activeLearner ? "Your Learning Momentum" : "247 OpenSource"}
          </span>

          <h1 className="hero-title">
            {activeLearner
              ? `Continue ${activeLearner.course.title}.`
              : "Learn Real Skills."}
            <br />
            {activeLearner ? "Keep Building Consistently." : "Build Real Projects."}
          </h1>

          <p className="hero-text">
            {activeLearner && activeLearner.currentLesson
              ? `You are currently on "${activeLearner.currentLesson.title}" in ${activeLearner.course.title}. Jump back in and keep your learning streak moving.`
              : "Master Python, Odoo Development, and Prompt Engineering through structured open-source, project-based courses."}
          </p>

          {activeLearner ? (
            <div className="hero-learner-panel">
              <div className="hero-learner-panel-head">
                <strong>{activeLearner.course.title}</strong>
                <span>{activeLearner.lessonProgressPercent}% complete</span>
              </div>

              <div className="progress-bar-shell hero-progress-shell">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${activeLearner.lessonProgressPercent}%` }}
                />
              </div>

              <div className="hero-learner-meta">
                <div className="hero-learner-meta-item">
                  <small>Current Lesson</small>
                  <strong>{activeLearner.currentLesson?.title ?? "Ready to continue"}</strong>
                </div>
                <div className="hero-learner-meta-item">
                  <small>Material Progress</small>
                  <strong>{activeLearner.materialProgressPercent}%</strong>
                </div>
                <div className="hero-learner-meta-item">
                  <small>Last Access</small>
                  <strong>
                    {new Date(activeLearner.progress.lastAccessedAt).toLocaleDateString("en-GB")}
                  </strong>
                </div>
              </div>
            </div>
          ) : null}

          <div className="hero-actions">
            <a href={primaryHref} className="btn-primary">
              {primaryLabel}
            </a>

            <a href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-lms-student.png"
            alt="Learning platform"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

```
=== END FILE: frontend/src/components/home/HomeHeroSection.tsx ===

=== START FILE: frontend/src/components/layout/Footer.tsx ===
Folder: frontend/src/components/layout
Nama file: Footer.tsx
Tipe: content
```
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <span className="footer-brand-mark">O</span>
            <div>
              <strong>OdooCamp 247</strong>
              <p>Practical courses for open-source developers.</p>
            </div>
          </div>
        </div>

        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/courses">Courses</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="footer-links-block">
          <h4>Learning</h4>
          <div className="footer-links">
            <a href="/courses/python-basic">Python Basic</a>
            <a href="/courses/odoo-development">Odoo Development</a>
            <a href="/courses/prompt-engineering">Prompt Engineering</a>
            <a href="/courses/from-localhost-to-live-lms">From Localhost to Live LMS</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© 2026 OdooCamp 247. All rights reserved.</small>
        <div className="footer-bottom-links">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </footer>
  );
}

```
=== END FILE: frontend/src/components/layout/Footer.tsx ===

=== START FILE: frontend/src/components/layout/Header.tsx ===
Folder: frontend/src/components/layout
Nama file: Header.tsx
Tipe: content
```
import HeaderLearnerIndicator from "@/components/layout/HeaderLearnerIndicator";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="header-brand">
          <span className="header-brand-mark">O</span>
          <div className="header-brand-text">
            <strong>OdooCamp 247</strong>
            <span>247 OpenSource</span>
          </div>
        </a>

        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <HeaderLearnerIndicator />

        <div className="header-actions">
          <a href="/login" className="header-link-button">
            Login
          </a>
          <a href="/register" className="header-cta-button">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

```
=== END FILE: frontend/src/components/layout/Header.tsx ===

=== START FILE: frontend/src/components/layout/HeaderLearnerIndicator.tsx ===
Folder: frontend/src/components/layout
Nama file: HeaderLearnerIndicator.tsx
Tipe: content
```
"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "@/data/courses";
import {
  getActiveLearnerState,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { ActiveLearnerState } from "@/lib/course-progress";

export default function HeaderLearnerIndicator() {
  const [indicator, setIndicator] = useState<ActiveLearnerState | null>(null);

  useEffect(() => {
    const loadIndicator = () => {
      setIndicator(getActiveLearnerState(courses));
    };

    loadIndicator();

    const unsubscribe = subscribeToCourseProgressChange(() => {
      loadIndicator();
    });

    return unsubscribe;
  }, []);

  const ringStyle = useMemo(() => {
    const percent = indicator?.lessonProgressPercent ?? 0;
    return {
      background: `conic-gradient(#2563eb 0% ${percent}%, #e5e7eb ${percent}% 100%)`,
    };
  }, [indicator]);

  if (!indicator || !indicator.currentLesson) {
    return (
      <a href="/courses" className="header-learner-indicator header-learner-indicator-empty">
        <div className="header-progress-ring header-progress-ring-empty">
          <div className="header-progress-ring-inner">
            <span>0%</span>
          </div>
        </div>
        <div className="header-learner-copy">
          <small>Learning</small>
          <strong>Start a course</strong>
          <span>Choose a course and begin your progress.</span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={`/courses/${indicator.course.slug}/lessons/${indicator.currentLesson.id}`}
      className="header-learner-indicator"
    >
      <div className="header-progress-ring" style={ringStyle}>
        <div className="header-progress-ring-inner">
          <span>{indicator.lessonProgressPercent}%</span>
        </div>
      </div>

      <div className="header-learner-copy">
        <small>Continue</small>
        <strong>{indicator.currentLesson.title}</strong>
        <span>
          {indicator.course.title} • {indicator.materialProgressPercent}% material progress
        </span>
      </div>
    </a>
  );
}

```
=== END FILE: frontend/src/components/layout/HeaderLearnerIndicator.tsx ===

=== START FILE: frontend/src/components/ui/Button.tsx ===
Folder: frontend/src/components/ui
Nama file: Button.tsx
Tipe: content
```
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

```
=== END FILE: frontend/src/components/ui/Button.tsx ===

=== START FILE: frontend/src/data/course-progress.ts ===
Folder: frontend/src/data
Nama file: course-progress.ts
Tipe: content
```
import { courses } from "@/data/courses";
import type { LearnerCourseProgress } from "@/types/course.types";

export const learnerCourseProgress: LearnerCourseProgress[] = [
  {
    courseId: "1",
    startedAt: "2026-04-02T09:00:00.000Z",
    lastAccessedAt: "2026-04-12T13:20:00.000Z",
    currentLessonId: "py-3",
    completedLessonIds: ["py-1", "py-2"],
    completedMaterialIds: ["py-1-html", "py-1-video", "py-2-html"],
    enrollmentStatus: "active",
  },
  {
    courseId: "3",
    startedAt: "2026-04-18T08:15:00.000Z",
    lastAccessedAt: "2026-04-21T03:45:00.000Z",
    currentLessonId: "pe-3",
    completedLessonIds: ["pe-1", "pe-2"],
    completedMaterialIds: ["pe-1-html", "pe-1-video", "pe-2-pdf", "pe-2-html"],
    enrollmentStatus: "active",
  },
];

export function getCourseProgressByCourseId(courseId: string) {
  return learnerCourseProgress.find((item) => item.courseId === courseId) ?? null;
}

export function getCourseProgressBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return null;
  }

  return getCourseProgressByCourseId(course.id);
}

export function getContinueLearningHrefBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return null;
  }

  const progress = getCourseProgressByCourseId(course.id);

  if (progress?.currentLessonId) {
    return `/courses/${slug}/lessons/${progress.currentLessonId}`;
  }

  const firstLesson = course.lessons[0];

  if (!firstLesson) {
    return `/courses/${slug}`;
  }

  return `/courses/${slug}/lessons/${firstLesson.id}`;
}

export function getSeedCourseProgressByCourseId(courseId: string) {
  return learnerCourseProgress.find((item) => item.courseId === courseId) ?? null;
}

```
=== END FILE: frontend/src/data/course-progress.ts ===

=== START FILE: frontend/src/data/courses.ts ===
Folder: frontend/src/data
Nama file: courses.ts
Tipe: content
```
import type { Course, CurriculumSection, Lesson } from "@/types/course.types";

function flattenCurriculum(curriculum: CurriculumSection[]): Lesson[] {
  return curriculum
    .slice()
    .sort((a, b) => a.order - b.order)
    .flatMap((section) =>
      section.lessons.slice().sort((a, b) => a.order - b.order)
    );
}

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

const localhostToLiveCurriculum: CurriculumSection[] = [
  {
    id: "l2l-sec-1",
    title: "Module 1 — Menyiapkan Ubuntu VPS",
    summary:
      "Menyiapkan server Ubuntu 22.04 untuk deployment LMS, termasuk akses awal menggunakan PuTTY dan struktur dasar server.",
    order: 1,
    lessons: [
      {
        id: "l2l-1",
        title: "Apa itu VPS untuk LMS",
        duration: "8 min",
        summary:
          "Memahami peran VPS dalam menjalankan LMS agar bisa online dan diakses publik.",
        order: 1,
        materials: [
          {
            id: "l2l-1-html",
            title: "Pengantar VPS untuk LMS",
            type: "html",
            description: "Penjelasan dasar tentang peran VPS untuk LMS.",
            htmlContent:
              "<h2>Apa itu VPS untuk LMS</h2><p>VPS adalah server virtual yang kita sewa agar aplikasi LMS bisa berjalan 24 jam, diakses melalui domain, dan dikonfigurasi sebagai environment production.</p><p>Di course ini kita memakai Ubuntu 22.04 dan akses server menggunakan PuTTY dari Windows.</p>",
          },
        ],
      },
      {
        id: "l2l-2",
        title: "Memilih Ubuntu 22.04",
        duration: "7 min",
        summary:
          "Mengapa Ubuntu 22.04 cocok untuk deployment LMS berbasis Node.js dan Nginx.",
        order: 2,
        materials: [
          {
            id: "l2l-2-html",
            title: "Alasan Memilih Ubuntu 22.04",
            type: "html",
            description: "Catatan singkat tentang alasan memilih Ubuntu 22.04.",
            htmlContent:
              "<h2>Memilih Ubuntu 22.04</h2><p>Ubuntu 22.04 LTS stabil, dokumentasinya luas, dan cocok untuk deployment Node.js, Nginx, SSL, PM2, dan workflow Linux server yang umum dipakai di production.</p>",
          },
        ],
      },
      {
        id: "l2l-3",
        title: "Akses server menggunakan PuTTY",
        duration: "9 min",
        summary:
          "Mengenal workflow koneksi SSH dari Windows ke Ubuntu VPS menggunakan PuTTY.",
        order: 3,
        materials: [
          {
            id: "l2l-3-html",
            title: "Workflow PuTTY ke VPS",
            type: "html",
            description: "Panduan konsep koneksi awal menggunakan PuTTY.",
            htmlContent:
              "<h2>Akses server dengan PuTTY</h2><p>Dari Windows, kita bisa memakai PuTTY untuk login ke VPS melalui SSH. Pastikan kita memiliki IP VPS, username, password atau private key, serta port SSH yang benar.</p>",
          },
        ],
      },
      {
        id: "l2l-4",
        title: "Login pertama sebagai root",
        duration: "8 min",
        summary:
          "Memahami login awal dan hal-hal yang perlu dicek setelah berhasil masuk ke server.",
        order: 4,
        materials: [
          {
            id: "l2l-4-html",
            title: "Login Awal Server",
            type: "html",
            description: "Checklist setelah login pertama sebagai root.",
            htmlContent:
              "<h2>Login pertama sebagai root</h2><p>Setelah login pertama, cek versi OS, user aktif, hostname, IP, dan pastikan server bisa melakukan update package dengan normal.</p>",
          },
        ],
      },
      {
        id: "l2l-5",
        title: "Update package Ubuntu",
        duration: "10 min",
        summary:
          "Menjalankan update dan upgrade sebelum LMS dipindahkan ke server.",
        order: 5,
        materials: [
          {
            id: "l2l-5-html",
            title: "Update Ubuntu",
            type: "html",
            description: "Langkah update dan upgrade package Ubuntu.",
            htmlContent:
              "<h2>Update package Ubuntu</h2><p>Selalu mulai dengan update package list dan upgrade package yang tersedia sebelum install dependency lain.</p><pre><code>sudo apt update && sudo apt upgrade -y</code></pre>",
          },
        ],
      },
      {
        id: "l2l-6",
        title: "Membuat user deploy",
        duration: "10 min",
        summary:
          "Membuat user non-root agar deployment lebih aman untuk production.",
        order: 6,
        materials: [
          {
            id: "l2l-6-html",
            title: "User Deploy Non-Root",
            type: "html",
            description: "Membuat user deploy dan memberinya akses sudo.",
            htmlContent:
              "<h2>Membuat user deploy</h2><p>Untuk keamanan, sebaiknya kita tidak deploy memakai root. Buat user baru lalu tambahkan ke group sudo.</p><pre><code>adduser deploy\nusermod -aG sudo deploy</code></pre>",
          },
        ],
      },
      {
        id: "l2l-7",
        title: "Login ulang dengan user deploy",
        duration: "6 min",
        summary:
          "Menguji bahwa user deploy bisa login dan menjalankan command administratif.",
        order: 7,
        materials: [
          {
            id: "l2l-7-html",
            title: "Verifikasi User Deploy",
            type: "html",
            description: "Menguji user baru untuk workflow deployment.",
            htmlContent:
              "<h2>Login ulang dengan user deploy</h2><p>Setelah user deploy dibuat, lakukan login ulang melalui PuTTY menggunakan user tersebut dan pastikan perintah sudo berjalan.</p>",
          },
        ],
      },
      {
        id: "l2l-8",
        title: "Struktur folder untuk LMS",
        duration: "8 min",
        summary:
          "Menentukan folder project dan lokasi source code LMS di server.",
        order: 8,
        materials: [
          {
            id: "l2l-8-html",
            title: "Folder Structure LMS",
            type: "html",
            description: "Lokasi folder yang aman dan rapi untuk deployment.",
            htmlContent:
              "<h2>Struktur folder untuk LMS</h2><p>Salah satu pola yang rapi adalah menempatkan project di <code>/var/www/lms</code> lalu memastikan ownership folder sesuai user deploy.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-2",
    title: "Module 2 — Server Hardening",
    summary:
      "Mengamankan VPS sebelum aplikasi LMS dijalankan secara publik.",
    order: 2,
    lessons: [
      {
        id: "l2l-9",
        title: "Mengubah port SSH",
        duration: "9 min",
        summary:
          "Mengurangi risiko brute-force dengan memindahkan port SSH dari default.",
        order: 1,
        materials: [
          {
            id: "l2l-9-html",
            title: "Ganti Port SSH",
            type: "html",
            description: "Panduan dasar mengganti port SSH di Ubuntu.",
            htmlContent:
              "<h2>Mengubah port SSH</h2><p>Edit file <code>/etc/ssh/sshd_config</code>, ubah port sesuai kebutuhan, lalu restart service SSH.</p><pre><code>sudo nano /etc/ssh/sshd_config</code></pre><pre><code>Port 2222</code></pre><pre><code>sudo systemctl restart ssh</code></pre>",
          },
        ],
      },
      {
        id: "l2l-10",
        title: "Disable root login",
        duration: "7 min",
        summary:
          "Membatasi login langsung sebagai root agar server lebih aman.",
        order: 2,
        materials: [
          {
            id: "l2l-10-html",
            title: "Menonaktifkan Root Login",
            type: "html",
            description: "Konsep keamanan dasar untuk SSH production.",
            htmlContent:
              "<h2>Disable root login</h2><p>Setelah user deploy siap, root login sebaiknya dimatikan agar akses server lebih aman.</p>",
          },
        ],
      },
      {
        id: "l2l-11",
        title: "Install UFW Firewall",
        duration: "7 min",
        summary:
          "Memasang firewall bawaan Ubuntu sebagai lapisan keamanan awal.",
        order: 3,
        materials: [
          {
            id: "l2l-11-html",
            title: "Install UFW",
            type: "html",
            description: "Langkah memasang UFW firewall.",
            htmlContent:
              "<h2>Install UFW Firewall</h2><p>UFW memudahkan pengelolaan port yang boleh diakses dari internet.</p><pre><code>sudo apt install ufw -y</code></pre>",
          },
        ],
      },
      {
        id: "l2l-12",
        title: "Open ports yang dibutuhkan",
        duration: "8 min",
        summary:
          "Membuka hanya port penting untuk SSH, HTTP, dan HTTPS.",
        order: 4,
        materials: [
          {
            id: "l2l-12-html",
            title: "Open Port Server",
            type: "html",
            description: "Port minimum yang biasa dibutuhkan LMS.",
            htmlContent:
              "<h2>Open ports yang dibutuhkan</h2><p>Buka hanya port yang memang diperlukan. Contoh umum:</p><pre><code>sudo ufw allow 2222\nsudo ufw allow 80\nsudo ufw allow 443</code></pre>",
          },
        ],
      },
      {
        id: "l2l-13",
        title: "Enable firewall",
        duration: "6 min",
        summary:
          "Mengaktifkan UFW setelah rule dasar selesai dibuat.",
        order: 5,
        materials: [
          {
            id: "l2l-13-html",
            title: "Enable UFW",
            type: "html",
            description: "Mengaktifkan firewall Ubuntu.",
            htmlContent:
              "<h2>Enable firewall</h2><p>Setelah rule port selesai disiapkan, aktifkan UFW.</p><pre><code>sudo ufw enable</code></pre>",
          },
        ],
      },
      {
        id: "l2l-14",
        title: "Install Fail2Ban",
        duration: "8 min",
        summary:
          "Menambah proteksi dasar terhadap percobaan login berulang.",
        order: 6,
        materials: [
          {
            id: "l2l-14-html",
            title: "Fail2Ban Dasar",
            type: "html",
            description: "Proteksi dasar brute-force pada server.",
            htmlContent:
              "<h2>Install Fail2Ban</h2><p>Fail2Ban membantu memblokir percobaan login yang mencurigakan secara otomatis.</p><pre><code>sudo apt install fail2ban -y</code></pre>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-3",
    title: "Module 3 — Install Node.js dan Nginx",
    summary:
      "Memasang stack runtime utama untuk menjalankan LMS berbasis Next.js.",
    order: 3,
    lessons: [
      {
        id: "l2l-15",
        title: "Install Node.js LTS",
        duration: "10 min",
        summary:
          "Memasang Node.js untuk build dan run LMS Next.js di server.",
        order: 1,
        materials: [
          {
            id: "l2l-15-html",
            title: "Install Node.js",
            type: "html",
            description: "Panduan install Node.js dari NodeSource.",
            htmlContent:
              "<h2>Install Node.js</h2><p>Kita membutuhkan Node.js untuk menjalankan <code>npm install</code>, <code>npm run build</code>, dan <code>npm run start</code>.</p><pre><code>curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -\nsudo apt install nodejs -y</code></pre>",
          },
        ],
      },
      {
        id: "l2l-16",
        title: "Verifikasi Node dan npm",
        duration: "5 min",
        summary:
          "Memastikan instalasi runtime berhasil sebelum deployment dilakukan.",
        order: 2,
        materials: [
          {
            id: "l2l-16-html",
            title: "Verifikasi Runtime",
            type: "html",
            description: "Cek versi Node.js dan npm.",
            htmlContent:
              "<h2>Verifikasi</h2><pre><code>node -v\nnpm -v</code></pre><p>Pastikan keduanya menghasilkan versi yang valid.</p>",
          },
        ],
      },
      {
        id: "l2l-17",
        title: "Install Nginx",
        duration: "7 min",
        summary:
          "Memasang web server yang akan menjadi reverse proxy untuk LMS.",
        order: 3,
        materials: [
          {
            id: "l2l-17-html",
            title: "Install Nginx",
            type: "html",
            description: "Setup awal Nginx untuk production.",
            htmlContent:
              "<h2>Install Nginx</h2><pre><code>sudo apt install nginx -y</code></pre><p>Nginx akan meneruskan request publik ke aplikasi Next.js yang berjalan di port internal.</p>",
          },
        ],
      },
      {
        id: "l2l-18",
        title: "Test Nginx di browser",
        duration: "6 min",
        summary:
          "Memastikan Nginx aktif dan bisa diakses sebelum konfigurasi domain dilakukan.",
        order: 4,
        materials: [
          {
            id: "l2l-18-html",
            title: "Test Nginx",
            type: "html",
            description: "Cek halaman default Nginx dari IP VPS.",
            htmlContent:
              "<h2>Test Nginx</h2><p>Buka IP VPS di browser. Jika halaman default Nginx muncul, berarti service aktif dan siap dikonfigurasi lebih lanjut.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-4",
    title: "Module 4 — Deploying the LMS",
    summary:
      "Memindahkan source code dari localhost ke VPS dan menjalankannya pertama kali.",
    order: 4,
    lessons: [
      {
        id: "l2l-19",
        title: "Upload source code dari localhost",
        duration: "9 min",
        summary:
          "Menentukan cara upload source code ke server, baik melalui Git maupun file transfer.",
        order: 1,
        materials: [
          {
            id: "l2l-19-html",
            title: "Transfer Source Code",
            type: "html",
            description: "Pilihan umum untuk memindahkan source code ke VPS.",
            htmlContent:
              "<h2>Upload source code</h2><p>Source code bisa dipindahkan melalui Git clone, SCP, rsync, atau aplikasi transfer file seperti WinSCP. Pilih workflow yang paling nyaman untuk Windows + PuTTY.</p>",
          },
        ],
      },
      {
        id: "l2l-20",
        title: "Clone repository",
        duration: "8 min",
        summary:
          "Menarik source code LMS dari repository ke folder project di VPS.",
        order: 2,
        materials: [
          {
            id: "l2l-20-html",
            title: "Clone Repo LMS",
            type: "html",
            description: "Mengambil source code menggunakan Git.",
            htmlContent:
              "<h2>Clone repository</h2><p>Jika project tersimpan di Git, clone ke folder deployment di server.</p><pre><code>git clone &lt;repo-url&gt;</code></pre>",
          },
        ],
      },
      {
        id: "l2l-21",
        title: "Install dependency",
        duration: "10 min",
        summary:
          "Menginstall seluruh dependency frontend sebelum build production.",
        order: 3,
        materials: [
          {
            id: "l2l-21-html",
            title: "Install Dependency LMS",
            type: "html",
            description: "Menjalankan npm install pada project frontend.",
            htmlContent:
              "<h2>Install dependency</h2><pre><code>npm install</code></pre><p>Langkah ini akan mengunduh dependency sesuai <code>package.json</code> project frontend.</p>",
          },
        ],
      },
      {
        id: "l2l-22",
        title: "Build production",
        duration: "12 min",
        summary:
          "Menjalankan build production Next.js untuk memastikan project siap live.",
        order: 4,
        materials: [
          {
            id: "l2l-22-html",
            title: "Build LMS Production",
            type: "html",
            description: "Build production untuk frontend LMS.",
            htmlContent:
              "<h2>Build production</h2><pre><code>npm run build</code></pre><p>Kalau ada error build, maka inilah salah satu titik penting yang nanti bisa menambah atau mengubah lesson di course ini.</p>",
          },
        ],
      },
      {
        id: "l2l-23",
        title: "Test run aplikasi",
        duration: "9 min",
        summary:
          "Menjalankan LMS secara manual terlebih dahulu sebelum masuk ke PM2.",
        order: 5,
        materials: [
          {
            id: "l2l-23-html",
            title: "Menjalankan LMS",
            type: "html",
            description: "Menjalankan aplikasi secara manual untuk tes awal.",
            htmlContent:
              "<h2>Test run</h2><pre><code>npm run start</code></pre><p>Setelah build berhasil, jalankan aplikasi dan cek apakah port 3000 aktif sebelum diteruskan lewat Nginx.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-5",
    title: "Module 5 — Configuring Domain dan SSL",
    summary:
      "Menghubungkan domain, reverse proxy Nginx, dan HTTPS agar LMS siap publik.",
    order: 5,
    lessons: [
      {
        id: "l2l-24",
        title: "Point domain ke VPS",
        duration: "8 min",
        summary: "Menyiapkan DNS agar domain mengarah ke IP public VPS.",
        order: 1,
        materials: [
          {
            id: "l2l-24-html",
            title: "DNS ke VPS",
            type: "html",
            description: "Konsep dasar A record untuk LMS.",
            htmlContent:
              "<h2>Point domain ke VPS</h2><p>Buat atau edit A record di DNS panel agar domain utama atau subdomain LMS mengarah ke IP VPS.</p>",
          },
        ],
      },
      {
        id: "l2l-25",
        title: "Setup Nginx reverse proxy",
        duration: "12 min",
        summary:
          "Meneruskan request domain ke aplikasi Next.js yang berjalan di port internal.",
        order: 2,
        materials: [
          {
            id: "l2l-25-html",
            title: "Nginx Reverse Proxy",
            type: "html",
            description: "Konfigurasi dasar reverse proxy untuk LMS.",
            htmlContent:
              "<h2>Setup Nginx Reverse Proxy</h2><p>Nginx akan menerima traffic dari port 80/443 lalu meneruskannya ke aplikasi Next.js di port 3000.</p><pre><code>server {\n  listen 80;\n  server_name yourdomain.com;\n\n  location / {\n    proxy_pass http://localhost:3000;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n  }\n}</code></pre>",
          },
        ],
      },
      {
        id: "l2l-26",
        title: "Enable config dan reload Nginx",
        duration: "8 min",
        summary:
          "Mengaktifkan site config dan memastikan syntax Nginx valid.",
        order: 3,
        materials: [
          {
            id: "l2l-26-html",
            title: "Enable Site Config",
            type: "html",
            description: "Langkah validasi konfigurasi Nginx.",
            htmlContent:
              "<h2>Enable config</h2><pre><code>sudo ln -s ...\nsudo nginx -t\nsudo systemctl reload nginx</code></pre><p>Selalu uji syntax dengan <code>nginx -t</code> sebelum reload.</p>",
          },
        ],
      },
      {
        id: "l2l-27",
        title: "Install Certbot",
        duration: "7 min",
        summary:
          "Menyiapkan tool untuk generate sertifikat SSL gratis dari Let's Encrypt.",
        order: 4,
        materials: [
          {
            id: "l2l-27-html",
            title: "Install Certbot",
            type: "html",
            description: "Install certbot untuk SSL otomatis.",
            htmlContent:
              "<h2>Install Certbot</h2><pre><code>sudo apt install certbot python3-certbot-nginx -y</code></pre>",
          },
        ],
      },
      {
        id: "l2l-28",
        title: "Generate SSL",
        duration: "9 min",
        summary: "Mengaktifkan HTTPS untuk domain LMS.",
        order: 5,
        materials: [
          {
            id: "l2l-28-html",
            title: "Aktifkan HTTPS",
            type: "html",
            description: "Generate sertifikat SSL dan aktifkan redirect HTTPS.",
            htmlContent:
              "<h2>Generate SSL</h2><pre><code>sudo certbot --nginx</code></pre><p>Setelah ini, LMS seharusnya bisa diakses melalui HTTPS jika DNS sudah benar.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-6",
    title: "Module 6 — Running with PM2",
    summary:
      "Menjalankan LMS secara stabil di background dan tetap hidup setelah reboot.",
    order: 6,
    lessons: [
      {
        id: "l2l-29",
        title: "Install PM2",
        duration: "6 min",
        summary:
          "Memasang process manager untuk menjaga aplikasi tetap aktif.",
        order: 1,
        materials: [
          {
            id: "l2l-29-html",
            title: "Install PM2",
            type: "html",
            description: "Process manager untuk Node.js app production.",
            htmlContent:
              "<h2>Install PM2</h2><pre><code>npm install -g pm2</code></pre>",
          },
        ],
      },
      {
        id: "l2l-30",
        title: "Run app dengan PM2",
        duration: "8 min",
        summary:
          "Menjalankan LMS menggunakan PM2 agar tidak bergantung pada terminal aktif.",
        order: 2,
        materials: [
          {
            id: "l2l-30-html",
            title: "Run LMS via PM2",
            type: "html",
            description: "Menjalankan Next.js app dengan PM2.",
            htmlContent:
              "<h2>Run app</h2><pre><code>pm2 start npm --name lms -- start</code></pre><p>Nama process bisa disesuaikan, tetapi <code>lms</code> cukup jelas untuk project ini.</p>",
          },
        ],
      },
      {
        id: "l2l-31",
        title: "Auto start saat reboot",
        duration: "7 min",
        summary:
          "Memastikan LMS otomatis hidup kembali ketika server restart.",
        order: 3,
        materials: [
          {
            id: "l2l-31-html",
            title: "PM2 Startup",
            type: "html",
            description: "Menyimpan konfigurasi process PM2.",
            htmlContent:
              "<h2>Auto start reboot</h2><pre><code>pm2 startup\npm2 save</code></pre>",
          },
        ],
      },
      {
        id: "l2l-32",
        title: "Monitoring process PM2",
        duration: "8 min",
        summary:
          "Melihat status dan log aplikasi ketika terjadi masalah runtime.",
        order: 4,
        materials: [
          {
            id: "l2l-32-html",
            title: "Monitoring PM2",
            type: "html",
            description: "Status dan log dasar PM2.",
            htmlContent:
              "<h2>Monitoring</h2><pre><code>pm2 status\npm2 logs</code></pre><p>Ini penting ketika aplikasi tidak bisa diakses atau restart berulang.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-7",
    title: "Module 7 — Production Optimization",
    summary:
      "Melakukan optimasi dasar agar LMS lebih aman, cepat, dan rapi di production.",
    order: 7,
    lessons: [
      {
        id: "l2l-33",
        title: "Enable Gzip",
        duration: "7 min",
        summary: "Mengompresi response agar delivery asset lebih efisien.",
        order: 1,
        materials: [
          {
            id: "l2l-33-html",
            title: "Gzip Compression",
            type: "html",
            description: "Optimasi response dasar pada Nginx.",
            htmlContent:
              "<h2>Enable Gzip</h2><p>Compression membantu memperkecil response HTML, CSS, dan JS sehingga halaman terasa lebih ringan.</p>",
          },
        ],
      },
      {
        id: "l2l-34",
        title: "Basic Nginx cache",
        duration: "8 min",
        summary: "Memahami cache statis sederhana untuk asset frontend.",
        order: 2,
        materials: [
          {
            id: "l2l-34-html",
            title: "Caching Dasar",
            type: "html",
            description: "Pendekatan cache sederhana untuk asset statis.",
            htmlContent:
              "<h2>Nginx cache</h2><p>File statis seperti image, CSS, dan JS dapat diberi cache policy yang lebih baik agar loading lebih cepat.</p>",
          },
        ],
      },
      {
        id: "l2l-35",
        title: "Security headers",
        duration: "8 min",
        summary:
          "Menambahkan header keamanan dasar untuk production website.",
        order: 3,
        materials: [
          {
            id: "l2l-35-html",
            title: "HTTP Security Headers",
            type: "html",
            description: "Header dasar untuk meningkatkan keamanan browser-side.",
            htmlContent:
              "<h2>Security headers</h2><p>Header seperti <code>X-Frame-Options</code>, <code>X-Content-Type-Options</code>, dan <code>Referrer-Policy</code> membantu meningkatkan keamanan aplikasi web.</p>",
          },
        ],
      },
      {
        id: "l2l-36",
        title: "Next.js production environment",
        duration: "9 min",
        summary:
          "Mengelola environment variable agar konfigurasi production lebih rapi.",
        order: 4,
        materials: [
          {
            id: "l2l-36-html",
            title: "Environment Production",
            type: "html",
            description: "Menyiapkan file environment untuk production.",
            htmlContent:
              "<h2>Next.js production env</h2><p>Pastikan environment variable production dipisahkan dari local development, misalnya untuk base URL API, domain, atau setting lain.</p>",
          },
        ],
      },
      {
        id: "l2l-37",
        title: "Basic performance tuning",
        duration: "8 min",
        summary:
          "Review optimasi sederhana sebelum LMS dipakai lebih luas.",
        order: 5,
        materials: [
          {
            id: "l2l-37-html",
            title: "Performance Review",
            type: "html",
            description: "Checklist performa dasar setelah deploy.",
            htmlContent:
              "<h2>Basic performance tuning</h2><p>Cek ukuran image, hasil build, port internal, response time, dan penggunaan memory agar deployment lebih stabil.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-8",
    title: "Module 8 — Backup dan Monitoring",
    summary:
      "Menyiapkan backup, monitoring, dan pola update course berdasarkan real error di VPS.",
    order: 8,
    lessons: [
      {
        id: "l2l-38",
        title: "Backup source code",
        duration: "7 min",
        summary:
          "Mempersiapkan pola backup project agar perubahan penting tidak hilang.",
        order: 1,
        materials: [
          {
            id: "l2l-38-html",
            title: "Backup Source",
            type: "html",
            description: "Strategi backup source code LMS.",
            htmlContent:
              "<h2>Backup source code</h2><p>Minimal, source code harus aman di Git. Untuk server, kita juga bisa membuat backup manual atau snapshot berkala.</p>",
          },
        ],
      },
      {
        id: "l2l-39",
        title: "Backup database (jika nanti ada)",
        duration: "7 min",
        summary:
          "Mempersiapkan mindset backup untuk fase LMS berikutnya ketika backend database sudah aktif.",
        order: 2,
        materials: [
          {
            id: "l2l-39-html",
            title: "Database Backup Planning",
            type: "html",
            description: "Persiapan backup ketika nanti LMS memakai database nyata.",
            htmlContent:
              "<h2>Backup database</h2><p>Untuk frontend statis/SSR saja belum banyak yang perlu dibackup selain source dan env. Tetapi saat backend/database masuk, backup database menjadi wajib.</p>",
          },
        ],
      },
      {
        id: "l2l-40",
        title: "Monitoring uptime",
        duration: "6 min",
        summary: "Memantau apakah LMS tetap online setelah deployment.",
        order: 3,
        materials: [
          {
            id: "l2l-40-html",
            title: "Uptime Monitoring",
            type: "html",
            description: "Monitoring dasar setelah website live.",
            htmlContent:
              "<h2>Monitoring uptime</h2><p>Gunakan pengecekan manual maupun uptime monitor eksternal untuk memastikan domain LMS selalu bisa diakses.</p>",
          },
        ],
      },
      {
        id: "l2l-41",
        title: "Restore scenario",
        duration: "7 min",
        summary:
          "Memikirkan langkah pemulihan saat server atau aplikasi bermasalah.",
        order: 4,
        materials: [
          {
            id: "l2l-41-html",
            title: "Restore Dasar",
            type: "html",
            description: "Pola berpikir recovery setelah incident.",
            htmlContent:
              "<h2>Restore scenario</h2><p>Backup hanya berguna kalau kita tahu cara restore. Buat checklist sederhana: source, env, service, Nginx, SSL, dan process app.</p>",
          },
        ],
      },
      {
        id: "l2l-42",
        title: "Handling real-world deployment errors",
        duration: "10 min",
        summary:
          "Menjadikan course ini sebagai living course yang akan terus diupdate berdasarkan error nyata di VPS.",
        order: 5,
        materials: [
          {
            id: "l2l-42-html",
            title: "Living Course Notes",
            type: "html",
            description: "Catatan filosofi course yang akan selalu diupdate.",
            htmlContent:
              "<h2>Handling real-world deployment errors</h2><p>Course ini bersifat living course. Jika nanti kita menemui error nyata saat deploy LMS di VPS, maka materi, lesson, dan solusi di course ini harus ikut diperbarui agar tetap sesuai pengalaman real deployment.</p>",
          },
        ],
      },
    ],
  },
];

const fleetoneCurriculumSeed = [
  ["fleetone_base", "Core Foundation", "Foundational setup, core references, and system framework."],
  ["fleetone_security", "Core Foundation", "Users, roles, permissions, and access control."],
  ["fleetone_vendor", "Core Foundation", "Vendor master and supplier operations."],
  ["fleetone_cost", "Core Foundation", "Fleet operating cost structures."],
  ["fleetone_vehicle", "Core Foundation", "Vehicle master and unit operations."],
  ["fleetone_component", "Master Assets & Driver Management", "Vehicle component lifecycle."],
  ["fleetone_driver", "Master Assets & Driver Management", "Driver operations and assignments."],
  ["fleetone_license_cert", "Master Assets & Driver Management", "Driver certification management."],
  ["fleetone_license", "Master Assets & Driver Management", "Vehicle license administration."],
  ["fleetone_documents", "Master Assets & Driver Management", "Document control and expirations."],
  ["fleetone_tracker", "Tracking & Metering", "Tracking and unit movement."],
  ["fleetone_meter", "Tracking & Metering", "Meter operations and readings."],
  ["fleetone_inventory", "Inventory & Logistics", "Parts inventory."],
  ["fleetone_fluid", "Inventory & Logistics", "Fluid management."],
  ["fleetone_fuel", "Inventory & Logistics", "Fuel operations."],
  ["fleetone_transfer", "Inventory & Logistics", "Inventory transfers."],
  ["fleetone_supplies", "Inventory & Logistics", "Supplies issuance."],
  ["fleetone_purchase", "Inventory & Logistics", "Purchasing workflow."],
  ["fleetone_tire", "Inventory & Logistics", "Tire lifecycle management."],
  ["fleetone_pm", "Maintenance & Workshop", "Preventive maintenance."],
  ["fleetone_tickler", "Maintenance & Workshop", "Inspection findings."],
  ["fleetone_repair", "Maintenance & Workshop", "Repair operations."],
  ["fleetone_workshop", "Maintenance & Workshop", "Workshop management."],
  ["fleetone_maintenance_history", "Maintenance & Workshop", "Maintenance history."],
  ["fleetone_recall", "Maintenance & Workshop", "Recall campaigns."],
  ["fleetone_assignment", "Operations", "Vehicle assignments."],
  ["fleetone_trip", "Operations", "Trip operations."],
  ["fleetone_payroll_time", "HR & Support Assets", "Time and productivity."],
  ["fleetone_violation", "HR & Support Assets", "Driver violations."],
  ["fleetone_tool_inventory", "HR & Support Assets", "Tool inventory."],
  ["fleetone_tool", "HR & Support Assets", "Tool assignment."],
  ["fleetone_contract", "Governance & Risk", "Contracts."],
  ["fleetone_insurance", "Governance & Risk", "Insurance."],
  ["fleetone_compliance", "Governance & Risk", "Compliance management."],
  ["fleetone_alerts", "Monitoring & Intelligence", "Alerts and notifications."],
  ["fleetone_reporting", "Monitoring & Intelligence", "Operational reporting."],
  ["fleetone_dashboard", "Monitoring & Intelligence", "Fleet KPIs."],
  ["fleetone_integration", "Monitoring & Intelligence", "External integrations."],
  ["fleetone_mobile", "Monitoring & Intelligence", "Mobile operations."],
  ["fleetone_ai_predictive", "Monitoring & Intelligence", "Predictive intelligence."],
] as const;

const fleetoneCurriculum: CurriculumSection[] = fleetoneCurriculumSeed.map(
  ([title, phase, description], index) => ({
    id: `fleetone-sec-${index + 1}`,
    title,
    summary: `${phase}. ${description}`,
    order: index + 1,
    lessons: [],
  })
);

export function getCourseImageBySlug(slug: string) {
  if (slug === "python-basic") {
    return "/images/course-python-card.png";
  }

  if (slug === "odoo-development") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "fleetone-academy") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "from-localhost-to-live-lms") {
    return "/images/course-odoo-card.png";
  }

  return "/images/course-prompt-card.png";
}

export const courses: Course[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: "4",
    slug: "fleetone-academy",
    title: "FleetOne Academy",
    price: null,
    accessType: "free",
    level: "Beginner",
    totalDuration: "40 Sections",
    shortDescription: "Operate FleetOne module-by-module while the platform is being built.",
    description:
      "Operate FleetOne module-by-module while the platform is being built.",
    curriculum: fleetoneCurriculum,
    lessons: flattenCurriculum(fleetoneCurriculum),
  },
  {
    id: "5",
    slug: "from-localhost-to-live-lms",
    title: "From Localhost to Live LMS",
    price: null,
    accessType: "free",
    level: "Beginner",
    totalDuration: "8 Modules • 42 Lessons",
    shortDescription:
      "Deploy LMS production-ready dari localhost ke Ubuntu VPS 22.04 menggunakan PuTTY, Nginx, SSL, dan PM2.",
    description:
      "Deploying a Production-Ready Learning Platform on Ubuntu VPS. Course gratis ini membahas perjalanan nyata dari localhost ke live server menggunakan Ubuntu 22.04, akses PuTTY, Nginx, SSL, PM2, dan pola deployment yang akan terus diperbarui mengikuti error nyata yang kita temui di VPS.",
    curriculum: localhostToLiveCurriculum,
    lessons: flattenCurriculum(localhostToLiveCurriculum),
  },
];

```
=== END FILE: frontend/src/data/courses.ts ===

=== START FILE: frontend/src/hooks/.gitkeep ===
Folder: frontend/src/hooks
Nama file: .gitkeep
Tipe: content
```


```
=== END FILE: frontend/src/hooks/.gitkeep ===

=== START FILE: frontend/src/hooks/useCourseProgress.ts ===
Folder: frontend/src/hooks
Nama file: useCourseProgress.ts
Tipe: content
```
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getBrowserCourseProgress,
  markLessonCompleted,
  markMaterialCompleted,
  saveBrowserCourseProgress,
  subscribeToCourseProgressChange,
} from "@/lib/course-progress";
import type { Course, LearnerCourseProgress } from "@/types/course.types";

export function useCourseProgress(
  course: Course,
  initialProgress: LearnerCourseProgress | null
) {
  const [progress, setProgress] = useState<LearnerCourseProgress>(() => {
    if (initialProgress) {
      return {
        ...initialProgress,
        completedMaterialIds: initialProgress.completedMaterialIds ?? [],
      };
    }

    return {
      courseId: course.id,
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
      currentLessonId: course.lessons[0]?.id ?? "",
      completedLessonIds: [],
      completedMaterialIds: [],
      enrollmentStatus: course.lessons.length ? "active" : "not_started",
    };
  });

  useEffect(() => {
    const browserProgress = getBrowserCourseProgress(course);
    setProgress(browserProgress);
  }, [course]);

  useEffect(() => {
    const unsubscribe = subscribeToCourseProgressChange(() => {
      const browserProgress = getBrowserCourseProgress(course);
      setProgress(browserProgress);
    }, course.id);

    return unsubscribe;
  }, [course]);

  const summary = useMemo(() => {
    const totalLessons = course.lessons.length;
    const totalMaterials = course.lessons.reduce(
      (total, lesson) => total + lesson.materials.length,
      0
    );

    const lessonProgressPercent = totalLessons
      ? Math.round((progress.completedLessonIds.length / totalLessons) * 100)
      : 0;

    const materialProgressPercent = totalMaterials
      ? Math.round((progress.completedMaterialIds.length / totalMaterials) * 100)
      : 0;

    return {
      totalLessons,
      totalMaterials,
      lessonProgressPercent,
      materialProgressPercent,
    };
  }, [course, progress]);

  const handleMarkMaterialCompleted = (lessonId: string, materialId: string) => {
    const nextProgress = markMaterialCompleted(course, progress, lessonId, materialId);
    saveBrowserCourseProgress(course, nextProgress);
    setProgress(nextProgress);
    return nextProgress;
  };

  const handleMarkLessonCompleted = (lessonId: string) => {
    const nextProgress = markLessonCompleted(course, progress, lessonId);
    saveBrowserCourseProgress(course, nextProgress);
    setProgress(nextProgress);
    return nextProgress;
  };

  return {
    progress,
    summary,
    handleMarkMaterialCompleted,
    handleMarkLessonCompleted,
  };
}

```
=== END FILE: frontend/src/hooks/useCourseProgress.ts ===

=== START FILE: frontend/src/lib/api.ts ===
Folder: frontend/src/lib
Nama file: api.ts
Tipe: content
```
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
```
=== END FILE: frontend/src/lib/api.ts ===

=== START FILE: frontend/src/lib/constants.ts ===
Folder: frontend/src/lib
Nama file: constants.ts
Tipe: content
```
export const APP_NAME = "OdooCamp 247";

```
=== END FILE: frontend/src/lib/constants.ts ===

=== START FILE: frontend/src/lib/course-progress.ts ===
Folder: frontend/src/lib
Nama file: course-progress.ts
Tipe: content
```
import { getSeedCourseProgressByCourseId } from "@/data/course-progress";
import type { Course, LearnerCourseProgress, Lesson } from "@/types/course.types";

const STORAGE_KEY = "lmsstarter-course-progress";
const COURSE_PROGRESS_EVENT = "lmsstarter:course-progress-changed";

type StoredProgressMap = Record<string, LearnerCourseProgress>;
type CourseProgressChangedDetail = {
  courseId: string;
};
export type ActiveLearnerState = {
  course: Course;
  progress: LearnerCourseProgress;
  currentLesson: Lesson | null;
  lessonProgressPercent: number;
  materialProgressPercent: number;
};

function isBrowser() {
  return typeof window !== "undefined";
}

function getAllLessons(course: Course): Lesson[] {
  return course.lessons;
}

function getAllMaterialIds(course: Course) {
  return course.lessons.flatMap((lesson) => lesson.materials.map((material) => material.id));
}

function buildDefaultProgress(course: Course): LearnerCourseProgress {
  const seed = getSeedCourseProgressByCourseId(course.id);

  if (seed) {
    return {
      ...seed,
      completedMaterialIds: seed.completedMaterialIds ?? [],
    };
  }

  return {
    courseId: course.id,
    startedAt: new Date().toISOString(),
    lastAccessedAt: new Date().toISOString(),
    currentLessonId: course.lessons[0]?.id ?? "",
    completedLessonIds: [],
    completedMaterialIds: [],
    enrollmentStatus: course.lessons.length ? "active" : "not_started",
  };
}

function readProgressMap(): StoredProgressMap {
  if (!isBrowser()) {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredProgressMap) : {};
  } catch {
    return {};
  }
}

function writeProgressMap(map: StoredProgressMap) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

function emitCourseProgressChanged(courseId: string) {
  if (!isBrowser()) {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<CourseProgressChangedDetail>(COURSE_PROGRESS_EVENT, {
      detail: { courseId },
    })
  );
}

function getNextLessonId(course: Course, lessonId: string) {
  const lessons = getAllLessons(course);
  const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (currentIndex === -1 || currentIndex >= lessons.length - 1) {
    return lessonId;
  }

  return lessons[currentIndex + 1].id;
}

function isLessonCompleteByMaterials(
  lesson: Lesson,
  completedMaterialIds: string[]
) {
  return lesson.materials.every((material) => completedMaterialIds.includes(material.id));
}

function normalizeProgress(
  course: Course,
  progress: LearnerCourseProgress
): LearnerCourseProgress {
  const validMaterialIds = new Set(getAllMaterialIds(course));
  const completedMaterialIds = progress.completedMaterialIds.filter((id) =>
    validMaterialIds.has(id)
  );

  const completedLessonIds = course.lessons
    .filter((lesson) => isLessonCompleteByMaterials(lesson, completedMaterialIds))
    .map((lesson) => lesson.id);

  const allLessonsCompleted = completedLessonIds.length === course.lessons.length;

  return {
    ...progress,
    completedLessonIds,
    completedMaterialIds,
    enrollmentStatus: allLessonsCompleted ? "completed" : "active",
    currentLessonId: allLessonsCompleted
      ? course.lessons[course.lessons.length - 1]?.id ?? progress.currentLessonId
      : progress.currentLessonId || course.lessons[0]?.id || "",
  };
}

export function getBrowserCourseProgress(course: Course) {
  const map = readProgressMap();
  const stored = map[course.id];
  return normalizeProgress(course, stored ?? buildDefaultProgress(course));
}

export function getOptionalBrowserCourseProgress(course: Course) {
  const map = readProgressMap();
  const stored = map[course.id];
  const seed = getSeedCourseProgressByCourseId(course.id);

  if (!stored && !seed) {
    return null;
  }

  return normalizeProgress(course, stored ?? buildDefaultProgress(course));
}

export function saveBrowserCourseProgress(course: Course, progress: LearnerCourseProgress) {
  const map = readProgressMap();
  map[course.id] = normalizeProgress(course, progress);
  writeProgressMap(map);
  emitCourseProgressChanged(course.id);
  return map[course.id];
}

export function getAllBrowserCourseProgress(catalog: Course[]) {
  return catalog.map((course) => getBrowserCourseProgress(course));
}

export function getOptionalBrowserCourseProgressMap(catalog: Course[]) {
  return Object.fromEntries(
    catalog.map((course) => [course.id, getOptionalBrowserCourseProgress(course)])
  ) as Record<string, LearnerCourseProgress | null>;
}

export function getActiveLearnerState(catalog: Course[]): ActiveLearnerState | null {
  const progressList = getAllBrowserCourseProgress(catalog).filter(
    (item) => item.enrollmentStatus !== "not_started"
  );

  if (!progressList.length) {
    return null;
  }

  const activeProgress = progressList
    .slice()
    .sort(
      (a, b) =>
        new Date(b.lastAccessedAt).getTime() - new Date(a.lastAccessedAt).getTime()
    )[0];

  const course = catalog.find((item) => item.id === activeProgress.courseId);

  if (!course) {
    return null;
  }

  const totalLessons = course.lessons.length;
  const totalMaterials = course.lessons.reduce(
    (total, lesson) => total + lesson.materials.length,
    0
  );

  const lessonProgressPercent = totalLessons
    ? Math.round((activeProgress.completedLessonIds.length / totalLessons) * 100)
    : 0;

  const materialProgressPercent = totalMaterials
    ? Math.round((activeProgress.completedMaterialIds.length / totalMaterials) * 100)
    : 0;

  const currentLesson =
    course.lessons.find((lesson) => lesson.id === activeProgress.currentLessonId) ?? null;

  return {
    course,
    progress: activeProgress,
    currentLesson,
    lessonProgressPercent,
    materialProgressPercent,
  };
}

export function subscribeToCourseProgressChange(
  callback: (courseId?: string) => void,
  courseId?: string
) {
  if (!isBrowser()) {
    return () => undefined;
  }

  const handleCustomEvent = (event: Event) => {
    const customEvent = event as CustomEvent<CourseProgressChangedDetail>;
    const changedCourseId = customEvent.detail?.courseId;

    if (!courseId || changedCourseId === courseId) {
      callback(changedCourseId);
    }
  };

  const handleStorageEvent = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(courseId);
  };

  window.addEventListener(COURSE_PROGRESS_EVENT, handleCustomEvent as EventListener);
  window.addEventListener("storage", handleStorageEvent);

  return () => {
    window.removeEventListener(
      COURSE_PROGRESS_EVENT,
      handleCustomEvent as EventListener
    );
    window.removeEventListener("storage", handleStorageEvent);
  };
}

export function markMaterialCompleted(
  course: Course,
  progress: LearnerCourseProgress,
  lessonId: string,
  materialId: string
) {
  const completedMaterialIds = Array.from(
    new Set([...progress.completedMaterialIds, materialId])
  );

  const lesson = course.lessons.find((item) => item.id === lessonId);
  const lessonCompleted = lesson
    ? isLessonCompleteByMaterials(lesson, completedMaterialIds)
    : false;

  const nextCurrentLessonId = lessonCompleted
    ? getNextLessonId(course, lessonId)
    : progress.currentLessonId || lessonId;

  return normalizeProgress(course, {
    ...progress,
    completedMaterialIds,
    currentLessonId: nextCurrentLessonId,
    lastAccessedAt: new Date().toISOString(),
  });
}

export function markLessonCompleted(
  course: Course,
  progress: LearnerCourseProgress,
  lessonId: string
) {
  const lesson = course.lessons.find((item) => item.id === lessonId);

  if (!lesson) {
    return normalizeProgress(course, progress);
  }

  const lessonMaterialIds = lesson.materials.map((material) => material.id);
  const completedMaterialIds = Array.from(
    new Set([...progress.completedMaterialIds, ...lessonMaterialIds])
  );

  return normalizeProgress(course, {
    ...progress,
    completedMaterialIds,
    currentLessonId: getNextLessonId(course, lessonId),
    lastAccessedAt: new Date().toISOString(),
  });
}

```
=== END FILE: frontend/src/lib/course-progress.ts ===

=== START FILE: frontend/src/services/course.service.ts ===
Folder: frontend/src/services
Nama file: course.service.ts
Tipe: content
```
import { courses } from "@/data/courses";
import {
  getContinueLearningHrefBySlug,
  getCourseProgressBySlug,
} from "@/data/course-progress";

export async function getCourses() {
  return courses;
}

export async function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug) ?? null;
}

export async function getCourseWithProgressBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug) ?? null;
  const progress = getCourseProgressBySlug(slug);

  if (!course) {
    return null;
  }

  return {
    course,
    progress,
  };
}

export async function getCourseLessonBySlugAndLessonId(
  slug: string,
  lessonId: string
) {
  const course = courses.find((item) => item.slug === slug) ?? null;

  if (!course) {
    return null;
  }

  const lesson = course.lessons.find((item) => item.id === lessonId) ?? null;

  if (!lesson) {
    return null;
  }

  const progress = getCourseProgressBySlug(slug);
  const continueHref = getContinueLearningHrefBySlug(slug);
  const lessonIndex = course.lessons.findIndex((item) => item.id === lessonId);
  const previousLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < course.lessons.length - 1
      ? course.lessons[lessonIndex + 1]
      : null;

  return {
    course,
    lesson,
    progress,
    continueHref,
    previousLesson,
    nextLesson,
  };
}

```
=== END FILE: frontend/src/services/course.service.ts ===

=== START FILE: frontend/src/store/.gitkeep ===
Folder: frontend/src/store
Nama file: .gitkeep
Tipe: content
```


```
=== END FILE: frontend/src/store/.gitkeep ===

=== START FILE: frontend/src/types/course.types.ts ===
Folder: frontend/src/types
Nama file: course.types.ts
Tipe: content
```
export type MaterialType = "html" | "pdf" | "docx" | "video";

export type LessonMaterial = {
  id: string;
  title: string;
  type: MaterialType;
  description: string;
  url?: string;
  htmlContent?: string;
  fileName?: string;
  duration?: string;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  order: number;
  isPreview?: boolean;
  materials: LessonMaterial[];
};

export type CurriculumSection = {
  id: string;
  title: string;
  summary: string;
  order: number;
  lessons: Lesson[];
};

export type CourseAccessType = "free" | "paid";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  slug: string;
  price: number | null;
  accessType: CourseAccessType;
  description?: string;
  shortDescription?: string;
  level: CourseLevel;
  totalDuration: string;
  lessons: Lesson[];
  curriculum: CurriculumSection[];
};

export type LearnerCourseProgress = {
  courseId: string;
  startedAt: string;
  lastAccessedAt: string;
  currentLessonId: string;
  completedLessonIds: string[];
  completedMaterialIds: string[];
  enrollmentStatus: "active" | "completed" | "not_started";
};

```
=== END FILE: frontend/src/types/course.types.ts ===

=== START FILE: frontend/tsconfig.json ===
Folder: frontend
Nama file: tsconfig.json
Tipe: content
```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      { "name": "next" }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

```
=== END FILE: frontend/tsconfig.json ===

=== START FILE: frontend/tsconfig.tsbuildinfo ===
Folder: frontend
Nama file: tsconfig.tsbuildinfo
Tipe: content
```
{"fileNames":["../node_modules/typescript/lib/lib.es5.d.ts","../node_modules/typescript/lib/lib.es2015.d.ts","../node_modules/typescript/lib/lib.es2016.d.ts","../node_modules/typescript/lib/lib.es2017.d.ts","../node_modules/typescript/lib/lib.es2018.d.ts","../node_modules/typescript/lib/lib.es2019.d.ts","../node_modules/typescript/lib/lib.es2020.d.ts","../node_modules/typescript/lib/lib.es2021.d.ts","../node_modules/typescript/lib/lib.es2022.d.ts","../node_modules/typescript/lib/lib.es2023.d.ts","../node_modules/typescript/lib/lib.es2024.d.ts","../node_modules/typescript/lib/lib.esnext.d.ts","../node_modules/typescript/lib/lib.dom.d.ts","../node_modules/typescript/lib/lib.dom.iterable.d.ts","../node_modules/typescript/lib/lib.es2015.core.d.ts","../node_modules/typescript/lib/lib.es2015.collection.d.ts","../node_modules/typescript/lib/lib.es2015.generator.d.ts","../node_modules/typescript/lib/lib.es2015.iterable.d.ts","../node_modules/typescript/lib/lib.es2015.promise.d.ts","../node_modules/typescript/lib/lib.es2015.proxy.d.ts","../node_modules/typescript/lib/lib.es2015.reflect.d.ts","../node_modules/typescript/lib/lib.es2015.symbol.d.ts","../node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","../node_modules/typescript/lib/lib.es2016.array.include.d.ts","../node_modules/typescript/lib/lib.es2016.intl.d.ts","../node_modules/typescript/lib/lib.es2017.arraybuffer.d.ts","../node_modules/typescript/lib/lib.es2017.date.d.ts","../node_modules/typescript/lib/lib.es2017.object.d.ts","../node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts","../node_modules/typescript/lib/lib.es2017.string.d.ts","../node_modules/typescript/lib/lib.es2017.intl.d.ts","../node_modules/typescript/lib/lib.es2017.typedarrays.d.ts","../node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts","../node_modules/typescript/lib/lib.es2018.asynciterable.d.ts","../node_modules/typescript/lib/lib.es2018.intl.d.ts","../node_modules/typescript/lib/lib.es2018.promise.d.ts","../node_modules/typescript/lib/lib.es2018.regexp.d.ts","../node_modules/typescript/lib/lib.es2019.array.d.ts","../node_modules/typescript/lib/lib.es2019.object.d.ts","../node_modules/typescript/lib/lib.es2019.string.d.ts","../node_modules/typescript/lib/lib.es2019.symbol.d.ts","../node_modules/typescript/lib/lib.es2019.intl.d.ts","../node_modules/typescript/lib/lib.es2020.bigint.d.ts","../node_modules/typescript/lib/lib.es2020.date.d.ts","../node_modules/typescript/lib/lib.es2020.promise.d.ts","../node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts","../node_modules/typescript/lib/lib.es2020.string.d.ts","../node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts","../node_modules/typescript/lib/lib.es2020.intl.d.ts","../node_modules/typescript/lib/lib.es2020.number.d.ts","../node_modules/typescript/lib/lib.es2021.promise.d.ts","../node_modules/typescript/lib/lib.es2021.string.d.ts","../node_modules/typescript/lib/lib.es2021.weakref.d.ts","../node_modules/typescript/lib/lib.es2021.intl.d.ts","../node_modules/typescript/lib/lib.es2022.array.d.ts","../node_modules/typescript/lib/lib.es2022.error.d.ts","../node_modules/typescript/lib/lib.es2022.intl.d.ts","../node_modules/typescript/lib/lib.es2022.object.d.ts","../node_modules/typescript/lib/lib.es2022.string.d.ts","../node_modules/typescript/lib/lib.es2022.regexp.d.ts","../node_modules/typescript/lib/lib.es2023.array.d.ts","../node_modules/typescript/lib/lib.es2023.collection.d.ts","../node_modules/typescript/lib/lib.es2023.intl.d.ts","../node_modules/typescript/lib/lib.es2024.arraybuffer.d.ts","../node_modules/typescript/lib/lib.es2024.collection.d.ts","../node_modules/typescript/lib/lib.es2024.object.d.ts","../node_modules/typescript/lib/lib.es2024.promise.d.ts","../node_modules/typescript/lib/lib.es2024.regexp.d.ts","../node_modules/typescript/lib/lib.es2024.sharedmemory.d.ts","../node_modules/typescript/lib/lib.es2024.string.d.ts","../node_modules/typescript/lib/lib.esnext.array.d.ts","../node_modules/typescript/lib/lib.esnext.collection.d.ts","../node_modules/typescript/lib/lib.esnext.intl.d.ts","../node_modules/typescript/lib/lib.esnext.disposable.d.ts","../node_modules/typescript/lib/lib.esnext.promise.d.ts","../node_modules/typescript/lib/lib.esnext.decorators.d.ts","../node_modules/typescript/lib/lib.esnext.iterator.d.ts","../node_modules/typescript/lib/lib.esnext.float16.d.ts","../node_modules/typescript/lib/lib.esnext.error.d.ts","../node_modules/typescript/lib/lib.esnext.sharedmemory.d.ts","../node_modules/typescript/lib/lib.decorators.d.ts","../node_modules/typescript/lib/lib.decorators.legacy.d.ts","./.next/types/routes.d.ts","../node_modules/@types/react/global.d.ts","../node_modules/csstype/index.d.ts","../node_modules/@types/react/index.d.ts","../node_modules/next/dist/styled-jsx/types/css.d.ts","../node_modules/next/dist/styled-jsx/types/macro.d.ts","../node_modules/next/dist/styled-jsx/types/style.d.ts","../node_modules/next/dist/styled-jsx/types/global.d.ts","../node_modules/next/dist/styled-jsx/types/index.d.ts","../node_modules/next/dist/shared/lib/amp.d.ts","../node_modules/next/amp.d.ts","../node_modules/next/dist/server/get-page-files.d.ts","../node_modules/@types/node/compatibility/disposable.d.ts","../node_modules/@types/node/compatibility/indexable.d.ts","../node_modules/@types/node/compatibility/iterators.d.ts","../node_modules/@types/node/compatibility/index.d.ts","../node_modules/@types/node/globals.typedarray.d.ts","../node_modules/@types/node/buffer.buffer.d.ts","../node_modules/@types/node/globals.d.ts","../node_modules/@types/node/web-globals/abortcontroller.d.ts","../node_modules/@types/node/web-globals/domexception.d.ts","../node_modules/@types/node/web-globals/events.d.ts","../node_modules/undici-types/header.d.ts","../node_modules/undici-types/readable.d.ts","../node_modules/undici-types/file.d.ts","../node_modules/undici-types/fetch.d.ts","../node_modules/undici-types/formdata.d.ts","../node_modules/undici-types/connector.d.ts","../node_modules/undici-types/client.d.ts","../node_modules/undici-types/errors.d.ts","../node_modules/undici-types/dispatcher.d.ts","../node_modules/undici-types/global-dispatcher.d.ts","../node_modules/undici-types/global-origin.d.ts","../node_modules/undici-types/pool-stats.d.ts","../node_modules/undici-types/pool.d.ts","../node_modules/undici-types/handlers.d.ts","../node_modules/undici-types/balanced-pool.d.ts","../node_modules/undici-types/agent.d.ts","../node_modules/undici-types/mock-interceptor.d.ts","../node_modules/undici-types/mock-agent.d.ts","../node_modules/undici-types/mock-client.d.ts","../node_modules/undici-types/mock-pool.d.ts","../node_modules/undici-types/mock-errors.d.ts","../node_modules/undici-types/proxy-agent.d.ts","../node_modules/undici-types/env-http-proxy-agent.d.ts","../node_modules/undici-types/retry-handler.d.ts","../node_modules/undici-types/retry-agent.d.ts","../node_modules/undici-types/api.d.ts","../node_modules/undici-types/interceptors.d.ts","../node_modules/undici-types/util.d.ts","../node_modules/undici-types/cookies.d.ts","../node_modules/undici-types/patch.d.ts","../node_modules/undici-types/websocket.d.ts","../node_modules/undici-types/eventsource.d.ts","../node_modules/undici-types/filereader.d.ts","../node_modules/undici-types/diagnostics-channel.d.ts","../node_modules/undici-types/content-type.d.ts","../node_modules/undici-types/cache.d.ts","../node_modules/undici-types/index.d.ts","../node_modules/@types/node/web-globals/fetch.d.ts","../node_modules/@types/node/web-globals/navigator.d.ts","../node_modules/@types/node/web-globals/storage.d.ts","../node_modules/@types/node/assert.d.ts","../node_modules/@types/node/assert/strict.d.ts","../node_modules/@types/node/async_hooks.d.ts","../node_modules/@types/node/buffer.d.ts","../node_modules/@types/node/child_process.d.ts","../node_modules/@types/node/cluster.d.ts","../node_modules/@types/node/console.d.ts","../node_modules/@types/node/constants.d.ts","../node_modules/@types/node/crypto.d.ts","../node_modules/@types/node/dgram.d.ts","../node_modules/@types/node/diagnostics_channel.d.ts","../node_modules/@types/node/dns.d.ts","../node_modules/@types/node/dns/promises.d.ts","../node_modules/@types/node/domain.d.ts","../node_modules/@types/node/events.d.ts","../node_modules/@types/node/fs.d.ts","../node_modules/@types/node/fs/promises.d.ts","../node_modules/@types/node/http.d.ts","../node_modules/@types/node/http2.d.ts","../node_modules/@types/node/https.d.ts","../node_modules/@types/node/inspector.d.ts","../node_modules/@types/node/inspector.generated.d.ts","../node_modules/@types/node/module.d.ts","../node_modules/@types/node/net.d.ts","../node_modules/@types/node/os.d.ts","../node_modules/@types/node/path.d.ts","../node_modules/@types/node/perf_hooks.d.ts","../node_modules/@types/node/process.d.ts","../node_modules/@types/node/punycode.d.ts","../node_modules/@types/node/querystring.d.ts","../node_modules/@types/node/readline.d.ts","../node_modules/@types/node/readline/promises.d.ts","../node_modules/@types/node/repl.d.ts","../node_modules/@types/node/sea.d.ts","../node_modules/@types/node/sqlite.d.ts","../node_modules/@types/node/stream.d.ts","../node_modules/@types/node/stream/promises.d.ts","../node_modules/@types/node/stream/consumers.d.ts","../node_modules/@types/node/stream/web.d.ts","../node_modules/@types/node/string_decoder.d.ts","../node_modules/@types/node/test.d.ts","../node_modules/@types/node/timers.d.ts","../node_modules/@types/node/timers/promises.d.ts","../node_modules/@types/node/tls.d.ts","../node_modules/@types/node/trace_events.d.ts","../node_modules/@types/node/tty.d.ts","../node_modules/@types/node/url.d.ts","../node_modules/@types/node/util.d.ts","../node_modules/@types/node/v8.d.ts","../node_modules/@types/node/vm.d.ts","../node_modules/@types/node/wasi.d.ts","../node_modules/@types/node/worker_threads.d.ts","../node_modules/@types/node/zlib.d.ts","../node_modules/@types/node/index.d.ts","../node_modules/@types/react/canary.d.ts","../node_modules/@types/react/experimental.d.ts","../node_modules/@types/react-dom/index.d.ts","../node_modules/@types/react-dom/canary.d.ts","../node_modules/@types/react-dom/experimental.d.ts","../node_modules/next/dist/lib/fallback.d.ts","../node_modules/next/dist/compiled/webpack/webpack.d.ts","../node_modules/next/dist/server/config.d.ts","../node_modules/next/dist/lib/load-custom-routes.d.ts","../node_modules/next/dist/shared/lib/image-config.d.ts","../node_modules/next/dist/build/webpack/plugins/subresource-integrity-plugin.d.ts","../node_modules/next/dist/server/body-streams.d.ts","../node_modules/next/dist/server/lib/cache-control.d.ts","../node_modules/next/dist/lib/setup-exception-listeners.d.ts","../node_modules/next/dist/lib/worker.d.ts","../node_modules/next/dist/lib/constants.d.ts","../node_modules/next/dist/client/components/app-router-headers.d.ts","../node_modules/next/dist/build/rendering-mode.d.ts","../node_modules/next/dist/server/lib/router-utils/build-prefetch-segment-data-route.d.ts","../node_modules/next/dist/server/require-hook.d.ts","../node_modules/next/dist/server/lib/experimental/ppr.d.ts","../node_modules/next/dist/build/webpack/plugins/app-build-manifest-plugin.d.ts","../node_modules/next/dist/lib/page-types.d.ts","../node_modules/next/dist/build/segment-config/app/app-segment-config.d.ts","../node_modules/next/dist/build/segment-config/pages/pages-segment-config.d.ts","../node_modules/next/dist/build/analysis/get-page-static-info.d.ts","../node_modules/next/dist/build/webpack/loaders/get-module-build-info.d.ts","../node_modules/next/dist/build/webpack/plugins/middleware-plugin.d.ts","../node_modules/next/dist/server/node-polyfill-crypto.d.ts","../node_modules/next/dist/server/node-environment-baseline.d.ts","../node_modules/next/dist/server/node-environment-extensions/error-inspect.d.ts","../node_modules/next/dist/server/node-environment-extensions/random.d.ts","../node_modules/next/dist/server/node-environment-extensions/date.d.ts","../node_modules/next/dist/server/node-environment-extensions/web-crypto.d.ts","../node_modules/next/dist/server/node-environment-extensions/node-crypto.d.ts","../node_modules/next/dist/server/node-environment.d.ts","../node_modules/next/dist/build/page-extensions-type.d.ts","../node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin.d.ts","../node_modules/next/dist/server/instrumentation/types.d.ts","../node_modules/next/dist/lib/coalesced-function.d.ts","../node_modules/next/dist/shared/lib/router/utils/middleware-route-matcher.d.ts","../node_modules/next/dist/server/lib/router-utils/types.d.ts","../node_modules/next/dist/shared/lib/modern-browserslist-target.d.ts","../node_modules/next/dist/shared/lib/constants.d.ts","../node_modules/next/dist/trace/types.d.ts","../node_modules/next/dist/trace/trace.d.ts","../node_modules/next/dist/trace/shared.d.ts","../node_modules/next/dist/trace/index.d.ts","../node_modules/next/dist/build/load-jsconfig.d.ts","../node_modules/@next/env/dist/index.d.ts","../node_modules/next/dist/build/webpack/plugins/telemetry-plugin/use-cache-tracker-utils.d.ts","../node_modules/next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin.d.ts","../node_modules/next/dist/telemetry/storage.d.ts","../node_modules/next/dist/build/build-context.d.ts","../node_modules/next/dist/shared/lib/bloom-filter.d.ts","../node_modules/next/dist/build/webpack-config.d.ts","../node_modules/next/dist/server/route-kind.d.ts","../node_modules/next/dist/server/route-definitions/route-definition.d.ts","../node_modules/next/dist/build/swc/generated-native.d.ts","../node_modules/next/dist/build/swc/types.d.ts","../node_modules/next/dist/server/dev/parse-version-info.d.ts","../node_modules/next/dist/next-devtools/shared/types.d.ts","../node_modules/next/dist/server/dev/dev-indicator-server-state.d.ts","../node_modules/next/dist/server/lib/parse-stack.d.ts","../node_modules/next/dist/next-devtools/server/shared.d.ts","../node_modules/next/dist/next-devtools/shared/stack-frame.d.ts","../node_modules/next/dist/next-devtools/dev-overlay/utils/get-error-by-type.d.ts","../node_modules/@types/react/jsx-runtime.d.ts","../node_modules/next/dist/next-devtools/dev-overlay/container/runtime-error/render-error.d.ts","../node_modules/next/dist/next-devtools/dev-overlay/shared.d.ts","../node_modules/next/dist/server/dev/hot-reloader-types.d.ts","../node_modules/next/dist/server/lib/cache-handlers/types.d.ts","../node_modules/next/dist/server/response-cache/types.d.ts","../node_modules/next/dist/server/resume-data-cache/cache-store.d.ts","../node_modules/next/dist/server/resume-data-cache/resume-data-cache.d.ts","../node_modules/next/dist/server/render-result.d.ts","../node_modules/next/dist/server/lib/i18n-provider.d.ts","../node_modules/next/dist/server/web/next-url.d.ts","../node_modules/next/dist/compiled/@edge-runtime/cookies/index.d.ts","../node_modules/next/dist/server/web/spec-extension/cookies.d.ts","../node_modules/next/dist/server/web/spec-extension/request.d.ts","../node_modules/next/dist/server/after/builtin-request-context.d.ts","../node_modules/next/dist/server/web/spec-extension/fetch-event.d.ts","../node_modules/next/dist/server/web/spec-extension/response.d.ts","../node_modules/next/dist/build/segment-config/middleware/middleware-config.d.ts","../node_modules/next/dist/server/web/types.d.ts","../node_modules/next/dist/build/webpack/plugins/pages-manifest-plugin.d.ts","../node_modules/next/dist/shared/lib/router/utils/parse-url.d.ts","../node_modules/next/dist/server/base-http/node.d.ts","../node_modules/next/dist/build/webpack/plugins/next-font-manifest-plugin.d.ts","../node_modules/next/dist/server/route-definitions/locale-route-definition.d.ts","../node_modules/next/dist/server/route-definitions/pages-route-definition.d.ts","../node_modules/next/dist/shared/lib/mitt.d.ts","../node_modules/next/dist/client/with-router.d.ts","../node_modules/next/dist/client/router.d.ts","../node_modules/next/dist/client/route-loader.d.ts","../node_modules/next/dist/client/page-loader.d.ts","../node_modules/next/dist/shared/lib/router/router.d.ts","../node_modules/next/dist/shared/lib/router-context.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/loadable-context.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/loadable.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/image-config-context.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.d.ts","../node_modules/next/dist/server/route-definitions/app-page-route-definition.d.ts","../node_modules/next/dist/build/webpack/loaders/metadata/types.d.ts","../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.d.ts","../node_modules/next/dist/server/lib/app-dir-module.d.ts","../node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.d.ts","../node_modules/next/dist/server/async-storage/draft-mode-provider.d.ts","../node_modules/next/dist/server/web/spec-extension/adapters/headers.d.ts","../node_modules/next/dist/server/app-render/cache-signal.d.ts","../node_modules/next/dist/server/app-render/dynamic-rendering.d.ts","../node_modules/next/dist/server/request/fallback-params.d.ts","../node_modules/next/dist/server/app-render/work-unit-async-storage-instance.d.ts","../node_modules/next/dist/server/response-cache/index.d.ts","../node_modules/next/dist/server/lib/lazy-result.d.ts","../node_modules/next/dist/server/lib/implicit-tags.d.ts","../node_modules/next/dist/server/app-render/work-unit-async-storage.external.d.ts","../node_modules/next/dist/shared/lib/deep-readonly.d.ts","../node_modules/next/dist/shared/lib/router/utils/parse-relative-url.d.ts","../node_modules/next/dist/server/app-render/app-render.d.ts","../node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/amp-context.shared-runtime.d.ts","../node_modules/next/dist/server/route-modules/app-page/vendored/contexts/entrypoints.d.ts","../node_modules/next/dist/server/route-modules/app-page/module.compiled.d.ts","../node_modules/next/dist/client/components/error-boundary.d.ts","../node_modules/next/dist/client/components/layout-router.d.ts","../node_modules/next/dist/client/components/render-from-template-context.d.ts","../node_modules/next/dist/server/app-render/action-async-storage-instance.d.ts","../node_modules/next/dist/server/app-render/action-async-storage.external.d.ts","../node_modules/next/dist/client/components/client-page.d.ts","../node_modules/next/dist/client/components/client-segment.d.ts","../node_modules/next/dist/server/request/search-params.d.ts","../node_modules/next/dist/client/components/hooks-server-context.d.ts","../node_modules/next/dist/client/components/http-access-fallback/error-boundary.d.ts","../node_modules/next/dist/lib/metadata/types/alternative-urls-types.d.ts","../node_modules/next/dist/lib/metadata/types/extra-types.d.ts","../node_modules/next/dist/lib/metadata/types/metadata-types.d.ts","../node_modules/next/dist/lib/metadata/types/manifest-types.d.ts","../node_modules/next/dist/lib/metadata/types/opengraph-types.d.ts","../node_modules/next/dist/lib/metadata/types/twitter-types.d.ts","../node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts","../node_modules/next/dist/lib/metadata/types/resolvers.d.ts","../node_modules/next/dist/lib/metadata/types/icons.d.ts","../node_modules/next/dist/lib/metadata/resolve-metadata.d.ts","../node_modules/next/dist/lib/metadata/metadata.d.ts","../node_modules/next/dist/lib/framework/boundary-components.d.ts","../node_modules/next/dist/server/app-render/rsc/preloads.d.ts","../node_modules/next/dist/server/app-render/rsc/postpone.d.ts","../node_modules/next/dist/server/app-render/rsc/taint.d.ts","../node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.d.ts","../node_modules/next/dist/server/app-render/collect-segment-data.d.ts","../node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.d.ts","../node_modules/next/dist/server/app-render/entry-base.d.ts","../node_modules/next/dist/build/templates/app-page.d.ts","../node_modules/@types/react/jsx-dev-runtime.d.ts","../node_modules/@types/react/compiler-runtime.d.ts","../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/entrypoints.d.ts","../node_modules/@types/react-dom/client.d.ts","../node_modules/@types/react-dom/static.d.ts","../node_modules/@types/react-dom/server.d.ts","../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/entrypoints.d.ts","../node_modules/next/dist/server/route-modules/app-page/module.d.ts","../node_modules/next/dist/server/web/adapter.d.ts","../node_modules/next/dist/server/use-cache/cache-life.d.ts","../node_modules/next/dist/server/app-render/types.d.ts","../node_modules/next/dist/client/components/router-reducer/router-reducer-types.d.ts","../node_modules/next/dist/client/flight-data-helpers.d.ts","../node_modules/next/dist/client/components/router-reducer/fetch-server-response.d.ts","../node_modules/next/dist/shared/lib/app-router-context.shared-runtime.d.ts","../node_modules/next/dist/server/route-modules/pages/vendored/contexts/entrypoints.d.ts","../node_modules/next/dist/server/route-modules/pages/module.compiled.d.ts","../node_modules/next/dist/build/templates/pages.d.ts","../node_modules/next/dist/server/route-modules/pages/module.d.ts","../node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.d.ts","../node_modules/next/dist/server/render.d.ts","../node_modules/next/dist/server/route-definitions/pages-api-route-definition.d.ts","../node_modules/next/dist/server/route-matches/pages-api-route-match.d.ts","../node_modules/next/dist/server/route-matchers/route-matcher.d.ts","../node_modules/next/dist/server/route-matcher-providers/route-matcher-provider.d.ts","../node_modules/next/dist/server/route-matcher-managers/route-matcher-manager.d.ts","../node_modules/next/dist/server/normalizers/normalizer.d.ts","../node_modules/next/dist/server/normalizers/locale-route-normalizer.d.ts","../node_modules/next/dist/server/normalizers/request/pathname-normalizer.d.ts","../node_modules/next/dist/server/normalizers/request/suffix.d.ts","../node_modules/next/dist/server/normalizers/request/rsc.d.ts","../node_modules/next/dist/server/normalizers/request/prefetch-rsc.d.ts","../node_modules/next/dist/server/normalizers/request/next-data.d.ts","../node_modules/next/dist/server/normalizers/request/segment-prefix-rsc.d.ts","../node_modules/next/dist/build/static-paths/types.d.ts","../node_modules/next/dist/server/base-server.d.ts","../node_modules/next/dist/server/lib/async-callback-set.d.ts","../node_modules/next/dist/shared/lib/router/utils/route-regex.d.ts","../node_modules/next/dist/shared/lib/router/utils/route-matcher.d.ts","../node_modules/sharp/lib/index.d.ts","../node_modules/next/dist/server/image-optimizer.d.ts","../node_modules/next/dist/server/next-server.d.ts","../node_modules/next/dist/server/lib/types.d.ts","../node_modules/next/dist/server/lib/lru-cache.d.ts","../node_modules/next/dist/server/lib/dev-bundler-service.d.ts","../node_modules/next/dist/server/dev/static-paths-worker.d.ts","../node_modules/next/dist/server/dev/next-dev-server.d.ts","../node_modules/next/dist/server/next.d.ts","../node_modules/next/dist/server/lib/render-server.d.ts","../node_modules/next/dist/server/lib/router-server.d.ts","../node_modules/next/dist/shared/lib/router/utils/path-match.d.ts","../node_modules/next/dist/server/lib/router-utils/filesystem.d.ts","../node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.d.ts","../node_modules/next/dist/server/lib/router-utils/router-server-context.d.ts","../node_modules/next/dist/server/route-modules/route-module.d.ts","../node_modules/next/dist/server/load-components.d.ts","../node_modules/next/dist/server/route-definitions/app-route-route-definition.d.ts","../node_modules/next/dist/server/async-storage/work-store.d.ts","../node_modules/next/dist/server/web/http.d.ts","../node_modules/next/dist/server/route-modules/app-route/shared-modules.d.ts","../node_modules/next/dist/client/components/redirect-status-code.d.ts","../node_modules/next/dist/client/components/redirect-error.d.ts","../node_modules/next/dist/build/templates/app-route.d.ts","../node_modules/next/dist/server/route-modules/app-route/module.d.ts","../node_modules/next/dist/server/route-modules/app-route/module.compiled.d.ts","../node_modules/next/dist/build/segment-config/app/app-segments.d.ts","../node_modules/next/dist/build/utils.d.ts","../node_modules/next/dist/build/turborepo-access-trace/types.d.ts","../node_modules/next/dist/build/turborepo-access-trace/result.d.ts","../node_modules/next/dist/build/turborepo-access-trace/helpers.d.ts","../node_modules/next/dist/build/turborepo-access-trace/index.d.ts","../node_modules/next/dist/export/routes/types.d.ts","../node_modules/next/dist/export/types.d.ts","../node_modules/next/dist/export/worker.d.ts","../node_modules/next/dist/build/worker.d.ts","../node_modules/next/dist/build/index.d.ts","../node_modules/next/dist/server/lib/incremental-cache/index.d.ts","../node_modules/next/dist/server/after/after.d.ts","../node_modules/next/dist/server/after/after-context.d.ts","../node_modules/next/dist/server/app-render/work-async-storage-instance.d.ts","../node_modules/next/dist/server/app-render/work-async-storage.external.d.ts","../node_modules/next/dist/server/request/params.d.ts","../node_modules/next/dist/server/route-matches/route-match.d.ts","../node_modules/next/dist/server/request-meta.d.ts","../node_modules/next/dist/cli/next-test.d.ts","../node_modules/next/dist/server/config-shared.d.ts","../node_modules/next/dist/server/base-http/index.d.ts","../node_modules/next/dist/server/api-utils/index.d.ts","../node_modules/next/dist/types.d.ts","../node_modules/next/dist/shared/lib/html-context.shared-runtime.d.ts","../node_modules/next/dist/shared/lib/utils.d.ts","../node_modules/next/dist/pages/_app.d.ts","../node_modules/next/app.d.ts","../node_modules/next/dist/server/web/spec-extension/unstable-cache.d.ts","../node_modules/next/dist/server/web/spec-extension/revalidate.d.ts","../node_modules/next/dist/server/web/spec-extension/unstable-no-store.d.ts","../node_modules/next/dist/server/use-cache/cache-tag.d.ts","../node_modules/next/cache.d.ts","../node_modules/next/dist/shared/lib/runtime-config.external.d.ts","../node_modules/next/config.d.ts","../node_modules/next/dist/pages/_document.d.ts","../node_modules/next/document.d.ts","../node_modules/next/dist/shared/lib/dynamic.d.ts","../node_modules/next/dynamic.d.ts","../node_modules/next/dist/pages/_error.d.ts","../node_modules/next/error.d.ts","../node_modules/next/dist/shared/lib/head.d.ts","../node_modules/next/head.d.ts","../node_modules/next/dist/server/request/cookies.d.ts","../node_modules/next/dist/server/request/headers.d.ts","../node_modules/next/dist/server/request/draft-mode.d.ts","../node_modules/next/headers.d.ts","../node_modules/next/dist/shared/lib/get-img-props.d.ts","../node_modules/next/dist/client/image-component.d.ts","../node_modules/next/dist/shared/lib/image-external.d.ts","../node_modules/next/image.d.ts","../node_modules/next/dist/client/link.d.ts","../node_modules/next/link.d.ts","../node_modules/next/dist/client/components/redirect.d.ts","../node_modules/next/dist/client/components/not-found.d.ts","../node_modules/next/dist/client/components/forbidden.d.ts","../node_modules/next/dist/client/components/unauthorized.d.ts","../node_modules/next/dist/client/components/unstable-rethrow.server.d.ts","../node_modules/next/dist/client/components/unstable-rethrow.d.ts","../node_modules/next/dist/client/components/navigation.react-server.d.ts","../node_modules/next/dist/client/components/unrecognized-action-error.d.ts","../node_modules/next/dist/client/components/navigation.d.ts","../node_modules/next/navigation.d.ts","../node_modules/next/router.d.ts","../node_modules/next/dist/client/script.d.ts","../node_modules/next/script.d.ts","../node_modules/next/dist/server/web/spec-extension/user-agent.d.ts","../node_modules/next/dist/compiled/@edge-runtime/primitives/url.d.ts","../node_modules/next/dist/server/web/spec-extension/image-response.d.ts","../node_modules/next/dist/compiled/@vercel/og/satori/index.d.ts","../node_modules/next/dist/compiled/@vercel/og/emoji/index.d.ts","../node_modules/next/dist/compiled/@vercel/og/types.d.ts","../node_modules/next/dist/server/after/index.d.ts","../node_modules/next/dist/server/request/root-params.d.ts","../node_modules/next/dist/server/request/connection.d.ts","../node_modules/next/server.d.ts","../node_modules/next/types/global.d.ts","../node_modules/next/types/compiled.d.ts","../node_modules/next/types.d.ts","../node_modules/next/index.d.ts","../node_modules/next/image-types/global.d.ts","./next-env.d.ts","./src/types/course.types.ts","./src/data/courses.ts","./src/data/course-progress.ts","./src/lib/course-progress.ts","./src/hooks/useCourseProgress.ts","./src/lib/api.ts","./src/lib/constants.ts","./src/services/course.service.ts","./src/components/layout/HeaderLearnerIndicator.tsx","./src/components/layout/Header.tsx","./src/components/layout/Footer.tsx","./src/app/layout.tsx","./src/app/not-found.tsx","./src/components/home/HomeHeroSection.tsx","./src/components/CourseList.tsx","./src/app/page.tsx","./src/app/about/page.tsx","./src/app/contact/page.tsx","./src/app/courses/page.tsx","./src/components/course/CourseDetailClient.tsx","./src/app/courses/[slug]/page.tsx","./src/components/course/MaterialViewer.tsx","./src/components/course/LessonProgressPanel.tsx","./src/components/course/LessonDetailClient.tsx","./src/app/courses/[slug]/lessons/[lessonId]/page.tsx","./src/components/dashboard/DashboardClient.tsx","./src/app/dashboard/page.tsx","./src/app/login/page.tsx","./src/app/register/page.tsx","./src/components/course/CourseCard.tsx","./src/components/home/HeroSection.tsx","./src/components/ui/Button.tsx","./.next/types/cache-life.d.ts","./.next/types/validator.ts","./.next/types/app/layout.ts","./.next/types/app/page.ts","./.next/types/app/about/page.ts","./.next/types/app/contact/page.ts","./.next/types/app/courses/page.ts","./.next/types/app/courses/[slug]/page.ts","./.next/types/app/courses/[slug]/lessons/[lessonId]/page.ts","./.next/types/app/login/page.ts","./.next/types/app/register/page.ts","../node_modules/@types/estree/index.d.ts","../node_modules/@types/json-schema/index.d.ts","../node_modules/@types/json5/index.d.ts"],"fileIdsList":[[100,148,165,166,341,518],[100,148,165,166,341,519],[100,148,165,166,341,526],[100,148,165,166,341,522],[100,148,165,166,341,520],[100,148,165,166,341,513],[100,148,165,166,341,529],[100,148,165,166,341,517],[100,148,165,166,341,530],[100,148,165,166,448,449,450,451],[100,148,165,166],[83,100,148,165,166,498,513,517,518,519,520,522,526,528,529,530],[83,100,148,165,166,499,500],[100,148,165,166,482,509,525],[100,148,165,166,482,503,504,521],[100,148,165,166,503,516],[100,148,165,166,504,527],[86,100,148,165,166,511,512],[100,148,165,166,503,515,516],[86,100,148,165,166,482,502,503,505],[100,148,165,166,502,506],[86,100,148,165,166,502,506,524],[86,100,148,165,166,482,502,506,523],[100,148,165,166,502],[86,100,148,165,166,502,503,505],[86,100,148,165,166,503,505],[100,148,165,166,510],[86,100,148,165,166],[100,148,165,166,502,503],[86,100,148,165,166,502,505],[100,148,165,166,502,504],[100,148,165,166,503,504],[100,145,146,148,165,166],[100,147,148,165,166],[148,165,166],[100,148,153,165,166,183],[100,148,149,154,159,165,166,168,180,191],[100,148,149,150,159,165,166,168],[95,96,97,100,148,165,166],[100,148,151,165,166,192],[100,148,152,153,160,165,166,169],[100,148,153,165,166,180,188],[100,148,154,156,159,165,166,168],[100,147,148,155,165,166],[100,148,156,157,165,166],[100,148,158,159,165,166],[100,147,148,159,165,166],[100,148,159,160,161,165,166,180,191],[100,148,159,160,161,165,166,175,180,183],[100,141,148,156,159,162,165,166,168,180,191],[100,148,159,160,162,163,165,166,168,180,188,191],[100,148,162,164,165,166,180,188,191],[98,99,100,101,102,103,104,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197],[100,148,159,165,166],[100,148,165,166,167,191],[100,148,156,159,165,166,168,180],[100,148,165,166,169],[100,148,165,166,170],[100,147,148,165,166,171],[100,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197],[100,148,165,166,173],[100,148,165,166,174],[100,148,159,165,166,175,176],[100,148,165,166,175,177,192,194],[100,148,160,165,166],[100,148,159,165,166,180,181,183],[100,148,165,166,182,183],[100,148,165,166,180,181],[100,148,165,166,183],[100,148,165,166,184],[100,145,148,165,166,180,185,191],[100,148,159,165,166,186,187],[100,148,165,166,186,187],[100,148,153,165,166,168,180,188],[100,148,165,166,189],[100,148,165,166,168,190],[100,148,162,165,166,174,191],[100,148,153,165,166,192],[100,148,165,166,180,193],[100,148,165,166,167,194],[100,148,165,166,195],[100,141,148,165,166],[100,141,148,159,161,165,166,171,180,183,191,193,194,196],[100,148,165,166,180,197],[86,90,100,148,165,166,199,200,201,203,443,491],[86,90,100,148,165,166,199,200,201,202,358,443,491],[86,90,100,148,165,166,199,200,202,203,443,491],[86,100,148,165,166,203,358,359],[86,100,148,165,166,203,358],[86,90,100,148,165,166,200,201,202,203,443,491],[86,90,100,148,165,166,199,201,202,203,443,491],[84,85,100,148,165,166],[92,100,148,165,166],[100,148,165,166,446],[100,148,165,166,453],[100,148,165,166,207,221,222,223,225,440],[100,148,165,166,207,246,248,250,251,254,440,442],[100,148,165,166,207,211,213,214,215,216,217,429,440,442],[100,148,165,166,440],[100,148,165,166,222,324,410,419,436],[100,148,165,166,207],[100,148,165,166,204,436],[100,148,165,166,258],[100,148,165,166,257,440,442],[100,148,162,165,166,306,324,353,497],[100,148,162,165,166,317,333,419,435],[100,148,162,165,166,371],[100,148,165,166,423],[100,148,165,166,422,423,424],[100,148,165,166,422],[94,100,148,162,165,166,204,207,211,214,218,219,220,222,226,234,235,364,389,420,440,443],[100,148,165,166,207,224,242,246,247,252,253,440,497],[100,148,165,166,224,497],[100,148,165,166,235,242,304,440,497],[100,148,165,166,497],[100,148,165,166,207,224,225,497],[100,148,165,166,249,497],[100,148,165,166,218,421,428],[100,148,165,166,174,266,436],[100,148,165,166,266,436],[86,100,148,165,166,266],[86,100,148,165,166,325],[100,148,165,166,321,369,436,479,480],[100,148,165,166,416,473,474,475,476,478],[100,148,165,166,415],[100,148,165,166,415,416],[100,148,165,166,215,365,366,367],[100,148,165,166,365,368,369],[100,148,165,166,477],[100,148,165,166,365,369],[86,100,148,165,166,208,467],[86,100,148,165,166,191],[86,100,148,165,166,224,294],[86,100,148,165,166,224],[100,148,165,166,292,296],[86,100,148,165,166,293,445],[86,90,100,148,162,165,166,198,199,200,201,202,203,443,489,490],[100,148,162,165,166],[100,148,162,165,166,211,273,365,375,390,410,425,426,440,441,497],[100,148,165,166,234,427],[100,148,165,166,443],[100,148,165,166,206],[86,100,148,165,166,306,320,332,342,344,435],[100,148,165,166,174,306,320,341,342,343,435,496],[100,148,165,166,335,336,337,338,339,340],[100,148,165,166,337],[100,148,165,166,341],[100,148,165,166,264,265,266,268],[86,100,148,165,166,259,260,261,267],[100,148,165,166,264,267],[100,148,165,166,262],[100,148,165,166,263],[86,100,148,165,166,266,293,445],[86,100,148,165,166,266,444,445],[86,100,148,165,166,266,445],[100,148,165,166,390,432],[100,148,165,166,432],[100,148,162,165,166,441,445],[100,148,165,166,329],[100,147,148,165,166,328],[100,148,165,166,236,274,312,314,316,317,318,319,362,365,435,438,441],[100,148,165,166,236,350,365,369],[100,148,165,166,317,435],[86,100,148,165,166,317,326,327,329,330,331,332,333,334,345,346,347,348,349,351,352,435,436,497],[100,148,165,166,311],[100,148,162,165,166,174,236,237,273,288,318,362,363,364,369,390,410,431,440,441,442,443,497],[100,148,165,166,435],[100,147,148,165,166,222,315,318,364,431,433,434,441],[100,148,165,166,317],[100,147,148,165,166,273,278,307,308,309,310,311,312,313,314,316,435,436],[100,148,162,165,166,278,279,307,441,442],[100,148,165,166,222,364,365,390,431,435,441],[100,148,162,165,166,440,442],[100,148,162,165,166,180,438,441,442],[100,148,162,165,166,174,191,204,211,224,236,237,239,274,275,280,285,288,314,318,365,375,377,380,382,385,386,387,388,389,410,430,431,436,438,440,441,442],[100,148,162,165,166,180],[100,148,165,166,207,208,209,211,216,219,224,242,430,438,439,443,445,497],[100,148,162,165,166,180,191,254,256,258,259,260,261,268,497],[100,148,165,166,174,191,204,246,256,284,285,286,287,314,365,380,389,390,396,399,400,410,431,436,438],[100,148,165,166,218,219,234,364,389,431,440],[100,148,162,165,166,191,208,211,314,394,438,440],[100,148,165,166,305],[100,148,162,165,166,397,398,407],[100,148,165,166,438,440],[100,148,165,166,312,315],[100,148,165,166,314,318,430,445],[100,148,162,165,166,174,240,246,287,380,390,396,399,402,438],[100,148,162,165,166,218,234,246,403],[100,148,165,166,207,239,405,430,440],[100,148,162,165,166,191,440],[100,148,162,165,166,224,238,239,240,251,269,404,406,430,440],[94,100,148,165,166,236,318,409,443,445],[100,148,162,165,166,174,191,211,218,226,234,237,274,280,284,285,286,287,288,314,365,377,390,391,393,395,410,430,431,436,437,438,445],[100,148,162,165,166,180,218,396,401,407,438],[100,148,165,166,229,230,231,232,233],[100,148,165,166,275,381],[100,148,165,166,383],[100,148,165,166,381],[100,148,165,166,383,384],[100,148,162,165,166,211,214,215,273,441],[100,148,162,165,166,174,206,208,236,274,288,318,373,374,410,438,442,443,445],[100,148,162,165,166,174,191,210,215,314,374,437,441],[100,148,165,166,307],[100,148,165,166,308],[100,148,165,166,309],[100,148,165,166,436],[100,148,165,166,255,271],[100,148,162,165,166,211,255,274],[100,148,165,166,270,271],[100,148,165,166,272],[100,148,165,166,255,256],[100,148,165,166,255,289],[100,148,165,166,255],[100,148,165,166,275,379,437],[100,148,165,166,378],[100,148,165,166,256,436,437],[100,148,165,166,376,437],[100,148,165,166,256,436],[100,148,165,166,362],[100,148,165,166,211,216,274,303,306,312,314,318,320,323,354,357,361,365,409,430,438,441],[100,148,165,166,297,300,301,302,321,322,369],[86,100,148,165,166,201,203,266,355,356],[86,100,148,165,166,201,203,266,355,356,360],[100,148,165,166,418],[100,148,165,166,222,279,317,318,329,333,365,409,411,412,413,414,416,417,420,430,435,440],[100,148,165,166,369],[100,148,165,166,373],[100,148,162,165,166,274,290,370,372,375,409,438,443,445],[100,148,165,166,297,298,299,300,301,302,321,322,369,444],[94,100,148,162,165,166,174,191,237,255,256,288,314,318,407,408,410,430,431,440,441,443],[100,148,165,166,279,281,284,431],[100,148,162,165,166,275,440],[100,148,165,166,278,317],[100,148,165,166,277],[100,148,165,166,279,280],[100,148,165,166,276,278,440],[100,148,162,165,166,210,279,281,282,283,440,441],[86,100,148,165,166,365,366,368],[100,148,165,166,241],[86,100,148,165,166,208],[86,100,148,165,166,436],[86,94,100,148,165,166,288,318,443,445],[100,148,165,166,208,467,468],[86,100,148,165,166,296],[86,100,148,165,166,174,191,206,253,291,293,295,445],[100,148,165,166,224,436,441],[100,148,165,166,392,436],[100,148,165,166,365],[86,100,148,160,162,165,166,174,206,242,248,296,443,444],[86,100,148,165,166,199,200,201,202,203,443,491],[86,87,88,89,90,100,148,165,166],[100,148,153,165,166],[100,148,165,166,243,244,245],[100,148,165,166,243],[86,90,100,148,162,164,165,166,174,198,199,200,201,202,203,204,206,237,341,402,440,442,445,491],[100,148,165,166,455],[100,148,165,166,457],[100,148,165,166,459],[100,148,165,166,461],[100,148,165,166,463,464,465],[100,148,165,166,469],[91,93,100,148,165,166,447,452,454,456,458,460,462,466,470,472,482,483,485,495,496,497,498],[100,148,165,166,471],[100,148,165,166,481],[100,148,165,166,293],[100,148,165,166,484],[100,147,148,165,166,279,281,282,284,332,436,486,487,488,491,492,493,494],[100,148,165,166,198],[100,148,165,166,180,198],[100,113,117,148,165,166,191],[100,113,148,165,166,180,191],[100,108,148,165,166],[100,110,113,148,165,166,188,191],[100,148,165,166,168,188],[100,108,148,165,166,198],[100,110,113,148,165,166,168,191],[100,105,106,109,112,148,159,165,166,180,191],[100,113,120,148,165,166],[100,105,111,148,165,166],[100,113,134,135,148,165,166],[100,109,113,148,165,166,183,191,198],[100,134,148,165,166,198],[100,107,108,148,165,166,198],[100,113,148,165,166],[100,107,108,109,110,111,112,113,114,115,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,135,136,137,138,139,140,148,165,166],[100,113,128,148,165,166],[100,113,120,121,148,165,166],[100,111,113,121,122,148,165,166],[100,112,148,165,166],[100,105,108,113,148,165,166],[100,113,117,121,122,148,165,166],[100,117,148,165,166],[100,111,113,116,148,165,166,191],[100,105,110,113,120,148,165,166],[100,148,165,166,180],[100,108,113,134,148,165,166,196,198]],"fileInfos":[{"version":"c430d44666289dae81f30fa7b2edebf186ecc91a2d4c71266ea6ae76388792e1","affectsGlobalScope":true,"impliedFormat":1},{"version":"45b7ab580deca34ae9729e97c13cfd999df04416a79116c3bfb483804f85ded4","impliedFormat":1},{"version":"3facaf05f0c5fc569c5649dd359892c98a85557e3e0c847964caeb67076f4d75","impliedFormat":1},{"version":"e44bb8bbac7f10ecc786703fe0a6a4b952189f908707980ba8f3c8975a760962","impliedFormat":1},{"version":"5e1c4c362065a6b95ff952c0eab010f04dcd2c3494e813b493ecfd4fcb9fc0d8","impliedFormat":1},{"version":"68d73b4a11549f9c0b7d352d10e91e5dca8faa3322bfb77b661839c42b1ddec7","impliedFormat":1},{"version":"5efce4fc3c29ea84e8928f97adec086e3dc876365e0982cc8479a07954a3efd4","impliedFormat":1},{"version":"feecb1be483ed332fad555aff858affd90a48ab19ba7272ee084704eb7167569","impliedFormat":1},{"version":"ee7bad0c15b58988daa84371e0b89d313b762ab83cb5b31b8a2d1162e8eb41c2","impliedFormat":1},{"version":"27bdc30a0e32783366a5abeda841bc22757c1797de8681bbe81fbc735eeb1c10","impliedFormat":1},{"version":"8fd575e12870e9944c7e1d62e1f5a73fcf23dd8d3a321f2a2c74c20d022283fe","impliedFormat":1},{"version":"2ab096661c711e4a81cc464fa1e6feb929a54f5340b46b0a07ac6bbf857471f0","impliedFormat":1},{"version":"080941d9f9ff9307f7e27a83bcd888b7c8270716c39af943532438932ec1d0b9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2e80ee7a49e8ac312cc11b77f1475804bee36b3b2bc896bead8b6e1266befb43","affectsGlobalScope":true,"impliedFormat":1},{"version":"c57796738e7f83dbc4b8e65132f11a377649c00dd3eee333f672b8f0a6bea671","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc2df20b1bcdc8c2d34af4926e2c3ab15ffe1160a63e58b7e09833f616efff44","affectsGlobalScope":true,"impliedFormat":1},{"version":"515d0b7b9bea2e31ea4ec968e9edd2c39d3eebf4a2d5cbd04e88639819ae3b71","affectsGlobalScope":true,"impliedFormat":1},{"version":"0559b1f683ac7505ae451f9a96ce4c3c92bdc71411651ca6ddb0e88baaaad6a3","affectsGlobalScope":true,"impliedFormat":1},{"version":"0dc1e7ceda9b8b9b455c3a2d67b0412feab00bd2f66656cd8850e8831b08b537","affectsGlobalScope":true,"impliedFormat":1},{"version":"ce691fb9e5c64efb9547083e4a34091bcbe5bdb41027e310ebba8f7d96a98671","affectsGlobalScope":true,"impliedFormat":1},{"version":"8d697a2a929a5fcb38b7a65594020fcef05ec1630804a33748829c5ff53640d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ff2a353abf8a80ee399af572debb8faab2d33ad38c4b4474cff7f26e7653b8d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fb0f136d372979348d59b3f5020b4cdb81b5504192b1cacff5d1fbba29378aa1","affectsGlobalScope":true,"impliedFormat":1},{"version":"d15bea3d62cbbdb9797079416b8ac375ae99162a7fba5de2c6c505446486ac0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"68d18b664c9d32a7336a70235958b8997ebc1c3b8505f4f1ae2b7e7753b87618","affectsGlobalScope":true,"impliedFormat":1},{"version":"eb3d66c8327153d8fa7dd03f9c58d351107fe824c79e9b56b462935176cdf12a","affectsGlobalScope":true,"impliedFormat":1},{"version":"38f0219c9e23c915ef9790ab1d680440d95419ad264816fa15009a8851e79119","affectsGlobalScope":true,"impliedFormat":1},{"version":"69ab18c3b76cd9b1be3d188eaf8bba06112ebbe2f47f6c322b5105a6fbc45a2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"a680117f487a4d2f30ea46f1b4b7f58bef1480456e18ba53ee85c2746eeca012","affectsGlobalScope":true,"impliedFormat":1},{"version":"2f11ff796926e0832f9ae148008138ad583bd181899ab7dd768a2666700b1893","affectsGlobalScope":true,"impliedFormat":1},{"version":"4de680d5bb41c17f7f68e0419412ca23c98d5749dcaaea1896172f06435891fc","affectsGlobalScope":true,"impliedFormat":1},{"version":"954296b30da6d508a104a3a0b5d96b76495c709785c1d11610908e63481ee667","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac9538681b19688c8eae65811b329d3744af679e0bdfa5d842d0e32524c73e1c","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a969edff4bd52585473d24995c5ef223f6652d6ef46193309b3921d65dd4376","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e9fbd7030c440b33d021da145d3232984c8bb7916f277e8ffd3dc2e3eae2bdb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811ec78f7fefcabbda4bfa93b3eb67d9ae166ef95f9bff989d964061cbf81a0c","affectsGlobalScope":true,"impliedFormat":1},{"version":"717937616a17072082152a2ef351cb51f98802fb4b2fdabd32399843875974ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"d7e7d9b7b50e5f22c915b525acc5a49a7a6584cf8f62d0569e557c5cfc4b2ac2","affectsGlobalScope":true,"impliedFormat":1},{"version":"71c37f4c9543f31dfced6c7840e068c5a5aacb7b89111a4364b1d5276b852557","affectsGlobalScope":true,"impliedFormat":1},{"version":"576711e016cf4f1804676043e6a0a5414252560eb57de9faceee34d79798c850","affectsGlobalScope":true,"impliedFormat":1},{"version":"89c1b1281ba7b8a96efc676b11b264de7a8374c5ea1e6617f11880a13fc56dc6","affectsGlobalScope":true,"impliedFormat":1},{"version":"74f7fa2d027d5b33eb0471c8e82a6c87216223181ec31247c357a3e8e2fddc5b","affectsGlobalScope":true,"impliedFormat":1},{"version":"d6d7ae4d1f1f3772e2a3cde568ed08991a8ae34a080ff1151af28b7f798e22ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"063600664504610fe3e99b717a1223f8b1900087fab0b4cad1496a114744f8df","affectsGlobalScope":true,"impliedFormat":1},{"version":"934019d7e3c81950f9a8426d093458b65d5aff2c7c1511233c0fd5b941e608ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"52ada8e0b6e0482b728070b7639ee42e83a9b1c22d205992756fe020fd9f4a47","affectsGlobalScope":true,"impliedFormat":1},{"version":"3bdefe1bfd4d6dee0e26f928f93ccc128f1b64d5d501ff4a8cf3c6371200e5e6","affectsGlobalScope":true,"impliedFormat":1},{"version":"59fb2c069260b4ba00b5643b907ef5d5341b167e7d1dbf58dfd895658bda2867","affectsGlobalScope":true,"impliedFormat":1},{"version":"639e512c0dfc3fad96a84caad71b8834d66329a1f28dc95e3946c9b58176c73a","affectsGlobalScope":true,"impliedFormat":1},{"version":"368af93f74c9c932edd84c58883e736c9e3d53cec1fe24c0b0ff451f529ceab1","affectsGlobalScope":true,"impliedFormat":1},{"version":"af3dd424cf267428f30ccfc376f47a2c0114546b55c44d8c0f1d57d841e28d74","affectsGlobalScope":true,"impliedFormat":1},{"version":"995c005ab91a498455ea8dfb63aa9f83fa2ea793c3d8aa344be4a1678d06d399","affectsGlobalScope":true,"impliedFormat":1},{"version":"959d36cddf5e7d572a65045b876f2956c973a586da58e5d26cde519184fd9b8a","affectsGlobalScope":true,"impliedFormat":1},{"version":"965f36eae237dd74e6cca203a43e9ca801ce38824ead814728a2807b1910117d","affectsGlobalScope":true,"impliedFormat":1},{"version":"3925a6c820dcb1a06506c90b1577db1fdbf7705d65b62b99dce4be75c637e26b","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a3d63ef2b853447ec4f749d3f368ce642264246e02911fcb1590d8c161b8005","affectsGlobalScope":true,"impliedFormat":1},{"version":"8cdf8847677ac7d20486e54dd3fcf09eda95812ac8ace44b4418da1bbbab6eb8","affectsGlobalScope":true,"impliedFormat":1},{"version":"8444af78980e3b20b49324f4a16ba35024fef3ee069a0eb67616ea6ca821c47a","affectsGlobalScope":true,"impliedFormat":1},{"version":"3287d9d085fbd618c3971944b65b4be57859f5415f495b33a6adc994edd2f004","affectsGlobalScope":true,"impliedFormat":1},{"version":"b4b67b1a91182421f5df999988c690f14d813b9850b40acd06ed44691f6727ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"df83c2a6c73228b625b0beb6669c7ee2a09c914637e2d35170723ad49c0f5cd4","affectsGlobalScope":true,"impliedFormat":1},{"version":"436aaf437562f276ec2ddbee2f2cdedac7664c1e4c1d2c36839ddd582eeb3d0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e3c06ea092138bf9fa5e874a1fdbc9d54805d074bee1de31b99a11e2fec239d","affectsGlobalScope":true,"impliedFormat":1},{"version":"87dc0f382502f5bbce5129bdc0aea21e19a3abbc19259e0b43ae038a9fc4e326","affectsGlobalScope":true,"impliedFormat":1},{"version":"b1cb28af0c891c8c96b2d6b7be76bd394fddcfdb4709a20ba05a7c1605eea0f9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2fef54945a13095fdb9b84f705f2b5994597640c46afeb2ce78352fab4cb3279","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac77cb3e8c6d3565793eb90a8373ee8033146315a3dbead3bde8db5eaf5e5ec6","affectsGlobalScope":true,"impliedFormat":1},{"version":"56e4ed5aab5f5920980066a9409bfaf53e6d21d3f8d020c17e4de584d29600ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ece9f17b3866cc077099c73f4983bddbcb1dc7ddb943227f1ec070f529dedd1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a6282c8827e4b9a95f4bf4f5c205673ada31b982f50572d27103df8ceb8013c","affectsGlobalScope":true,"impliedFormat":1},{"version":"1c9319a09485199c1f7b0498f2988d6d2249793ef67edda49d1e584746be9032","affectsGlobalScope":true,"impliedFormat":1},{"version":"e3a2a0cee0f03ffdde24d89660eba2685bfbdeae955a6c67e8c4c9fd28928eeb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811c71eee4aa0ac5f7adf713323a5c41b0cf6c4e17367a34fbce379e12bbf0a4","affectsGlobalScope":true,"impliedFormat":1},{"version":"51ad4c928303041605b4d7ae32e0c1ee387d43a24cd6f1ebf4a2699e1076d4fa","affectsGlobalScope":true,"impliedFormat":1},{"version":"60037901da1a425516449b9a20073aa03386cce92f7a1fd902d7602be3a7c2e9","affectsGlobalScope":true,"impliedFormat":1},{"version":"d4b1d2c51d058fc21ec2629fff7a76249dec2e36e12960ea056e3ef89174080f","affectsGlobalScope":true,"impliedFormat":1},{"version":"22adec94ef7047a6c9d1af3cb96be87a335908bf9ef386ae9fd50eeb37f44c47","affectsGlobalScope":true,"impliedFormat":1},{"version":"196cb558a13d4533a5163286f30b0509ce0210e4b316c56c38d4c0fd2fb38405","affectsGlobalScope":true,"impliedFormat":1},{"version":"73f78680d4c08509933daf80947902f6ff41b6230f94dd002ae372620adb0f60","affectsGlobalScope":true,"impliedFormat":1},{"version":"c5239f5c01bcfa9cd32f37c496cf19c61d69d37e48be9de612b541aac915805b","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e7f8264d0fb4c5339605a15daadb037bf238c10b654bb3eee14208f860a32ea","affectsGlobalScope":true,"impliedFormat":1},{"version":"782dec38049b92d4e85c1585fbea5474a219c6984a35b004963b00beb1aab538","affectsGlobalScope":true,"impliedFormat":1},{"version":"1e084a231897ce81f9cc7822d49c1d3e5ac207f211b7fa44fe65dd989b25b008","affectsGlobalScope":true},{"version":"7e29f41b158de217f94cb9676bf9cbd0cd9b5a46e1985141ed36e075c52bf6ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac51dd7d31333793807a6abaa5ae168512b6131bd41d9c5b98477fc3b7800f9f","impliedFormat":1},{"version":"dc0a7f107690ee5cd8afc8dbf05c4df78085471ce16bdd9881642ec738bc81fe","impliedFormat":1},{"version":"acd8fd5090ac73902278889c38336ff3f48af6ba03aa665eb34a75e7ba1dccc4","impliedFormat":1},{"version":"d6258883868fb2680d2ca96bc8b1352cab69874581493e6d52680c5ffecdb6cc","impliedFormat":1},{"version":"1b61d259de5350f8b1e5db06290d31eaebebc6baafd5f79d314b5af9256d7153","impliedFormat":1},{"version":"f258e3960f324a956fc76a3d3d9e964fff2244ff5859dcc6ce5951e5413ca826","impliedFormat":1},{"version":"643f7232d07bf75e15bd8f658f664d6183a0efaca5eb84b48201c7671a266979","impliedFormat":1},{"version":"0f6666b58e9276ac3a38fdc80993d19208442d6027ab885580d93aec76b4ef00","impliedFormat":1},{"version":"05fd364b8ef02fb1e174fbac8b825bdb1e5a36a016997c8e421f5fab0a6da0a0","impliedFormat":1},{"version":"631eff75b0e35d1b1b31081d55209abc43e16b49426546ab5a9b40bdd40b1f60","impliedFormat":1},{"version":"6c7176368037af28cb72f2392010fa1cef295d6d6744bca8cfb54985f3a18c3e","affectsGlobalScope":true,"impliedFormat":1},{"version":"ab41ef1f2cdafb8df48be20cd969d875602483859dc194e9c97c8a576892c052","affectsGlobalScope":true,"impliedFormat":1},{"version":"437e20f2ba32abaeb7985e0afe0002de1917bc74e949ba585e49feba65da6ca1","affectsGlobalScope":true,"impliedFormat":1},{"version":"21d819c173c0cf7cc3ce57c3276e77fd9a8a01d35a06ad87158781515c9a438a","impliedFormat":1},{"version":"98cffbf06d6bab333473c70a893770dbe990783904002c4f1a960447b4b53dca","affectsGlobalScope":true,"impliedFormat":1},{"version":"3af97acf03cc97de58a3a4bc91f8f616408099bc4233f6d0852e72a8ffb91ac9","affectsGlobalScope":true,"impliedFormat":1},{"version":"808069bba06b6768b62fd22429b53362e7af342da4a236ed2d2e1c89fcca3b4a","affectsGlobalScope":true,"impliedFormat":1},{"version":"1db0b7dca579049ca4193d034d835f6bfe73096c73663e5ef9a0b5779939f3d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"9798340ffb0d067d69b1ae5b32faa17ab31b82466a3fc00d8f2f2df0c8554aaa","affectsGlobalScope":true,"impliedFormat":1},{"version":"f26b11d8d8e4b8028f1c7d618b22274c892e4b0ef5b3678a8ccbad85419aef43","affectsGlobalScope":true,"impliedFormat":1},{"version":"5929864ce17fba74232584d90cb721a89b7ad277220627cc97054ba15a98ea8f","impliedFormat":1},{"version":"763fe0f42b3d79b440a9b6e51e9ba3f3f91352469c1e4b3b67bfa4ff6352f3f4","impliedFormat":1},{"version":"25c8056edf4314820382a5fdb4bb7816999acdcb929c8f75e3f39473b87e85bc","impliedFormat":1},{"version":"c464d66b20788266e5353b48dc4aa6bc0dc4a707276df1e7152ab0c9ae21fad8","impliedFormat":1},{"version":"78d0d27c130d35c60b5e5566c9f1e5be77caf39804636bc1a40133919a949f21","impliedFormat":1},{"version":"c6fd2c5a395f2432786c9cb8deb870b9b0e8ff7e22c029954fabdd692bff6195","impliedFormat":1},{"version":"1d6e127068ea8e104a912e42fc0a110e2aa5a66a356a917a163e8cf9a65e4a75","impliedFormat":1},{"version":"5ded6427296cdf3b9542de4471d2aa8d3983671d4cac0f4bf9c637208d1ced43","impliedFormat":1},{"version":"7f182617db458e98fc18dfb272d40aa2fff3a353c44a89b2c0ccb3937709bfb5","impliedFormat":1},{"version":"cadc8aced301244057c4e7e73fbcae534b0f5b12a37b150d80e5a45aa4bebcbd","impliedFormat":1},{"version":"385aab901643aa54e1c36f5ef3107913b10d1b5bb8cbcd933d4263b80a0d7f20","impliedFormat":1},{"version":"9670d44354bab9d9982eca21945686b5c24a3f893db73c0dae0fd74217a4c219","impliedFormat":1},{"version":"0b8a9268adaf4da35e7fa830c8981cfa22adbbe5b3f6f5ab91f6658899e657a7","impliedFormat":1},{"version":"11396ed8a44c02ab9798b7dca436009f866e8dae3c9c25e8c1fbc396880bf1bb","impliedFormat":1},{"version":"ba7bc87d01492633cb5a0e5da8a4a42a1c86270e7b3d2dea5d156828a84e4882","impliedFormat":1},{"version":"4893a895ea92c85345017a04ed427cbd6a1710453338df26881a6019432febdd","impliedFormat":1},{"version":"c21dc52e277bcfc75fac0436ccb75c204f9e1b3fa5e12729670910639f27343e","impliedFormat":1},{"version":"13f6f39e12b1518c6650bbb220c8985999020fe0f21d818e28f512b7771d00f9","impliedFormat":1},{"version":"9b5369969f6e7175740bf51223112ff209f94ba43ecd3bb09eefff9fd675624a","impliedFormat":1},{"version":"4fe9e626e7164748e8769bbf74b538e09607f07ed17c2f20af8d680ee49fc1da","impliedFormat":1},{"version":"24515859bc0b836719105bb6cc3d68255042a9f02a6022b3187948b204946bd2","impliedFormat":1},{"version":"ea0148f897b45a76544ae179784c95af1bd6721b8610af9ffa467a518a086a43","impliedFormat":1},{"version":"24c6a117721e606c9984335f71711877293a9651e44f59f3d21c1ea0856f9cc9","impliedFormat":1},{"version":"dd3273ead9fbde62a72949c97dbec2247ea08e0c6952e701a483d74ef92d6a17","impliedFormat":1},{"version":"405822be75ad3e4d162e07439bac80c6bcc6dbae1929e179cf467ec0b9ee4e2e","impliedFormat":1},{"version":"0db18c6e78ea846316c012478888f33c11ffadab9efd1cc8bcc12daded7a60b6","impliedFormat":1},{"version":"e61be3f894b41b7baa1fbd6a66893f2579bfad01d208b4ff61daef21493ef0a8","impliedFormat":1},{"version":"bd0532fd6556073727d28da0edfd1736417a3f9f394877b6d5ef6ad88fba1d1a","impliedFormat":1},{"version":"89167d696a849fce5ca508032aabfe901c0868f833a8625d5a9c6e861ef935d2","impliedFormat":1},{"version":"615ba88d0128ed16bf83ef8ccbb6aff05c3ee2db1cc0f89ab50a4939bfc1943f","impliedFormat":1},{"version":"a4d551dbf8746780194d550c88f26cf937caf8d56f102969a110cfaed4b06656","impliedFormat":1},{"version":"8bd86b8e8f6a6aa6c49b71e14c4ffe1211a0e97c80f08d2c8cc98838006e4b88","impliedFormat":1},{"version":"317e63deeb21ac07f3992f5b50cdca8338f10acd4fbb7257ebf56735bf52ab00","impliedFormat":1},{"version":"4732aec92b20fb28c5fe9ad99521fb59974289ed1e45aecb282616202184064f","impliedFormat":1},{"version":"2e85db9e6fd73cfa3d7f28e0ab6b55417ea18931423bd47b409a96e4a169e8e6","impliedFormat":1},{"version":"c46e079fe54c76f95c67fb89081b3e399da2c7d109e7dca8e4b58d83e332e605","impliedFormat":1},{"version":"bf67d53d168abc1298888693338cb82854bdb2e69ef83f8a0092093c2d562107","impliedFormat":1},{"version":"b52476feb4a0cbcb25e5931b930fc73cb6643fb1a5060bf8a3dda0eeae5b4b68","affectsGlobalScope":true,"impliedFormat":1},{"version":"f9501cc13ce624c72b61f12b3963e84fad210fbdf0ffbc4590e08460a3f04eba","affectsGlobalScope":true,"impliedFormat":1},{"version":"e7721c4f69f93c91360c26a0a84ee885997d748237ef78ef665b153e622b36c1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0fa06ada475b910e2106c98c68b10483dc8811d0c14a8a8dd36efb2672485b29","impliedFormat":1},{"version":"33e5e9aba62c3193d10d1d33ae1fa75c46a1171cf76fef750777377d53b0303f","impliedFormat":1},{"version":"2b06b93fd01bcd49d1a6bd1f9b65ddcae6480b9a86e9061634d6f8e354c1468f","impliedFormat":1},{"version":"6a0cd27e5dc2cfbe039e731cf879d12b0e2dded06d1b1dedad07f7712de0d7f4","affectsGlobalScope":true,"impliedFormat":1},{"version":"13f5c844119c43e51ce777c509267f14d6aaf31eafb2c2b002ca35584cd13b29","impliedFormat":1},{"version":"e60477649d6ad21542bd2dc7e3d9ff6853d0797ba9f689ba2f6653818999c264","impliedFormat":1},{"version":"c2510f124c0293ab80b1777c44d80f812b75612f297b9857406468c0f4dafe29","affectsGlobalScope":true,"impliedFormat":1},{"version":"5524481e56c48ff486f42926778c0a3cce1cc85dc46683b92b1271865bcf015a","impliedFormat":1},{"version":"4c829ab315f57c5442c6667b53769975acbf92003a66aef19bce151987675bd1","affectsGlobalScope":true,"impliedFormat":1},{"version":"b2ade7657e2db96d18315694789eff2ddd3d8aea7215b181f8a0b303277cc579","impliedFormat":1},{"version":"9855e02d837744303391e5623a531734443a5f8e6e8755e018c41d63ad797db2","impliedFormat":1},{"version":"4d631b81fa2f07a0e63a9a143d6a82c25c5f051298651a9b69176ba28930756d","impliedFormat":1},{"version":"836a356aae992ff3c28a0212e3eabcb76dd4b0cc06bcb9607aeef560661b860d","impliedFormat":1},{"version":"1e0d1f8b0adfa0b0330e028c7941b5a98c08b600efe7f14d2d2a00854fb2f393","impliedFormat":1},{"version":"41670ee38943d9cbb4924e436f56fc19ee94232bc96108562de1a734af20dc2c","affectsGlobalScope":true,"impliedFormat":1},{"version":"c906fb15bd2aabc9ed1e3f44eb6a8661199d6c320b3aa196b826121552cb3695","impliedFormat":1},{"version":"22295e8103f1d6d8ea4b5d6211e43421fe4564e34d0dd8e09e520e452d89e659","impliedFormat":1},{"version":"58647d85d0f722a1ce9de50955df60a7489f0593bf1a7015521efe901c06d770","impliedFormat":1},{"version":"6b4e081d55ac24fc8a4631d5dd77fe249fa25900abd7d046abb87d90e3b45645","impliedFormat":1},{"version":"a10f0e1854f3316d7ee437b79649e5a6ae3ae14ffe6322b02d4987071a95362e","impliedFormat":1},{"version":"e208f73ef6a980104304b0d2ca5f6bf1b85de6009d2c7e404028b875020fa8f2","impliedFormat":1},{"version":"d163b6bc2372b4f07260747cbc6c0a6405ab3fbcea3852305e98ac43ca59f5bc","impliedFormat":1},{"version":"e6fa9ad47c5f71ff733744a029d1dc472c618de53804eae08ffc243b936f87ff","affectsGlobalScope":true,"impliedFormat":1},{"version":"a6f137d651076822d4fe884287e68fd61785a0d3d1fdb250a5059b691fa897db","impliedFormat":1},{"version":"24826ed94a78d5c64bd857570fdbd96229ad41b5cb654c08d75a9845e3ab7dde","impliedFormat":1},{"version":"8b479a130ccb62e98f11f136d3ac80f2984fdc07616516d29881f3061f2dd472","impliedFormat":1},{"version":"928af3d90454bf656a52a48679f199f64c1435247d6189d1caf4c68f2eaf921f","affectsGlobalScope":true,"impliedFormat":1},{"version":"bceb58df66ab8fb00170df20cd813978c5ab84be1d285710c4eb005d8e9d8efb","affectsGlobalScope":true,"impliedFormat":1},{"version":"3f16a7e4deafa527ed9995a772bb380eb7d3c2c0fd4ae178c5263ed18394db2c","impliedFormat":1},{"version":"933921f0bb0ec12ef45d1062a1fc0f27635318f4d294e4d99de9a5493e618ca2","impliedFormat":1},{"version":"71a0f3ad612c123b57239a7749770017ecfe6b66411488000aba83e4546fde25","impliedFormat":1},{"version":"77fbe5eecb6fac4b6242bbf6eebfc43e98ce5ccba8fa44e0ef6a95c945ff4d98","impliedFormat":1},{"version":"4f9d8ca0c417b67b69eeb54c7ca1bedd7b56034bb9bfd27c5d4f3bc4692daca7","impliedFormat":1},{"version":"814118df420c4e38fe5ae1b9a3bafb6e9c2aa40838e528cde908381867be6466","impliedFormat":1},{"version":"a3fc63c0d7b031693f665f5494412ba4b551fe644ededccc0ab5922401079c95","impliedFormat":1},{"version":"80523c00b8544a2000ae0143e4a90a00b47f99823eb7926c1e03c494216fc363","impliedFormat":1},{"version":"37ba7b45141a45ce6e80e66f2a96c8a5ab1bcef0fc2d0f56bb58df96ec67e972","impliedFormat":1},{"version":"45650f47bfb376c8a8ed39d4bcda5902ab899a3150029684ee4c10676d9fbaee","impliedFormat":1},{"version":"746911b62b329587939560deb5c036aca48aece03147b021fa680223255d5183","affectsGlobalScope":true,"impliedFormat":1},{"version":"18fd40412d102c5564136f29735e5d1c3b455b8a37f920da79561f1fde068208","impliedFormat":1},{"version":"c8d3e5a18ba35629954e48c4cc8f11dc88224650067a172685c736b27a34a4dc","impliedFormat":1},{"version":"f0be1b8078cd549d91f37c30c222c2a187ac1cf981d994fb476a1adc61387b14","affectsGlobalScope":true,"impliedFormat":1},{"version":"0aaed1d72199b01234152f7a60046bc947f1f37d78d182e9ae09c4289e06a592","impliedFormat":1},{"version":"2b55d426ff2b9087485e52ac4bc7cfafe1dc420fc76dad926cd46526567c501a","impliedFormat":1},{"version":"66ba1b2c3e3a3644a1011cd530fb444a96b1b2dfe2f5e837a002d41a1a799e60","impliedFormat":1},{"version":"7e514f5b852fdbc166b539fdd1f4e9114f29911592a5eb10a94bb3a13ccac3c4","impliedFormat":1},{"version":"5b7aa3c4c1a5d81b411e8cb302b45507fea9358d3569196b27eb1a27ae3a90ef","affectsGlobalScope":true,"impliedFormat":1},{"version":"5987a903da92c7462e0b35704ce7da94d7fdc4b89a984871c0e2b87a8aae9e69","affectsGlobalScope":true,"impliedFormat":1},{"version":"ea08a0345023ade2b47fbff5a76d0d0ed8bff10bc9d22b83f40858a8e941501c","impliedFormat":1},{"version":"47613031a5a31510831304405af561b0ffaedb734437c595256bb61a90f9311b","impliedFormat":1},{"version":"ae062ce7d9510060c5d7e7952ae379224fb3f8f2dd74e88959878af2057c143b","impliedFormat":1},{"version":"8a1a0d0a4a06a8d278947fcb66bf684f117bf147f89b06e50662d79a53be3e9f","affectsGlobalScope":true,"impliedFormat":1},{"version":"358765d5ea8afd285d4fd1532e78b88273f18cb3f87403a9b16fef61ac9fdcfe","impliedFormat":1},{"version":"9f55299850d4f0921e79b6bf344b47c420ce0f507b9dcf593e532b09ea7eeea1","impliedFormat":1},{"version":"2beff543f6e9a9701df88daeee3cdd70a34b4a1c11cb4c734472195a5cb2af54","impliedFormat":1},{"version":"2e07abf27aa06353d46f4448c0bbac73431f6065eef7113128a5cd804d0c384d","impliedFormat":1},{"version":"be1cc4d94ea60cbe567bc29ed479d42587bf1e6cba490f123d329976b0fe4ee5","impliedFormat":1},{"version":"42bc0e1a903408137c3df2b06dfd7e402cdab5bbfa5fcfb871b22ebfdb30bd0b","impliedFormat":1},{"version":"9894dafe342b976d251aac58e616ac6df8db91fb9d98934ff9dd103e9e82578f","impliedFormat":1},{"version":"413df52d4ea14472c2fa5bee62f7a40abd1eb49be0b9722ee01ee4e52e63beb2","impliedFormat":1},{"version":"db6d2d9daad8a6d83f281af12ce4355a20b9a3e71b82b9f57cddcca0a8964a96","impliedFormat":1},{"version":"829b9e6028b29e6a8b1c01ddb713efe59da04d857089298fa79acbdb3cfcfdef","impliedFormat":1},{"version":"24f8562308dd8ba6013120557fa7b44950b619610b2c6cb8784c79f11e3c4f90","impliedFormat":1},{"version":"5f90b8c733a1bda63e42160b15a2301051e83a6f9d5332a59d16eb12f463270d","impliedFormat":1},{"version":"a86f82d646a739041d6702101afa82dcb935c416dd93cbca7fd754fd0282ce1f","impliedFormat":1},{"version":"ad0d1d75d129b1c80f911be438d6b61bfa8703930a8ff2be2f0e1f8a91841c64","impliedFormat":1},{"version":"ce75b1aebb33d510ff28af960a9221410a3eaf7f18fc5f21f9404075fba77256","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"496bbf339f3838c41f164238543e9fe5f1f10659cb30b68903851618464b98ba","impliedFormat":1},{"version":"5178eb4415a172c287c711dc60a619e110c3fd0b7de01ed0627e51a5336aa09c","impliedFormat":1},{"version":"ca6e5264278b53345bc1ce95f42fb0a8b733a09e3d6479c6ccfca55cdc45038c","impliedFormat":1},{"version":"9e2739b32f741859263fdba0244c194ca8e96da49b430377930b8f721d77c000","impliedFormat":1},{"version":"fb1d8e814a3eeb5101ca13515e0548e112bd1ff3fb358ece535b93e94adf5a3a","impliedFormat":1},{"version":"ffa495b17a5ef1d0399586b590bd281056cee6ce3583e34f39926f8dcc6ecdb5","impliedFormat":1},{"version":"98b18458acb46072947aabeeeab1e410f047e0cacc972943059ca5500b0a5e95","impliedFormat":1},{"version":"361e2b13c6765d7f85bb7600b48fde782b90c7c41105b7dab1f6e7871071ba20","impliedFormat":1},{"version":"c86fe861cf1b4c46a0fb7d74dffe596cf679a2e5e8b1456881313170f092e3fa","impliedFormat":1},{"version":"b6db56e4903e9c32e533b78ac85522de734b3d3a8541bf24d256058d464bf04b","impliedFormat":1},{"version":"24daa0366f837d22c94a5c0bad5bf1fd0f6b29e1fae92dc47c3072c3fdb2fbd5","impliedFormat":1},{"version":"570bb5a00836ffad3e4127f6adf581bfc4535737d8ff763a4d6f4cc877e60d98","impliedFormat":1},{"version":"889c00f3d32091841268f0b994beba4dceaa5df7573be12c2c829d7c5fbc232c","impliedFormat":1},{"version":"65f43099ded6073336e697512d9b80f2d4fec3182b7b2316abf712e84104db00","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"acf5a2ac47b59ca07afa9abbd2b31d001bf7448b041927befae2ea5b1951d9f9","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"d71291eff1e19d8762a908ba947e891af44749f3a2cbc5bd2ec4b72f72ea795f","impliedFormat":1},{"version":"c0480e03db4b816dff2682b347c95f2177699525c54e7e6f6aa8ded890b76be7","impliedFormat":1},{"version":"27ab780875bcbb65e09da7496f2ca36288b0c541abaa75c311450a077d54ec15","impliedFormat":1},{"version":"b620391fe8060cf9bedc176a4d01366e6574d7a71e0ac0ab344a4e76576fcbb8","impliedFormat":1},{"version":"380647d8f3b7f852cca6d154a376dbf8ac620a2f12b936594504a8a852e71d2f","impliedFormat":1},{"version":"208c9af9429dd3c76f5927b971263174aaa4bc7621ddec63f163640cbd3c473c","impliedFormat":1},{"version":"6459054aabb306821a043e02b89d54da508e3a6966601a41e71c166e4ea1474f","impliedFormat":1},{"version":"a23185bc5ef590c287c28a91baf280367b50ae4ea40327366ad01f6f4a8edbc5","impliedFormat":1},{"version":"bb37588926aba35c9283fe8d46ebf4e79ffe976343105f5c6d45f282793352b2","impliedFormat":1},{"version":"002eae065e6960458bda3cf695e578b0d1e2785523476f8a9170b103c709cd4f","impliedFormat":1},{"version":"c83bb0c9c5645a46c68356c2f73fdc9de339ce77f7f45a954f560c7e0b8d5ebb","impliedFormat":1},{"version":"05c97cddbaf99978f83d96de2d8af86aded9332592f08ce4a284d72d0952c391","impliedFormat":1},{"version":"72179f9dd22a86deaad4cc3490eb0fe69ee084d503b686985965654013f1391b","impliedFormat":1},{"version":"2e6114a7dd6feeef85b2c80120fdbfb59a5529c0dcc5bfa8447b6996c97a69f5","impliedFormat":1},{"version":"7b6ff760c8a240b40dab6e4419b989f06a5b782f4710d2967e67c695ef3e93c4","impliedFormat":1},{"version":"c8f004e6036aa1c764ad4ec543cf89a5c1893a9535c80ef3f2b653e370de45e6","impliedFormat":1},{"version":"dd80b1e600d00f5c6a6ba23f455b84a7db121219e68f89f10552c54ba46e4dc9","impliedFormat":1},{"version":"b064c36f35de7387d71c599bfcf28875849a1dbc733e82bd26cae3d1cd060521","impliedFormat":1},{"version":"6a148329edecbda07c21098639ef4254ef7869fb25a69f58e5d6a8b7b69d4236","impliedFormat":1},{"version":"8de9fe97fa9e00ec00666fa77ab6e91b35d25af8ca75dabcb01e14ad3299b150","impliedFormat":1},{"version":"f63ab283a1c8f5c79fabe7ca4ef85f9633339c4f0e822fce6a767f9d59282af2","impliedFormat":1},{"version":"dba114fb6a32b355a9cfc26ca2276834d72fe0e94cd2c3494005547025015369","impliedFormat":1},{"version":"a54c996c8870ef1728a2c1fa9b8eaec0bf4a8001cd2583c02dd5869289465b10","impliedFormat":1},{"version":"3e7efde639c6a6c3edb9847b3f61e308bf7a69685b92f665048c45132f51c218","impliedFormat":1},{"version":"df45ca1176e6ac211eae7ddf51336dc075c5314bc5c253651bae639defd5eec5","impliedFormat":1},{"version":"3754982006a3b32c502cff0867ca83584f7a43b1035989ca73603f400de13c96","impliedFormat":1},{"version":"a30ae9bb8a8fa7b90f24b8a0496702063ae4fe75deb27da731ed4a03b2eb6631","impliedFormat":1},{"version":"f974e4a06953682a2c15d5bd5114c0284d5abf8bc0fe4da25cb9159427b70072","impliedFormat":1},{"version":"50256e9c31318487f3752b7ac12ff365c8949953e04568009c8705db802776fb","impliedFormat":1},{"version":"7d73b24e7bf31dfb8a931ca6c4245f6bb0814dfae17e4b60c9e194a631fe5f7b","impliedFormat":1},{"version":"413586add0cfe7369b64979d4ec2ed56c3f771c0667fbde1bf1f10063ede0b08","impliedFormat":1},{"version":"06472528e998d152375ad3bd8ebcb69ff4694fd8d2effaf60a9d9f25a37a097a","impliedFormat":1},{"version":"50b5bc34ce6b12eccb76214b51aadfa56572aa6cc79c2b9455cdbb3d6c76af1d","impliedFormat":1},{"version":"b7e16ef7f646a50991119b205794ebfd3a4d8f8e0f314981ebbe991639023d0e","impliedFormat":1},{"version":"42c169fb8c2d42f4f668c624a9a11e719d5d07dacbebb63cbcf7ef365b0a75b3","impliedFormat":1},{"version":"a401617604fa1f6ce437b81689563dfdc377069e4c58465dbd8d16069aede0a5","impliedFormat":1},{"version":"e9dd71cf12123419c60dab867d44fbee5c358169f99529121eaef277f5c83531","impliedFormat":1},{"version":"5b6a189ba3a0befa1f5d9cb028eb9eec2af2089c32f04ff50e2411f63d70f25d","impliedFormat":1},{"version":"d6e73f8010935b7b4c7487b6fb13ea197cc610f0965b759bec03a561ccf8423a","impliedFormat":1},{"version":"174f3864e398f3f33f9a446a4f403d55a892aa55328cf6686135dfaf9e171657","impliedFormat":1},{"version":"824c76aec8d8c7e65769688cbee102238c0ef421ed6686f41b2a7d8e7e78a931","impliedFormat":1},{"version":"75b868be3463d5a8cfc0d9396f0a3d973b8c297401d00bfb008a42ab16643f13","impliedFormat":1},{"version":"15a234e5031b19c48a69ccc1607522d6e4b50f57d308ecb7fe863d44cd9f9eb3","impliedFormat":1},{"version":"d682336018141807fb602709e2d95a192828fcb8d5ba06dda3833a8ea98f69e3","impliedFormat":1},{"version":"6124e973eab8c52cabf3c07575204efc1784aca6b0a30c79eb85fe240a857efa","impliedFormat":1},{"version":"0d891735a21edc75df51f3eb995e18149e119d1ce22fd40db2b260c5960b914e","impliedFormat":1},{"version":"3b414b99a73171e1c4b7b7714e26b87d6c5cb03d200352da5342ab4088a54c85","impliedFormat":1},{"version":"4fbd3116e00ed3a6410499924b6403cc9367fdca303e34838129b328058ede40","impliedFormat":1},{"version":"b01bd582a6e41457bc56e6f0f9de4cb17f33f5f3843a7cf8210ac9c18472fb0f","impliedFormat":1},{"version":"0a437ae178f999b46b6153d79095b60c42c996bc0458c04955f1c996dc68b971","impliedFormat":1},{"version":"74b2a5e5197bd0f2e0077a1ea7c07455bbea67b87b0869d9786d55104006784f","impliedFormat":1},{"version":"4a7baeb6325920044f66c0f8e5e6f1f52e06e6d87588d837bdf44feb6f35c664","impliedFormat":1},{"version":"6dcf60530c25194a9ee0962230e874ff29d34c59605d8e069a49928759a17e0a","impliedFormat":1},{"version":"7274fbffbd7c9589d8d0ffba68157237afd5cecff1e99881ea3399127e60572f","impliedFormat":1},{"version":"1a42d2ec31a1fe62fdc51591768695ed4a2dc64c01be113e7ff22890bebb5e3f","impliedFormat":1},{"version":"1a82deef4c1d39f6882f28d275cad4c01f907b9b39be9cbc472fcf2cf051e05b","impliedFormat":1},{"version":"c5426dbfc1cf90532f66965a7aa8c1136a78d4d0f96d8180ecbfc11d7722f1a5","impliedFormat":1},{"version":"65a15fc47900787c0bd18b603afb98d33ede930bed1798fc984d5ebb78b26cf9","impliedFormat":1},{"version":"9d202701f6e0744adb6314d03d2eb8fc994798fc83d91b691b75b07626a69801","impliedFormat":1},{"version":"de9d2df7663e64e3a91bf495f315a7577e23ba088f2949d5ce9ec96f44fba37d","impliedFormat":1},{"version":"c7af78a2ea7cb1cd009cfb5bdb48cd0b03dad3b54f6da7aab615c2e9e9d570c5","impliedFormat":1},{"version":"1ee45496b5f8bdee6f7abc233355898e5bf9bd51255db65f5ff7ede617ca0027","impliedFormat":1},{"version":"0c7c947ff881c4274c0800deaa0086971e0bfe51f89a33bd3048eaa3792d4876","affectsGlobalScope":true,"impliedFormat":1},{"version":"db01d18853469bcb5601b9fc9826931cc84cc1a1944b33cad76fd6f1e3d8c544","affectsGlobalScope":true,"impliedFormat":1},{"version":"a8f8e6ab2fa07b45251f403548b78eaf2022f3c2254df3dc186cb2671fe4996d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fa6c12a7c0f6b84d512f200690bfc74819e99efae69e4c95c4cd30f6884c526e","impliedFormat":1},{"version":"f1c32f9ce9c497da4dc215c3bc84b722ea02497d35f9134db3bb40a8d918b92b","impliedFormat":1},{"version":"b73c319af2cc3ef8f6421308a250f328836531ea3761823b4cabbd133047aefa","affectsGlobalScope":true,"impliedFormat":1},{"version":"e433b0337b8106909e7953015e8fa3f2d30797cea27141d1c5b135365bb975a6","impliedFormat":1},{"version":"15b36126e0089bfef173ab61329e8286ce74af5e809d8a72edcafd0cc049057f","impliedFormat":1},{"version":"ddff7fc6edbdc5163a09e22bf8df7bef75f75369ebd7ecea95ba55c4386e2441","impliedFormat":1},{"version":"106c6025f1d99fd468fd8bf6e5bda724e11e5905a4076c5d29790b6c3745e50c","impliedFormat":1},{"version":"a57b1802794433adec9ff3fed12aa79d671faed86c49b09e02e1ac41b4f1d33a","impliedFormat":1},{"version":"ad10d4f0517599cdeca7755b930f148804e3e0e5b5a3847adce0f1f71bbccd74","impliedFormat":1},{"version":"1042064ece5bb47d6aba91648fbe0635c17c600ebdf567588b4ca715602f0a9d","impliedFormat":1},{"version":"c49469a5349b3cc1965710b5b0f98ed6c028686aa8450bcb3796728873eb923e","impliedFormat":1},{"version":"4a889f2c763edb4d55cb624257272ac10d04a1cad2ed2948b10ed4a7fda2a428","impliedFormat":1},{"version":"7bb79aa2fead87d9d56294ef71e056487e848d7b550c9a367523ee5416c44cfa","impliedFormat":1},{"version":"72d63643a657c02d3e51cd99a08b47c9b020a565c55f246907050d3c8a5e77fb","impliedFormat":1},{"version":"1d415445ea58f8033ba199703e55ff7483c52ac6742075b803bd3e7bbe9f5d61","impliedFormat":1},{"version":"d6406c629bb3efc31aedb2de809bef471e475c86c7e67f3ef9b676b5d7e0d6b2","impliedFormat":1},{"version":"27ff4196654e6373c9af16b6165120e2dd2169f9ad6abb5c935af5abd8c7938c","impliedFormat":1},{"version":"71d8ba39a9e024d9e4bb922464d18542ed8d2c25ee78efa7890c27213cc6e5d3","impliedFormat":1},{"version":"8c030e515014c10a2b98f9f48408e3ba18023dfd3f56e3312c6c2f3ae1f55a16","impliedFormat":1},{"version":"dafc31e9e8751f437122eb8582b93d477e002839864410ff782504a12f2a550c","impliedFormat":1},{"version":"754498c5208ce3c5134f6eabd49b25cf5e1a042373515718953581636491f3c3","impliedFormat":1},{"version":"9c82171d836c47486074e4ca8e059735bf97b205e70b196535b5efd40cbe1bc5","impliedFormat":1},{"version":"f56bdc6884648806d34bc66d31cdb787c4718d04105ce2cd88535db214631f82","impliedFormat":1},{"version":"633d58a237f4bb25ec7d565e4ffa32cecdcee8660ac12189c4351c52557cee9e","impliedFormat":1},{"version":"2e4f37ffe8862b14d8e24ae8763daaa8340c0df0b859d9a9733def0eee7562d9","impliedFormat":1},{"version":"13283350547389802aa35d9f2188effaeac805499169a06ef5cd77ce2a0bd63f","impliedFormat":1},{"version":"ce791f6ea807560f08065d1af6014581eeb54a05abd73294777a281b6dfd73c2","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"49f95e989b4632c6c2a578cc0078ee19a5831832d79cc59abecf5160ea71abad","impliedFormat":1},{"version":"9666533332f26e8995e4d6fe472bdeec9f15d405693723e6497bf94120c566c8","impliedFormat":1},{"version":"ce0df82a9ae6f914ba08409d4d883983cc08e6d59eb2df02d8e4d68309e7848b","impliedFormat":1},{"version":"796273b2edc72e78a04e86d7c58ae94d370ab93a0ddf40b1aa85a37a1c29ecd7","impliedFormat":1},{"version":"5df15a69187d737d6d8d066e189ae4f97e41f4d53712a46b2710ff9f8563ec9f","impliedFormat":1},{"version":"e17cd049a1448de4944800399daa4a64c5db8657cc9be7ef46be66e2a2cd0e7c","impliedFormat":1},{"version":"43fa6ea8714e18adc312b30450b13562949ba2f205a1972a459180fa54471018","impliedFormat":1},{"version":"6e89c2c177347d90916bad67714d0fb473f7e37fb3ce912f4ed521fe2892cd0d","impliedFormat":1},{"version":"43ba4f2fa8c698f5c304d21a3ef596741e8e85a810b7c1f9b692653791d8d97a","impliedFormat":1},{"version":"4d4927cbee21750904af7acf940c5e3c491b4d5ebc676530211e389dd375607a","impliedFormat":1},{"version":"72105519d0390262cf0abe84cf41c926ade0ff475d35eb21307b2f94de985778","impliedFormat":1},{"version":"8a97e578a9bc40eb4f1b0ca78f476f2e9154ecbbfd5567ee72943bab37fc156a","impliedFormat":1},{"version":"c857e0aae3f5f444abd791ec81206020fbcc1223e187316677e026d1c1d6fe08","impliedFormat":1},{"version":"ccf6dd45b708fb74ba9ed0f2478d4eb9195c9dfef0ff83a6092fa3cf2ff53b4f","impliedFormat":1},{"version":"2d7db1d73456e8c5075387d4240c29a2a900847f9c1bff106a2e490da8fbd457","impliedFormat":1},{"version":"2b15c805f48e4e970f8ec0b1915f22d13ca6212375e8987663e2ef5f0205e832","impliedFormat":1},{"version":"f22d05663d873ee7a600faf78abb67f3f719d32266803440cf11d5db7ac0cab2","impliedFormat":1},{"version":"d93c544ad20197b3976b0716c6d5cd5994e71165985d31dcab6e1f77feb4b8f2","impliedFormat":1},{"version":"35069c2c417bd7443ae7c7cafd1de02f665bf015479fec998985ffbbf500628c","impliedFormat":1},{"version":"a8b1c79a833ee148251e88a2553d02ce1641d71d2921cce28e79678f3d8b96aa","impliedFormat":1},{"version":"126d4f950d2bba0bd45b3a86c76554d4126c16339e257e6d2fabf8b6bf1ce00c","impliedFormat":1},{"version":"7e0b7f91c5ab6e33f511efc640d36e6f933510b11be24f98836a20a2dc914c2d","impliedFormat":1},{"version":"045b752f44bf9bbdcaffd882424ab0e15cb8d11fa94e1448942e338c8ef19fba","impliedFormat":1},{"version":"2894c56cad581928bb37607810af011764a2f511f575d28c9f4af0f2ef02d1ab","impliedFormat":1},{"version":"0a72186f94215d020cb386f7dca81d7495ab6c17066eb07d0f44a5bf33c1b21a","impliedFormat":1},{"version":"2d3cc2211f352f46ea6b7cf2c751c141ffcdf514d6e7ae7ee20b7b6742da313f","impliedFormat":1},{"version":"c75445151ff8b77d9923191efed7203985b1a9e09eccf4b054e7be864e27923d","impliedFormat":1},{"version":"0aedb02516baf3e66b2c1db9fef50666d6ed257edac0f866ea32f1aa05aa474f","impliedFormat":1},{"version":"fa8a8fbf91ee2a4779496225f0312aac6635b0f21aa09cdafa4283fe32d519c5","affectsGlobalScope":true,"impliedFormat":1},{"version":"0e8aef93d79b000deb6ec336b5645c87de167168e184e84521886f9ecc69a4b5","impliedFormat":1},{"version":"56ccb49443bfb72e5952f7012f0de1a8679f9f75fc93a5c1ac0bafb28725fc5f","impliedFormat":1},{"version":"20fa37b636fdcc1746ea0738f733d0aed17890d1cd7cb1b2f37010222c23f13e","impliedFormat":1},{"version":"d90b9f1520366d713a73bd30c5a9eb0040d0fb6076aff370796bc776fd705943","impliedFormat":1},{"version":"bc03c3c352f689e38c0ddd50c39b1e65d59273991bfc8858a9e3c0ebb79c023b","impliedFormat":1},{"version":"19df3488557c2fc9b4d8f0bac0fd20fb59aa19dec67c81f93813951a81a867f8","affectsGlobalScope":true,"impliedFormat":1},{"version":"b25350193e103ae90423c5418ddb0ad1168dc9c393c9295ef34980b990030617","affectsGlobalScope":true,"impliedFormat":1},{"version":"bef86adb77316505c6b471da1d9b8c9e428867c2566270e8894d4d773a1c4dc2","impliedFormat":1},{"version":"de7052bfee2981443498239a90c04ea5cc07065d5b9bb61b12cb6c84313ad4ef","impliedFormat":1},{"version":"a3e7d932dc9c09daa99141a8e4800fc6c58c625af0d4bbb017773dc36da75426","impliedFormat":1},{"version":"43e96a3d5d1411ab40ba2f61d6a3192e58177bcf3b133a80ad2a16591611726d","impliedFormat":1},{"version":"4a2edd238d9104eac35b60d727f1123de5062f452b70ed8e0366cb36387dfdfd","impliedFormat":1},{"version":"ca921bf56756cb6fe957f6af693a35251b134fb932dc13f3dfff0bb7106f80b4","impliedFormat":1},{"version":"fee92c97f1aa59eb7098a0cc34ff4df7e6b11bae71526aca84359a2575f313d8","impliedFormat":1},{"version":"0bd0297484aacea217d0b76e55452862da3c5d9e33b24430e0719d1161657225","impliedFormat":1},{"version":"2ab6d334bcbf2aff3acfc4fd8c73ecd82b981d3c3aa47b3f3b89281772286904","impliedFormat":1},{"version":"d07cbc787a997d83f7bde3877fec5fb5b12ce8c1b7047eb792996ed9726b4dde","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"4805f6161c2c8cefb8d3b8bd96a080c0fe8dbc9315f6ad2e53238f9a79e528a6","impliedFormat":1},{"version":"b83cb14474fa60c5f3ec660146b97d122f0735627f80d82dd03e8caa39b4388c","impliedFormat":1},{"version":"f374cb24e93e7798c4d9e83ff872fa52d2cdb36306392b840a6ddf46cb925cb6","impliedFormat":1},{"version":"49179c6a23701c642bd99abe30d996919748014848b738d8e85181fc159685ff","impliedFormat":1},{"version":"b73cbf0a72c8800cf8f96a9acfe94f3ad32ca71342a8908b8ae484d61113f647","impliedFormat":1},{"version":"bae6dd176832f6423966647382c0d7ba9e63f8c167522f09a982f086cd4e8b23","impliedFormat":1},{"version":"20865ac316b8893c1a0cc383ccfc1801443fbcc2a7255be166cf90d03fac88c9","impliedFormat":1},{"version":"c9958eb32126a3843deedda8c22fb97024aa5d6dd588b90af2d7f2bfac540f23","impliedFormat":1},{"version":"461d0ad8ae5f2ff981778af912ba71b37a8426a33301daa00f21c6ccb27f8156","impliedFormat":1},{"version":"e927c2c13c4eaf0a7f17e6022eee8519eb29ef42c4c13a31e81a611ab8c95577","impliedFormat":1},{"version":"fcafff163ca5e66d3b87126e756e1b6dfa8c526aa9cd2a2b0a9da837d81bbd72","impliedFormat":1},{"version":"70246ad95ad8a22bdfe806cb5d383a26c0c6e58e7207ab9c431f1cb175aca657","impliedFormat":1},{"version":"f00f3aa5d64ff46e600648b55a79dcd1333458f7a10da2ed594d9f0a44b76d0b","impliedFormat":1},{"version":"772d8d5eb158b6c92412c03228bd9902ccb1457d7a705b8129814a5d1a6308fc","impliedFormat":1},{"version":"45490817629431853543adcb91c0673c25af52a456479588b6486daba34f68bb","impliedFormat":1},{"version":"802e797bcab5663b2c9f63f51bdf67eff7c41bc64c0fd65e6da3e7941359e2f7","impliedFormat":1},{"version":"8b4327413e5af38cd8cb97c59f48c3c866015d5d642f28518e3a891c469f240e","impliedFormat":1},{"version":"8514c62ce38e58457d967e9e73f128eedc1378115f712b9eef7127f7c88f82ae","impliedFormat":1},{"version":"f1289e05358c546a5b664fbb35a27738954ec2cc6eb4137350353099d154fc62","impliedFormat":1},{"version":"4b20fcf10a5413680e39f5666464859fc56b1003e7dfe2405ced82371ebd49b6","impliedFormat":1},{"version":"1d17ba45cfbe77a9c7e0df92f7d95f3eefd49ee23d1104d0548b215be56945ad","impliedFormat":1},{"version":"f7d628893c9fa52ba3ab01bcb5e79191636c4331ee5667ecc6373cbccff8ae12","impliedFormat":1},{"version":"1d879125d1ec570bf04bc1f362fdbe0cb538315c7ac4bcfcdf0c1e9670846aa6","impliedFormat":1},{"version":"a1ee88010a64e8647d07dba58ec43e6e05851b9ec7a62e4ca2b9c33be5abb2c8","impliedFormat":1},{"version":"46273e8c29816125d0d0b56ce9a849cc77f60f9a5ba627447501d214466f0ff3","impliedFormat":1},{"version":"d663134457d8d669ae0df34eabd57028bddc04fc444c4bc04bc5215afc91e1f4","impliedFormat":1},{"version":"e91f7b1344577a02f051b9b471f33044fef8334a76dc9e1de003d17595a5219b","impliedFormat":1},{"version":"3af3584f79c57853028ef9421ec172539e1fe01853296dc05a9d615ade4ffaf6","impliedFormat":1},{"version":"f82579d87701d639ff4e3930a9b24f4ee13ca74221a9a3a792feb47f01881a9c","impliedFormat":1},{"version":"d7e5d5245a8ba34a274717d085174b2c9827722778129b0081fefd341cca8f55","impliedFormat":1},{"version":"d9d32f94056181c31f553b32ce41d0ef75004912e27450738d57efcd2409c324","impliedFormat":1},{"version":"752513f35f6cff294ffe02d6027c41373adf7bfa35e593dbfd53d95c203635ee","impliedFormat":1},{"version":"6c800b281b9e89e69165fd11536195488de3ff53004e55905e6c0059a2d8591e","impliedFormat":1},{"version":"7d4254b4c6c67a29d5e7f65e67d72540480ac2cfb041ca484847f5ae70480b62","impliedFormat":1},{"version":"1a7e2ea171726446850ec72f4d1525d547ff7e86724cc9e7eec509725752a758","impliedFormat":1},{"version":"8c901126d73f09ecdea4785e9a187d1ac4e793e07da308009db04a7283ec2f37","impliedFormat":1},{"version":"db97922b767bd2675fdfa71e08b49c38b7d2c847a1cc4a7274cb77be23b026f1","impliedFormat":1},{"version":"aab290b8e4b7c399f2c09b957666fc95335eb4522b2dd9ead1bf0cb64da6d6ee","impliedFormat":1},{"version":"94fe3281392e1015b22f39535878610b4fa6f1388dc8d78746be3bc4e4bb8950","impliedFormat":1},{"version":"2652448ac55a2010a1f71dd141f828b682298d39728f9871e1cdf8696ef443fd","impliedFormat":1},{"version":"06c25ddfc2242bd06c19f66c9eae4c46d937349a267810f89783680a1d7b5259","impliedFormat":1},{"version":"120599fd965257b1f4d0ff794bc696162832d9d8467224f4665f713a3119078b","impliedFormat":1},{"version":"5433f33b0a20300cca35d2f229a7fc20b0e8477c44be2affeb21cb464af60c76","impliedFormat":1},{"version":"db036c56f79186da50af66511d37d9fe77fa6793381927292d17f81f787bb195","impliedFormat":1},{"version":"bd4131091b773973ca5d2326c60b789ab1f5e02d8843b3587effe6e1ea7c9d86","impliedFormat":1},{"version":"c7f6485931085bf010fbaf46880a9b9ec1a285ad9dc8c695a9e936f5a48f34b4","impliedFormat":1},{"version":"14f6b927888a1112d662877a5966b05ac1bf7ed25d6c84386db4c23c95a5363b","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"0427df5c06fafc5fe126d14b9becd24160a288deff40e838bfbd92a35f8d0d00","impliedFormat":1},{"version":"90c54a02432d04e4246c87736e53a6a83084357acfeeba7a489c5422b22f5c7a","impliedFormat":1},{"version":"49c346823ba6d4b12278c12c977fb3a31c06b9ca719015978cb145eb86da1c61","impliedFormat":1},{"version":"bfac6e50eaa7e73bb66b7e052c38fdc8ccfc8dbde2777648642af33cf349f7f1","impliedFormat":1},{"version":"92f7c1a4da7fbfd67a2228d1687d5c2e1faa0ba865a94d3550a3941d7527a45d","impliedFormat":1},{"version":"f53b120213a9289d9a26f5af90c4c686dd71d91487a0aa5451a38366c70dc64b","impliedFormat":1},{"version":"83fe880c090afe485a5c02262c0b7cdd76a299a50c48d9bde02be8e908fb4ae6","impliedFormat":1},{"version":"0a372c2d12a259da78e21b25974d2878502f14d89c6d16b97bd9c5017ab1bc12","impliedFormat":1},{"version":"57d67b72e06059adc5e9454de26bbfe567d412b962a501d263c75c2db430f40e","impliedFormat":1},{"version":"6511e4503cf74c469c60aafd6589e4d14d5eb0a25f9bf043dcbecdf65f261972","impliedFormat":1},{"version":"ec1ca97598eda26b7a5e6c8053623acbd88e43be7c4d29c77ccd57abc4c43999","impliedFormat":1},{"version":"6e2261cd9836b2c25eecb13940d92c024ebed7f8efe23c4b084145cd3a13b8a6","impliedFormat":1},{"version":"a67b87d0281c97dfc1197ef28dfe397fc2c865ccd41f7e32b53f647184cc7307","impliedFormat":1},{"version":"771ffb773f1ddd562492a6b9aaca648192ac3f056f0e1d997678ff97dbb6bf9b","impliedFormat":1},{"version":"232f70c0cf2b432f3a6e56a8dc3417103eb162292a9fd376d51a3a9ea5fbbf6f","impliedFormat":1},{"version":"a47e6d954d22dd9ebb802e7e431b560ed7c581e79fb885e44dc92ed4f60d4c07","impliedFormat":1},{"version":"f019e57d2491c159d47a107fd90219a1734bdd2e25cd8d1db3c8fae5c6b414c4","impliedFormat":1},{"version":"8a0e762ceb20c7e72504feef83d709468a70af4abccb304f32d6b9bac1129b2c","impliedFormat":1},{"version":"d1c9bf292a54312888a77bb19dba5e2503ad803f5393beafd45d78d2f4fe9b48","impliedFormat":1},{"version":"9252d498a77517aab5d8d4b5eb9d71e4b225bbc7123df9713e08181de63180f6","impliedFormat":1},{"version":"cb8d8ef7b9ce8ed3e6f1c814fcbf3f90dab0cb8863079236784fc350746e27c4","impliedFormat":1},{"version":"35e6379c3f7cb27b111ad4c1aa69538fd8e788ab737b8ff7596a1b40e96f4f90","impliedFormat":1},{"version":"1fffe726740f9787f15b532e1dc870af3cd964dbe29e191e76121aa3dd8693f2","impliedFormat":1},{"version":"3be035da7bee86b4c3abf392e0edaa44fc6e45092995eefe36b39118c8a84068","affectsGlobalScope":true,"impliedFormat":1},{"version":"8f828825d077c2fa0ea606649faeb122749273a353daab23924fe674e98ba44c","impliedFormat":1},{"version":"2896c2e673a5d3bd9b4246811f79486a073cbb03950c3d252fba10003c57411a","impliedFormat":1},{"version":"616775f16134fa9d01fc677ad3f76e68c051a056c22ab552c64cc281a9686790","impliedFormat":1},{"version":"65c24a8baa2cca1de069a0ba9fba82a173690f52d7e2d0f1f7542d59d5eb4db0","impliedFormat":1},{"version":"f9fe6af238339a0e5f7563acee3178f51db37f32a2e7c09f85273098cee7ec49","impliedFormat":1},{"version":"407a06ba04eede4074eec470ecba2784cbb3bf4e7de56833b097dd90a2aa0651","impliedFormat":1},{"version":"77e71242e71ebf8528c5802993697878f0533db8f2299b4d36aa015bae08a79c","impliedFormat":1},{"version":"98a787be42bd92f8c2a37d7df5f13e5992da0d967fab794adbb7ee18370f9849","impliedFormat":1},{"version":"5c96bad5f78466785cdad664c056e9e2802d5482ca5f862ed19ba34ffbb7b3a4","impliedFormat":1},{"version":"81d8603ac527e75cfec72bb9391228b58f161c2b33514a9d814c7f3ebd3ef466","impliedFormat":1},{"version":"5f3dc10ae646f375776b4e028d2bed039a93eebbba105694d8b910feebbe8b9c","impliedFormat":1},{"version":"bb0cd7862b72f5eba39909c9889d566e198fcaddf7207c16737d0c2246112678","impliedFormat":1},{"version":"4545c1a1ceca170d5d83452dd7c4994644c35cf676a671412601689d9a62da35","impliedFormat":1},{"version":"320f4091e33548b554d2214ce5fc31c96631b513dffa806e2e3a60766c8c49d9","impliedFormat":1},{"version":"a2d648d333cf67b9aeac5d81a1a379d563a8ffa91ddd61c6179f68de724260ff","impliedFormat":1},{"version":"d90d5f524de38889d1e1dbc2aeef00060d779f8688c02766ddb9ca195e4a713d","impliedFormat":1},{"version":"a3f41ed1b4f2fc3049394b945a68ae4fdefd49fa1739c32f149d32c0545d67f5","impliedFormat":1},{"version":"bad68fd0401eb90fe7da408565c8aee9c7a7021c2577aec92fa1382e8876071a","impliedFormat":1},{"version":"47699512e6d8bebf7be488182427189f999affe3addc1c87c882d36b7f2d0b0e","impliedFormat":1},{"version":"fec01479923e169fb52bd4f668dbeef1d7a7ea6e6d491e15617b46f2cacfa37d","impliedFormat":1},{"version":"8a8fb3097ba52f0ae6530ec6ab34e43e316506eb1d9aa29420a4b1e92a81442d","impliedFormat":1},{"version":"44e09c831fefb6fe59b8e65ad8f68a7ecc0e708d152cfcbe7ba6d6080c31c61e","impliedFormat":1},{"version":"1c0a98de1323051010ce5b958ad47bc1c007f7921973123c999300e2b7b0ecc0","impliedFormat":1},{"version":"4655709c9cb3fd6db2b866cab7c418c40ed9533ce8ea4b66b5f17ec2feea46a9","impliedFormat":1},{"version":"87affad8e2243635d3a191fa72ef896842748d812e973b7510a55c6200b3c2a4","impliedFormat":1},{"version":"ad036a85efcd9e5b4f7dd5c1a7362c8478f9a3b6c3554654ca24a29aa850a9c5","impliedFormat":1},{"version":"fedebeae32c5cdd1a85b4e0504a01996e4a8adf3dfa72876920d3dd6e42978e7","impliedFormat":1},{"version":"3eecb25bb467a948c04874d70452b14ae7edb707660aac17dc053e42f2088b00","impliedFormat":1},{"version":"cdf21eee8007e339b1b9945abf4a7b44930b1d695cc528459e68a3adc39a622e","impliedFormat":1},{"version":"330896c1a2b9693edd617be24fbf9e5895d6e18c7955d6c08f028f272b37314d","impliedFormat":1},{"version":"1d9c0a9a6df4e8f29dc84c25c5aa0bb1da5456ebede7a03e03df08bb8b27bae6","impliedFormat":1},{"version":"84380af21da938a567c65ef95aefb5354f676368ee1a1cbb4cae81604a4c7d17","impliedFormat":1},{"version":"1af3e1f2a5d1332e136f8b0b95c0e6c0a02aaabd5092b36b64f3042a03debf28","impliedFormat":1},{"version":"30d8da250766efa99490fc02801047c2c6d72dd0da1bba6581c7e80d1d8842a4","impliedFormat":1},{"version":"03566202f5553bd2d9de22dfab0c61aa163cabb64f0223c08431fb3fc8f70280","impliedFormat":1},{"version":"5f0292a40df210ab94b9fb44c8b775c51e96777e14e073900e392b295ca1061b","impliedFormat":1},{"version":"bc9ee0192f056b3d5527bcd78dc3f9e527a9ba2bdc0a2c296fbc9027147df4b2","impliedFormat":1},{"version":"8627ad129bcf56e82adff0ab5951627c993937aa99f5949c33240d690088b803","impliedFormat":1},{"version":"1de80059b8078ea5749941c9f863aa970b4735bdbb003be4925c853a8b6b4450","impliedFormat":1},{"version":"1d079c37fa53e3c21ed3fa214a27507bda9991f2a41458705b19ed8c2b61173d","impliedFormat":1},{"version":"5bf5c7a44e779790d1eb54c234b668b15e34affa95e78eada73e5757f61ed76a","impliedFormat":1},{"version":"5835a6e0d7cd2738e56b671af0e561e7c1b4fb77751383672f4b009f4e161d70","impliedFormat":1},{"version":"5c634644d45a1b6bc7b05e71e05e52ec04f3d73d9ac85d5927f647a5f965181a","impliedFormat":1},{"version":"4b7f74b772140395e7af67c4841be1ab867c11b3b82a51b1aeb692822b76c872","impliedFormat":1},{"version":"27be6622e2922a1b412eb057faa854831b95db9db5035c3f6d4b677b902ab3b7","impliedFormat":1},{"version":"a68d4b3182e8d776cdede7ac9630c209a7bfbb59191f99a52479151816ef9f9e","impliedFormat":99},{"version":"39644b343e4e3d748344af8182111e3bbc594930fff0170256567e13bbdbebb0","impliedFormat":99},{"version":"ed7fd5160b47b0de3b1571c5c5578e8e7e3314e33ae0b8ea85a895774ee64749","impliedFormat":99},{"version":"63a7595a5015e65262557f883463f934904959da563b4f788306f699411e9bac","impliedFormat":1},{"version":"ecbaf0da125974be39c0aac869e403f72f033a4e7fd0d8cd821a8349b4159628","impliedFormat":1},{"version":"4ba137d6553965703b6b55fd2000b4e07ba365f8caeb0359162ad7247f9707a6","impliedFormat":1},{"version":"ceec3c81b2d81f5e3b855d9367c1d4c664ab5046dff8fd56552df015b7ccbe8f","affectsGlobalScope":true,"impliedFormat":1},{"version":"8fac4a15690b27612d8474fb2fc7cc00388df52d169791b78d1a3645d60b4c8b","affectsGlobalScope":true,"impliedFormat":1},{"version":"064ac1c2ac4b2867c2ceaa74bbdce0cb6a4c16e7c31a6497097159c18f74aa7c","impliedFormat":1},{"version":"3dc14e1ab45e497e5d5e4295271d54ff689aeae00b4277979fdd10fa563540ae","impliedFormat":1},{"version":"1d63055b690a582006435ddd3aa9c03aac16a696fac77ce2ed808f3e5a06efab","impliedFormat":1},{"version":"b789bf89eb19c777ed1e956dbad0925ca795701552d22e68fd130a032008b9f9","impliedFormat":1},"85ae5aee75f011967cf2d25cbc342f62d69314e9d925f7f4aa3456fc2cffcca6",{"version":"bc83039b14bdc0061b31f8c4bffbcb09b2428ecb77afb3288992717c5488907e","signature":"b5fc7338400cdf467c4a83072041cdaff75b9d05ebc8a64cf6d8cac1e34141cf"},{"version":"721e83e12a80c8266a39ee1a44289bc38688ed242d153449de4bf92c570a6fc7","signature":"77bcabb066b923077ee7ce6654e4ec3e94f4a71e9573c427c5fcd0b6e090d2a7"},"7a3ef5b447fc463dfd5c871ce3d9f53037a0447d1a354c3c138f3272d4b32b11","0737a5b702f82a4be8f335d813c3e32d974b01ec2b5557ed5d0903a33b8210f2","3943162a78a63ee30257105c6b09a4be319c9b5dd7be304dc434c422f3f6a03b",{"version":"769038c8b524f7ec8549b1833a702ac396143b4899149e4bf5a11e3e30d2e7dd","signature":"3da257fa8927791b5b22256d259ad690cf9548ca7a1f5e7584f9bc63906f3a4a"},{"version":"68e496f2d7bc74a07747465add3f3002a31433e9d0fb68f79d16c3760ad66d3d","signature":"e2efe5f637e7dc664b42b7566de2e5cdfb2fd919f74c2aa6cc7b46664e929ba8"},"7ee3699377151484e30d4eee53f7c4e685e40f956c08602bcaf5e69835d2fec4","480202fc3e95d6d69fd4642ff659c476cc85bdcbb8c5592bac4e546a16ad0986","fceab357d2f598f36649177263229781fded2a748ac04decac7fb2938fca791f",{"version":"2fed02989f118d0fc7ee97aad43f37b3fb8ce3241614c387f5861ae8af45f016","signature":"71f255c282738f3d1bd895a59df9a7270e2890169778e8e9f45032469555ffcb"},"55246397cf3c4e34918f671f33272ba24a6b159818c4ccb3448505c52e6015cb",{"version":"0ac88b72ed56740c553158f519392024d55d2af55e076008a7b16e06198e7460","signature":"2ebc90be29c541cbe65fc76ab9642c7348e8f76f04a670930d705b67cc0df910"},"ec10fd23dae7666ed76c7562ba558e0eec5e4ea975064af8bd50b36023191e1c",{"version":"4c30bb9ab23dfb9dddaccc2054bf888b3bc66ef03678bcfea0ab6d8c50e2b020","signature":"4c60140d3028e04b9a9542dbce38ac52b8fc48d81741169bb501e903b8702c62"},"4de4e7736d13dfa2f09e4d44e4f227cd695d344b5b40070b491b3186986f4044",{"version":"26222351c2333b45e94736ef1a0df9a6c70107bff87cf885b4bc0be940e48c65","signature":"68dfc22d24a462e2344abc4d521b2b7191d8e1a719f72b5d92fe3eee76d18d20"},{"version":"224463cf983094df6b76f4f7c1d44e3910e593f633f259db4ad7a0e0adf20f39","signature":"04a915f0f6efc8073dd37d01d889a61b742f9f5c27f2e4e54ac92aeecd97005f"},"30b6d44ecf25eda9ed845d55a6f2fc5afbd5d90b9241a4e9a3d4292a3aeae043","56b74c21bac9dd4b9e0877e33c1a0cf79fbd2eb19c657dc7c87ce06cb4a46185",{"version":"6545763969360810696788a62bede98e98b8d41765a67ac2548dd50b49a3a02c","signature":"ee6d723a9ba3b4e3221d8a611090b19ab4ef5d2444e08c217501ba64a16c8275"},"f2b24627833e723138c3861878b3d0cb63ca82d5c8f1cdf08210d74995bce6bd","402abee4ef92ebfa93ca389801a1dfc7f75be8afa07579d0d1d7c1675704a556","22d914bfae4a439de15ad73943186465d5d92f6c07e1d92c9c186e4a4e650d3a","d50106c47888ece453cc8936610610a570a09bcce39d86d2f0882da317a5b522","2c148c764ff339259cf455476fc8ed38b0570ac7806fae2c5bcb1f03a562cdf5","61ab2b617f523ac8aa71b961e1745a9cb07b8995d4f365fe8347124533e871b6",{"version":"3438c45230bed78506e3ed31465d49befe1c6b90612078be40918db40c9d60f6","signature":"45b373ad2e114de335dd3eaf62f9658266d71c2f34537489f88f3b4815fa72f8"},{"version":"7bc25969d782019900314213322ffa91d5134a6116c38d4fbe3806fc7ef79248","signature":"bb5c8befad584f367e53e3cad45b3d01e126d36d818e56bce56743dc053eba25"},{"version":"b582990f4c6250fc6bff6c16e65a2467da05d244450c07bae4fece6dd3a8abd7","signature":"1fe4c06a79d7fdbb3c96a6bae786103f82ea87dca5f9f69bbd4e0af0104de8f4"},{"version":"35cf80cf7983e19c186b3b8055463d87005540f6ef87b1cd88d62e3e6ceff809","signature":"8fcb33281703259d9e2dc58f287a4457a54f7c6ded0ce70f0737f3927d403f1e"},{"version":"6c98d92cfb1365f3f68ad7f6862a2632498c8dc7d7d9e4b67f1cacf271d1bd65","signature":"882e2faf8dcd1f0fbea2b72b6a0f5a7129a7e1c2226a4fae2ffd27efa7fc1b21"},"2552a31fad45a9ed1bde87e51b038dc0e786cd364b597162263abbf57018949b","359690f9bb5a5ae31af63357d867654050d50c0efcc8681343befb0115766c81","ffb4243cd6d136d79a6c9b8f3b7225974df858805391b8cc4fcf2f6777e07424","8b78e47102b387bb0e0d58ad6b2c44ff5c56c869ca1f0d9999144c562ae8a035",{"version":"71f4cf0736807d5f6e9b3004e9e62f6418fc3a1b9a6c5dea37eaf55b2e89bd63","signature":"89b0f68f8f0b901f9dfff2b9e7255520283a783d6af7f2bc2953d771232317a2"},{"version":"750bfeee4f6d6f90ab1b4ada3f2fc38b06873cbf6aa0b05906d49b1a1c724785","signature":"89b0f68f8f0b901f9dfff2b9e7255520283a783d6af7f2bc2953d771232317a2"},"3feacd53fe8ab0260163c29588a7a115ec15f143baa5389c3e1e727923fc13a4","e74e4a65f58e1d5ca4231f8d26cf38fd7e957b9d8b4fe6aed8b2bcc945f2b7bc","5f875ca1036b38606fb91753e654b552a184d1d69597c732a51d88b561295852",{"version":"a6ad14b336c3042e208af577032b352686d0386c9c71c523347301e5677acd09","signature":"89b0f68f8f0b901f9dfff2b9e7255520283a783d6af7f2bc2953d771232317a2"},{"version":"f83131b7ef9b2712fcdf52ba4d435fef307bfcced2e3fd068a97cb87d6dc757e","signature":"89b0f68f8f0b901f9dfff2b9e7255520283a783d6af7f2bc2953d771232317a2"},{"version":"151ff381ef9ff8da2da9b9663ebf657eac35c4c9a19183420c05728f31a6761d","impliedFormat":1},{"version":"f3d8c757e148ad968f0d98697987db363070abada5f503da3c06aefd9d4248c1","impliedFormat":1},{"version":"96d14f21b7652903852eef49379d04dbda28c16ed36468f8c9fa08f7c14c9538","impliedFormat":1}],"root":[83,[501,544]],"options":{"allowJs":false,"esModuleInterop":true,"jsx":1,"module":99,"skipLibCheck":true,"strict":true,"target":4},"referencedMap":[[538,1],[539,2],[542,3],[541,4],[540,5],[536,6],[543,7],[537,8],[544,9],[534,10],[83,11],[535,12],[501,13],[518,11],[519,11],[526,14],[522,15],[520,16],[528,17],[513,18],[529,11],[514,11],[517,19],[530,11],[516,20],[531,11],[521,21],[525,22],[524,23],[523,24],[527,25],[532,11],[515,26],[512,11],[511,27],[510,26],[533,28],[504,29],[503,24],[506,30],[507,11],[508,11],[505,31],[509,32],[502,11],[248,11],[545,11],[546,11],[547,11],[145,33],[146,33],[147,34],[100,35],[148,36],[149,37],[150,38],[95,11],[98,39],[96,11],[97,11],[151,40],[152,41],[153,42],[154,43],[155,44],[156,45],[157,45],[158,46],[159,47],[160,48],[161,49],[101,11],[99,11],[162,50],[163,51],[164,52],[198,53],[165,54],[166,11],[167,55],[168,56],[169,57],[170,58],[171,59],[172,60],[173,61],[174,62],[175,63],[176,63],[177,64],[178,11],[179,65],[180,66],[182,67],[181,68],[183,69],[184,70],[185,71],[186,72],[187,73],[188,74],[189,75],[190,76],[191,77],[192,78],[193,79],[194,80],[195,81],[102,11],[103,11],[104,11],[142,82],[143,11],[144,11],[196,83],[197,84],[202,85],[358,28],[203,86],[201,87],[360,88],[359,89],[199,90],[356,11],[200,91],[84,11],[86,92],[355,28],[266,28],[85,11],[93,93],[447,94],[452,10],[454,95],[224,96],[252,97],[430,98],[247,99],[235,11],[216,11],[222,11],[420,100],[283,101],[223,11],[389,102],[257,103],[258,104],[354,105],[417,106],[372,107],[424,108],[425,109],[423,110],[422,11],[421,111],[254,112],[225,113],[304,11],[305,114],[220,11],[236,115],[226,116],[288,115],[285,115],[209,115],[250,117],[249,11],[429,118],[439,11],[215,11],[330,119],[331,120],[325,28],[475,11],[333,11],[334,121],[326,122],[481,123],[479,124],[474,11],[416,125],[415,11],[473,126],[327,28],[368,127],[366,128],[476,11],[480,11],[478,129],[477,11],[367,130],[468,131],[471,132],[295,133],[294,134],[293,135],[484,28],[292,136],[277,11],[487,11],[490,11],[489,28],[491,137],[205,11],[426,138],[427,139],[428,140],[238,11],[214,141],[204,11],[346,28],[207,142],[345,143],[344,144],[335,11],[336,11],[343,11],[338,11],[341,145],[337,11],[339,146],[342,147],[340,146],[221,11],[212,11],[213,115],[267,148],[268,149],[265,150],[263,151],[264,152],[260,11],[352,121],[374,121],[446,153],[455,154],[459,155],[433,156],[432,11],[280,11],[492,157],[442,158],[328,159],[329,160],[320,161],[310,11],[351,162],[311,163],[353,164],[348,165],[347,11],[349,11],[365,166],[434,167],[435,168],[313,169],[317,170],[308,171],[412,172],[441,173],[287,174],[390,175],[210,176],[440,177],[206,99],[261,11],[269,178],[401,179],[259,11],[400,180],[94,11],[395,181],[237,11],[306,182],[391,11],[211,11],[270,11],[399,183],[219,11],[275,184],[316,185],[431,186],[315,11],[398,11],[262,11],[403,187],[404,188],[217,11],[406,189],[408,190],[407,191],[240,11],[397,176],[410,192],[396,193],[402,194],[228,11],[231,11],[229,11],[233,11],[230,11],[232,11],[234,195],[227,11],[382,196],[381,11],[387,197],[383,198],[386,199],[385,199],[388,197],[384,198],[274,200],[375,201],[438,202],[494,11],[463,203],[465,204],[312,11],[464,205],[436,167],[493,206],[332,167],[218,11],[314,207],[271,208],[272,209],[273,210],[303,211],[411,211],[289,211],[376,212],[290,212],[256,213],[255,11],[380,214],[379,215],[378,216],[377,217],[437,218],[324,219],[362,220],[323,221],[357,222],[361,223],[419,224],[418,225],[414,226],[371,227],[373,228],[370,229],[409,230],[364,11],[451,11],[363,231],[413,11],[276,232],[309,138],[307,233],[278,234],[281,235],[488,11],[279,236],[282,236],[449,11],[448,11],[450,11],[486,11],[284,237],[322,28],[92,11],[369,238],[253,11],[242,239],[318,11],[457,28],[467,240],[302,28],[461,121],[301,241],[444,242],[300,240],[208,11],[469,243],[298,28],[299,28],[291,11],[241,11],[297,244],[296,245],[239,246],[319,62],[286,62],[405,11],[393,247],[392,11],[453,11],[350,248],[321,28],[445,249],[87,28],[90,250],[91,251],[88,28],[89,11],[251,252],[246,253],[245,11],[244,254],[243,11],[443,255],[456,256],[458,257],[460,258],[462,259],[466,260],[500,261],[470,261],[499,262],[472,263],[482,264],[483,265],[485,266],[495,267],[498,141],[497,11],[496,268],[394,269],[81,11],[82,11],[13,11],[14,11],[16,11],[15,11],[2,11],[17,11],[18,11],[19,11],[20,11],[21,11],[22,11],[23,11],[24,11],[3,11],[25,11],[26,11],[4,11],[27,11],[31,11],[28,11],[29,11],[30,11],[32,11],[33,11],[34,11],[5,11],[35,11],[36,11],[37,11],[38,11],[6,11],[42,11],[39,11],[40,11],[41,11],[43,11],[7,11],[44,11],[49,11],[50,11],[45,11],[46,11],[47,11],[48,11],[8,11],[54,11],[51,11],[52,11],[53,11],[55,11],[9,11],[56,11],[57,11],[58,11],[60,11],[59,11],[61,11],[62,11],[10,11],[63,11],[64,11],[65,11],[11,11],[66,11],[67,11],[68,11],[69,11],[70,11],[1,11],[71,11],[72,11],[12,11],[76,11],[74,11],[79,11],[78,11],[73,11],[77,11],[75,11],[80,11],[120,270],[130,271],[119,270],[140,272],[111,273],[110,274],[139,268],[133,275],[138,276],[113,277],[127,278],[112,279],[136,280],[108,281],[107,268],[137,282],[109,283],[114,284],[115,11],[118,284],[105,11],[141,285],[131,286],[122,287],[123,288],[125,289],[121,290],[124,291],[134,268],[116,292],[117,293],[126,294],[106,295],[129,286],[128,284],[132,11],[135,296]],"affectedFilesPendingEmit":[538,539,542,541,540,536,543,537,544,535,518,519,526,522,520,528,513,529,514,517,530,516,531,521,525,524,523,527,532,515,512,511,510,533,504,503,506,507,508,505,509,502],"version":"5.9.3"}
```
=== END FILE: frontend/tsconfig.tsbuildinfo ===

