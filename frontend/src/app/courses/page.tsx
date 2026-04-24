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
