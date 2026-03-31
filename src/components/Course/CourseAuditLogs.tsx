"use client";

import {
  ArrowLeft,
  ArrowUpSquare,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileEdit,
  ListFilter,
  Search,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CourseAuditLogsProps {
  onBack: () => void;
}

const CourseAuditLogs = ({ onBack }: CourseAuditLogsProps) => {
  const stats = [
    {
      label: "Total Actions Today",
      value: "1,284",
      trend: "31.3%",
      isTrendUp: true,
      icon: Zap,
      iconBg: "bg-white text-[#2D4A43]",
      cardBg: "bg-[#2D4A43] text-white",
    },
    {
      label: "Courses Edited",
      value: "42",
      trend: "+12.5%",
      isTrendUp: true,
      icon: FileEdit,
      iconBg: "bg-orange-500 text-white",
      cardBg: "bg-white",
    },
    {
      label: "Versions Published",
      value: "18",
      trend: "17.3%",
      isTrendUp: true,
      icon: ArrowUpSquare,
      iconBg: "bg-[#7F3DFF] text-white",
      cardBg: "bg-white",
    },
    {
      label: "Visibility Changes",
      value: "07",
      trend: "12.3%",
      isTrendUp: true,
      icon: Eye,
      iconBg: "bg-[#8B4513] text-white",
      cardBg: "bg-white",
    },
  ];

  const logs = [
    {
      id: 1,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Introduction to UI Design",
      actionType: "Course Edited",
      performedBy: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      role: "Admin",
      status: "Success",
      details: "View Diff",
    },
    {
      id: 2,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Advanced React Patterns",
      actionType: "Version Published",
      performedBy: "James Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      role: "Editor",
      status: "Success",
      details: "v2.1.0 log",
    },
    {
      id: 3,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Product Management 101",
      actionType: "Visibility Change",
      performedBy: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      role: "Admin",
      status: "Failed",
      details: "View Diff",
    },
    {
      id: 4,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Advanced React Patterns",
      actionType: "Version Published",
      performedBy: "James Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      role: "Editor",
      status: "Pending",
      details: "v2.1.0 log",
    },
    {
      id: 5,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Introduction to UI Design",
      actionType: "Course Edited",
      performedBy: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      role: "Admin",
      status: "Success",
      details: "View Diff",
    },
    {
      id: 6,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Advanced React Patterns",
      actionType: "Version Published",
      performedBy: "James Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      role: "Editor",
      status: "Success",
      details: "v2.1.0 log",
    },
    {
      id: 7,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Introduction to UI Design",
      actionType: "Course Edited",
      performedBy: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      role: "Admin",
      status: "Success",
      details: "View Diff",
    },
    {
      id: 8,
      timestamp: "Oct 24, 2023 14:32:01",
      courseName: "Advanced React Patterns",
      actionType: "Version Published",
      performedBy: "James Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      role: "Editor",
      status: "Success",
      details: "v2.1.0 log",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="group flex items-center justify-center p-1 transition-transform hover:-translate-x-1"
            >
              <ArrowLeft className="h-6 w-6 text-slate-900" />
            </button>
            <h1 className="text-[20px] font-semibold font-inter text-foreground tracking-tight">
              Courses & CMS - Audit & Activity Logs
            </h1>
          </div>
          <p className="text-[16px] font-regular font-inter text-black/80 pl-10">
            Track all actions performed within the Courses & CMS system
          </p>
        </div>
        <Button className="h-12 bg-black hover:bg-black/90 text-white px-8 rounded-2xl font-medium font-inter text-[16px] shadow-xl shadow-black/10 transition-all active:scale-95">
          Export Logs
        </Button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={cn(
              "p-8 rounded-[32px] border border-slate-100 bg-white shadow-sm flex items-stretch justify-between h-[180px]",
              stat.cardBg
            )}
          >
            {/* Left Section: Value, Label, Subtext */}
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <h3
                  className={cn(
                    "text-[26px] font-semibold font-inter",
                    idx === 0 ? "text-white" : "text-slate-900"
                  )}
                >
                  {stat.value}
                </h3>
              </div>
              <p
                className={cn(
                  "text-[16px] font-medium font-inter",
                  idx === 0 ? "text-white/90" : "text-slate-800"
                )}
              >
                {stat.label}
              </p>
            </div>

            {/* Right Section: Icon Box, Trend Pill */}
            <div className="flex flex-col justify-between items-end">
              <div
                className={cn(
                  "h-14 w-14 rounded-[20px] flex items-center justify-center shadow-lg shadow-black/5 transition-transform hover:scale-105",
                  stat.iconBg
                )}
              >
                <stat.icon className="h-7 w-7" />
              </div>

              <div
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[14px] font-medium font-inter",
                  idx === 0
                    ? "bg-white/10 text-white"
                    : "bg-emerald-50 text-emerald-600"
                )}
              >
                {stat.isTrendUp ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Logs Table Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-[20px] font-semibold font-inter text-black">
            All Activity & Logs
          </h2>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search course, user, or action..."
              className="h-11 w-full rounded-[14px] border border-slate-100 bg-[#F1F1F1]/50 pl-10 pr-4 text-[16px] font-regular font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10"
            />
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-xl text-[16px] font-regular font-inter text-black cursor-pointer hover:bg-slate-50">
              Course Name <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-xl text-[16px] font-regular font-inter text-black cursor-pointer hover:bg-slate-50">
              Action Type <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-xl text-[16px] font-regular font-inter text-black cursor-pointer hover:bg-slate-50">
              User Role <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-xl text-[16px] font-regular font-inter text-black cursor-pointer hover:bg-slate-50">
              Date Range <Calendar className="h-4 w-4 opacity-50" />
            </div>
          </div>
          <button className="flex items-center gap-2 text-[16px] font-regular font-inter text-[#31564E] cursor-pointer hover:text-slate-900 transition-colors">
            <ListFilter className="h-4 w-4" />
            Reset Filters
          </button>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#ECFDF5]/50 text-black/80 text-[16px] font-medium font-inter">
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Course Name</th>
                <th className="px-6 py-4">Action Type</th>
                <th className="px-8 py-4">Performed By</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-slate-50/50 transition-colors group cursor-default whitespace-nowrap"
                >
                  <td className="px-6 py-5 text-[16px] font-regular font-inter text-black/80">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-5 text-[16px] font-medium font-inter text-black whitespace-nowrap">
                    {log.courseName}
                  </td>
                  <td className="px-6 py-5 text-[16px] font-medium font-inter text-black whitespace-nowrap">
                    {log.actionType}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                        <Image
                          src={log.avatar}
                          alt={log.performedBy}
                          width={36}
                          height={36}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-[16px] font-semibold font-inter text-[#0F172A] whitespace-nowrap">
                        {log.performedBy}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-[16px] font-medium font-inter text-black">
                    {log.role}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={cn(
                        "px-6 py-1.5 rounded-full text-[16px] font-medium font-inter border",
                        log.status === "Success"
                          ? "bg-[#D1FAE5] text-[#047857]/80 border-emerald-100"
                          : log.status === "Failed"
                            ? "bg-[#F43F5E]/30 text-[#F43F5E] border-rose-100"
                            : "bg-[#FF7F38]/30 text-[#F97316] border-orange-100"
                      )}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="text-[16px] font-medium font-inter text-[#31564E] whitespace-nowrap hover:text-slate-900 transition-colors underline-offset-4 hover:underline">
                      {log.details}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Re-designed Pagination to match Image */}
        <div className="pt-8 flex flex-col items-center gap-6">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={onBack}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              <button className="h-10 w-10 flex items-center justify-center rounded-full border-3 border-[#31564E] bg-white text-[#31564E] font-regular font-inter text-[16px] shadow-sm">
                1
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-black font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
                2
              </button>
              <span className="px-2 text-muted-foreground font-medium">
                ...
              </span>
              <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-black font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
                10
              </button>
            </div>

            <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-black/80 transition-all">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <span className="text-[14px] font-regular font-inter text-[#64748B]">
            Showing{" "}
            <span className="font-semibold text-[14px] font-inter text-[#0F172A]">
              1-8
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[14px] font-inter text-[#0F172A]">
              1,540
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseAuditLogs;
