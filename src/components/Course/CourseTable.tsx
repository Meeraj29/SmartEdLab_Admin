"use client";

import {
  BookOpen,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  Globe,
  ListFilter,
  Lock,
  Megaphone,
  MoreVertical,
  Palette,
  Search,
  Terminal,
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

const courses = [
  {
    id: 1,
    name: "Basic English Foundations",
    catalogId: "Master Catalog #CS-102",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Public",
    lastUpdate: "Oct 24, 2023",
    status: "Published",
    icon: Code2,
    iconBg: "bg-blue-50 text-blue-500",
  },
  {
    id: 2,
    name: "Beginner English Communication",
    catalogId: "Master Catalog #DS-501",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Private",
    lastUpdate: "Oct 24, 2023",
    status: "Published",
    icon: Terminal,
    iconBg: "bg-orange-50 text-orange-500",
  },
  {
    id: 3,
    name: "Elementary English Grammar",
    catalogId: "Master Catalog #UX-004",
    modules: "15 Modules",
    version: "V3.0.0",
    visibility: "Internal",
    lastUpdate: "Oct 24, 2023",
    status: "Draft",
    icon: Palette,
    iconBg: "bg-purple-50 text-purple-500",
  },
  {
    id: 4,
    name: "Intermediate English Communication",
    catalogId: "Master Catalog #DS-501",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Public",
    lastUpdate: "Oct 24, 2023",
    status: "Draft",
    icon: Megaphone,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: 5,
    name: "Advanced English Fluency",
    catalogId: "Master Catalog #CS-102",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Private",
    lastUpdate: "Oct 24, 2023",
    status: "Published",
    icon: Code2,
    iconBg: "bg-blue-50 text-blue-500",
  },
  {
    id: 6,
    name: "English Speaking Mastery",
    catalogId: "Master Catalog #DS-501",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Public",
    lastUpdate: "Oct 24, 2023",
    status: "Published",
    icon: Megaphone,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: 7,
    name: "English Listening Skills",
    catalogId: "Master Catalog #CS-102",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Internal",
    lastUpdate: "Nov 18, 2023",
    status: "Draft",
    icon: Code2,
    iconBg: "bg-blue-50 text-blue-500",
  },
  {
    id: 8,
    name: "English Reading Skills",
    catalogId: "Master Catalog #DS-501",
    modules: "12 Modules",
    version: "V2.4.1",
    visibility: "Public",
    lastUpdate: "Oct 24, 2023",
    status: "Published",
    icon: Building2,
    iconBg: "bg-slate-100 text-slate-600",
  },
];

const FilterDropdown = ({
  label,
  value,
  options,
  icon: Icon,
}: {
  label: string;
  value: string;
  options: string[];
  icon?: React.ElementType;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative"
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-10 rounded-xl px-4 gap-2 border-border/50 bg-white text-sm font-normal text-muted-foreground"
          >
            {Icon && <Icon className="h-4 w-4 text-slate-400" />}
            {label && (
              <span className="text-[16px] text-black/70 font-inter font-regular">
                {label}:
              </span>
            )}
            <span className="text-black text-[16px] font-inter font-regular">
              {value}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[180px] rounded-xl p-1 shadow-xl border-l-[3px] border-l-[#31564E]"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {options.map((opt) => (
            <DropdownMenuItem key={opt} className="rounded-lg cursor-pointer">
              {opt}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

interface CourseTableProps {
  onViewDetails: (courseId: number | string) => void;
}

const CourseTable = ({ onViewDetails }: CourseTableProps) => {
  return (
    <div className="mt-8 bg-white rounded-[24px] border border-border/50 shadow-sm overflow-hidden p-6 md:p-8 space-y-4">
      {/* Top Section - Title and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-[20px] font-semibold text-foreground font-inter">
          Master Course
        </h2>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search course name, module, or instructor..."
            className="h-11 w-full rounded-[14px] border border-border bg-[#F1F1F1]/50 pl-10 pr-4 text-[16px] font-inter font-regular outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <FilterDropdown
            label="Status"
            value="All"
            options={["All", "Published", "Draft"]}
          />
          <FilterDropdown
            label="Version"
            value="All"
            options={["All", "V2.4.1", "V3.0.0"]}
          />
          <FilterDropdown
            label="Visibility"
            value="All"
            options={["All", "Public", "Private", "Internal"]}
          />
          <FilterDropdown
            label="Status"
            value="All"
            options={["All", "Active", "Archived"]}
          />
        </div>
        <button className="flex items-center gap-2 text-[16px] font-inter font-regular text-[#31564E] hover:text-foreground transition-colors mr-2">
          <ListFilter className="h-4 w-4" />
          Reset Filters
        </button>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-muted-foreground text-[16px] font-inter font-medium text-black/80 border-b border-border/50">
              <th className="px-4 py-4">Course Name</th>
              <th className="px-4 py-4 text-center">Modules</th>
              <th className="px-4 py-4">Version</th>
              <th className="px-4 py-4">Visibility</th>
              <th className="px-4 py-4">Last Update</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/20">
            {courses.map((course, idx) => (
              <tr
                key={course.id}
                onClick={() => onViewDetails(course.id)}
                className={cn(
                  "hover:bg-[#F8FAFB] transition-colors group cursor-pointer",
                  idx % 2 === 1 && "bg-[#F7FFFA]/30"
                )}
              >
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-10 w-10 flex items-center justify-center rounded-full shrink-0",
                        course.iconBg
                      )}
                    >
                      <course.icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold font-inter text-black leading-tight">
                        {course.name}
                      </span>
                      <span className="text-[14px] font-regular font-inter text-black/70 mt-1">
                        {course.catalogId}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5 text-center text-[16px] font-medium font-inter text-black">
                  {course.modules}
                </td>
                <td className="px-4 py-5 text-[16px] font-medium font-inter text-black/80">
                  {course.version}
                </td>
                <td className="px-4 py-5">
                  <div className="flex items-center gap-2 text-[16px] font-medium font-inter text-black">
                    {course.visibility === "Public" ? (
                      <Globe className="h-3.5 w-3.5 text-slate-500" />
                    ) : course.visibility === "Private" ? (
                      <Lock className="h-3.5 w-3.5 text-slate-500" />
                    ) : (
                      <FileText className="h-3.5 w-3.5 text-slate-500" />
                    )}
                    {course.visibility}
                  </div>
                </td>
                <td className="px-4 py-5 text-[16px] font-medium font-inter text-black">
                  {course.lastUpdate}
                </td>
                <td className="px-4 py-5">
                  <span
                    className={cn(
                      "px-4 py-1.5 rounded-full text-[16px] font-medium font-inter border",
                      course.status === "Published"
                        ? "bg-[#D1FAE5] text-[#059669] border-[#D1FAE5]"
                        : "bg-[#FEF3C7] text-[#D97706] border-[#FEF3C7]"
                    )}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="px-4 py-5 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl text-black hover:text-slate-700 hover:bg-slate-100 transition-all"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-[200px] rounded-[18px] p-2 shadow-xl border border-slate-100 bg-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {[
                        { label: "Modify modules", icon: BookOpen },
                        { label: "Update lessons", icon: FileText },
                        { label: "Adjust Structure", icon: ListFilter },
                      ].map((action) => (
                        <DropdownMenuItem
                          key={action.label}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-700 cursor-pointer hover:bg-[#2D4A43]/5 hover:text-[#2D4A43] transition-colors"
                        >
                          <action.icon className="h-4 w-4 text-slate-400" />
                          {action.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Re-designed Pagination to match Image */}
      <div className="pt-6 flex flex-col items-center gap-6">
        <div className="flex items-center justify-between w-full">
          <button className="h-12 w-12 flex items-center justify-center rounded-full border border-border bg-white text-slate-400 hover:bg-slate-50 shadow-sm transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-full border-3 border-[#31564E] bg-white text-[#31564E] font-regular font-inter text-[16px] shadow-sm">
              1
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-muted-foreground font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
              2
            </button>
            <span className="px-2 text-muted-foreground font-regular font-inter text-[16px]">
              ...
            </span>
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-muted-foreground font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
              10
            </button>
          </div>

          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-black/80 transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <span className="text-[14px] font-semibold font-inter text-[#64748B]">
          Showing{" "}
          <span className="font-[#0F172A] font-semibold font-inter text-[14px] text-foreground">
            1-8
          </span>{" "}
          of{" "}
          <span className="font-[#0F172A] font-semibold font-inter text-[14px] text-foreground">
            1,540
          </span>
        </span>
      </div>
    </div>
  );
};

export default CourseTable;
