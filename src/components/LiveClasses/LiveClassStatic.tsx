"use client";

import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Plus,
  Radio,
  TrendingDown,
  TrendingUp,
  XCircle,
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

interface LiveClassStaticProps {
  onAddClick: () => void;
}

const LiveClassStatic = ({ onAddClick }: LiveClassStaticProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const stats = [
    {
      label: "Total Today",
      value: "42 Classes",
      subtext: "Include all types",
      trend: "12.5%",
      isTrendUp: true,
      icon: Calendar,
      iconBg: "bg-[#FF8206]",
      cardBg: "bg-white",
    },
    {
      label: "Ongoing",
      value: "12 Classes",
      subtext: "Include all types",
      trend: "31.3%",
      isTrendUp: true,
      icon: Radio,
      iconBg: "bg-white text-[#2D4A43]",
      cardBg: "bg-[#2D4A43]",
      isDark: true,
    },
    {
      label: "Completed",
      value: "25",
      subtext: "Include all",
      trend: "17.3%",
      isTrendUp: true,
      icon: CheckCircle2,
      iconBg: "bg-[#8B5CF6]",
      cardBg: "bg-white",
    },
    {
      label: "Cancelled Today",
      value: "05",
      subtext: "Include all",
      trend: "5.4%",
      isTrendUp: false,
      icon: XCircle,
      iconBg: "bg-[#FF4D4D]",
      cardBg: "bg-white",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-foreground tracking-tight">
            Live Classes
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-2xl">
            Monitor and manage all live classes across your platform in
            real-time.
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
                  className="h-12 rounded-[14px] px-6 border-[#31564E] bg-white text-[#31564E] font-bold hover:bg-slate-50 gap-2 shadow-sm transition-all"
                >
                  Manage Live Classes
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
                className="w-[220px] rounded-xl p-1"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Active Sessions
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Scheduled for Tomorrow
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer font-bold text-slate-600">
                  Past Recordings
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <Button
            onClick={onAddClick}
            className="h-12 rounded-[14px] px-6 bg-black text-white font-bold shadow-lg shadow-black/10 hover:bg-black/95 gap-1.5 transition-all"
          >
            <Plus className="h-5 w-5" />
            Schedule A Class
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-[24px] p-6 shadow-sm border border-border/40 relative overflow-hidden flex flex-col justify-between h-[170px] transition-all hover:shadow-md",
              stat.cardBg
            )}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span
                  className={cn(
                    "text-3xl font-black tracking-tighter",
                    stat.isDark ? "text-white" : "text-[#1E293B]"
                  )}
                >
                  {stat.value}
                </span>
                <p
                  className={cn(
                    "text-[15px] font-bold mt-1",
                    stat.isDark ? "text-slate-200" : "text-[#1E293B]"
                  )}
                >
                  {stat.label}
                </p>
              </div>
              <div
                className={cn(
                  "h-14 w-14 rounded-[18px] flex items-center justify-center shadow-lg shadow-black/5",
                  stat.iconBg
                )}
              >
                <stat.icon
                  className={cn("h-7 w-7", !stat.isDark && "text-white")}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p
                className={cn(
                  "text-[13px] font-medium opacity-60",
                  stat.isDark ? "text-slate-300" : "text-slate-500"
                )}
              >
                {stat.subtext}
              </p>
              <div
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-sm",
                  stat.isTrendUp
                    ? stat.isDark
                      ? "bg-[#32c997]/15 text-[#32C997]"
                      : "bg-[#D1FAE5] text-[#10B981]"
                    : stat.isDark
                      ? "bg-red-500/15 text-red-400"
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

export default LiveClassStatic;
