"use client";

import { useState } from "react";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import { cn } from "@/lib/utils";
import AddStudent from "./AddStudent";
import StudentProfile from "./StudentProfile";
import StudentStatic from "./StudentStatic";
import StudentTable from "./StudentTable";

const Student = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"list" | "add" | "profile">(
    "list"
  );

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
              <StudentStatic onAddClick={() => setCurrentView("add")} />
              <StudentTable onViewProfile={() => setCurrentView("profile")} />
            </>
          ) : currentView === "add" ? (
            <AddStudent
              onBack={() => setCurrentView("list")}
              onSuccess={() => setCurrentView("profile")}
            />
          ) : (
            <StudentProfile onBack={() => setCurrentView("list")} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Student;
