"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import AIInstituteSessionLogs from "@/components/AIControl/AIInstituteSessionLogs";
import AIStudentSessionLogs from "@/components/AIControl/AIStudentSessionLogs";
import { cn } from "@/lib/utils";

interface AISessionsViewProps {
  onBack: () => void;
}

const AISessionsView = ({ onBack }: AISessionsViewProps) => {
  const [activeTab, setActiveTab] = useState<"institute" | "student">(
    "institute"
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 group text-slate-400 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-[14px] font-bold">AI Control Center</span>
      </button>

      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-[28px] font-black text-slate-900 tracking-tight">
          Session
        </h2>
        <p className="text-[14px] font-medium text-slate-400 max-w-2xl leading-relaxed">
          Monitor Institutes AI interaction sessions, token consumption, and
          performance metrics.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        <button
          onClick={() => setActiveTab("institute")}
          className={cn(
            "px-8 py-4 text-[15px] font-black transition-all relative",
            activeTab === "institute"
              ? "text-slate-900"
              : "text-slate-400 hover:text-slate-600"
          )}
        >
          Institute
          {activeTab === "institute" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#31564E] rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("student")}
          className={cn(
            "px-8 py-4 text-[15px] font-black transition-all relative",
            activeTab === "student"
              ? "text-slate-900"
              : "text-slate-400 hover:text-slate-600"
          )}
        >
          Student
          {activeTab === "student" && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#31564E] rounded-full" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "institute" ? (
          <AIInstituteSessionLogs />
        ) : (
          <AIStudentSessionLogs />
        )}
      </div>
    </div>
  );
};

export default AISessionsView;
