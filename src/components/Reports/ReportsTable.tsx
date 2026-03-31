"use client";

import { Download } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const studentData = [
  {
    id: 1,
    name: "Jane Doe",
    initials: "JD",
    avatarBg: "bg-orange-100 text-orange-600",
    type: "B2C",
    institute: "None (Individual)",
    aiSessions: "3",
    classes: "42",
    lastActivity: "Today, 10:45 AM",
  },
  {
    id: 2,
    name: "Jane Doe",
    initials: "MS",
    avatarBg: "bg-blue-100 text-blue-600",
    type: "B2C",
    institute: "None (Individual)",
    aiSessions: "3",
    classes: "42",
    lastActivity: "Yesterday, 06:20 PM",
  },
  {
    id: 3,
    name: "Anita Lopez",
    initials: "AL",
    avatarBg: "bg-emerald-100 text-emerald-600",
    type: "B2C",
    institute: "None (Individual)",
    aiSessions: "3",
    classes: "42",
    lastActivity: "Today, 10:45 AM",
  },
  {
    id: 4,
    name: "Yuki Kawamura",
    initials: "YK",
    avatarBg: "bg-purple-100 text-purple-600",
    type: "B2C",
    institute: "None (Individual)",
    aiSessions: "3",
    classes: "42",
    lastActivity: "Yesterday, 06:20 PM",
  },
];

const ReportsTable = () => {
  const [activeTab, setActiveTab] = React.useState("Students");
  const tabs = ["Students", "Institutes", "Tutors", "AI Usage", "Revenue"];

  return (
    <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-black/[0.02] p-8 space-y-10 animate-in slide-in-from-bottom-6 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h3 className="text-[20px] font-semibold font-inter text-black tracking-tight">
          Institute Performance
        </h3>
        <Button className="h-12 rounded-[16px] px-8 bg-black text-white font-medium font-inter text-[16px] shadow-xl shadow-black/10 hover:bg-black/95 gap-2 transition-all active:scale-[0.98]">
          <Download className="h-5 w-5" />
          Export Excel format
        </Button>
      </div>

      {/* Modern Tabs */}
      <div className="bg-slate-50/80 p-1.5 rounded-[20px] w-fit flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-6 py-2.5 rounded-[16px] text-[14px] font-regular font-inter transition-all text-[#0F172A]",
              activeTab === tab
                ? "bg-white text-slate-800 shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* High Fidelity Table */}
      <div className="rounded-[24px] border border-slate-50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]/50 text-black/80 font-medium font-inter text-[16px]">
              <th className="px-8 py-6">Student Name</th>
              <th className="px-8 py-6">Type</th>
              <th className="px-8 py-6">Institute</th>
              <th className="px-8 py-6">AI Session</th>
              <th className="px-8 py-6">Classes</th>
              <th className="px-8 py-6">Last Activity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {studentData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "h-10 w-10 rounded-full flex items-center justify-center text-[12px] font-bold font-publicsans",
                        row.avatarBg
                      )}
                    >
                      {row.initials}
                    </div>
                    <span className="text-[14px] font-medium font-inter text-[#0F172A]">
                      {row.name}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-5">
                  <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-bold font-inter border border-[#DBEAFE]">
                    {row.type}
                  </span>
                </td>

                <td className="px-8 py-5">
                  <span className="text-[14px] font-medium font-inter text-[#0F172A]">
                    {row.institute}
                  </span>
                </td>

                <td className="px-8 py-5">
                  <span className="text-[16px] font-medium font-inter text-black">
                    {row.aiSessions}
                  </span>
                </td>

                <td className="px-8 py-5">
                  <span className="text-[16px] font-medium font-inter text-black">
                    {row.classes}
                  </span>
                </td>

                <td className="px-8 py-5">
                  <span className="text-[14px] font-regular font-inter text-[#64748B]">
                    {row.lastActivity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTable;
