"use client";

import { ArrowLeft, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import AIInstituteLimits from "./AIInstituteLimits";
import AISessionLogs from "./AISessionLogs";

interface AIStudentDetailProps {
  studentName: string;
  onBack: () => void;
}

const AIStudentDetail = ({ studentName, onBack }: AIStudentDetailProps) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation Header */}
      <div className="flex flex-col gap-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 group text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[18px] font-bold">AI Control Center</span>
        </button>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h2 className="text-[28px] font-black text-slate-900 tracking-tight">
              {studentName}
            </h2>
            <p className="text-[14px] font-medium text-slate-400 max-w-2xl leading-relaxed">
              Monitor Institutes AI interaction sessions, token consumption, and
              performance metrics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button className="h-12 rounded-xl px-8 bg-black hover:bg-black/90 text-white flex items-center gap-2.5 text-[15px] font-bold shadow-lg shadow-black/10 transition-all active:scale-95">
              <Download className="h-4.5 w-4.5" />
              Export data
            </Button>
          </div>
        </div>
      </div>

      {/* AI Limits Section - Reusing the component but allowing customization if needed */}
      <AIInstituteLimits />

      {/* Student Session Logs */}
      <div className="mt-12">
        <AISessionLogs />
      </div>
    </div>
  );
};

export default AIStudentDetail;
