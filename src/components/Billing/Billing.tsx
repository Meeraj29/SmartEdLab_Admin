"use client";

import { useState } from "react";
import BillingStatic from "@/components/Billing/BillingStatic";
import BillingTable from "@/components/Billing/BillingTable";
import EditPlan from "@/components/Billing/EditPlan";
import GenerateInvoice from "@/components/Billing/GenerateInvoice";
// import InvoiceProfile from "@/components/Billing/InvoiceProfile";
import ManagePlans from "@/components/Billing/ManagePlans";
import Header from "@/components/Global/Header";
import Sidebar from "@/components/Global/Sidebar";
import { cn } from "@/lib/utils";

const Billing = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentView, setCurrentView] = useState<
    "list" | "create" | "manage-plans" | "edit-plan"
  >("list");
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(
    null
  );
  const [selectedPlanName, setSelectedPlanName] = useState<string>("");

//   const handleViewProfile = (id: string) => {
//     setSelectedInvoiceId(id);
//     setCurrentView("profile");
//   };

  const handleEditPlan = (name: string) => {
    setSelectedPlanName(name);
    setCurrentView("edit-plan");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden">
      {currentView !== "create" && (
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isMobileOpen={isMobileOpen}
          onMobileClose={() => setIsMobileOpen(false)}
        />
      )}

      <Header
        isSidebarCollapsed={
          currentView !== "create" ? isSidebarCollapsed : false
        }
        isSidebarHidden={currentView === "create"}
        onMenuClick={() => setIsMobileOpen(true)}
      />

      <main
        className={cn(
          "pt-20 transition-all duration-300 ease-in-out min-h-screen pb-10",
          currentView !== "create"
            ? isSidebarCollapsed
              ? "lg:ml-[72px]"
              : "lg:ml-[260px]"
            : "ml-0"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
          {currentView === "list" ? (
            <>
              <BillingStatic
                onGenerateClick={() => setCurrentView("create")}
                onManagePlansClick={() => setCurrentView("manage-plans")}
              />
              <BillingTable />
            </>
          ) : currentView === "create" ? (
            <GenerateInvoice
              onBack={() => setCurrentView("list")}
              onSuccess={() => setCurrentView("list")}
            />
          ) : currentView === "manage-plans" ? (
            <ManagePlans
              onBack={() => setCurrentView("list")}
              onEditPlan={handleEditPlan}
            />
          ) : currentView === "edit-plan" ? (
            <EditPlan
              planName={selectedPlanName}
              onBack={() => setCurrentView("manage-plans")}
            />
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
};

export default Billing;
