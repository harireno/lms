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
