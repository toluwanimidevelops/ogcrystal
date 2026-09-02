"use client";

import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useApp();
  const router = useRouter();

  useEffect(() => {
    // ONLY redirect if loading is completely finished and user is not authenticated
    if (!isLoading && !isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show a clean loading state on refresh while verifying token
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#f5f5f9]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
      </div>
    );
  }

  // Prevent flash of page content if authentication failed
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-l from-[#f6f6fa] to-[#f5f5f9]">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <Nav />
        <div className="px-15 max-lg:px-10 [scrollbar-width:none] [-ms-overflow-style:none] max-md:px-5 overflow-y-scroll py-10">
          {children}
        </div>
      </div>
    </div>
  );
}
