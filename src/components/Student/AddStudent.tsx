"use client";

import { ArrowLeft, ChevronDown, Lightbulb } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddStudentProps {
  onBack: () => void;
  onSuccess?: () => void;
}

const AddStudent = ({ onBack, onSuccess }: AddStudentProps) => {
  const [step, setStep] = React.useState(1);
  const [selectedPlan, setSelectedPlan] = React.useState("Quarterly");

  const [isAutoGenerate, setIsAutoGenerate] = React.useState(true);

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep(5);
  };

  const handleBack = () => {
    if (step === 5) onBack();
    else if (step === 4) setStep(3);
    else if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
    else onBack();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Section - Fixed/Sticky */}
      {step < 5 && (
        <>
          <div className="fixed top-[80px] left-0 right-0 lg:left-0 z-20 bg-[#F7FFFA]/95 backdrop-blur-md border-b border-border/10">
            <div className="px-4 md:px-8 lg:px-12 py-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleBack}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-slate-50 transition-all shadow-sm"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div className="flex flex-col">
                      <h2 className="text-[20px] font-inter font-semibold text-foreground">
                        Add New Student
                      </h2>
                      <p className="text-[14px] font-inter text-muted-foreground">
                        Create a new direct student account manually.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="text-[16px] h-11 rounded-xl px-6 border-border/50  text-[#31564E] font-inter bg-white hover:bg-slate-50 transition-all font-medium"
                    >
                      Go Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="text-[14px]  font-inter h-11 rounded-xl px-8 bg-black hover:bg-black/90 text-white font-medium shadow-md shadow-black/10 transition-all"
                    >
                      {step === 1
                        ? "Next: Select Plan"
                        : step === 2
                          ? "Next: Configure AI"
                          : step === 3
                            ? "Next: Review & Confirm"
                            : "Create Student Account"}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center">
                  <h3 className="text-[18px] font-inter font-semibold text-[#31564E] w-full">
                    Step: {step}
                    <span className="font-semibold  ml-2 text-[20px] text-[#31564E]">
                      {step === 1 && "Basic Details - Student Details"}
                      {step === 2 && "Select Subscription Plan"}
                      {step === 3 && "AI Usage Configuration"}
                      {step === 4 && "Review & Confirm"}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Spacer for Fixed Header */}
          <div className="h-[140px]" />
        </>
      )}

      {step === 1 && (
        <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-8 pt-26">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 ">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="studentName"
                className="text-[16px] font-inter font-medium text-foreground "
              >
                Student Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="studentName"
                type="text"
                placeholder="e.g. John Doe"
                className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-[14px] outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="emailAddress"
                className="text-[16px] font-inter font-medium text-foreground"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="e.g. john.doe@example.com"
                className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-[14px] outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-[16px] font-inter font-medium text-foreground"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="e.g. (555) 000-0000"
                className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-[14px] outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-[16px] font-inter font-medium text-foreground"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  id="country"
                  className="h-12 w-full appearance-none rounded-xl bg-[#F1F1F1] px-4 text-[14px] outline-none transition-all cursor-pointer focus:bg-white focus:ring-2 focus:ring-primary/10 text-muted-foreground focus:text-foreground"
                >
                  <option value="">Select a country</option>
                  <option value="in">India</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
                <ChevronDown className=" absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="preferredLanguage"
                className="text-[16px] font-inter font-medium text-foreground"
              >
                Preferred Language <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  id="preferredLanguage"
                  className="h-12 w-full appearance-none rounded-xl bg-[#F1F1F1] px-4 text-[14px] outline-none transition-all cursor-pointer focus:bg-white focus:ring-2 focus:ring-primary/10 text-foreground"
                >
                  <option value="en">English (US)</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Monthly Plan */}
              <PlanCard
                title="Monthly Plan"
                price="₹999"
                period="/month"
                features={[
                  "Full access to all English courses",
                  "AI-powered practice tutor",
                  "LSRW skill-based learning modules",
                  "Progress tracking and assessments",
                  "Community and support access",
                ]}
                isSelected={selectedPlan === "Monthly"}
                onClick={() => setSelectedPlan("Monthly")}
              />

              {/* Quarterly Plan (Recommended) */}
              <PlanCard
                title="Quarterly"
                price="₹2,699"
                period="/3months"
                recommended
                features={[
                  "Everything in Monthly Access",
                  "Live instructor-led classes",
                  "Personalized learning",
                  "Priority learner support",
                  "Community and support access",
                ]}
                isSelected={selectedPlan === "Quarterly"}
                onClick={() => setSelectedPlan("Quarterly")}
              />

              {/* Yearly Plan */}
              <PlanCard
                title="Yearly Plan"
                price="₹8,999"
                period="/Year"
                features={[
                  "Everything in Quarterly Growth",
                  "Unlimited live classes",
                  "Advanced progress analytics",
                  "Certificate of completion",
                  "Best value savings",
                ]}
                isSelected={selectedPlan === "Yearly"}
                onClick={() => setSelectedPlan("Yearly")}
              />
            </div>

            <div>
              <div className="mt-12 space-y-8">
                <div className="flex items-center justify-between border-b border-border/10 pb-4">
                  <h4 className="text-[20px] font-semibold font-inter text-foreground">
                    Plan Validity
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="startDate"
                      className="text-[16px] font-medium font-inter text-foreground"
                    >
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="startDate"
                        type="text"
                        defaultValue="14/03/2026"
                        className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-[14px] font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-5 w-5 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="expiryDate"
                      className="text-[16px] font-medium font-inter text-foreground"
                    >
                      Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="expiryDate"
                        type="text"
                        defaultValue="14/06/2026"
                        className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-[14px] font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-5 w-5 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="durationMonths"
                      className="text-[16px] font-medium font-inter text-foreground"
                    >
                      Duration (Months) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="durationMonths"
                        type="text"
                        defaultValue="03 Months"
                        className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-[14px] font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-5 w-5 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-[#31564E]/30 border border-slate-200 p-4 flex items-center gap-3 text-sm text-black">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#31564E] text-white font-bold text-[16px] font-inter">
                    i
                  </div>
                  The student will have active access for exactly 365 days based
                  on the current selection.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Configuration */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10 pt-18">
                <div className="mb-8">
                  <h4 className="text-[20px] font-semibold font-inter text-foreground">
                    Configuration
                  </h4>
                </div>

                <div className="space-y-4">
                  {/* Default AI Limit */}
                  <div className="relative p-6 rounded-2xl border-2 border-[#31564E]/30 bg-white group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="h-5 w-5 rounded-full border-2 border-[#31564E] bg-[#31564E] flex items-center justify-center mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#BEF264]" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-[18px] font-inter text-foreground">
                          Default AI Limit
                        </span>
                        <p className="text-[14px] font-inter text-muted-foreground leading-relaxed">
                          Uses the default token limit associated with the
                          selected subscription plan (e.g., 500,000
                          tokens/month).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Custom AI Limit */}
                  <div className="relative p-6 rounded-2xl border-2 border-slate-100 bg-white hover:border-slate-200 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="h-5 w-5 rounded-full border-2 border-slate-300 mt-1" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-[18px] font-inter text-foreground">
                          Custom AI Limit
                        </span>
                        <p className="text-[14px] font-inter text-muted-foreground leading-relaxed">
                          Manually override the plan default for this specific
                          student.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              <div className="rounded-[20px] bg-white shadow-sm border border-border/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-400 text-slate-500 font-bold text-[10px] mt-2">
                    i
                  </div>
                  <h4 className="text-[20px] font-semibold font-inter text-foreground">
                    Understanding Limits
                  </h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[16px] font-inter text-muted-foreground leading-relaxed">
                    AI tokens control how much AI practice (speaking
                    corrections, writing feedback) the student can consume each
                    month.
                  </p>
                  <p className="text-[16px] font-inter text-black leading-relaxed">
                    Setting a limit helps manage platform resources and prevents
                    abnormal usage from single accounts.
                  </p>
                </div>
              </div>

              <div className="rounded-[20px] bg-[#C2CDCA] border-0 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-[#31564E]">
                  <Lightbulb className="h-16 w-16 rotate-12" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-[#31564E]" />
                  <h4 className="text-[20px] font-semibold font-inter text-[#0F172A]">
                    Token Usage Tip
                  </h4>
                </div>
                <p className="text-[16px] font-inter  font-medium leading-relaxed">
                  "An average student uses approximately 120,000 tokens per
                  month for daily speaking practice. We recommend a 150,000 -
                  200,000 buffer for active learners."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-14 ">
            {/* Student Info Summary */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-8 relative ">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[20px] text-foreground">
                    Student Info
                  </h4>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-[16px] font-medium text-[#31564E] border-b border-[#31564E]/30 hover:border-[#31564E] transition-all"
                >
                  Edit Info
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] font-semibold text-foreground">
                    Alex Johnson
                  </span>
                  <span className="text-[14px] text-slate-500">
                    alex.j@example.com
                  </span>
                  <span className="text-[14px] text-slate-500">
                    +1 555-0123
                  </span>
                </div>
              </div>
            </div>

            {/* Subscription Summary */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[20px] text-foreground">
                    Subscription
                  </h4>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-[16px] font-medium text-[#31564E] border-b border-[#31564E]/30 hover:border-[#31564E] transition-all"
                >
                  Edit Info
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] font-semibold text-foreground">
                    Pro Learning
                  </span>
                  <span className="text-[14px] text-slate-500">
                    Valid until Oct 27, 2024
                  </span>
                  <span className="text-[14px] text-slate-500">
                    Quaterly Billing Cycle
                  </span>
                </div>
              </div>
            </div>

            {/* AI Configuration Summary */}
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-[20px] text-foreground">
                    AI Configuration
                  </h4>
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="text-[16px] font-medium text-[#31564E] border-b border-[#31564E]/30 hover:border-[#31564E] transition-all"
                >
                  Edit Info
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] font-semibold text-foreground">
                    750k Tokens
                  </span>
                  <span className="text-[14px] text-slate-500">
                    85% Usage Alert Threshold
                  </span>
                  <span className="text-[14px] text-slate-500">
                    GPT-4 Access Enabled
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Credential Generation Section */}
          <div className="rounded-[24px] bg-[#C2CDCA]/50 border border-border/30 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded border-2 border-slate-600 flex items-center justify-center text-slate-700">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-[18px] font-semibold text-foreground">
                    Credential Generation
                  </h4>
                </div>
                <p className="text-[14px] text-black">
                  System will automatically create a secure student ID and
                  temporary password for the initial login.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-[#C2CDCA] p-3 rounded-2xl border border-border/30 px-6">
                <span className="text-[16px] font-inter font-semibold text-foreground whitespace-nowrap">
                  Automatic Generation
                </span>
                <div
                  onClick={() => setIsAutoGenerate(!isAutoGenerate)}
                  className={cn(
                    "h-6 w-11 rounded-full relative p-1 cursor-pointer transition-all duration-300",
                    isAutoGenerate ? "bg-slate-600" : "bg-slate-400"
                  )}
                >
                  <div
                    className={cn(
                      "h-4 w-4 rounded-full bg-white absolute shadow-sm transition-all duration-300",
                      isAutoGenerate ? "right-1" : "left-1"
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#31564E]/20 p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[14px] md:text-[16px] text-slate-800 font-medium leading-relaxed">
  {/* Icon Container */}
  <div className="flex-shrink-0 text-[16px] opacity-60 bg-white/20 w-8 h-8 flex items-center justify-center rounded-full">
    @
  </div>
  
  {/* Text Content */}
  <div className="flex-1">
    Credentials will be
    <span className="font-semibold underline mx-1 inline-block sm:inline">
      automatically emailed
    </span>
    to Alex Johnson (alex.j@example.com) immediately after account activation.
  </div>
</div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12">
          <div className="mb-8 p-4 rounded-full bg-green-50 shadow-inner">
            <svg
              className="h-20 w-20 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-[24px] font-semibold text-foreground mb-6">
            Student Account Created Successfully
          </h2>

          <div className="space-y-4 mb-12">
            <p className="text-[16px] leading-relaxed">
              The account for{" "}
              <span className="font-regular text-foreground">Alex Johnson</span>
            </p>
            <p className="text-[#0D7FF2] font-medium text-[16px]">
              (alex.j@example.com){" "}
              <span className="text-slate-600 font-normal text-[16px]">
                has been finalized. Login
              </span>
            </p>
            <p className="text-slate-600 text-[16px] leading-relaxed">
              credentials have been automatically generated and sent to the
              student's email.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Button
              variant="outline"
              onClick={onBack}
              className="h-14 rounded-2xl px-10 border-slate-300 text-[#31564E]  text-[16px] hover:bg-slate-50 transition-all min-w-[240px]"
            >
              Go to Student List
            </Button>
            <Button
              onClick={onSuccess || onBack}
              className="h-14 rounded-2xl px-10 bg-black text-white  text-[16px] hover:bg-black/90 shadow-xl shadow-black/20 transition-all min-w-[240px]"
            >
              View Student Profile
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  isSelected?: boolean;
  onClick: () => void;
}

const PlanCard = ({
  title,
  price,
  period,
  features,
  recommended,
  isSelected,
  onClick,
}: PlanCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex flex-col transition-all cursor-pointer rounded-[24px] overflow-hidden border-2",
        isSelected
          ? recommended
            ? "border-[#BEF264] bg-[#F4FFF0]"
            : "border-[#31564E] bg-white"
          : "border-slate-100 bg-white hover:border-slate-200"
      )}
    >
      {recommended && (
        <div className="bg-[#BEF264] py-1.5 flex items-center justify-center gap-1.5 px-4">
          <span className="text-[14px]">★</span>
          <span className="text-[14px] font-medium font-inter text-black">
            Recommended
          </span>
          <span className="text-[14px]">★</span>
        </div>
      )}

      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h4 className="text-[20px] font-medium font-inter text-foreground">
              {title}
            </h4>
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] font-semibold font-inter text-foreground">
                {price}
              </span>
              <span className="text-[14px] font-regular font-inter text-black">
                {period}
              </span>
            </div>
          </div>
          <div
            className={cn(
              "h-6 w-6 rounded-full border flex items-center justify-center transition-all",
              isSelected
                ? "border-[#31564E] bg-[#31564E]"
                : "border-slate-200 bg-white"
            )}
          >
            {isSelected && (
              <div className="h-2.5 w-2.5 rounded-full bg-[#BEF264]" />
            )}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-[16px] font-regular font-inter text-slate-700 leading-relaxed"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300">
                <svg
                  className="h-3 w-3 text-slate-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddStudent;
