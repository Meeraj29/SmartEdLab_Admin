"use client";

import { Activity, ArrowLeft, Shield, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AIModuleDetailProps {
  moduleId: string;
  onBack: () => void;
}

const data = [
  { name: "Mon", tokens: 4000 },
  { name: "Tue", tokens: 3000 },
  { name: "Wed", tokens: 2000 },
  { name: "Thu", tokens: 2780 },
  { name: "Fri", tokens: 1890 },
  { name: "Sat", tokens: 2390 },
  { name: "Sun", tokens: 3490 },
];

const AIModuleDetail = ({
  moduleId: _moduleId,
  onBack,
}: AIModuleDetailProps) => {
  const [activeTab, setActiveTab] = useState("Performance");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="space-y-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 group transition-all"
        >
          <ArrowLeft className="h-5 w-5 text-slate-800" />
          <span className="text-[17px] font-medium text-slate-800 group-hover:underline decoration-slate-400 underline-offset-4">
            AI Control Center
          </span>
        </button>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-[24px] font-bold text-slate-900 tracking-tight">
              Speaking Tutor Engine
            </h2>
            <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg text-[10px] font-black border border-emerald-200 uppercase tracking-widest shadow-sm flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              OPERATIONAL
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="h-12 bg-white hover:bg-rose-50 border-rose-200 text-rose-600 px-6 rounded-xl flex items-center gap-3 font-bold text-[14px] shadow-sm transition-all"
            >
              Disable Module
            </Button>
            <Button className="h-12 bg-black hover:bg-black/90 text-white px-8 rounded-xl flex items-center gap-3 font-bold text-[14px] shadow-xl shadow-black/10 transition-all active:scale-95">
              Force Sync
              <Zap className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {[
          {
            label: "Token Usage (24h)",
            value: "14.2k",
            sub: "+8% vs yesterday",
            icon: Sparkles,
            color: "text-blue-500 bg-blue-50",
          },
          {
            label: "Latency (P95)",
            value: "320ms",
            sub: "Global performance",
            icon: Zap,
            color: "text-amber-500 bg-amber-50",
          },
          {
            label: "Cost Today",
            value: "$4.12",
            sub: "Est. monthly $124",
            icon: Activity,
            color: "text-emerald-500 bg-emerald-50",
          },
          {
            label: "Uptime",
            value: "99.99%",
            sub: "Last 30 days",
            icon: Shield,
            color: "text-purple-500 bg-purple-50",
          },
        ].map((m, i) => (
          <div
            key={i}
            className="bg-white p-7 rounded-[24px] border border-slate-100 shadow-sm flex items-center justify-between h-[140px] hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">
                {m.label}
              </p>
              <h3 className="text-[26px] font-black text-slate-900 leading-none">
                {m.value}
              </h3>
              <p className="text-[11px] font-medium text-slate-400">{m.sub}</p>
            </div>
            <div
              className={cn(
                "h-12 w-12 rounded-2xl flex items-center justify-center",
                m.color
              )}
            >
              <m.icon className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Profile Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 mt-8">
        <div className="flex items-center gap-10">
          {[
            "Performance",
            "Logs & Errors",
            "Model Parameters",
            "Deployment History",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative pb-4 text-[15px] font-black transition-all",
                activeTab === tab
                  ? "text-[#1E293B]"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4B6B64] rounded-t-full shadow-[0_-2px_6px_rgba(75,107,100,0.3)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8 pb-10">
        {activeTab === "Performance" && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[20px] font-black text-slate-900">
                    Usage Analytics
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Token consumption patterns over last 7 days
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                  {["Daily", "Weekly", "Monthly"].map((p) => (
                    <button
                      key={p}
                      className={cn(
                        "px-4 py-1.5 text-[12px] font-bold rounded-lg transition-all",
                        p === "Daily"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorTokens"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#31564E"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#31564E"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fontWeight: 700, fill: "#94A3B8" }}
                      dy={10}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "16px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      }}
                      cursor={{
                        stroke: "#31564E",
                        strokeWidth: 2,
                        strokeDasharray: "5 5",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="tokens"
                      stroke="#31564E"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorTokens)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#31564E] rounded-[32px] p-10 text-white relative flex flex-col justify-between overflow-hidden shadow-2xl shadow-[#31564E]/20 h-full">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles className="h-32 w-32" />
              </div>
              <div className="space-y-8 z-10">
                <h4 className="text-[20px] font-black tracking-tight">
                  System Reliability
                </h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[13px] font-black text-white/60">
                      <span>Accuracy Confidence</span>
                      <span className="text-emerald-400 text-[15px]">
                        96.8%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                        style={{ width: "96.8%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[13px] font-black text-white/60">
                      <span>Resource Usage</span>
                      <span className="text-blue-400 text-[15px]">42%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-400 rounded-full"
                        style={{ width: "42%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-white/60">
                    Intelligence Sync
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed font-medium">
                  The speaking engine is currently syncing with OpenAI Vision
                  node for multimodal student monitoring.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIModuleDetail;
