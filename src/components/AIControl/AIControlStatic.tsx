"use client";

import {
  BarChart3,
  Building2,
  Download,
  Receipt,
  RotateCw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const aiStats = [
  {
    title: "Total Token Usage",
    value: "12.4M",
    subtitle: "v.s. last month 11.2M",
    trend: "+12.5%",
    trendUp: true,
    icon: RotateCw,
    iconBg: "bg-[#FF7A00]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "Active AI Sessions",
    value: "1,280",
    subtitle: "Current live interactive",
    trend: "+5.2%",
    trendUp: true,
    icon: BarChart3,
    iconBg: "bg-[#7F3DFF]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "Institutes Active",
    value: "42",
    subtitle: "3 Pending activation",
    trend: "0%",
    trendUp: true,
    icon: Building2,
    iconBg: "bg-[#8B4513]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "Estimated Cost",
    value: "$14,290",
    subtitle: "Projected for end of month",
    trend: "31.3%",
    trendUp: true,
    icon: Receipt,
    iconBg: "bg-white text-[#31564E]",
    cardStyle: "bg-[#31564E] text-white",
  },
];

interface AIControlStaticProps {
  onConfigureClick: () => void;
  onSessionLogsClick: () => void;
}

const AIControlStatic = ({
  onConfigureClick: _,
  onSessionLogsClick,
}: AIControlStaticProps) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-[24px] font-semibold font-inter text-black leading-tight">
            AI Control Center
          </h2>
          <p className="text-[16px] font-regular font-inter text-black/80 max-w-lg">
            Platform-wide AI usage and operational insights across all
            institutes and modules.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={onSessionLogsClick}
            variant="outline"
            className="h-12 rounded-xl px-6 border-slate-400 text-[#31564E] hover:bg-slate-50 text-[16px] font-medium font-inter"
          >
            Session logs
          </Button>
          <Button className="h-12 rounded-xl px-6 bg-black  hover:bg-black/90 text-white flex items-center gap-2.5 text-[16px] font-medium font-inter shadow-lg shadow-black/10">
            <Download className="h-4.5 w-4.5" />
            Export data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aiStats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col justify-between rounded-[24px] p-6 shadow-sm border border-border/40 hover:shadow-md transition-all group",
              stat.cardStyle
            )}
            style={{ minHeight: "155px" }}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-[26px] font-semibold  font-inter tracking-tight">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-[16px] font-medium font-inter",
                    stat.cardStyle.includes("text-white")
                      ? "text-white"
                      : "text-black"
                  )}
                >
                  {stat.title}
                </span>
              </div>
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl shadow-lg shadow-black/5 group-hover:scale-105 transition-transform",
                  stat.iconBg,
                  !stat.iconBg.includes("text") && "text-white"
                )}
              >
                <stat.icon className="h-6 w-6" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span
                className={cn(
                  "text-[14px] font-regular font-inter",
                  stat.cardStyle.includes("text-white")
                    ? "text-white/60"
                    : "text-black/80"
                )}
              >
                {stat.subtitle}
              </span>
              <div
                className={cn(
                  "flex items-center gap-1 rounded-full px-2.5 py-1 text-[14px] font-medium font-inter border",
                  stat.trend === "0%"
                    ? "bg-[#D1FAE5] text-[#059669] border-[#A7F3D0]"
                    : stat.trendUp
                      ? "bg-[#D1FAE5] text-[#059669] border-[#A7F3D0]"
                      : "bg-rose-50 text-rose-600 border-rose-100",
                  stat.cardStyle.includes("text-white") &&
                    "bg-white/10 border-white/20 text-white"
                )}
              >
                {stat.trendUp ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                )}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIControlStatic;
