import {
  Bot,
  Building2,
  CreditCard,
  FlaskConical,
  GraduationCap,
  IndianRupee,
  School,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  percentage: string;
  icon: React.ElementType;
  variant?: "default" | "solid-orange" | "solid-green";
  iconColorClass?: string;
  iconBgClass?: string;
}

const StatCard = ({
  title,
  value,
  subtitle,
  percentage,
  icon: Icon,
  variant = "default",
  iconColorClass = "text-white",
  iconBgClass = "bg-primary",
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[14px] p-5 transition-all hover:shadow-lg min-h-[100px] flex flex-col justify-between",
        variant === "solid-orange" && "bg-[#FF7A45] text-white",
        variant === "solid-green" && "bg-[#31564E] text-white",
        variant === "default" && "bg-white border border-border shadow-sm"
      )}
    >
      {/* Top Row: Value and Icon */}
      <div className="flex justify-between items-start">
        <h2
          className={cn(
            "text-2xl font-semibold tracking-tight",
            variant === "default" ? "text-foreground" : "text-white"
          )}
        >
          {value}
        </h2>
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl shadow-sm shrink-0",
            variant === "default" ? iconBgClass : "bg-white"
          )}
        >
          <Icon
            className={cn(
              "h-5.5 w-5.5",
              variant === "default" ? iconColorClass : "text-black"
            )}
          />
        </div>
      </div>

      {/* Bottom Row: Text Info and Trend Badge */}
      <div className="flex justify-between items-end gap-2">
        <div className="flex flex-col min-w-0">
          <p
            className={cn(
              "text-md font-medium leading-snug",
              variant === "default" ? "text-black" : "text-white/90"
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "text-xs opacity-80 leading-normal",
              variant === "default" ? "text-slate-500" : "text-white/70"
            )}
          >
            {subtitle}
          </p>
        </div>

        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shrink-0",
            variant === "default"
              ? "bg-[#D1F7EC] text-[#008A5D]"
              : "bg-white/20 text-white"
          )}
        >
          <TrendingUp className="h-3.5 w-3.5 shrink-0" />
          {percentage}
        </div>
      </div>
    </div>
  );
};

const Dashboardstatic = () => {
  const stats = [
    {
      title: "Total Institutes",
      value: "649",
      subtitle: "142 this month",
      percentage: "22.4 %",
      icon: Building2,
      variant: "solid-orange" as const,
    },
    {
      title: "Direct Students (B2C)",
      value: "10,023",
      subtitle: "Self enrolled learners",
      percentage: "17.3 %",
      icon: GraduationCap,
      iconBgClass: "bg-[#7F56D9]",
    },
    {
      title: "Institute Students (B2B)",
      value: "20,323",
      subtitle: "Via Institute Licenses",
      percentage: "31.3 %",
      icon: School,
      variant: "solid-green" as const,
    },
    {
      title: "Total Tutors",
      value: "500",
      subtitle: "36 joined this week",
      percentage: "17.3 %",
      icon: Users,
      iconBgClass: "bg-[#00BCD4]",
    },
    {
      title: "Active Subscriptions",
      value: "1,020",
      subtitle: "Include all plan types",
      percentage: "16.8 %",
      icon: CreditCard,
      iconBgClass: "bg-[#00A87E]",
    },
    {
      title: "AI Usage Today",
      value: "100.03K",
      subtitle: "Requests in last 24h",
      percentage: "8.4 %",
      icon: Bot,
      iconBgClass: "bg-[#FF7A45]",
    },
    {
      title: "Total Revenue",
      value: "₹500.16K",
      subtitle: "All-Time Platform Revenue",
      percentage: "17.3 %",
      icon: IndianRupee,
      iconBgClass: "bg-[#E91E63]",
    },
    {
      title: "Lab Mode Institutes",
      value: "1,523",
      subtitle: "Using Interactive lab mode",
      percentage: "17.3 %",
      icon: FlaskConical,
      iconBgClass: "bg-[#7F56D9]",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Additional sections can be added here like Charts, Recent Activities, etc. */}
    </div>
  );
};

export default Dashboardstatic;
