import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ListFilterPlus,
  MoreVertical,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TutorTableProps {
  onViewProfile: () => void;
}

const TutorTable = ({ onViewProfile }: TutorTableProps) => {
  const [activeTab, setActiveTab] = React.useState<"all" | "requests">("all");

  const tutors = [
    {
      id: 1,
      name: "Sarah Jenkins",
      email: "sarah.j@gmail.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      courses: ["IELTS Advanced", "Conversational"],
      classes: 156,
      attendance: 98,
      rating: 4.9,
      performance: 92,
      perfText: "Excellence",
      status: "Active",
    },
    {
      id: 2,
      name: "Mark Robinson",
      email: "m.robinson@outlook.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      courses: ["Conversational"],
      classes: 84,
      attendance: 85,
      rating: 4.2,
      performance: 85,
      perfText: "Good",
      status: "Active",
    },
    {
      id: 3,
      name: "Johnathan Doe",
      email: "j.doe@example.com",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      courses: ["Academic Writing", "TOEFL Prep"],
      classes: 210,
      attendance: 96,
      rating: 4.9,
      performance: 92,
      perfText: "Excellence",
      status: "Active",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "e.wilson@example.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      courses: ["Grammar Basics"],
      classes: 42,
      attendance: 62,
      rating: 3.6,
      performance: 62,
      perfText: "Average",
      status: "Active",
    },
  ];

  const requests = [
    {
      id: 1,
      name: "Sarah Jenkins",
      email: "sarah.j@gmail.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      qualification: "Ph.D In Physics",
      experience: "8 Years",
      appliedDate: "Oct,12 2025",
      status: "Pending",
    },
    {
      id: 2,
      name: "James Wilson",
      email: "j.wilson@academic.io",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      qualification: "M.A. Literature",
      experience: "4 Years",
      appliedDate: "Oct,12 2025",
      status: "Pending",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      email: "elena.rod@lang.net",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      qualification: "M.S. Mathematics",
      experience: "12 Years",
      appliedDate: "Oct,12 2025",
      status: "Pending",
    },
    {
      id: 4,
      name: "Marcus Thorne",
      email: "m.thorne@tech.io",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      qualification: "B.S. Computer Science",
      experience: "2 Years",
      appliedDate: "Oct,12 2025",
      status: "Pending",
    },
  ];

  const displayData =
    activeTab === "all" ? [...tutors, ...tutors] : [...requests, ...requests];

  return (
    <div className="rounded-[24px] bg-white shadow-sm border border-border/50 overflow-hidden mt-6">
      {/* Top Header with Tabs and Search */}
      <div className="p-6 md:p-8 border-b border-border/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-8 border-b-2 border-transparent">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "relative pb-4 text-[20px] font-semibold font-inter transition-all",
                activeTab === "all"
                  ? "text-foreground"
                  : "text-black/60 hover:text-foreground"
              )}
            >
              All Tutors
              {activeTab === "all" && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#31564E]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={cn(
                "relative pb-4 text-[20px] font-semibold font-inter transition-all flex items-center gap-2",
                activeTab === "requests"
                  ? "text-foreground"
                  : "text-slate-400 hover:text-foreground"
              )}
            >
              Tutor Requests
              {activeTab === "all" && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-black">
                  12
                </span>
              )}
              {activeTab === "requests" && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#31564E]" />
              )}
            </button>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Tutor, email id..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-[16px] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#31564E]/10 focus:border-[#31564E]/30 transition-all font-regular font-inter"
            />
          </div>
        </div>

        {/* Filters Row - Only for "All Tutors" */}
        {activeTab === "all" && (
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex flex-wrap items-center gap-3">
              {[
                "All Tutors",
                "All Courses",
                "All Ratings",
                "Status: Active",
                "Sort By: A-Z",
              ].map((filter, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="h-11 rounded-xl px-4 gap-4 border-slate-200 bg-white text-[16px] font-regular font-inter text-black hover:bg-slate-50 shadow-sm"
                >
                  {filter}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-[16px] font-regular font-inter text-[#31564E] hover:text-foreground transition-colors">
              <ListFilterPlus className="h-4 w-4" />
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-black/80 font-medium font-inter whitespace-nowrap text-[16px] border-b border-border/50">
              <th className="px-6 py-5 w-12 text-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 accent-[#31564E]"
                />
              </th>
              {activeTab === "all" ? (
                <>
                  <th className="px-6 py-5">Tutor Name</th>
                  <th className="px-6 py-5">Assigned Courses</th>
                  <th className="px-6 py-5">Classes</th>
                  <th className="px-6 py-5 text-center">Attendance</th>
                  <th className="px-6 py-5">Rating</th>
                  <th className="px-6 py-5">Performance</th>
                </>
              ) : (
                <>
                  <th className="px-6 py-5">Applicant Name</th>
                  <th className="px-6 py-5">Qualification</th>
                  <th className="px-6 py-5">Experience</th>
                  <th className="px-6 py-5">Applied Date</th>
                </>
              )}
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {displayData.map((item: any, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                onClick={onViewProfile}
              >
                <td
                  className="px-6 py-5 text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-[#31564E]"
                  />
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold font-inter text-[#0F172A] leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[14px] text-[#64748B] font-inter">
                        {item.email}
                      </span>
                    </div>
                  </div>
                </td>

                {activeTab === "all" ? (
                  <>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1.5 max-w-[180px]">
                        {item.courses?.map((course: string, i: number) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[14px] font-medium font-inter text-black"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-[16px] font-medium font-inter text-black">
                      {item.classes}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span
                        className={cn(
                          "text-[16px] font-medium font-inter",
                          item.attendance >= 90
                            ? "text-[#248F5F]"
                            : "text-[#FF7F38]"
                        )}
                      >
                        {item.attendance}%
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[16px] font-medium font-inter text-black/80">
                          {item.rating}
                        </span>
                        <Star className="h-3.5 w-3.5 text-emerald-500 fill-emerald-500" />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-1.5 min-w-[140px]">
                        <div className="flex items-center justify-between text-[12px] font-inter text-black/70">
                          <span>
                            {item.performance}/100 - {item.perfText}
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
                              item.performance >= 90
                                ? "bg-[#007FFF]"
                                : "bg-[#FF7F38]"
                            )}
                            style={{ width: `${item.performance}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1.5 rounded-full bg-[#248F5F]/40 text-[#248F5F] text-[14px] font-medium font-inter border border-emerald-100">
                        {item.status}
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-5 text-[16px] font-medium font-inter text-black/80">
                      {item.qualification}
                    </td>
                    <td className="px-6 py-5 text-[16px] font-medium font-inter text-black/80">
                      {item.experience}
                    </td>
                    <td className="px-6 py-5 text-[16px] font-medium font-inter text-black/80">
                      {item.appliedDate}
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1.5 rounded-full bg-[#FF7F38]/40 text-[#FF7F38] text-[14px] font-medium font-inter border border-orange-100">
                        {item.status}
                      </span>
                    </td>
                  </>
                )}

                <td className="px-6 py-5" onClick={(e) => e.stopPropagation()}>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-black">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="p-8 flex items-center justify-between border-t border-border/50">
        <button className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <button className="h-10 w-10 flex items-center justify-center rounded-full border-3 border-[#31564E] bg-white text-[#31564E] font-regular font-inter text-[16px] shadow-sm">
            1
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
            2
          </button>
          <span className="px-2 text-slate-300 font-bold">...</span>
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground font-regular font-inter text-[16px] hover:bg-slate-50 transition-all">
            10
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[14px] font-regular font-inter text-[#64748B]">
            Showing{" "}
            <span className="text-[14px] font-semibold text-[#0F172A]">
              1-8
            </span>{" "}
            of{" "}
            <span className="text-[14px] font-semibold text-[#0F172A]">
              1,540
            </span>
          </span>
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white shadow-xl hover:bg-black/90 transition-all group">
            <ArrowRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorTable;
