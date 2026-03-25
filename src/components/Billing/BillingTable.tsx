"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronDown,
  MoreVertical,
  Search,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface BillingTableProps {
  onViewProfile: (id: string) => void;
}

const b2cData = [
  {
    id: "1",
    name: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    avatar: "/avatars/sarah.png",
    planType: "Premium AI",
    status: "Active",
    cycle: "Monthly",
    renewalDate: "Oct 24, 2026",
    amount: "₹399",
  },
  {
    id: "2",
    name: "Mark Robinson",
    email: "m.robinson@outlook.com",
    avatar: "/avatars/mark.png",
    planType: "Standard",
    status: "Renewal Due",
    cycle: "Annualy",
    renewalDate: "Oct 24, 2026",
    amount: "₹3,399",
  },
  {
    id: "3",
    name: "Elena Sofia",
    email: "elena.sofia@edu.com",
    avatar: "/avatars/elena.png",
    planType: "Premium AI",
    status: "Active",
    cycle: "Monthly",
    renewalDate: "Oct 24, 2026",
    amount: "₹399",
  },
  {
    id: "4",
    name: "Kevin Miller",
    email: "k.miller@gmail.com",
    avatar: "/avatars/kevin.png",
    planType: "Standard",
    status: "Renewal Due",
    cycle: "Annualy",
    renewalDate: "Oct 24, 2026",
    amount: "₹3,399",
  },
];

const b2bData = [
  {
    id: "i1",
    name: "Oxford Academy",
    domain: "oxford-edu.com",
    adminEmail: "M.Clark@Oxford.Edu",
    plan: "ENTERPRISE",
    limit: "Unlimited",
    cycle: "Monthly",
    renewalDate: "Oct 24, 2026",
    amount: "₹3,399",
    status: "Active",
  },
  {
    id: "i2",
    name: "Skyline Tech",
    domain: "skyline.ai",
    adminEmail: "Admin@Skyline.Ai",
    plan: "Business",
    limit: "Unlimited",
    cycle: "Monthly",
    renewalDate: "Oct 24, 2026",
    amount: "₹399",
    status: "Active",
  },
  {
    id: "i3",
    name: "Global Languages",
    domain: "global-langs.org",
    adminEmail: "Support@Global-Langs.Org",
    plan: "ENTERPRISE",
    limit: "1000",
    cycle: "Annually",
    renewalDate: "Oct 24, 2026",
    amount: "₹3,399",
    status: "Active",
  },
  {
    id: "i4",
    name: "Beacon School",
    domain: "beacon-edu.io",
    adminEmail: "John.Doe@Beacon.Io",
    plan: "Starter",
    limit: "800",
    cycle: "Monthly",
    renewalDate: "Oct 24, 2026",
    amount: "₹399",
    status: "Active",
  },
];

const BillingTable = ({ onViewProfile }: BillingTableProps) => {
  const [activeTab, setActiveTab] = React.useState<"b2c" | "b2b">("b2c");

  const getPlanStyle = (plan: string) => {
    switch (plan.toUpperCase()) {
      case "ENTERPRISE":
        return "bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]";
      case "BUSINESS":
      case "BUISINESS":
        return "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]";
      case "STARTER":
      case "STANDARD":
        return "bg-slate-50 text-slate-500 border-slate-200";
      default:
        return "bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]";
    }
  };

  const currentDisplayData =
    activeTab === "b2c" ? [...b2cData, ...b2cData] : [...b2bData, ...b2bData];

  return (
    <div className="mt-8 bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-black/5 p-6 md:p-8 space-y-8 animate-in slide-in-from-bottom-6 duration-700 overflow-hidden">
      {/* Search and Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-8 border-b border-slate-50 w-fit">
          {[
            { id: "b2c", label: "Student Subscriptions (B2C)" },
            { id: "b2b", label: "Institute SaaS (B2B)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-2 py-3 text-[17px] font-black transition-all relative",
                activeTab === tab.id
                  ? "text-[#1E293B]"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#31564E] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-[420px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Tutor, class, email id..."
            className="h-12 w-full rounded-[14px] border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all"
          />
        </div>
      </div>

      {/* Filters Bar */}
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
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span className="text-xs font-medium text-slate-500">
              {filter.label}:
            </span>
            <span className="text-xs font-bold text-slate-800">
              {filter.value}
            </span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        ))}

        <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#31564E] transition-colors ml-auto mr-2 group">
          <SlidersHorizontal className="h-4 w-4 group-hover:scale-110 transition-transform" />
          Reset Filters
        </button>
      </div>

      {/* Dynamic Table Section */}
      <div className="rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/30 text-slate-500 font-bold text-[13px] border-b border-slate-100">
                <th className="px-8 py-6">
                  {activeTab === "b2c" ? "Student" : "Institute Name"}
                </th>
                <th className="px-8 py-6">
                  {activeTab === "b2c" ? "Plan Type" : "Admin Email"}
                </th>
                <th className="px-8 py-6">
                  {activeTab === "b2c" ? "Status" : "Plan"}
                </th>
                <th className="px-8 py-6">
                  {activeTab === "b2c" ? "Billing Cycle" : "Students Limit"}
                </th>
                <th className="px-8 py-6">
                  {activeTab === "b2c" ? "Renewal Date" : "Billing Cycle"}
                </th>
                <th className="px-8 py-6">
                  {activeTab === "b2c" ? "Amount" : "Renewal Date"}
                </th>
                {activeTab === "b2b" && (
                  <th className="px-8 py-6 text-right pr-12">Amount</th>
                )}
                <th className="px-8 py-6 text-center">Status</th>
                <th className="px-8 py-6 text-right pr-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentDisplayData.map((item: any, idx) => (
                <tr
                  key={`${activeTab}-${idx}`}
                  className="hover:bg-slate-50/50 transition-colors group cursor-pointer animate-in fade-in duration-300"
                  onClick={() => onViewProfile(item.id)}
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      {activeTab === "b2c" ? (
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                          {item.avatar ? (
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <User className="h-5 w-5 text-slate-400" />
                          )}
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500">
                          <Building2 className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[14px] font-black text-slate-800 tracking-tight leading-tight whitespace-nowrap">
                          {item.name}
                        </span>
                        <span className="text-[12px] font-medium text-slate-400">
                          {activeTab === "b2c" ? item.email : item.domain}
                        </span>
                      </div>
                    </div>
                  </td>

                  {activeTab === "b2c" ? (
                    <>
                      <td className="px-8 py-4">
                        <span
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-[11px] font-black border uppercase tracking-tight whitespace-nowrap inline-flex items-center justify-center min-w-[100px]",
                            getPlanStyle(item.planType)
                          )}
                        >
                          {item.planType}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={cn(
                              "h-2 w-2 rounded-full",
                              item.status === "Active"
                                ? "bg-[#10B981]"
                                : "bg-[#F97316]"
                            )}
                          />
                          <span
                            className={cn(
                              "text-[14px] font-bold",
                              item.status === "Active"
                                ? "text-[#10B981]"
                                : "text-[#F97316]"
                            )}
                          >
                            {item.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-[14px] font-black text-slate-800">
                          {item.cycle}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-[14px] font-bold text-slate-600">
                          {item.renewalDate}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right pr-12">
                        <span className="text-[15px] font-black text-slate-900">
                          {item.amount}
                        </span>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-8 py-4">
                        <span className="text-[13px] font-bold text-slate-600">
                          {item.adminEmail}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <span
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-[11px] font-black border uppercase tracking-tight whitespace-nowrap inline-flex items-center justify-center min-w-[100px]",
                            getPlanStyle(item.plan)
                          )}
                        >
                          {item.plan}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-[14px] font-black text-slate-800">
                          {item.limit}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-[14px] font-black text-slate-800">
                          {item.cycle}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-[14px] font-bold text-slate-600">
                          {item.renewalDate}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right pr-12">
                        <span className="text-[15px] font-black text-slate-900">
                          {item.amount}
                        </span>
                      </td>
                    </>
                  )}

                  <td className="px-8 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#10B981]" />
                      <span className="text-[14px] font-bold text-[#10B981]">
                        Active
                      </span>
                    </div>
                  </td>

                  <td
                    className="px-8 py-4 text-right pr-8"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-slate-300 hover:text-slate-600 transition-colors p-2 rounded-lg hover:bg-slate-50">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Container */}
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="flex items-center justify-center gap-6">
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {[1, 2, "...", 10].map((page, i) => (
              <button
                key={i}
                className={cn(
                  "h-10 w-10 flex items-center justify-center rounded-full text-sm font-bold transition-all",
                  page === 1
                    ? "border-2 border-[#31564E] text-[#31564E]"
                    : "text-slate-400 hover:text-slate-600"
                )}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/95 transition-all">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <span className="text-sm font-bold text-slate-400">
          Showing <span className="text-slate-900">1-8</span> of{" "}
          <span className="text-slate-900">1,540</span>
        </span>
      </div>
    </div>
  );
};

export default BillingTable;
