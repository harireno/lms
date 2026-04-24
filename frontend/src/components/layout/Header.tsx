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
