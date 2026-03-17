"use client";

import React, { useState } from "react";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";
import { cn } from "@/lib/utils";

const Page = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleToggleSidebar} />

      {/* Header */}
      <Header isSidebarCollapsed={isSidebarCollapsed} />

      {/* Main Content */}
      <main
        className={cn(
          "pt-16 transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "ml-[72px]" : "ml-[260px]"
        )}
      >
        <div className="p-6">
          <Dashboard />
        </div>
      </main>
    </div>
  );
};

export default Page;