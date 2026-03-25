"use client";

import {
  BookOpen,
  Building2,
  CheckCircle2,
  FileEdit,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CreateCourseModal from "./CreateCourseModal";

const stats = [
  {
    title: "Published Courses",
    value: "98",
    subtitle: "79% of total catalog",
    trend: "31.3 %",
    trendUp: true,
    icon: CheckCircle2,
    iconBg: "bg-white text-[#31564E]",
    cardStyle: "bg-[#2D4A43] text-white",
  },
  {
    title: "Total Courses",
    value: "124",
    subtitle: "142 this month",
    trend: "+12.5%",
    trendUp: true,
    icon: BookOpen,
    iconBg: "bg-[#FF7A00]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "Draft Courses",
    value: "26",
    subtitle: "Include all institutes",
    trend: "17.3 %",
    trendUp: true,
    icon: FileEdit,
    iconBg: "bg-[#7F3DFF]",
    cardStyle: "bg-white text-foreground",
  },
  {
    title: "Institutes Using Master",
    value: "86",
    subtitle: "Include all plan types",
    trend: "12.3 %",
    trendUp: true,
    icon: Building2,
    iconBg: "bg-[#8B4513]",
    cardStyle: "bg-white text-foreground",
  },
];

interface CourseStaticProps {
  onAddClick: () => void;
  onAuditClick: () => void;
}

const CourseStatic = ({ onAddClick, onAuditClick }: CourseStaticProps) => {
  const [_isOpen, _setIsOpen] = React.useState(false);
  const [showCreateModal, setShowCreateModal] = React.useState(false);

  const handleCreateNew = () => {
    setShowCreateModal(false);
    onAddClick();
  };

  const handleCloneMaster = () => {
    setShowCreateModal(false);
    // Add clone logic if needed, for now just open add view
    onAddClick();
  };

  return (
    <div className="space-y-6">
      <CreateCourseModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateNew={handleCreateNew}
        onCloneMaster={handleCloneMaster}
      />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-foreground">
            Courses & CMS
          </h2>
          <p className="text-md text-muted-foreground flex items-center gap-2 max-w-2xl">
            Manage global courses, control content visibility, and publish
            learning modules across institutes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={onAuditClick}
            className="h-11 rounded-xl px-4 gap-2 border-[#31564E]/30 text-[#31564E] hover:bg-[#31564E]/5 text-sm font-normal"
          >
            Audit & Logging
          </Button>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="h-11 rounded-xl px-6 gap-2 bg-black hover:bg-black/90 text-white"
          >
            Create Course
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col justify-between rounded-[24px] p-6 shadow-sm border border-border/50 hover:shadow-md transition-all h-[160px]",
              stat.cardStyle
            )}
          >
            <div className="flex justify-between items-start w-full">
              <span className="text-3xl font-bold tracking-tight">
                {stat.value}
              </span>
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-[18px] shadow-sm",
                  stat.iconBg,
                  !stat.iconBg.includes("text") && "text-white"
                )}
              >
                <stat.icon className="h-6 w-6" />
              </div>
            </div>

            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col gap-1">
                <span
                  className={cn(
                    "text-[15px] font-semibold leading-tight",
                    stat.cardStyle.includes("text-white")
                      ? "text-white"
                      : "text-foreground"
                  )}
                >
                  {stat.title}
                </span>
                <span
                  className={cn(
                    "text-[13px] font-medium",
                    stat.cardStyle.includes("text-white")
                      ? "text-white/70"
                      : "text-muted-foreground"
                  )}
                >
                  {stat.subtitle}
                </span>
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold border",
                  stat.trendUp
                    ? stat.cardStyle.includes("text-white")
                      ? "bg-white/10 border-transparent text-[#32D583]"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100"
                    : "bg-red-50 text-red-600 border-red-100"
                )}
              >
                {stat.trendUp ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
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

export default CourseStatic;
