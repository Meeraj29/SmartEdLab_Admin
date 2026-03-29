"use client";

import {
  AlertCircle,
  ChevronDown,
  MoreVertical,
  Plus,
  Repeat,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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
import { cn } from "@/lib/utils";

interface BillingStaticProps {
  onGenerateClick: () => void;
  onManagePlansClick: () => void;
}

const monthlyData = [
  { name: "Week 1", b2b: 10, b2c: 5, total: 15 },
  { name: "Week 2", b2b: 20, b2c: 12, total: 32 },
  { name: "Week 3", b2b: 45, b2c: 25, total: 70 },
  { name: "Week 4", b2b: 30, b2c: 18, total: 48 },
];

const semiAnnualData = [
  { name: "Jan", b2b: 30, b2c: 10, total: 40 },
  { name: "Feb", b2b: 80, b2c: 30, total: 110 },
  { name: "Mar", b2b: 150, b2c: 60, total: 210 },
  { name: "Apr", b2b: 280, b2c: 90, total: 370 },
  { name: "May", b2b: 220, b2c: 110, total: 330 },
  { name: "Jun", b2b: 350, b2c: 150, total: 500 },
];

const yearlyData = [
  { name: "2021", b2b: 1200, b2c: 400, total: 1600 },
  { name: "2022", b2b: 2400, b2c: 900, total: 3300 },
  { name: "2023", b2b: 4800, b2c: 1800, total: 6600 },
  { name: "2024", b2b: 7200, b2c: 3200, total: 10400 },
];

const BillingStatic = ({
  onGenerateClick,
  onManagePlansClick,
}: BillingStaticProps) => {
  const [timeFrame, setTimeFrame] = React.useState<
    "Monthly" | "Last 6 Months" | "Yearly"
  >("Last 6 Months");
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentData = React.useMemo(() => {
    switch (timeFrame) {
      case "Monthly":
        return monthlyData;
      case "Yearly":
        return yearlyData;
      default:
        return semiAnnualData;
    }
  }, [timeFrame]);

  const stats = [
    {
      label: "Total Revenue",
      value: "₹428.5k",
      subtext: "All-Time Platform Revenue",
      trend: "12.5%",
      isTrendUp: true,
      icon: Wallet,
      iconBg: "bg-[#FF8206]",
      cardBg: "bg-white",
    },
    {
      label: "MRR",
      value: "₹52,140",
      subtext: "All-Time Platform Revenue",
      trend: "31.3%",
      isTrendUp: true,
      icon: Repeat,
      iconBg: "bg-white text-[#2D4A43]",
      cardBg: "bg-[#2D4A43]",
      isDark: true,
    },
    {
      label: "Active Subscriptions",
      value: "12,842",
      subtext: "Include Both B2B & B2C",
      trend: "17.3%",
      isTrendUp: true,
      icon: Users,
      iconBg: "bg-[#8B5CF6]",
      cardBg: "bg-white",
    },
    {
      label: "Failed",
      value: "04",
      subtext: "Include all",
      trend: "5.4%",
      isTrendUp: false,
      icon: AlertCircle,
      iconBg: "bg-[#FF4D4D]",
      cardBg: "bg-white",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-foreground tracking-tight">
            Billing Management
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-2xl mt-1">
            Monitor and manage all platform subscriptions, recurring revenues,
            and transaction health in real-time.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={onManagePlansClick}
            variant="outline"
            className="h-12 rounded-[14px] px-6 border-[#31564E] bg-white text-[#31564E] font-bold hover:bg-slate-50 shadow-sm transition-all"
          >
            Manage Subscriptions
          </Button>

          <Button
            onClick={onGenerateClick}
            className="h-12 rounded-[14px] px-6 bg-black text-white font-bold shadow-lg shadow-black/10 hover:bg-black/95 gap-1.5 transition-all"
          >
            <Plus className="h-5 w-5" />
            Create Plan
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-[24px] p-6 shadow-sm border border-border/40 relative overflow-hidden flex flex-col justify-between h-[170px] transition-all hover:shadow-md",
              stat.cardBg
            )}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span
                  className={cn(
                    "text-3xl font-black tracking-tighter leading-none",
                    stat.isDark ? "text-white" : "text-[#1E293B]"
                  )}
                >
                  {stat.value}
                </span>
                <p
                  className={cn(
                    "text-[15px] font-bold mt-2",
                    stat.isDark ? "text-slate-200" : "text-[#1E293B]"
                  )}
                >
                  {stat.label}
                </p>
              </div>
              <div
                className={cn(
                  "h-14 w-14 rounded-[18px] flex items-center justify-center shadow-lg shadow-black/5 transition-transform hover:scale-105",
                  stat.iconBg
                )}
              >
                <stat.icon
                  className={cn("h-7 w-7", !stat.isDark && "text-white")}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 px-1">
              <p
                className={cn(
                  "text-[13px] font-medium opacity-60",
                  stat.isDark ? "text-slate-300" : "text-slate-500"
                )}
              >
                {stat.subtext}
              </p>
              <div
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-sm",
                  stat.isTrendUp
                    ? stat.isDark
                      ? "bg-[#32C997]/15 text-[#32C997]"
                      : "bg-[#D1FAE5] text-[#10B981]"
                    : stat.isDark
                      ? "bg-red-500/15 text-red-400"
                      : "bg-[#FEE2E2] text-[#EF4444]"
                )}
              >
                {stat.isTrendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-[11px] font-black tracking-tight">
                  {stat.isTrendUp ? "+" : "-"}
                  {stat.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Revenue Growth Chart */}
        <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-100 p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
              Revenue Growth (B2B& B2C)
            </h3>
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-4 py-2 h-auto rounded-xl bg-slate-50 border border-slate-100 font-bold text-slate-500 hover:bg-slate-100"
                  >
                    {timeFrame}
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[160px] rounded-xl font-bold"
                >
                  <DropdownMenuItem
                    onClick={() => setTimeFrame("Monthly")}
                    className="cursor-pointer"
                  >
                    Monthly
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTimeFrame("Last 6 Months")}
                    className="cursor-pointer"
                  >
                    Last 6 Months
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTimeFrame("Yearly")}
                    className="cursor-pointer"
                  >
                    Yearly
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="h-[300px] w-full">
            {isMounted ? (
              <ResponsiveContainer
                width="100%"
                height="100%"
                minWidth={0}
                minHeight={0}
              >
                <BarChart data={currentData} barGap={0}>
                  <CartesianGrid
                    vertical={false}
                    stroke="#E2E8F0"
                    strokeDasharray="3 3"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 700, fill: "#64748b" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 700, fill: "#64748b" }}
                    tickFormatter={(val) =>
                      `₹${val < 1000 ? val : `${(val / 1000).toFixed(1)}M`}${val < 1000 ? "k" : ""}`
                    }
                    width={60}
                  />
                  <Tooltip
                    cursor={{ fill: "#F1F5F9" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                    labelStyle={{
                      fontWeight: 800,
                      color: "#1E293B",
                      marginBottom: "8px",
                    }}
                  />
                  <Bar
                    dataKey="total"
                    radius={[8, 8, 0, 0]}
                    barSize={timeFrame === "Monthly" ? 80 : 60}
                  >
                    {currentData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          index < currentData.length - 2
                            ? "#E2E8F0"
                            : index === currentData.length - 2
                              ? "#94A3B8"
                              : "#2D4A43"
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

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#10B981]" />
              <span className="text-xs font-bold text-slate-500">B2C</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#2D4A43]" />
              <span className="text-xs font-bold text-slate-500">B2B</span>
            </div>
          </div>
        </div>

        {/* Right: Breakdown & Forecast Analysis */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
          <div className="space-y-8">
            <h3 className="text-[18px] font-black text-slate-800 tracking-tight">
              B2C Vs B2B Revenue
            </h3>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-600">
                      Institute SaaS (B2B)
                    </span>
                  </div>
                  <span className="text-sm font-black text-slate-800">78%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2D4A43] rounded-full"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-600">
                      Direct Students (B2C)
                    </span>
                  </div>
                  <span className="text-sm font-black text-slate-800">22%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF8206] rounded-full"
                    style={{ width: "22%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-[24px] p-5 mt-8 flex items-center gap-4 border border-slate-100 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] shrink-0">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Forecast next month
              </p>
              <p className="text-[18px] font-black text-slate-800 tracking-tighter">
                +$12,400 expected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingStatic;
