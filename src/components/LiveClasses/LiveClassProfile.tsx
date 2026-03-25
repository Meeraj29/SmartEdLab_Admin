"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  MessageCircle,
  MoreVertical,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LiveClassProfileProps {
  id: number | null;
  onBack: () => void;
}

const LiveClassProfile = ({ id, onBack }: LiveClassProfileProps) => {
  // Mock detail data based on ID
  const classDetail = {
    id: id || 1,
    title: "Advanced React Patterns & Performance",
    tutor: {
      name: "Dr. Sarah Johnson",
      role: "Lead Frontend Architect",
      email: "sarah.j@edu.com",
      avatar: "SJ",
    },
    schedule: {
      date: "25 March 2024",
      time: "10:00 AM - 11:30 AM",
      duration: "90 min",
      remaining: "Live Now",
    },
    stats: {
      enrolled: 42,
      capacity: 50,
      chats: 124,
      questions: 12,
    },
    platform: {
      name: "Zoom",
      meetingId: "842 910 2314",
      passcode: "EDU2024",
    },
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header with Back & Menu */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <button
            onClick={onBack}
            className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all"
          >
            <ArrowLeft className="h-6 w-6 text-slate-500" />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-[10px] font-black uppercase flex items-center gap-1.5 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                Live Now
              </span>
              <span className="text-slate-400 text-sm font-medium">
                Session ID: #{classDetail.id}
              </span>
            </div>
            <h1 className="text-3xl font-black text-foreground tracking-tight italic">
              {classDetail.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-12 rounded-2xl px-6 border-slate-200 font-bold gap-2"
          >
            <ShieldCheck className="h-5 w-5 text-emerald-500" />
            Manage Access
          </Button>
          <Button className="h-12 rounded-2xl px-6 bg-[#31564E] text-white font-black hover:bg-[#2D4A43] shadow-lg shadow-[#31564E]/10 gap-2">
            Join as Moderator
            <ExternalLink className="h-4 w-4" />
          </Button>
          <button className="h-12 w-12 flex items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all">
            <MoreVertical className="h-6 w-6 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Profile Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stats column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Students",
                value: `${classDetail.stats.enrolled}/${classDetail.stats.capacity}`,
                icon: Users,
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                label: "Duration",
                value: classDetail.schedule.duration,
                icon: Clock,
                color: "text-purple-500",
                bg: "bg-purple-50",
              },
              {
                label: "Chat msgs",
                value: classDetail.stats.chats,
                icon: MessageCircle,
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
              {
                label: "Status",
                value: "Active",
                icon: Video,
                color: "text-red-500",
                bg: "bg-red-50",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-[24px] border border-slate-100 p-6 flex flex-col items-center gap-3 shadow-sm"
              >
                <div
                  className={cn(
                    "h-12 w-12 rounded-2xl flex items-center justify-center",
                    stat.bg
                  )}
                >
                  <stat.icon className={cn("h-6 w-6", stat.color)} />
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-black text-slate-800 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Meeting Info Card */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">
              Session Connection Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  Meeting Platform
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Video className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-black text-slate-800">
                    {classDetail.platform.name}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  Meeting ID
                </p>
                <p className="text-lg font-black text-[#A1B8B3] tracking-tighter">
                  {classDetail.platform.meetingId}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  Passcode / Key
                </p>
                <p className="text-lg font-black text-slate-800 select-all">
                  {classDetail.platform.passcode}
                </p>
              </div>
            </div>
          </div>

          {/* More Sections... */}
          <div className="bg-[#31564E] rounded-[32px] p-8 text-white flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-black mb-1">Live AI Monitoring</h4>
              <p className="text-white/60 font-medium">
                Auto-scaling resources for 42 participants.
              </p>
            </div>
            <Button className="bg-white text-[#31564E] hover:bg-white/90 rounded-2xl h-14 px-8 font-black shadow-xl shadow-black/10">
              View Server Logs
            </Button>
          </div>
        </div>

        {/* Sidebar Info column */}
        <div className="space-y-8">
          {/* Host Card */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm text-center">
            <div className="h-24 w-24 rounded-[32px] bg-slate-100 border-4 border-slate-50 mx-auto flex items-center justify-center text-2xl font-black text-slate-400 mb-6 overflow-hidden">
              {classDetail.tutor.avatar}
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {classDetail.tutor.name}
            </h3>
            <p className="text-emerald-600 font-bold mb-6">
              {classDetail.tutor.role}
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl text-[13px] font-medium text-slate-500 mb-6">
              {classDetail.tutor.email}
            </div>
            <Button
              variant="outline"
              className="w-full h-12 rounded-2xl font-bold border-slate-200"
            >
              View Tutor Profile
            </Button>
          </div>

          {/* Schedule detail */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-5 w-5 text-slate-400" />
              <span className="text-sm font-black uppercase text-slate-400 tracking-widest">
                Schedule Info
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[13px] font-bold text-slate-800">
                  {classDetail.schedule.date}
                </p>
                <p className="text-slate-400 text-xs">Session Date</p>
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-800">
                  {classDetail.schedule.time}
                </p>
                <p className="text-slate-400 text-xs">Timezone: UTC +5:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassProfile;
