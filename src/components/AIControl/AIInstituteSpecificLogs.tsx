"use client";

import { ChevronLeft, ChevronRight, Download, Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const specificLogs = [
  {
    student: "Sarah Jenkins",
    id: "#SJ-29402",
    institute: "Global Language Acad",
    type: "B2B",
    duration: "15m 20s",
    tokens: "2,450",
    score: 92,
    date: "Oct 24, 2023",
    time: "10:45 AM",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    student: "Marcus Thorne",
    id: "#MT-11029",
    institute: "Global Language Acad",
    type: "B2B",
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    student: "Elena Rodriguez",
    id: "#ER-55321",
    institute: "Global Language Acad",
    type: "B2B",
    duration: "42m 10s",
    tokens: "8,900",
    score: 41,
    date: "Oct 23, 2023",
    time: "04:30 PM",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    student: "Marcus Thorne",
    id: "#MT-11029",
    institute: "Global Language Acad",
    type: "B2B",
    duration: "08m 45s",
    tokens: "1,120",
    score: 64,
    date: "Oct 24, 2023",
    time: "09:12 AM",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

const AIInstituteSpecificLogs = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
      {/* Header Section */}
      <div className="p-8 flex items-center justify-between border-b border-slate-50">
        <h3 className="text-[20px] font-black text-slate-900 tracking-tight">
          Institute
        </h3>
        <Button className="h-12 rounded-xl bg-black hover:bg-black/90 text-white flex items-center gap-2.5 px-6 font-bold text-[14px] shadow-lg shadow-black/10 transition-all active:scale-95">
          <Download className="h-4.5 w-4.5" />
          Export data
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 border-b border-slate-100">
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest">
                Student Name
              </th>
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                Institute
              </th>
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                Duration
              </th>
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                Tokens Consumed
              </th>
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                Performance Score
              </th>
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                Session Date
              </th>
              <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {specificLogs.map((log, index) => (
              <tr
                key={index}
                className={cn(
                  "hover:bg-slate-50/80 transition-all duration-300 group cursor-default",
                  index % 2 === 1 && "bg-slate-50/30"
                )}
              >
                <td className="px-8 py-6 text-normal">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 relative">
                      <Image
                        src={log.avatar}
                        alt={log.student}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-black text-slate-900 whitespace-nowrap">
                        {log.student}
                      </span>
                      <span className="text-[12px] font-bold text-slate-400">
                        ID: {log.id}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-col gap-1.5 min-w-[150px]">
                    <span className="text-[14px] font-bold text-slate-700 whitespace-nowrap">
                      {log.institute}
                    </span>
                    <span className="inline-flex items-center w-fit rounded-full px-3 py-0.5 text-[10px] font-black bg-purple-50 text-purple-500 tracking-widest">
                      {log.type}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className="text-[14px] font-bold text-slate-500">
                    {log.duration}
                  </span>
                </td>
                <td className="px-8 py-6 min-w-[160px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[15px] font-black text-slate-900">
                      {log.tokens}
                    </span>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
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
                            ? "bg-amber-500"
                            : "bg-rose-500"
                      )}
                    />
                    <span className="text-[15px] font-black text-slate-800">
                      {log.score}%
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-700">
                      {log.date}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {log.time}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button
                    aria-label="View Details"
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-transparent hover:bg-slate-100 transition-all text-[#0052CC] hover:text-[#0052CC] group"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-8 flex flex-col items-center gap-6 bg-white">
        <div className="flex items-center gap-4">
          <button
            aria-label="Previous Page"
            className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all shadow-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <button
              aria-label="Page 1"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-slate-900 font-bold border-2 border-[#31564E] shadow-lg shadow-[#31564E]/10"
            >
              1
            </button>
            <button
              aria-label="Page 2"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all"
            >
              2
            </button>
            <span className="px-2 text-slate-300 font-black">...</span>
            <button
              aria-label="Page 10"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all"
            >
              10
            </button>
          </div>
          <button
            aria-label="Next Page"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-all shadow-xl shadow-black/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <span className="text-[13px] font-bold text-slate-400">
          Showing <span className="text-slate-900">1-8</span> of{" "}
          <span className="text-slate-900">1,540</span>
        </span>
      </div>
    </div>
  );
};

export default AIInstituteSpecificLogs;
