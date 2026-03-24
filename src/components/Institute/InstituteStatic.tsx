"use client";

import {
  Building2,
  ChevronDown,
  GraduationCap,
  Microscope,
  MonitorPlay,
  Plus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface InstituteStaticProps {
  onAddClick: () => void;
}

const InstituteStatic = ({ onAddClick }: InstituteStaticProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const stats = [
    {
      label: "Total Institutes",
      value: "1,284",
      subtext: "142 this month",
      trend: "12.5%",
      isTrendUp: true,
      icon: Building2,
      iconBg: "bg-[#FF8206]",
      cardBg: "bg-white",
    },
    {
      label: "Total Students",
      value: "458.2k",
      subtext: "Include all institutes",
      trend: "31.3%",
      isTrendUp: true,
      icon: GraduationCap,
      iconBg: "bg-white text-[#2D4A43]",
      cardBg: "bg-[#2D4A43]",
      isDark: true,
    },
    {
      label: "Total Tutors",
      value: "12.4K",
      subtext: "Include all institutes",
      trend: "17.3%",
      isTrendUp: true,
      icon: MonitorPlay,
      iconBg: "bg-[#8B5CF6]",
      cardBg: "bg-white",
    },
    {
      label: "In Lab Mode",
      value: "86",
      subtext: "Include all plan types",
      trend: "5.4%",
      isTrendUp: false,
      icon: Microscope,
      iconBg: "bg-[#92400E]",
      cardBg: "bg-white",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Institute Management
          </h1>
          <p className="text-md font-normal text-slate-500 max-w-2xl mt-1">
            Manage all partner institutes, monitor usage limits, security settings, and platform activity across the global infrastructure.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 rounded-[16px] px-6 border-slate-200 bg-white text-slate-600 font-bold hover:bg-slate-50 gap-2 shadow-sm"
                >
                  Manage Institutes
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 opacity-70 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[200px] rounded-xl p-1"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Active Institutes
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Inactive Institutes
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Pending Approvals
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Review Applications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <Button
            onClick={onAddClick}
            className="h-12 rounded-[16px] px-6 bg-black text-white font-bold shadow-lg shadow-black/10 hover:bg-black/95 gap-1.5"
          >
            <Plus className="h-5 w-5" />
            Add Institute
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-[20px] p-5 shadow-sm border border-border/50 relative overflow-hidden flex flex-col justify-between h-[160px]",
              stat.cardBg
            )}
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={cn(
                    "text-2xl font-semibold tracking-tight",
                    stat.isDark ? "text-white" : "text-foreground"
                  )}
                >
                  {stat.value}
                </span>
                <p
                  className={cn(
                    "text-md font-medium mt-1",
                    stat.isDark ? "text-slate-300" : "text-slate-500"
                  )}
                >
                  {stat.label}
                </p>
              </div>
              <div
                className={cn(
                  "h-14 w-14 rounded-[20px] flex items-center justify-center shadow-md shadow-black/5",
                  stat.iconBg
                )}
              >
                <stat.icon
                  className={cn("h-7 w-7", !stat.isDark && "text-white")}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p
                className={cn(
                  "text-[14px] font-medium pr-2",
                  stat.isDark ? "text-slate-400" : "text-slate-500"
                )}
              >
                {stat.subtext}
              </p>
              <div
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                  stat.isTrendUp
                    ? stat.isDark
                      ? "bg-[#32c99715] text-[#32C997]"
                      : "bg-[#D1FAE5] text-[#10B981]"
                    : stat.isDark 
                      ? "bg-red-500/10 text-red-400"
                      : "bg-[#FEE2E2] text-[#EF4444]"
                )}
              >
                {stat.isTrendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-[11px] font-black tracking-tight">
                  {stat.isTrendUp ? "+" : "-"}
                  {stat.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstituteStatic;
