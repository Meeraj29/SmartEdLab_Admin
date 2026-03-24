"use client";

import { useState } from "react";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import InstituteStatic from "./InstituteStatic";
import InstituteTable from "./InstituteTable";
import AddInstitute from "./AddInstitute";
import InstituteProfile from "./InstituteProfile";
import { cn } from "@/lib/utils";

const Institute = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"list" | "add" | "profile">("list");

  return (
    <div className="min-h-screen bg-[#F7FFFA] relative overflow-x-hidden">
      {currentView !== "add" && (
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isMobileOpen={isMobileOpen}
          onMobileClose={() => setIsMobileOpen(false)}
        />
      )}

      <Header
        isSidebarCollapsed={currentView !== "add" ? isSidebarCollapsed : false}
        isSidebarHidden={currentView === "add"}
        onMenuClick={() => setIsMobileOpen(true)}
      />

      <main
        className={cn(
          "pt-20 transition-all duration-300 ease-in-out min-h-screen",
          currentView !== "add"
            ? isSidebarCollapsed
              ? "lg:ml-[72px]"
              : "lg:ml-[260px]"
            : "ml-0"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8">
          {currentView === "list" ? (
            <>
              <InstituteStatic onAddClick={() => setCurrentView("add")} />
              <InstituteTable onViewProfile={() => setCurrentView("profile")} />
            </>
          ) : currentView === "add" ? (
            <AddInstitute
                onBack={() => setCurrentView("list")}
                onSuccess={() => setCurrentView("list")}
            />
          ) : (
            <InstituteProfile onBack={() => setCurrentView("list")} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Institute;
