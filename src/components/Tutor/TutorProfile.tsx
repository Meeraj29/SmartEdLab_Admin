"use client";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  Clock,
  Download,
  Languages,
  Lightbulb,
  Mail,
  MoreVertical,
  PhoneCall,
  Plus,
  Presentation,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
  Video,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
      </div>

      {/* Dynamic Tab Content Implementation */}
      {activeTab === "Performance" ? (
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
