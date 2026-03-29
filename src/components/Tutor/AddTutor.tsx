"use client";

import {
  ArrowLeft,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronDown,
  Plus,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import containerImg from "../../assets/Container.png";

interface AddTutorProps {
  onBack: () => void;
  onSuccess: () => void;
}

const AddTutor = ({ onBack, onSuccess }: AddTutorProps) => {
  const [step, setStep] = React.useState(1);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  React.useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSuccessModal]);

  const [languages, setLanguages] = React.useState([
    "English",
    "Spanish",
    "French",
  ]);
  const [isAiEnabled, setIsAiEnabled] = React.useState(true);

  // Step 2 State
  const [assignedCourses, setAssignedCourses] = React.useState<string[]>([
    "English Beginner",
    "IELTS Preparation",
  ]);

  const allCourses = [
    { name: "English Beginner", level: "Beginner", students: 125 },
    { name: "Business English", level: "Intermediate", students: 84 },
    { name: "IELTS Preparation", level: "Advanced", students: 210 },
    { name: "Spoken English Advanced", level: "Advanced", students: 62 },
    { name: "Creative Writing", level: "Intermediate", students: 45 },
    { name: "Academic Grammar", level: "Advanced", students: 110 },
  ];

  // Step 3 State: Permissions
  const [permissions, setPermissions] = React.useState({
    canViewAssignedCourses: true,
    canUpdateLessonMaterials: false,
    canViewStudentProgress: true,
    canSendFeedback: true,
    canScheduleLiveClasses: true,
    canStartLiveSessions: true,
    canCancelSessions: false,
    useAiSpeakingEvaluation: true,
    useAiCorrectionTools: true,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else setShowSuccessModal(true);
  };

  const handlePrev = () => {
    if (step === 4) setStep(3);
    else if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
    else onBack();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 duration-300 animate-in fade-in">
          <div className="w-full max-w-[900px] bg-white rounded-[32px] p-8 md:p-12 shadow-2xl space-y-8 duration-300 relative overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="h-16 w-16 rounded-full bg-[#A7F3D0] flex items-center justify-center text-[#064E3B] shrink-0">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="space-y-1.5">
                <h2 className="text-[24px] font-inter font-bold text-[#111827] tracking-tight">
                  Tutor Created Successfully
                </h2>
                <p className="text-[16px] font-inter font-regular text-[#6B7280]">
                  The tutor's account has been finalized and configured.
                </p>
              </div>
            </div>

            <div className="py-7 px-10 rounded-[20px] bg-[#F1F5F9]/50 border border-slate-100 space-y-4 mx-auto w-full">
              {[
                "Tutor profile created",
                "Courses assigned",
                "Live class access enabled",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="h-5 w-5 rounded-full bg-[#31564E] flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <span className="text-[16px] font-inter font-medium text-[#334155] tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                onClick={onSuccess}
                className="w-full h-14 bg-black hover:bg-black/90 text-white rounded-[16px] text-[16px] font-semibold font-inter shadow-xl shadow-black/10 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section - Pixel perfect from image */}
      <div className="fixed top-[80px] left-0 right-0 z-20 bg-[#F7FFFA]/95 backdrop-blur-md border-b border-border/10">
        <div className="px-4 md:px-8 lg:px-12 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-slate-50 transition-all shadow-sm"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex flex-col">
                <h2 className="text-[20px] font-semibold text-foreground">
                  Add New Tutor
                </h2>
                <p className="text-[14px] font-inter text-muted-foreground">
                  {step === 1
                    ? "Create and configure a tutor profile for the platform."
                    : step === 2
                      ? "Map existing courses to this new tutor profile."
                      : step === 3
                        ? "Set access levels and functional permissions for the tutor."
                        : "Configure virtual classroom settings and availability schedules."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={handlePrev}
                className="h-11 rounded-xl px-6 text-[16px] font-inter border-border/50 text-[#31564E] bg-white hover:bg-slate-50 transition-all font-medium flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {step === 1
                  ? "Go Back"
                  : step === 2
                    ? "Basic details"
                    : step === 3
                      ? "Assign course"
                      : "Permission Level"}
              </Button>
              <Button
                onClick={handleNext}
                className={cn(
                  "h-11 rounded-xl px-8 font-medium shadow-md transition-all text-[16px]",
                  step === 4
                    ? "bg-[#31564E] hover:bg-[#1E3A34] text-white"
                    : "bg-black hover:bg-black/90 text-white shadow-black/10"
                )}
              >
                {step === 1
                  ? "Next: Assign Course"
                  : step === 2
                    ? "Next: Permission Level"
                    : step === 3
                      ? "Next: Live Class Access"
                      : "Submit Tutor"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for Fixed Header */}
      <div className="h-[70px]" />

      {step === 1 ? (
        <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-semibold text-[#31564E]">
                Step: 1
              </span>
              <h3 className="text-[20px] font-semibold text-[#31564E]">
                Basic Details
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-6">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="space-y-3">
                <label
                  htmlFor="tutor-fullname"
                  className="text-[16px] font-inter text-slate-800 flex items-center gap-1"
                >
                  Tutor Full Name{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="tutor-fullname"
                  type="text"
                  placeholder="Enter course name"
                  className="h-12 w-full rounded-xl border-none bg-[#F5F5F5] px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="tutor-mobile"
                  className="text-[16px] font-inter text-slate-800 flex items-center gap-1"
                >
                  Mobile no <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="tutor-mobile"
                  type="text"
                  placeholder="Enter mobile number"
                  className="h-12 w-full rounded-xl border-none bg-[#F5F5F5] px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="tutor-email"
                  className="text-[16px] font-inter text-slate-800 flex items-center gap-1"
                >
                  Email id <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="tutor-email"
                  type="email"
                  placeholder="Enter email id"
                  className="h-12 w-full rounded-xl border-none bg-[#F5F5F5] px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="tutor-experience"
                  className="text-[16px] font-inter text-slate-800 flex items-center gap-1"
                >
                  Experience level{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="relative">
                  <select
                    id="tutor-experience"
                    className="h-12 w-full appearance-none rounded-xl border-none bg-[#F5F5F5] px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all cursor-pointer"
                  >
                    <option>Select Level</option>
                    <option>Beginner (1-2 years)</option>
                    <option>Intermediate (3-5 years)</option>
                    <option>Advanced (5+ years)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600 pointer-events-none" />
                </div>
              </div>

              <div className="md:col-span-2 space-y-3 mt-1">
                <span className="text-[16px] font-inter text-slate-800">
                  Language Specialization
                </span>
                <div className="p-5 rounded-[20px] bg-[#F5F5F5] min-h-[120px] flex items-center justify-between gap-6 transition-all hover:bg-[#F0F0F0]">
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-[#31564E] text-white pl-4 pr-2 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform hover:scale-105"
                      >
                        {lang}
                        <div
                          className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20"
                          onClick={() =>
                            setLanguages(languages.filter((_, i) => i !== idx))
                          }
                        >
                          <X className="h-2.5 w-2.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="h-9 px-4 rounded-full bg-black text-white text-[14px] font-semibold font-inter flex items-center gap-2 hover:bg-black/90 transition-all whitespace-nowrap shadow-md">
                    <Plus className="h-3.5 w-3.5" />
                    Add Language
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="text-[16px] font-inter text-slate-800">
                Profile Photo
              </span>
              <div className="w-full h-[220px] md:h-full max-h-[325px] rounded-[20px] bg-[#F5F5F5] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#EFEFEF] transition-all group relative border-2 border-transparent hover:border-[#31564E]/10">
                <div className="h-12 w-12 rounded-xl bg-[#D4DFDB] flex items-center justify-center text-[#31564E] group-hover:scale-110 transition-all shadow-sm">
                  <Camera className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <p className="text-[14px] font-semibold text-slate-800">
                    Drag photo here
                  </p>
                  <p className="text-[10px] text-slate-400 font-inter mt-0.5 uppercase tracking-tighter">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-8 space-y-3 flex flex-col">
                <label
                  htmlFor="tutor-bio"
                  className="text-[16px] font-inter text-slate-800"
                >
                  Tutor Bio
                </label>
                <textarea
                  id="tutor-bio"
                  placeholder="Briefly describe the tutor's background and teaching philosophy..."
                  className="w-full flex-1 min-h-[180px] rounded-[20px] border-none bg-[#F5F5F5] p-6 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all resize-none placeholder:text-slate-400 shadow-inner"
                />
              </div>

              <div className="lg:col-span-4 space-y-3 flex flex-col justify-end">
                <span className="text-sm font-bold opacity-0 pointer-events-none select-none">
                  AI Profile Tuning
                </span>
                <div className="flex-1 rounded-[20px] bg-[#31564E] p-8 text-white space-y-5 shadow-xl shadow-[#31564E]/10 flex flex-col justify-center transition-all hover:bg-[#1E3A34]">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h3 className="text-[16px] font-semibold  font-inter tracking-wide">
                      AI ENHANCEMENT
                    </h3>
                  </div>
                  <p className="text-[14px] font-inter opacity-80 leading-relaxed">
                    Enable automatic background removal and lighting correction
                    for this tutor.
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <div
                      className={cn(
                        "h-6 w-11 rounded-full relative transition-all duration-300 cursor-pointer shadow-inner",
                        isAiEnabled ? "bg-[#7F3DFF]" : "bg-white/20"
                      )}
                      onClick={() => setIsAiEnabled(!isAiEnabled)}
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-white absolute top-1 transition-all duration-300 shadow-sm",
                          isAiEnabled ? "right-1" : "left-1"
                        )}
                      />
                    </div>
                    <span className="text-[14px] font-semibold font-inter">
                      {isAiEnabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : step === 2 ? (
        /* Step 2: Assign Course */
        <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10 relative transition-all duration-500 animate-in fade-in slide-in-from-right-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-semibold text-[#31564E] font-inter">
                Step: 2
              </span>
              <h3 className="text-[20px] font-semibold text-[#31564E] font-inter">
                Assign Course
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Course List */}
            <div className="lg:col-span-8 space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search courses by name or level..."
                  className="h-14 w-full rounded-2xl border border-slate-100 bg-[#F5F5F5] pl-14 pr-6 text-[14px] font-inter text-slate-800 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Course Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[14px] font-inter font-semibold text-slate-800 border-b border-slate-50">
                      <th className="pb-6 px-4">Course Name</th>
                      <th className="pb-6 px-4">Level</th>
                      <th className="pb-6 px-4">Students Enrolled</th>
                      <th className="pb-6 px-4 text-right">Assign</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {allCourses.map((course, i) => {
                      const isAssigned = assignedCourses.includes(course.name);
                      return (
                        <tr
                          key={i}
                          className={cn(
                            "transition-colors group",
                            isAssigned ? "bg-[#F7FFFA]" : "hover:bg-slate-50"
                          )}
                        >
                          <td className="py-6 px-4">
                            <span className="text-[14px] font-semibold font-inter text-slate-700">
                              {course.name}
                            </span>
                          </td>
                          <td className="py-6 px-4">
                            <span className="text-[14px] font-inter text-[#424754]">
                              {course.level}
                            </span>
                          </td>
                          <td className="py-6 px-4">
                            <span className="text-[14px] font-inter text-[#424754]">
                              {course.students}
                            </span>
                          </td>
                          <td className="py-6 px-4 text-right">
                            <div
                              className={cn(
                                "ml-auto h-6 w-11 rounded-full relative transition-all duration-300 cursor-pointer shadow-inner",
                                isAssigned ? "bg-[#0058BE]" : "bg-slate-200"
                              )}
                              onClick={() => {
                                if (isAssigned)
                                  setAssignedCourses(
                                    assignedCourses.filter(
                                      (c) => c !== course.name
                                    )
                                  );
                                else
                                  setAssignedCourses([
                                    ...assignedCourses,
                                    course.name,
                                  ]);
                              }}
                            >
                              <div
                                className={cn(
                                  "h-4 w-4 rounded-full bg-white absolute top-1 transition-all duration-300 shadow-sm",
                                  isAssigned ? "right-1" : "left-1"
                                )}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Assigned Summary Card */}
            <div className="lg:col-span-4 self-start">
              <div className="rounded-[16px] bg-[#31564E] overflow-hidden shadow-2xl shadow-[#1E3A34]/20">
                <div className="p-8 border-b border-white/5 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-emerald-400" />
                  </div>
                  <h4 className="text-[16px] font-semibold font-inter text-white">
                    Assigned Courses
                  </h4>
                </div>

                <div className="p-8 space-y-8">
                  {/* Selection Summary Box */}
                  <div className="p-6 rounded-[24px] bg-white/5 border border-white/5 space-y-2">
                    <p className="text-[12px] font-semibold font-inter text-white uppercase tracking-widest">
                      Selection Summary
                    </p>
                    <div className="flex items-center justify-between">
                      <h3 className="text-[24px] font-inter font-semibold text-black">
                        {assignedCourses.length} Courses
                      </h3>
                      <span className="text-[14px] font-inter font-medium text-white decoration-white underline underline-offset-4 cursor-pointer hover:text-white">
                        Clear All
                      </span>
                    </div>
                    <p className="text-[14px] font-inter font-medium text-white">
                      Selected for this tutor
                    </p>
                  </div>

                  {/* Course List Pills */}
                  <div className="space-y-3">
                    {assignedCourses.map((c) => (
                      <div
                        key={c}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white transition-all transform hover:scale-[1.02] shadow-lg shadow-black/5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-[#0058BE]" />
                          <span className="text-[14px] font-inter font-semibold text-slate-800">
                            {c}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            setAssignedCourses(
                              assignedCourses.filter((course) => course !== c)
                            )
                          }
                          className="h-6 w-6 flex items-center justify-center rounded-lg hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* AI Insight Box */}
                  <div className="p-6 rounded-[24px] bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                      <span className="text-[14px] font-inter font-semibold text-[#8127CF] uppercase tracking-widest">
                        AI Insight
                      </span>
                    </div>
                    <p className="text-[11px] font-inter text-white/80 leading-relaxed">
                      Based on experience, this tutor is also highly suitable
                      for{" "}
                      <span className="text-white/80 font-inter ">
                        Business English
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : step === 3 ? (
        /* Step 3: Permission Level */
        <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10 relative transition-all duration-500 animate-in fade-in slide-in-from-right-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-semibold font-inter text-[#31564E]">
                Step: 3
              </span>
              <h3 className="text-[20px] font-semibold font-inter text-[#31564E]">
                Permission Level
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Course Access */}
            <div className="p-8 rounded-[24px] bg-[#F7F9FF] border border-blue-50/50 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="text-[18px] font-bold fonnt-inter text-slate-800">
                  Course Access
                </h4>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Can view assigned courses",
                    key: "canViewAssignedCourses",
                  },
                  {
                    label: "Can update lesson materials",
                    key: "canUpdateLessonMaterials",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-[16px] font-inter text-slate-800 transition-colors group-hover:text-slate-900">
                      {item.label}
                    </span>
                    <div
                      className={cn(
                        "h-6 w-11 rounded-full relative cursor-pointer shadow-inner transition-all duration-300",
                        permissions[item.key as keyof typeof permissions]
                          ? "bg-blue-500"
                          : "bg-slate-200"
                      )}
                      onClick={() =>
                        togglePermission(item.key as keyof typeof permissions)
                      }
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-white absolute top-1 shadow-sm transition-all duration-300",
                          permissions[item.key as keyof typeof permissions]
                            ? "right-1"
                            : "left-1"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Student Interaction */}
            <div className="p-8 rounded-[24px] bg-[#F7F9FF] border border-blue-50/50 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="text-[18px] font-inter font-bold text-slate-800">
                  Student Interaction
                </h4>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Can view student progress",
                    key: "canViewStudentProgress",
                  },
                  {
                    label: "Can send feedback to students",
                    key: "canSendFeedback",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-[16px] font-inter text-slate-800 transition-colors group-hover:text-slate-900">
                      {item.label}
                    </span>
                    <div
                      className={cn(
                        "h-6 w-11 rounded-full relative cursor-pointer shadow-inner transition-all duration-300",
                        permissions[item.key as keyof typeof permissions]
                          ? "bg-blue-500"
                          : "bg-slate-200"
                      )}
                      onClick={() =>
                        togglePermission(item.key as keyof typeof permissions)
                      }
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-white absolute top-1 shadow-sm transition-all duration-300",
                          permissions[item.key as keyof typeof permissions]
                            ? "right-1"
                            : "left-1"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Class Management */}
            <div className="p-8 rounded-[24px] bg-[#F7F9FF] border border-blue-50/50 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="text-[18px] font-inter font-bold text-slate-800">
                  Class Management
                </h4>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Can schedule live classes",
                    key: "canScheduleLiveClasses",
                  },
                  {
                    label: "Can start live sessions",
                    key: "canStartLiveSessions",
                  },
                  { label: "Can cancel sessions", key: "canCancelSessions" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-[16px] font-inter text-slate-800 transition-colors group-hover:text-slate-900">
                      {item.label}
                    </span>
                    <div
                      className={cn(
                        "h-6 w-11 rounded-full relative cursor-pointer shadow-inner transition-all duration-300",
                        permissions[item.key as keyof typeof permissions]
                          ? "bg-blue-500"
                          : "bg-slate-200"
                      )}
                      onClick={() =>
                        togglePermission(item.key as keyof typeof permissions)
                      }
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-white absolute top-1 shadow-sm transition-all duration-300",
                          permissions[item.key as keyof typeof permissions]
                            ? "right-1"
                            : "left-1"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: AI Tools Access (Spans the first column on desktop) */}
            <div className="p-8 rounded-[24px] bg-[#31564E] text-white space-y-8 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-[#31564E] shadow-lg shadow-black/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-[18px] font-bold font-inter">AI Tools Access</h4>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Use AI speaking evaluation",
                    key: "useAiSpeakingEvaluation",
                  },
                  {
                    label: "Use AI correction tools",
                    key: "useAiCorrectionTools",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-[16px] font-inter  opacity-90 transition-opacity group-hover:opacity-100">
                      {item.label}
                    </span>
                    <div
                      className={cn(
                        "h-6 w-11 rounded-full relative cursor-pointer shadow-inner transition-all duration-300",
                        permissions[item.key as keyof typeof permissions]
                          ? "bg-blue-500"
                          : "bg-white/20"
                      )}
                      onClick={() =>
                        togglePermission(item.key as keyof typeof permissions)
                      }
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-white absolute top-1 shadow-sm transition-all duration-300",
                          permissions[item.key as keyof typeof permissions]
                            ? "right-1"
                            : "left-1"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Step 4: Live Class Access */
        <div className="rounded-[20px] bg-white shadow-sm border border-border/50 p-6 md:p-10 relative transition-all duration-500 animate-in fade-in slide-in-from-right-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-semibold font-inter text-[#31564E]">
                Step: 4
              </span>
              <h3 className="text-[20px] font-semibold font-inter text-[#31564E]">
                Live Class Access
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Configuration & Schedule */}
            <div className="lg:col-span-8 space-y-8">
              {/* Live Class Configuration Card */}
              <div className="rounded-[24px] bg-[#F9FBFA] border border-[#F0F4F3] p-8 space-y-8">
                <div className="flex items-center justify-between border-b border-slate-200/50 pb-5">
                  <h4 className="text-[18px] font-bold font-inter text-[#0B1C30]">
                    Live Class Configuration
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-3">
                    <label
                      htmlFor="platform"
                      className="text-[16px] font-medium font-inter text-black"
                    >
                      Live Class Platform
                    </label>
                    <div className="relative">
                      <select
                        id="platform"
                        className="h-14 w-full appearance-none rounded-xl border border-slate-100 bg-white px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all cursor-pointer shadow-sm"
                      >
                        <option>Google Meet</option>
                        <option>Zoom</option>
                        <option>Microsoft Teams</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="duration"
                      className="text-[16px] font-medium font-inter text-black"
                    >
                      Default Class Duration
                    </label>
                    <div className="relative">
                      <select
                        id="duration"
                        className="h-14 w-full appearance-none rounded-xl border border-slate-100 bg-white px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all cursor-pointer shadow-sm"
                      >
                        <option>1 Hour</option>
                        <option>30 Minutes</option>
                        <option>45 Minutes</option>
                        <option>1.5 Hours</option>
                        <option>2 Hours</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="platform-email"
                      className="text-[16px] font-medium font-inter text-black"
                    >
                      Email id <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      id="platform-email"
                      type="email"
                      placeholder="Enter your email id"
                      className="h-14 w-full rounded-xl border border-slate-100 bg-white px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all placeholder:text-slate-400 shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="platform-experience"
                      className="text-[16px] font-medium font-inter text-black"
                    >
                      Experience level{" "}
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="platform-experience"
                        className="h-14 w-full appearance-none rounded-xl border border-slate-100 bg-white px-5 text-[14px] font-inter text-slate-600 outline-none focus:ring-2 focus:ring-[#31564E]/10 transition-all cursor-pointer shadow-sm"
                      >
                        <option>Select Level</option>
                        <option>Entry Level</option>
                        <option>Experienced</option>
                        <option>Senior</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Schedule Card */}
              <div className="rounded-[24px] bg-[#F9FBFA] border border-[#F0F4F3] p-8 space-y-8">
                <div className="flex items-center justify-between border-b border-slate-200/50 pb-5">
                  <h4 className="text-[18px] font-bold font-inter text-[#0B1C30]">
                    Availability Schedule
                  </h4>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Days List */}
                  <div className="flex-1 space-y-6 pt-2">
                    {[
                      {
                        day: "Monday",
                        slots: ["10:00 - 13:00", "15:00 - 18:00"],
                        available: true,
                      },
                      {
                        day: "Tuesday",
                        slots: ["09:00 - 12:00"],
                        available: true,
                      },
                      { day: "Wednesday", slots: [], available: false },
                      {
                        day: "Thursday",
                        slots: ["14:00 - 19:00"],
                        available: true,
                      },
                      { day: "Sunday", slots: [], available: false },
                    ].map((item) => (
                      <div
                        key={item.day}
                        className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10"
                      >
                        <span
                          className={cn(
                            "text-[16px] font-semibold w-24",
                            item.available ? "text-[#0B1C30]" : "text-slate-400"
                          )}
                        >
                          {item.day}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.available ? (
                            item.slots.map((slot) => (
                              <div
                                key={slot}
                                className="flex items-center gap-2 bg-[#31564E33] text-[#31564E] px-4 py-2 rounded-full text-[14px] font-medium font-inter border border-[#31564E] shadow-sm"
                              >
                                {slot}
                                <X className="h-3 w-3 cursor-pointer opacity-50 hover:opacity-100" />
                              </div>
                            ))
                          ) : (
                            <span className="text-[14px] font-medium text-slate-400 ">
                              Not available
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add/Edit Slot Box */}
                  <div className="w-full lg:w-[320px] rounded-[24px] bg-white border border-[#F0F4F3] p-6 space-y-6 shadow-lg shadow-black/5">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="slot-day"
                          className="text-[16px] font-medium font-inter text-black"
                        >
                          Day
                        </label>
                        <div className="relative">
                          <select
                            id="slot-day"
                            className="h-12 w-full appearance-none rounded-xl border border-slate-100 bg-[#F5F5F5] px-4 text-[14px] font-regular font-inter text-slate-700 outline-none cursor-pointer"
                          >
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="slot-status"
                          className="text-[16px] font-medium font-inter text-black"
                        >
                          Status
                        </label>
                        <div className="relative">
                          <select
                            id="slot-status"
                            className="h-12 w-full appearance-none rounded-xl border border-slate-100 bg-[#F5F5F5] px-4 text-[14px] font-regular font-inter text-slate-700 outline-none cursor-pointer"
                          >
                            <option>Available</option>
                            <option>Away</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="bg-[#F9FBFA] rounded-2xl p-4 flex flex-col gap-3 border border-[#F0F4F3]">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-[#31564E33] border border-slate-100 shadow-sm">
                            <span className="text-[14px] font-medium font-inter text-[#31564E]">
                              10:00 - 13:00
                            </span>
                            <X className="h-3 w-3 text-slate-300" />
                          </div>
                          <button className="h-12 w-full rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center gap-2 text-slate-400 hover:border-slate-300 hover:text-slate-500 transition-all">
                            <Plus className="h-4 w-4" />
                            <span className="text-[12px] font-bold uppercase tracking-wide">
                              Add Slot
                            </span>
                          </button>
                        </div>
                      </div>

                      <Button className="w-full h-12 bg-black hover:bg-black/90 text-white rounded-xl text-[16px] font-medium font-inter shadow-lg shadow-black/10">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: AI & Summary */}
            <div className="lg:col-span-4 space-y-6">
              {/* AI Assistant Card */}
              <div className="rounded-[32px] bg-[#2C4A44] p-8 text-white space-y-6 shadow-2xl shadow-[#2C4A44]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  {/* <Sparkles className="h-24 w-24" /> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                  </div>
                  <h4 className="text-[18px] font-bold  font-inter ">
                    AI Assistant
                  </h4>
                </div>
                <p className="text-[14px] font-inter font-medium text-[#FFFFFFCC] leading-relaxed max-w-[90%]">
                  Based on previous tutor profiles, we recommend setting a max
                  capacity of 10 students for high-engagement language classes.
                </p>
                <button className="w-full h-14 bg-black text-white rounded-2xl text-[16px] font-semibold font-inter hover:bg-black/80 transition-all shadow-xl shadow-black/20">
                  Apply Recommendations
                </button>
              </div>

              {/* Summary Card */}
              <div className="rounded-[32px] bg-[#EAF2FF] p-8 space-y-6 border border-blue-100 shadow-sm">
                <h4 className="text-[18px] font-bold font-inter text-slate-800">
                  Summary
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-blue-200/50">
                    <span className="text-[16px] font-medium font-inter text-[#424754]">
                      Platform:
                    </span>
                    <span className="text-[16px] font-semibold font-inter text-[#0B1C30]">
                      Google Meet
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-blue-200/50">
                    <span className="text-[16px] font-medium font-inter text-[#424754]">
                      Hours/Week:
                    </span>
                    <span className="text-[16px] font-semibold font-inter text-[#0B1C30]">
                      14 Hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-medium font-inter text-[#424754]">
                      Capacity:
                    </span>
                    <span className="text-[16px] font-semibold font-inter text-[#0B1C30]">
                      12 Students
                    </span>
                  </div>
                </div>
              </div>

              {/* Branded Media Card - High-fidelity match for provided design */}
              <div className="rounded-[32px] overflow-hidden relative aspect-[1.2] group shadow-sm transition-all hover:shadow-md">
                <Image
                  src={containerImg}
                  alt="Consistent Scheduling"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Branded Messaging */}
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white text-[18px] font-bold font-inter leading-tight max-w-[280px] drop-shadow-md">
                    Live class quality depends on consistent scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTutor;
