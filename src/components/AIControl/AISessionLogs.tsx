"use client";

import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

import { cn } from "@/lib/utils";

const sessionLogs = [
  {
    duration: "15m 20s",
    tokens: "2,450",
    score: 92,
    date: "Oct 24, 2023",
    time: "10:45 AM",
  },
  {
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
  },
  {
    duration: "42m 10s",
    tokens: "8,900",
    score: 41,
    date: "Oct 23, 2023",
    time: "04:30 PM",
  },
  {
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
  },
];

const AISessionLogs = () => {
  return (
    <div className="mt-10 space-y-4">
      <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-8 border-b border-slate-50">
          <h3 className="text-[20px] font-semibold font-inter text-black tracking-tight">
            Recent Session Logs
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 border-b border-slate-100">
                <th className="px-8 py-5 text-[16px] font-medium font-inter text-black/80 text-left">
                  Session Date
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font-inter text-black/80 text-left">
                  Duration
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font-inter text-black/80 text-left">
                  Tokens Consumed
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font-inter text-black/80 text-left">
                  Performance Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sessionLogs.map((log, index) => (
                <tr
                  key={index}
                  className={cn(
                    "hover:bg-slate-50/80 transition-all duration-300 group cursor-default",
                    index % 2 === 1 && "bg-slate-50/30"
                  )}
                >
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-medium fonnt-inter text-[#424754] whitespace-nowrap">
                        {log.date}
                      </span>
                      <span className="text-[12px] font-regular font-inter text-[#424754] uppercase tracking-tight">
                        {log.time}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-[14px] font-semibold font-inter text-[#424754]">
                        {log.duration}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 min-w-[200px]">
                    <div className="flex flex-col gap-2">
                      <span className="text-[14px] font-semibold font-inter text-[#0B1C30]">
                        {log.tokens}
                      </span>
                      <div className="h-1.5 w-[70%] bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0052CC] rounded-full"
                          style={{
                            width: `${Math.min((parseInt(log.tokens.replace(/,/g, "")) / 10000) * 100, 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "h-2 w-2 rounded-full",
                          log.score >= 90
                            ? "bg-emerald-500"
                            : log.score >= 60
                              ? "bg-[#0058BE]"
                              : "bg-rose-500"
                        )}
                      />
                      <span className="text-[14px] font-semibold font-inter text-[#0B1C30]">
                        {log.score}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
            <div className="pt-6 flex flex-col items-center gap-6">
              <div className="flex items-center justify-between w-full">
                <button className="h-12 w-12 flex items-center justify-center rounded-full border border-border bg-white text-slate-400 hover:bg-slate-50 shadow-sm transition-all">
                  <ChevronLeft className="h-5 w-5" />
                </button>
      
                <div className="flex items-center gap-2">
                  <button className="h-10 w-10 flex items-center justify-center rounded-full border-3 border-[#31564E] bg-white text-[#31564E] font-regular font-inter text-[16px] shadow-sm">
                    1
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-muted-foreground font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
                    2
                  </button>
                  <span className="px-2 text-muted-foreground font-regular font-inter text-[16px]">
                    ...
                  </span>
                  <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-muted-foreground font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
                    10
                  </button>
                </div>
      
                <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-black/80 transition-all">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <span className="text-[14px] font-semibold font-inter text-[#64748B]">
                Showing{" "}
                <span className="font-[#0F172A] font-semibold font-inter text-[14px] text-foreground">
                  1-8
                </span>{" "}
                of{" "}
                <span className="font-[#0F172A] font-semibold font-inter text-[14px] text-foreground">
                  1,540
                </span>
              </span>
            </div>
      </div>
    </div>
  );
};

export default AISessionLogs;
