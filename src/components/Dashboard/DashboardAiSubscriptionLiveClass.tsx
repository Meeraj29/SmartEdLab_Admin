"use client";

import {
  ArrowUpCircle,
  Building2,
  ChevronDown,
  Clock,
  GraduationCap,
  MoreVertical,
  RefreshCcw,
  Video,
  XCircle,
} from "lucide-react";
import {
  Cell,
  Legend,
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

const liveClassData = [
  { name: "Completed", value: 45, color: "#31564E" },
  { name: "Live Now", value: 35, color: "#FF8A48" },
  { name: "Cancelled", value: 20, color: "#FF4D4D" },
];

const aiUsageMonitorData = [
  { name: "Brightpath Academy", value: 90, color: "#FF4D4D" },
  { name: "Oxford English Hub", value: 78, color: "#FF8A48" },
  { name: "Lingo Max Institute", value: 55, color: "#4A90E2" },
  { name: "EduSphere Global", value: 35, color: "#4ADE80" },
];

const DashboardAiSubscriptionLiveClass = () => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {/* AI Usage Monitor */}
      <div className="flex flex-col rounded-[14px] border border-border/50 bg-white shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              AI Usage Monitor
            </h3>
            <button className="text-sm font-medium text-emerald-600 hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-6">
            {aiUsageMonitorData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 font-medium text-xs text-slate-700">
                    <Building2 className="h-4 w-4 opacity-50" />
                    {item.name}
                  </div>
                  <span className="font-medium text-md">{item.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto bg-[#31564E] p-5">
          <div className="flex items-center justify-between text-white text-sm mb-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Direct Students</span>
            </div>
            <span className="font-bold">25%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10">
            <div className="h-full w-[25%] rounded-full bg-[#4ADE80]" />
          </div>
        </div>
      </div>

      {/* Subscription Health */}
      <div className="flex flex-col rounded-[14px] border border-border/50 bg-white shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Subscription Health
            </h3>
            <button className="text-sm font-medium text-emerald-600 hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Video className="h-5 w-5" />
                </div>
                <span className="text-md font-medium text-slate-700">
                  New This Week
                </span>
              </div>
              <span className="text-xl font-semibold text-emerald-600">
                +184
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <RefreshCcw className="h-5 w-5" />
                </div>
                <span className="text-md font-medium text-slate-700">
                  Renewals
                </span>
              </div>
              <span className="text-xl font-semibold">342</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-md font-medium text-slate-700">
                  Expiring (7d)
                </span>
              </div>
              <span className="text-xl font-semibold text-orange-500">62</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <XCircle className="h-5 w-5" />
                </div>
                <span className="text-md font-medium text-slate-700">
                  Churned
                </span>
              </div>
              <span className="text-xl font-semibold text-red-500">38</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <ArrowUpCircle className="h-5 w-5" />
                </div>
                <span className="text-md font-medium text-slate-700">
                  Plan Upgrades
                </span>
              </div>
              <span className="text-xl font-semibold text-emerald-600">56</span>
            </div>
          </div>
        </div>

        <div className="mt-auto bg-slate-50 p-5 border-t border-slate-100">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-600">MRR Retention</span>
            <span className="font-bold">94.2%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200">
            <div className="h-full w-[94.2%] rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>

      {/* Live Class Usage */}
      <div className="rounded-[14px] border border-border/50 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">
            Live Class Usage
          </h3>
          <div className="flex items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 text-sm font-medium"
                >
                  Today <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>This Week</DropdownMenuItem>
                <DropdownMenuItem>This Month</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MoreVertical className="h-5 w-5 opacity-50" />
            </Button>
          </div>
        </div>

        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={liveClassData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {liveClassData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                content={({ payload }) => (
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
                    {payload?.map((entry: any, index: number) => (
                      <div
                        key={`item-${index}`}
                        className="flex items-center gap-2"
                      >
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm font-medium text-muted-foreground">
                          {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardAiSubscriptionLiveClass;
