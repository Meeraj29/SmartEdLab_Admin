"use client";

import {
  Calendar,
  ChevronDown,
  MoreVertical,
  SlidersHorizontal,
} from "lucide-react";
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
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ReportsCharts = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const barData = [
    { name: "P1", ai: 400, live: 6400, activity: 2400 },
    { name: "P2", ai: 3000, live: 1398, activity: 2210 },
    { name: "P3", ai: 2000, live: 9800, activity: 2290 },
    { name: "P4", ai: 2780, live: 3908, activity: 2000 },
    { name: "P5", ai: 1890, live: 4800, activity: 2181 },
    { name: "P6", ai: 2390, live: 3800, activity: 2500 },
    { name: "P7", ai: 3490, live: 4300, activity: 2100 },
  ];

  const pieData = [
    { name: "Premium", value: 24, color: "#F97316" }, // Orange
    { name: "Standard", value: 64, color: "#94A3B8" }, // Slate
    { name: "Trial", value: 12, color: "#2D4A43" }, // Dark Green/Carbon
  ];

  const areaData = [
    { name: "W1", value: 2400 },
    { name: "W2", value: 1398 },
    { name: "W3", value: 9800 },
    { name: "W4", value: 3908 },
    { name: "W5", value: 4800 },
    { name: "W6", value: 3800 },
    { name: "W7", value: 10000 },
  ];

  const institutionRankings = [
    { name: "Global Language Acad.", students: "2.4k", progress: 100 },
    { name: "Berlin Polyglot Hub", students: "1.8k", progress: 75 },
    { name: "Nordic Linguistics", students: "1.1k", progress: 45 },
    { name: "Tokyo Dialect Center", students: "850", progress: 30 },
  ];

  const FilterItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:bg-slate-50 cursor-pointer transition-all group">
      <span className="text-[12px] font-bold text-slate-400 group-hover:text-slate-500">
        {label}:
      </span>
      <span className="text-[12px] font-black text-slate-700">{value}</span>
      <ChevronDown className="h-4 w-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
    </div>
  );

  const ChartCard = ({
    title,
    legend = false,
    legendType,
    children,
    footer = null,
  }: any) => (
    <div className="bg-white rounded-[24px] border border-slate-100 p-6 md:p-8 shadow-sm flex flex-col space-y-6 animate-in fade-in zoom-in-95 duration-700 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-9 px-3 rounded-xl bg-slate-50 border border-slate-100 text-[13px] font-bold text-slate-500 gap-2"
              >
                Last 6 Months <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl font-bold">
              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
              <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
              <DropdownMenuItem>Last 6 Months</DropdownMenuItem>
              <DropdownMenuItem>Yearly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-slate-50 text-slate-300 hover:text-slate-600 border border-slate-50 transition-colors">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex-grow min-h-[280px] w-full relative">{children}</div>
      {(legend || footer || legendType) && (
        <div className="flex flex-col space-y-4 pt-2">
          {legendType === "activity" && (
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#312E81]" />
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                  AI Usage
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#6366F1]" />
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                  Live Classes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#A5B4FC]" />
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                  Activity
                </span>
              </div>
            </div>
          )}
          {footer}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
        <FilterItem label="Plan" value="All Types" />
        <FilterItem label="Status" value="Active" />
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:bg-slate-50 cursor-pointer">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span className="text-[12px] font-black text-slate-700">
            Last 30 days
          </span>
          <ChevronDown className="h-4 w-4 text-slate-300" />
        </div>
        <FilterItem label="AI Usage" value="High" />
        <FilterItem label="Sort By" value="High to low" />
        <FilterItem label="Sort By" value="High to low" />

        <button className="flex items-center gap-2 ml-auto text-[13px] font-bold text-[#31564E] hover:underline px-2 transition-all group">
          <SlidersHorizontal className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
          Reset Filters
        </button>
      </div>

      {/* Graphs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Platform Activity Trend (Bar) */}
        <ChartCard title="Platform Activity Trend" legendType="activity">
          <div className="bg-slate-50/50 rounded-[24px] p-6 h-full flex items-center justify-center">
            {isMounted ? (
              <ResponsiveContainer
                width="100%"
                height="100%"
                minWidth={0}
                minHeight={0}
              >
                <BarChart data={barData} barGap={4}>
                  <Bar
                    dataKey="activity"
                    fill="#A5B4FC"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar dataKey="live" fill="#6366F1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="ai" fill="#312E81" radius={[4, 4, 0, 0]} />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full" />
            )}
          </div>
        </ChartCard>

        {/* Card 2: Student Distribution (Pie/Donut) */}
        <ChartCard title="Student Distribution">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-[32px] font-black text-slate-800 leading-none">
                64%
              </p>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                Standard
              </p>
            </div>
          </div>
          {isMounted ? (
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={0}
            >
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full w-full" />
          )}
          {/* Legend overlay for Pie */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3">
            {pieData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[12px] font-bold text-slate-700">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Card 3: Platform Activity Trend (Inst. Rankings fallback) */}
        <ChartCard title="Platform Activity Trend" legendType="custom">
          <div className="space-y-6 pt-4">
            {institutionRankings.map((inst, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-[13px] font-bold">
                  <span className="text-slate-800">{inst.name}</span>
                  <span className="text-slate-500">
                    {inst.students} Students
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3B82F6] rounded-full transition-all duration-1000"
                    style={{ width: `${inst.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Card 4: Revenue Performance (Area) */}
        <ChartCard
          title="Revenue Performance"
          footer={
            <div className="flex items-center justify-between border-t border-slate-50 pt-4">
              <div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  Total Subscriptions
                </p>
                <p className="text-[20px] font-black text-slate-800 leading-none">
                  $52,400
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  Course Payments
                </p>
                <p className="text-[20px] font-black text-slate-800 leading-none">
                  $31,800
                </p>
              </div>
            </div>
          }
        >
          {isMounted ? (
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={0}
            >
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D4A43" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2D4A43" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2D4A43"
                  strokeWidth={0}
                  fillOpacity={1}
                  fill="url(#colorWave)"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full w-full" />
          )}
        </ChartCard>
      </div>
    </div>
  );
};

export default ReportsCharts;
