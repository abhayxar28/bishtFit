'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardComponent from "@/components/dashboard/DashboardComponent";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const session = await res.json();
        
        // Check if user is authenticated and is an admin
        if (!session?.user || session.user.role !== "admin") {
          router.push("/signin");
        }
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/signin");
      }
    };

    checkAuth();
  }, [router]);

  return <DashboardComponent />;
}