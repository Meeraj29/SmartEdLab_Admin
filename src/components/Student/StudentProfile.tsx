"use client";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Ban,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  CreditCard,
  Database,
  Download,
  FileText,
  History,
  Info,
  Laptop,
  LayoutGrid,
  LogIn,
  MessageSquare,
  Mic,
  MonitorSmartphone,
  MoreVertical,
  PencilLine,
  PlaySquare,
  RotateCcw,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  TrendingUp,
  User,
  Wallet,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StudentProfileProps {
  onBack: () => void;
}

const StudentProfile = ({ onBack }: StudentProfileProps) => {
  const [activeTab, setActiveTab] = React.useState<string>("Profile Info");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isChartDropdownOpen, setIsChartDropdownOpen] = React.useState(false);
  const [isAssessChartDropdownOpen, setIsAssessChartDropdownOpen] =
    React.useState(false);
  const [selectedPeriod, setSelectedPeriod] = React.useState("Last 30 Days");
  const [selectedAssessPeriod, setSelectedAssessPeriod] =
    React.useState("Last 6 Months");

  const menuRef = React.useRef<HTMLDivElement>(null);
  const chartDropdownRef = React.useRef<HTMLDivElement>(null);
  const assessChartDropdownRef = React.useRef<HTMLDivElement>(null);

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
      if (
        assessChartDropdownRef.current &&
        !assessChartDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAssessChartDropdownOpen(false);
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
      <div className="flex items-center mb-2">
        <button
          onClick={onBack}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100 transition-all"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <span className="text-lg font-medium text-foreground">Profile</span>
      </div>

      {/* Main Profile Header Card */}
      <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-4 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
            <div className="relative group shrink-0">
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

            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Sarah Jenkins
                </h2>
                <span className="px-3 py-1 rounded-sm text-black text-xs font-medium border border-[#FF7F38] bg-[#FF7F38]/30">
                  Premium AI
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                sarah.j@example.com
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3 mt-3 sm:mt-1">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span className="text-slate-500 font-medium whitespace-nowrap">
                    Status:
                  </span>
                  <span className="text-blue-600 font-bold">Active</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-500 font-medium whitespace-nowrap">
                    Joined:
                  </span>
                  <span className="text-foreground font-bold whitespace-nowrap">
                    Dec 15, 2025
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium whitespace-nowrap">Expiry:</span>
                  <span className="font-bold whitespace-nowrap">
                    April 12, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 relative w-full lg:w-auto"
            ref={menuRef}
          >
            <Button
              variant="outline"
              className="h-11 w-full sm:w-auto rounded-xl px-6 border-[#31564E] text-[#31564E] hover:bg-[#31564E] hover:text-white font-medium text-md transition-all"
            >
              Extend Subscription
            </Button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button className="h-11 flex-1 sm:w-auto sm:px-8 bg-black text-white font-medium text-md hover:bg-black/90 transition-all rounded-xl">
                Upgrade Plan
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100 shadow-sm transition-colors"
              >
                <MoreVertical className="h-5 w-5 text-slate-500" />
              </button>
            </div>

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
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#31564E] after:rounded-full"
                  : "text-black/40 hover:text-black/60"
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
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-7">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    12/20
                  </span>
                  <p className="text-sm font-inter font-medium text-black">
                    Modules Completed
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                  <LayoutGrid className="h-5 w-5" />
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-4">
                <div className="h-full w-[60%] bg-[#0D7FF2] rounded-full" />
              </div>
            </div>

            {/* Lessons Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-7">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    45/60
                  </span>
                  <p className="text-sm font-inter font-medium text-black">
                    Lessons Completed
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#7C411D] flex items-center justify-center text-white">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-4">
                <div className="h-full w-[75%] bg-[#0D7FF2] rounded-full" />
              </div>
            </div>

            {/* Total Time Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-7">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    45 hrs
                  </span>
                  <p className="text-sm font-inter font-medium text-black">
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
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-7">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    2 hrs ago
                  </span>
                  <p className="text-sm font-inter font-medium text-black">
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
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-7">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold font-inter text-foreground">
                  LSRW Skill Progress
                </h3>
                <button className="text-md font-medium text-[#31564E] hover:underline">
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
                        <span className="text-sm font-inter text-foreground leading-tight">
                          {skill.label}
                        </span>
                        <span className="text-[12px] font-inter text-[#000000]/60">
                          {skill.sub}
                        </span>
                      </div>
                      <span className="text-lg font-inter font-medium text-foreground">
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
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium font-inter text-foreground">
                    Student Progress Over Time
                  </h3>
                  <p className="text-[14px] font-inter text-black/70">
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
                            className="w-full px-4 py-2 text-sm font-inter text-black hover:bg-slate-50 transition-all text-left"
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
                  viewBox="0 0 800 250"
                  className="absolute inset-0 h-full w-full overflow-hidden"
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
                  <span className="hidden sm:inline">Oct 7</span>
                  <span>Oct 14</span>
                  <span className="hidden sm:inline">Oct 21</span>
                  <span>Oct 28</span>
                  <span className="hidden sm:inline">Nov 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Learning Milestones Table */}
          <div className="rounded-[14px] bg-white shadow-sm border border-border/50 overflow-hidden">
            <div className="p-6 md:p-7 border-b border-border/50 flex items-center justify-between">
              <h3 className="text-xl font-semibold font-inter text-foreground">
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
                    <th className="px-6 md:px-8 py-5 text-left text-md font-medium font-inter text-black/80 ">
                      Module/Lesson
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-md font-medium font-inter text-black/80">
                      Skill Category
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-md font-medium font-inter text-black/80">
                      Duration
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-md font-medium font-inter text-black/80">
                      Result
                    </th>
                    <th className="px-6 md:px-8 py-5 text-left text-md font-medium font-inter text-black/80">
                      Completion Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      module: "Intermediate Grammar II",
                      skill: "Reading",
                      color: "bg-[#007FFF]/30 text-[#007FFF] border-[#007FFF]",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Business Meeting Simulations",
                      skill: "Speaking",
                      color: "bg-[#823DFA]/30 text-[#823DFA] border-[#823DFA]",
                      duration: "45 Mins",
                      result: "B2 Proficiency",
                      resColor: "text-foreground",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Phrasal Verbs In Context",
                      skill: "Vocabulary",
                      color: "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Intermediate Grammar II",
                      skill: "Reading",
                      color: "bg-[#007FFF]/30 text-[#007FFF] border-[#007FFF]",
                      duration: "45 Mins",
                      result: "94% Score",
                      resColor: "text-green-600",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Business Meeting Simulations",
                      skill: "Speaking",
                      color: "bg-[#823DFA]/30 text-[#823DFA] border-[#823DFA]",
                      duration: "45 Mins",
                      result: "B2 Proficiency",
                      resColor: "text-foreground",
                      date: "Oct 28, 2025",
                    },
                    {
                      module: "Phrasal Verbs In Context",
                      skill: "Vocabulary",
                      color: "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]",
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
                        <span className="text-md font-medium font-inter text-foreground">
                          {row.module}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-sm text-md font-medium font-inter border",
                            row.color
                          )}
                        >
                          {row.skill}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-md font-medium font-inter text-foreground">
                          {row.duration}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "text-md font-medium font-inter text-[#248F5F]",
                            row.resColor
                          )}
                        >
                          {row.result}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-md font-medium font-inter text-foreground">
                          {row.date}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 text-center">
              <button className="text-md font-inter font-medium text-[#31564E] hover:underline decoration-2 underline-offset-4">
                Load More....
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content - Assessment Scores */}
      {activeTab === "Assessment Scores" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Tests Taken Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    24
                  </span>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Total Tests Taken
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#FF8001] to-[#FF7500] flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                  <ClipboardList className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+0%</span>
              </div>
            </div>

            {/* Average Score Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    82%
                  </span>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Average Score
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-[#884401] flex items-center justify-center text-white shadow-lg shadow-brown-500/20">
                  <BarChart3 className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+2%</span>
              </div>
            </div>

            {/* Pass Rate Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    95%
                  </span>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Pass Rate
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#823DFA] to-[#4D2494] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <Award className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+5.2</span>
              </div>
            </div>

            {/* Improvement Trend Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    +12%
                  </span>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Improvement Trend
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-[#007FFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">Vs last month</span>
              </div>
            </div>
          </div>

          {/* Student Progress Chart */}
          <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div className="space-y-1">
                <h3 className="text-xl font-medium font-inter text-foreground">
                  Student Progress Over Time
                </h3>
                <p className="text-sm font-inter text-black/70">
                  Learning Hours vs. Date (Last 30 Days)
                </p>
              </div>
              <div className="relative" ref={assessChartDropdownRef}>
                <button
                  onClick={() =>
                    setIsAssessChartDropdownOpen(!isAssessChartDropdownOpen)
                  }
                  className="flex items-center justify-between gap-3 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-foreground hover:bg-slate-50 transition-all min-w-[140px]"
                >
                  {selectedAssessPeriod}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-slate-400 transition-transform",
                      isAssessChartDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {isAssessChartDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-full rounded-xl bg-white shadow-lg border border-slate-100 py-1 z-50">
                    {["This Month", "Last 6 Months", "Yearly"].map((period) => (
                      <button
                        key={period}
                        onClick={() => {
                          setSelectedAssessPeriod(period);
                          setIsAssessChartDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-sm font-inter text-black hover:bg-slate-50 transition-all text-left"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative mt-8 h-[300px] w-full px-2">
              {/* Y-Axis Labels & Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[100, 75, 50, 25, 0].map((val) => (
                  <div key={val} className="flex items-center gap-4 w-full">
                    <span className="text-[10px] font-bold text-slate-400 w-8">
                      {val}%
                    </span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                  </div>
                ))}
              </div>

              {/* Chart SVG */}
              <div className="absolute inset-0 left-8 md:left-12 right-2 top-0 bottom-0">
                <svg
                  className="h-full w-full overflow-hidden"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 300"
                >
                  <defs>
                    <linearGradient
                      id="assessGradient"
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
                  {/* Fill Area */}
                  <path
                    d="M 0 250 C 100 230, 150 180, 210 160 S 300 180, 420 200 S 550 50, 750 30 S 900 150, 1000 50 L 1000 300 L 0 300 Z"
                    fill="url(#assessGradient)"
                    className="w-full"
                  />
                  {/* Line */}
                  <path
                    d="M 0 250 C 100 230, 150 180, 210 160 S 300 180, 420 200 S 550 50, 750 30 S 900 150, 1000 50"
                    fill="none"
                    stroke="#31564E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data Point Circles */}
                  <circle
                    cx="0"
                    cy="250"
                    r="4"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="210"
                    cy="160"
                    r="4"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="420"
                    cy="200"
                    r="4"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="630"
                    cy="90"
                    r="4"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="840"
                    cy="40"
                    r="4"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="1000"
                    cy="50"
                    r="4"
                    fill="#31564E"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-8 left-8 md:left-12 right-2 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-400 px-1">
                <span>MAY</span>
                <span className="hidden sm:inline">JUN</span>
                <span>JUL</span>
                <span className="hidden sm:inline">AUG</span>
                <span>SEP</span>
                <span className="hidden sm:inline">OCT</span>
              </div>
            </div>
          </div>

          {/* Recent Assessments Table */}
          <div className="rounded-[14px] bg-white shadow-sm border border-border/50 overflow-hidden mt-8">
            <div className="p-6 md:p-7 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl font-semibold font-inter text-foreground">
                Recent Assessments
              </h3>

              <Button
                variant="outline"
                className="h-10 rounded-xl px-6 gap-2 border-slate-200 text-md font-medium font-inter text-[#31564E] hover:bg-slate-50"
              >
                <SlidersHorizontal className="h-4 w-4" />
                All Status
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F8FAFB] text-black/80 border-b border-border/50 uppercase tracking-wider">
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Test Name
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors group">
                        Attempts
                        <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors group">
                        Score
                        <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Result
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Date
                    </th>
                    <th className="px-6 md:px-8 py-5 text-right font-medium font-inter">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      name: "B2 Business English Final",
                      attempts: "01",
                      score: "88%",
                      result: "PASS",
                      resultColor:
                        "bg-green-100 text-green-700 border-green-200",
                      date: "Oct 28, 2023",
                    },
                    {
                      name: "IELTS Speaking Simulation",
                      attempts: "02",
                      score: "75%",
                      result: "PASS",
                      resultColor:
                        "bg-green-100 text-green-700 border-green-200",
                      date: "Oct 15, 2023",
                    },
                    {
                      name: "Advanced Grammar Assessment",
                      attempts: "01",
                      score: "42%",
                      result: "Fail",
                      resultColor: "bg-red-100 text-red-700 border-red-200",
                      date: "Sep 30, 2023",
                    },
                    {
                      name: "Basic Vocabulary Quiz",
                      attempts: "02",
                      score: "92%",
                      result: "PASS",
                      resultColor:
                        "bg-green-100 text-green-700 border-green-200",
                      date: "Sep 12, 2023",
                    },
                    {
                      name: "B2 Business English Final",
                      attempts: "01",
                      score: "88%",
                      result: "PASS",
                      resultColor:
                        "bg-green-100 text-green-700 border-green-200",
                      date: "Oct 28, 2023",
                    },
                    {
                      name: "IELTS Speaking Simulation",
                      attempts: "02",
                      score: "75%",
                      result: "PASS",
                      resultColor:
                        "bg-green-100 text-green-700 border-green-200",
                      date: "Oct 15, 2023",
                    },
                    {
                      name: "Advanced Grammar Assessment",
                      attempts: "01",
                      score: "42%",
                      result: "Fail",
                      resultColor: "bg-red-100 text-red-700 border-red-200",
                      date: "Sep 30, 2023",
                    },
                    {
                      name: "Basic Vocabulary Quiz",
                      attempts: "02",
                      score: "92%",
                      result: "PASS",
                      resultColor:
                        "bg-green-100 text-green-700 border-green-200",
                      date: "Sep 12, 2023",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "hover:bg-slate-50/50 transition-colors group",
                        idx % 2 === 1 && "bg-slate-50/20"
                      )}
                    >
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                            <FileText className="h-5 w-5" />
                          </div>
                          <span className="text-md font-medium font-inter text-foreground">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 font-medium font-inter text-black/80 text-md">
                        {item.attempts}
                      </td>
                      <td className="px-6 md:px-8 py-5 font-medium font-inter text-black/80 text-md">
                        {item.score}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-sm text-md font-medium font-inter border uppercase",
                            item.resultColor
                          )}
                        >
                          {item.result}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80">
                        {item.date}
                      </td>
                      <td className="px-6 md:px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                            {/* <Monitor className="h-4 w-4" /> */}
                          </button>
                          <button className="p-2 text-slate-400 hover:text-foreground hover:bg-slate-100 rounded-lg transition-all">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Section */}
            <div className="p-8 flex items-center justify-between border-t border-border/50">
              <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                <button className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#31564E] bg-white text-[#31564E] font-bold shadow-sm">
                  1
                </button>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold hover:bg-slate-50 transition-all">
                  2
                </button>
                <span className="px-2 text-slate-300 font-bold">...</span>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold hover:bg-slate-50 transition-all">
                  10
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-400">
                  Showing{" "}
                  <span className="text-foreground font-black">1-8</span> of{" "}
                  <span className="text-foreground font-black">1,540</span>
                </span>
                <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-xl hover:bg-black/90 transition-all group">
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Sessions History */}
      {activeTab === "AI Practice History" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total AI Sessions Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    128
                  </span>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Total AI Sessions
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-[#FF8001] via-[#FF7500] to-[#FF6B00] flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                  <MessageSquare className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+5.2</span>
              </div>
            </div>

            {/* Tokens Used Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    45.2k
                  </span>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Tokens Used
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#884401] flex items-center justify-center text-white shadow-lg shadow-brown-500/20">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+5.2</span>
              </div>
            </div>

            {/* Avg Speaking Score Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-inter font-semibold text-foreground">
                      8.4
                    </span>
                    <span className="text-lg font-bold text-black/80">
                      / 10
                    </span>
                  </div>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Avg Speaking Score
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#823DFA] to-[#4D2494] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <Mic className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+5.2</span>
              </div>
            </div>

            {/* Avg Writing Score Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[160px]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-inter font-semibold text-foreground">
                      7.2
                    </span>
                    <span className="text-lg font-bold text-black/80">
                      / 10
                    </span>
                  </div>
                  <p className="text-md font-inter font-medium text-black mt-2">
                    Avg Writing Score
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#007FFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <PencilLine className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-bold">+5.2</span>
              </div>
            </div>
          </div>

          {/* AI Sessions History Table */}
          <div className="rounded-[14px] bg-white shadow-sm border border-border/50 overflow-hidden mt-8">
            <div className="p-6 md:p-8 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold font-inter text-foreground">
                  AI Sessions History
                </h3>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DCDCDC] border border-slate-200">
                  <span className="h-2 w-2 bg-[#248F5F] animate-pulse" />
                  <span className="text-md font-medium font-inter text-[#64748B]">
                    Live Practice Active
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-6 gap-2 border-slate-200 text-md font-inter text-[#31564E] hover:bg-slate-50"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Adjust Token Limit
                </Button>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-6 gap-2 border-slate-200 text-md font-inter text-[#31564E] hover:bg-slate-50"
                >
                  <Search className="h-4 w-4" />
                  Investigate Usage
                </Button>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-6 gap-2 border-red-100 text-[#FF3939] hover:bg-red-50 hover:text-red-600 font-medium font-inter text-xs ring-offset-background"
                >
                  <Ban className="h-4 w-4" />
                  Block AI Usage
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/30 text-muted-foreground border-b border-border/50">
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80">
                      <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors group">
                        Date
                        <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80">
                      <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors group whitespace-nowrap">
                        Session Duration
                        <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80">
                      <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors group whitespace-nowrap">
                        Tokens Consumed
                        <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80 whitespace-nowrap">
                      Speaking Score
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80 whitespace-nowrap">
                      Writing Feedback Summary
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter text-black/80 whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      date: "Oct 24, 2023",
                      time: "10:45 AM",
                      duration: "24m 15s",
                      tokens: "1,240",
                      score: "9.2",
                      scoreLabel: "Excellent",
                      scoreColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      feedback: "Strong Subject-Verb Agreement, Pun...",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "10:45 AM",
                      duration: "18m 40s",
                      tokens: "980",
                      score: "7.5",
                      scoreLabel: "Good",
                      scoreColor:
                        "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]/30",
                      feedback: "Needs Improvement On Sentence ...",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "10:45 AM",
                      duration: "32m 10s",
                      tokens: "2,105",
                      score: "6.2",
                      scoreLabel: "Avg",
                      scoreColor:
                        "bg-[#FF3939]/30 text-[#FF3939] border-[#FF3939]/30",
                      feedback: "Strong Subject-Verb Agreement, Pun...",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "10:45 AM",
                      duration: "18m 40s",
                      tokens: "980",
                      score: "7.5",
                      scoreLabel: "Good",
                      scoreColor:
                        "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]/30",
                      feedback: "Needs Improvement On Sentence ...",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "10:45 AM",
                      duration: "24m 15s",
                      tokens: "1,240",
                      score: "9.2",
                      scoreLabel: "Excellent",
                      scoreColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      feedback: "Strong Subject-Verb Agreement, Pun...",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "10:45 AM",
                      duration: "18m 40s",
                      tokens: "980",
                      score: "7.5",
                      scoreLabel: "Good",
                      scoreColor:
                        "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]/30",
                      feedback: "Needs Improvement On Sentence ...",
                    },
                  ].map((session, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "hover:bg-[#F7FFFA] transition-colors group",
                        idx % 2 === 1 && "bg-slate-50/40"
                      )}
                    >
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="text-md font-medium font-inter text-foreground whitespace-nowrap">
                            {session.date}
                          </span>
                          <span className="text-[12px]  font-inter text-black/80">
                            {session.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-md font-medium font-inter text-foreground">
                          {session.duration}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className="text-md font-medium font-inter text-foreground">
                          {session.tokens}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-[11px] font-bold border",
                            session.scoreColor
                          )}
                        >
                          {session.score} / {session.scoreLabel}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <p className="text-md font-medium text-black/80 font-inter line-clamp-1 max-w-[300px]">
                          {session.feedback}
                        </p>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-right">
                        <button className="p-2 text-slate-400 hover:text-foreground hover:bg-white hover:shadow-sm rounded-lg transition-all">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination Section */}
            <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50">
              {/* Prev Button */}
              <button className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full border-2 border-[#31564E] bg-white text-[#31564E] font-bold text-sm">
                  1
                </button>
                <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold text-sm">
                  2
                </button>
                <span className="px-1 text-slate-300 font-bold text-sm">
                  ...
                </span>
                <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold text-sm">
                  10
                </button>
              </div>

              {/* Right Section */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                <span className="text-xs md:text-sm font-medium text-slate-400">
                  Showing <span className="text-foreground font-bold">1-8</span>{" "}
                  of <span className="text-foreground font-bold">1,540</span>
                </span>

                <button className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-black/90 transition-all group">
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content - Payment History */}
      {activeTab === "Payment History" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Payments Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[130px]">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    ₹1,240
                  </span>
                  <p className="text-md font-inter font-medium text-foreground mt-4">
                    Total Payments
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#FF8001] to-[#FF7500] flex items-center justify-center text-white shadow-lg shadow-orange-500/10">
                  <Wallet className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Active Plan Value Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[130px]">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-inter font-semibold text-foreground">
                      ₹199
                    </span>
                    <span className="text-md font-inter font-medium text-slate-400">
                      /mo
                    </span>
                  </div>
                  <p className="text-md font-inter font-medium text-foreground mt-4">
                    Active Plan Value
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#884401] flex items-center justify-center text-white shadow-lg shadow-brown-500/10">
                  <PlaySquare className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Refunds Processed Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[130px]">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    ₹0.00
                  </span>
                  <p className="text-md font-inter font-medium text-foreground mt-4">
                    Refunds Processed
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#823DFA] to-[#4D2494] flex items-center justify-center text-white shadow-lg shadow-purple-500/10">
                  <RotateCcw className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Pending Payments Card */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between h-[130px]">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-2xl font-inter font-semibold text-foreground">
                    ₹0.00
                  </span>
                  <p className="text-md font-inter font-medium text-foreground mt-4">
                    Pending Payments
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#007FFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/10">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Billing History Table */}
          <div className="rounded-[14px] bg-white shadow-sm border border-border/50 overflow-hidden mt-8">
            <div className="p-6 md:p-8 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl font-semibold font-inter text-foreground">
                Billing History
              </h3>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 gap-2 border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 gap-2 border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/30 text-muted-foreground border-b border-border/50">
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Plan Purchased
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Date
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Amount
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Status
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Invoice
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter whitespace-nowrap">
                      Transaction ID
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      plan: "Premium Monthly Plan",
                      date: "Oct 12, 2023",
                      amount: "₹199.00",
                      status: "Paid",
                      statusColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      invoice: "INV-2023-10",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Premium Monthly Plan",
                      date: "Sep 12, 2023",
                      amount: "₹199.00",
                      status: "Paid",
                      statusColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      invoice: "INV-2023-09",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Study Material Bundle",
                      date: "Oct 12, 2023",
                      amount: "₹199.00",
                      status: "Pending",
                      statusColor:
                        "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]/30",
                      invoice: "Processing...",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Premium Monthly Plan",
                      date: "Sep 12, 2023",
                      amount: "₹199.00",
                      status: "Paid",
                      statusColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      invoice: "INV-2023-09",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Premium Monthly Plan",
                      date: "Oct 12, 2023",
                      amount: "₹199.00",
                      status: "Paid",
                      statusColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      invoice: "INV-2023-10",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Premium Monthly Plan",
                      date: "Sep 12, 2023",
                      amount: "₹199.00",
                      status: "Paid",
                      statusColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      invoice: "INV-2023-09",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Study Material Bundle",
                      date: "Oct 12, 2023",
                      amount: "₹199.00",
                      status: "Pending",
                      statusColor:
                        "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]/30",
                      invoice: "Processing...",
                      txid: "TXN_9A8B7C6D5E",
                    },
                    {
                      plan: "Premium Monthly Plan",
                      date: "Sep 12, 2023",
                      amount: "₹199.00",
                      status: "Paid",
                      statusColor:
                        "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                      invoice: "INV-2023-09",
                      txid: "TXN_9A8B7C6D5E",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "hover:bg-slate-50/50 transition-colors",
                        idx % 2 === 1 && "bg-slate-50/20"
                      )}
                    >
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm border border-slate-200/50">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                          <span className="text-md font-semibold font-inter text-foreground whitespace-nowrap">
                            {item.plan}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 font-medium font-inter text-slate-500 text-sm whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="px-6 md:px-8 py-5 font-medium font-inter text-foreground text-sm">
                        {item.amount}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold border",
                            item.statusColor
                          )}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        {item.invoice.startsWith("INV") ? (
                          <div className="flex items-center gap-2 text-black whitespace-nowrap cursor-pointer hover:underline underline-offset-4 decoration-2">
                            <FileText className="h-4 w-4 text-[#0D7FF2]" />
                            <span className="text-md font-medium text-black">
                              {item.invoice}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400 italic font-medium">
                            {item.invoice}
                          </span>
                        )}
                      </td>
                      <td className="px-6 md:px-8 py-5 font-medium text-black text-[16px] font-inter tracking-tight">
                        {item.txid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Section */}
            <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50">
              {/* Prev Button */}
              <button className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full border-2 border-[#31564E] bg-white text-[#31564E] font-bold text-sm shadow-sm">
                  1
                </button>
                <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold text-sm hover:bg-slate-50 transition-all">
                  2
                </button>
                <span className="px-1 text-slate-300 font-bold text-sm">
                  ...
                </span>
                <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold text-sm hover:bg-slate-50 transition-all">
                  10
                </button>
              </div>

              {/* Right Section */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                <span className="text-xs md:text-sm font-medium text-slate-400">
                  Showing <span className="text-foreground font-bold">1-8</span>{" "}
                  of <span className="text-foreground font-bold">1,540</span>
                </span>

                <button className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-black/90 transition-all group">
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Cards: Payment Method & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Default Payment Method Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="h-5 w-5 text-[#0081FF]" />
                  <h3 className="text-xl font-semibold font-inter text-foreground">
                    Default Payment Method
                  </h3>
                </div>

                <div className="bg-[#F0F7FF] rounded-2xl p-6 flex items-center gap-4 border border-blue-100/50">
                  <div className="h-10 w-16 bg-[#E2E8F0] border border-slate-200 rounded-lg flex items-center justify-center shadow-sm whitespace-nowrap px-2">
                    <span className="text-[10px] font-black italic text-[#001D45] tracking-tighter">
                      VISA
                    </span>
                  </div>
                  <div>
                    <p className="text-md font-semibold font-inter text-foreground">
                      Visa ending in 4242
                    </p>
                    <p className="text-xs font-inter text-black/60">
                      Expires 12/26
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Support Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-5 w-5 text-[#0081FF]" />
                <h3 className="text-xl font-semibold font-inter text-foreground">
                  Billing Support
                </h3>
              </div>
              <p className="text-[16px] font-nter text-[#475569] mb-8 leading-relaxed max-w-[320px]">
                Need help with a specific transaction or need a custom invoice
                for tax purposes?
              </p>
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-[#31564E] text-[#31564E] hover:text-white hover:bg-[#31564E] font-medium font-inter text-xs cursor-pointer transition-all uppercase tracking-wider"
              >
                Contact Finance Support
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content - Login History */}
      {activeTab === "Login History" && (
        <div className="space-y-6">
          <div className="rounded-[24px] bg-white shadow-sm border border-border/50 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl font-semibold font-inter text-foreground">
                Security Activity Logs
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <div className="relative" ref={chartDropdownRef}>
                  <button
                    onClick={() => setIsChartDropdownOpen(!isChartDropdownOpen)}
                    className="flex items-center justify-between gap-3 px-4 py-2 border border-slate-200 rounded-xl text-sm  font-inter text-foreground hover:bg-slate-50 transition-all min-w-[140px] h-10"
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
                      {[
                        "Last 7 Days",
                        "Last 30 Days",
                        "Last 6 Months",
                        "This Year",
                      ].map((period) => (
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
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 gap-2 border-slate-200 text-md  font-inter text-slate-600 hover:bg-slate-50"
                >
                  All Devices
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>

                <div className="relative">
                  <Wifi className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="IP Address search..."
                    className="h-10 w-full md:w-48 rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#31564E]/10 focus:border-[#31564E]"
                  />
                </div>

                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 gap-2 border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/30 text-muted-foreground border-b border-border/50">
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter whitespace-nowrap">
                      Login Date & Time
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      IP Address
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Device Info
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Location
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Status
                    </th>
                    <th className="px-6 md:px-8 py-5 text-md font-medium font-inter">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "MacBook Pro",
                      os: "macOS • Chrome",
                      icon: <Laptop className="h-5 w-5" />,
                      location: "San Francisco, CA",
                      status: "Success",
                      statusType: "success",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "iPhone 15 Pro",
                      os: "iOS • Safari",
                      icon: <Smartphone className="h-5 w-5" />,
                      location: "London, UK",
                      status: "Unusual Location",
                      statusType: "unusual",
                      subtext: "Flagged For Review",
                      action: "Review",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "MacBook Pro",
                      os: "macOS • Chrome",
                      icon: <Laptop className="h-5 w-5" />,
                      location: "San Francisco, CA",
                      status: "Success",
                      statusType: "success",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "Unknown Device",
                      os: "Linux • Firefox",
                      icon: <Activity className="h-5 w-5" />,
                      location: "Moscow, RU",
                      status: "New Device",
                      statusType: "alert",
                      subtext: "Blocked Automatically",
                      action: "Unblock IP",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "MacBook Pro",
                      os: "macOS • Chrome",
                      icon: <Laptop className="h-5 w-5" />,
                      location: "San Francisco, CA",
                      status: "Success",
                      statusType: "success",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "iPhone 15 Pro",
                      os: "iOS • Safari",
                      icon: <Smartphone className="h-5 w-5" />,
                      location: "London, UK",
                      status: "Unusual Location",
                      statusType: "unusual",
                      subtext: "Flagged For Review",
                      action: "Review",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "MacBook Pro",
                      os: "macOS • Chrome",
                      icon: <Laptop className="h-5 w-5" />,
                      location: "San Francisco, CA",
                      status: "Success",
                      statusType: "success",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      ip: "192.168.1.42",
                      device: "Unknown Device",
                      os: "Linux • Firefox",
                      icon: <Activity className="h-5 w-5" />,
                      location: "Moscow, RU",
                      status: "New Device",
                      statusType: "alert",
                      subtext: "Blocked Automatically",
                      action: "Unblock IP",
                    },
                  ].map((log, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "hover:bg-slate-50/50 transition-colors",
                        idx % 2 === 1 && "bg-slate-50/20"
                      )}
                    >
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="text-md font-semibold font-inter text-foreground leading-tight">
                            {log.date}
                          </span>
                          <span className="text-xs text-black/50 font-inter">
                            {log.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-md font-medium font-inter text-foreground leading-tight">
                        {log.ip}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm border border-slate-200/50">
                            {log.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-md font-semibold text-foreground leading-none mb-1">
                              {log.device}
                            </span>
                            <span className="text-[14px] text-black/60 font-inter">
                              {log.os}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-md font-medium font-inter whitespace-nowrap">
                        {log.location}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col gap-1">
                          <div
                            className={cn(
                              "flex items-center gap-1.5 px-3 py-1 rounded-full w-fit border font-bold text-[10px] whitespace-nowrap",
                              log.statusType === "success" &&
                                "bg-[#248F5F]/30 text-[#248F5F] border-[#248F5F]/30",
                              log.statusType === "unusual" &&
                                "bg-[#FF7F38]/30 text-[#FF7F38] border-[#FF7F38]/30",
                              log.statusType === "alert" &&
                                "bg-[#FF3939]/30 text-[#FF3939] border-[#FF3939]/30"
                            )}
                          >
                            {log.statusType === "unusual" && (
                              <MonitorSmartphone className="h-3 w-3" />
                            )}
                            {log.statusType === "alert" && (
                              <MonitorSmartphone className="h-3 w-3" />
                            )}
                            {log.status}
                          </div>
                          {log.subtext && (
                            <span className="text-[10px] text-red-400 font-bold ml-1 tracking-tight">
                              {log.subtext}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        {log.action ? (
                          <button
                            className={cn(
                              "text-sm font-bold hover:underline underline-offset-4 decoration-2",
                              log.action === "Review"
                                ? "text-[#31564E]"
                                : "text-red-500"
                            )}
                          >
                            {log.action}
                          </button>
                        ) : (
                          <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Section */}
            <div className="p-8 flex items-center justify-between border-t border-border/50">
              <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                <button className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#31564E] bg-white text-[#31564E] font-bold shadow-sm">
                  1
                </button>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold hover:bg-slate-50 transition-all">
                  2
                </button>
                <span className="px-2 text-slate-300 font-bold">...</span>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold hover:bg-slate-50 transition-all">
                  10
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-400">
                  Showing{" "}
                  <span className="text-foreground font-black">1-8</span> of{" "}
                  <span className="text-foreground font-black">1,540</span>
                </span>
                <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-xl hover:bg-black/90 transition-all group">
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Security Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Active Devices Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 px-8 flex items-center justify-between h-[130px]">
              <div className="space-y-1">
                <span className="text-xl font-inter font-semibold text-foreground">
                  2
                </span>
                <p className="text-md font-inter font-medium text-slate-500">
                  Active within last 30 days
                </p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF8001] to-[#FF7500] flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>

            {/* Risk Level Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 px-8 flex items-center justify-between h-[130px]">
              <div className="space-y-1">
                <span className="text-2xl font-inter font-semibold text-foreground leading-none">
                  Moderate
                </span>
                <p className="text-md font-inter font-medium text-black mt-2">
                  2 flags in the last week
                </p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-[#884401] flex items-center justify-center text-white shadow-lg shadow-brown-500/20">
                <ShieldAlert className="h-7 w-7" />
              </div>
            </div>

            {/* Total Logins Card */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 px-8 flex items-center justify-between h-[130px]">
              <div className="space-y-1">
                <span className="text-2xl font-inter font-semibold text-foreground leading-none">
                  142
                </span>
                <p className="text-md font-inter font-medium text-black mt-2">
                  Avg 4.2 logins per day
                </p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#823DFA] to-[#4D2494] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                <LogIn className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content - Activity Logs */}
      {activeTab === "Activity Logs" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-8 flex flex-col justify-center h-[140px]">
              <span className="text-2xl font-inter font-semibold text-foreground leading-none">
                128
              </span>
              <p className="text-[16px] font-medium text-black font-inter mt-4">
                Total Actions
              </p>
            </div>
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-8 flex flex-col justify-center h-[140px]">
              <span className="text-2xl font-inter font-semibold text-foreground leading-none">
                84
              </span>
              <p className="text-[16px] font-medium text-black font-inter mt-4">
                Admin Actions
              </p>
            </div>
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-8 flex flex-col justify-center h-[140px]">
              <span className="text-2xl font-inter font-semibold text-foreground leading-none">
                44
              </span>
              <p className="text-[16px] font-medium text-black font-inter mt-4">
                System Events
              </p>
            </div>
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-8 flex flex-col justify-center h-[140px]">
              <span className="text-2xl font-inter font-semibold text-foreground leading-none">
                2
              </span>
              <p className="text-[16px] font-medium text-black font-inter mt-4">
                Suspensions
              </p>
            </div>
          </div>

          <div className="rounded-[14px] bg-white shadow-sm border border-border/50 overflow-hidden mt-8">
            <div className="p-6 md:p-8 border-b border-border/50 bg-slate-50/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by student, email id..."
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#31564E]/10 focus:border-[#31564E]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="outline"
                    className="h-11 rounded-xl px-4 gap-2 border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 min-w-[120px]"
                  >
                    All Time
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 rounded-xl px-4 gap-2 border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    <ChevronDown className="h-4 w-4 opacity-50 ml-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 rounded-xl px-4 gap-2 border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                  >
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-black/60 border-b border-border/50 font-medium text-[16px]">
                    <th className="px-6 md:px-8 py-5">Login Date & Time</th>
                    <th className="px-6 md:px-8 py-5">Action</th>
                    <th className="px-6 md:px-8 py-5">Performed By</th>
                    <th className="px-6 md:px-8 py-5">Details</th>
                    <th className="px-6 md:px-8 py-5">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      date: "Oct 24, 2023",
                      time: "14:22:15 PM",
                      action: "Plan Upgrade",
                      actionType: "blue",
                      performer: "Super Admin",
                      role: "Super Admin",
                      details: "Upgraded To Premium Plan From Basic Monthly.",
                      type: "admin",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      action: "Account Suspended",
                      actionType: "red",
                      performer: "System",
                      role: "System",
                      details: "Automated Suspension Due ...",
                      type: "system",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "14:22:15 PM",
                      action: "Token Adjustment",
                      actionType: "orange",
                      performer: "Billing Admin",
                      role: "Billing Admin",
                      details: "Manually Added 50 Tokens (Courtesy Credit).",
                      type: "admin",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      action: "Course Unlock",
                      actionType: "green",
                      performer: "Instructor 04",
                      role: "Instructor 04",
                      details:
                        "Unlocked 'Advanced UI Design' Course For Student.",
                      type: "system",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "14:22:15 PM",
                      action: "Plan Upgrade",
                      actionType: "blue",
                      performer: "Super Admin",
                      role: "Super Admin",
                      details: "Upgraded To Premium Plan From Basic Monthly.",
                      type: "admin",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      action: "Account Suspended",
                      actionType: "red",
                      performer: "System",
                      role: "System",
                      details: "Automated Suspension Due ...",
                      type: "system",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "14:22:15 PM",
                      action: "Token Adjustment",
                      actionType: "orange",
                      performer: "Billing Admin",
                      role: "Billing Admin",
                      details: "Manually Added 50 Tokens (Courtesy Credit).",
                      type: "admin",
                    },
                    {
                      date: "Oct 24, 2023",
                      time: "09:42 AM",
                      action: "Course Unlock",
                      actionType: "green",
                      performer: "Instructor 04",
                      role: "Instructor 04",
                      details:
                        "Unlocked 'Advanced UI Design' Course For Student.",
                      type: "system",
                    },
                  ].map((log, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "hover:bg-slate-50/50 transition-colors",
                        idx % 2 === 1 && "bg-slate-50/20"
                      )}
                    >
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="text-[16px] font-semibold font-inter text-foreground leading-tight">
                            {log.date}
                          </span>
                          <span className="text-xs text-black/60 font-inter">
                            {log.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span
                          className={cn(
                            "px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap",
                            log.actionType === "blue" &&
                              "bg-[#007FFF]/30 text-[#007FFF]",
                            log.actionType === "red" &&
                              "bg-[#FF3939]/30 text-[#FF3939]",
                            log.actionType === "orange" &&
                              "bg-[#FF7F38]/30 text-[#FF7F38]",
                            log.actionType === "green" &&
                              "bg-[#248F5F]/30 text-[#248F5F]"
                          )}
                        >
                          {log.action}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm border border-slate-200/50 shrink-0">
                            {log.type === "admin" ? (
                              <User className="h-5 w-5" />
                            ) : (
                              <Settings className="h-5 w-5" />
                            )}
                          </div>
                          <span className="text-[16px] font-semibold text-foreground truncate max-w-[120px]">
                            {log.performer}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-[16px] font-medium text-black max-w-[300px] truncate">
                        {log.details}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400">
                          <Info className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Section */}
            <div className="p-8 flex items-center justify-between border-t border-border/50">
              <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                <button className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#31564E] bg-white text-[#31564E] font-bold shadow-sm">
                  1
                </button>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold hover:bg-slate-50 transition-all">
                  2
                </button>
                <span className="px-2 text-slate-300 font-bold">...</span>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-bold hover:bg-slate-50 transition-all">
                  10
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-400">
                  Showing{" "}
                  <span className="text-foreground font-black">1-8</span> of{" "}
                  <span className="text-foreground font-black">1,540</span>
                </span>
                <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-xl hover:bg-black/90 transition-all group">
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Profile Info" && (
        <div className="space-y-4">
          {/* Top Row: Info & Health */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Info */}
            <div className="rounded-[12px] bg-white shadow-sm border border-border/50 p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md text-foreground font-medium">
                  Personal Info
                </h3>
              </div>
              <hr className="border-border/100 mb-6" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Full Name
                  </span>
                  <span className="text-md font-inter text-foreground">
                    Sarah Jenkins
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Email Address
                  </span>
                  <span className="text-md font-inter text-foreground truncate">
                    sarah.j@example.com
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Phone Number
                  </span>
                  <span className="text-md font-inter text-foreground">
                    +44 7700 900077
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    State
                  </span>
                  <span className="text-md font-inter text-foreground">
                    Karnataka
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Registration Date
                  </span>
                  <span className="text-md font-inter text-foreground">
                    Dec 15, 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Subscription Details */}
            <div className="rounded-[12px] bg-white shadow-sm border border-border/50 p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-foreground">
                  Subscription Details
                </h3>
              </div>
              <hr className="border-border/100 mb-6" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Current Plan
                  </span>
                  <span className="px-3 py-1 rounded-sm font-inter text-black text-xs font-medium border border-[#FF7F38] bg-[#FF7F38]/30">
                    Premium AI
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Billing Cycle
                  </span>
                  <span className="text-md font-inter text-foreground">
                    Annual
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Status
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#248F5F]/40 text-[#248F5F] text-sm font-medium border border-green-100">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Next Renewal
                  </span>
                  <span className="text-md font-inter text-foreground">
                    April 12, 2026
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md font-inter text-black/70">
                    Auto-Renew
                  </span>
                  <span className="text-md font-inter text-[#248F5F]">ON</span>
                </div>
              </div>
            </div>

            {/* Account Health */}
            <div className="rounded-[14px] bg-[#31564E] shadow-sm p-6 md:p-8 text-white relative overflow-hidden flex flex-col h-full">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="text-lg font-inter font-medium">
                    Account Health
                  </h3>
                </div>
                <p className="text-md font-inter text-[#fff]/80 leading-relaxed mb-6">
                  Sarah is among the top 15% active students this month. No
                  reported issues or billing disputes.
                </p>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-inter text-white">
                      Engagement Score
                    </span>
                    <span className="text-lg font-inter font-medium text-white">
                      95%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-white rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-[#248F5F]/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Performance & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Card */}
            <div className="lg:col-span-2 rounded-[14px] bg-white shadow-sm border border-border/50 overflow-hidden flex flex-col">
              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-inter font-medium text-foreground">
                    Overall Learning Performance
                  </h3>
                  <span className="text-md font-inter text-black/70">
                    Total Learning Time:{" "}
                    <span className="text-foreground font-inter text-md">
                      45 hrs
                    </span>
                  </span>
                </div>
                <div className="h-[1px] w-full bg-slate-100 mb-12" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
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
                    <span className="text-sm font-inter">
                      Curriculum Mastery
                    </span>
                  </div>
                  <span className="text-lg font-medium font-inter text-white">
                    12 / 20 Modules
                  </span>
                </div>
                <div className="h-3 w-full bg-[#DDDDDD] rounded-full overflow-hidden mb-3">
                  <div className="h-full w-[60%] bg-[#43CA8D] rounded-full" />
                </div>
                <p className="text-sm text-white font-inter">
                  Excellent progress in Advanced Reading. Needs more focus on
                  Business Writing.
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-[14px] bg-white shadow-sm border border-border/50 p-6 md:p-8">
              <h3 className="text-lg font-inter font-medium text-foreground mb-4">
                Recent Activity
              </h3>
              <hr className="border-border/100 mb-6" />
              <div className="space-y-6">
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
                        "h-8 w-8 shrink-0 rounded-lg flex items-center justify-center shadow-sm",
                        item.color
                      )}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-md font-inter font-medium text-foreground leading-tight">
                        {item.title}
                      </span>
                      <span className="text-sm text-black/80 font-inter">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-8 h-12 rounded-2xl border-2 border-[#31564E] text-[#31564E] font-bold text-[15px] hover:bg-[#31564E] hover:text-white transition-all"
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
