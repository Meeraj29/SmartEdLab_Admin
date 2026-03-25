"use client";

import { Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIInstituteAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Automated Cost Analysis */}
      <div className="lg:col-span-2 relative overflow-hidden rounded-[32px] p-10 flex flex-col justify-between bg-gradient-to-br from-[#E6F4FF] to-[#D0E5FF] min-h-[280px]">
        {/* Background Graphic */}
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 select-none pointer-events-none">
          <Sparkles className="h-64 w-64 text-[#0052CC]" />
        </div>

        <div className="relative z-10 space-y-4 max-w-lg">
          <h3 className="text-[24px] font-black text-[#0052CC] tracking-tight">
            Automated Cost Analysis
          </h3>
          <p className="text-[16px] font-bold text-slate-500 leading-relaxed">
            AI session density is highest between 18:00 and 22:00. Switching to
            tiered API scheduling could reduce infrastructure costs by{" "}
            <span className="text-[#0052CC]">14.2%</span>
            next month.
          </p>
        </div>

        <Button className="w-fit h-14 bg-black hover:bg-black/90 text-white rounded-2xl px-8 font-black text-[15px] shadow-xl shadow-black/10 transition-all active:scale-[0.98]">
          Generate full Report
        </Button>
      </div>

      {/* Model Performance */}
      <div className="rounded-[32px] p-10 flex flex-col justify-between bg-[#31564E] group min-h-[280px]">
        <div className="space-y-6">
          <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-black text-white tracking-tight">
              Model Performance
            </h3>
            <p className="text-[15px] font-bold text-white/60 leading-relaxed">
              Language model "Polly-v4" is maintaining{" "}
              <span className="text-white">99.8%</span> uptime with a latency
              average of <span className="text-white">420ms</span>.
            </p>
          </div>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[80%] bg-emerald-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AIInstituteAnalytics;
