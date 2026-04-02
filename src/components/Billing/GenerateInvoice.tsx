"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  DollarSign,
  FilePlus,
  Package,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GenerateInvoiceProps {
  onBack: () => void;
  onSuccess: () => void;
}

const GenerateInvoice = ({ onBack, onSuccess }: GenerateInvoiceProps) => {
  const [step, setStep] = useState(1);

  const steps = [
    { title: "Select Institute", icon: Building2 },
    { title: "Plan & Details", icon: Package },
    { title: "Confirm & Generate", icon: ShieldCheck },
  ];

  return (
     
       <div className="fixed top-[80px] left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-b border-border/10 space-y-6 pb-12">
      <div className="px-4 md:px-8 lg:px-12 py-5">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all group"
          >
            <ArrowLeft className="h-6 w-6 text-slate-400 group-hover:text-slate-600" />
          </button>
          <div>
            <h2 className="text-2xl font-black text-foreground tracking-tight underline-offset-4 flex items-center gap-2">
              <FilePlus className="h-7 w-7 text-blue-600" />
              Generate Institutional Invoice
            </h2>
            <p className="text-slate-400 font-bold group-hover:text-slate-500 transition-colors">
              Step {step} of 3 • {steps[step - 1].title}
            </p>
          </div>
        </div>

        {/* Timeline Header */}
        <div className="hidden md:flex items-center gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className={cn(
                  "h-10 w-10 rounded-2xl flex items-center justify-center transition-all border-2",
                  step === i + 1
                    ? "bg-[#31564E] border-[#31564E] text-white shadow-lg shadow-[#31564E]/20"
                    : i + 1 < step
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-white border-slate-100 text-slate-300"
                )}
              >
                <s.icon className="h-5 w-5" />
              </div>
              {i < steps.length - 1 && (
                <div className="w-8 h-0.5 bg-slate-100 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-14 shadow-2xl shadow-black/5 overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <DollarSign className="h-40 w-40 text-black" />
        </div>

        {step === 1 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <label
                htmlFor="target-institution"
                className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1"
              >
                Target Institution
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  id="target-institution"
                  className="h-16 w-full rounded-3xl border border-slate-200 bg-slate-50/50 px-8 text-[15px] outline-none focus:ring-4 focus:ring-[#31564E]/10 transition-all font-black appearance-none cursor-pointer"
                >
                  <option>Select Registered Education Entity</option>
                  <option>Global Tech Academy</option>
                  <option>Nexus High School</option>
                  <option>Digital Arts School</option>
                </select>
                <div className="h-16 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold px-8">
                  Entity ID: --
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1 block">
                Billing Period
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Monthly Plan", "Annual Subscription", "Quarterly Cycle"].map(
                  (plan, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-[32px] border-2 border-slate-50 bg-slate-50/30 hover:border-black hover:bg-white transition-all cursor-pointer group text-center space-y-3"
                    >
                      <Calendar className="h-8 w-8 text-slate-300 mx-auto group-hover:text-blue-500 transition-colors" />
                      <span className="text-[13px] font-black text-slate-800">
                        {plan}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <Button
                onClick={() => setStep(2)}
                className="h-16 rounded-3xl px-12 bg-black text-white font-black hover:bg-black/90 shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all gap-3"
              >
                Forward Next <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Simple pricing grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-slate-800 tracking-tight">
                Financial Adjustments
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    Base Subscription Plan
                  </span>
                  <div className="h-14 rounded-2xl bg-[#31564E]/5 border border-[#31564E]/10 flex items-center px-6 text-[#31564E] font-black">
                    $2,400.00
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    Applied Discount (%)
                  </span>
                  <input
                    type="number"
                    placeholder="0"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 text-[15px] outline-none font-black"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-8 border-t border-slate-100">
              <Button
                variant="ghost"
                onClick={() => setStep(1)}
                className="h-16 px-8 text-slate-500 font-bold hover:bg-slate-50"
              >
                Modify Institution
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="h-16 rounded-3xl px-12 bg-black text-white font-black hover:bg-black/90 shadow-2xl shadow-black/20 transition-all gap-3"
              >
                Review & Audit Summary <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 Placeholder logic is similar to LiveClasses successful wizard style */}
        {step === 3 && (
          <div className="space-y-10 animate-in zoom-in-95 duration-500 text-center">
            <div className="h-24 w-24 rounded-[32px] bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/10">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <h3 className="text-3xl font-black text-[#1E293B] tracking-tight">
              Invoice Review Ready
            </h3>
            <p className="text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
              You are about to issue a legally binding invoice for **Nexus High
              School** for the annual period. System will notify stakeholders
              immediately.
            </p>

            <div className="flex justify-center gap-4 pt-10">
              <Button
                variant="ghost"
                onClick={() => setStep(step - 1)}
                className="h-16 px-10 text-slate-500 font-bold"
              >
                Reject & Modify
              </Button>
              <Button
                onClick={onSuccess}
                className="h-16 rounded-3xl px-14 bg-emerald-600 text-white font-black hover:bg-emerald-700 shadow-2xl shadow-emerald-500/20 translate-y-[-4px] active:translate-y-0 transition-all"
              >
                Submit Institutional Invoice
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default GenerateInvoice;
