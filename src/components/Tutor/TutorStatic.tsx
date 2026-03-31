"use client";

import {
  ChevronDown,
  Plus,
  Presentation,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
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

interface TutorStaticProps {
  onAddClick: () => void;
}

const TutorStatic = ({ onAddClick }: TutorStaticProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const stats = [
    {
      label: "Total Tutors",
      value: "1,284",
      subtext: "Both individual &  Institutes",
      trend: "12.5%",
      isTrendUp: true,
      icon: Users,
      iconBg: "bg-[#FF8206]",
      cardBg: "bg-white",
    },
    {
      label: "Active Tutors",
      value: "1,150",
      subtext: "Include all types",
      trend: "17.3%",
      isTrendUp: true,
      icon: UserCheck,
      iconBg: "bg-[#6B46C1]",
      cardBg: "bg-white",
    },
    {
      label: "Classes Today",
      value: "432",
      subtext: "Include all Courses",
      trend: "5.4%",
      isTrendUp: false,
      icon: Presentation,
      iconBg: "bg-[#8B4513]",
      cardBg: "bg-white",
    },
    {
      label: "Tutor Requests",
      value: "120",
      subtext: "Last 30 days",
      trend: "31.3%",
      isTrendUp: true,
      icon: Users,
      iconBg: "bg-white text-[#2D4A43]",
      cardBg: "bg-[#2D4A43]",
      isDark: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-semibold font-inter text-black">
            Tutor Management
          </h1>
          <p className="text-[16px] font-regular font-inter text-black/80 max-w-2xl mt-1">
            Manage tutors, monitor performance, and review tutor applications
            across all institutes.
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
                  className="h-12 rounded-[16px] px-6 border-slate-200 bg-white text-[#31564E] font-medium font-inter text-[16px] hover:bg-slate-50 gap-2 shadow-sm"
                >
                  Manage Tutors
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
                  Active Tutors
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Inactive Tutors
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Tutor Requests
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Review Applications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <Button
            onClick={onAddClick}
            className="h-12 rounded-[16px] px-6 bg-black text-white font-medium text-[16px] font-inter shadow-lg shadow-black/10 hover:bg-black/95"
          >
            <Plus className="h-5 w-5" />
            Add Tutor
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-[14px] p-5 shadow-sm border border-border/50 relative overflow-hidden flex flex-col justify-between h-[160px]",
              stat.cardBg
            )}
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={cn(
                    "text-[26px] font-semibold font-inter tracking-tight",
                    stat.isDark ? "text-white" : "text-foreground"
                  )}
                >
                  {stat.value}
                </span>
                <p
                  className={cn(
                    "text-[16px] font-medium font-inter mt-1",
                    stat.isDark ? "text-white" : "text-black"
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
                  "text-[14px] font-regular font-inter pr-2",
                  stat.isDark ? "text-white" : "text-black/80"
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
                    : "bg-[#FEE2E2] text-[#EF4444]"
                )}
              >
                {stat.isTrendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-[14px] font-medium font-inter tracking-tight">
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

export default TutorStatic;
