"use client";

import { useState } from "react";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import { cn } from "@/lib/utils";
import AddLiveClass from "./AddLiveClass";
import LiveClassProfile from "./LiveClassProfile";
import LiveClassStatic from "./LiveClassStatic";
import LiveClassTable from "./LiveClassTable";

const LiveClasses = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"list" | "add" | "profile">(
    "list"
  );
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);

  const handleViewProfile = (id: number) => {
    setSelectedClassId(id);
    setCurrentView("profile");
  };

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
          "pt-20 transition-all duration-300 ease-in-out min-h-screen pb-10",
          currentView !== "add"
            ? isSidebarCollapsed
              ? "lg:ml-[72px]"
              : "lg:ml-[260px]"
            : "ml-0"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
          {currentView === "list" ? (
            <>
              <LiveClassStatic onAddClick={() => setCurrentView("add")} />
              <LiveClassTable onViewProfile={handleViewProfile} />
            </>
          ) : currentView === "add" ? (
            <AddLiveClass
              onBack={() => setCurrentView("list")}
              onSuccess={() => setCurrentView("list")}
            />
          ) : (
            <LiveClassProfile
              id={selectedClassId}
              onBack={() => setCurrentView("list")}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default LiveClasses;
