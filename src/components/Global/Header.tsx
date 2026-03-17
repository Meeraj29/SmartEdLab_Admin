"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isSidebarCollapsed: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
}

const Header = ({
  isSidebarCollapsed,
  pageTitle = "Dashboard Overview",
  pageSubtitle = "Welcome back, super admin",
}: HeaderProps) => {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur-md transition-all duration-300 ease-in-out",
        isSidebarCollapsed ? "left-[72px]" : "left-[260px]"
      )}
    >
      {/* Left Section - Page Title */}
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold leading-tight text-foreground">
          {pageTitle}
        </h1>
        <p className="text-sm text-muted-foreground">{pageSubtitle}</p>
      </div>

      {/* Center / Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-64 rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </div>

        {/* Notification Bell */}
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {/* Notification dot */}
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-border md:block" />

        {/* User Profile */}
        <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-accent">
          {/* Avatar */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
            SA
          </div>
          <div className="hidden flex-col text-left md:flex">
            <span className="text-sm font-medium leading-tight text-foreground">
              Super Admin
            </span>
            <span className="text-xs text-muted-foreground">
              superadmin@...
            </span>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
        </button>
      </div>
    </header>
  );
};

export default Header;
