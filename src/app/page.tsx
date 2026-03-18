"use client";

import { useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import { cn } from "@/lib/utils";

const Page = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={handleToggleSidebar}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      {/* Header */}
      <Header
        isSidebarCollapsed={isSidebarCollapsed}
        onMenuClick={toggleMobileSidebar}
      />

      {/* Main Content */}
      <main
        className={cn(
          "pt-20 transition-all duration-300 ease-in-out min-h-screen",
          "lg:ml-0", // base for responsiveness
          isSidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-[260px]",
          "ml-0" // Always 0 on mobile
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 bg-[#F7FFFA]">
          <Dashboard />
        </div>
      </main>
    </div>
  );
};

export default Page;
