import HeaderLearnerIndicator from "@/components/layout/HeaderLearnerIndicator";
import HeaderAuthActions from "@/components/layout/HeaderAuthActions";

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

        <HeaderAuthActions />
      </div>
      
    </header>
  );
}
