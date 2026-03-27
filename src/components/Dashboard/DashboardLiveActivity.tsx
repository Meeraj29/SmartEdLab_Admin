"use client";

import { Bot, Building2, Radio, User } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    icon: Radio,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: (
      <>
        Live Class <span className="font-bold">TOEFL Sprint Started</span> | 22
        Joined
      </>
    ),
    subtitle: "Just Now | EduSphere",
  },
  {
    id: 2,
    icon: Bot,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: (
      <>
        <span className="font-bold">OXxford English Hub</span> AI Usage Hit 80%
        Threshold
      </>
    ),
    subtitle: "Just Now | Alert sent to admin",
  },
  {
    id: 3,
    icon: User,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: (
      <>
        <span className="font-bold">Ravi Kumar</span> registered as a new
        student
      </>
    ),
    subtitle: "Just Now | B2C | Mumbai",
  },
  {
    id: 4,
    icon: User,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: (
      <>
        <span className="font-bold">Arjun Mehta</span> registered as a new
        student
      </>
    ),
    subtitle: "Just Now | B2C | Delhi",
  },
  {
    id: 5,
    icon: Building2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: (
      <>
        <span className="font-bold">GlobalEdge Academy</span> created as new
        institute
      </>
    ),
    subtitle: "2 min ago | Lab Mode",
  },
  {
    id: 6,
    icon: Radio,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: (
      <>
        Live Class <span className="font-bold">TOEFL Sprint Started</span> | 22
        Joined
      </>
    ),
    subtitle: "Just Now | EduSphere",
  },
];

const DashboardLiveActivity = () => {
  return (
    <div className="rounded-[14px] border border-border/50 bg-white p-5 shadow-sm mt-6">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <h3 className="text-xl font-semibold text-foreground">Live Activity</h3>
      </div>

      <div className="space-y-0">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "flex items-start gap-4 py-4",
              index !== activities.length - 1 && "border-b border-slate-100"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                activity.iconBg
              )}
            >
              <activity.icon className={cn("h-5 w-5", activity.iconColor)} />
            </div>
            <div className="flex flex-col">
              <p className="text-md font-medium text-slate-800 leading-tight">
                {activity.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{activity.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLiveActivity;
