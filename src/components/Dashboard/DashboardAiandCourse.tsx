"use client";

import { ChevronDown, MoreVertical } from "lucide-react";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tokenDataByRange: Record<string, any[]> = {
  "This Week": [
    { day: "Mon", direct: 500000, institute: 2500000 },
    { day: "Tue", direct: 800000, institute: 2300000 },
    { day: "Wed", direct: 400000, institute: 1800000 },
    { day: "Thu", direct: 600000, institute: 2100000 },
    { day: "Fri", direct: 350000, institute: 1500000 },
    { day: "Sat", direct: 550000, institute: 1700000 },
    { day: "Sun", direct: 380000, institute: 2800000 },
  ],
  "This Month": [
    { day: "Week 1", direct: 2000000, institute: 10000000 },
    { day: "Week 2", direct: 2500000, institute: 9000000 },
    { day: "Week 3", direct: 1800000, institute: 8500000 },
    { day: "Week 4", direct: 3000000, institute: 11000000 },
  ],
  Custom: [
    { day: "Jan", direct: 15000000, institute: 60000000 },
    { day: "Feb", direct: 10000000, institute: 40000000 },
    { day: "Mar", direct: 12000000, institute: 55000000 },
  ],
};

const courseDataByRange: Record<string, any[]> = {
  "This Month": [
    { name: "IELTS Prep", value: 98, color: "#3B82F6" },
    { name: "Business English", value: 89, color: "#A855F7" },
    { name: "Grammar Basics", value: 73, color: "#10B981" },
    { name: "TOEFL Prep", value: 56, color: "#F59E0B" },
    { name: "Conversational", value: 40, color: "#EF4444" },
    { name: "Pronunciation", value: 31, color: "#06B6D4" },
    { name: "Academic Writing", value: 20, color: "#A78BFA" },
  ],
  "This Week": [
    { name: "IELTS Prep", value: 85, color: "#3B82F6" },
    { name: "Business English", value: 75, color: "#A855F7" },
    { name: "Grammar Basics", value: 90, color: "#10B981" },
    { name: "TOEFL Prep", value: 45, color: "#F59E0B" },
    { name: "Conversational", value: 60, color: "#EF4444" },
    { name: "Pronunciation", value: 25, color: "#06B6D4" },
    { name: "Academic Writing", value: 15, color: "#A78BFA" },
  ],
  Custom: [
    { name: "IELTS Prep", value: 92, color: "#3B82F6" },
    { name: "Business English", value: 80, color: "#A855F7" },
    { name: "Grammar Basics", value: 65, color: "#10B981" },
    { name: "TOEFL Prep", value: 70, color: "#F59E0B" },
    { name: "Conversational", value: 50, color: "#EF4444" },
    { name: "Pronunciation", value: 40, color: "#06B6D4" },
    { name: "Academic Writing", value: 30, color: "#A78BFA" },
  ],
};

const formatTokenYAxis = (value: number) => {
  if (value >= 1000000) return `${value / 1000000}M`;
  if (value >= 500000) return `0.5M`;
  return `${value}`;
};

const DashboardAiandCourse = () => {
  const [tokenRange, setTokenRange] = React.useState("This Week");
  const [courseRange, setCourseRange] = React.useState("This Month");

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* AI Token Consumption */}
      <div className="rounded-[14px] border border-border/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">
            AI Token Consumption
          </h3>
          <div className="flex items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 text-sm font-medium"
                >
                  {tokenRange}{" "}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
                {["This Month", "This Week", "Custom"].map((range) => (
                  <DropdownMenuItem
                    key={range}
                    onClick={() => setTokenRange(range)}
                  >
                    {range}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MoreVertical className="h-5 w-5 opacity-50" />
            </Button>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={tokenDataByRange[tokenRange]}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorDirectToken"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="colorInstituteToken"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E2E8F0"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                tickFormatter={formatTokenYAxis}
                ticks={[0, 500000, 1000000, 2000000, 3000000, 5000000]}
                domain={[0, "auto"]}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                content={({ payload }) => (
                  <div className="flex items-center justify-center gap-6 mt-6">
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
              <Area
                type="monotone"
                dataKey="direct"
                name="Direct"
                stroke="#8B5CF6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorDirectToken)"
                stackId="1"
                dot={{ fill: "#8B5CF6", r: 4, strokeWidth: 2, stroke: "#fff" }}
              />
              <Area
                type="monotone"
                dataKey="institute"
                name="Institute"
                stroke="#F97316"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorInstituteToken)"
                stackId="1"
                dot={{ fill: "#F97316", r: 4, strokeWidth: 2, stroke: "#fff" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Popularity */}
      <div className="rounded-[14px] border border-border/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">
            Course Popularity
          </h3>
          <div className="flex items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 text-sm font-medium"
                >
                  {courseRange}{" "}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
                {["This Month", "This Week", "Custom"].map((range) => (
                  <DropdownMenuItem
                    key={range}
                    onClick={() => setCourseRange(range)}
                  >
                    {range}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MoreVertical className="h-5 w-5 opacity-50" />
            </Button>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={courseDataByRange[courseRange]}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
              barSize={20}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#E2E8F0"
              />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
                ticks={[0, 20, 40, 60, 80, 100]}
                domain={[0, 100]}
              />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                width={100}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                formatter={(value: any, name: any) => [`${value}%`, name]}
              />
              <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                {courseDataByRange[courseRange].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardAiandCourse;
