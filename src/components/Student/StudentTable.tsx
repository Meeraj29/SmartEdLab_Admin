"use client";

import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Search,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const students = [
  {
    id: 1,
    name: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    plan: "Premium Pro",
    frequency: "Monthly",
    progress: 78,
    aiUsage: "12.4k",
    expiryDate: "Oct 24, 2026",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "Mark Robinson",
    email: "m.robinson@outlook.com",
    plan: "Basic Plan",
    frequency: "Annually",
    progress: 78,
    aiUsage: "0.8k",
    expiryDate: "Sept 24, 2026",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
  },
  {
    id: 3,
    name: "Elena Sofia",
    email: "elena.sofia@edu.com",
    plan: "Premium Pro",
    frequency: "Monthly",
    progress: 78,
    aiUsage: "42.1k",
    expiryDate: "Oct 24, 2026",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    id: 4,
    name: "Kevin Miller",
    email: "k.miller@gmail.com",
    plan: "Basic Plan",
    frequency: "Annually",
    progress: 78,
    aiUsage: "0.8k",
    expiryDate: "Sept 24, 2026",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    plan: "Premium Pro",
    frequency: "Monthly",
    progress: 78,
    aiUsage: "12.4k",
    expiryDate: "Oct 24, 2026",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2",
  },
  {
    id: 6,
    name: "Mark Robinson",
    email: "m.robinson@outlook.com",
    plan: "Basic Plan",
    frequency: "Annually",
    progress: 78,
    aiUsage: "0.8k",
    expiryDate: "Sept 24, 2026",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark2",
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
            {label && <span className="text-slate-400">{label}:</span>}
            <span className="text-foreground font-medium">{value}</span>
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

interface StudentTableProps {
  onViewProfile: (studentId: number | string) => void;
}

const StudentTable = ({ onViewProfile }: StudentTableProps) => {
  return (
    <div className="mt-8 space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-3 border p-4 rounded-xl bg-white shadow-sm">
        <div className="relative flex-1 min-w-[300px] max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by student, email id..."
            className="h-11 w-full rounded-lg border border-border bg-[#F1F1F1]/50 pl-10 pr-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <FilterDropdown
          label="Plan"
          value="All Types"
          options={["All Types", "Plan - 1", "Plan - 2", "Plan - 3"]}
        />
        <FilterDropdown
          label="Status"
          value="Active"
          options={["Active", "Expired", "Suspended"]}
        />

        <FilterDropdown
          label=""
          value="Last 30 days"
          options={["Last 30 days", "This Week", "Last 3 Months"]}
          icon={Calendar}
        />

        <FilterDropdown
          label="AI Usage"
          value="High"
          options={["High", "Low", "Medium"]}
        />
        <FilterDropdown
          label="Sort By"
          value="High to low"
          options={["High to low", "Low to high", "A-Z", "Z-A"]}
        />
      </div>

      <div className="rounded-[10px] bg-white shadow-sm border border-border/50 overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-border/50">
          <h3 className="text-xl font-semibold">Student List</h3>
          <span className="text-sm text-muted-foreground">
            Showing <span className="font-bold text-foreground">1-8</span> of{" "}
            <span className="font-bold text-foreground">12,540</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 text-muted-foreground border-b border-border/50 text-center">
                <th className="px-6 py-4 w-12 text-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-[#31564E] cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-left">
                  Student
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-left">
                  Plan
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-left">
                  Progress
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-left">
                  AI Usage
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-left whitespace-nowrap">
                  Expiry Date
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-left">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {students.map((student, idx) => (
                <tr
                  key={student.id}
                  onClick={() => onViewProfile(student.id)}
                  className={cn(
                    "hover:bg-[#F7FFFA] transition-colors group cursor-pointer",
                    idx % 2 === 1 && "bg-slate-50/30"
                  )}
                >
                  <td className="px-6 py-4 text-center">
                    <input
                      type="checkbox"
                      onClick={(e) => e.stopPropagation()}
                      className="h-4 w-4 rounded border-slate-300 accent-[#31564E] cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 relative shrink-0">
                        <Image
                          src={student.avatar}
                          alt={student.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover border border-border"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-md font-semibold text-foreground leading-tight">
                          {student.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {student.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {student.plan}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        ({student.frequency})
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 w-32">
                      <div className="flex justify-between items-center text-[10px] font-bold text-black">
                        <span>{student.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#007FFF] rounded-full transition-all"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold">
                        {student.aiUsage}
                      </span>
                      <span className="text-[10px] text-muted-foreground px-1 py-0.5 rounded">
                        (Tokens)
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground font-medium">
                    {student.expiryDate}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold bg-[#248F5F]/40 text-[#248F5F]">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-muted-foreground hover:bg-white hover:shadow-sm rounded-lg transition-all"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Custom Pagination */}
        <div className="p-6 flex items-center justify-between">
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-slate-400 hover:bg-slate-50 transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-[#31564E] bg-white text-[#31564E] font-bold shadow-sm">
              1
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-muted-foreground font-medium hover:bg-slate-50">
              2
            </button>
            <span className="px-2 text-muted-foreground">...</span>
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-white text-muted-foreground font-medium hover:bg-slate-50">
              10
            </button>
          </div>

          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-black/80 transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
