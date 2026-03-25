"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const instituteData = [
  {
    name: "Global Tech University",
    tokens: "4.2M",
    students: 450,
    sessions: 3402,
    limit: "5.0M",
    usage: 84,
    status: "Normal",
  },
  {
    name: "St. Mary's Academy",
    tokens: "1.1M",
    students: 120,
    sessions: 940,
    limit: "2.5M",
    usage: 44,
    status: "Near Limit",
  },
  {
    name: "Global Tech University",
    tokens: "4.2M",
    students: 450,
    sessions: 3402,
    limit: "5.0M",
    usage: 84,
    status: "Normal",
  },
  {
    name: "St. Mary's Academy",
    tokens: "1.1M",
    students: 120,
    sessions: 940,
    limit: "2.5M",
    usage: 44,
    status: "Near Limit",
  },
];

interface AIInstituteTableProps {
  onRowClick: (name: string) => void;
}

const AIInstituteTable = ({ onRowClick }: AIInstituteTableProps) => {
  return (
    <div className="mt-10 space-y-4">
      <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-8 flex items-center justify-between border-b border-slate-50">
          <h3 className="text-[20px] font-black text-slate-900 tracking-tight">
            Institute-wise Token Usage
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
                  Institute Name
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                  Tokens Used
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                  Active Students
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                  Session
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                  Monthly Limits
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                  Usage
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-left">
                  Status
                </th>
                <th className="px-8 py-5 text-[12px] font-bold uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {instituteData.map((inst, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick(inst.name)}
                  className={cn(
                    "hover:bg-slate-50/80 transition-all duration-300 group cursor-pointer",
                    index % 2 === 1 && "bg-slate-50/30"
                  )}
                >
                  <td className="px-8 py-6">
                    <span className="text-[15px] font-black text-slate-900 whitespace-nowrap">
                      {inst.name}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[15px] font-black text-slate-900">
                      {inst.tokens}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[14px] font-bold text-slate-600">
                      {inst.students}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[14px] font-bold text-slate-600">
                      {inst.sessions}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[14px] font-bold text-slate-600">
                      {inst.limit}
                    </span>
                  </td>
                  <td className="px-8 py-6 min-w-[140px]">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          inst.status === "Near Limit"
                            ? "bg-[#FF7A00]"
                            : "bg-[#2EE898]"
                        )}
                        style={{ width: `${inst.usage}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-4 py-1.5 text-[12px] font-black uppercase tracking-widest",
                        inst.status === "Normal"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          : "bg-orange-50 text-orange-600 border border-orange-100"
                      )}
                    >
                      {inst.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-transparent hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-900 group">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-8 flex flex-col items-center gap-6 bg-white">
          <div className="flex items-center gap-4">
            <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all shadow-sm">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-slate-900 font-bold border-2 border-[#1E293B] shadow-lg shadow-black/5">
                1
              </button>
              <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all">
                2
              </button>
              <span className="px-2 text-slate-300 font-black">...</span>
              <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all">
                10
              </button>
            </div>
            <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-all shadow-xl shadow-black/20">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <span className="text-[13px] font-bold text-slate-400 mb-2">
            Showing <span className="text-slate-900">1-8</span> of{" "}
            <span className="text-slate-900">1,540</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIInstituteTable;
