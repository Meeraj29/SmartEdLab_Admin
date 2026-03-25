"use client";

import { BellRing, ChevronDown, Menu, Search, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isSidebarCollapsed: boolean;
  isSidebarHidden?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  onMenuClick?: () => void;
}

const Header = ({
  isSidebarCollapsed,
  isSidebarHidden = false,
  pageTitle = "Dashboard Overview",
  pageSubtitle = "Welcome back, super admin",
  onMenuClick,
}: HeaderProps) => {
  const pathname = usePathname();
  const isStudentsPage = pathname === "/dashboard/students";
  const isTutorsPage = pathname === "/dashboard/tutors";
  const isInstitutesPage = pathname === "/dashboard/institutes";
  const isCoursesPage = pathname === "/dashboard/courses";
  const isAIControlPage = pathname === "/dashboard/ai-control";
  const isLiveClassesPage = pathname === "/dashboard/live-classes";
  const isBillingPage = pathname === "/dashboard/billing";
  const isReportsPage = pathname === "/dashboard/reports";
  const isSpecialPage =
    isStudentsPage ||
    isTutorsPage ||
    isInstitutesPage ||
    isCoursesPage ||
    isAIControlPage ||
    isLiveClassesPage ||
    isBillingPage ||
    isReportsPage;

  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 flex h-20 items-center gap-4 shadow bg-white px-4 md:px-6 transition-all duration-300 ease-in-out",
        "left-0", // Default left for mobile
        !isSidebarHidden &&
          (isSidebarCollapsed ? "lg:left-[72px]" : "lg:left-[260px]") // Desktop offset
      )}
    >
      <div className="flex items-center gap-3 shrink-0">
        {/* Company Logo and Name when Sidebar is Hidden */}
        {isSidebarHidden && (
          <div className="flex items-center gap-3 mr-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#31564E]/10">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-xl font-bold text-foreground hidden md:block">
              SmartEdLabs
            </span>
          </div>
        )}

        {/* Menu Button for Mobile */}
        <button
          onClick={onMenuClick}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg lg:hidden hover:bg-accent transition-colors",
            isSidebarHidden && "hidden"
          )}
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>

        {/* Left Section - Page Title (Desktop only) */}
        {!isSpecialPage && !isSidebarHidden && (
          <div className="hidden md:flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-foreground line-clamp-1 leading-tight">
              {pageTitle}
            </h1>
            <p className="text-sm font-medium text-slate-400">{pageSubtitle}</p>
          </div>
        )}
      </div>

      <div
        className={cn(
          "hidden md:block transition-all duration-300",
          isSpecialPage || isSidebarHidden
            ? "flex-1"
            : "ml-auto w-full max-w-[400px]"
        )}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="h-11 w-full rounded-2xl border border-border bg-[#F1F1F1] pl-10 pr-4 text-sm font-light text-black placeholder:text-muted-foreground outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
        {/* Search Icon for mobile screens */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground md:hidden hover:bg-accent transition-colors">
          <Search className="h-5 w-5" />
        </button>

        {/* Notification Bell */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground shadow-sm"
          aria-label="Notifications"
        >
          <BellRing className="h-5 w-5" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 md:gap-3 rounded-lg p-1 md:px-2 md:py-1.5 transition-colors hover:bg-accent text-left">
          {/* Avatar */}
          <div className="border border-border rounded-full p-[2px]">
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black text-white">
              <User className="h-5 w-5 md:h-6 md:w-6" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-bold text-sm md:text-[15px] leading-tight text-foreground truncate max-w-[120px]">
              Super Admin
            </span>
            <span className="hidden md:block text-[12px] text-muted-foreground font-normal max-w-[150px]">
              superadmin@smartedlabs.com
            </span>
          </div>
          <ChevronDown className="hidden sm:block h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
