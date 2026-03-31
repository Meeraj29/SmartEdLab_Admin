"use client";

import {
  Bot,
  CheckCircle2,
  ChevronDown,
  History,
  Plus,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Total Direct Students",
    value: "12,540",
    subtitle: "142 this month",
    trend: "+12.5%",
    trendUp: true,
    icon: Users,
    iconBg: "bg-[#FF7A00]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "AI Usage Today",
    value: "45.2k",
    subtitle: "Requests in last 24h",
    trend: "+31.3 %",
    trendUp: true,
    icon: Bot,
    iconBg: "bg-white text-[#31564E]",
    cardStyle: "bg-[#31564E] text-white",
  },
  {
    title: "Active Subscriptions",
    value: "8,920",
    subtitle: "Include all plan types",
    trend: "+17.3 %",
    trendUp: true,
    icon: CheckCircle2,
    iconBg: "bg-[#7F3DFF]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "Expired Subscriptions",
    value: "3,120",
    subtitle: "Include all plan types",
    trend: "5.4 %",
    trendUp: false,
    icon: History,
    iconBg: "bg-[#8B4513]",
    cardStyle: "bg-white text-foreground",
  },
];

interface StudentStaticProps {
  onAddClick: () => void;
}

const StudentStatic = ({ onAddClick }: StudentStaticProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-[24px] font-inter font-semibold text-foreground">
            Direct Students
          </h2>
          <p className="text-sm md:text-[16px] font-regular font-inter text-black/80">
            Manage all direct students who purchased subscriptions on the
            platform.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 rounded-xl px-4 gap-2 border-[#31564E]/30 text-[#31564E] hover:bg-[#31564E]/5 text-sm md:text-[16px] font-medium font-inter"
                >
                  Manage Subscription
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[200px] rounded-xl p-1"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  Upgrade Plan
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  Downgrade Plan
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  Extend Validity Plan
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  Refund management
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <Button
            onClick={onAddClick}
            className="h-11 rounded-xl px-4 md:px-6 gap-1 bg-black hover:bg-black/90 text-white text-sm md:text-[16px] font-medium font-inter text-center"
          >
            <Plus className="h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col justify-between rounded-[20px] p-5 shadow-sm border border-border/50 hover:shadow-md",
              stat.cardStyle
            )}
            style={{ minHeight: "135px" }}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[26px] font-inter font-semibold">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "mt-4 text-[16px] font-inter font-medium",
                    stat.cardStyle.includes("text-white")
                      ? "text-white/80"
                      : "text-black"
                  )}
                >
                  {stat.title}
                </span>
              </div>
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg shadow-sm",
                  stat.iconBg,
                  !stat.iconBg.includes("text") && "text-white"
                )}
              >
                <stat.icon className="h-5 w-5" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "text-[14px] font-regular font-inter",
                  stat.cardStyle.includes("text-white")
                    ? "text-white/60"
                    : "text-black/80"
                )}
              >
                {stat.subtitle}
              </span>
              <div
                className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-0.5 text-[14px] font-medium font-inter ",
                  stat.trendUp
                    ? "bg-[#248F5F]/20 text-[#248F5F] border-emerald-100"
                    : "bg-[#FF3939]/20 text-[#FF3939] border-red-100",
                  stat.cardStyle.includes("text-white") &&
                    "bg-[#248F5F]/20 border-white/20 text-white"
                )}
              >
                {stat.trendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentStatic;
