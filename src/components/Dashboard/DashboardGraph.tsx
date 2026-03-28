"use client";

import { ChevronDown, MoreVertical } from "lucide-react";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
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

const revenueDataByRange: Record<string, any[]> = {
  "This Month": [
    { month: "Week 1", b2c: 20000, b2b: 80000 },
    { month: "Week 2", b2c: 25000, b2b: 95000 },
    { month: "Week 3", b2c: 15000, b2b: 70000 },
    { month: "Week 4", b2c: 30000, b2b: 110000 },
  ],
  "Last 6 Months": [
    { month: "Jan", b2c: 80000, b2b: 300000 },
    { month: "Feb", b2c: 60000, b2b: 500000 },
    { month: "Mar", b2c: 90000, b2b: 700000 },
    { month: "Apr", b2c: 30000, b2b: 100000 },
    { month: "May", b2c: 100000, b2b: 650000 },
    { month: "Jun", b2c: 110000, b2b: 800000 },
  ],
  Yearly: [
    { month: "2021", b2c: 800000, b2b: 3000000 },
    { month: "2022", b2c: 1200000, b2b: 4500000 },
    { month: "2023", b2c: 1500000, b2b: 6000000 },
    { month: "2024", b2c: 1800000, b2b: 7500000 },
  ],
};

const growthDataByRange: Record<string, any[]> = {
  "This Month": [
    { month: "Week 1", direct: 2000, institute: 8000 },
    { month: "Week 2", direct: 2500, institute: 9500 },
    { month: "Week 3", direct: 1500, institute: 7000 },
    { month: "Week 4", direct: 3000, institute: 11000 },
  ],
  "Last 6 Months": [
    { month: "Jan", direct: 15000, institute: 60000 },
    { month: "Feb", direct: 10000, institute: 40000 },
    { month: "Mar", direct: 12000, institute: 55000 },
    { month: "Apr", direct: 8000, institute: 35000 },
    { month: "May", direct: 11000, institute: 45000 },
    { month: "Jun", direct: 9000, institute: 70000 },
  ],
  Yearly: [
    { month: "2021", direct: 150000, institute: 600000 },
    { month: "2022", direct: 200000, institute: 850000 },
    { month: "2023", direct: 250000, institute: 1100000 },
    { month: "2024", direct: 300000, institute: 1400000 },
  ],
};

const formatYAxis = (value: number) => {
  if (value >= 1000000) return `₹1M`;
  if (value === 500000) return `₹500k`;
  if (value === 100000) return `₹100k`;
  if (value === 50000) return `₹50k`;
  if (value === 10000) return `₹10k`;
  return `₹0k`;
};

const DashboardGraph = () => {
  const [revenueRange, setRevenueRange] = React.useState("Last 6 Months");
  const [growthRange, setGrowthRange] = React.useState("Last 6 Months");
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Revenue Graph */}
      <div className="rounded-[14px] border border-border/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">
            B2B & B2C Revenue
          </h3>
          <div className="flex items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 text-sm font-medium"
                >
                  {revenueRange}{" "}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
                {Object.keys(revenueDataByRange).map((range) => (
                  <DropdownMenuItem
                    key={range}
                    onClick={() => setRevenueRange(range)}
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
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueDataByRange[revenueRange]}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                barGap={0}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12 }}
                  tickFormatter={formatYAxis}
                  ticks={[0, 10000, 50000, 100000, 500000, 1000000]}
                  domain={[0, 1000000]}
                />
                <Tooltip
                  cursor={{ fill: "#F1F5F9" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend
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
                <Bar
                  dataKey="b2c"
                  name="B2C"
                  fill="#43CA8D"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                  stackId="a"
                />
                <Bar
                  dataKey="b2b"
                  name="B2B"
                  fill="#31564E"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                  stackId="a"
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full w-full" />
          )}
        </div>
      </div>

      {/* Student Growth Graph */}
      <div className="rounded-[14px] border border-border/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">
            Student Growth
          </h3>
          <div className="flex items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl px-4 text-sm font-medium"
                >
                  {growthRange}{" "}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
                {Object.keys(growthDataByRange).map((range) => (
                  <DropdownMenuItem
                    key={range}
                    onClick={() => setGrowthRange(range)}
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
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={growthDataByRange[growthRange]}
                margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorInstitute"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#31564E" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#31564E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12 }}
                  tickFormatter={formatYAxis}
                  ticks={[0, 10000, 50000, 100000, 500000, 1000000]}
                  domain={[0, 1000000]}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend
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
                  stroke="#4ADE80"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorDirect)"
                />
                <Area
                  type="monotone"
                  dataKey="institute"
                  name="Institute"
                  stroke="#31564E"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorInstitute)"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardGraph;
