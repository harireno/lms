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
