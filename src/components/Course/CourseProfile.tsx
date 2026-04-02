"use client";

import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Brain,
  ChevronDown,
  Clock,
  Eye,
  FileText,
  Grid3x3,
  GripHorizontal,
  History,
  Layers,
  Pencil,
  PlayCircle,
  Settings,
  Shuffle,
  Trash2,
  Users,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface CourseProfileProps {
  onBack: () => void;
}

const statCards = [
  {
    label: "Total Modules",
    value: "12",
    icon: Grid3x3,
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    label: "Lessons Count",
    value: "48",
    icon: Layers,
    bg: "bg-amber-800",
    iconColor: "text-white",
  },
  {
    label: "Course Duration",
    value: "24h 15m",
    icon: Clock,
    bg: "bg-violet-600",
    iconColor: "text-white",
  },
  {
    label: "AI Activities",
    value: "18",
    icon: Brain,
    bg: "bg-blue-500",
    iconColor: "text-white",
  },
];

const editActions = [
  { label: "Modify modules", icon: Pencil },
  { label: "Update lessons", icon: Settings },
  { label: "Adjust Structure", icon: Shuffle },
];

const lessons = [
  { title: "The Perfect Elevator Pitch", type: "video", duration: "12:45" },
  {
    title: "AI Conversation Practice: Networking Event",
    type: "ai",
    duration: "20:00",
  },
  { title: "Body Language Basics", type: "doc", duration: "15:00" },
  {
    title: "AI Conversation Practice: Networking Event",
    type: "ai",
    duration: "20:00",
  },
];

const collapsedModules = [
  {
    title: "Module 2: Persuasive Business Presentations",
    lessons: 6,
    duration: "3h 10m",
  },
  { title: "Module 3: Speaking Skills", lessons: 6, duration: "3h 10m" },
];

const versions = [
  {
    version: "V2.4.1",
    isCurrent: true,
    by: "Alex Rivera",
    date: "Oct 24, 2023",
    changes: "Updated Module 4 AI Scripts",
    scope: "Global",
  },
  {
    version: "V2.4.0",
    isCurrent: false,
    by: "Alex Rivera",
    date: "Oct 24, 2023",
    changes: "Added Lesson 3.5 Reading Material",
    scope: "SELECTED",
  },
];

const institutes = [
  { name: "Oxford International", status: "Active", version: "v2.4.1" },
  { name: "Tech Academy Global", status: "Pending Update", version: "v2.3.9" },
];

// Simple stack-of-layers icon replacement
const _LayersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const CourseProfile = ({ onBack }: CourseProfileProps) => {
  const [editOpen, setEditOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      {/* Back */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-[#2D4A43] transition-all shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="text-[18px] font-medium font-inter text-black">
          Course Details
        </span>
      </div>

      {/* ── TOP HEADER CARD ── */}
      <div className="bg-white rounded-[28px] border border-slate-100 shadow-sm p-6">
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-[24px] font-semibold font-inter text-black tracking-tight">
                English Communication Mastery
              </h1>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D1FAE5]  text-[16px] font-medium font-inter text-[#047857]/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Published
              </span>
            </div>
            <p className="text-[16px] font-regular fonnt-inter text-black/80">
              • Visible to 14 Institutes &nbsp;•&nbsp; Last updated Oct 24, 2023
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              className="h-11 rounded-2xl px-6 border-slate-200 text-[#31564E] font-medium font-inter text-[16px] hover:bg-slate-50 transition-all gap-2"
            >
              <History className="h-4 w-4 text-slate-400" />
              View Versions
            </Button>

            <DropdownMenu
              open={editOpen}
              onOpenChange={setEditOpen}
              modal={false}
            >
              <div
                onMouseEnter={() => setEditOpen(true)}
                onMouseLeave={() => setEditOpen(false)}
                className="relative"
              >
                <DropdownMenuTrigger asChild>
                  <Button className="h-11 rounded-2xl px-6 bg-black hover:bg-black/90 text-white font-medium font-inter text-[16px] shadow-xl shadow-black/20 gap-2 transition-all active:scale-95">
                    Edit Course
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        editOpen && "rotate-180"
                      )}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[220px] rounded-[18px] p-2 shadow-2xl border border-slate-100 bg-white"
                  onMouseEnter={() => setEditOpen(true)}
                  onMouseLeave={() => setEditOpen(false)}
                >
                  {editActions.map((action) => (
                    <DropdownMenuItem
                      key={action.label}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-700 cursor-pointer hover:bg-[#2D4A43]/5 hover:text-[#2D4A43] transition-colors"
                    >
                      <action.icon className="h-4 w-4 text-slate-400" />
                      {action.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </div>
            </DropdownMenu>
          </div>
        </div>

      
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-8">
  {statCards.map((stat) => (
    <div
      key={stat.label}
     
      className="flex items-center justify-between bg-white rounded-[20px] border border-slate-100 p-4 md:p-5 shadow-sm hover:shadow-md transition-all group"
    >
      <div className="space-y-0.5 md:space-y-1 min-w-0">
        <p className="text-[20px] md:text-[26px] font-semibold font-inter text-black leading-tight">
          {stat.value}
        </p>
        <p className="text-[14px] md:text-[16px] font-medium font-inter text-slate-600 truncate">
          {stat.label}
        </p>
      </div>
      
      
      <div
        className={cn(
          "h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110",
          stat.bg
        )}
      >
        <stat.icon className={cn("h-5 w-5 md:h-6 md:w-6", stat.iconColor)} />
      </div>
    </div>
  ))}
</div>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ═══ LEFT COLUMN ═══ */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Overview */}
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <FileText className="h-4 w-4" />
                </div>
                <h4 className="text-[18px] font-medium foont-inter text-black">
                  Course Overview
                </h4>
              </div>
              <button className="text-[16px] font-medium font-inter text-[#31564E] hover:text-[#2D4A43] transition-colors">
                Edit Info
              </button>
            </div>
            <p className="text-[16px] font-medium font-inter text-black/80 leading-relaxed">
              Master the art of professional communication in English. This
              comprehensive course covers nuanced workplace interactions,
              cross-cultural sensitivity, and public speaking techniques powered
              by real-time AI feedback loops.
            </p>
          </div>

          {/* Course Curriculum */}
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h4 className="text-[18px] font-medium font-inter text-black">
                  Course Curriculum
                </h4>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-[16px] font-medium font-inter text-[#31564E] hover:bg-slate-50 transition-all">
                <span className="text-[#31564E] text-base leading-none">+</span>
                &nbsp;Add Module
              </button>
            </div>

            <div className="space-y-3">
              {/* Module 1 — Expanded */}
              <div className="border border-slate-100 rounded-[20px] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 bg-slate-50/60 cursor-pointer hover:bg-slate-100/60 transition-colors group">
                  <div className="flex items-center gap-3">
                    <GripHorizontal className="h-4 w-4 text-slate-300 group-hover:text-slate-400" />
                    <div>
                      <p className="text-[18px] font-medium font-inter text-black">
                        Module 1: Professional Introductions &amp; Networking
                      </p>
                      <p className="text-[12px] font-medium font-inter text-black/70 mt-0.5">
                        4 Lessons • 1h 45m
                      </p>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-slate-400 rotate-180 transition-transform" />
                </div>
                        
        <div className="px-5 pb-5 pt-2 overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="text-[14px] md:text-[16px] font-medium font-inter text-black/80 border-b border-slate-100">
                <th className="py-3 pr-4">Lesson Title</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 pl-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/70 transition-colors group/row"
                >
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2.5">
                      <GripHorizontal className="h-3.5 w-3.5 text-slate-200 group-hover/row:text-slate-400 shrink-0" />
                      <span className="text-[14px] md:text-[16px] font-medium font-inter text-black/80 whitespace-nowrap">
                        {lesson.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div
                      className={cn(
                        "h-7 w-7 rounded-lg flex items-center justify-center shrink-0",
                        lesson.type === "video"
                          ? "bg-slate-100"
                          : lesson.type === "ai"
                            ? "bg-blue-50"
                            : "bg-slate-50"
                      )}
                    >
                      {lesson.type === "video" && (
                        <PlayCircle className="h-3.5 w-3.5 text-slate-500" />
                      )}
                      {lesson.type === "ai" && (
                        <Brain className="h-3.5 w-3.5 text-blue-500" />
                      )}
                      {lesson.type === "doc" && (
                        <FileText className="h-3.5 w-3.5 text-slate-400" />
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[14px] md:text-[16px] font-medium font-inter text-black/80 whitespace-nowrap">
                    {lesson.duration}
                  </td>
                  <td className="py-3 pl-4">
                    <div className="flex items-center gap-1.5 justify-end">
                      <button className="h-7 w-7 rounded-lg bg-slate-100 hover:bg-[#2D4A43]/10 flex items-center justify-center text-slate-500 hover:text-[#2D4A43] transition-colors">
                        <Pencil className="h-3 w-3" />
                      </button>
                      <button className="h-7 w-7 rounded-lg bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 transition-colors">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              </div>

              {/* Collapsed modules */}
              {collapsedModules.map((mod, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-4 border border-slate-100 rounded-[20px] cursor-pointer hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GripHorizontal className="h-4 w-4 text-slate-300 group-hover:text-slate-400" />
                    <div>
                      <p className="text-[18px] font-medium font-inter text-black group-hover:text-[#2D4A43] transition-colors">
                        {mod.title}
                      </p>
                      <p className="text-[12px] font-medium font-inter text-black/70 mt-0.5">
                        {mod.lessons} Lessons • {mod.duration}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Version Control */}
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                  <History className="h-4 w-4" />
                </div>
                <h4 className="text-[18px] font-medium font-inter text-black">
                  Version Control
                </h4>
              </div>
              <button className="text-[16px] font-medium font-inter text-[#31564E] hover:text-[#2D4A43] transition-colors">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[16px] font-medium font-inter text-[18px] text-black/80 border-b border-slate-100 whitespace-nowrap">
                    <th className="py-3 pr-6">Version</th>
                    <th className="py-3 pr-6">Updated By</th>
                    <th className="py-3 pr-6">Date</th>
                    <th className="py-3 pr-6">Changes</th>
                    <th className="py-3 pr-6">Scope</th>
                    <th className="py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {versions.map((ver, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-medium font-inter text-black/80">
                            {ver.version}
                          </span>
                          {ver.isCurrent && (
                            <span className="px-2 py-0.5 rounded-md text-[12px] font-medium font-inter bg-[#0D7FF2]/30 text-blue-600 border border-blue-100">
                              Current
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 pr-6 text-[16px] font-regular font-inter text-black whitespace-nowrap">
                        {ver.by}
                      </td>
                      <td className="py-4 pr-6 text-[16px] font-medium font-inter text-black/80 whitespace-nowrap">
                        {ver.date}
                      </td>
                      <td className="py-4 pr-6 text-[16px] font-medium font-inter text-black/80 whitespace-nowrap">
                        {ver.changes}
                      </td>
                      <td className="py-4 pr-6">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-lg text-[12px] font-medium font-inter text-black/80",
                            ver.scope === "Global"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                              : "bg-[#717171]/30 text-slate-600 border border-slate-200"
                          )}
                        >
                          {ver.scope}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        {ver.isCurrent ? (
                          <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                            <History className="h-4 w-4" />
                          </button>
                        ) : (
                          <button className="text-[16px] font-medium font-inter text-[#31564E] hover:text-rose-700 transition-colors">
                            Revert
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT COLUMN ═══ */}
        <div className="space-y-5">
          {/* Publishing & Visibility */}
          <div className="bg-[#2D4A43] text-white rounded-[24px] p-6 shadow-xl shadow-[#2D4A43]/20 space-y-5">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 opacity-70" />
              <h4 className="text-[18px] font-medium font-inter text-white">
                Publishing &amp; Visibility
              </h4>
            </div>

            {/* Global Access Toggle */}
            <div className="bg-[#FFFFFF] rounded-[18px] p-4 flex items-center justify-between">
              <div>
                <p className="text-[18px] font-semibold font-inter text-black">
                  Global Access
                </p>
                <p className="text-[14px] opacity-60 font-regular font-inter text-black/80 mt-0.5">
                  Make available to all institutes &amp; Students
                </p>
              </div>
              <div className="h-6 w-11 rounded-full bg-white/20 flex items-center justify-end px-1">
                <div className="h-4 w-4 rounded-full bg-white/40" />
              </div>
            </div>

            {/* Target Institutes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-medium font-inter text-white opacity-70">
                  Target Institutes
                </span>
                <span className="text-[16px] font-medium font-inter text-white">
                  10
                </span>
              </div>

              {institutes.map((inst) => (
                <div
                  key={inst.name}
                  className="bg-white/20 rounded-[16px] p-3.5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="h-4 w-4 opacity-80" />
                    </div>
                    <div>
                      <p className="text-[16px] font-medium font-inter text-white">
                        {inst.name}
                      </p>
                      <p className="text-[14px]  font-regular font-inter text-black">
                        {inst.status} • {inst.version}
                      </p>
                    </div>
                  </div>
                  <button className="text-white/40 hover:text-white transition-colors text-xl leading-none">
                    ×
                  </button>
                </div>
              ))}

              <button className="w-full h-11 rounded-[16px] border border-white/20 hover:bg-white/10 transition-all text-[16px] font-medium font-inter text-white flex items-center justify-center gap-2">
                +&nbsp;Add Institute
              </button>
            </div>
          </div>

          {/* AI Engine Stats */}
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-violet-50 flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-violet-500" />
              </div>
              <h4 className="text-[20px] font-semibold font-inter text-black">
                AI Engine Stats
              </h4>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-regular font-inter text-black">
                    Average Speech Score
                  </span>
                  <span className="text-[18px] font-medium font-inter text-black">
                    84%
                  </span>
                </div>
                <div className="h-2 w-full bg-[#DDDDDD] rounded-full overflow-hidden">
                  <div className="h-full bg-[#007FFF] w-[84%] rounded-full transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-regular font-inter text-black">
                      Completion Rate
                    </p>
                    <p className="text-[12px] text-black/60 font-regular font-inter">
                      Pronunciation: 4.5/5.0
                    </p>
                  </div>
                  <span className="text-[18px] font-medium font-inter text-black">
                    62%
                  </span>
                </div>
                <div className="h-2 w-full bg-[#DDDDDD] rounded-full overflow-hidden">
                  <div className="h-full bg-[#31564E] w-[62%] rounded-full transition-all" />
                </div>
              </div>
            </div>

            <button className="w-full h-11 rounded-[16px] border-2 border-[#31564E] hover:bg-slate-50 text-[16px] font-medium font-inter text-[#31564E] transition-all">
              Detailed Report
            </button>
          </div>

          {/* Quick Tools */}
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 space-y-3">
            <h4 className="text-[20px] font-semibold font-inter text-black">
              Quick Tools
            </h4>

            {/* Export Course Package */}
            <button className="w-full h-16 rounded-[20px] bg-[#2D4A43] hover:bg-[#2D4A43]/90 text-white font-medium font-inter text-[16px] flex items-center gap-4 px-4 transition-all shadow-lg shadow-[#2D4A43]/20 active:scale-[0.98]">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                <svg
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    d="M12 16V4M12 16l-4-4M12 16l4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M4 20h16" strokeLinecap="round" />
                </svg>
              </div>
              Export Course Package
            </button>

            {/* Clone Course Structure */}
            <button className="w-full h-16 rounded-[20px] bg-black hover:bg-black/90 text-white font-medium font-inter text-[16px] flex items-center gap-4 px-4 transition-all shadow-lg shadow-black/20 active:scale-[0.98]">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                <svg
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <rect x="8" y="8" width="13" height="13" rx="2" />
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              Clone Course Structure
            </button>

            {/* Archive / Delete */}
            <button className="w-full h-16 rounded-[20px] border-2 border-rose-200 bg-white hover:bg-rose-50 text-[#FF3939] font-medium font-inter text-[16px] flex items-center gap-4 px-4 transition-all active:scale-[0.98]">
              <div className="h-10 w-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                <svg
                  className="h-5 w-5 text-rose-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    d="M12 4v8m0 0l-3-3m3 3l3-3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="3" y="14" width="18" height="7" rx="2" />
                </svg>
              </div>
              Clone Course Structure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProfile;
