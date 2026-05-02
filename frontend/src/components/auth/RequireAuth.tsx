"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth/me", {
          cache: "no-store",
        });

        if (!response.ok) {
          router.replace("/login");
          return;
        }

        const result = await response.json();
        setUser(result.data);
      } catch (error) {
        console.error(error);
        router.replace("/login");
      } finally {
        setIsChecking(false);
      }
    }

    checkAuth();
  }, [router]);

  if (isChecking) {
    return (
      <main className="mx-auto max-w-4xl p-6">
        <p>Checking member session...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}