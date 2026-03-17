"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  BookOpen,
  BrainCircuit,
  Video,
  Receipt,
  BarChart3,
  ShieldCheck,
  Lock,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import LogoSvg from "@/assets/logo.svg";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      { label: "Direct Students", href: "/dashboard/students", icon: Users },
      { label: "Tutors", href: "/dashboard/tutors", icon: GraduationCap },
      { label: "Institutes", href: "/dashboard/institutes", icon: Building2 },
      { label: "Courses & CMS", href: "/dashboard/courses", icon: BookOpen },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "AI Control Center", href: "/dashboard/ai-control", icon: BrainCircuit },
      { label: "Live Classes", href: "/dashboard/live-classes", icon: Video },
      { label: "Billing", href: "/dashboard/billing", icon: Receipt },
      { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Roles & Permissions", href: "/dashboard/roles", icon: ShieldCheck },
      { label: "Security & IP", href: "/dashboard/security", icon: Lock },
      { label: "System Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "group/sidebar fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border transition-all duration-300 ease-in-out bg-[#f4f4f4]",
        isCollapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo Area */}
      <div className="flex h-16 items-center justify-center border-b border-border px-3">
        <div className="flex items-center gap-2.5">
          {/* Logo Icon */}
          <Image
            src={LogoSvg}
            alt="SmartEdLabs Logo"
            width={36}
            height={36}
            className="shrink-0"
          />
          {!isCollapsed && (
            <span
              className="whitespace-nowrap text-lg tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-russo-one)" }}
            >
              SmartEdLabs
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-x-hidden px-3 py-4 overflow-y-auto scrollbar-none group-hover/sidebar:[scrollbar-width:thin] group-hover/sidebar:[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6">
            {/* Section Title */}
            {!isCollapsed && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </p>
            )}
            {isCollapsed && <div className="mb-2 border-b border-border" />}

            {/* Nav Items */}
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                        isCollapsed && "justify-center px-2",
                        isActive
                          ? "bg-[#31564E] text-white shadow-sm"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      title={isCollapsed ? item.label : undefined}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5 shrink-0 transition-colors",
                          isActive
                            ? "text-white"
                            : "text-muted-foreground group-hover:text-accent-foreground"
                        )}
                      />
                      {!isCollapsed && <span>{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-4 top-[45px] z-50 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <PanelLeftOpen className="h-4 w-4" />
        ) : (
          <PanelLeftClose className="h-4 w-4" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;