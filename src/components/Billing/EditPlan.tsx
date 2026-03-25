"use client";

import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Info,
  ShieldCheck,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EditPlanProps {
  onBack: () => void;
  planName: string;
}

const EditPlan = ({ onBack, planName }: EditPlanProps) => {
  const [switches, setSwitches] = React.useState({
    planStatus: true,
    publicDirectory: true,
    instituteAccess: false,
    courseAccess: true,
    liveClasses: true,
    aiPractice: true,
    analytics: true,
    premiumSupport: false,
    offlineAccess: false,
  });

  const toggleSwitch = (key: keyof typeof switches) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const FeatureToggle = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
      <span className="text-[14px] font-bold text-slate-700">{label}</span>
      <button
        onClick={onClick}
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors duration-200 outline-none",
          active ? "bg-[#2D4A43]" : "bg-slate-200"
        )}
      >
        <div
          className={cn(
            "absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200",
            active ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );

  const InputField = ({
    label,
    value,
    type = "text",
    placeholder = "",
    isDropdown = false,
    icon: Icon,
  }: any) => {
    const id = label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="text-[12px] font-black text-slate-500 uppercase tracking-widest pl-1"
        >
          {label}
        </label>
        <div className="relative group">
          <input
            id={id}
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            readOnly={isDropdown}
            className={cn(
              "h-14 w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-6 text-[15px] font-bold outline-none focus:ring-4 focus:ring-[#31564E]/10 transition-all",
              isDropdown && "cursor-pointer"
            )}
          />
          {isDropdown && (
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          )}
          {Icon && (
            <Icon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-700 pb-10">
      {/* Target Image Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-100 mb-2">
        <div className="space-y-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 group text-slate-400 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[15px] font-bold">
              Edit Subscription Plan
            </span>
          </button>

          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {planName}
              </h1>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[11px] font-black uppercase tracking-wider rounded-lg border border-emerald-100">
                Active
              </span>
            </div>
            <p className="text-sm font-bold text-slate-400">
              B2C Subscription Plan • Created on Oct 24, 2023
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button
            variant="outline"
            className="h-12 rounded-2xl px-6 border-[#31564E]/20 text-[#31564E] font-bold hover:bg-emerald-50 transition-all"
          >
            Disable
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-2xl px-6 border-red-200 text-red-500 font-bold hover:bg-red-50 transition-all"
          >
            Delete Plan
          </Button>
          <Button className="h-12 rounded-2xl px-8 bg-black text-white font-bold shadow-xl shadow-black/10 hover:bg-black/95 transition-all">
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section (2 columns) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Plan Overview */}
          <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] space-y-8">
            <div className="flex items-center gap-2 text-blue-500">
              <Info className="h-5 w-5" />
              <h3 className="text-lg font-black text-slate-800 tracking-tight">
                Plan Overview
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <InputField label="Plan Name" value={planName} />
              <InputField
                label="Course Name"
                value="B2C (Individual)"
                isDropdown
              />
              <InputField label="Billing Cycle" value="Monthly" isDropdown />
              <InputField label="Grace Period (Days)" value="Pro Learning" />
            </div>
          </section>

          {/* Pricing Configuration */}
          <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] space-y-8">
            <div className="flex items-center gap-2 text-[#FF8206]">
              <CreditCard className="h-5 w-5" />
              <h3 className="text-lg font-black text-slate-800 tracking-tight">
                Pricing Configuration
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InputField label="Base Price" value="₹999" />
              <InputField label="Currency" value="Rupee(₹)" isDropdown />
              <InputField
                label="Customer Preview"
                value="₹999/ month"
                isDropdown
              />
            </div>
          </section>

          {/* Plan Limits */}
          <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] space-y-8">
            <div className="flex items-center gap-2 text-blue-500">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="text-lg font-black text-slate-800 tracking-tight">
                Plan Limits
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <InputField label="Student Limit" value="01" />
              <InputField label="Tutor Limit" value="03" />
              <InputField label="AI Tokens (K)" value="500" />
              <InputField label="Max Live Classes" value="10" />
            </div>
          </section>

          {/* Plan Features */}
          <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] space-y-8">
            <div className="flex items-center gap-2 text-[#31564E]">
              <CheckCircle2 className="h-5 w-5" />
              <h3 className="text-lg font-black text-slate-800 tracking-tight">
                Plan Features
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              <FeatureToggle
                label="Complete Course Access"
                active={switches.courseAccess}
                onClick={() => toggleSwitch("courseAccess")}
              />
              <FeatureToggle
                label="Live Group Classes"
                active={switches.liveClasses}
                onClick={() => toggleSwitch("liveClasses")}
              />
              <FeatureToggle
                label="Unlimited AI Practice"
                active={switches.aiPractice}
                onClick={() => toggleSwitch("aiPractice")}
              />
              <FeatureToggle
                label="Progress Analytics"
                active={switches.analytics}
                onClick={() => toggleSwitch("analytics")}
              />
              <FeatureToggle
                label="Premium Support"
                active={switches.premiumSupport}
                onClick={() => toggleSwitch("premiumSupport")}
              />
              <FeatureToggle
                label="Offline Download Access"
                active={switches.offlineAccess}
                onClick={() => toggleSwitch("offlineAccess")}
              />
            </div>
          </section>
        </div>

        {/* Right Section (Sidebar Widgets) */}
        <div className="space-y-8">
          {/* Usage Summary Card */}
          <div className="bg-[#2D4A43] rounded-[32px] p-8 text-white space-y-8 relative overflow-hidden shadow-2xl shadow-[#2D4A43]/20">
            <div className="flex items-center gap-2 opacity-80">
              <CreditCard className="h-5 w-5 text-emerald-300" />
              <span className="text-[15px] font-bold uppercase tracking-widest text-emerald-300/80">
                Usage Summary
              </span>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="space-y-1">
                <p className="text-[15px] font-bold text-emerald-100/60">
                  Target Institutes
                </p>
                <p className="text-[34px] font-black tracking-tighter">
                  12,842
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[15px] font-bold text-emerald-100/60">
                  Monthly Revenue
                </p>
                <p className="text-[34px] font-black tracking-tighter">
                  ₹372,418.00
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-[13px] font-bold text-emerald-100/40">
                  Last subscription purchase
                </p>
                <p className="text-lg font-black text-emerald-100">
                  2 minutes ago
                </p>
              </div>
            </div>
          </div>

          {/* Visibility & Status */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-slate-400" />
              <h3 className="text-lg font-black text-slate-800 tracking-tight">
                Visibility & Status
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  key: "planStatus",
                  label: "Plan Status",
                  sub: "Currently accepting new signups",
                },
                {
                  key: "publicDirectory",
                  label: "Public Directory",
                  sub: "Visible on pricing page",
                },
                {
                  key: "instituteAccess",
                  label: "Institute Access",
                  sub: "Available for B2B portal",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <p className="text-[15px] font-black text-slate-800 leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[12px] font-bold text-slate-400 leading-none">
                      {item.sub}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSwitch(item.key as any)}
                    className={cn(
                      "relative h-6 w-11 rounded-full transition-colors duration-200 outline-none",
                      switches[item.key as keyof typeof switches]
                        ? "bg-[#2D4A43]"
                        : "bg-slate-200"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200",
                        switches[item.key as keyof typeof switches]
                          ? "translate-x-5"
                          : "translate-x-0"
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Trail */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] space-y-6">
            <div className="flex items-center justify-between text-[14px]">
              <span className="font-bold text-slate-400">Plan ID:</span>
              <span className="font-black text-slate-800">PL-2023-X99B</span>
            </div>
            <div className="flex items-center justify-between text-[14px]">
              <span className="font-bold text-slate-400">Created By:</span>
              <span className="font-black text-slate-800">
                sarah.admin@englishai.com
              </span>
            </div>
            <div className="flex items-center justify-between text-[14px]">
              <span className="font-bold text-slate-400">Last Modified:</span>
              <span className="font-black text-slate-800">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPlan;
