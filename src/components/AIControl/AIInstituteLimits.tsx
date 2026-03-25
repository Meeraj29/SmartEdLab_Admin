"use client";

import { Edit2, Power, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SimpleSwitch = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <button
    type="button"
    onClick={onChange}
    className={cn(
      "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      checked ? "bg-[#0052CC]" : "bg-slate-200"
    )}
  >
    <span
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200",
        checked ? "translate-x-5" : "translate-x-1"
      )}
    />
  </button>
);

const AIInstituteLimits = () => {
  const [threshold, setThreshold] = useState(80);
  const [resetEnabled, setResetEnabled] = useState(true);
  const [autoDisable, setAutoDisable] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* AI Limit Panel */}
      <div className="bg-white rounded-[32px] p-8 space-y-8 shadow-sm border border-slate-50">
        <div className="space-y-1.5">
          <h3 className="text-[20px] font-black text-[#1E293B]">
            AI Limit Panel
          </h3>
          <p className="text-[14px] font-medium text-slate-400 max-w-sm leading-relaxed">
            Manage global token consumption and auto-scaling thresholds.
          </p>
        </div>

        {/* Usage Card */}
        <div className="bg-[#F0F7FF] rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[12px] font-black text-[#0052CC] uppercase tracking-wider">
              Global Language School
            </span>
            <span className="text-[14px] font-black text-[#0052CC]">
              78% Usage
            </span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0052CC] rounded-full"
              style={{ width: "78%" }}
            />
          </div>
          <div className="flex justify-between items-center text-[12px] font-bold text-slate-400">
            <span>78,000 used</span>
            <span>100,000 total</span>
          </div>
        </div>

        {/* Threshold Configuration */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-[18px] font-black text-[#1E293B]">
              Threshold Alert Configuration
            </h4>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold text-slate-600">
                Threshold Alert %
              </span>
              <div className="bg-[#F0F7FF] text-[#0052CC] px-4 py-1.5 rounded-lg font-black text-[14px]">
                {threshold}%
              </div>
            </div>
            <div className="relative pt-4 pb-2">
              <input
                type="range"
                min="0"
                max="100"
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-[#0052CC]"
              />
              <style jsx>{`
                input[type='range']::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 20px;
                  height: 20px;
                  background: white;
                  border: 2px solid #0052CC;
                  border-radius: 50%;
                  cursor: pointer;
                  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                }
               `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Token Limit Settings */}
      <div className="bg-white rounded-[32px] p-8 space-y-8 shadow-sm border border-slate-50">
        <h3 className="text-[20px] font-black text-[#1E293B]">
          Token limit settings
        </h3>

        {/* Monthly Token Cap */}
        <div className="space-y-2 relative">
          <label
            htmlFor="monthlyTokenCap"
            className="absolute right-0 top-[-24px] text-[12px] font-black text-slate-500 uppercase tracking-wider"
          >
            Monthly Token Cap
          </label>
          <div className="relative group">
            <input
              id="monthlyTokenCap"
              type="text"
              defaultValue="10000000"
              className="w-full h-14 bg-white border border-slate-200 rounded-xl px-6 font-bold text-[16px] text-[#1E293B] focus:ring-2 focus:ring-[#0052CC] outline-none"
            />
            <Edit2 className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 cursor-pointer hover:text-slate-700 transition-colors" />
          </div>
        </div>

        <div className="space-y-8">
          {/* Reset Switch */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
                <RefreshCw className="h-5 w-5" />
              </div>
              <span className="text-[15px] font-bold text-slate-700">
                Reset cap on 1st of month
              </span>
            </div>
            <SimpleSwitch
              checked={resetEnabled}
              onChange={() => setResetEnabled(!resetEnabled)}
            />
          </div>

          {/* Auto-disable Switch */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052CC]">
                  <Power className="h-5 w-5" />
                </div>
                <span className="text-[15px] font-bold text-slate-700">
                  Auto-disable AI
                </span>
              </div>
              <SimpleSwitch
                checked={autoDisable}
                onChange={() => setAutoDisable(!autoDisable)}
              />
            </div>

            {/* Checklist */}
            <div className="ml-14 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-[#0052CC] flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <span className="text-[14px] font-bold text-slate-400">
                  Notify School Administrators
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-[#0052CC] flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <span className="text-[14px] font-bold text-slate-400">
                  Log system shutdown event
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full h-14 bg-black hover:bg-black/90 text-white rounded-2xl font-black text-[15px] mt-4 shadow-xl shadow-black/10 active:scale-[0.98] transition-all">
          Apply Limits
        </Button>
      </div>
    </div>
  );
};

export default AIInstituteLimits;
