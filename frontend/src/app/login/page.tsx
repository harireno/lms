"use client";

import { FormEvent, useEffect, useState } from "react";

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("member@example.com");
  const [password, setPassword] = useState("password123");
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadCurrentUser() {
    const response = await fetch("/api/auth/me", {
      cache: "no-store",
    });

    if (!response.ok) {
      setUser(null);
      return;
    }

    const result = await response.json();
    setUser(result.data);
  }

  useEffect(() => {
    loadCurrentUser();
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || "Login gagal");
        return;
      }

      setMessage("Login berhasil");
      await loadCurrentUser();
    } catch (error) {
      console.error(error);
      setMessage("Terjadi error saat login");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    setMessage("");

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      setUser(null);
      setMessage("Logout berhasil");
    } catch (error) {
      console.error(error);
      setMessage("Terjadi error saat logout");
    } finally {
      setIsLoading(false);
    }
  }

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
              Sign in to access your courses, continue your lessons, and keep
              building practical open-source development skills.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">Access your enrolled courses</div>
              <div className="auth-feature-item">Track your learning progress</div>
              <div className="auth-feature-item">Continue from where you stopped</div>
            </div>
          </div>

          <div className="auth-panel auth-panel-form">
            {user ? (
              <>
                <div className="auth-form-head">
                  <p className="auth-eyebrow">Logged In</p>
                  <h2>Welcome, {user.name}</h2>
                  <p>
                    You are signed in as {user.email} with role {user.role}.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="auth-submit-button"
                >
                  {isLoading ? "Processing..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <div className="auth-form-head">
                  <p className="auth-eyebrow">Login</p>
                  <h2>Sign in to OdooCamp 247</h2>
                  <p>
                    Use your email and password to access your OdooCamp 247
                    learning dashboard.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                  <label className="auth-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="auth-input"
                    required
                  />

                  <label className="auth-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="auth-input"
                    required
                  />

                  <button
                    type="submit"
                    className="auth-submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </button>
                </form>

                <div className="auth-footer-note">
                  <span>Don&apos;t have an account?</span>
                  <a href="/register">Create one now</a>
                </div>
              </>
            )}

            {message ? (
              <p className="auth-footer-note" style={{ marginTop: "1rem" }}>
                {message}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}