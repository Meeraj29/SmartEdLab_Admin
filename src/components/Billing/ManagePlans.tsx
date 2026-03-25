"use client";

import {
  ArrowLeft,
  CheckCircle2,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ManagePlansProps {
  onBack: () => void;
  onEditPlan: (planName: string) => void;
}

const b2cPlans = [
  {
    id: 1,
    name: "Monthly Plan",
    price: "₹999",
    period: "/month",
    features: [
      "Full access to all English courses",
      "AI-powered practice tutor",
      "LSRW skill-based learning modules",
      "Progress tracking and assessments",
      "Community and support access",
    ],
  },
  {
    id: 2,
    name: "Quarterly",
    price: "₹2,699",
    period: "/3months",
    features: [
      "Everything in Monthly Access",
      "Live instructor-led classes",
      "Personalized learning",
      "Priority learner support",
      "Community and support access",
    ],
  },
  {
    id: 3,
    name: "Yearly Plan",
    price: "₹8,999",
    period: "/Year",
    features: [
      "Everything in Quarterly Growth",
      "Unlimited live classes",
      "Advanced progress analytics",
      "Certificate of completion",
      "Best value savings",
    ],
  },
];

const ManagePlans = ({ onBack, onEditPlan }: ManagePlansProps) => {
  const [activeTab, setActiveTab] = React.useState<
    "b2c" | "b2b" | "enterprise"
  >("b2c");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 pb-10">
      {/* Header with Back Arrow */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all group"
          >
            <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              Manage Subscription Plans
            </h1>
            <p className="text-sm font-medium text-slate-500 max-w-2xl mt-0.5">
              Create and manage subscription plans for students and institutes.
            </p>
          </div>
        </div>
        <Button className="h-12 rounded-2xl px-6 bg-black text-white font-bold shadow-xl shadow-black/10 hover:bg-black/95 gap-2 transition-all active:scale-[0.98]">
          Create New Plan
        </Button>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4">
        <div className="flex items-center gap-8 border-b border-slate-100 w-fit">
          {[
            { id: "b2c", label: "B2C Plans" },
            { id: "b2b", label: "B2B Plans" },
            { id: "enterprise", label: "Custom Enterprise Plans" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-2 py-4 text-[17px] font-black transition-all relative",
                activeTab === tab.id
                  ? "text-[#1E293B]"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#31564E] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-[420px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search plan name or type..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all"
          />
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {b2cPlans.map((plan) => (
          <div
            key={plan.id}
            className="group bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] hover:shadow-black/5 transition-all flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-[20px] font-black text-slate-800 tracking-tight">
                {plan.name}
              </h3>
              <div className="flex items-end gap-1">
                <span className="text-[32px] font-black text-slate-900 leading-none">
                  {plan.price}
                </span>
                <span className="text-[14px] font-bold text-slate-400 pb-1">
                  {plan.period}
                </span>
              </div>
            </div>

            <div className="space-y-4 flex-grow border-t border-slate-50 pt-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-300 shrink-0 mt-0.5" />
                  <span className="text-[15px] font-bold text-slate-600">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button
                onClick={() => onEditPlan(plan.name)}
                variant="outline"
                className="h-12 flex-grow rounded-[20px] border-black text-black font-black hover:bg-slate-50 transition-all"
              >
                Edit Plan
              </Button>
              <button className="h-12 w-12 flex items-center justify-center rounded-full border border-black group/more hover:bg-black transition-all">
                <MoreHorizontal className="h-6 w-6 text-black group-hover/more:text-white" />
              </button>
            </div>
          </div>
        ))}

        {/* Create New Plan Card */}
        <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-xl shadow-black/[0.02] flex items-center justify-center">
          <button className="h-full w-full rounded-[24px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 space-y-5 hover:bg-slate-50/50 hover:border-[#31564E] transition-all group">
            <div className="h-16 w-16 rounded-full bg-[#F1F5F9] flex items-center justify-center group-hover:bg-[#E2E8F0] transition-colors">
              <Plus className="h-8 w-8 text-slate-500" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-[17px] font-black text-slate-800">
                Create a New Plan
              </p>
              <p className="text-[14px] font-bold text-slate-400">
                Configure custom limits and pricing
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagePlans;
