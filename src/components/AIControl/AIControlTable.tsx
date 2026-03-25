"use client";

import {
  Activity,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  MoreVertical,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const aiModules = [
  {
    id: "speech-tutor",
    name: "Speaking Tutor AI",
    model: "GPT-4o (Real-Time)",
    usage: "1.2M Tokens",
    latency: "340ms",
    accuracy: "98.2%",
    status: "Active",
    type: "LSRW: Speaking",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "writing-feedback",
    name: "Writing Feedback AI",
    model: "GPT-3.5 Turbo",
    usage: "242k Tokens",
    latency: "612ms",
    accuracy: "96.5%",
    status: "Active",
    type: "LSRW: Writing",
    icon: Cpu,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "content-generator",
    name: "Automatic Lesson Generator",
    model: "Claude 3.5 Sonnet",
    usage: "842k Tokens",
    latency: "1.2s",
    accuracy: "94.8%",
    status: "Active",
    type: "CMS Tools",
    icon: Activity,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "proctoring-ai",
    name: "Smart Proctoring",
    model: "OpenAI Vision",
    usage: "15.4k Sessions",
    latency: "840ms",
    accuracy: "99.1%",
    status: "Disabled",
    type: "Security",
    icon: ShieldCheck,
    color: "bg-rose-100 text-rose-600",
  },
];

const FilterDropdown = ({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

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

interface AIControlTableProps {
  onViewDetail: (moduleId: string) => void;
}

const AIControlTable = ({ onViewDetail }: AIControlTableProps) => {
  return (
    <div className="mt-8 space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[300px] max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            aria-label="Search AI Module"
            placeholder="Search AI Module, Model Name..."
            className="h-11 w-full rounded-lg border border-border bg-[#F1F1F1]/50 pl-10 pr-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <FilterDropdown
          label="Model"
          value="All Types"
          options={["All Types", "GPT-4o", "Claude 3.5", "GPT-3.5 Turbo"]}
        />
        <FilterDropdown
          label="Status"
          value="All"
          options={["All", "Active", "Disabled", "Error"]}
        />
        <FilterDropdown
          label="Sort"
          value="Usage High to low"
          options={["Usage High to low", "Usage Low to high", "Latency"]}
        />
      </div>

      <div className="rounded-[20px] bg-white shadow-sm border border-border/50 overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-border/50">
          <h3 className="text-xl font-semibold">AI Components Management</h3>
          <span className="text-sm text-muted-foreground">
            Total Operational Modules:{" "}
            <span className="font-bold text-foreground">12</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 text-muted-foreground border-b border-border/50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-left">
                  Module Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-left">
                  Configured Model
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-left">
                  Usage
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-left">
                  Avg. Latency
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-left">
                  Accuracy
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-left">
                  Status
                </th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {aiModules.map((module, idx) => (
                <tr
                  key={module.id}
                  onClick={() => onViewDetail(module.id)}
                  className={cn(
                    "hover:bg-[#F7FFFA] transition-colors group cursor-pointer",
                    idx % 2 === 1 && "bg-slate-50/30"
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-10 w-10 relative shrink-0 flex items-center justify-center rounded-xl",
                          module.color
                        )}
                      >
                        <module.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground leading-tight group-hover:text-[#31564E] transition-colors">
                          {module.name}
                        </span>
                        <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-tight mt-0.5">
                          {module.type}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-900">
                        {module.model}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-slate-800">
                      {module.usage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-slate-700">
                      {module.latency}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col gap-1.5 items-center">
                      <span className="text-[12px] font-bold text-[#32D583]">
                        {module.accuracy}
                      </span>
                      <div className="h-1 w-16 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full"
                          style={{ width: module.accuracy }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold",
                        module.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      )}
                    >
                      {module.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Settings"
                        className="p-1.5 text-slate-400 hover:text-[#31564E] hover:bg-white hover:shadow-sm rounded-lg transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          // handle config
                        }}
                      >
                        <Settings className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="More Actions"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 text-muted-foreground hover:bg-white hover:shadow-sm rounded-lg transition-all"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Custom Pagination (Minimal) */}
        <div className="p-6 flex items-center justify-between">
          <span className="text-sm text-slate-400">
            Page <span className="font-bold text-slate-900">1</span> of 2
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous Page"
              className="h-8 w-8 flex items-center justify-center rounded-lg border border-border bg-white text-slate-400 hover:bg-slate-50 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next Page"
              className="h-8 w-8 flex items-center justify-center rounded-lg bg-black text-white shadow-lg hover:bg-black/80 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIControlTable;
