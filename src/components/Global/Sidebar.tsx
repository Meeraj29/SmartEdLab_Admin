"use client";

import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  Building2,
  GraduationCap,
  LayoutDashboard,
  Lock,
  PanelLeftClose,
  PanelLeftOpen,
  Receipt,
  Settings,
  ShieldCheck,
  Users,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import LogoSvg from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

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
      {
        label: "AI Control Center",
        href: "/dashboard/ai-control",
        icon: BrainCircuit,
      },
      { label: "Live Classes", href: "/dashboard/live-classes", icon: Video },
      { label: "Billing", href: "/dashboard/billing", icon: Receipt },
      { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    ],
  },
  {
    title: "System",
    items: [
      {
        label: "Roles & Permissions",
        href: "/dashboard/roles",
        icon: ShieldCheck,
      },
      { label: "Security & IP", href: "/dashboard/security", icon: Lock },
      { label: "System Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const Sidebar = ({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onMobileClose}
      />

      <aside
        className={cn(
          "group/sidebar fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-border transition-all duration-300 ease-in-out bg-[#f4f4f4]",
          // Desktop behavior
          isCollapsed ? "lg:w-[72px]" : "lg:w-[260px]",
          // Mobile behavior
          "w-[260px] transform lg:transform-none",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo Area */}
        <div className="flex h-20 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2.5">
            {/* Logo Icon */}
            <Image
              src={LogoSvg}
              alt="SmartEdLabs Logo"
              width={32}
              height={32}
              className="shrink-0"
            />
            {(!isCollapsed || isMobileOpen) && (
              <span
                className="text-lg font-bold  text-foreground"
                style={{ fontFamily: "var(--font-russo-one)" }}
              >
                SmartEdLabs
              </span>
            )}
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onMobileClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg lg:hidden hover:bg-accent transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-x-hidden px-3 py-4 overflow-y-auto scrollbar-none group-hover/sidebar:[scrollbar-width:thin] group-hover/sidebar:[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
          {navSections.map((section) => (
            <div key={section.title} className="mb-6">
              {/* Section Title */}
              {(!isCollapsed || isMobileOpen) && (
                <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {section.title}
                </p>
              )}
              {isCollapsed && !isMobileOpen && (
                <div className="mb-2 border-b border-border" />
              )}

              {/* Nav Items */}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (onMobileClose) onMobileClose();
                        }}
                        className={cn(
                          "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                          isCollapsed &&
                            !isMobileOpen &&
                            "lg:justify-center lg:px-2",
                          isActive
                            ? "bg-[#31564E] text-white shadow-sm"
                            : "text-black hover:bg-accent hover:text-accent-foreground"
                        )}
                        title={
                          isCollapsed && !isMobileOpen ? item.label : undefined
                        }
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5 shrink-0 transition-colors",
                            isActive
                              ? "text-white"
                              : "text-black group-hover:text-accent-foreground"
                          )}
                        />
                        {(!isCollapsed || isMobileOpen) && (
                          <span className="truncate">{item.label}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Toggle Button (Hidden on Mobile) */}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-16 z-50 hidden lg:flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-4.5 w-4.5" />
          ) : (
            <PanelLeftClose className="h-4.5 w-4.5" />
          )}
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
