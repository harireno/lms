"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function HeaderAuthActions() {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function loadCurrentUser() {
    try {
      const response = await fetch("/api/auth/me", {
        cache: "no-store",
      });

      if (!response.ok) {
        setUser(null);
        return;
      }

      const result = await response.json();
      setUser(result.data);
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setIsChecking(false);
    }
  }

  useEffect(() => {
    loadCurrentUser();
  }, []);

  async function handleLogout() {
    setIsLoading(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      setUser(null);
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isChecking) {
    return (
      <div className="header-actions">
        <a href="/login" className="header-link-button">
          Login
        </a>
        <a href="/register" className="header-cta-button">
          Get Started
        </a>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="header-actions">
        <a href="/login" className="header-link-button">
          Login
        </a>
        <a href="/register" className="header-cta-button">
          Get Started
        </a>
      </div>
    );
  }

  return (
    <div className="header-actions">
      <a href="/dashboard" className="header-link-button">
        {user.name}
      </a>
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoading}
        className="header-cta-button"
      >
        {isLoading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}