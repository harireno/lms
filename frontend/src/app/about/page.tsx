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
