"use client";

import { ChevronLeft, ChevronRight, Clock, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sessionLogsData = [
  {
    student: "Sarah Jenkins",
    id: "#SJ-29402",
    initials: "SJ",
    duration: "15m 20s",
    tokens: "2,450",
    score: 92,
    date: "Oct 24, 2023",
    time: "10:45 AM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    student: "Marcus Thorne",
    id: "#MT-11029",
    initials: "MT",
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
    color: "bg-purple-100 text-purple-600",
  },
  {
    student: "Elena Rodriguez",
    id: "#ER-55321",
    initials: "ER",
    duration: "42m 10s",
    tokens: "8,900",
    score: 41,
    date: "Oct 23, 2023",
    time: "04:30 PM",
    color: "bg-amber-100 text-amber-600",
  },
  {
    student: "Marcus Thorne",
    id: "#MT-11029",
    initials: "MT",
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
    color: "bg-purple-100 text-purple-600",
  },
  {
    student: "Elena Rodriguez",
    id: "#ER-55321",
    initials: "ER",
    duration: "42m 10s",
    tokens: "8,900",
    score: 41,
    date: "Oct 23, 2023",
    time: "04:30 PM",
    color: "bg-amber-100 text-amber-600",
  },
  {
    student: "Marcus Thorne",
    id: "#MT-11029",
    initials: "MT",
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
    color: "bg-purple-100 text-purple-600",
  },
  {
    student: "Sarah Jenkins",
    id: "#SJ-29402",
    initials: "SJ",
    duration: "15m 20s",
    tokens: "2,450",
    score: 92,
    date: "Oct 24, 2023",
    time: "10:45 AM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    student: "Marcus Thorne",
    id: "#MT-11029",
    initials: "MT",
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
    color: "bg-purple-100 text-purple-600",
  },
];

const AIStudentSessionLogs = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-8 flex items-center justify-between border-b border-slate-50">
          <h3 className="text-[20px] font-semibold font-inter text-black tracking-tight">
            Session Logs
          </h3>
          <Button className="h-12 rounded-xl bg-black hover:bg-black/90 text-white flex items-center gap-2.5 px-6 font-medium font-inter text-[16px] shadow-lg shadow-black/10 transition-all active:scale-95">
            <Download className="h-4.5 w-4.5" />
            Export data
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 border-b border-slate-100">
                <th className="px-8 py-5 text-[16px] font-medium font--inter text-black/80">
                  Student Name
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font--inter text-black/80">
                  Duration
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font--inter text-black/80">
                  Tokens Consumed
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font--inter text-black/80">
                  Performance Score
                </th>
                <th className="px-8 py-5 text-[16px] font-medium font--inter text-black/80">
                  Session Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sessionLogsData.map((log, index) => (
                <tr
                  key={index}
                  className={cn(
                    "hover:bg-slate-50/80 transition-all duration-300 group cursor-default",
                    index % 2 === 1 && "bg-slate-50/30"
                  )}
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "h-12 w-12 rounded-full flex items-center justify-center font-bold text-[14px] shrink-0",
                          log.color
                        )}
                      >
                        {log.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[16px] font-medium font-inter text-[#0B1C30] whitespace-nowrap">
                          {log.student}
                        </span>
                        <span className="text-[14px] font-medium font-inter text-[#424754]">
                          ID: {log.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-slate-400 font-bold">
                      <Clock className="h-4 w-4" />
                      <span className="text-[14px] font-semibold font-inter text-[#424754]">
                        {log.duration}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 min-w-[160px]">
                    <div className="flex flex-col gap-2">
                      <span className="text-[14px] font-semibold font-inter text-[#0B1C30]">
                        {log.tokens}
                      </span>
                      <div className="h-1.5 w-full bg-[#DCE9FF] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0058BE] rounded-full"
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
                              ? "bg-amber-500"
                              : "bg-rose-500"
                        )}
                      />
                      <span className="text-[14px] font-semibold font-inter text-[#0B1C30]">
                        {log.score}%
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-medium font-inter text-[#424754]">
                        {log.date}
                      </span>
                      <span className="text-[12px] font-regular font-inter text-[#424754]">
                        {log.time}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-8 flex flex-col items-center gap-6 bg-white">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous Page"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all shadow-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Page 1"
                className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-slate-900 font-regular font-inter text-[16px] border-3 border-[#31564E] shadow-lg shadow-[#31564E]/10"
              >
                1
              </button>
              <button
                type="button"
                aria-label="Page 2"
                className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 font-regular font-inter text-[16px] hover:bg-slate-50 transition-all"
              >
                2
              </button>
              <span className="px-2 text-slate-300 font-black">...</span>
              <button
                type="button"
                aria-label="Page 10"
                className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 font-regular font-inter text-[16px] hover:bg-slate-50 transition-all"
              >
                10
              </button>
            </div>
            <button
              type="button"
              aria-label="Next Page"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-all shadow-xl shadow-black/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <span className="text-[14px] font-regular font-inter text-[#64748B]">
            Showing{" "}
            <span className="text-[#0F172A] text-[14px] font-semibold font-inter">
              1-8
            </span>{" "}
            of{" "}
            <span className="text-[#0F172A] text-[14px] font-semibold font-inter">
              1,540
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIStudentSessionLogs;
