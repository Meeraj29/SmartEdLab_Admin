"use client";

import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowUp,
  Ban,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Globe,
  GraduationCap,
  History,
  Key,
  LayoutGrid,
  Lock,
  LogIn,
  MessageSquare,
  MoreVertical,
  Pencil,
  PlayCircle,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldX,
  Sliders,
  Sparkles,
  TrendingDown,
  TrendingUp,
  UserPlus,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InstituteProfileProps {
  onBack: () => void;
}

const InstituteProfile = ({ onBack }: InstituteProfileProps) => {
  const [activeTab, setActiveTab] = React.useState("Overview");
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const overviewStats = [
    {
      value: "1,284",
      label: "Total Institutes",
      subtext: "142 this month",
      trend: "+12.5%",
      trendType: "up",
      icon: Building2,
      color: "bg-[#FF8206]",
    },
    {
      value: "458.2k",
      label: "Total Students",
      subtext: "Include all institutes",
      trend: "31.3 %",
      trendType: "up",
      icon: GraduationCap,
      color: "bg-white",
      iconColor: "text-[#31564E]",
      cardBg: "bg-[#31564E]",
      textColor: "text-white",
      subtextColor: "text-white/60",
      isHighlighted: true,
    },
    {
      value: "12.4K",
      label: "Total Tutors",
      subtext: "Include all institutes",
      trend: "17.3 %",
      trendType: "up",
      icon: Users,
      color: "bg-[#8B5CF6]",
    },
    {
      value: "45,820",
      label: "AI session Count",
      subtext: "Include all plan types",
      trend: "5.4 %",
      trendType: "down",
      icon: MessageSquare,
      color: "bg-[#92400E]",
    },
  ];

  const currentStats = overviewStats;

  return (
    <div className="space-y-6">
      {/* Navigation Back Link */}
      {/* Header Section */}
      <div className="space-y-4">
        {/* Navigation Back Link */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 group transition-all"
        >
          <ArrowLeft className="h-5 w-5 text-slate-800" />
          <span className="text-[17px] font-medium text-slate-800">
            Institutes
          </span>
        </button>

        {/* Identity & Actions Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-[24px] font-semibold text-slate-900 tracking-tight">
              Oxford Academy
            </h2>
            <span className="bg-[#FFF1E7] text-[#FF8206] px-2.5 py-1 rounded-lg text-[12px] font-medium border border-[#FF8206]/30 uppercase tracking-widest shadow-sm">
              ENTERPRISE
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-[#F17575] font-black hover:text-rose-600 hover:bg-rose-50 px-4 rounded-xl text-[15px]"
            >
              Suspend Account
            </Button>
            <Button className="h-14 bg-black hover:bg-black/90 text-white px-8 rounded-2xl flex items-center gap-3 font-black text-[15px] shadow-xl shadow-black/10 transition-all active:scale-95">
              Manage Institute
              <ChevronDown className="h-5 w-5 opacity-50" />
            </Button>
          </div>
        </div>
      </div>
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {currentStats.map((stat, i) => (
          <div
            key={i}
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
                    "text-[26px] font-semibold tracking-tight",
                    stat.textColor || "text-slate-900"
                  )}
                >
                  {stat.value}
                </h3>
                <p
                  className={cn(
                    "text-[16px] font-medium tracking-tight mt-7",
                    stat.textColor || "text-slate-800"
                  )}
                >
                  {stat.label}
                </p>
              </div>
              <p
                className={cn(
                  "text-[14px] font-medium opacity-60",
                  stat.textColor || "text-slate-400"
                )}
              >
                {stat.subtext}
              </p>
            </div>

            {/* Right Section: Icon Box, Trend Pill */}
            <div className="flex flex-col justify-between items-end pb-1">
              <div
                className={cn(
                  "h-14 w-14 rounded-[20px] flex items-center justify-center shadow-lg shadow-black/5",
                  stat.color,
                  stat.iconColor || "text-white"
                )}
              >
                <stat.icon className="h-7 w-7" />
              </div>

              <div
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-black tracking-tight",
                  stat.trendType === "up"
                    ? stat.isHighlighted
                      ? "bg-white/10 text-[#32D583]"
                      : "bg-emerald-50 text-emerald-600"
                    : "bg-rose-50 text-rose-500"
                )}
              >
                {stat.trendType === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                )}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* Profile Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 mt-8">
        <div className="flex items-center gap-10">
          {[
            "Overview",
            "Students",
            "Tutors",
            "Courses",
            "AI Usage",
            "Revenue",
            "Security",
            "Active Logs",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative pb-4 text-[17px] font-black transition-all",
                activeTab === tab
                  ? "text-[#1E293B]"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4B6B64] rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content Implementation */}
      <div className="space-y-8 pb-10">
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 duration-500">
            {/* Card 1: Total Tutors (Bar Chart) */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-[18px] font-semibold text-slate-800">
                Total Tutors
              </h3>
              <div className="relative h-48 bg-[#F8F9FA] rounded-[20px] p-6 flex items-end justify-between overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-slate-100 w-full" />
                  ))}
                </div>
                <div className="flex flex-col items-center gap-4 w-12">
                  <div className="w-full bg-[#BFDBFE] rounded-t-sm h-16 transition-all" />
                  <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">
                    Week 1
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4 w-12">
                  <div className="w-full bg-[#93C5FD] rounded-t-sm h-20 transition-all" />
                  <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">
                    Week 2
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4 w-12">
                  <div className="w-full bg-[#60A5FA] rounded-t-sm h-32 transition-all" />
                  <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">
                    Week 3
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4 w-12">
                  <div className="w-full bg-[#3B82F6] rounded-t-sm h-40 transition-all" />
                  <span className="text-[11px] font-bold text-slate-800 whitespace-nowrap">
                    Current
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Student Growth (Wavy Line Chart) */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-[18px] font-semibold text-slate-800">
                Student Growth
              </h3>
              <div className="relative h-48 flex flex-col justify-between">
                <svg
                  className="w-full h-32 overflow-visible"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 C50,60 80,20 120,40 C160,60 180,80 220,10 C260,-20 300,60 350,40 C400,20 400,20 400,20"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="3"
                  />
                  <circle
                    cx="120"
                    cy="40"
                    r="4"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="220"
                    cy="10"
                    r="4"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="350"
                    cy="40"
                    r="4"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                <div className="flex justify-between w-full px-1">
                  {["May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-semibold text-slate-400"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Revenue Trend (Rising Line) */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-slate-800">
                  Revenue Trend
                </h3>
                <span className="text-[12px] font-bold text-emerald-500">
                  +18% vs LW
                </span>
              </div>
              <div className="relative h-48 bg-[#EBF5FF] rounded-[24px] overflow-hidden flex flex-col">
                <svg
                  className="flex-1 w-full"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 Q100,70 150,50 T300,20 T400,10 L400,100 L0,100 Z"
                    fill="#C3E1FF"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M0,80 Q100,70 150,50 T300,20 T400,10"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                  />
                </svg>
                <div className="flex justify-between items-center px-6 py-4">
                  {["Monday", "Wednesday", "Friday", "Today"].map((d) => (
                    <span
                      key={d}
                      className="text-[11px] font-semibold text-slate-400"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: IP Restriction Mode Status (Donut) */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-[18px] font-semibold text-slate-800">
                IP Restriction Mode Status
              </h3>
              <div className="flex flex-col items-center gap-6">
                <div className="relative h-40 w-40">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#EFF6FF"
                      strokeWidth="12"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      strokeDasharray="251.32"
                      strokeDashoffset="80.42"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-slate-200" />
                      <span className="text-[13px] font-medium text-slate-500">
                        Open Mode
                      </span>
                    </div>
                    <span className="text-[13px] font-bold text-slate-800">
                      68%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="text-[13px] font-medium text-slate-500">
                        Lab Mode
                      </span>
                    </div>
                    <span className="text-[13px] font-bold text-slate-800">
                      32%
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-400 text-center pt-2">
                    * Based on last 24h traffic
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Active Subscription (Area) */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-8 relative">
              <h3 className="text-[18px] font-semibold text-slate-800">
                Active Subscription
              </h3>
              <div className="relative h-48">
                {/* Peak Tooltip */}
                <div className="absolute top-4 right-12 bg-white/90 backdrop-blur shadow-lg border border-slate-100 rounded-xl px-4 py-2 z-10 animate-bounce">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                    Current Peak
                  </p>
                  <p className="text-[15px] font-black text-blue-600">8.4 M</p>
                </div>
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 C50,85 100,80 150,85 C200,90 250,60 300,75 C350,90 400,60 400,60 L400,100 L0,100 Z"
                    fill="#EEF2FF"
                  />
                  <path
                    d="M0,80 C50,85 100,80 150,85 C200,90 250,60 300,75 C350,90 400,60 400,60"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Card 6: Infrastructure Security (Donut) */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-[18px] font-semibold text-slate-800">
                Infrastructure Security
              </h3>
              <div className="flex flex-col items-center gap-8">
                <div className="relative h-44 w-44">
                  <svg
                    className="w-full h-full -rotate-180"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="10"
                      strokeDasharray="263.89"
                      strokeDashoffset="131.94"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="10"
                      strokeDasharray="263.89"
                      strokeDashoffset="145.14"
                      strokeLinecap="round"
                      transform="rotate(270 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[28px] font-black text-slate-800">
                      142
                    </span>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                      Institutes
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-slate-50 rounded-2xl p-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="text-[11px] font-bold text-slate-400">
                        Lab Mode
                      </span>
                    </div>
                    <p className="text-[20px] font-black text-slate-800">99</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-[11px] font-bold text-slate-400">
                        Open Mode
                      </span>
                    </div>
                    <p className="text-[20px] font-black text-slate-800">43</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core System Status Section */}
            <div className="md:col-span-2 xl:col-span-3 bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-[18px] font-semibold text-slate-800">
                Core System Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* AI Access */}
                <div className="p-5 rounded-[20px] bg-slate-50/50 border border-slate-100 flex items-center justify-between group hover:border-emerald-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#2D4A43] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-slate-800">
                        AI Access
                      </p>
                      <p className="text-[12px] font-medium text-slate-400">
                        API Connected
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[11px]">
                    Live
                  </span>
                </div>

                {/* Live Classes */}
                <div className="p-5 rounded-[20px] bg-slate-50/50 border border-slate-100 flex items-center justify-between group hover:border-emerald-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#2D4A43] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-slate-800">
                        Live Classes
                      </p>
                      <p className="text-[12px] font-medium text-slate-400">
                        Video Node #42
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[11px]">
                    Operational
                  </span>
                </div>

                {/* Token Limit */}
                <div className="p-5 rounded-[20px] bg-slate-50/50 border border-slate-100 flex items-center gap-4 group hover:border-blue-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-[#2D4A43] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                    <LayoutGrid className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-[15px] font-bold text-slate-800">
                        Token Limit
                      </p>
                      <span className="text-[12px] font-bold text-slate-800">
                        84%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1A73E8] rounded-full"
                        style={{ width: "84%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Security Mode */}
                <div className="p-5 rounded-[20px] bg-slate-50/50 border border-slate-100 flex items-center gap-4 group hover:border-rose-200 transition-all relative">
                  <div className="h-12 w-12 rounded-xl bg-[#2D4A43] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-[15px] font-bold text-slate-800">
                      Security Mode
                    </p>
                    <p className="text-[12px] font-medium text-slate-400">
                      Policy: Standard
                    </p>
                  </div>
                  <div className="absolute top-4 right-5 flex items-center gap-2">
                    <span className="text-[10px] font-black text-[#F17575] uppercase tracking-widest">
                      Lab Mode: Inactive
                    </span>
                    <div className="h-4 w-8 rounded-full bg-[#FFDADA] p-0.5 flex items-center justify-start cursor-pointer hover:bg-rose-200 transition-colors">
                      <div className="h-3 w-3 rounded-full bg-[#F17575] shadow-sm transform transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Students" && (
          <div className="space-y-8 duration-500">
            {/* Metrics Row (Small Cards) */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Active Students", value: "842", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Average Progress", value: "68%", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "New Enrollments", value: "+124", icon: Plus, color: "text-orange-600", bg: "bg-orange-50" },
                    { label: "Session Attendance", value: "94%", icon: CheckCircle2, color: "text-purple-600", bg: "bg-purple-50" },
                  ].map((card, i) => (
                     <div key={i} className="p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm flex items-center justify-between">
                        <div className="space-y-1">
                           <p className="text-[13px] font-bold text-slate-400">{card.label}</p>
                           <h4 className="text-[24px] font-black text-slate-800">{card.value}</h4>
                        </div>
                        <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center", card.bg, card.color)}>
                           <card.icon className="h-6 w-6" />
                        </div>
                     </div>
                  ))}
               </div> */}

            {/* Student List Section */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-black text-slate-800">
                  Student List
                </h3>
              </div>

              {/* Filters Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center flex-wrap gap-4">
                  {[
                    { label: "Plan Type", value: "All" },
                    { label: "AI Usage", value: "All" },
                    { label: "Status", value: "All" },
                  ].map((filter, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-xl border border-slate-100 group cursor-pointer hover:bg-slate-50 transition-all"
                    >
                      <span className="text-[14px] font-medium text-slate-500">
                        {filter.label}:{" "}
                        <span className="text-slate-800 font-bold">
                          {filter.value}
                        </span>
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                  <Sliders className="h-4 w-4" />
                  <span className="text-[14px] font-bold">Reset Filters</span>
                </button>
              </div>

              {/* High Fidelity Table */}
              <div className="overflow-x-auto -mx-8 px-8">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-slate-400">
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Student Name
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Course Enrolled
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        LSRW Progress
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        AI Usage
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-center">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Julianna DeWitt",
                        email: "j.dewitt@enterprise.com",
                        initial: "JD",
                        bg: "bg-blue-100 text-blue-600",
                        course: "Business English C1",
                        tier: "Platinum",
                        l: 85,
                        s: 42,
                        r: 60,
                        w: 38,
                        ai: "1.2k",
                        status: "Active",
                      },
                      {
                        name: "Marco Rossi",
                        email: "m.rossi@techcorp.it",
                        initial: "MR",
                        bg: "bg-purple-100 text-purple-600",
                        course: "Spanish Intermediate B1",
                        tier: "Gold",
                        l: 20,
                        s: 15,
                        r: 12,
                        w: 8,
                        ai: "420",
                        status: "Inactive",
                      },
                      {
                        name: "Sarah Lin",
                        email: "sarah.lin@global.com",
                        initial: "SL",
                        bg: "bg-yellow-100 text-yellow-600",
                        course: "Japanese Essentials A1",
                        tier: "Free",
                        l: 92,
                        s: 88,
                        r: 80,
                        w: 75,
                        ai: "2.8k",
                        status: "Active",
                      },
                      {
                        name: "Alex Kim",
                        email: "akim.security@cyber.net",
                        initial: "AK",
                        bg: "bg-rose-100 text-rose-600",
                        course: "Oxford Academy",
                        tier: "Free",
                        l: 5,
                        s: 2,
                        r: 1,
                        w: 0,
                        ai: "12",
                        status: "Suspended",
                      },
                      {
                        name: "Julianna DeWitt",
                        email: "j.dewitt@enterprise.com",
                        initial: "JD",
                        bg: "bg-blue-100 text-blue-600",
                        course: "Business English C1",
                        tier: "Platinum",
                        l: 85,
                        s: 42,
                        r: 60,
                        w: 38,
                        ai: "1.2k",
                        status: "Active",
                      },
                      {
                        name: "Marco Rossi",
                        email: "m.rossi@techcorp.it",
                        initial: "MR",
                        bg: "bg-purple-100 text-purple-600",
                        course: "Spanish Intermediate B1",
                        tier: "Gold",
                        l: 20,
                        s: 15,
                        r: 12,
                        w: 8,
                        ai: "420",
                        status: "Inactive",
                      },
                      {
                        name: "Sarah Lin",
                        email: "sarah.lin@global.com",
                        initial: "SL",
                        bg: "bg-yellow-100 text-yellow-600",
                        course: "Japanese Essentials A1",
                        tier: "Free",
                        l: 92,
                        s: 88,
                        r: 80,
                        w: 75,
                        ai: "2.8k",
                        status: "Active",
                      },
                      {
                        name: "Alex Kim",
                        email: "akim.security@cyber.net",
                        initial: "AK",
                        bg: "bg-rose-100 text-rose-600",
                        course: "Oxford Academy",
                        tier: "Free",
                        l: 5,
                        s: 2,
                        r: 1,
                        w: 0,
                        ai: "12",
                        status: "Suspended",
                      },
                    ].map((item, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-slate-50 transition-all rounded-3xl cursor-pointer"
                      >
                        <td className="px-6 py-6 group-first:pt-8">
                          <div className="flex items-center gap-4">
                            <div
                              className={cn(
                                "h-11 w-11 rounded-full flex items-center justify-center font-black text-[13px] shrink-0",
                                item.bg
                              )}
                            >
                              {item.initial}
                            </div>
                            <div>
                              <p className="text-[15px] font-bold text-slate-800 tracking-tight">
                                {item.name}
                              </p>
                              <p className="text-[12px] font-medium text-slate-400">
                                {item.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[14px] font-bold text-slate-800 tracking-tight">
                            {item.course}
                          </p>
                          <p className="text-[12px] font-medium text-slate-400 underline underline-offset-2 decoration-slate-200 decoration-2 transition-all group-hover:decoration-slate-400">
                            Tier: {item.tier}
                          </p>
                        </td>
                        <td className="px-6 py-6 min-w-[200px]">
                          <div className="space-y-2">
                            {/* LSRW Multi-segment Bar */}
                            <div className="flex items-center gap-1">
                              <div
                                className={cn(
                                  "h-[6px] rounded-full transition-all duration-1000",
                                  item.l > 80
                                    ? "bg-[#32D583]"
                                    : item.l > 50
                                      ? "bg-[#FAC515]"
                                      : "bg-[#F04438]"
                                )}
                                style={{ width: `${item.l / 4}%` }}
                              />
                              <div
                                className={cn(
                                  "h-[6px] rounded-full transition-all duration-1000",
                                  item.s > 80
                                    ? "bg-[#32D583]"
                                    : item.s > 50
                                      ? "bg-[#FAC515]"
                                      : "bg-[#F04438]"
                                )}
                                style={{ width: `${item.s / 4}%` }}
                              />
                              <div
                                className={cn(
                                  "h-[6px] rounded-full transition-all duration-1000",
                                  item.r > 80
                                    ? "bg-[#32D583]"
                                    : item.r > 50
                                      ? "bg-[#FAC515]"
                                      : "bg-[#F04438]"
                                )}
                                style={{ width: `${item.r / 4}%` }}
                              />
                              <div
                                className={cn(
                                  "h-[6px] rounded-full transition-all duration-1000",
                                  item.w > 80
                                    ? "bg-[#32D583]"
                                    : item.w > 50
                                      ? "bg-[#FAC515]"
                                      : "bg-[#F04438]"
                                )}
                                style={{ width: `${item.w / 4}%` }}
                              />
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-black text-slate-400/80 tracking-tighter uppercase gap-x-1">
                              <span className="flex items-center gap-1">
                                L:{" "}
                                <span className="text-slate-600">
                                  {item.l}%
                                </span>
                              </span>
                              <span className="flex items-center gap-1">
                                S:{" "}
                                <span className="text-slate-600">
                                  {item.s}%
                                </span>
                              </span>
                              <span className="flex items-center gap-1">
                                R:{" "}
                                <span className="text-slate-600">
                                  {item.r}%
                                </span>
                              </span>
                              <span className="flex items-center gap-1">
                                W:{" "}
                                <span className="text-slate-600">
                                  {item.w}%
                                </span>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-3">
                            <span className="text-[14px] font-bold text-slate-800">
                              {item.ai}
                            </span>
                            <div className="flex items-end gap-[2px] h-3">
                              {[1, 2, 3, 4].map((bar) => (
                                <div
                                  key={bar}
                                  className={cn(
                                    "w-1 rounded-full transition-all duration-500",
                                    parseFloat(item.ai) > 2
                                      ? "bg-blue-500"
                                      : bar === 1
                                        ? "bg-blue-500"
                                        : "bg-blue-100"
                                  )}
                                  style={{ height: `${25 * bar}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <span
                            className={cn(
                              "px-4 py-1.5 rounded-full text-[11px] font-black tracking-tight",
                              item.status === "Active"
                                ? "bg-emerald-50 text-emerald-600"
                                : item.status === "Suspended"
                                  ? "bg-rose-50 text-rose-600"
                                  : "bg-slate-50 text-slate-400"
                            )}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-right">
                          <Button
                            variant="ghost"
                            className="h-9 w-9 p-0 rounded-xl hover:bg-slate-100"
                          >
                            <MoreVertical className="h-5 w-5 text-slate-400" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-slate-50">
                <p className="text-[14px] font-medium text-slate-400">
                  Showing{" "}
                  <span className="text-slate-800 font-bold tracking-tight">
                    1-8
                  </span>{" "}
                  of{" "}
                  <span className="text-slate-800 font-bold tracking-tight">
                    1,540
                  </span>
                </p>

                <div className="flex items-center gap-3">
                  <button className="h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black transition-all">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button className="h-10 w-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-800 font-black text-[14px]">
                      1
                    </button>
                    <button className="h-10 w-10 rounded-full flex items-center justify-center text-slate-400 font-bold text-[14px] hover:bg-slate-50">
                      2
                    </button>
                    <span className="text-[14px] font-black text-slate-300">
                      ...
                    </span>
                    <button className="h-10 w-10 rounded-full flex items-center justify-center text-slate-400 font-bold text-[14px] hover:bg-slate-50">
                      10
                    </button>
                  </div>
                  <button className="h-12 w-12 rounded-full border border-slate-100 bg-black flex items-center justify-center text-white hover:shadow-lg hover:shadow-black/20 transition-all">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Tutors" && (
          <div className="space-y-8  duration-500">
            {/* Tutors List Header & Filters */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-black text-slate-800">
                  Tutors List
                </h3>
              </div>

              {/* Filters Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center flex-wrap gap-4">
                  {[
                    { label: "Status", value: "All" },
                    { label: "Sort By", value: "A-Z" },
                  ].map((filter, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 group cursor-pointer hover:bg-slate-50 transition-all"
                    >
                      <span className="text-[14px] font-medium text-slate-500">
                        {filter.label}:{" "}
                        <span className="text-slate-800 font-bold">
                          {filter.value}
                        </span>
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[#4B6B64] hover:text-emerald-800 transition-colors">
                  <Sliders className="h-4 w-4" />
                  <span className="text-[14px] font-bold">Reset Filters</span>
                </button>
              </div>

              <div className="overflow-x-auto -mx-8 px-8">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-slate-400">
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Tutors Name
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Email
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-center">
                        Students
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-center">
                        Course
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-center">
                        Active Classe
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-center">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Sarah Jenkins",
                        role: "Sr.Mathematics Tutor",
                        email: "sarah.j@institute.com",
                        initial: "SJ",
                        bg: "bg-[#2D4A43] text-emerald-400",
                        students: 200,
                        courses: 12,
                        classes: 4,
                        status: "Active",
                      },
                      {
                        name: "David Miller",
                        role: "Physics Specialist",
                        email: "d.miller@academy.io",
                        initial: "DM",
                        bg: "bg-blue-100 text-blue-600",
                        students: 150,
                        courses: 8,
                        classes: 0,
                        status: "Away",
                      },
                      {
                        name: "Emma Watson",
                        role: "English Literature",
                        email: "emma.watson@edu.com",
                        initial: "EW",
                        bg: "bg-purple-100 text-purple-600",
                        students: 400,
                        courses: 5,
                        classes: 2,
                        status: "Active",
                      },
                      {
                        name: "Robert Chen",
                        role: "Computer Science",
                        email: "r.chen@techlearn.com",
                        initial: "RC",
                        bg: "bg-slate-100 text-slate-600",
                        students: 90,
                        courses: 15,
                        classes: 6,
                        status: "Inactive",
                      },
                      {
                        name: "Sarah Jenkins",
                        role: "Sr.Mathematics Tutor",
                        email: "sarah.j@institute.com",
                        initial: "SJ",
                        bg: "bg-[#2D4A43] text-emerald-400",
                        students: 200,
                        courses: 12,
                        classes: 4,
                        status: "Active",
                      },
                      {
                        name: "David Miller",
                        role: "Physics Specialist",
                        email: "d.miller@academy.io",
                        initial: "DM",
                        bg: "bg-blue-100 text-blue-600",
                        students: 150,
                        courses: 8,
                        classes: 0,
                        status: "Away",
                      },
                      {
                        name: "Emma Watson",
                        role: "English Literature",
                        email: "emma.watson@edu.com",
                        initial: "EW",
                        bg: "bg-purple-100 text-purple-600",
                        students: 400,
                        courses: 5,
                        classes: 2,
                        status: "Active",
                      },
                      {
                        name: "Robert Chen",
                        role: "Computer Science",
                        email: "r.chen@techlearn.com",
                        initial: "RC",
                        bg: "bg-slate-100 text-slate-600",
                        students: 90,
                        courses: 15,
                        classes: 6,
                        status: "Inactive",
                      },
                    ].map((tutor, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-slate-50 transition-all rounded-3xl cursor-pointer"
                      >
                        <td className="px-6 py-6 border-transparent">
                          <div className="flex items-center gap-4">
                            <div className="h-11 w-11 rounded-full flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-slate-100">
                              <Image
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tutor.name}`}
                                alt={tutor.name}
                                className="h-full w-full object-cover"
                                width={44}
                                height={44}
                              />
                            </div>
                            <div>
                              <p className="text-[15px] font-bold text-slate-800 tracking-tight">
                                {tutor.name}
                              </p>
                              <p className="text-[12px] font-medium text-slate-400">
                                {tutor.role}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-[14px] font-medium text-slate-600">
                          {tutor.email}
                        </td>
                        <td className="px-6 py-6 text-[14px] font-bold text-slate-800 text-center">
                          {tutor.students}
                        </td>
                        <td className="px-6 py-6 text-[14px] font-bold text-slate-800 text-center">
                          {tutor.courses}
                        </td>
                        <td className="px-6 py-6 text-[14px] font-bold text-slate-800 text-center">
                          {tutor.classes}
                        </td>
                        <td className="px-6 py-6 text-center">
                          <span
                            className={cn(
                              "px-4 py-1.5 rounded-full text-[11px] font-black tracking-tight",
                              tutor.status === "Active"
                                ? "bg-emerald-100 text-emerald-600"
                                : tutor.status === "Away"
                                  ? "bg-blue-50 text-blue-600"
                                  : "bg-rose-50 text-rose-600"
                            )}
                          >
                            {tutor.status}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-right">
                          <Button
                            variant="ghost"
                            className="h-9 w-9 p-0 rounded-xl hover:bg-slate-100"
                          >
                            <MoreVertical className="h-5 w-5 text-slate-400" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="pt-10 border-t border-slate-50 space-y-6">
                <div className="flex items-center justify-between">
                  <button className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 font-bold text-[15px]">
                      1
                    </button>
                    <button className="h-10 w-10 rounded-full flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      2
                    </button>
                    <span className="text-[15px] font-medium text-slate-300">
                      ...
                    </span>
                    <button className="h-10 w-10 rounded-full flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      10
                    </button>
                  </div>

                  <button className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg shadow-black/20 hover:bg-slate-900 transition-all active:scale-95">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-center text-[13px] font-bold text-slate-400 italic">
                  Showing 1-8 of 1,540
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Courses" && (
          <div className="space-y-8  duration-500">
            {/* Courses List Section */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-black text-slate-800">
                  Courses List
                </h3>
              </div>

              {/* Filters Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center flex-wrap gap-4">
                  {[
                    { label: "Status", value: "All" },
                    { label: "Sort By", value: "A-Z" },
                  ].map((filter, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 group cursor-pointer hover:bg-slate-50 transition-all"
                    >
                      <span className="text-[14px] font-medium text-slate-500">
                        {filter.label}:{" "}
                        <span className="text-slate-800 font-bold">
                          {filter.value}
                        </span>
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[#4B6B64] hover:text-emerald-800 transition-colors">
                  <Sliders className="h-4 w-4" />
                  <span className="text-[14px] font-bold">Reset Filters</span>
                </button>
              </div>

              <div className="overflow-x-auto -mx-8 px-8">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-slate-400">
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Course Name
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Category
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Enrollment
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Tutor
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Source
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[13px] font-bold border-b border-slate-100 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        title: "Business English",
                        id: "ID: BE-450",
                        category: "Academic",
                        students: 450,
                        tutor: "Sarah Jenkins",
                        source: "Master Content",
                        sourceColor: "bg-blue-50 text-blue-600",
                        status: "Active",
                        icon: Building2,
                      },
                      {
                        title: "IELTS Prep",
                        id: "ID: AC-320",
                        category: "Business",
                        students: 320,
                        tutor: "Sarah Jenkins",
                        source: "Cloned",
                        sourceColor: "bg-slate-50 text-slate-600",
                        status: "Active",
                        icon: TrendingUp,
                      },
                      {
                        title: "Conversational French",
                        id: "ID: GE-120",
                        category: "General",
                        students: 120,
                        tutor: "Emma Watson",
                        source: "Custom",
                        sourceColor: "bg-purple-50 text-purple-600",
                        status: "Draft",
                        icon: Globe,
                      },
                      {
                        title: "Digital Marketing Strategy",
                        id: "ID: GE-120",
                        category: "Enterprise",
                        students: 320,
                        tutor: "Sarah Jenkins",
                        source: "Custom",
                        sourceColor: "bg-purple-50 text-purple-600",
                        status: "Draft",
                        icon: Activity,
                      },
                      {
                        title: "Business English",
                        id: "ID: BE-450",
                        category: "Academic",
                        students: 450,
                        tutor: "Sarah Jenkins",
                        source: "Master Content",
                        sourceColor: "bg-blue-50 text-blue-600",
                        status: "Active",
                        icon: Building2,
                      },
                      {
                        title: "IELTS Prep",
                        id: "ID: AC-320",
                        category: "Business",
                        students: 320,
                        tutor: "Sarah Jenkins",
                        source: "Cloned",
                        sourceColor: "bg-slate-50 text-slate-600",
                        status: "Active",
                        icon: TrendingUp,
                      },
                      {
                        title: "Conversational French",
                        id: "ID: GE-120",
                        category: "General",
                        students: 120,
                        tutor: "Emma Watson",
                        source: "Custom",
                        sourceColor: "bg-purple-50 text-purple-600",
                        status: "Draft",
                        icon: Globe,
                      },
                    ].map((course, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-slate-50 transition-all rounded-3xl cursor-pointer"
                      >
                        <td className="px-6 py-6 border-transparent">
                          <div className="flex items-center gap-4">
                            <div className="h-11 w-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white transition-colors">
                              <course.icon className="h-5 w-5 text-slate-400" />
                            </div>
                            <div>
                              <p className="text-[15px] font-bold text-slate-800 tracking-tight">
                                {course.title}
                              </p>
                              <p className="text-[12px] font-medium text-slate-400">
                                {course.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-[14px] font-bold text-slate-800">
                          {course.category}
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1 w-24">
                            <p className="text-[14px] font-black text-[#000]">
                              {course.students} students
                            </p>
                            <div
                              className="h-1 bg-[#1A73E8] rounded-full"
                              style={{
                                width: `${(course.students / 500) * 100}%`,
                              }}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2">
                            <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                              <Image
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.tutor}`}
                                alt={course.tutor}
                                className="h-full w-full object-cover"
                                width={28}
                                height={28}
                              />
                            </div>
                            <span className="text-[14px] font-medium text-slate-700">
                              {course.tutor}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-tight",
                              course.sourceColor
                            )}
                          >
                            {course.source}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2">
                            <div
                              className={cn(
                                "h-2 w-2 rounded-full",
                                course.status === "Active"
                                  ? "bg-emerald-500"
                                  : "bg-slate-300"
                              )}
                            />
                            <span
                              className={cn(
                                "text-[13px] font-bold",
                                course.status === "Active"
                                  ? "text-emerald-600"
                                  : "text-slate-400"
                              )}
                            >
                              {course.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center justify-end gap-1">
                            {[Eye, Pencil, Lock, Copy].map((Icon, idx) => (
                              <Button
                                key={idx}
                                variant="ghost"
                                className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                              >
                                <Icon className="h-4 w-4" />
                              </Button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="pt-10 border-t border-slate-50 space-y-6">
                <div className="flex items-center justify-between">
                  <button className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 font-bold text-[15px]">
                      1
                    </button>
                    <button className="h-10 w-10 rounded-full flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      2
                    </button>
                    <span className="text-[15px] font-medium text-slate-300">
                      ...
                    </span>
                    <button className="h-10 w-10 rounded-full flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      10
                    </button>
                  </div>

                  <button className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg shadow-black/20 hover:bg-slate-900 transition-all">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-center text-[13px] font-bold text-slate-400 italic">
                  Showing 1-8 of 1,540
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "AI Usage" && (
          <div className="space-y-4  duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Column 1: Monthly Usage Trend */}
              <div className="lg:col-span-4 bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight leading-tight">
                  Monthly Usage Trend
                  <br />
                  (Aggregated)
                </h3>
                <div className="h-[220px] w-full">
                  {isMounted ? (
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                      minWidth={0}
                      minHeight={0}
                    >
                      <AreaChart
                        data={[
                          { name: "JAN", value: 30 },
                          { name: "FEB", value: 45 },
                          { name: "MAR", value: 70 },
                          { name: "APR", value: 55 },
                          { name: "MAY", value: 50 },
                          { name: "JUN", value: 65 },
                          { name: "JUL", value: 85 },
                          { name: "AUG", value: 75 },
                          { name: "SEP", value: 80 },
                          { name: "OCT", value: 95 },
                          { name: "NOV", value: 110 },
                          { name: "DEC", value: 100 },
                        ]}
                      >
                        <defs>
                          <linearGradient
                            id="colorUsage"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#3B82F6"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#3B82F6"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 9,
                            fontWeight: 700,
                            fill: "#94A3B8",
                          }}
                          interval={1}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#3B82F6"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#colorUsage)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
              </div>

              {/* Column 2: Feature Breakdown */}
              <div className="lg:col-span-4 bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm flex flex-col items-center gap-4">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight self-start">
                  Feature Breakdown
                </h3>
                <div className="h-[180px] w-full relative mt-10">
                  {isMounted ? (
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                      minWidth={0}
                      minHeight={0}
                    >
                      <PieChart>
                        <Pie
                          data={[
                            { name: "AI Tutor", value: 40, color: "#1A73E8" },
                            { name: "Speaking", value: 25, color: "#FBBC04" },
                            { name: "Writing", value: 20, color: "#9333EA" },
                            { name: "Pronun.", value: 15, color: "#32D583" },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={85}
                          paddingAngle={0}
                          dataKey="value"
                          stroke="none"
                        >
                          {[
                            { color: "#1A73E8" },
                            { color: "#FBBC04" },
                            { color: "#9333EA" },
                            { color: "#32D583" },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-[24px] font-black text-slate-900 leading-none">
                      100%
                    </span>
                    <span className="text-[9px] font-black text-slate-400 tracking-widest mt-1 uppercase">
                      Distribution
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 w-full px-4 mt-auto">
                  {[
                    { label: "AI Tutor", value: "40%", color: "bg-[#1A73E8]" },
                    { label: "Speaking", value: "25%", color: "bg-[#FBBC04]" },
                    { label: "Writing", value: "20%", color: "bg-[#9333EA]" },
                    { label: "Pronun.", value: "15%", color: "bg-[#32D583]" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={cn("h-2 w-2 rounded-full", item.color)} />
                      <span className="text-[12px] font-bold text-slate-600 truncate">
                        {item.label} ({item.value})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: AI Controls & Status */}
              <div className="lg:col-span-4 space-y-4 flex flex-col">
                {/* AI Controls Card */}
                <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-5 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Shield className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <h3 className="text-[17px] font-black text-slate-900 tracking-tight">
                      AI Controls
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[14px] font-black text-slate-800">
                          AI Access
                        </p>
                        <p className="text-[11px] font-medium text-slate-400">
                          Enable features globally
                        </p>
                      </div>
                      <div className="h-5.5 w-10 bg-blue-600 rounded-full relative cursor-pointer ring-4 ring-blue-50 transition-all">
                        <div className="h-3.5 w-3.5 bg-white rounded-full absolute right-1 top-1 shadow-sm transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Monthly Token Cap
                      </p>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          defaultValue="10,000,000"
                          className="flex-1 h-10 bg-slate-50 border border-slate-200 rounded-xl px-4 text-[14px] font-bold text-slate-800 focus:outline-none"
                        />
                        <Button className="h-10 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-xl px-4 font-black text-[13px]">
                          Update
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                        Alert Thresholds (%)
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label
                            htmlFor="warning-threshold"
                            className="text-[12px] font-bold text-slate-500"
                          >
                            Warning
                          </label>
                          <input
                            id="warning-threshold"
                            type="text"
                            defaultValue="70"
                            className="w-full h-10 bg-slate-50 border border-slate-200 rounded-xl px-4 text-[14px] font-bold text-slate-800 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="critical-threshold"
                            className="text-[12px] font-bold text-slate-500"
                          >
                            Critical
                          </label>
                          <input
                            id="critical-threshold"
                            type="text"
                            defaultValue="90"
                            className="w-full h-10 bg-slate-50 border border-slate-200 rounded-xl px-4 text-[14px] font-bold text-slate-800 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[14px] font-black text-slate-800">
                          Hard Limit
                        </p>
                        <p className="text-[11px] font-medium text-slate-400">
                          Auto-disable on 100%
                        </p>
                      </div>
                      <div className="h-5.5 w-10 bg-slate-200 rounded-full relative cursor-pointer group">
                        <div className="h-3.5 w-3.5 bg-white rounded-full absolute left-1 top-1 shadow-sm transition-all group-hover:bg-slate-50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Status */}
                <div className="bg-[#EBF5FB] rounded-[20px] p-5 border border-[#BEE3F8]/30 space-y-1.5 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[15px] font-black text-[#2B6CB0]">
                      All AI Systems Operational
                    </p>
                  </div>
                  <p className="text-[12px] font-bold text-[#4299E1] ml-5">
                    Avg response time: 240ms
                  </p>
                </div>
              </div>
            </div>

            {/* AI Session Logs Section */}
            <div className="bg-white rounded-[20px] p-6 border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-black text-slate-800">
                  AI Session Logs
                </h3>
                <Button className="h-12 bg-black hover:bg-black/90 text-white px-6 rounded-xl flex items-center gap-2 font-black text-[14px]">
                  <ExternalLink className="h-4 w-4" />
                  Export data
                </Button>
              </div>

              {/* Filters Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center flex-wrap gap-4">
                  {[
                    { label: "Status", value: "All" },
                    { label: "Sort By", value: "A-Z" },
                  ].map((filter, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 group cursor-pointer hover:bg-slate-50 transition-all"
                    >
                      <span className="text-[14px] font-medium text-slate-500">
                        {filter.label}:{" "}
                        <span className="text-slate-800 font-bold">
                          {filter.value}
                        </span>
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[#4B6B64] hover:text-emerald-800 transition-colors">
                  <Sliders className="h-4 w-4" />
                  <span className="text-[14px] font-bold">Reset Filters</span>
                </button>
              </div>

              <div className="overflow-x-auto -mx-8 px-8">
                <table className="w-full text-left border-separate border-spacing-y-4">
                  <thead>
                    <tr className="text-slate-400">
                      <th className="px-6 py-2 text-[13px] font-bold">
                        Student
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold">
                        Tutor / AI Tool
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold text-center">
                        Tokens
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold text-center">
                        Date & Time
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Sarah Johnson",
                        level: "B2 Intermediate",
                        tool: "Pronunciation Coach",
                        icon: Video,
                        tokens: "1,240",
                        date: "Oct 24, 2023 - 14:32",
                        status: "SUCCESS",
                      },
                      {
                        name: "Michael Chen",
                        level: "C1 Advanced",
                        tool: "Writing Evaluator",
                        icon: Pencil,
                        tokens: "4,850",
                        date: "Oct 24, 2023 - 12:15",
                        status: "SUCCESS",
                      },
                      {
                        name: "Elena Rossi",
                        level: "A1 Beginner",
                        tool: "AI Language Tutor",
                        icon: Sparkles,
                        tokens: "2,100",
                        date: "Oct 24, 2023 - 09:44",
                        status: "RETRIED",
                      },
                    ].map((log, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-slate-50 transition-all cursor-pointer"
                      >
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-slate-100">
                              <Image
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${log.name}`}
                                alt={log.name}
                                className="h-full w-full object-cover"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div>
                              <p className="text-[15px] font-bold text-slate-800 tracking-tight">
                                {log.name}
                              </p>
                              <p className="text-[12px] font-medium text-slate-400">
                                {log.level}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <div className="flex items-center gap-3">
                            <log.icon className="h-4 w-4 text-blue-500" />
                            <span className="text-[14px] font-medium text-slate-600">
                              {log.tool}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[14px] font-bold text-slate-800 text-center border-t border-slate-50 group-first:border-none">
                          {log.tokens}
                        </td>
                        <td className="px-6 py-4 text-[13px] font-medium text-slate-400 text-center border-t border-slate-50 group-first:border-none">
                          {log.date}
                        </td>
                        <td className="px-6 py-4 text-center border-t border-slate-50 group-first:border-none">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase",
                              log.status === "SUCCESS"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-orange-50 text-orange-600"
                            )}
                          >
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Combined Pagination Footer */}
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <button className="h-12 w-12 rounded-full bg-slate-400/50 flex items-center justify-center text-white hover:bg-slate-500 transition-all">
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-4 text-center">
                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 font-bold text-[15px]">
                      1
                    </button>
                    <button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      2
                    </button>
                    <span className="text-[15px] font-medium text-slate-300">
                      ...
                    </span>
                    <button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      10
                    </button>
                  </div>
                </div>

                <button className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:bg-slate-900 transition-all">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <p className="text-center text-[13px] font-bold text-slate-400 tracking-tight">
                Showing 1-8 of 1,540
              </p>
            </div>
          </div>
        )}

        {activeTab === "Revenue" && (
          <div className="space-y-6 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Monthly Revenue Growth */}
              <div className="bg-white rounded-[20px] p-8 border border-slate-100 shadow-sm space-y-8">
                <h3 className="text-[20px] font-black text-slate-800 tracking-tight">
                  Monthly Revenue Growth
                </h3>
                <div className="h-[300px] w-full">
                  {isMounted ? (
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                      minWidth={0}
                      minHeight={0}
                    >
                      <AreaChart
                        data={[
                          { name: "May", value: 10 },
                          { name: "Jun", value: 15 },
                          { name: "Jul", value: 45 },
                          { name: "Aug", value: 20 },
                          { name: "Sep", value: 75 },
                          { name: "Oct", value: 60 },
                        ]}
                      >
                        <defs>
                          <linearGradient
                            id="colorRevenue"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#3B82F6"
                              stopOpacity={0.1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#3B82F6"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 12,
                            fontWeight: 600,
                            fill: "#94A3B8",
                          }}
                          dy={15}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#2563EB"
                          strokeWidth={6}
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
              </div>

              {/* Card 2: Subscription Growth */}
              <div className="bg-white rounded-[20px] p-8 border border-slate-100 shadow-sm space-y-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] font-black text-slate-800 tracking-tight">
                    Subscription Growth
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        ENTERPRISE
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        PRO
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  {isMounted ? (
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                      minWidth={0}
                      minHeight={0}
                    >
                      <AreaChart
                        data={[
                          { name: "MAY", enterprise: 30, pro: 20 },
                          { name: "JUN", enterprise: 40, pro: 25 },
                          { name: "JUL", enterprise: 55, pro: 20 },
                          { name: "AUG", enterprise: 60, pro: 15 },
                          { name: "SEP", enterprise: 65, pro: 25 },
                          { name: "OCT", enterprise: 75, pro: 0 },
                        ]}
                      >
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 12,
                            fontWeight: 700,
                            fill: "#94A3B8",
                          }}
                          dy={15}
                        />
                        <Area
                          type="stepAfter"
                          dataKey="enterprise"
                          stackId="1"
                          stroke="none"
                          fill="#2563EB"
                        />
                        <Area
                          type="stepAfter"
                          dataKey="pro"
                          stackId="1"
                          stroke="none"
                          fill="#E2E8F0"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
              </div>
            </div>

            {/* Payment History Section */}
            <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-black text-slate-800">
                  Payment History
                </h3>
              </div>

              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-slate-400">
                      <th className="px-6 py-2 text-[13px] font-bold">
                        Invoice ID
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold">Plan</th>
                      <th className="px-6 py-2 text-[13px] font-bold">
                        Amount
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold">
                        Payment Method
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold text-center">
                        Billing Date
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold text-center">
                        Status
                      </th>
                      <th className="px-6 py-2 text-[13px] font-bold text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "INV-001",
                        plan: "Enterprise",
                        amount: "$5,000",
                        method: "VISA",
                        card: "**** 4242",
                        date: "Oct 01, 2023",
                        status: "PAID",
                      },
                      {
                        id: "INV-002",
                        plan: "Enterprise",
                        amount: "$5,000",
                        method: "VISA",
                        card: "**** 4242",
                        date: "Sep 01, 2023",
                        status: "PAID",
                      },
                      {
                        id: "INV-003",
                        plan: "Pro",
                        amount: "$2,500",
                        method: "MC",
                        card: "**** 8821",
                        date: "Aug 01, 2023",
                        status: "PENDING",
                      },
                      {
                        id: "INV-004",
                        plan: "Enterprise",
                        amount: "$5,000",
                        method: "VISA",
                        card: "**** 4242",
                        date: "Jul 01, 2023",
                        status: "FAILED",
                      },
                    ].map((inv, _i) => (
                      <tr
                        key={inv.id}
                        className="group hover:bg-slate-50 transition-all cursor-pointer"
                      >
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-[15px] font-bold text-slate-800 tracking-tight">
                          {inv.id}
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-[14px] font-medium text-slate-400">
                          {inv.plan}
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-[14px] font-black text-slate-800">
                          {inv.amount}
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded leading-none">
                              {inv.method}
                            </span>
                            <span className="text-[14px] font-medium text-slate-400">
                              {inv.card}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-[13px] font-medium text-slate-400 text-center">
                          {inv.date}
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-center">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase",
                              inv.status === "PAID"
                                ? "bg-emerald-50 text-emerald-600"
                                : inv.status === "PENDING"
                                  ? "bg-orange-50 text-orange-600"
                                  : "bg-rose-50 text-rose-600"
                            )}
                          >
                            {inv.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <div className="flex justify-center">
                            <Button
                              variant="ghost"
                              className="h-9 w-9 p-0 rounded-xl hover:bg-slate-100 flex items-center justify-center"
                            >
                              {inv.status === "FAILED" ? (
                                <RefreshCw className="h-4 w-4 text-slate-400" />
                              ) : (
                                <Download className="h-4 w-4 text-slate-400" />
                              )}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Combined Pagination Footer */}
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <button className="h-12 w-12 rounded-full bg-slate-400/50 flex items-center justify-center text-white hover:bg-slate-500 transition-all">
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-4 text-center">
                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 font-bold text-[15px]">
                      1
                    </button>
                    <button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      2
                    </button>
                    <span className="text-[15px] font-medium text-slate-300">
                      ...
                    </span>
                    <button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      10
                    </button>
                  </div>
                </div>

                <button className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:bg-slate-900 transition-all">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <p className="text-center text-[13px] font-bold text-slate-400 tracking-tight">
                Showing 1-4 of 124 invoices
              </p>
            </div>
          </div>
        )}

        {activeTab === "Security" && (
          <div className="space-y-6  duration-500">
            {/* Security Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Security Mode */}
              <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div className="h-6 w-11 bg-slate-200 rounded-full relative cursor-pointer ring-4 ring-slate-50 transition-all">
                    <div className="h-4 w-4 bg-white rounded-full absolute left-1 top-1 shadow-sm transition-all" />
                  </div>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-400">
                    Security Mode
                  </p>
                  <h4 className="text-[20px] font-black text-slate-800">
                    Open Mode
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 mt-1 leading-relaxed">
                    Enable 'Lab Mode' for restricted access
                  </p>
                </div>
              </div>

              {/* Login Attempts */}
              <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <LogIn className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <TrendingUp className="h-3 w-3" />
                    <span className="text-[11px] font-black">12%</span>
                  </div>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-400">
                    Total Login Attempts
                  </p>
                  <h4 className="text-[20px] font-black text-slate-800">
                    1,240
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">
                    Past 24 hours
                  </p>
                </div>
              </div>

              {/* Blocked IPs */}
              <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                    <Ban className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <TrendingDown className="h-3 w-3" />
                    <span className="text-[11px] font-black">2%</span>
                  </div>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-400">
                    Blocked IPs
                  </p>
                  <h4 className="text-[20px] font-black text-slate-800">12</h4>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">
                    Suspicious activity detected
                  </p>
                </div>
              </div>

              {/* Security Alerts */}
              <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-rose-50 text-rose-600 text-[9px] font-black tracking-widest uppercase">
                    High Priority
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-400">
                    Security Alerts
                  </p>
                  <h4 className="text-[20px] font-black text-slate-800">3</h4>
                  <p className="text-[11px] font-bold text-rose-600 mt-1">
                    Immediate action required
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Allowed IP Addresses Card */}
              <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-5">
                <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
                  Allowed IP Addresses
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-slate-400 text-[13px] font-bold border-b border-slate-50">
                        <th className="pb-4">IP Address</th>
                        <th className="pb-4">Location</th>
                        <th className="pb-4">Device</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Last Access</th>
                        <th className="pb-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {[
                        {
                          ip: "192.168.1.1",
                          loc: "New York, USA",
                          dev: "MacBook Pro - Safari",
                          status: "Active",
                          last: "2023-10-24 10:15 AM",
                          actions: ["Disable", "Whitelist"],
                        },
                        {
                          ip: "104.28.32.11",
                          loc: "London, UK",
                          dev: "Windows - Chrome",
                          status: "Pending",
                          last: "2023-10-24 09:45 AM",
                          actions: ["Approve", "Disable"],
                        },
                        {
                          ip: "172.16.254.1",
                          loc: "Berlin, DE",
                          dev: "Ubuntu - Firefox",
                          status: "Active",
                          last: "2023-10-23 06:12 PM",
                          actions: ["Disable", "Whitelist"],
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="group hover:bg-slate-50/50 transition-colors"
                        >
                          <td className="py-5 text-[15px] font-bold text-slate-800">
                            {row.ip}
                          </td>
                          <td className="py-5 text-[14px] font-medium text-slate-400">
                            {row.loc}
                          </td>
                          <td className="py-5 text-[14px] font-medium text-slate-400">
                            {row.dev}
                          </td>
                          <td className="py-5">
                            <span
                              className={cn(
                                "px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase",
                                row.status === "Active"
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "bg-orange-50 text-orange-600"
                              )}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="py-5 text-[13px] font-medium text-slate-400 font-mono">
                            {row.last}
                          </td>
                          <td className="py-5">
                            <div className="flex items-center gap-3">
                              {row.actions.map((act, ai) => (
                                <button
                                  key={ai}
                                  className={cn(
                                    "text-[13px] font-bold transition-colors",
                                    act === "Approve"
                                      ? "text-emerald-500 hover:text-emerald-700"
                                      : act === "Whitelist"
                                        ? "text-blue-500 hover:text-blue-700"
                                        : "text-slate-400 hover:text-slate-600"
                                  )}
                                >
                                  {act}
                                </button>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Activity Logs Card */}
              <div className="bg-white rounded-[20px] p-5 border border-slate-100 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[20px] font-black text-slate-800 tracking-tight">
                    Security Activity Logs
                  </h3>
                  <Button className="h-12 bg-black hover:bg-black/90 text-white px-6 rounded-xl flex items-center gap-2 font-black text-[14px]">
                    <Download className="h-4 w-4" />
                    Export data
                  </Button>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      type: "Login Success",
                      ip: "192.168.1.1",
                      loc: "New York, USA",
                      dev: "MacBook Pro / Chrome v118",
                      time: "Just Now",
                      date: "Oct 24, 11:24 AM",
                      icon: CheckCircle2,
                      color: "text-emerald-500 bg-emerald-50",
                    },
                    {
                      type: "Failed Login Attempt",
                      ip: "45.12.89.231",
                      loc: "Moscow, RU",
                      dev: "Linux / Unknown Browser",
                      time: "12 min ago",
                      date: "Oct 24, 11:12 AM",
                      icon: AlertTriangle,
                      color: "text-rose-500 bg-rose-50",
                    },
                    {
                      type: "Password Change",
                      ip: "104.28.32.11",
                      loc: "London, UK",
                      user: "admin_user_04",
                      time: "45 min ago",
                      date: "Oct 24, 10:39 AM",
                      icon: Key,
                      color: "text-blue-500 bg-blue-50",
                    },
                    {
                      type: "Brute Force Detected",
                      ip: "185.23.10.4",
                      loc: "Shanghai, CN",
                      warning: "Automatic block triggered",
                      time: "2 hours ago",
                      date: "Oct 24, 09:12 AM",
                      icon: ShieldAlert,
                      color: "text-rose-500 bg-rose-50",
                    },
                  ].map((log, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "h-10 w-10 rounded-full flex items-center justify-center shrink-0",
                            log.color
                          )}
                        >
                          <log.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[15px] font-black text-slate-800 tracking-tight">
                            {log.type}
                          </p>
                          <p className="text-[13px] font-medium text-slate-400">
                            IP:{" "}
                            <span className="text-slate-600 font-bold">
                              {log.ip}
                            </span>{" "}
                            • {log.loc}
                          </p>
                          {log.dev && (
                            <p className="text-[12px] font-medium text-slate-300">
                              Device: {log.dev}
                            </p>
                          )}
                          {log.user && (
                            <p className="text-[12px] font-medium text-slate-300">
                              User: {log.user}
                            </p>
                          )}
                          {log.warning && (
                            <p className="text-[12px] font-black text-rose-500 uppercase tracking-tight">
                              {log.warning}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <p className="text-[14px] font-black text-slate-800">
                          {log.time}
                        </p>
                        <p className="text-[11px] font-bold text-slate-300 uppercase">
                          {log.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    variant="outline"
                    className="h-10 px-6 rounded-xl border-slate-200 text-slate-500 font-black text-[13px] hover:bg-slate-50 transition-all"
                  >
                    Load More Activity
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Active Logs" && (
          <div className="space-y-6 duration-500">
            {/* Active Logs Header Section */}
            <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] font-black text-slate-800">
                  Active logs
                </h2>
                <Button className="h-12 bg-black hover:bg-black/90 text-white px-6 rounded-xl flex items-center gap-2 font-black text-[14px]">
                  <Download className="h-4 w-4" />
                  Export data
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 flex items-center gap-6 cursor-pointer">
                  <span className="text-[14px] font-bold text-slate-400">
                    User Type: <span className="text-slate-800">All</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 flex items-center gap-6 cursor-pointer">
                  <span className="text-[14px] font-bold text-slate-400">
                    Action Type: <span className="text-slate-800">All</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div className="overflow-x-auto -mx-8 px-8">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-slate-400/80 text-[13px] font-bold">
                      <th className="px-6 py-2">User</th>
                      <th className="px-6 py-2">Timestamp</th>
                      <th className="px-6 py-2">Role</th>
                      <th className="px-6 py-2">Action</th>
                      <th className="px-6 py-2">IP Adress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        user: "Alex Rivera",
                        email: "alex@hq.com",
                        initial: "AR",
                        bg: "bg-blue-100 text-blue-600",
                        time: "Oct 24, 2023 14:22",
                        role: "Admin",
                        roleBg: "bg-blue-50 text-blue-500",
                        action: "Plan Update",
                        actionIcon: ArrowUp,
                        actionColor: "text-blue-500",
                        ip: "192.168.1.1",
                      },
                      {
                        user: "System Task",
                        email: "automations@system.io",
                        initial: "ST",
                        bg: "bg-teal-100 text-teal-600",
                        time: "Oct 24, 2023 13:05",
                        role: "System",
                        roleBg: "bg-slate-100 text-slate-500",
                        action: "Token Limit Increased",
                        actionIcon: TrendingUp,
                        actionColor: "text-orange-500",
                        ip: "104.22.19.12",
                      },
                      {
                        user: "Sarah Miller",
                        email: "sarah.m@tutor.com",
                        initial: "SM",
                        bg: "bg-purple-100 text-purple-600",
                        time: "Oct 24, 2023 12:45",
                        role: "Tutor",
                        roleBg: "bg-purple-50 text-purple-400",
                        action: "New Student Enrolled",
                        actionIcon: UserPlus,
                        actionColor: "text-emerald-500",
                        ip: "45.22.10.155",
                      },
                      {
                        user: "John Bennett",
                        email: "john.b@hq.com",
                        initial: "JB",
                        bg: "bg-blue-100 text-blue-600",
                        time: "Oct 24, 2023 11:10",
                        role: "Admin",
                        roleBg: "bg-blue-50 text-blue-500",
                        action: "Account Suspended",
                        actionIcon: ShieldX,
                        actionColor: "text-rose-500",
                        ip: "102.14.88.22",
                      },
                      {
                        user: "Security Shield",
                        email: "security@hq.com",
                        initial: "SS",
                        bg: "bg-slate-100 text-slate-600",
                        time: "Oct 24, 2023 10:30",
                        role: "System",
                        roleBg: "bg-slate-100 text-slate-500",
                        action: "Mode Changed",
                        actionIcon: History,
                        actionColor: "text-blue-600",
                        ip: "Localhost",
                      },
                      {
                        user: "Emma Knight",
                        email: "emma.k@student.com",
                        initial: "EK",
                        bg: "bg-emerald-100 text-emerald-600",
                        time: "Oct 24, 2023 09:15",
                        role: "Student",
                        roleBg: "bg-emerald-50 text-emerald-400",
                        action: "Live Class Started",
                        actionIcon: PlayCircle,
                        actionColor: "text-blue-500",
                        ip: "201.55.12.33",
                      },
                    ].map((log, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-slate-50 transition-all cursor-pointer"
                      >
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center font-black text-[12px]",
                                log.bg
                              )}
                            >
                              {log.initial}
                            </div>
                            <div>
                              <p className="text-[15px] font-black text-slate-800">
                                {log.user}
                              </p>
                              <p className="text-[12px] font-medium text-slate-400">
                                {log.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-[14px] font-medium text-slate-400">
                          {log.time}
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <span
                            className={cn(
                              "px-4 py-1 rounded-full text-[11px] font-black tracking-tight",
                              log.roleBg
                            )}
                          >
                            {log.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none">
                          <div
                            className={cn(
                              "flex items-center gap-2 font-black text-[14px]",
                              log.actionColor
                            )}
                          >
                            <log.actionIcon className="h-4 w-4" />
                            {log.action}
                          </div>
                        </td>
                        <td className="px-6 py-4 border-t border-slate-50 group-first:border-none text-[14px] font-medium text-slate-400">
                          {log.ip}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* High Fidelity Pagination Footer */}
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <button className="h-12 w-12 rounded-full bg-slate-400/50 flex items-center justify-center text-white hover:bg-slate-500 transition-all">
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-4 text-center">
                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 font-bold text-[15px]">
                      1
                    </button>
                    <button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      2
                    </button>
                    <span className="text-[15px] font-medium text-slate-300">
                      ...
                    </span>
                    <button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-[15px] hover:bg-slate-50">
                      10
                    </button>
                  </div>
                </div>

                <button className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:bg-slate-900 transition-all">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <p className="text-center text-[14px] font-bold text-slate-400 tracking-tight">
                Showing 1-8 of 1,540
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstituteProfile;
