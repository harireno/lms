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
