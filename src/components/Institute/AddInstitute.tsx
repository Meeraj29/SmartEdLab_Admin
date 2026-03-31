"use client";

import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  ExternalLink,
  FileText,
  GraduationCap,
  Info,
  Mail,
  Plus,
  Receipt,
  School,
  Shield,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import cybersecrityImg from "@/assets/Overlay+Shadow.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddInstituteProps {
  onBack: () => void;
  onSuccess: () => void;
}

const AddInstitute = ({ onBack, onSuccess }: AddInstituteProps) => {
  const [step, setStep] = React.useState(1);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [_paymentMethod, _setPaymentMethod] = React.useState("card");
  const [isIPRestrictionEnabled, setIsIPRestrictionEnabled] =
    React.useState(false);
  const [isAIAutoDisableEnabled, setIsAIAutoDisableEnabled] =
    React.useState(true);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else setShowSuccessModal(true);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="w-full max-w-[680px] bg-white rounded-[32px] p-10 shadow-2xl space-y-8 animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-[24px] font-bold font-inter text-[#111827] tracking-tight">
                  Institute Registered!
                </h2>
                <p className="text-[16px] font-regular font-inter text-[#6B7280]">
                  Oxford Learning Hub has been successfully added to the
                  platform.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium text-[16px] font-inter">
                  Platform ID
                </span>
                <span className="text-slate-800 font-bold text-[16px] font-inter">
                  INS-8829-XQ
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium text-[16px] font-inter">
                  License Type
                </span>
                <span className="text-slate-800 font-bold text-[16px] font-inter">
                  Quarterly (Enterprise)
                </span>
              </div>
            </div>
            <Button
              onClick={onSuccess}
              className="w-full h-14 bg-black hover:bg-black/90 text-white rounded-2xl text-[16px] font-semibold font-inter transition-all"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      )}

      {/* Fixed Header Implementation */}
      <div className="fixed top-[80px] left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-b border-border/10">
        <div className="px-4 md:px-8 lg:px-12 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-slate-50 transition-all shadow-sm"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex flex-col">
                <h2 className="text-[20px] font-inter font-semibold text-foreground">
                  Add New Institute
                </h2>
                <p className="text-[14px] font-inter font-regular text-muted-foreground">
                  Create and configure a Institute profile for the platform.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  className="h-11 rounded-xl px-6 border-slate-200 text-slate-600 font-medium font-inter text-[16px] hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {step === 2
                    ? "Institute Identity"
                    : step === 3
                      ? "Branding"
                      : step === 4
                        ? "Plans"
                        : "Security setting"}
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="h-11 rounded-xl px-10 font-medium font-inter text-[16px] bg-black hover:bg-black/90 text-white shadow-xl shadow-black/10 transition-all"
              >
                {step === 1
                  ? "Next: Branding"
                  : step === 2
                    ? "Next: Plans"
                    : step === 3
                      ? "Next: Security"
                      : step === 4
                        ? "Next: Billing"
                        : "Create Institute"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px]" />

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
          <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm space-y-10">
            <div>
              <h3 className="text-[18px] font-semibold font-inter text-black flex items-center gap-2">
                Step: 1{" "}
                <span className="text-[20px] font-inter font-semibold text-[#31564E]">
                  Institute Identity
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              <div className="space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Institute Name{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Institute name"
                  className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Institute Email{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Institute Email"
                  className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Mobile no{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your mobile no"
                  className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Primary Admin Name{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Primary Admin Name"
                  className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Primary Admin Email{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Primary Admin Email"
                  className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Primary Admin Mobile{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Primary Admin mobile no"
                  className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600"
                />
              </div>

              <div className="md:col-span-2 lg:col-span-3 space-y-3">
                <label
                  htmlFor="platform"
                  className="text-[16px] font-medium font-inter text-black flex items-center gap-1.5"
                >
                  Institute Address{" "}
                  <span className="text-red-500 font-black text-xs">*</span>
                </label>
                <textarea
                  placeholder="Enter Institute address"
                  className="w-full h-40 rounded-xl bg-[#F8FAFB] border-none p-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-regular font-inter text-[14px] text-slate-600 resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side: Assets and Branding */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-10">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[18px] font-semibold  font-inter text-[#000000CC] flex items-center gap-2">
                      Step: 2{" "}
                      <span className="text-[20px] font-inter font-semibold text-[#31564E]">
                        Branding
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                      <h4 className="text-[20px] font-inter font-semibold text-black">
                        Core Assets
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <label
                        htmlFor="platform"
                        className="text-[14px] font-semibold font-inter text-[#0B1C30]"
                      >
                        Institute Logo
                      </label>
                      <div className="flex items-center gap-6">
                        <div className="h-24 w-24 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-blue-200 hover:bg-blue-50/10 transition-all">
                          <Plus className="h-5 w-5 text-slate-400" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                            Upload
                          </span>
                        </div>
                        <p className="text-[14px] text-[#424754] font-regular font-inter leading-relaxed max-w-[300px]">
                          Recommended: SVG or high-res PNG (min 512×512px).
                          Transparent background preferred.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="platform"
                        className="text-[16px] font-medium font-inter text-[#0B1C30]"
                      >
                        Platform Display Name
                      </label>
                      <input
                        type="text"
                        placeholder="Global Language Academy"
                        className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-medium font-inter text-[16px]  text-slate-600"
                      />
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="platform"
                        className="text-[16px] font-medium font-inter text-[#0B1C30]"
                      >
                        Custom Domain
                      </label>
                      <div className="flex gap-3">
                        <div className="relative flex-1">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#424754] font-regular font-inter text-[16px]">
                            https://
                          </span>
                          <input
                            type="text"
                            placeholder="   academy.portal.edu"
                            className="h-14 w-full rounded-xl bg-[#F8FAFB] border-none pl-[70px] pr-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-medium font-inter text-[16px] "
                          />
                        </div>
                        <Button className="h-14 px-10 bg-black text-white rounded-xl font-medium font-inter text-[16px] hover:bg-black/90 transition-all">
                          Verify
                        </Button>
                      </div>
                      <p className="text-[12px] font-regular font-inter text-black flex items-center gap-1.5 ml-1">
                        <Mail className="h-3 w-3 opacity-40" />
                        CNAME records must be configured in your DNS provider.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full border-2 border-purple-600 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-purple-600" />
                      </div>
                      <h4 className="text-[20px] font-bold font-inter text-[#0B1C30]">
                        Brand Colors
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[14px] font-medium font-inter text-black"
                        >
                          Primary Brand Color
                        </label>
                        <div className="flex items-center gap-3 h-14 w-full rounded-xl bg-[#F8FAFB] px-4">
                          <div className="h-10 w-10 rounded-full bg-[#0058BE] border-4 border-white shadow-sm" />
                          <input
                            type="text"
                            placeholder="#0058BE"
                            className="flex-1 bg-transparent border-none outline-none font-bold text-slate-600"
                          />
                          <ChevronDown className="h-4 w-4 opacity-40 cursor-pointer" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[14px] font-medium font-inter text-black"
                        >
                          Secondary Color
                        </label>
                        <div className="flex items-center gap-3 h-14 w-full rounded-xl bg-[#F8FAFB] px-4">
                          <div className="h-10 w-10 rounded-full bg-[#4648D4] border-4 border-white shadow-sm" />
                          <input
                            type="text"
                            placeholder="#4648D4"
                            className="flex-1 bg-transparent border-none outline-none font-bold text-slate-600"
                          />
                          <ChevronDown className="h-4 w-4 opacity-40 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Live Theme Preview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8FAFB] rounded-[32px] p-8 border border-white shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[20px] font-bold font-inter text-[#424754]">
                    Live Theme Preview
                  </h4>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100 uppercase text-[14px] font-semibold ">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Real-time
                  </div>
                </div>

                <div className="bg-white rounded-[24px] overflow-hidden shadow-2xl shadow-blue-900/5 group scale-95 origin-top transition-all">
                  <div className="bg-[#0058BE] h-32 p-6 flex flex-col items-center justify-center gap-2 group-hover:h-36 transition-all duration-500">
                    <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <School className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[20px] font-inter font-bold text-white">
                      Your Institute Name
                    </span>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 space-y-1">
                        <span className="text-[12px] font-semibold font-inter text-[#424754] uppercase tracking-wider ">
                          Total Students
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[24px] font-inter font-bold text-[#0B1C30]">
                            1,280
                          </span>
                          <span className="text-[12px] font-semibold font-inter text-[#16A34A]">
                            +12% vs last month
                          </span>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 space-y-1">
                        <span className="text-[12px] font-semibold font-inter text-[#424754] uppercase tracking-wider ">
                          Active Courses
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[24px] font-inter font-bold text-[#0B1C30]">
                            42
                          </span>
                          <span className="text-[12px] font-semibold font-inter text-[#0058BE] flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" /> All systems
                            operational
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-[14px] text-black font-semibold font-inter">
                          Next Action
                        </span>
                        <span className="bg-[#4648D41A] text-[#4648D4] px-2 py-0.5 rounded-full text-[12px] font-semibold font-inter">
                          Enrollment
                        </span>
                      </div>
                      <Button className="w-full h-12 bg-[#0058BE] hover:bg-black text-white font-semibold font-inter text-[14px] rounded-xl transition-all shadow-lg shadow-blue-500/20">
                        Launch Institute Dashboard
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100 flex gap-4">
                  <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[14px] font-semibold  font-inter text-[#6900B3]">
                      AI Recommendation
                    </h5>
                    <p className="text-[12px] font-regular font-inter text-[#6900B3] leading-relaxed">
                      We suggest using a primary color with a contrast ratio of
                      at least 4.5:1 for accessibility compliance with standard
                      LCMS regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 px-4">
          <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-8 ">
            <div>
              <h3 className="text-[18px] font-semibold font-inter text-[#000000CC] flex items-center gap-2">
                Step: 3{" "}
                <span className="text-[#31564E] text-[20px] font-semibold font-inter">
                  Select Subscription Plan
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {/* Monthly Plan */}
              <div className="p-8 rounded-[32px] border border-slate-100 bg-white space-y-8 transition-all hover:shadow-xl hover:shadow-black/5 cursor-pointer">
                <div className="space-y-6">
                  <h4 className="text-[20px] font-medium font-inter text-slate-800">
                    Monthly Plan
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[32px] font-semibold font-inter text-slate-900">
                      ₹999
                    </span>
                    <span className="text-[14px] font-regular font-inter text-slate-800">
                      /month
                    </span>
                  </div>
                </div>
                <div className="h-[1px] bg-slate-100 w-full" />
                <ul className="space-y-4">
                  {[
                    "Full access to all English courses",
                    "AI-powered practice tutor",
                    "LSRW skill-based learning modules",
                    "Progress tracking and assessments",
                    "Community and support access",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[16px] font-regular font-inter text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quarterly Plan - Recommended */}
              <div className="relative p-1 rounded-[32px] bg-[#D4F9A6] border-2 border-[#D4F9A6] transition-all hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">
                <div className="flex justify-center py-2">
                  <span className="text-[14px] font-medium font-inter text-slate-800 flex items-center gap-2">
                    ★ Recommended ★
                  </span>
                </div>
                <div className="bg-[#F0FFDA] rounded-[28px] p-7 space-y-8 h-full">
                  <div className="flex items-start justify-between">
                    <div className="space-y-6">
                      <h4 className="text-[20px] font-medium font-inter text-slate-800">
                        Quarterly
                      </h4>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[32px] font-semibold font-inter text-slate-900">
                          ₹2,699
                        </span>
                        <span className="text-[14px] font-regular font-inter text-slate-800">
                          /3months
                        </span>
                      </div>
                    </div>
                    <div className="h-6 w-6 rounded-full border-2 border-slate-800 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-slate-800" />
                    </div>
                  </div>
                  <div className="h-[1px] bg-slate-200/50 w-full" />
                  <ul className="space-y-4">
                    {[
                      "Everything in Monthly Access",
                      "Live instructor-led classes",
                      "Personalized learning",
                      "Priority learner support",
                      "Community and support access",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[16px] font-regular font-inter text-slate-800"
                      >
                        <CheckCircle2 className="h-4 w-4 text-slate-900" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Yearly Plan */}
              <div className="p-8 rounded-[32px] border border-slate-100 bg-white space-y-8 transition-all hover:shadow-xl hover:shadow-black/5 cursor-pointer">
                <div className="space-y-6">
                  <h4 className="text-[20px] font-medium font-inter text-slate-800">
                    Yearly Plan
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[32px] font-semibold font-inter text-slate-900">
                      ₹8,999
                    </span>
                    <span className="text-[14px] font-regular font-inter text-slate-800">
                      /Year
                    </span>
                  </div>
                </div>
                <div className="h-[1px] bg-slate-100 w-full" />
                <ul className="space-y-4">
                  {[
                    "Everything in Quarterly Growth",
                    "Unlimited live classes",
                    "Advanced progress analytics",
                    "Certificate of completion",
                    "Best value savings",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[16px] font-regular font-inter text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
            {/* Left Column: Security Settings */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-12">
                <div>
                  <h3 className="text-[18px] font-semibold font-inter text-slate-800 flex items-center gap-2">
                    Step: 4{" "}
                    <span className="text-[#31564E] font-semibold font-inter text-[20px]">
                      Security Settings
                    </span>
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h4 className="text-[20px] font-bold font-inter text-slate-800">
                      Security & Usage Limits
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label
                        htmlFor="platform"
                        className="text-[16px] font-semibold font-inter text-black"
                      >
                        Max Students Limit
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="500"
                          className="h-14 w-full rounded-2xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-medium font-inter text-[16px] text-slate-800"
                        />
                        <Users className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      </div>
                      <p className="text-[12px] text-[#424754E5] font-medium font-inter">
                        The maximum number of concurrent student enrollments
                        allowed.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="platform"
                        className="text-[16px] font-semibold font-inter text-black"
                      >
                        Max Tutors Limit
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="25"
                          className="h-14 w-full rounded-2xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-medium font-inter text-[16px] text-slate-800"
                        />
                        <GraduationCap className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      </div>
                      <p className="text-[12px] text-[#424754E5] font-medium font-inter">
                        Total active tutor seats available for this institute.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div
                      onClick={() =>
                        setIsIPRestrictionEnabled(!isIPRestrictionEnabled)
                      }
                      className={cn(
                        "p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group",
                        isIPRestrictionEnabled
                          ? "bg-blue-50/50 border-blue-100 shadow-md"
                          : "bg-[#F8FAFB]/50 border-slate-50 hover:bg-white hover:shadow-lg"
                      )}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-[16px] font-semibold font-inter transition-colors",
                              isIPRestrictionEnabled
                                ? "text-[#2563EB]"
                                : "text-slate-800"
                            )}
                          >
                            Enable IP Restriction Mode
                          </span>
                          <span className="text-[10px] font-semibold font-inter uppercase  text-[#0058BE] bg-[#E8F0FF] px-2 py-0.5 rounded-full border border-[#0058BE]">
                            Security
                          </span>
                        </div>
                        <p className="text-[14px] text-[#424754] font-regular font-inter max-w-[400px]">
                          Restrict dashboard access to white-listed IP addresses
                          only. Recommended for high-security environments.
                        </p>
                      </div>
                      <div
                        className={cn(
                          "h-7 w-12 rounded-full relative p-1 transition-all duration-300",
                          isIPRestrictionEnabled
                            ? "bg-[#2563EB]"
                            : "bg-slate-200"
                        )}
                      >
                        <div
                          className={cn(
                            "h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 transform",
                            isIPRestrictionEnabled
                              ? "translate-x-5"
                              : "translate-x-0"
                          )}
                        />
                      </div>
                    </div>

                    <div
                      onClick={() =>
                        setIsAIAutoDisableEnabled(!isAIAutoDisableEnabled)
                      }
                      className={cn(
                        "p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group",
                        isAIAutoDisableEnabled
                          ? "bg-purple-50/30 border-purple-100 shadow-md"
                          : "bg-[#F8FAFB]/50 border-slate-50 hover:bg-white hover:shadow-lg"
                      )}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-[16px] font-semibold font-inter transition-colors",
                              isAIAutoDisableEnabled
                                ? "text-[#0B1C30]"
                                : "text-slate-800"
                            )}
                          >
                            Enable AI Auto Disable on Limit
                          </span>
                          <span className="text-[10px] font-semibold font-inter uppercase  text-[#8127CF] bg-[#8127CF1A] px-2 py-0.5 rounded-full border border-[#0058BE]">
                            AI Core
                          </span>
                        </div>
                        <p className="text-[14px] text-[#424754] font-regular font-inter max-w-[400px]">
                          Automatically pause all AI processing if the monthly
                          token budget is exceeded to prevent overages.
                        </p>
                      </div>
                      <div
                        className={cn(
                          "h-7 w-12 rounded-full relative p-1 transition-all duration-300",
                          isAIAutoDisableEnabled
                            ? "bg-purple-600"
                            : "bg-slate-200"
                        )}
                      >
                        <div
                          className={cn(
                            "h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 transform",
                            isAIAutoDisableEnabled
                              ? "translate-x-5"
                              : "translate-x-0"
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div className="space-y-3">
                      <label
                        htmlFor="platform"
                        className="text-[16px] font-inter font-semibold text-black"
                      >
                        AI Token Monthly Limit
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="1,000,000"
                          className="h-14 w-full rounded-2xl bg-[#F8FAFB] border-none px-6 outline-none focus:ring-2 focus:ring-[#2563EB]/10 font-bold text-[16px] font-manrope text-[#0B1C30]"
                        />
                        <Shield className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="platform"
                          className="text-[16px] font-inter font-semibold text-black"
                        >
                          Alert Threshold (80%)
                        </label>
                        <span className="text-[16px] font-bold font-manrope text-[#0058BE]">
                          80%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0058BE] w-[80%]" />
                      </div>
                      <p className="text-[12px] text-[#424754E5] font-medium font-inter">
                        Send admin notification when usage hits this percent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Summaries and Tips */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F8FAFB] rounded-[32px] p-8 border border-white shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Info className="h-5 w-5 text-[#2563EB]" />
                  <h4 className="text-[20px] font-bold font-inter text-[#0B1C30]">
                    Configuration Summary
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl shadow-sm space-y-1">
                    <span className="text-[14px] font-medium font-inter text-[#424754] ">
                      Institute Type
                    </span>
                    <p className="text-[16px] font-semibold font-inter text-[#0B1C30]">
                      Language Learning Academy
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm space-y-1">
                    <span className="text-[14px] font-medium font-inter text-[#424754] ">
                      Region
                    </span>
                    <p className="text-[16px] font-semibold font-inter text-[#0B1C30]">
                      North America (East)
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
                    <span className="text-[14px] font-medium font-inter text-[#424754] ">
                      Assigned Tiers
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#E1E0FF] text-[12px] font-semibold font-inter  text-[#2F2EBE]">
                        Premium AI
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F0DBFF] text-[12px] font-semibold font-inter  text-[#6900B3]">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Did You Know? - Streamlined Implementation using Overlay+Shadow asset */}
              <div className="relative rounded-[32px] overflow-hidden h-[346px]">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={cybersecrityImg}
                    alt="Security Architecture"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>

              {/* Pro Tip */}
              <div className="p-6 rounded-[24px] bg-[#FFF5F5] border border-red-50 flex gap-4">
                <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-[14px] font-semibold font-inter text-[#93000A]">
                    Pro Tip
                  </h5>
                  <p className="text-[14px] font-regular font-inter text-[#93000ACC] leading-relaxed">
                    Lower the AI Token Limit if you are setting up a demo or
                    pilot institute to control costs during the trial phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Billing & Review */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[20px] p-10 border border-slate-100 shadow-sm space-y-12">
                <div className="space-y-12">
                  <h3 className="text-[18px] font-semibold text-slate-800 font-inter flex items-center gap-2">
                    Step: 5{" "}
                    <span className="text-[#31564E] text-[20px] font-semibold font-inter">
                      Billing
                    </span>
                  </h3>

                  {/* Billing Configuration */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Wallet className="h-4 w-4" />
                      </div>
                      <h4 className="text-[20px] font-manrope font-bold font-inter text-[#0B1C30] tracking-tight">
                        Billing Configuration
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="md:col-span-2 space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[16px] font-inter font-semibold text-black"
                        >
                          Billing Contact Email
                        </label>
                        <input
                          type="email"
                          placeholder="finance@institute.edu"
                          className="h-14 w-full rounded-2xl bg-[#F1F6FF] border-none px-6 outline-none focus:ring-2 focus:ring-blue-500/10 font-inter font-regular text-[16px] text-slate-600"
                        />
                      </div>

                      <div className="space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[16px] font-semibold font-inter text-slate-800"
                        >
                          Payment Method
                        </label>
                        <div className="h-14 w-full rounded-2xl bg-[#EFF4FF] border-2 border-blue-600 px-6 flex items-center justify-between group cursor-pointer shadow-sm shadow-blue-50">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-[16px] font-inter text-[#0B1C30] ">
                              Razorpay
                            </span>
                          </div>
                          <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                            <CheckCircle2 className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[16px] font-semibold font-inter text-slate-800"
                        >
                          Plan Cost (Annual)
                        </label>
                        <div className="relative">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#424754] font-regular font-inter text-[16px]">
                            $
                          </span>
                          <input
                            type="text"
                            disabled
                            value="12,450.00"
                            className="h-14 w-full rounded-2xl bg-[#F1F6FF] border-none pl-12 pr-6 outline-none font-semibold font-inter text-[16px] text-[#0B1C30]"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[16px] font-semibold font-inter text-slate-800"
                        >
                          Subscription Start Date
                        </label>
                        <input
                          type="text"
                          placeholder="06/01/2024"
                          className="h-14 w-full rounded-2xl bg-[#EFF4FF] border-none px-6 outline-none  font-inter font-regular text-[16px] text-[#0B1C30]"
                        />
                      </div>

                      <div className="space-y-3">
                        <label
                          htmlFor="platform"
                          className="text-[16px] font-semibold font-inter text-slate-800"
                        >
                          Renewal Cycle
                        </label>
                        <div className="relative">
                          <select className="h-14 w-full appearance-none rounded-2xl bg-[#EFF4FF] border-none px-6 outline-none  font-inter text-[16px] text-[#0B1C30]">
                            <option>Annually (Best Value)</option>
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Review Summary */}
                  <div className="space-y-8 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                        <FileText className="h-4 w-4" />
                      </div>
                      <h4 className="text-[20px] font-manrope font-inter font-bold text-[#0B1C30] tracking-tight">
                        Final Review Summary
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="p-7 rounded-2xl bg-[#F1F6FF] border border-blue-50/50 space-y-1.5 transition-all hover:bg-white hover:shadow-lg">
                          <span className="text-[14px] font-regular font-inter  text-[#424754]">
                            Institute Name
                          </span>
                          <p className="text-[16px] font-bold font-manrope font-inter text-[#0B1C30]">
                            Global Language Academy
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-7 rounded-2xl bg-[#F1F6FF] border border-blue-50/50 space-y-1.5 transition-all hover:bg-white hover:shadow-lg">
                          <span className="text-[14px] font-regular font-inter text-[#424754]">
                            Assigned Plan
                          </span>
                          <p className="text-[16px] font-manrope font-bold font-inter text-[#0058BE]">
                            Enterprise AI Plus
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-4">
                        <div className="p-1 px-1.5 rounded-2xl border-2 border-blue-200 bg-white">
                          <div className="p-5 space-y-4">
                            <span className="text-[14px] font-inter font-regular text-[#424754]">
                              Security Limits
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {[
                                "SSO Enabled",
                                "Max 5,000 Users",
                                "Regional Data Residency (EU)",
                              ].map((tag) => (
                                <span
                                  key={tag}
                                  className="px-4 py-2 rounded-xl bg-[#F1F6FF] text-[12px] font-medium font-inter text-[#0B1C30] border border-slate-100"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2 p-8 rounded-[24px] bg-[#F1F6FF] border border-blue-50/30">
                        <div className="flex flex-col gap-2">
                          <span className="text-[14px] font-regular font-inter  text-[#424754]">
                            Billing Details
                          </span>
                          <p className="text-[16px] font-medium font-inter text-[#0B1C30] leading-relaxed">
                            Renews automatically on{" "}
                            <span className="text-slate-900 underline decoration-blue-500/30 decoration-2 underline-offset-4">
                              June 01, 2025
                            </span>{" "}
                            via <span className="text-[#0B1C30]">Razorpay</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Invoice & Help */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#31564E] rounded-[20px] p-10 text-white space-y-10 relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <h4 className="text-[18px] font-bold font-inter text-[#EAF1FF]">
                    Invoice Summary
                  </h4>
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Receipt className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[15px]">
                      <span className="text-[#EAF1FF] font-inter font-regular text-[16px]">
                        Enterprise License (Annual)
                      </span>
                      <span className="font-inter text-[#EAF1FF] text-[14px] font-medium">
                        $12,000.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[15px]">
                      <span className="text-[#EAF1FF] font-inter font-regular text-[16px]">
                        AI Token Pack (50M)
                      </span>
                      <span className="font-inter text-[#EAF1FF] text-[14px] font-medium">
                        $450.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#EAF1FF] font-inter font-regular text-[16px]">
                        Setup & Migration Fee
                      </span>
                      <span className="text-[#C0C1FF] font-inter font-medium text-[14px] bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-widest">
                        Waived
                      </span>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 ">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[18px] text-[#EAF1FF] font-inter font-regular ">
                        Total Due Now
                      </span>
                      <p className="text-[24px] font-regular font-inter text-[#D8E2FF]">
                        $12,450.00
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
                    <div className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0 border border-emerald-400/20 mt-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      </div>
                      <p className="text-[12px] leading-relaxed text-[#FFFFFF] font-regular font-inter ">
                        By clicking "Create Institute", you agree to the{" "}
                        <span className="text-[#FFFFFF] font-regular font-inter underline decoration-emerald-400/50 underline-offset-4 cursor-pointer hover:text-emerald-400 transition-colors">
                          Master Service Agreement
                        </span>{" "}
                        and authorize the initial charge to the provided payment
                        method.
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    className="w-full h-16 bg-black hover:bg-slate-900 text-white rounded-[24px] font-medium font-inter text-[16px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Create Institute
                  </Button>
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-[#EBF7FF] rounded-[20px] p-10 space-y-8 border border-blue-50 shadow-sm group cursor-pointer hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                <div className="space-y-3">
                  <h4 className="text-[16px] font-bold font-manrope font-inter text-[#0B1C30]">
                    Need help with billing?
                  </h4>
                  <p className="text-[14px] font-regular font-inter text-[#424754] leading-relaxed">
                    Our dedicated success managers are available 24/7 for
                    Enterprise accounts.
                  </p>
                </div>
                <button className="flex items-center gap-2.5 text-[#0058BE] font-inter font-semibold text-[14px] group-hover:gap-4 transition-all duration-300">
                  Contact Support
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddInstitute;
