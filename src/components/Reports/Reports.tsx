"use client";

import { useState } from "react";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import ReportsCharts from "@/components/Reports/ReportsCharts";
import ReportsStatic from "@/components/Reports/ReportsStatic";
import ReportsTable from "@/components/Reports/ReportsTable";
import { cn } from "@/lib/utils";

const Reports = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      <Header
        isSidebarCollapsed={isSidebarCollapsed}
        isSidebarHidden={false}
        onMenuClick={() => setIsMobileOpen(true)}
      />

      <main
        className={cn(
          "pt-20 transition-all duration-300 ease-in-out min-h-screen pb-10",
          isSidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-10">
          <ReportsStatic />
          <ReportsCharts />
          <ReportsTable />
        </div>
      </main>
    </div>
  );
};

export default Reports;
