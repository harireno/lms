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
