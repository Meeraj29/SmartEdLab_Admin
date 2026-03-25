"use client";

import {
  Banknote,
  Bot,
  Building2,
  Download,
  GraduationCap,
  Play,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ReportsStatic = () => {
  const stats = [
    {
      label: "Total Students",
      value: "12,482",
      subtext: "7.2k B2C • 5.2k Inst.",
      trend: "12%",
      isTrendUp: true,
      icon: Users,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      label: "Total Institute",
      value: "148",
      subtext: "142k Activate",
      trend: "4%",
      isTrendUp: true,
      icon: Building2,
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-50",
    },
    {
      label: "Total Tutors",
      value: "850",
      subtext: "Monthly Earnings",
      trend: "8%",
      isTrendUp: true,
      icon: GraduationCap,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-50",
    },
    {
      label: "AI Usage",
      value: "4.2M",
      subtext: "1240 sessions",
      trend: "2%",
      isTrendUp: false,
      icon: Bot,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-50",
    },
    {
      label: "Revenue",
      value: "1240",
      subtext: "92% Attendance",
      trend: "15%",
      isTrendUp: true,
      icon: Play,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50",
    },
    {
      label: "Revenue",
      value: "84.2k",
      subtext: "Monthly Earnings",
      trend: "10%",
      isTrendUp: true,
      icon: Banknote,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50",
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-700">
      {/* Target Image Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-[#1E293B] tracking-tight">
            Reports
          </h1>
          <p className="text-[15px] font-bold text-slate-400 max-w-3xl leading-snug">
            Comprehensive monitoring of AI performance metrics, institutional
            throughput, <br className="hidden lg:block" />
            and global learning engagement.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-12 rounded-[14px] px-6 border-[#31564E] text-[#31564E] font-bold hover:bg-emerald-50 transition-all gap-2"
          >
            <Download className="h-5 w-5" />
            Export as CSV
          </Button>
          <Button className="h-12 rounded-[14px] px-6 bg-black text-white font-bold shadow-xl shadow-black/10 hover:bg-black/95 gap-2 transition-all">
            <Download className="h-5 w-5" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Stats Cards Row (6 items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] border border-slate-100 p-6 flex flex-col justify-between h-[180px] shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start">
              <div
                className={cn(
                  "h-10 w-10 rounded-xl flex items-center justify-center shrink-0",
                  stat.iconBg,
                  stat.iconColor
                )}
              >
                <stat.icon className="h-5 w-5" />
              </div>
              <div
                className={cn(
                  "flex items-center gap-0.5 px-2 py-1 rounded-full text-[11px] font-black",
                  stat.isTrendUp
                    ? "text-[#10B981] bg-[#10B981]/10"
                    : "text-[#EF4444] bg-[#EF4444]/10"
                )}
              >
                {stat.isTrendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                ~{stat.trend}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[28px] font-black text-slate-900 tracking-tighter leading-none">
                {stat.value}
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-slate-800 leading-tight tracking-tight">
                  {stat.label}
                </span>
                <span className="text-[11px] font-bold text-slate-300 leading-tight">
                  {stat.subtext}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsStatic;
