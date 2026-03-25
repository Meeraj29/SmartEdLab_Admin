"use client";

import { useState } from "react";
import AIConfigWizard from "@/components/AIControl/AIConfigWizard";
import AIControlCharts from "@/components/AIControl/AIControlCharts";
import AIControlStatic from "@/components/AIControl/AIControlStatic";
import AIInstituteDetail from "@/components/AIControl/AIInstituteDetail";
import AIInstituteTable from "@/components/AIControl/AIInstituteTable";
import AISessionLogs from "@/components/AIControl/AISessionLogs";
import AISessionsView from "@/components/AIControl/AISessionsView";
import AIStudentDetail from "@/components/AIControl/AIStudentDetail";
import AIStudentTable from "@/components/AIControl/AIStudentTable";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import { cn } from "@/lib/utils";

const AIControl = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentView, setCurrentView] = useState<
    "list" | "config" | "sessions" | "institute-detail" | "student-detail"
  >("list");
  const [selectedInstitute, setSelectedInstitute] = useState<string | null>(
    null
  );
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const handleInstituteClick = (name: string) => {
    setSelectedInstitute(name);
    setCurrentView("institute-detail");
  };

  const handleStudentClick = (name: string) => {
    setSelectedStudent(name);
    setCurrentView("student-detail");
  };

  return (
    <div className="min-h-screen bg-[#F7FFFA] relative overflow-x-hidden">
      {currentView !== "config" && (
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isMobileOpen={isMobileOpen}
          onMobileClose={() => setIsMobileOpen(false)}
        />
      )}

      <Header
        isSidebarCollapsed={
          currentView !== "config" ? isSidebarCollapsed : false
        }
        isSidebarHidden={currentView === "config"}
        onMenuClick={() => setIsMobileOpen(true)}
      />

      <main
        className={cn(
          "pt-20 transition-all duration-300 ease-in-out min-h-screen",
          currentView !== "config"
            ? isSidebarCollapsed
              ? "lg:ml-[72px]"
              : "lg:ml-[260px]"
            : "ml-0"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8">
          {currentView === "list" ? (
            <div className="space-y-10">
              <AIControlStatic
                onConfigureClick={() => setCurrentView("config")}
                onSessionLogsClick={() => setCurrentView("sessions")}
              />
              <AIControlCharts />
              <AIInstituteTable onRowClick={handleInstituteClick} />
              <AIStudentTable onRowClick={handleStudentClick} />
              <AISessionLogs />
            </div>
          ) : currentView === "institute-detail" ? (
            <AIInstituteDetail
              instituteName={selectedInstitute || "Institute"}
              onBack={() => setCurrentView("list")}
              onSessionLogs={() => setCurrentView("sessions")}
            />
          ) : currentView === "student-detail" ? (
            <AIStudentDetail
              studentName={selectedStudent || "Student"}
              onBack={() => setCurrentView("list")}
            />
          ) : currentView === "sessions" ? (
            <AISessionsView onBack={() => setCurrentView("list")} />
          ) : (
            <AIConfigWizard
              onBack={() => setCurrentView("list")}
              onSuccess={() => setCurrentView("list")}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default AIControl;
