"use client";

import {
  ArrowLeft,
  Download,
  MessageSquare,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AIInstituteAnalytics from "./AIInstituteAnalytics";
import AIInstituteLimits from "./AIInstituteLimits";
import AIInstituteSpecificLogs from "./AIInstituteSpecificLogs";

interface AIInstituteDetailProps {
  instituteName: string;
  onBack: () => void;
  onSessionLogs: () => void;
}

const instituteStats = [
  {
    title: "Total AI Sessions Today",
    value: "8,420",
    trend: "+12.5%",
    trendUp: true,
    icon: MessageSquare,
    iconBg: "bg-[#FF7A00]",
    cardStyle: "bg-white text-slate-900 border-none shadow-sm",
  },
  {
    title: "Total token used",
    value: "1.2M",
    trend: "+5.2%",
    trendUp: true,
    icon: Zap,
    iconBg: "bg-[#7F3DFF]",
    cardStyle: "bg-white text-slate-900 border-none shadow-sm",
  },
  {
    title: "Avg. Performance",
    value: "88%",
    trend: "0%",
    trendUp: true,
    icon: Star,
    iconBg: "bg-[#8B4513]",
    cardStyle: "bg-white text-slate-900 border-none shadow-sm",
  },
  {
    title: "Active Students",
    value: "2.1k",
    trend: "31.3%",
    trendUp: true,
    icon: Users,
    iconBg: "bg-white text-[#31564E]",
    cardStyle: "bg-[#31564E] text-white border-none shadow-sm",
  },
];

const AIInstituteDetail = ({
  instituteName,
  onBack,
  onSessionLogs,
}: AIInstituteDetailProps) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation Header */}
      <div className="flex flex-col gap-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 group text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[14px] font-bold">AI Control Center</span>
        </button>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h2 className="text-[28px] font-black text-slate-900 tracking-tight">
              {instituteName}
            </h2>
            <p className="text-[14px] font-medium text-slate-400 max-w-2xl leading-relaxed">
              Monitor Institutes AI interaction sessions, token consumption, and
              performance metrics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={onSessionLogs}
              className="h-12 rounded-xl px-8 border-slate-400 text-slate-700 hover:bg-slate-50 text-[15px] font-bold transition-all"
            >
              Session logs
            </Button>
            <Button className="h-12 rounded-xl px-8 bg-black hover:bg-black/90 text-white flex items-center gap-2.5 text-[15px] font-bold shadow-lg shadow-black/10 transition-all active:scale-95">
              <Download className="h-4.5 w-4.5" />
              Export data
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {instituteStats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col rounded-[32px] p-8 min-h-[170px] shadow-sm transition-all hover:shadow-md border border-slate-100 group",
              stat.cardStyle
            )}
          >
            <div className="flex justify-between items-start">
              <span className="text-[32px] font-black tracking-tighter leading-none">
                {stat.value}
              </span>
              <div
                className={cn(
                  "h-14 w-14 rounded-[20px] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110",
                  stat.iconBg
                )}
              >
                <stat.icon
                  className={cn(
                    "h-7 w-7",
                    stat.iconBg.includes("bg-white")
                      ? "text-[#31564E]"
                      : "text-white"
                  )}
                />
              </div>
            </div>

            <div className="mt-auto flex items-end justify-between">
              <span
                className={cn(
                  "text-[15px] font-bold leading-tight max-w-[120px]",
                  stat.cardStyle.includes("text-white")
                    ? "text-white/80"
                    : "text-slate-900"
                )}
              >
                {stat.title}
              </span>
              <div
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-black",
                  stat.trend === "0%"
                    ? "bg-[#D1FAE5] text-[#059669]"
                    : stat.trendUp
                      ? "bg-[#D1FAE5] text-[#059669]"
                      : "bg-rose-50 text-rose-600",
                  stat.cardStyle.includes("text-white") &&
                    "bg-white/10 text-white"
                )}
              >
                {stat.trendUp ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Limits Section */}
      <AIInstituteLimits />

      {/* Institute Specific Logs Section */}
      <AIInstituteSpecificLogs />

      {/* Analytics Insight Section */}
      <AIInstituteAnalytics />
      {/* Session Logs for this Institute */}
      {/* <div className="mt-12">
          <AIInstituteSessionLogs />
      </div> */}
    </div>
  );
};

export default AIInstituteDetail;
