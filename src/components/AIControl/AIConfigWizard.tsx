"use client";

import {
  ArrowLeft,
  ChevronDown,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AIConfigWizardProps {
  onBack: () => void;
  onSuccess?: () => void;
}

const AIConfigWizard = ({ onBack, onSuccess }: AIConfigWizardProps) => {
  const [step, setStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState("gpt4o");
  const [isAutoScaling, setIsAutoScaling] = useState(true);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else if (onSuccess) onSuccess();
    else onBack();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
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
                      <h2 className="text-2xl font-bold text-foreground">
                        Configure AI Module
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Set up a new AI-powered feature for the platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="h-11 rounded-xl px-6 border-border/50 text-foreground bg-white hover:bg-slate-50 transition-all font-medium"
                    >
                      Go Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="h-11 rounded-xl px-8 bg-black hover:bg-black/90 text-white font-medium shadow-md shadow-black/10 transition-all"
                    >
                      {step === 4 ? "Deploy Module" : "Next Step"}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-[#31564E]">
                    Step: {step}
                    <span className="font-semibold text-foreground ml-2">
                      {step === 1 && "Basic Configuration - Module Details"}
                      {step === 2 && "Model Selection & Parameters"}
                      {step === 3 && "Usage Limits & Budgeting"}
                      {step === 4 && "Review & Deployment"}
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
        <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="moduleDisplayName"
                className="text-sm font-semibold text-foreground"
              >
                Module Display Name <span className="text-red-500">*</span>
              </label>
              <input
                id="moduleDisplayName"
                type="text"
                placeholder="e.g. Real-time Fluency Analyzer"
                className="h-12 w-full rounded-xl bg-[#F1F1F1] px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#31564E]/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="integrationPoint"
                className="text-sm font-semibold text-foreground"
              >
                Integration Point <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  id="integrationPoint"
                  className="h-12 w-full appearance-none rounded-xl bg-[#F1F1F1] px-4 text-sm outline-none transition-all cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#31564E]/10"
                >
                  <option value="">Select where this AI will be used</option>
                  <option value="student-practice">
                    Student Practice Interface
                  </option>
                  <option value="tutor-feedback">Tutor Feedback Tools</option>
                  <option value="admin-cms">CMS & Course Generation</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="modulePurpose"
                className="text-sm font-semibold text-foreground"
              >
                Module Purpose <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  id="modulePurpose"
                  className="h-12 w-full appearance-none rounded-xl bg-[#F1F1F1] px-4 text-sm outline-none transition-all cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#31564E]/10"
                >
                  <option value="speaking">Speaking Assessment</option>
                  <option value="writing">Writing Correction</option>
                  <option value="translation">Real-time Translation</option>
                  <option value="recommendation">Content Recommendation</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold text-foreground">
                API Key Configuration
              </span>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100 flex items-center gap-4">
                <ShieldCheck className="h-6 w-6 text-amber-600" />
                <p className="text-sm text-amber-800 font-medium">
                  This module will use the{" "}
                  <strong>Global Platform API Key</strong> by default. You can
                  override this in Step 2 if you want to use a specific provider
                  key.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10">
                <h4 className="text-lg font-bold text-foreground mb-8">
                  Select AI Engine
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      id: "gpt4o",
                      name: "GPT-4o (Omni)",
                      provider: "OpenAI",
                      desc: "Multimodal powerhouse for real-time speech and high-fidelity text.",
                      cost: "$$$",
                      icon: Zap,
                      color: "text-blue-500 bg-blue-50",
                    },
                    {
                      id: "claude3",
                      name: "Claude 3.5 Sonnet",
                      provider: "Anthropic",
                      desc: "Exceptional for logical reasoning and nuanced writing feedback.",
                      cost: "$$",
                      icon: Sparkles,
                      color: "text-purple-500 bg-purple-50",
                    },
                    {
                      id: "gpt35",
                      name: "GPT-3.5 Turbo",
                      provider: "OpenAI",
                      desc: "Fast, daily-use model for basic assessments and simple tasks.",
                      cost: "$",
                      icon: Cpu,
                      color: "text-emerald-500 bg-emerald-50",
                    },
                  ].map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setSelectedModel(m.id)}
                      className={cn(
                        "p-6 rounded-2xl border-2 transition-all cursor-pointer group flex items-start gap-4",
                        selectedModel === m.id
                          ? "border-[#31564E] bg-[#F7FFFA]"
                          : "border-slate-100 bg-white hover:border-slate-200"
                      )}
                    >
                      <div
                        className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                          m.color
                        )}
                      >
                        <m.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-bold text-slate-900">{m.name}</h5>
                          <span className="text-xs font-black text-slate-400 opacity-60 uppercase">
                            {m.cost} Cost Tier
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {m.desc}
                        </p>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mt-2 inline-block">
                          Provider: {m.provider}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "h-6 w-6 rounded-full border-2 flex items-center justify-center mt-1",
                          selectedModel === m.id
                            ? "border-[#31564E] bg-[#31564E]"
                            : "border-slate-200"
                        )}
                      >
                        {selectedModel === m.id && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6">
                <h4 className="text-md font-bold text-foreground mb-4">
                  Engine Parameters
                </h4>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="temperature"
                        className="text-[13px] font-bold text-slate-600"
                      >
                        Temperature
                      </label>
                      <span className="text-[13px] font-black text-[#31564E]">
                        0.7
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full relative group">
                      <input
                        id="temperature"
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.7"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="h-full bg-[#31564E] w-[70%] rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 bg-white border-2 border-[#31564E] rounded-full shadow-sm" />
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Controls randomness: 0.0 is deterministic, 1.0 is
                      creative.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="maxTokens"
                        className="text-[13px] font-bold text-slate-600"
                      >
                        Max Tokens
                      </label>
                      <span className="text-[13px] font-black text-[#31564E]">
                        2,048
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full relative">
                      <input
                        id="maxTokens"
                        type="range"
                        min="256"
                        max="4096"
                        step="256"
                        defaultValue="2048"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="h-full bg-[#31564E] w-[40%] rounded-full relative" />
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Maximum length of AI response per request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] bg-[#C2CDCA] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-[#31564E]">
                  <Lightbulb className="h-12 w-12" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-4 w-4 text-[#31564E]" />
                  <h4 className="text-sm font-bold text-[#31564E]">
                    Expert Recommendation
                  </h4>
                </div>
                <p className="text-xs text-[#31564E] font-medium leading-relaxed">
                  For <strong>Speaking Assessments</strong>, GPT-4o offers the
                  best latency-to-quality ratio. Stick with Temperature 0.3 for
                  consistent evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10">
            <h4 className="text-lg font-bold text-foreground mb-8">
              Consumption & Budget Controls
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="monthlyBudget"
                    className="text-sm font-semibold text-foreground"
                  >
                    Monthly Token Budget
                  </label>
                  <div className="relative">
                    <input
                      id="monthlyBudget"
                      type="text"
                      defaultValue="10,000,000"
                      className="h-12 w-full rounded-xl bg-[#F1F1F1] pl-4 pr-16 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#31564E]/10"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      Tokens
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="thresholdAlert"
                    className="text-sm font-semibold text-foreground"
                  >
                    Threshold Alert (%)
                  </label>
                  <div className="relative">
                    <input
                      id="thresholdAlert"
                      type="text"
                      defaultValue="85"
                      className="h-12 w-full rounded-xl bg-[#F1F1F1] pl-4 pr-16 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#31564E]/10"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      %
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    An email notification will be sent to admins when usage hits
                    this mark.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#31564E]/30 border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-sm font-bold text-slate-800">
                      Auto-Scaling Protection
                    </h5>
                    <div
                      onClick={() => setIsAutoScaling(!isAutoScaling)}
                      className={cn(
                        "h-6 w-11 rounded-full relative p-1 cursor-pointer transition-all duration-300",
                        isAutoScaling ? "bg-[#1E293B]" : "bg-slate-300"
                      )}
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-white absolute shadow-sm transition-all duration-300",
                          isAutoScaling ? "right-1" : "left-1"
                        )}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    If enabled, the system will automatically throttle
                    non-critical requests if usage accelerates 300% above moving
                    average.
                  </p>
                  <div className="bg-white/50 px-3 py-2 rounded-lg text-[11px] font-bold text-[#31564E]">
                    STATUS: PROTECTIVE BUFFER ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground">Module Identity</h4>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">
                  Speech Analyzer Pro
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  Integration: Student Interface
                </p>
                <p className="text-sm text-slate-500">
                  Purpose: Speaking Assessment
                </p>
              </div>
            </div>

            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground">AI Intelligence</h4>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">
                  GPT-4o (Omni)
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  Temperature: 0.7
                </p>
                <p className="text-sm text-slate-500">Max Tokens: 2,048</p>
              </div>
            </div>

            <div className="rounded-[24px] bg-white shadow-sm border border-border/50 p-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground">Guardrails</h4>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">
                  10M Token Limit
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  Alert: 85% Threshold
                </p>
                <p className="text-sm text-slate-500">Auto-Scaling: Enabled</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#C2CDCA]/50 border border-border/30 p-8 flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
              <Zap className="h-8 w-8 text-[#31564E] fill-[#31564E] animate-pulse" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">
              Ready for Deployment
            </h4>
            <p className="text-slate-700 max-w-lg mb-8">
              Confirming deployment will instantiate the AI service and create
              the necessary API endpoints within your production environment.
            </p>
            <div className="flex items-center gap-4 bg-white/50 p-2 rounded-2xl px-6 border border-white/50">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[12px] font-black text-slate-800 uppercase tracking-widest">
                System Check: ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConfigWizard;
