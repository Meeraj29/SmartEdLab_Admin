"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronDown,
  MoreVertical,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InstituteTableProps {
  onViewProfile: () => void;
}

const InstituteTable = ({ onViewProfile }: InstituteTableProps) => {
  const institutes = [
    {
      id: 1,
      name: "Oxford Academy",
      website: "oxford-edu.com",
      adminEmail: "M.Clark@Oxford.Edu",
      plan: "ENTERPRISE",
      studentsUsage: { current: 850, total: 1000 },
      tutors: { current: 42, total: 50 },
      tokens: { current: "1.2M", total: "2M" },
      mode: "Lab",
      status: "Active",
    },
    {
      id: 2,
      name: "Skyline Tech",
      website: "skyline.ai",
      adminEmail: "Admin@Skyline.Ai",
      plan: "Business",
      studentsUsage: { current: 120, total: 500 },
      tutors: { current: 12, total: 20 },
      tokens: { current: "450k", total: "800k" },
      mode: "Open",
      status: "Active",
    },
    {
      id: 3,
      name: "Global Languages",
      website: "global-langs.org",
      adminEmail: "Support@Global-Langs.Org",
      plan: "ENTERPRISE",
      studentsUsage: { current: 2840, total: 3000 },
      tutors: { current: 145, total: 150 },
      tokens: { current: "4.8M", total: "5M" },
      mode: "Lab",
      status: "Active",
    },
    {
      id: 4,
      name: "Beacon School",
      website: "beacon-edu.io",
      adminEmail: "John.Doe@Beacon.Io",
      plan: "Starter",
      studentsUsage: { current: 45, total: 100 },
      tutors: { current: 3, total: 5 },
      tokens: { current: "85k", total: "100k" },
      mode: "Open",
      status: "Active",
    },
  ];

  const displayData = [...institutes, ...institutes]; // Duplicate to show more rows like in image

  return (
    <div className="mt-8 bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden p-6 md:p-8 space-y-8">
      {/* Top Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all group"
          >
            <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </button>
          <h2 className="text-[20px] font-semibold font-inter text-foreground tracking-tight">
            Institutes
          </h2>
        </div>
        <div className="relative w-full max-w-[400px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Tutor, email id..."
            className="h-12 w-full rounded-2xl border border-slate-100 bg-slate-50/50 pl-11 pr-4 text-[16px] font-inter font-regular placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-medium"
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-50/50 rounded-[20px] p-4 border border-slate-100/50 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {[
            { label: "Plan Type", value: "All" },
            { label: "Mode", value: "All" },
            { label: "AI Usage", value: "All" },
            { label: "Status", value: "All" },
            { label: "Sort By", value: "A-Z" },
          ].map((filter, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <span className="text-[16px] font-regular font-inter text-black/70">
                {filter.label}:
              </span>
              <span className="text-[16px] font-regular font-inter text-black">
                {filter.value}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 text-[16px] font-regular font-inter text-[#31564E] hover:text-foreground transition-colors mr-2">
          <SlidersHorizontal className="h-4 w-4" />
          Reset Filters
        </button>
      </div>

      {/* Table Section */}
      <div className="rounded-[24px] bg-white shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-black/80 font-medium font-inter text-[16px] border-b border-slate-50  whitespace-nowrap">
                <th className="px-6 py-6">Institute Name</th>
                <th className="px-6 py-6">Admin Email</th>
                <th className="px-6 py-6">Plan</th>
                <th className="px-6 py-6">Students Usage</th>
                <th className="px-6 py-6">Tutors</th>
                <th className="px-6 py-6 text-center">AI Tokens</th>
                <th className="px-6 py-6 text-center">Mode</th>
                <th className="px-6 py-6 text-center">Status</th>
                <th className="px-6 py-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {displayData.map((item, idx) => {
                const usagePercent = Math.min(
                  (item.studentsUsage.current / item.studentsUsage.total) * 100,
                  100
                );

                return (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                    onClick={onViewProfile}
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[16px] font-semibold font-inter text-foreground whitespace-nowrap">
                            {item.name}
                          </span>
                          <span className="text-[14px] text-black/70 font-regular font-inter">
                            {item.website}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="text-[16px] font-medium font-inter text-black tracking-tight">
                        {item.adminEmail}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-[16px] font-medium font-inter  border",
                          item.plan === "ENTERPRISE"
                            ? "bg-[#FF7F38]/30 text-black border-[#FF7F38]"
                            : item.plan === "Business"
                              ? "bg-[#007FFF]/30 text-black border-[#007FFF]"
                              : "bg-[#999999]/30 text-black border-[#999999]"
                        )}
                      >
                        {item.plan}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="w-[120px] space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-[#0F172A] font-medium text-[12px] font-inter">
                            {item.studentsUsage.current}/
                            {item.studentsUsage.total}
                          </span>
                          <span className="text-[#0F172A] text-[10px] font-bold font-inter">
                            {Math.round(usagePercent)}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              usagePercent > 90
                                ? "bg-[#FF3939]"
                                : "bg-[#007FFF]"
                            )}
                            style={{ width: `${usagePercent}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="text-[16px] font-medium font-inter text-black">
                        {item.tutors.current}/{item.tutors.total}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="text-[16px] font-medium font-inter text-black/80">
                        {item.tokens.current}/{item.tokens.total}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span
                        className={cn(
                          "px-4 py-1.5 rounded-full text-[16px] font-medium font-inter",
                          item.mode === "Lab"
                            ? "bg-[#8A38F5]/30 text-black/80 border border-[#8A38F5]"
                            : "bg-[#E6E6E6]/30 text-black/80 border border-[#E6E6E6]"
                        )}
                      >
                        {item.mode}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-[16px] font-medium font-inter text-[#248F5F]">
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td
                      className="px-6 py-6 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-black mx-auto">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

{/* Pagination Refined */}
<div className="flex flex-col items-center gap-6 md:gap-8 mt-6 pb-4 w-full">
  {/* Container: Allows horizontal scroll on tiny phones, but justifies normally on desktop */}
  <div className="flex items-center justify-between w-full px-2 gap-2 overflow-x-auto no-scrollbar md:overflow-visible">
    
    {/* Prev Button - Scaled down for mobile */}
    <button className="h-10 w-10 min-w-[40px] md:h-14 md:w-14 flex shrink-0 items-center justify-center rounded-full bg-white border border-slate-100 text-slate-400 transition-all">
      <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
    </button>

    {/* Page Numbers - Adjusted gaps for mobile */}
    <div className="flex items-center gap-1.5 md:gap-4">
      {[1, 2, "...", 10].map((page, i) => (
        <button
          key={i}
         
          className={cn(
            "h-9 w-9 md:h-12 md:w-12 flex shrink-0 items-center justify-center rounded-full border transition-all shadow-sm",
            page === 1
              ? "border-[#31564E] border-2 md:border-3 text-black bg-white"
              : "border-slate-100 text-slate-400 bg-white hover:bg-slate-50",
            // Hide the "..." or specific pages on extremely small screens if necessary 
            // page === 2 ? "hidden sm:flex" : "flex" 
          )}
        >
          <span className="text-[14px] md:text-[16px] font-regular font-inter">
            {page}
          </span>
        </button>
      ))}
    </div>

    {/* Next Button - Scaled down for mobile */}
    <button className="h-10 w-10 min-w-[40px] md:h-14 md:w-14 flex shrink-0 items-center justify-center rounded-full bg-black text-white hover:scale-105 transition-all">
      <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  </div>

  {/* Stats Text */}
  <span className="text-[13px] md:text-[14px] font-regular font-inter text-slate-400 whitespace-nowrap">
    Showing{" "}
    <span className="text-black font-semibold tracking-tight">
      1-8
    </span>{" "}
    of{" "}
    <span className="text-black font-semibold tracking-tight">
      1,540
    </span>
  </span>
</div>
    </div>
  );
};

export default InstituteTable;
