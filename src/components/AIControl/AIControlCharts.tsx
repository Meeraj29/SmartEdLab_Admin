"use client";

import { AlertTriangle, TrendingUp } from "lucide-react";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const usageData = [
  { time: "08:00", value: 45 },
  { time: "10:00", value: 65 },
  { time: "12:00", value: 55 },
  { time: "14:00", value: 85 },
  { time: "16:00", value: 70 },
  { time: "18:00", value: 110 },
  { time: "20:00", value: 95 },
  { time: "22:00", value: 135 },
  { time: "00:00", value: 120 },
];

const instituteData = [
  { name: "Global University A", tokens: "342k", values: [35, 25, 20, 20] },
  { name: "Language Hub B", tokens: "285k", values: [30, 20, 25, 25] },
  { name: "Academy of Arts C", tokens: "198k", values: [45, 15, 20, 20] },
  { name: "Global University A", tokens: "342k", values: [35, 25, 20, 20] },
];

const costTrendData = [
  { name: "Mon", cost: 1200 },
  { name: "Tue", cost: 1000 },
  { name: "Wed", cost: 1800 },
  { name: "Thu", cost: 1200 },
  { name: "Fri", cost: 3200 },
  { name: "Sat", cost: 2100 },
  { name: "Sun", cost: 4200 },
];

const studentUsageData = [
  { name: "Advanced", value: 65, color: "#8E33FF" },
  { name: "Beginner", value: 25, color: "#D1FAE5" },
  { name: "Others", value: 10, color: "#3578E5" },
];

const colors = ["#0052CC", "#3578E5", "#8E33FF", "#CCE0FF"];

const AIControlCharts = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* First Row Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col h-[450px]">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-[20px] font-black text-slate-900 tracking-tight">
                Total Token Usage
              </h3>
              <p className="text-[13px] font-medium text-slate-400 mt-1">
                Real-time throughput across all AI models
              </p>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-100">
              {["Day", "Week", "Month"].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "px-4 py-1.5 text-[12px] font-bold rounded-lg transition-all",
                    tab === "Day"
                      ? "bg-[#0052CC]/10 text-[#0052CC] shadow-sm"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-4">
            {isMounted ? (
              <ResponsiveContainer
                width="100%"
                height="100%"
                minWidth={0}
                minHeight={0}
              >
                <BarChart
                  data={usageData}
                  margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                >
                  <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fontWeight: 700, fill: "#94A3B8" }}
                    dy={10}
                  />
                  <Tooltip
                    cursor={{ fill: "#F8FAFC" }}
                    contentStyle={{
                      borderRadius: "14px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {usageData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          index === usageData.length - 1
                            ? "#0052CC"
                            : index > 5
                              ? "#3578E5"
                              : "#D9EAFF"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full" />
            )}
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col h-[450px]">
          <h3 className="text-[20px] font-black text-slate-900 tracking-tight mb-1">
            Institute Token Load
          </h3>
          <div className="space-y-8 mt-10">
            {instituteData.map((inst, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[14px] font-bold text-slate-700">
                    {inst.name}
                  </span>
                  <span className="text-[13px] font-black text-slate-400 uppercase tracking-widest">
                    {inst.tokens} Tokens
                  </span>
                </div>
                <div className="h-2.5 w-full bg-[#F1F5F9] rounded-full overflow-hidden flex">
                  {inst.values.map((v, idx) => (
                    <div
                      key={idx}
                      className="h-full"
                      style={{ width: `${v}%`, backgroundColor: colors[idx] }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-8 flex items-center flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "AI Tutor", color: colors[0] },
              { label: "Speaking", color: colors[1] },
              { label: "Writing", color: colors[2] },
              { label: "Grammar", color: colors[3] },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[12px] font-bold text-slate-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row Section (Refined for Perfect Alignment) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cost Trend (USD) */}
        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col h-[480px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[20px] font-black text-slate-900 leading-tight">
              Cost Trend (USD)
            </h3>
            <span className="text-[15px] font-black text-[#0052CC]">$4.2k</span>
          </div>
          <div className="flex-1 mt-4">
            {isMounted ? (
              <ResponsiveContainer
                width="100%"
                height="100%"
                minWidth={0}
                minHeight={0}
              >
                <AreaChart
                  data={costTrendData}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#0052CC"
                        stopOpacity={0.08}
                      />
                      <stop offset="95%" stopColor="#0052CC" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="cost"
                    stroke="#0052CC"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCost)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full" />
            )}
          </div>
        </div>

        {/* Direct Student Usage Donut */}
        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col h-[480px]">
          <h3 className="text-[20px] font-black text-slate-900 tracking-tight leading-tight mb-8">
            Direct Student Usage
          </h3>
          <div className="flex-1 flex flex-col items-center justify-between">
            <div className="relative w-full h-[240px]">
              {isMounted ? (
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  minWidth={0}
                  minHeight={0}
                >
                  <PieChart>
                    <Pie
                      data={studentUsageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={95}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      {studentUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full" />
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[28px] font-black text-slate-900 leading-none">
                  2.4M
                </span>
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">
                  Tokens
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full mt-6 px-4">
              {studentUsageData.map((item, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-bold text-slate-500">
                    {item.name}
                  </span>
                  <span className="text-[15px] font-black text-slate-900">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Usage Alerts */}
        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col h-[480px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[20px] font-black text-slate-900 leading-tight">
              AI Usage Alerts
            </h3>
            <AlertTriangle className="h-5 w-5 text-rose-500" />
          </div>
          <div className="space-y-8 flex-1">
            {[
              {
                name: "St. Mary's Academy",
                usage: 92,
                status: "danger",
                icon: TrendingUp,
              },
              {
                name: "Linguistics Lab Hub",
                usage: 78,
                status: "warning",
                icon: TrendingUp,
              },
            ].map((alert, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "h-12 w-12 rounded-2xl flex items-center justify-center",
                        alert.status === "danger" ? "bg-rose-50" : "bg-blue-50"
                      )}
                    >
                      <alert.icon
                        className={cn(
                          "h-6 w-6",
                          alert.status === "danger"
                            ? "text-rose-500"
                            : "text-blue-500"
                        )}
                      />
                    </div>
                    <span className="text-[15px] font-bold text-slate-800">
                      {alert.name}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-[15px] font-black",
                      alert.status === "danger"
                        ? "text-rose-600"
                        : "text-[#0052CC]"
                    )}
                  >
                    {alert.usage}%
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      alert.status === "danger" ? "bg-rose-500" : "bg-[#0052CC]"
                    )}
                    style={{ width: `${alert.usage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <Button
              variant="outline"
              className="w-full h-14 rounded-2xl border-slate-100 text-slate-900 font-bold hover:bg-slate-50 transition-all text-[15px] shadow-sm"
            >
              Manage Limits
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIControlCharts;
