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
