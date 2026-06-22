"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const studentData = [
  {
    name: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    tokens: "4.2M",
    active: 450,
    sessions: 3402,
    limit: "5.0M",
    usage: 84,
    status: "Normal",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Mark Robinson",
    email: "m.robinson@outlook.com",
    tokens: "1.1M",
    active: 120,
    sessions: 940,
    limit: "2.5M",
    usage: 44,
    status: "Near Limit",
    avatar: "https://i.pravatar.cc/150?u=mark",
  },
  {
    name: "Elena Sofia",
    email: "elena.sofia@edu.com",
    tokens: "4.2M",
    active: 450,
    sessions: 3402,
    limit: "5.0M",
    usage: 84,
    status: "Normal",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    tokens: "1.1M",
    active: 120,
    sessions: 940,
    limit: "2.5M",
    usage: 44,
    status: "Near Limit",
    avatar: "https://i.pravatar.cc/150?u=sarah2",
  },
];

interface AIStudentTableProps {
  onRowClick: (name: string) => void;
}

const AIStudentTable = ({ onRowClick }: AIStudentTableProps) => {
  return (
    <div className="mt-10 space-y-4">
      <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-8 flex items-center justify-between border-b border-slate-50">
          <h3 className="text-[24px] font-semibold fonnt-inter text-black/80 tracking-tight">
            Direct students Usage
          </h3>
          <Button className="h-12 rounded-xl bg-black hover:bg-black/90 text-white flex items-center gap-2.5 px-6 font-medium font-inter text-[16px] shadow-lg shadow-black/10 transition-all active:scale-95">
            <Download className="h-4.5 w-4.5" />
            Export data
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 border-b border-slate-100 whitespace-nowrap">
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Student Name
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Tokens Used
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Active Students
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Session
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Monthly Limits
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Usage
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Status
                </th>
                <th className="px-8 py-5 text-[16px] font-medium fonnt-inter text-black/80">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {studentData.map((student, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick(student.name)}
                  className={cn(
                    "hover:bg-slate-50/80 transition-all duration-300 group cursor-pointer",
                    index % 2 === 1 && "bg-slate-50/30"
                  )}
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <Image
                          src={student.avatar}
                          alt={student.name}
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[16px] font-semibold font-inter text-[#0F172A] whitespace-nowrap">
                          {student.name}
                        </span>
                        <span className="text-[14px] font-regular font-inter text-[#64748B]">
                          {student.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[16px] font-medium font-inter text-black">
                      {student.tokens}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[16px] font-medium font-inter text-black/80">
                      {student.active}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[16px] font-medium font-inter text-black">
                      {student.sessions}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[16px] font-medium font-inter text-black">
                      {student.limit}
                    </span>
                  </td>
                  <td className="px-8 py-6 min-w-[140px]">
                    <div className="h-2 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          student.status === "Near Limit"
                            ? "bg-[#4ADE80]"
                            : "bg-[#F97316]"
                        )}
                        style={{ width: `${student.usage}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-4 py-1.5 text-[16px] font-medium font-inter whitespace-nowrap",
                        student.status === "Normal"
                          ? "bg-[#D1FAE5] text-[#047857]/80 border border-[#D1FAE5]"
                          : "bg-[#F97316]/20 text-[#FB923C]/80 border border-[#F97316]/20"
                      )}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-transparent hover:bg-slate-100 transition-all text-black hover:text-slate-900 group">
                      <MoreVertical className="h-5 w-5" />
                    </button>
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

export default AIStudentTable;
