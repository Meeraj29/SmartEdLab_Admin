"use client";

import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Search,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LiveClassTableProps {
  onViewProfile?: (id: number) => void;
}

const LiveClassTable = ({
  onViewProfile: _onViewProfile,
}: LiveClassTableProps) => {
  const [activeTab, setActiveTab] = React.useState<
    "all" | "completed" | "cancelled"
  >("all");

  const classes = [
    {
      id: 1,
      title: "Business English Advanced",
      tutor: "Dr. Sarah Jenkins",
      batch: "Batch: B-204 (Corporate Essentials)",
      date: "Mar 10, 2026",
      time: "14:00 - 15:30",
      duration: "90 Min",
      students: "12 / 15 Students",
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Technical Vocabulary",
      tutor: "James Wilson",
      batch: "Batch: E-55 (STEM Focus)",
      date: "Mar 10, 2026",
      time: "16:30 - 17:30",
      duration: "90 Min",
      students: "18 / 20 Students",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "Speaking Workshop",
      tutor: "Dr. Sarah Jenkins",
      batch: "Batch: P-444 (Lead Excellence)",
      date: "Mar 10, 2026",
      time: "17:00 - 18:30",
      duration: "90 Min",
      students: "10 / 10 Students",
      status: "Ongoing",
    },
  ];

  const getStatus = (baseStatus: string) => {
    if (activeTab === "completed") return "Completed";
    if (activeTab === "cancelled") return "Cancelled";
    return baseStatus;
  };

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "bg-[#D1FAE5] text-[#10B981]";
      case "Completed":
        return "bg-[#E0F2FE] text-[#0284C7]";
      case "Cancelled":
        return "bg-[#FEE2E2] text-[#EF4444]";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const displayData = [...classes, ...classes, ...classes]
    .slice(0, 9)
    .map((item) => ({
      ...item,
      statusDisplay: getStatus(item.status),
    }));

  return (
    <div className="mt-8 space-y-6 animate-in fade-in duration-500">
      {/* Tabs and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center border-b border-border w-fit">
          {[
            { id: "all", label: "All Live Classes" },
            { id: "completed", label: "Completed" },
            { id: "cancelled", label: "Cancelled" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-6 py-3 text-[20px] font-semibold font-inter transition-all relative",
                activeTab === tab.id
                  ? "text-[#31564E]"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#31564E] transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-[420px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Tutor, class, email id..."
            className="h-12 w-full rounded-[14px] border border-slate-200 bg-[#F1F5F9]/30 pl-11 pr-4 text-[16px] font-regular font-inter placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-medium"
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {[
          { label: "Tutors", value: "All" },
          { label: "Institute", value: "All" },
          { label: "Course", value: "All" },
          { label: "Today", value: "" },
          { label: "Status", value: "All" },
          { label: "Sort By", value: "A-Z" },
        ].map((filter, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors shadow-sm"
          >
            {filter.label === "Today" ? (
              <Calendar className="h-4 w-4 text-slate-400" />
            ) : (
              <span className="text-[16px] font-regular font-inter text-black/70">
                {filter.label}:
              </span>
            )}
            <span className="text-[16px] font-regular font-inter text-black">
              {filter.value || filter.label}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </div>
        ))}

        <button className="flex items-center gap-2 text-[16px] font-regular font-inter text-[#31564E] hover:text-foreground transition-colors ml-auto mr-2">
          <SlidersHorizontal className="h-4 w-4" />
          Reset Filters
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayData.map((item, idx) => (
          <div
            key={`${activeTab}-${idx}`}
            className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col space-y-4 animate-in fade-in zoom-in-95 duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-[17px] font-semibold font-inter text-[#31564E] tracking-tight leading-tight whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-[14px] font-regular font-inter text-black">
                  {item.tutor}
                </p>
                <p className="text-[12px] font-regular font-inter text-[#64748B]">
                  {item.batch}
                </p>
              </div>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-[14px] font-regular font-inter flex items-center gap-1.5",
                  getBadgeStyle(item.statusDisplay)
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full shrink-0",
                    item.statusDisplay === "Ongoing"
                      ? "bg-emerald-500"
                      : item.statusDisplay === "Completed"
                        ? "bg-blue-500"
                        : "bg-red-500"
                  )}
                />
                {item.statusDisplay}
              </span>
            </div>

            {/* Details Box */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 grid grid-cols-2 gap-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[16px] font-regular font-inter text-black">
                  {item.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[16px] font-regular font-inter text-black">
                  {item.time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[16px] font-regular font-inter text-black">
                  {item.duration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[16px] font-regular font-inter text-black">
                  {item.students}
                </span>
              </div>
            </div>

            {/* Buttons Area */}
            <div className="flex flex-col gap-3 pt-2">
              {activeTab === "cancelled" ? (
                <>
                  <Button
                    variant="outline"
                    className="h-11 rounded-xl border-[#31564E] text-[#31564E] font-medium font-inter hover:bg-[#31564E]/5 transition-all text-[16px] w-full"
                  >
                    View Logs
                  </Button>
                  <p className="text-[16px] font-medium font-inter text-white text-center">
                    Reason: Tutor Emergency
                  </p>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 h-11 rounded-xl border-[#31564E]/30 text-[#31564E] font-medium font-inter hover:bg-[#31564E]/5 transition-all md:text-[16px] text-[14px]"
                  >
                    View Attendance
                  </Button>
                  <Button className="flex-1 h-11 rounded-xl bg-black text-white font-medium font-inter hover:bg-black/90 transition-all md:text-[16px] text-[14px] shadow-lg shadow-black/10">
                    {activeTab === "completed"
                      ? "View Recording"
                      : "Join as Observer"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-8 py-8 w-full">
        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-200/50 text-slate-500 hover:bg-slate-200 transition-all">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          {[1, 2, "...", 10].map((page, i) => (
            <button
              key={i}
              className={cn(
                "h-10 w-10 flex items-center justify-center rounded-full text-[16px] font-regular font-inter transition-all",
                page === 1
                  ? "border-3 border-[#31564E] text-[#31564E]"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-all">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default LiveClassTable;
