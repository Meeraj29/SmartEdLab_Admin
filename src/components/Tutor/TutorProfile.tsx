"use client";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  Cast,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  Clock,
  Download,
  ExternalLink,
  Info,
  Languages,
  Link2,
  Lightbulb,
  Mail,
  MessageSquare,
  Mic,
  MonitorSmartphone,
  MoreVertical,
  PhoneCall,
  Plus,
  Presentation,
  Shield,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
  Video,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TutorProfileProps {
  onBack: () => void;
}

const TutorProfile = ({ onBack }: TutorProfileProps) => {
  const [activeTab, setActiveTab] = React.useState("Overview");
  const [sessionFilter, setSessionFilter] = React.useState("This Week");

  const overviewStats = [
    {
      value: "482",
      label: "Live Classes",
      trend: "12 %",
      trendType: "up",
      icon: Video,
      color: "bg-[#FF8206]",
      shadow: "shadow-orange-200",
    },
    {
      value: "4.9",
      label: "Avg Rating",
      trend: "17.3 %",
      trendType: "up",
      icon: Star,
      color: "bg-[#8B5CF6]",
      shadow: "shadow-purple-200",
    },
    {
      value: "1.2k",
      label: "Total Students",
      trend: "5.4 %",
      trendType: "down",
      icon: Presentation,
      color: "bg-[#92400E]",
      shadow: "shadow-orange-100",
    },
    {
      value: "94%",
      label: "Completion Rate",
      trend: "31.3 %",
      trendType: "up",
      icon: CheckCircle2,
      color: "bg-white",
      textColor: "text-white",
      cardBg: "bg-[#31564E]",
      isHighlighted: true,
    },
  ];

  const performanceStats = [
    {
      value: "88%",
      label: "Course Completion",
      trend: "31.3 %",
      trendType: "up",
      icon: CheckCircle2,
      color: "bg-white",
      textColor: "text-white",
      cardBg: "bg-[#31564E]",
      isHighlighted: true,
    },
    {
      value: "92%",
      label: "Attendance rate",
      trend: "12 %",
      trendType: "up",
      icon: Video,
      color: "bg-[#FF8206]",
      shadow: "shadow-orange-200",
    },
    {
      value: "4.9/5",
      label: "Feedback Rating",
      trend: "17.3 %",
      trendType: "up",
      icon: Star,
      color: "bg-[#8B5CF6]",
      shadow: "shadow-purple-200",
    },
    {
      value: "1,240",
      label: "AI Corrections",
      trend: "5.4 %",
      trendType: "down",
      icon: Presentation,
      color: "bg-[#92400E]",
      shadow: "shadow-orange-100",
    },
  ];

  const currentStats =
    activeTab === "Performance" ? performanceStats : overviewStats;

  return (
    <div className="space-y-6">
      {/* Navigation Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-3 group transition-all"
      >
        <div className="h-8 w-8 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-all group-hover:bg-slate-50 shadow-sm">
          <ArrowLeft className="h-4 w-4 text-slate-600" />
        </div>
        <span className="text-[15px] font-bold text-slate-800">Tutors</span>
      </button>

      {/* Main Profile Identity Card */}
      <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center md:items-start">
            {/* Rounded-Square Avatar with Status Indicator */}
            <div className="relative shrink-0">
              <div className="h-[120px] w-[120px] rounded-[20px] overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                  alt="Sarah Jenkins"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
            </div>

            {/* Core Professional Details */}
            <div className="space-y-4 py-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <h2 className="text-[24px] font-bold text-[#1E293B] tracking-tight">
                  Sarah Jenkins
                </h2>
                <span className="bg-[#E7F9F1] text-[#059669] px-3 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase border border-[#059669]/10">
                  ACTIVE
                </span>
              </div>

              <p className="text-[15px] font-semibold text-slate-500 -mt-2">
                Ph.D In Pysics
              </p>

              <div className="flex flex-col gap-4 pt-1">
                <div className="flex flex-col md:flex-row md:items-center gap-x-12 gap-y-3">
                  <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-500">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <span className="text-[13px] font-medium tracking-tight">
                      sarah.j@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-500">
                    <PhoneCall className="h-4 w-4 text-slate-400" />
                    <span className="text-[13px] font-medium tracking-tight">
                      +91087654321
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-x-12 gap-y-3">
                  <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-500">
                    <Building2 className="h-4 w-4 text-slate-400" />
                    <span className="text-[13px] font-medium tracking-tight">
                      Global Language Academy
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-500">
                    <Languages className="h-4 w-4 text-slate-400" />
                    <span className="text-[13px] font-medium tracking-tight">
                      Spanish (N), English (C2)
                    </span>
                  </div>
                </div>

                {/* Integrated Assigned Courses Section */}
                <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-3 pt-2">
                  <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.1em] whitespace-nowrap">
                    ASSIGNED:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Advanced Spanish",
                      "Business Communication",
                      "IELTS Prep",
                    ].map((course) => (
                      <div
                        key={course}
                        className="px-3 py-1 rounded-lg bg-[#F1F3FE] text-[#4751BB] text-[11px] font-black tracking-tight border border-blue-100/50"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Administrative Actions Suite */}
          <div className="flex items-center gap-8 self-center lg:self-start pt-2">
            <button className="text-[13px] font-semibold text-[#FF4D4D] hover:underline whitespace-nowrap">
              Suspend Account
            </button>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="h-12 rounded-2xl px-6 border-[#31564E]/40 text-[#31564E] font-bold flex items-center justify-between gap-10 hover:bg-slate-50"
              >
                Manage Tutors
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
              <Button className="h-12 rounded-2xl px-6 bg-black hover:bg-black/90 text-white font-bold flex items-center gap-3 shadow-xl shadow-black/10">
                <Plus className="h-4 w-4" />
                Add Tutor
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Analytics Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-100 px-4 pt-4 overflow-x-auto no-scrollbar">
        {[
          "Overview",
          "Performance",
          "Live Class Activity",
          "Student Feedback",
          "AI Usage Monitoring",
          "Login & Activity Logs",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative pb-4 text-[14px] font-bold transition-all whitespace-nowrap",
              activeTab === tab
                ? "text-slate-900"
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#31564E]" />
            )}
          </button>
        ))}
      </div>

      {/* Statistics Dashboard Cards */}
      {!["Live Class Activity", "Student Feedback", "AI Usage Monitoring", "Login & Activity Logs"].includes(activeTab) && <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {currentStats.map((stat, i) => (
          <div
            key={i}
            className={cn(
              "rounded-[24px] p-6 shadow-sm border flex items-center justify-between transition-hover hover:shadow-md",
              stat.isHighlighted
                ? "bg-[#31564E] border-[#31564E]/10 shadow-xl hover:shadow-2xl"
                : "bg-white border-slate-50"
            )}
          >
            <div
              className={cn("space-y-1", stat.textColor || "text-slate-800")}
            >
              <h3 className="text-[32px] font-black tracking-tight">
                {stat.value}
              </h3>
              <p
                className={cn(
                  "text-[13px] font-bold",
                  stat.isHighlighted ? "opacity-80" : "text-slate-400"
                )}
              >
                {stat.label}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div
                className={cn(
                  "h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg",
                  stat.isHighlighted
                    ? "bg-white text-[#31564E] shadow-emerald-900/20"
                    : cn(stat.color, "text-white", stat.shadow)
                )}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <div
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black tracking-tight",
                  stat.isHighlighted
                    ? "bg-[#EBF9F1]/20 text-[#D1FAE5] border border-[#D1FAE5]/10"
                    : stat.trendType === "up"
                      ? "bg-[#EBF9F1] text-[#059669]"
                      : "bg-[#FEE2E2] text-[#EF4444]"
                )}
              >
                {stat.trendType === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>}

      {/* Dynamic Tab Content Implementation */}
      {activeTab === "Live Class Activity" ? (
        <>
          {/* Live Class Activity — 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Upcoming Sessions */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">12</h3>
                <p className="text-[13px] font-bold text-slate-400">Upcoming Sessions</p>
                <p className="text-[12px] font-semibold text-slate-500">Next: <span className="font-black text-slate-700">2:00 PM</span></p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[#FF8206] flex items-center justify-center shadow-lg shadow-orange-200 text-white shrink-0">
                <CalendarDays className="h-6 w-6" />
              </div>
            </div>

            {/* Complete Sessions — highlighted dark card */}
            <div className="rounded-[24px] p-6 bg-[#31564E] border border-[#31564E]/10 shadow-xl flex items-center justify-between hover:shadow-2xl transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-white">148</h3>
                <p className="text-[13px] font-bold text-white/70">Complete Sessions</p>
                <p className="text-[12px] font-semibold text-white/60">Attendance: <span className="font-black text-white">92%</span></p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-emerald-900/20 text-[#31564E] shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>

            {/* Cancelled Sessions */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">05</h3>
                <p className="text-[13px] font-bold text-slate-400">Cancelled sessions</p>
                <p className="text-[12px] font-semibold text-slate-500">Last: <span className="font-black text-slate-700">Oct 24, 2023</span></p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-200 text-white shrink-0">
                <XCircle className="h-6 w-6" />
              </div>
            </div>

            {/* Late Start Session */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">03</h3>
                <p className="text-[13px] font-bold text-slate-400">Late start session</p>
                <p className="text-[12px] font-semibold text-slate-500">Most Recent: <span className="font-black text-slate-700">Today, 10:40 AM</span></p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[#92400E] flex items-center justify-center shadow-lg shadow-orange-100 text-white shrink-0">
                <Cast className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Weekly Session Activity — Bar Chart (3/5 width) */}
            <div className="lg:col-span-3 rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Weekly Session Activity</h3>
                {/* Functional filter dropdown */}
                <div className="relative group">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-100 bg-slate-50/50 text-[13px] font-bold text-slate-600 cursor-pointer hover:bg-slate-100 transition-all select-none">
                    {sessionFilter}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </div>
                  <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
                    {["This Week", "Monthly", "Last 6 Months", "Yearly"].map((option) => (
                      <div
                        key={option}
                        onClick={() => setSessionFilter(option)}
                        className={cn(
                          "px-4 py-2.5 rounded-xl text-[13px] font-bold cursor-pointer transition-all",
                          sessionFilter === option
                            ? "bg-[#31564E]/10 text-[#31564E]"
                            : "text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#6366F1]" />
                <span className="text-[11px] font-bold text-slate-400">Total Sessions</span>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex flex-col justify-between pb-8 pointer-events-none">
                  {[0, 1, 2, 3].map((gi) => (
                    <div key={gi} className="w-full border-t border-slate-100" />
                  ))}
                </div>
                <div className="flex items-end justify-between gap-3 h-52 pb-8 relative">
                  {[
                    { day: "Mon", h: 52, dotted: false },
                    { day: "Tue", h: 62, dotted: false },
                    { day: "Wed", h: 48, dotted: false },
                    { day: "Thu", h: 72, dotted: false },
                    { day: "Fri", h: 80, dotted: true  },
                    { day: "Sat", h: 58, dotted: false },
                    { day: "Sun", h: 100, dotted: false },
                  ].map(({ day, h, dotted }) => (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full relative rounded-t-lg" style={{ height: `${h}%` }}>
                        <div className="absolute inset-0 rounded-t-lg bg-[#6366F1]/15" />
                        <div className={cn(
                          "absolute top-0 left-0 right-0 h-[3px] rounded-full",
                          dotted ? "border-t-2 border-dashed border-[#6366F1]/60 bg-transparent" : "bg-[#6366F1]"
                        )} />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Session Status Distribution — Donut Chart (2/5 width) */}
            <div className="lg:col-span-2 rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 flex flex-col gap-6">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Session Status Distribution</h3>
              <div className="flex items-center justify-center gap-8 flex-1">
                {/* Larger donut */}
                <div className="relative shrink-0 h-[200px] w-[200px]">
                  <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="60" fill="none" stroke="#22C55E" strokeWidth="20"
                      strokeDasharray={`${(148 / 168) * 376.99} 376.99`} strokeDashoffset="0" />
                    <circle cx="80" cy="80" r="60" fill="none" stroke="#F97316" strokeWidth="20"
                      strokeDasharray={`${(3 / 168) * 376.99} 376.99`}
                      strokeDashoffset={`-${(148 / 168) * 376.99}`} />
                    <circle cx="80" cy="80" r="60" fill="none" stroke="#6366F1" strokeWidth="20"
                      strokeDasharray={`${(12 / 168) * 376.99} 376.99`}
                      strokeDashoffset={`-${((148 + 3) / 168) * 376.99}`} />
                    <circle cx="80" cy="80" r="60" fill="none" stroke="#EF4444" strokeWidth="20"
                      strokeDasharray={`${(5 / 168) * 376.99} 376.99`}
                      strokeDashoffset={`-${((148 + 3 + 12) / 168) * 376.99}`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[28px] font-black text-slate-800 leading-none">168</span>
                    <span className="text-[12px] font-bold text-slate-400 mt-1">Total</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Completed",  color: "#22C55E" },
                    { label: "Cancelled",  color: "#EF4444" },
                    { label: "Late Start", color: "#F97316" },
                    { label: "Upcoming",   color: "#6366F1" },
                  ].map(({ label, color }) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-[13px] font-bold text-slate-600">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Upcoming Session Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-50">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Upcoming Session</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/60">
                    {["Session", "Course & Batch", "Date & Time", "Student", "Link", "Status"].map((col) => (
                      <th key={col} className="px-8 py-4 text-[12px] font-bold text-slate-400">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      id: "#LS-9021",
                      course: "French Basics A1",
                      batch: "Batch: Morning Alpha",
                      date: "Today, Oct 25",
                      time: "14:00 - 15:00",
                      students: "24 Enrolled",
                      linkLabel: "Join Class",
                      linkActive: true,
                      status: "Starting Soon",
                    },
                    {
                      id: "#LS-9021",
                      course: "Business German B2",
                      batch: "Master Catalog #CS-102",
                      date: "Tomorrow, Oct 26",
                      time: "14:00 - 15:00",
                      students: "12 Enrolled",
                      linkLabel: "Wait for Time",
                      linkActive: false,
                      status: "Scheduled",
                    },
                    {
                      id: "#LS-9021",
                      course: "English Beginner (A1)",
                      batch: "Master Catalog #CS-102",
                      date: "Today, Oct 25",
                      time: "14:00 - 15:00",
                      students: "24 Enrolled",
                      linkLabel: "Join Class",
                      linkActive: true,
                      status: "Need Improve",
                    },
                    {
                      id: "#LS-9021",
                      course: "English Beginner (A1)",
                      batch: "Master Catalog #CS-102",
                      date: "Tomorrow, Oct 26",
                      time: "14:00 - 15:00",
                      students: "12 Enrolled",
                      linkLabel: "Wait for Time",
                      linkActive: false,
                      status: "Scheduled",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                      {/* Session ID */}
                      <td className="px-8 py-5">
                        <span className="text-[13px] font-bold text-slate-400">{row.id}</span>
                      </td>
                      {/* Course & Batch */}
                      <td className="px-8 py-5">
                        <p className="text-[14px] font-black text-slate-800">{row.course}</p>
                        <p className="text-[12px] font-medium text-slate-400 mt-0.5">{row.batch}</p>
                      </td>
                      {/* Date & Time */}
                      <td className="px-8 py-5">
                        <p className="text-[13px] font-bold text-slate-700">{row.date}</p>
                        <p className="text-[12px] font-medium text-slate-400 mt-0.5">{row.time}</p>
                      </td>
                      {/* Students */}
                      <td className="px-8 py-5">
                        <span className="text-[13px] font-bold text-slate-600">{row.students}</span>
                      </td>
                      {/* Link */}
                      <td className="px-8 py-5">
                        <span className={cn(
                          "flex items-center gap-1.5 text-[13px] font-bold w-fit",
                          row.linkActive
                            ? "text-[#6366F1] cursor-pointer hover:underline"
                            : "text-slate-300 cursor-not-allowed"
                        )}>
                          <Link2 className="h-3.5 w-3.5" />
                          {row.linkLabel}
                        </span>
                      </td>
                      {/* Status Badge */}
                      <td className="px-8 py-5">
                        <span className={cn(
                          "px-4 py-1.5 rounded-full text-[12px] font-black tracking-tight whitespace-nowrap",
                          row.status === "Starting Soon"
                            ? "bg-[#FFF4E5] text-[#E67E22]"
                            : row.status === "Scheduled"
                              ? "bg-[#EEF0FF] text-[#6366F1]"
                              : "bg-[#FFF4E5] text-[#E67E22]"
                        )}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Completed Session Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-50">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Completed Session</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/60">
                    {["Session", "Course & Batch", "Attendance", "Rating", "Link"].map((col) => (
                      <th key={col} className="px-8 py-4 text-[12px] font-bold text-slate-400">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { id: "#LS-9021", course: "French Basics A1",      batch: "Batch: Morning Alpha",     attendance: "95.8%", attended: "23/24 Attended", rating: 4.8 },
                    { id: "#LS-9021", course: "Business German B2",     batch: "Master Catalog #CS-102",  attendance: "95.8%", attended: "23/24 Attended", rating: 4.8 },
                    { id: "#LS-9021", course: "English Beginner (A1)",  batch: "Master Catalog #CS-102",  attendance: "95.8%", attended: "23/24 Attended", rating: 4.8 },
                    { id: "#LS-9021", course: "English Beginner (A1)",  batch: "Master Catalog #CS-102",  attendance: "95.8%", attended: "23/24 Attended", rating: 4.8 },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                      {/* Session ID */}
                      <td className="px-8 py-5">
                        <span className="text-[13px] font-bold text-slate-400">{row.id}</span>
                      </td>
                      {/* Course & Batch */}
                      <td className="px-8 py-5">
                        <p className="text-[14px] font-black text-slate-800">{row.course}</p>
                        <p className="text-[12px] font-medium text-slate-400 mt-0.5">{row.batch}</p>
                      </td>
                      {/* Attendance */}
                      <td className="px-8 py-5">
                        <p className="text-[14px] font-black text-slate-800">{row.attendance}</p>
                        <p className="text-[12px] font-medium text-slate-400 mt-0.5">{row.attended}</p>
                      </td>
                      {/* Rating */}
                      <td className="px-8 py-5">
                        <span className="flex items-center gap-1.5 text-[14px] font-black text-slate-800">
                          {row.rating}
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        </span>
                      </td>
                      {/* View Link */}
                      <td className="px-8 py-5">
                        <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#6366F1] cursor-pointer hover:underline w-fit">
                          <ExternalLink className="h-3.5 w-3.5" />
                          View Link
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cancelled Session + Late Start Logs — Side by Side */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 rounded-[28px] border border-cyan-100/60 bg-[#F8FAFD] p-2">

            {/* Cancelled Session */}
            <div className="rounded-[22px] bg-white border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Cancelled Session</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/60">
                      {["Session", "Details", "Cancelled By", "Link"].map((col) => (
                        <th key={col} className="px-6 py-4 text-[12px] font-bold text-slate-400">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: "#LS-9021", course: "JLPT N5 Prep",    date: "Oct 20 - 16:00", by: "Tutor", reason: "Techinical issues" },
                      { id: "#LS-9021", course: "Toefl intensive",  date: "Oct 20 - 16:00", by: "Admin", reason: "Public holiday"   },
                      { id: "#LS-9021", course: "JLPT N5 Prep",    date: "Oct 20 - 16:00", by: "Tutor", reason: "Techinical issues" },
                      { id: "#LS-9021", course: "Toefl intensive",  date: "Oct 20 - 16:00", by: "Admin", reason: "Public holiday"   },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-[13px] font-bold text-slate-400">{row.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-[14px] font-black text-slate-800">{row.course}</p>
                          <p className="text-[12px] font-medium text-slate-400 mt-0.5">{row.date}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[13px] font-bold text-slate-600">{row.by}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[13px] font-bold text-[#6366F1] cursor-pointer hover:underline">{row.reason}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Late Start Logs */}
            <div className="rounded-[22px] bg-white border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Late Start Logs</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/60">
                      {["Session", "Scheduled", "Delay", "Stu Waiting"].map((col) => (
                        <th key={col} className="px-6 py-4 text-[12px] font-bold text-slate-400">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: "#LS-9021", scheduled: "10:00 AM", actual: "10:04 AM", delay: "4m 12s", delayColor: "bg-[#FFF4E5] text-[#E67E22]", waiting: 24 },
                      { id: "#LS-9021", scheduled: "10:00 AM", actual: "10:04 AM", delay: "8m 45s", delayColor: "bg-[#FEE2E2] text-[#EF4444]", waiting: 18 },
                      { id: "#LS-9021", scheduled: "10:00 AM", actual: "10:04 AM", delay: "4m 12s", delayColor: "bg-[#FFF4E5] text-[#E67E22]", waiting: 24 },
                      { id: "#LS-9021", scheduled: "10:00 AM", actual: "10:04 AM", delay: "8m 45s", delayColor: "bg-[#FEE2E2] text-[#EF4444]", waiting: 18 },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-[13px] font-bold text-slate-400">{row.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-[12px] font-medium text-slate-400">{row.scheduled}</p>
                          <p className="text-[14px] font-black text-slate-800">{row.actual}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[12px] font-black tracking-tight whitespace-nowrap",
                            row.delayColor
                          )}>
                            {row.delay}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[14px] font-black text-[#6366F1]">{row.waiting}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </>
      ) : activeTab === "Student Feedback" ? (
        <>
          {/* Student Feedback — 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Average Rating */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">4.7/5</h3>
                <p className="text-[13px] font-bold text-slate-800">Average Rating</p>
                <p className="text-[12px] font-semibold text-slate-400/80">(248 reviews)</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[#FF8206] flex items-center justify-center shadow-lg shadow-orange-200 text-white shrink-0">
                <CalendarDays className="h-6 w-6" />
              </div>
            </div>

            {/* Feedback Comments — highlighted dark card */}
            <div className="rounded-[24px] p-6 bg-[#31564E] border border-[#31564E]/10 shadow-xl flex items-center justify-between hover:shadow-2xl transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-white">184</h3>
                <p className="text-[13px] font-bold text-white/90">Feedback Comments</p>
                <p className="text-[12px] font-bold text-white/80">92%</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-emerald-900/20 text-[#31564E] shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>

            {/* Complaints reported */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">03</h3>
                <p className="text-[13px] font-bold text-slate-800">Complaints reported</p>
                <p className="text-[12px] font-semibold text-slate-500">Last: <span className="font-black text-slate-700">Oct 24, 2023</span></p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-200 text-white shrink-0">
                <Star className="h-6 w-6" />
              </div>
            </div>

            {/* Positive Feedback */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">94 %</h3>
                <p className="text-[13px] font-bold text-slate-800">Positive Feedback</p>
                <p className="text-[12px] font-semibold text-slate-400/80">vs. previous month avg (89%)</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[#92400E] flex items-center justify-center shadow-lg shadow-orange-100 text-white shrink-0">
                <Cast className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Feedback Analytics Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            
            {/* Rating Distribution */}
            <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 space-y-8">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Rating Distribution</h3>
              <div className="space-y-4 pt-1">
                {[
                  { label: "5 Stars", count: 162, percent: 85, color: "bg-[#6366F1]" },
                  { label: "4 Stars", count: 58,  percent: 45, color: "bg-[#8B5CF6]/50" },
                  { label: "3 Stars", count: 18,  percent: 25, color: "bg-[#8B5CF6]/30" },
                  { label: "2 Stars", count: 7,   percent: 10, color: "bg-[#8B5CF6]/20" },
                  { label: "1 Star",  count: 3,   percent: 5,  color: "bg-[#FDA4AF]" },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between items-center text-[13px] font-bold">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="text-slate-800">{item.count}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all", item.color)}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6-Month Rating Trend */}
            <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 flex flex-col">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight mb-8">6-Month Rating Trend</h3>
              
              <div className="flex-1 flex flex-col justify-end mt-4">
                <div className="flex items-end h-[160px] relative gap-0.5">
                  {[
                    { month: "JAN", h: 40, active: false },
                    { month: "FEB", h: 55, active: false },
                    { month: "MAR", h: 50, active: false },
                    { month: "APR", h: 58, active: false },
                    { month: "MAY", h: 55, active: false },
                    { month: "JUN", h: 65, active: true },
                  ].map((data) => (
                    <div key={data.month} className="flex-1 flex flex-col group h-full justify-end relative">
                      {/* Background Track */}
                      <div className="absolute inset-x-0 bottom-0 top-0 bg-[#F5F3FF] rounded-t-sm" />
                      {/* Foreground Value */}
                      <div
                        className={cn(
                          "relative z-10 w-full transition-all rounded-t-sm",
                          data.active ? "bg-[#6366F1]" : "bg-[#A78BFA]"
                        )}
                        style={{ height: `${data.h}%` }}
                      />
                    </div>
                  ))}
                </div>
                {/* X-Axis Labels */}
                <div className="flex items-center justify-between pt-4 px-2">
                  {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((month, i) => (
                    <span 
                      key={month} 
                      className={cn(
                        "text-[10px] font-black tracking-widest",
                        i === 5 ? "text-[#6366F1]" : "text-slate-400"
                      )}
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Performance */}
            <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 flex flex-col">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight mb-8">Course Performance</h3>
              <div className="space-y-8 flex-1 flex flex-col justify-center pb-8">
                {[
                  { name: "English Beginner", rating: 4.8, percent: 96, color: "bg-[#34D399]" },
                  { name: "Business English", rating: 4.5, percent: 88, color: "bg-[#A78BFA]" },
                  { name: "IELTS Prep",       rating: 4.7, percent: 94, color: "bg-[#6366F1]" },
                ].map((course) => (
                  <div key={course.name} className="flex flex-col gap-3 relative">
                    <div className="flex justify-between items-center text-[13px] font-bold">
                      <span className="text-slate-600">{course.name}</span>
                      <span className="text-[14px] font-black text-slate-800">{course.rating}</span>
                    </div>
                    <div className="h-3.5 w-full bg-slate-50 rounded-full overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all", course.color)}
                        style={{ width: `${course.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Feedback & Complaints Two-Column Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-2">
            
            {/* Recent Student Feedback */}
            <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 flex flex-col gap-6">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight border-b border-slate-50 pb-6 mb-2">
                Recent Student Feedback
              </h3>
              
              <div className="flex flex-col gap-4">
                {/* Review 1 */}
                <div className="rounded-[20px] border border-slate-100 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-[14px]">
                        AJ
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-[14px] font-black text-slate-800">Alice Johnson</h4>
                        <p className="text-[12px] font-semibold text-slate-400">Course: IELTS Prep</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[13px] font-bold text-slate-500 leading-relaxed">
                    "John's teaching style is incredibly clear and engaging. The way he breaks down complex grammar for the IELTS speaking part really helped me boost my confidence!"
                  </p>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest pt-2">
                    JUNE 12, 2024
                  </p>
                </div>
                
                {/* Review 2 */}
                <div className="rounded-[20px] border border-slate-100 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-[14px]">
                        MS
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-[14px] font-black text-slate-800">Mark Smith</h4>
                        <p className="text-[12px] font-semibold text-slate-400">Course: Business English</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4].map((star) => (
                        <Star key={`f-${star}`} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                      {/* Empty star for 4/5 rating */}
                      <Star className="h-3.5 w-3.5 text-slate-200 fill-slate-200" />
                    </div>
                  </div>
                  <p className="text-[13px] font-bold text-slate-500 leading-relaxed">
                    "Very professional and punctual. Sometimes the materials provided are a bit basic, but the verbal feedback John gives is top-notch."
                  </p>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest pt-2">
                    JUNE 08, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Complaint Logs & Critical Note Column */}
            <div className="flex flex-col gap-6">
              
              {/* Complaint Logs Table */}
              <div className="flex-1 rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 flex flex-col gap-6">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight border-b border-slate-50 pb-6 mb-2">
                  Complaint Logs
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/60">
                        {["ID / Student", "Issues Type", "Date", "Status"].map((col) => (
                          <th key={col} className="px-4 py-3 text-[12px] font-bold text-slate-500">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {[
                        { id: "CMP-0032", name: "Sarah Connor", issue: "Technical Issue", date: "14 Jun 2024", status: "PENDING",  color: "bg-[#FFF4E5] text-[#E67E22]" },
                        { id: "CMP-0028", name: "David Low",    issue: "Punctuality",     date: "02 Jun 2024", status: "RESOLVED", color: "bg-[#EBF9F1] text-[#059669]" },
                        { id: "CMP-0032", name: "Sarah Connor", issue: "Course Content",  date: "20 May 2024", status: "PENDING",  color: "bg-[#FFF4E5] text-[#E67E22]" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                          <td className="px-4 py-4 space-y-0.5">
                            <p className="text-[13px] font-black text-slate-800">{row.id}</p>
                            <p className="text-[12px] font-semibold text-slate-500">{row.name}</p>
                          </td>
                          <td className="px-4 py-4">
                            <p className="text-[13px] font-bold text-slate-700">{row.issue}</p>
                          </td>
                          <td className="px-4 py-4">
                            <p className="text-[12px] font-semibold text-slate-500">{row.date}</p>
                          </td>
                          <td className="px-4 py-4">
                            <span className={cn(
                              "px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest",
                              row.color
                            )}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Critical Note Alert Box */}
              <div className="rounded-[20px] border border-rose-200/60 bg-rose-50 p-6 flex gap-3 shadow-sm">
                <Info className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <h4 className="text-[14px] font-black text-rose-700">Critical Note</h4>
                  <p className="text-[13px] font-bold text-rose-600/90 leading-relaxed max-w-[90%]">
                    There is one pending technical complaint regarding lesson CMP-0032. 
                    Please review the class recording from June 14th.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </>
      ) : activeTab === "AI Usage Monitoring" ? (
        <>
          {/* AI Usage Monitoring — 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* AI Speaking Corrections */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex justify-between hover:shadow-md transition-shadow h-[140px]">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] font-black tracking-tight text-slate-800">1,284</h3>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800">AI Speaking Corrections</p>
                  <p className="text-[12px] font-semibold text-slate-500">High Adoption</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <div className="h-12 w-12 rounded-[18px] bg-[#FF8206] flex items-center justify-center shadow-lg shadow-orange-200 text-white shrink-0">
                  <Mic className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 bg-[#EBF9F1] text-[#059669] px-2.5 py-1 rounded-full text-[12px] font-black">
                  <TrendingUp className="h-3 w-3" />
                  14 %
                </div>
              </div>
            </div>

            {/* AI Speaking Feedback */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex justify-between hover:shadow-md transition-shadow h-[140px]">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] font-black tracking-tight text-slate-800">842</h3>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800">AI Speaking Feedback</p>
                  <p className="text-[12px] font-semibold text-slate-500">Standard Compliance</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <div className="h-12 w-12 rounded-[18px] bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-200 text-white shrink-0">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 bg-[#EBF9F1] text-[#059669] px-2.5 py-1 rounded-full text-[12px] font-black">
                  <TrendingUp className="h-3 w-3" />
                  17.3 %
                </div>
              </div>
            </div>

            {/* AI-Assisted Sessions (Dark) */}
            <div className="rounded-[24px] p-6 bg-[#31564E] border border-[#31564E]/10 shadow-xl flex justify-between hover:shadow-2xl transition-shadow h-[140px]">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] font-black tracking-tight text-white">92%</h3>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white/90">AI-Assisted Sessions</p>
                  <p className="text-[12px] font-bold text-white/80">Stable</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <div className="h-12 w-12 rounded-[18px] bg-white flex items-center justify-center shadow-lg shadow-emerald-900/20 text-[#31564E] shrink-0">
                  <Bot className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 bg-[#059669]/30 text-[#34D399] px-2.5 py-1 rounded-full text-[12px] font-black border border-[#34D399]/10">
                  <TrendingUp className="h-3 w-3" />
                  31.3 %
                </div>
              </div>
            </div>

            {/* AI Interaction Time */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex justify-between hover:shadow-md transition-shadow h-[140px]">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] font-black tracking-tight text-slate-800">12.4 hrs</h3>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800">AI Interaction Time</p>
                  <p className="text-[12px] font-semibold text-slate-500">Low Usage Time</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <div className="h-12 w-12 rounded-[18px] bg-[#92400E] flex items-center justify-center shadow-lg shadow-orange-100 text-white shrink-0">
                  <Cast className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 bg-[#FEE2E2] text-[#EF4444] px-2.5 py-1 rounded-full text-[12px] font-black">
                  <TrendingDown className="h-3 w-3" />
                  5.4 %
                </div>
              </div>
            </div>

          </div>

          {/* AI Assistant Insights Banner */}
          <div className="rounded-[24px] bg-[#31564E] text-white p-7 shadow-xl space-y-6 mt-6 border border-[#31564E]/20">
            <div className="flex items-center gap-2.5">
              <Lightbulb className="h-4 w-4 text-[#3b82f6]" strokeWidth={3} />
              <h3 className="text-[15px] font-black tracking-tight">AI Assistant Insights</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-1">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  <h4 className="text-[13px] font-bold">Productivity Surge</h4>
                </div>
                <p className="text-[12px] font-medium text-[#E2E8F0] leading-[1.6] pr-6">
                  AI feedback generation frequency increased by <span className="text-[#34D399]">12%</span> compared to last month.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  <h4 className="text-[13px] font-bold">Correction Precision</h4>
                </div>
                <p className="text-[12px] font-medium text-[#E2E8F0] leading-[1.6] pr-4">
                  Tutor matches <span className="text-[#3b82f6]">89%</span> of AI-suggested grammar corrections during live sessions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  <h4 className="text-[13px] font-bold">Usage Alert</h4>
                </div>
                <p className="text-[12px] font-medium text-[#E2E8F0] leading-[1.6] pr-6">
                  Batch 'Advanced B2' has significantly lower AI interaction time (2.4h/week).
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  <h4 className="text-[13px] font-bold">New Pattern Detected</h4>
                </div>
                <p className="text-[12px] font-medium text-[#E2E8F0] leading-[1.6] pr-6">
                  Frequent use of 'Synonym Suggestions' tool during evening sessions.
                </p>
              </div>
              
            </div>
          </div>

          {/* AI Session Integration Logs Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden mt-6">
            <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">AI Session Integration Logs</h3>
              <div className="px-4 py-2 bg-[#F8FAFC] rounded-lg text-[13px] font-bold text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors">
                Live Updates Enabled
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#FAFBFD]">
                    {["Session", "Course Name", "Batch", "Corrections", "Ai Feature", "Status", "Timestamp"].map((col) => (
                      <th key={col} className="px-8 py-5 text-[12px] font-bold text-slate-500">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { session: "#LS-9021", course: "Business English Prep", batch: "BE-AUG-23", corrections: "18m 45s", feature: "Speaking Mic",  featureColor: "text-[#8B5CF6]", status: "AI Active",   statusColor: "text-[#10B981]", dotColor: "bg-[#10B981]", time: ["Today", "10:00 AM"] },
                    { session: "#LS-9021", course: "Intro to Spanish",      batch: "BE-AUG-23", corrections: "05m 12s", feature: "Wait for Time", featureColor: "text-[#8B5CF6]", status: "AI Assisted", statusColor: "text-[#F59E0B]", dotColor: "bg-[#F59E0B]", time: ["Today", "10:00 AM"] },
                    { session: "#LS-9021", course: "Advanced IELTS",        batch: "BE-AUG-23", corrections: "20m 00s", feature: "None",          featureColor: "text-slate-400", status: "AI Active",   statusColor: "text-[#10B981]", dotColor: "bg-[#10B981]", time: ["Today", "10:00 AM"] },
                    { session: "#LS-9021", course: "Conversational French", batch: "BE-AUG-23", corrections: "22m 10s", feature: "Speaking Mic",  featureColor: "text-[#8B5CF6]", status: "AI Not Used", statusColor: "text-slate-500", dotColor: "bg-slate-400", time: ["Today", "10:00 AM"] },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-500">{row.session}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[14px] font-black text-slate-800">{row.course}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-semibold text-slate-600">{row.batch}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-800">{row.corrections}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={cn("text-[11px] font-black leading-tight tracking-wide", row.featureColor)}>
                          {row.feature}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className={cn("h-1.5 w-1.5 rounded-full", row.dotColor)} />
                          <span className={cn("text-[12px] font-black leading-tight", row.statusColor)}>
                            {row.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6 space-y-0.5">
                        <p className="text-[13px] font-bold text-slate-700">{row.time[0]}</p>
                        <p className="text-[12px] font-medium text-slate-400">{row.time[1]}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : activeTab === "Login & Activity Logs" ? (
        <>
          {/* Login & Activity Logs — 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Attempts */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">12</h3>
                <p className="text-[13px] font-bold text-slate-800">Attempts</p>
                <p className="text-[12px] font-medium text-slate-500">38 Success</p>
              </div>
              <div className="h-12 w-12 rounded-[18px] bg-[#FF8206] flex items-center justify-center shadow-lg shadow-orange-200 text-white shrink-0 self-start mt-1">
                <Shield className="h-6 w-6" />
              </div>
            </div>

            {/* Last Login */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">05</h3>
                <p className="text-[13px] font-bold text-slate-800">Last Login</p>
                <p className="text-[12px] font-medium text-slate-500">MacBook Pro • Bangalore, India</p>
              </div>
              <div className="h-12 w-12 rounded-[18px] bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-200 text-white shrink-0 self-start mt-1">
                <Clock className="h-6 w-6" />
              </div>
            </div>

            {/* Active Sessions */}
            <div className="rounded-[24px] p-6 bg-white border border-slate-50 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-slate-800">02</h3>
                <p className="text-[13px] font-bold text-slate-800">Active Sessions</p>
                <p className="text-[12px] font-medium text-slate-500">Chrome/Laptop, Safari/iPhone</p>
              </div>
              <div className="h-12 w-12 rounded-[18px] bg-[#92400E] flex items-center justify-center shadow-lg shadow-orange-100 text-white shrink-0 self-start mt-1">
                <MonitorSmartphone className="h-6 w-6" />
              </div>
            </div>

            {/* Security Status (Dark) */}
            <div className="rounded-[24px] p-6 bg-[#31564E] border border-[#31564E]/10 shadow-xl flex items-center justify-between hover:shadow-2xl transition-shadow">
              <div className="space-y-1">
                <h3 className="text-[32px] font-black tracking-tight text-white">0 Flag</h3>
                <p className="text-[13px] font-bold text-white/90">Security Status</p>
                <p className="text-[12px] font-medium text-white/80">No suspicious activity detected</p>
              </div>
              <div className="h-12 w-12 rounded-[18px] bg-white flex items-center justify-center shadow-lg shadow-emerald-900/20 text-[#31564E] shrink-0 self-start mt-1">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pt-2 mt-6">
            
            {/* Login Logs Table */}
            <div className="xl:col-span-2 rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="px-8 py-6 border-b border-slate-50">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">AI Session Integration Logs</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      {["Login ID", "Date & Time", "Status", "IP Address", "Location"].map((col) => (
                        <th key={col} className="px-8 py-5 text-[12px] font-bold text-slate-500">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white">
                    {[
                      { id: "#LS-9021", date: "Feb 12, 10:15 AM", status: "SUCCESS", statusColor: "bg-[#EBF9F1] text-[#10B981]", ip: "157.34.122.9", loc: "Bangalore, IN", bg: "bg-[#FAFCFF]" },
                      { id: "#LS-9021", date: "Feb 12, 10:15 AM", status: "FAILED",  statusColor: "bg-rose-100/50 text-rose-500", ip: "157.34.122.9", loc: "Mumbai, IN", bg: "bg-[#F8FAFC]" },
                      { id: "#LS-9021", date: "Feb 12, 10:15 AM", status: "SUCCESS", statusColor: "bg-[#EBF9F1] text-[#10B981]", ip: "157.34.122.9", loc: "Bangalore, IN", bg: "bg-[#FAFCFF]" },
                      { id: "#LS-9021", date: "Feb 12, 10:15 AM", status: "FAILED",  statusColor: "bg-rose-100/50 text-rose-500", ip: "157.34.122.9", loc: "Mumbai, IN", bg: "bg-[#F8FAFC]" },
                    ].map((row, i) => (
                      <tr key={i} className={cn("transition-colors", row.bg)}>
                        <td className="px-8 py-6">
                          <span className="text-[13px] font-bold text-slate-600">{row.id}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-[13px] font-bold text-slate-800">{row.date}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className={cn("px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest", row.statusColor)}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-[13px] font-bold text-slate-700">{row.ip}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-[13px] font-bold text-slate-600">{row.loc}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-8 flex flex-col">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight border-b border-slate-50 pb-6 mb-8">
                Activity Timeline
              </h3>
              
              <div className="relative border-l-[1.5px] border-slate-100 ml-3 space-y-10 flex-1">
                
                {/* Timeline Item 1 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[7.5px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#10B981] ring-[5px] ring-white" />
                  <div className="space-y-1">
                    <h4 className="text-[14px] font-black text-slate-800">Class Started: Physics Advanced</h4>
                    <p className="text-[12px] font-medium text-slate-400">Today, 11:30 AM</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[7.5px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#3b82f6] ring-[5px] ring-white" />
                  <div className="space-y-1">
                    <h4 className="text-[14px] font-black text-slate-800">Logged In Successfully</h4>
                    <p className="text-[12px] font-medium text-slate-400">Today, 10:15 AM &bull; IP: 157.34.122.9</p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[7.5px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#F59E0B] ring-[5px] ring-white" />
                  <div className="space-y-1">
                    <h4 className="text-[14px] font-black text-slate-800">Course Content Assigned</h4>
                    <p className="text-[12px] font-medium text-slate-400">Yesterday, 06:12 PM</p>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[7.5px] top-1.5 h-3.5 w-3.5 rounded-full bg-slate-200 ring-[5px] ring-white" />
                  <div className="space-y-1">
                    <h4 className="text-[14px] font-black text-slate-800">Class Ended: Basic Math</h4>
                    <p className="text-[12px] font-medium text-slate-400">Feb 11, 05:30 PM</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Session Activity Logs Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden mt-6">
            <div className="px-8 py-6 border-b border-slate-50">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Session Activity Logs</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#FAFBFD]">
                    {["Session ID", "Start Time", "Duration", "Cancelled By", "Last Activity"].map((col) => (
                      <th key={col} className="px-8 py-5 text-[12px] font-bold text-slate-500">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white">
                  {[
                    { id: "SES-88219", start: "Feb 12, 10:15 AM", dur: "2h 45m", device: "Laptop",     activity: "Class: Calculus 101", activityColor: "text-[#6366F1]", bg: "bg-[#FAFCFF]" },
                    { id: "SES-88102", start: "Feb 11, 04:00 PM", dur: "1h 12m", device: "Mobile App", activity: "Profile Update",      activityColor: "text-[#8B5CF6]", bg: "bg-[#F8FAFC]" },
                    { id: "SES-88219", start: "Feb 12, 10:15 AM", dur: "2h 45m", device: "Laptop",     activity: "Class: Calculus 101", activityColor: "text-[#6366F1]", bg: "bg-[#FAFCFF]" },
                    { id: "SES-88102", start: "Feb 11, 04:00 PM", dur: "1h 12m", device: "Mobile App", activity: "Profile Update",      activityColor: "text-[#8B5CF6]", bg: "bg-[#F8FAFC]" },
                  ].map((row, i) => (
                    <tr key={i} className={cn("transition-colors", row.bg)}>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-600">{row.id}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-800">{row.start}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-600">{row.dur}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-700">{row.device}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={cn("text-[13px] font-bold", row.activityColor)}>{row.activity}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admin Actions on Tutor Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden mt-6">
            <div className="px-8 py-6 border-b border-slate-50">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">Admin Actions on Tutor</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#FAFBFD]">
                    {["Action ID", "Admin Name", "Action Type", "Description", "Date & Time"].map((col) => (
                      <th key={col} className="px-8 py-5 text-[12px] font-bold text-slate-500">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white">
                  {[
                    { id: "#ADM-902", admin: "Sarah Connor", initials: "SC",  avatarBg: "bg-blue-100 text-blue-600", type: "PERMISSION_CHANGE", typeBg: "bg-blue-50 text-blue-600", desc: "Upgraded tutor tier to 'Premium Tutors'",             time: "Feb 10, 02:30 PM", bg: "bg-[#FAFCFF]" },
                    { id: "#ADM-811", admin: "John Wick",    initials: "JW",  avatarBg: "bg-slate-200 text-slate-700", type: "PROFILE_AUDIT",     typeBg: "bg-orange-50 text-orange-600", desc: "Manual verification of certification documents",  time: "Profile Update",   bg: "bg-[#F8FAFC]" },
                    { id: "#ADM-902", admin: "Sarah Connor", initials: "SC",  avatarBg: "bg-blue-100 text-blue-600", type: "PERMISSION_CHANGE", typeBg: "bg-blue-50 text-blue-600", desc: "Upgraded tutor tier to 'Premium Tutors'",             time: "Feb 10, 02:30 PM", bg: "bg-[#FAFCFF]" },
                    { id: "#ADM-811", admin: "John Wick",    initials: "JW",  avatarBg: "bg-slate-200 text-slate-700", type: "PROFILE_AUDIT",     typeBg: "bg-orange-50 text-orange-600", desc: "Manual verification of certification documents",  time: "Profile Update",   bg: "bg-[#F8FAFC]" },
                  ].map((row, i) => (
                    <tr key={i} className={cn("transition-colors", row.bg)}>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-600">{row.id}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className={cn("h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black", row.avatarBg)}>
                            {row.initials}
                          </div>
                          <span className="text-[14px] font-bold text-slate-800">{row.admin}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={cn("px-2.5 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase", row.typeBg)}>
                          {row.type}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-medium text-slate-500">{row.desc}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-semibold text-slate-500">{row.time}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : activeTab === "Performance" ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
            {/* Main Analytics Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Attendance & AI Usage Trend Card */}
              <div className="rounded-[24px] bg-white p-8 shadow-sm border border-slate-50 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                    Attendance & AI Usage Trend
                  </h3>
                  <div className="relative group">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-100 bg-slate-50/50 text-[13px] font-bold text-slate-600 cursor-pointer hover:bg-slate-100 transition-all">
                      Last 6 Months
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </div>
                    {/* Stylized Dropdown Menu */}
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
                      {["Monthly", "Last 6 Months", "Yearly"].map((option) => (
                        <div
                          key={option}
                          className="px-4 py-2.5 rounded-xl hover:bg-slate-50 text-[13px] font-bold text-slate-600 cursor-pointer transition-all"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stylized Dual-Line Chart Mockup */}
                <div className="h-64 relative pt-10 px-4">
                  <svg
                    viewBox="0 0 800 200"
                    className="w-full h-full overflow-visible"
                  >
                    {/* Grid Lines */}
                    {[0, 50, 100, 150, 200].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="800"
                        y2={y}
                        stroke="#F1F5F9"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Solid Line: Attendance */}
                    <path
                      d="M0,150 C100,160 200,80 300,100 C400,120 500,60 600,80 C700,100 800,40 800,40"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="drop-shadow-sm"
                    />

                    {/* Dashed Line: AI Correction */}
                    <path
                      d="M0,180 C100,185 200,140 300,160 C400,170 500,120 600,140 C700,150 800,100 800,100"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      strokeDasharray="8,8"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Legend */}
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                      <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">
                        ATTENDANCE
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full border-2 border-[#8B5CF6] border-dashed" />
                      <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">
                        AI CORRECTION
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Analytics Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Feedback Trend */}
                <div className="rounded-[24px] bg-white p-8 shadow-sm border border-slate-50 space-y-8 flex flex-col justify-between">
                  <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                    Student Feedback Trend
                  </h3>

                  <div className="h-56 flex items-end justify-between gap-3 pt-12 relative w-full px-2">
                    {[35, 50, 42, 80, 100, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 space-y-3 flex flex-col items-center group relative h-full justify-end"
                      >
                        <div
                          className={cn(
                            "w-full rounded-xl transition-all relative",
                            i === 4 ? "bg-[#8B5CF6]" : "bg-[#8B5CF6]/10"
                          )}
                          style={{ height: `${h}%` }}
                        >
                          {i === 4 && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#4751BB] text-white text-[11px] font-black px-2.5 py-1.5 rounded-lg shadow-xl z-10 whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#4751BB]">
                              4.8 / 5
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest pt-2">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Completion Progress */}
                <div className="rounded-[24px] bg-white p-8 shadow-sm border border-slate-50 space-y-8">
                  <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                    Course Completion Progress
                  </h3>

                  <div className="space-y-6 pt-2">
                    {[
                      {
                        name: "English Beginner",
                        progress: 95,
                        color: "bg-[#3AC0A0]",
                      },
                      {
                        name: "Business English",
                        progress: 72,
                        color: "bg-[#8B5CF6]",
                      },
                      {
                        name: "IELTS Prep Course",
                        progress: 45,
                        color: "bg-[#FF8206]",
                      },
                    ].map((course) => (
                      <div key={course.name} className="space-y-3">
                        <div className="flex justify-between items-center text-[13px] font-bold">
                          <span className="text-slate-800">{course.name}</span>
                          <span className="text-slate-400">
                            {course.progress}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-1000",
                              course.color
                            )}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Insights Sidebar (Emerald Card) */}
            <div className="rounded-[32px] bg-[#31564E] px-8 py-7 shadow-2xl flex flex-col space-y-6 text-white h-fit lg:sticky lg:top-24">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-[#3AC0A0]" />
                </span>
                <h3 className="text-[19px] font-black tracking-tight">
                  Performance Insights
                </h3>
              </div>

              <div className="space-y-7">
                {[
                  {
                    icon: TrendingUp,
                    title: "Attendance Growth",
                    desc: "Attendance has improved by 8% over the last 3 months, peaking on Wednesdays.",
                  },
                  {
                    icon: Sparkles,
                    title: "AI Tool Mastery",
                    desc: "AI speaking corrections were used in 65% of sessions, well above the 40% average.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Action Required",
                    desc: "IELTS Prep course has a higher than average cancellation rate (2 sessions this month).",
                  },
                  {
                    icon: Star,
                    title: "Student Satisfaction",
                    desc: 'Top-rated for "Business English" with consistent 4.9+ scores in the last 10 sessions.',
                  },
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4">
                    <insight.icon
                      className={cn(
                        "h-5 w-5 shrink-0 mt-1",
                        i === 0
                          ? "text-[#3AC0A0]"
                          : i === 1
                            ? "text-blue-300"
                            : i === 2
                              ? "text-yellow-400"
                              : "text-white opacity-80"
                      )}
                    />
                    <div className="space-y-1.5">
                      <h4 className="text-[14px] font-black tracking-tight uppercase opacity-90">
                        {insight.title}
                      </h4>
                      <p className="text-[12px] font-medium leading-relaxed opacity-60">
                        {insight.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 text-white font-black text-[14px]"
              >
                Generate Report
              </Button>

              {/* Nested AI Support Usage Card */}
              <div className="rounded-[24px] bg-black/20 border border-white/5 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[14px] font-black uppercase tracking-widest text-[#D1FAE5]">
                    AI Support Usage
                  </h4>
                  <Sparkles className="h-4 w-4 text-[#3AC0A0]" />
                </div>

                <div className="h-20 flex items-end justify-between gap-2.5">
                  {[30, 50, 80, 60, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/20 rounded-t-[4px]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <p className="text-[11px] font-medium leading-relaxed opacity-60">
                  Dr. Rodriguez utilizes AI tools in 92% of her curriculum
                  delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Course-wise Performance Detailed Breakdown Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden mb-12">
            <div className="p-8 flex items-center justify-between border-b border-slate-50">
              <h3 className="text-[20px] font-black text-slate-800 tracking-tight">
                Course-wise Performance Detailed Breakdown
              </h3>
              <Button className="h-11 rounded-2xl px-6 bg-black hover:bg-black/90 text-white font-bold flex items-center gap-3 shadow-xl shadow-black/10">
                <Download className="h-4 w-4" />
                Export data
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Course Name
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest text-center">
                      Session
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest text-center">
                      Attendance
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest text-center">
                      Completion
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest text-center">
                      Student Rating
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest text-center">
                      AI Corrections
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest text-center">
                      Cancelled
                    </th>
                    <th className="px-8 py-6 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      name: "English Beginner (A1)",
                      sessions: 42,
                      attendance: "96%",
                      completion: "95%",
                      rating: 4.8,
                      ai: 450,
                      cancelled: 0,
                      status: "Excellent",
                    },
                    {
                      name: "Business English (B2)",
                      sessions: 28,
                      attendance: "91%",
                      completion: "72%",
                      rating: 4.8,
                      ai: 620,
                      cancelled: 1,
                      status: "Good",
                    },
                    {
                      name: "IELTS Preparation",
                      sessions: 15,
                      attendance: "82%",
                      completion: "45%",
                      rating: 4.8,
                      ai: 170,
                      cancelled: 2,
                      status: "Need Improve",
                    },
                    {
                      name: "Advanced Phonetics",
                      sessions: 10,
                      attendance: "100%",
                      completion: "100%",
                      rating: 4.8,
                      ai: 0,
                      cancelled: 0,
                      status: "Excellent",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/30 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <span className="text-[14px] font-black text-slate-800">
                          {row.name}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-[13px] font-bold text-slate-500">
                          {row.sessions}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-[13px] font-bold text-slate-500">
                          {row.attendance}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-[13px] font-bold text-slate-500">
                          {row.completion}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center text-nowrap">
                        <span className="text-[13px] font-bold text-slate-500">
                          {row.rating}
                        </span>
                        <Star className="h-3 w-3 text-yellow-400 inline-block ml-1 fill-yellow-400" />
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-[13px] font-bold text-slate-500">
                          {row.ai}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-[13px] font-bold text-slate-500">
                          {row.cancelled}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span
                          className={cn(
                            "px-5 py-2.5 rounded-full text-[11px] font-black tracking-tight whitespace-nowrap inline-flex items-center justify-center",
                            row.status === "Excellent"
                              ? "bg-[#EBF9F1] text-[#059669]"
                              : row.status === "Good"
                                ? "bg-[#F0F2FF] text-[#4751BB]"
                                : "bg-[#FFF4E5] text-[#E67E22]"
                          )}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="p-8 pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <button className="h-11 w-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-all shadow-sm">
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-2">
                  {[1, 2, "...", 10].map((page, i) => (
                    <button
                      key={i}
                      className={cn(
                        "h-11 w-11 rounded-full text-[14px] font-bold transition-all",
                        page === 1
                          ? "border-2 border-[#31564E] text-[#31564E] shadow-sm"
                          : "text-slate-400 hover:bg-slate-50"
                      )}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button className="h-11 w-11 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 transition-all shadow-xl shadow-black/10">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-[12px] font-bold text-slate-400">
                  Showing <span className="text-slate-600">1-8</span> of{" "}
                  <span className="text-slate-600">1,540</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Secondary Dashboard Tier: Charts & Profiles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
            {/* Basic Information Card */}
            <div className="rounded-[24px] bg-white p-6 md:p-8 shadow-sm border border-slate-50 space-y-7">
              <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                Basic Information
              </h3>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <p className="text-[12px] font-black text-slate-300 uppercase tracking-widest">
                    Qualification
                  </p>
                  <p className="text-[14px] font-bold text-slate-800">
                    Ph.D. in Linguistics, Stanford
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[12px] font-black text-slate-300 uppercase tracking-widest">
                    Experience
                  </p>
                  <p className="text-[14px] font-bold text-slate-800">
                    12+ Years Professional Teaching
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[12px] font-black text-slate-300 uppercase tracking-widest">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1.5 rounded-full bg-[#FAEEE9] text-[#E67E22] text-[11px] font-black tracking-tight border border-[#E67E22]/5">
                      English (Native)
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-[#FAEEE9] text-[#E67E22] text-[11px] font-black tracking-tight border border-[#E67E22]/5">
                      Spanish (C2)
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[12px] font-black text-slate-300 uppercase tracking-widest">
                    Join Date
                  </p>
                  <p className="text-[14px] font-bold text-slate-800">
                    October 14, 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Avg Class Duration Card */}
            <div className="rounded-[24px] bg-white p-6 md:p-8 shadow-sm border border-slate-50 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                  Avg Class Duration
                </h3>
                <Clock className="h-5 w-5 text-[#31564E] opacity-70" />
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-[28px] font-black text-slate-800">
                  52m
                </span>
                <span className="text-[13px] font-bold text-[#059669]">
                  +4m
                </span>
              </div>

              {/* Stylized Bar Chart */}
              <div className="h-32 flex items-end justify-between gap-2 pt-4">
                {[40, 60, 50, 80, 70, 90, 100].map((height, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-full rounded-t-lg transition-all",
                      i === 6 ? "bg-[#FF8206]" : "bg-[#FF8206]/20"
                    )}
                    style={{ height: `${height * 0.8}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Course Completion % Card */}
            <div className="rounded-[24px] bg-white p-6 md:p-8 shadow-sm border border-slate-50 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                  Course Completion %
                </h3>
                <CheckSquare className="h-5 w-5 text-[#31564E] opacity-70" />
              </div>

              <h3 className="text-[28px] font-black text-slate-800 tracking-tight">
                94.2%
              </h3>

              {/* Stylized Doughnut Progress Chart */}
              <div className="relative h-40 flex items-center justify-center pt-2">
                <div className="h-32 w-32 rounded-full border-[10px] border-slate-50 relative flex items-center justify-center">
                  <div className="absolute inset-[-10px] rounded-full border-[10px] border-[#FF8206] border-t-transparent border-l-transparent rotate-[45deg]" />
                  <span className="text-[16px] font-black text-[#FF8206] tracking-tight">
                    +2.1%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Assigned Courses Management Table */}
          <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden mb-10">
            <div className="p-8 flex items-center justify-between border-b border-slate-50">
              <h3 className="text-[20px] font-black text-slate-800 tracking-tight">
                Assigned Courses
              </h3>
              <Button className="h-11 rounded-2xl px-6 bg-black hover:bg-black/90 text-white font-bold flex items-center gap-3 shadow-xl shadow-black/10">
                Assign New Course
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Course Name
                    </th>
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Level
                    </th>
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Batch
                    </th>
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Student
                    </th>
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Progress
                    </th>
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                      Status
                    </th>
                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      name: "Business English Professional",
                      level: "Advanced (C1)",
                      batch: "BE-OCT23-A",
                      students: 82,
                      progress: 100,
                      status: "Completed",
                    },
                    {
                      name: "Foundation of Spanish",
                      level: "Beginner (A1)",
                      batch: "BE-DEC23-R",
                      students: 82,
                      progress: 65,
                      status: "In Process",
                    },
                    {
                      name: "Medical Terminology Master",
                      level: "15 Modules",
                      batch: "BE-DCT23-A",
                      students: 82,
                      progress: 45,
                      status: "In Process",
                    },
                    {
                      name: "Foundation of Spanish",
                      level: "Beginner (A1)",
                      batch: "BE-DEC23-R",
                      students: 82,
                      progress: 100,
                      status: "Completed",
                    },
                    {
                      name: "Business English Professional",
                      level: "Advanced (C1)",
                      batch: "BE-OCT23-A",
                      students: 82,
                      progress: 100,
                      status: "Completed",
                    },
                    {
                      name: "Foundation of Spanish",
                      level: "Beginner (A1)",
                      batch: "BE-DEC23-R",
                      students: 82,
                      progress: 70,
                      status: "In Process",
                    },
                  ].map((course, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/30 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <span className="text-[14px] font-bold text-slate-800">
                          {course.name}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-500">
                          {course.level}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-500">
                          {course.batch}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[13px] font-bold text-slate-500">
                          {course.students}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="w-24 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
                              course.status === "Completed"
                                ? "bg-[#3AC0A0]"
                                : "bg-[#E67E22]"
                            )}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span
                          className={cn(
                            "px-4 py-1.5 rounded-full text-[11px] font-black tracking-tight",
                            course.status === "Completed"
                              ? "bg-[#EBF9F1] text-[#059669]"
                              : "bg-[#FFF4E5] text-[#E67E22]"
                          )}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-all">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modular Pagination Suite */}
            <div className="p-8 pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <button className="h-11 w-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-all shadow-sm">
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-2">
                  {[1, 2, "...", 10].map((page, i) => (
                    <button
                      key={i}
                      className={cn(
                        "h-11 w-11 rounded-full text-[14px] font-bold transition-all",
                        page === 1
                          ? "border-2 border-[#31564E] text-[#31564E] shadow-sm"
                          : "text-slate-400 hover:bg-slate-50"
                      )}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button className="h-11 w-11 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 transition-all shadow-xl shadow-black/10">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-[12px] font-bold text-slate-400">
                  Showing <span className="text-slate-600">1-8</span> of{" "}
                  <span className="text-slate-600">1,540</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TutorProfile;
