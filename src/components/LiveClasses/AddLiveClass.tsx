"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  Globe,
  MonitorPlay,
  Video,
  VideoOff,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddLiveClassProps {
  onBack: () => void;
  onSuccess: () => void;
}

const AddLiveClass = ({ onBack, onSuccess }: AddLiveClassProps) => {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6 pb-12 ">
      <div className="fixed top-[80px] left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-b border-border/10">
        <div className="px-4 md:px-8 lg:px-12 py-5">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={onBack}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all group"
              >
                <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
              </button>
              <div className="flex flex-col ">
                <h2 className="text-2xl font-black text-foreground  tracking-tight">
                  Schedule New Live Class
                </h2>
                <p className="text-slate-500 font-medium">
                  Step {step} of 3 • Session Details
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Container */}
        <div className=" bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-black/5  p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="sessionTitle"
                    className="text-sm font-black text-slate-700 uppercase tracking-wider"
                  >
                    Session Title
                  </label>
                  <input
                    id="sessionTitle"
                    type="text"
                    placeholder="e.g. Advanced AI Prompt Engineering"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 text-[15px] outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="hostTutor"
                    className="text-sm font-black text-slate-700 uppercase tracking-wider"
                  >
                    Host / Tutor
                  </label>
                  <select
                    id="hostTutor"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 text-[15px] outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-bold appearance-none"
                  >
                    <option>Select Tutor</option>
                    <option>Dr. Sarah Johnson</option>
                    <option>Alex Rivera</option>
                    <option>Prof. Michael Chen</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2 relative">
                  <label
                    htmlFor="sessionDate"
                    className="text-sm font-black text-slate-700 uppercase tracking-wider"
                  >
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      id="sessionDate"
                      type="date"
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-14 pr-6 text-[15px] outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <label
                    htmlFor="startTime"
                    className="text-sm font-black text-slate-700 uppercase tracking-wider"
                  >
                    Start Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      id="startTime"
                      type="time"
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-14 pr-6 text-[15px] outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <label
                    htmlFor="duration"
                    className="text-sm font-black text-slate-700 uppercase tracking-wider"
                  >
                    Duration (min)
                  </label>
                  <div className="relative">
                    <MonitorPlay className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      id="duration"
                      type="number"
                      placeholder="60"
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-14 pr-6 text-[15px] outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-black text-slate-700 uppercase tracking-wider block">
                  Select Platform
                </span>
                <div className="grid grid-cols-1 md:grid-cols-1 w-full gap-4">
                  {[
                    {
                      id: "gmeet",
                      name: "G-Meet",
                      icon: Globe,
                      color: "text-emerald-500",
                    },
                  ].map((p) => (
                    <button
                      key={p.id}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-slate-100 bg-slate-50/50 hover:border-black transition-all gap-3 group"
                    >
                      <p.icon className={cn("h-8 w-8", p.color)} />
                      <span className="text-[13px] font-black">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  className="h-14 rounded-2xl px-12 bg-black text-white font-black hover:bg-black/90 shadow-xl shadow-black/10 transition-all"
                >
                  Continue Next Step
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              {/* Platform Config Placeholder */}
              <div className="p-20 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-[24px] bg-slate-50/30">
                <Video className="h-12 w-12 text-slate-300 mb-4" />
                <p className="text-slate-500 font-bold">
                  Configure Virtual Room Settings
                </p>
                <p className="text-slate-400 text-sm">
                  Meeting links and permissions will appear here.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep(1)}
                  className="h-14 px-8 text-slate-500 font-bold"
                >
                  Back to Details
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="h-14 rounded-2xl px-12 bg-black text-white font-black hover:bg-black/90 shadow-xl shadow-black/10 transition-all"
                >
                  Review & Schedule
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in zoom-in-95 duration-500">
              <div className="bg-emerald-50/50 p-8 rounded-[24px] border border-emerald-100/50 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <VideoOff className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-emerald-900 mb-2">
                  Ready to Go Live!
                </h3>
                <p className="text-emerald-700/70 font-medium max-w-sm">
                  Everything is set for your advanced AI workshop. Confirm below
                  to notify enrolled students.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep(2)}
                  className="h-14 px-8 text-slate-500 font-bold"
                >
                  Back to Config
                </Button>
                <Button
                  onClick={onSuccess}
                  className="h-14 rounded-2xl px-12 bg-emerald-600 text-white font-black hover:bg-emerald-700 shadow-xl shadow-emerald-500/20 transition-all"
                >
                  Schedule Class Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddLiveClass;
