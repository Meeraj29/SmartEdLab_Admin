"use client";

import {
  Activity,
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  History,
  LayoutGrid,
  MoreVertical,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StudentProfileProps {
  onBack: () => void;
}

const StudentProfile = ({ onBack }: StudentProfileProps) => {
  const [activeTab, setActiveTab] = React.useState("Profile Info");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isChartDropdownOpen, setIsChartDropdownOpen] = React.useState(false);
  const [selectedPeriod, setSelectedPeriod] = React.useState("Last 30 Days");

  const menuRef = React.useRef<HTMLDivElement>(null);
  const chartDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (
        chartDropdownRef.current &&
        !chartDropdownRef.current.contains(event.target as Node)
      ) {
        setIsChartDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs = [
    "Profile Info",
    "Course Progress",
    "AI Practice History",
    "Assessment Scores",
    "Payment History",
    "Login History",
    "Activity Logs",
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Back Link */}
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={onBack}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100 transition-all"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <span className="text-lg font-bold text-foreground">Profile</span>
      </div>

      {/* Main Profile Header Card */}
      <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="h-24 w-24 rounded-full border-4 border-[#31564E]/10 overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                  alt="Sarah Jenkins"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Sarah Jenkins
                </h2>
                <span className="px-3 py-1 rounded-full bg-[#31564E]/10 text-[#31564E] text-xs font-bold border border-[#31564E]/20">
                  Premium AI
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                sarah.j@example.com
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span className="text-slate-500 font-medium">Status:</span>
                  <span className="text-blue-600 font-bold">Active</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-500 font-medium">Joined:</span>
                  <span className="text-foreground font-bold">
                    Dec 15, 2025
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Expiry:</span>
                  <span className="font-bold">April 12, 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 relative" ref={menuRef}>
            <Button
              variant="outline"
              className="h-11 rounded-xl px-6 border-slate-200 text-slate-700 font-bold shadow-sm hover:bg-slate-50"
            >
              Extend Subscription
            </Button>
            <Button className="h-11 rounded-xl px-8 bg-black text-white font-bold shadow-lg shadow-black/10 hover:bg-black/90">
              Upgrade Plan
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-11 w-11 flex items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50 shadow-sm"
            >
              <MoreVertical className="h-5 w-5 text-slate-500" />
            </button>

            {/* Dropdown Menu - Simplified */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-white shadow-xl border border-slate-100 py-1 z-50">
                <button className="w-full px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all text-left">
                  Reset Password
                </button>
                <button className="w-full px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-slate-50 transition-all text-left">
                  Suspend Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-b border-border/50">
        <div className="flex items-center gap-x-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-4 text-[15px] font-bold transition-all whitespace-nowrap relative px-1",
                activeTab === tab
                  ? "text-[#31564E] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#31564E] after:rounded-full"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Course Progress */}
      {activeTab === "Course Progress" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Modules Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-3xl font-black text-foreground">
                    12/20
                  </span>
                  <p className="text-sm font-bold text-slate-500">
                    Modules Completed
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                  <LayoutGrid className="h-5 w-5" />
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-4">
                <div className="h-full w-[60%] bg-blue-600 rounded-full" />
              </div>
            </div>

            {/* Lessons Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-3xl font-black text-foreground">
                    45/60
                  </span>
                  <p className="text-sm font-bold text-slate-500">
                    Lessons Completed
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#7C411D] flex items-center justify-center text-white">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-4">
                <div className="h-full w-[75%] bg-blue-600 rounded-full" />
              </div>
            </div>

            {/* Total Time Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-3xl font-black text-foreground">
                    45 hrs
                  </span>
                  <p className="text-sm font-bold text-slate-500">
                    Total Learning Time
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#6B46C1] flex items-center justify-center text-white">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600 mt-4">
                <div className="flex items-center rotate-[-45deg]">
                  <ArrowLeft className="h-3 w-3" />
                </div>
                <span className="text-sm font-bold">+5.2 hrs this week</span>
              </div>
            </div>

            {/* Last Activity Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-3xl font-black text-foreground">
                    2 hrs ago
                  </span>
                  <p className="text-sm font-bold text-slate-500">
                    Last Activity
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#0081FF] flex items-center justify-center text-white">
                  <History className="h-5 w-5" />
                </div>
              </div>
              <p className="text-xs font-bold text-slate-400 mt-4">
                Interactive Quiz: Speaking
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LSRW Skill Progress Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-foreground">
                  LSRW Skill Progress
                </h3>
                <button className="text-sm font-bold text-[#31564E] hover:underline">
                  View Details
                </button>
              </div>

              <div className="space-y-8">
                {[
                  {
                    label: "Listening",
                    sub: "Advanced Comprehension Achieved",
                    value: "80%",
                    width: "w-[80%]",
                  },
                  {
                    label: "Speaking",
                    sub: "Pronunciation: 4.5/5.0",
                    value: "70%",
                    width: "w-[70%]",
                  },
                  {
                    label: "Reading",
                    sub: "Modules Completed: 4/5",
                    value: "90%",
                    width: "w-[90%]",
                  },
                  {
                    label: "Writing",
                    sub: "Grammar Accuracy: 88%",
                    value: "65%",
                    width: "w-[65%]",
                  },
                ].map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground leading-tight">
                          {skill.label}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {skill.sub}
                        </span>
                      </div>
                      <span className="text-sm font-black text-foreground">
                        {skill.value}
                      </span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-[#31564E] rounded-full",
                          skill.width
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Progress Over Time Card */}
            <div className="lg:col-span-2 rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-start justify-between mb-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    Student Progress Over Time
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400">
                    Learning Hours vs. Date (Last 30 Days)
                  </p>
                </div>
                <div className="relative" ref={chartDropdownRef}>
                  <button
                    onClick={() => setIsChartDropdownOpen(!isChartDropdownOpen)}
                    className="flex items-center justify-between gap-3 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-foreground hover:bg-slate-50 transition-all min-w-[140px]"
                  >
                    {selectedPeriod}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-slate-400 transition-transform",
                        isChartDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isChartDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-full rounded-xl bg-white shadow-lg border border-slate-100 py-1 z-50">
                      {["Weekly", "Monthly", "Yearly", "Last 30 Days"].map(
                        (period) => (
                          <button
                            key={period}
                            onClick={() => {
                              setSelectedPeriod(period);
                              setIsChartDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-all text-left"
                          >
                            {period}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative mt-8 h-[250px] w-full">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-[1px] w-full bg-slate-100" />
                  ))}
                </div>

                {/* SVG Graph */}
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Area Gradient */}
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#31564E" stopOpacity="0.1" />
                      <stop
                        offset="100%"
                        stopColor="#31564E"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  {/* Shaded Area */}
                  <path
                    d="M 0 180 C 50 160, 100 200, 150 180 S 250 100, 300 120 S 400 220, 450 180 S 550 50, 600 70 S 700 180, 750 140 L 800 180 L 800 250 L 0 250 Z"
                    fill="url(#chartGradient)"
                    className="w-full"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Line */}
                  <path
                    d="M 0 180 C 50 160, 100 200, 150 180 S 250 100, 300 120 S 400 220, 450 180 S 550 50, 600 70 S 700 180, 750 140 L 800 180"
                    fill="none"
                    stroke="#31564E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Interactive Points */}
                  <circle
                    cx="500"
                    cy="110"
                    r="5"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="600"
                    cy="70"
                    r="5"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="700"
                    cy="170"
                    r="5"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                {/* Tooltip Overlay */}
                <div className="absolute left-[70%] top-[45px] -translate-x-1/2">
                  <div className="bg-[#1C3A34] text-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold relative after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-l-transparent after:border-r-4 after:border-r-transparent after:border-t-4 after:border-t-[#1C3A34]">
                    <div className="text-[8px] text-slate-300 font-medium">
                      Oct 24
                    </div>
                    <div>3.5 hrs</div>
                  </div>
                </div>

                {/* X-Axis Labels */}
                <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-between text-[10px] font-bold text-slate-400 px-2 leading-none">
                  <span>Oct 1</span>
                  <span>Oct 7</span>
                  <span>Oct 14</span>
                  <span>Oct 21</span>
                  <span>Oct 28</span>
                  <span>Nov 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Learning Milestones Table */}
          <div className="rounded-[24px] bg-white shadow-sm border border-border/50 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border/50 flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground">
                Recent Learning Milestones
              </h3>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8FAFB]">
                  <tr>
                    <th className="px-6 md:px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Module/Lesson
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Skill Category
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Result
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Completion Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      module: "Intermediate Grammar II",
                      skill: "Reading",
                      color: "bg-blue-50 text-blue-500 border-blue-100",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Business Meeting Simulations",
                      skill: "Speaking",
                      color: "bg-purple-50 text-purple-500 border-purple-100",
                      duration: "45 Mins",
                      result: "B2 Proficiency",
                      resColor: "text-foreground",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Phrasal Verbs In Context",
                      skill: "Vocabulary",
                      color: "bg-orange-50 text-orange-500 border-orange-100",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Intermediate Grammar II",
                      skill: "Reading",
                      color: "bg-blue-50 text-blue-500 border-blue-100",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Business Meeting Simulations",
                      skill: "Speaking",
                      color: "bg-purple-50 text-purple-500 border-purple-100",
                      duration: "45 Mins",
                      result: "B2 Proficiency",
                      resColor: "text-foreground",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Phrasal Verbs In Context",
                      skill: "Vocabulary",
                      color: "bg-orange-50 text-orange-500 border-orange-100",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-sm font-bold text-foreground">
                          {row.module}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-lg text-[10px] font-bold border",
                            row.color
                          )}
                        >
                          {row.skill}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-sm font-bold text-foreground">
                          {row.duration}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className={cn("text-sm font-bold", row.resColor)}>
                          {row.result}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-sm font-bold text-foreground">
                          {row.date}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 text-center">
              <button className="text-sm font-black text-[#31564E] hover:underline decoration-2 underline-offset-4">
                Load More....
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content - Profile Info */}
      {activeTab === "Profile Info" && (
        <div className="space-y-6">
          {/* Top Row: Info & Health */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Info */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-foreground">
                  Personal Info
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Full Name
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Sarah Jenkins
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    sarah.j@example.com
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Phone Number
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    +44 7700 900077
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    State
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Karnataka
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Registration Date
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Dec 15, 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Subscription Details */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-foreground">
                  Subscription Details
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Current Plan
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#31564E]/10 text-[#31564E] text-[10px] font-bold border border-[#31564E]/20">
                    Premium AI
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Billing Cycle
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Annual
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Status
                  </span>
                  <span className="px-4 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Next Renewal
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    April 12, 2026
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Auto-Renew
                  </span>
                  <span className="text-sm font-bold text-green-600">ON</span>
                </div>
              </div>
            </div>

            {/* Account Health */}
            <div className="rounded-[24px] bg-[#31564E] shadow-sm p-6 md:p-8 text-white relative overflow-hidden flex flex-col h-full">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="text-lg font-bold">Account Health</h3>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  Sarah is among the top 15% active students this month. No
                  reported issues or billing disputes.
                </p>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Engagement Score</span>
                    <span className="text-sm font-bold">95%</span>
                  </div>
                  <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-[#BEF264] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Performance & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Card */}
            <div className="lg:col-span-2 rounded-[24px] bg-white shadow-sm border border-border/50 overflow-hidden flex flex-col">
              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Overall Learning Performance
                  </h3>
                  <span className="text-sm font-medium text-slate-500">
                    Total Learning Time:{" "}
                    <span className="text-foreground font-bold">45 hrs</span>
                  </span>
                </div>
                <div className="h-[1px] w-full bg-slate-100 mb-8" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-4">
                  {[
                    { value: "85%", color: "border-blue-500 text-blue-500" },
                    {
                      value: "75%",
                      color: "border-orange-500 text-orange-500",
                    },
                    { value: "75%", color: "border-green-600 text-green-600" },
                    {
                      value: "65%",
                      color: "border-purple-500 text-purple-500",
                    },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "relative h-28 w-28 rounded-full flex items-center justify-center border-[8px]",
                          stat.color
                        )}
                      >
                        <span className="text-xl font-black">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mastery Footer */}
              <div className="bg-[#31564E] p-6 md:px-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-white/90">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm font-bold">
                      Curriculum Mastery
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    12 / 20 Modules
                  </span>
                </div>
                <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden mb-3">
                  <div className="h-full w-[60%] bg-[#4ADE80] rounded-full" />
                </div>
                <p className="text-xs text-white/80 font-medium">
                  Excellent Progress In Advanced Reading. Needs More Focus On
                  Business Writing.
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Recent Activity
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Completed 'IELTS Reading Mastery'",
                    time: "2 Hours Ago",
                    icon: <CheckCircle2 className="h-4 w-4" />,
                    color: "bg-green-50 text-green-500",
                  },
                  {
                    title: "AI Speaking Practice (Set 14)",
                    time: "Yesterday, 4:30 PM",
                    icon: <Activity className="h-4 w-4" />,
                    color: "bg-blue-50 text-blue-500",
                  },
                  {
                    title: "Completed 'IELTS Reading Mastery'",
                    time: "2 Hours Ago",
                    icon: <CheckCircle2 className="h-4 w-4" />,
                    color: "bg-green-50 text-green-500",
                  },
                  {
                    title: "AI Speaking Practice (Set 14)",
                    time: "Yesterday, 4:30 PM",
                    icon: <Activity className="h-4 w-4" />,
                    color: "bg-blue-50 text-blue-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={cn(
                        "h-10 w-10 shrink-0 rounded-xl flex items-center justify-center shadow-sm",
                        item.color
                      )}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-foreground leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-8 h-12 rounded-2xl border-slate-200 text-[#30554d] font-bold text-[15px] hover:bg-slate-50 transition-all"
              >
                View Full Logs
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
