  "use client";

  import {
    ArrowLeft,
    BookOpen,
    ChevronDown,
    ChevronUp,
    Clock,
    Eye,
    FileText,
    Globe,
    GripHorizontal,
    GripVertical,
    Info,
    Pencil,
    Plus,
    Trash2,
    Upload,
    X,
  } from "lucide-react";
  import * as React from "react";
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  import AddLessonModal from "./AddLessonModal";
  import AddModuleModal from "./AddModuleModal";

  interface AddCourseProps {
    onBack: () => void;
    onSuccess?: () => void;
  }

  const AddCourse = ({ onBack, onSuccess }: AddCourseProps) => {
    const [step, setStep] = React.useState(1);
    const [courseData, setCourseData] = React.useState({
      title: "",
      description: "",
      level: "Beginner",
      category: "",
      duration: "",
    });
    const [modules, setModules] = React.useState<any[]>([]);
    const [showAddModuleModal, setShowAddModuleModal] = React.useState(false);
    const [showAddLessonModal, setShowAddLessonModal] = React.useState(false);
    const [activeModuleIndex, setActiveModuleIndex] = React.useState<
      number | null
    >(null);
    const [expandedModules, setExpandedModules] = React.useState<number[]>([
      0, 1, 2, 3, 4, 5,
    ]);

    const toggleModule = (index: number) => {
      if (expandedModules.includes(index)) {
        setExpandedModules(expandedModules.filter((i) => i !== index));
      } else {
        setExpandedModules([...expandedModules, index]);
      }
    };

    const handleNext = () => {
      if (step === 5) {
        // Publish Course — navigate to profile
        if (onSuccess) onSuccess();
        else onBack();
        return;
      }
      if (step < 6) setStep(step + 1);
    };

    const handleBack = () => {
      if (step > 1) setStep(step - 1);
      else onBack();
    };

    return (
      <div className="space-y-6 pb-12 ">
        {/* Fixed Header Section */}
        {step <= 5 && (
          <div className="fixed top-[80px] left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-b border-border/10">
            <div className="px-4 md:px-8 lg:px-12 py-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBack}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <div className="flex flex-col ">
                    <h1 className="text-[20px] font-semibold font-inter text-black tracking-tight">
                      Create New Course
                    </h1>
                    <p className="text-[14px] font-inter font-regular text-black/70">
                      Set up a new course and define its structure.
                    </p>
                  </div>
                </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 w-full mt-8">
    {/* 1. SAVE DRAFT - flex-1 makes it share the first row on mobile */}
    <Button
      variant="outline"
      className="h-12 flex-1 md:flex-none md:px-8 px-4 rounded-2xl border-2 border-[#31564E] text-[#31564E] font-medium font-inter text-[14px] md:text-[16px] hover:bg-slate-50 transition-all"
    >
      Save Draft
    </Button>

    {/* 2. NEXT ACTION - flex-1 makes it share the first row on mobile */}
    <Button
      onClick={handleNext}
      className="h-12 flex-1 md:flex-none md:px-8 px-4 rounded-2xl bg-black hover:bg-black/90 text-white font-medium font-inter text-[14px] md:text-[16px] shadow-xl shadow-black/10 transition-all active:scale-95 whitespace-nowrap"
    >
      {step === 1
        ? "Next: Add Modules"
        : step === 2
        ? "Next: Add Lessons"
        : step === 3
        ? "Next: Visibility"
        : step === 4
        ? "Next: Review & Publish"
        : step === 5
        ? "Publish Course"
        : "Next Step"}
    </Button>

    {/* 3. PUBLISH TO SELECTED - w-full forces it to the NEXT LINE on mobile */}
    {step === 5 && (
      <Button
        variant="outline"
        className="h-12 w-full md:w-auto md:px-8 px-4 rounded-2xl border-slate-200 text-[#31564E] font-medium font-inter text-[14px] md:text-[16px] hover:bg-slate-50 transition-all"
      >
        Publish to selected
      </Button>
    )}
  </div>
              </div>
            </div>
          </div>
        )}

        {/* Spacer to push content below the fixed header */}
        {step <= 5 && <div className="h-[100px]" />}

        <AddModuleModal
          isOpen={showAddModuleModal}
          onClose={() => setShowAddModuleModal(false)}
          onAdd={(data) => {
            setModules([...modules, data]);
            setShowAddModuleModal(false);
          }}
        />

        <AddLessonModal
          isOpen={showAddLessonModal}
          onClose={() => setShowAddLessonModal(false)}
          onAdd={(data) => {
            if (activeModuleIndex !== null) {
              const updatedModules = [...modules];
              if (!updatedModules[activeModuleIndex].lessons) {
                updatedModules[activeModuleIndex].lessons = [];
              }
              updatedModules[activeModuleIndex].lessons.push(data);
              setModules(updatedModules);
            }
            setShowAddLessonModal(false);
          }}
          moduleTitle={
            activeModuleIndex !== null ? modules[activeModuleIndex]?.title : ""
          }
        />

        {step === 1 && (
          <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 p-8 md:p-12 space-y-10 md:mt-0 mt-20">
            <h3 className="text-[18px] font-semibold font-inter text-black/80 tracking-tight">
              Step: 1{" "}
              <span className="text-[20px] font-semibold font-inter text-[#31564E] border-l border-slate-200 ml-3 pl-3">
                Basic Details
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="flex flex-col gap-3 md:col-span-2">
                <label
                  htmlFor="courseTitle"
                  className="text-[16px] font-medium font-inter text-black"
                >
                  Course Name <span className="text-rose-500 font-bold">*</span>
                </label>
                <input
                  id="courseTitle"
                  type="text"
                  value={courseData.title}
                  onChange={(e) =>
                    setCourseData({ ...courseData, title: e.target.value })
                  }
                  placeholder="Enter course name"
                  className="h-14 w-full rounded-[14px] bg-[#F9F9F9] px-6 text-[14px] font-regular font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200"
                />
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label
                  htmlFor="courseDescription"
                  className="text-[16px] font-medium font-inter text-black"
                >
                  Course Description{" "}
                  <span className="text-rose-500 font-bold">*</span>
                </label>
                <textarea
                  id="courseDescription"
                  value={courseData.description}
                  onChange={(e) =>
                    setCourseData({ ...courseData, description: e.target.value })
                  }
                  placeholder="Describe the goals and curriculum of this course..."
                  className="h-40 w-full rounded-[14px] bg-[#F9F9F9] p-6 text-[14px] font-regular font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200 resize-none font-medium leading-relaxed"
                />
              </div>

            <div className="flex flex-col gap-3">
            <span className="text-[14px] md:text-[16px] font-medium font-inter text-black">
              Course Level <span className="text-rose-500 font-bold">*</span>
            </span>
            <div className="flex min-h-[56px] flex-wrap items-center gap-4 md:gap-6 bg-[#F9F9F9] px-4 md:px-6 py-3 md:py-0 rounded-[14px] border border-transparent">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2.5 cursor-pointer group shrink-0"
                >
                  <div className="relative shrink-0">
                    <input
                      type="radio"
                      name="level"
                      className="peer sr-only"
                      checked={courseData.level === level}
                      onChange={() => setCourseData({ ...courseData, level })}
                    />
                    <div className="h-5 w-5 rounded-full border-2 border-slate-300 peer-checked:border-[#2D4A43] transition-all" />
                    <div className="absolute inset-1 rounded-full bg-[#2D4A43] scale-0 peer-checked:scale-100 transition-transform duration-200" />
                  </div>
                  <span className="text-[14px] md:text-[16px] font-medium font-inter text-black group-hover:text-slate-900 transition-colors whitespace-nowrap">
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="courseCategory"
                  className="text-[16px] font-medium font-inter text-black"
                >
                  Course Category{" "}
                  <span className="text-rose-500 font-bold">*</span>
                </label>
                <div className="relative group">
                  <select
                    id="courseCategory"
                    value={courseData.category}
                    onChange={(e) =>
                      setCourseData({ ...courseData, category: e.target.value })
                    }
                    className="h-14 w-full appearance-none rounded-[14px] bg-[#F9F9F9] px-6 text-[14px] font-regular font-inter outline-none transition-all cursor-pointer focus:bg-white border border-transparent focus:border-slate-200 pr-12 focus:ring-2 focus:ring-[#2D4A43]/10"
                  >
                    <option value="" disabled className="text-black/70">
                      Select category
                    </option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="development">Web Development</option>
                    <option value="business">Business & Management</option>
                    <option value="english">English Literature</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none group-focus-within:text-[#2D4A43] transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="courseDuration"
                  className="text-[16px] font-medium font-inter text-black"
                >
                  Estimated Course Duration{" "}
                  <span className="text-rose-500 font-bold">*</span>
                </label>
                <div className="relative group">
                  <Clock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-[#2D4A43] transition-colors" />
                  <input
                    id="courseDuration"
                    type="text"
                    value={courseData.duration}
                    onChange={(e) =>
                      setCourseData({ ...courseData, duration: e.target.value })
                    }
                    placeholder="e.g. 12 Weeks"
                    className="h-14 w-full rounded-[14px] bg-[#F9F9F9] pl-14 pr-6 text-[14px] font-regular font-inter outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 p-8 md:p-12 space-y-10 mt-20 md:mt-0">
            <h3 className="text-[18px] font-semibold font-inter text-black border-l border-slate-200 ml-3 pl-3">
              Step: 2{" "}
              <span className=" text-[20px] font-semibold font-inter text-[#31564E] border-l border-slate-200 ml-3 pl-3">
                Add Modules
              </span>
            </h3>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-slate-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-400 transition-colors">
                      <GripVertical className="h-5 w-5" />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="text-[18px] font-medium font-inter text-black">
                            Module {index + 1}: {module.title}
                          </h4>
                          <div className="flex items-center gap-1.5 text-[12px] font-medium font-inter text-black/70">
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                            {module.duration} mins
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all">
                          <button className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-400 hover:text-[#2D4A43] transition-all">
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() =>
                              setModules(modules.filter((_, i) => i !== index))
                            }
                            className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-all font-bold"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="border-t border-slate-50 pt-4">
                        <p className="text-[16px] font-medium font-inter text-black/70 leading-relaxed line-clamp-2">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                onClick={() => setShowAddModuleModal(true)}
                className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-[24px] hover:border-[#2D4A43]/50 hover:bg-[#2D4A43]/5 transition-all cursor-pointer group"
              >
                <div className="h-12 w-12 rounded-full border-2 border-slate-300 flex items-center justify-center mb-4 group-hover:border-[#2D4A43] group-hover:bg-[#2D4A43] transition-all">
                  <Plus className="h-5 w-5 text-slate-400 group-hover:text-white" />
                </div>
                <h4 className="text-[18px] font-semibold font-inter text-black/70 mb-1">
                  Add New Module
                </h4>
                <p className="text-[14px] font-regular font-inter text-black/70">
                  Start organizing your next subject area
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 p-8 md:p-12 space-y-10  mt-20 md:mt-0">
            <h3 className="text-[18px] font-semibold font-inter text-black/80 tracking-tight">
              Step: 3{" "}
              <span className="text-[20px] font-semibold font-inter text-[#31564E] border-l border-slate-200 ml-3 pl-3">
                Add Lessons To Modules
              </span>
            </h3>

            <div className="space-y-6">
              {modules.length > 0 ? (
                modules.map((module, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white border border-slate-100 rounded-[24px] overflow-hidden transition-all duration-300",
                      expandedModules.includes(index)
                        ? "ring-1 ring-[#2D4A43]/10 shadow-md"
                        : "hover:shadow-sm"
                    )}
                  >
                    <div
                      onClick={() => toggleModule(index)}
                      className="p-6 flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 text-slate-300">
                          <GripVertical className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-[18px] font-medium font-inter text-black group-hover:text-[#2D4A43] transition-colors">
                            Module {index + 1}: {module.title}
                          </h4>
                          <div className="flex items-center gap-1.5 text-[12px] font-medium font-inter text-black/70">
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                            {module.duration} mins
                          </div>
                        </div>
                      </div>
                      {expandedModules.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-slate-400 group-hover:text-[#2D4A43] transition-all" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-[#2D4A43] transition-all" />
                      )}
                    </div>

                    {expandedModules.includes(index) && (
                      <div className="px-6 pb-6 pt-2 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        {/* Lesson List */}
                        {module.lessons && module.lessons.length > 0 && (
                          <div className="space-y-3">
                            {module.lessons.map(
                              (lesson: any, lessonIndex: number) => (
                                <div
                                  key={lessonIndex}
                                  className="group flex items-center justify-between p-4 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-[16px] transition-all"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="text-slate-300 cursor-grab active:cursor-grabbing hover:text-slate-400 transition-colors">
                                      <GripHorizontal className="h-4 w-4" />
                                    </div>
                                    <div className="space-y-1">
                                      <h5 className="text-[14px] font-bold text-slate-800">
                                        {lesson.title}
                                      </h5>
                                      <div className="flex items-center gap-2 text-[12px] font-medium text-slate-400">
                                        <span>{lesson.duration} mins</span>
                                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                                        <span
                                          className={cn(
                                            "capitalize",
                                            lesson.type === "video"
                                              ? "text-blue-500"
                                              : lesson.type === "practice"
                                                ? "text-emerald-500"
                                                : lesson.type === "quiz"
                                                  ? "text-amber-500"
                                                  : "text-slate-500"
                                          )}
                                        >
                                          {lesson.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                                      <Pencil className="h-3.5 w-3.5" />
                                    </button>
                                    <button
                                      onClick={() => {
                                        const updated = [...modules];
                                        updated[index].lessons = updated[
                                          index
                                        ].lessons.filter(
                                          (_: any, i: number) => i !== lessonIndex
                                        );
                                        setModules(updated);
                                      }}
                                      className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-500"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}

                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModuleIndex(index);
                            setShowAddLessonModal(true);
                          }}
                          className="p-4 border border-dashed border-[#2D4A43]/30 rounded-[16px] flex items-center justify-center bg-[#2D4A43]/5 hover:bg-[#2D4A43]/10 transition-all cursor-pointer group/lesson"
                        >
                          <div className="flex items-center gap-2 text-[16px] font-medium font-inter text-[#31564E]">
                            <Plus className="h-4 w-4" />
                            <span>Add Lesson</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center p-12 bg-slate-50 rounded-[24px] border border-dashed border-slate-200">
                  <p className="text-slate-500 font-medium">
                    Please add at least one module in Step 2 first.
                  </p>
                  <Button
                    onClick={() => setStep(2)}
                    variant="link"
                    className="text-[#31564E] font-medium font-inter mt-2 text-[16px]"
                  >
                    Go Back to Step 2
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 p-8 md:p-12 space-y-12 transition-all  mt-20 md:mt-0">
            <h3 className="text-[18px] font-semibold font-inter text-black/80 tracking-tight">
              Step: 4{" "}
              <span className="text-[#31564E] text-[20px] font-semibold font-inter border-l border-slate-200 ml-3 pl-3">
                Course Visibility Settings
              </span>
            </h3>

            <div className="space-y-12">
              {/* Visibility Scope Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h4 className="text-[18px] font-medium font-inter text-black">
                    Visibility Scope
                  </h4>
                </div>

                <div className="space-y-6">
                  <p className="text-[16px] font-medium font-inter text-black ml-1">
                    Who can see this course?
                  </p>

                  <div className="grid grid-cols-1 gap-5">
                    {/* Global Option Card */}
                    <div className="p-6 rounded-[24px] border-2 border-[#2D4A43] bg-[#2D4A43]/5 shadow-sm shadow-[#2D4A43]/10 cursor-pointer transition-all">
                      <div className="flex items-start gap-4 cursor-pointer">
                        <div className="mt-1 h-2 w-2 md:h-5 md:w-5 rounded-full border-2 border-[#2D4A43] flex items-center justify-center">
                          <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#2D4A43]" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[16px] font-medium font-inter text-black">
                            Global
                          </span>
                          <span className="text-[14px] font-regular foont-inter text-black/70">
                            Available to all institutes and students across the
                            platform
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Selected Institutes Option Card */}
                    <div className="p-6 rounded-[24px] border border-slate-100 bg-slate-50/30 hover:bg-slate-100/50 transition-all">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4 cursor-pointer group">
                          <div className="mt-1 h-2 w-2 md:h-5 md:w-5 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-[#2D4A43] transition-all">
                            {/* Deselected Circle */}
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[16px] font-medium font-inter text-black group-hover:text-[#2D4A43] transition-colors">
                              Selected Institutes
                            </span>
                            <span className="text-[14px] font-regular font-inter text-black/70">
                              Only specific institutes can access this content
                            </span>
                          </div>
                        </div>

                        <div className="pl-9 space-y-5">
                          <div className="flex flex-col gap-2.5">
                            <span className="text-[14px] font-medium font-inter text-black">
                              Select Partner Institutes
                            </span>
                            <div className="h-13 w-full rounded-[16px] bg-white border border-slate-200 flex items-center px-6 text-[14px] text-black/70 font-regular font-inter hover:border-[#2D4A43]/30 transition-all cursor-text shadow-sm">
                              Add institute
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {[
                              "Global English Academy",
                              "Oxford Language Institute",
                            ].map((inst) => (
                              <div
                                key={inst}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[12px] font-medium font-inter text-slate-600 transition-all hover:bg-slate-50 shadow-sm"
                              >
                                {inst}
                                <X className="h-4 w-4 cursor-pointer text-slate-400 hover:text-rose-500 transition-colors" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publishing Status Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Upload className="h-5 w-5" />
                  </div>
                  <h4 className="text-[18px] font-medium font-inter text-black">
                    Publishing Status
                  </h4>
                </div>

                <div className="bg-slate-50/50 rounded-[24px] p-8 space-y-8 border border-slate-100/50">
                  <p className="text-[16px] font-medium font-inter text-black">
                    Set initial publishing status
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-[20px] border-2 border-[#2D4A43] bg-[#2D4A43]/5 overflow-hidden transition-all shadow-md shadow-[#2D4A43]/10">
                      <div className="flex items-start gap-4 p-6 cursor-pointer h-full">
                        <div className="mt-1 h-2 w-2 md:h-5 md:w-5 rounded-full border-2 border-[#2D4A43] flex items-center justify-center">
                          <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#2D4A43]" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[16px] font-medium font-inter text-black">
                            Draft
                          </span>
                          <span className="text-[14px] font-regular font-inter text-black/70">
                            Only visible to administrators
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-transparent bg-white hover:border-slate-200 transition-all shadow-sm">
                      <div className="flex items-start gap-4 p-6 cursor-pointer h-full">
                        <div className="mt-1 h-2 w-2 md:h-5 md:w-5 rounded-full border-2 border-slate-200 flex items-center justify-center">
                          {/* Not selected */}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[16px] font-medium fonnt-inter text-black">
                            Global
                          </span>
                          <span className="text-[14px] font-regular font-inter text-black/70">
                            Available to all institutes and students across the
                            platform
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="rounded-[32px] bg-white shadow-sm border border-slate-100 p-8 md:p-12 space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-500 mt-20 md:mt-0">
            <h3 className="text-[18px] font-semibold font-inter text-black/80 tracking-tight">
              Step: 5{" "}
              <span className="text-[#31564E] text-[20px] font-semibold font-inter border-l border-slate-200 ml-3 pl-3">
                Review & Publish
              </span>
            </h3>

            <div className="space-y-8">
              {/* Course Information Section */}
              <div className="bg-slate-50/50 rounded-[24px] p-8 border border-slate-100/50 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                      <Info className="h-5 w-5" />
                    </div>
                    <h4 className="text-[18px] font-medium fonnt-inter text-[#0F172A]">
                      Course Information
                    </h4>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-[16px] font-medium font-inter text-[#31564E] hover:text-[#2D4A43] transition-colors"
                  >
                    Edit Info
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Title
                    </p>
                    <p className="text-[18px] font-semibold font-inter text-[#0F172A] leading-tight">
                      {courseData.title || "Advanced Business English"}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Level
                    </p>
                    <p className="text-[18px] font-semibold font-inter text-[#0F172A] ">
                      Expert Level
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Category
                    </p>
                    <p className="text-[18px] font-semibold font-inter text-[#0F172A]">
                      Professional Skills
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Duration
                    </p>
                    <p className="text-[18px] font-semibold font-inter text-[#0F172A]">
                      {courseData.duration || "12 Hours Total"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Curriculum Summary Section */}
              <div className="bg-slate-50/50 rounded-[24px] p-8 border border-slate-100/50 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#E0E7FF] flex items-center justify-center text-[#4F46E5]">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h4 className="text-[18px] font-medium font-inter text-[#0F172A]">
                      Curriculum Summary
                    </h4>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="text-[16px] font-medium font-inter text-[#31564E] hover:text-[#2D4A43] transition-colors"
                  >
                    View Full Curriculum
                  </button>
                </div>

                
  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
    <div className="flex items-center gap-4 bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm flex-1">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
        <FileText className="h-6 w-6" />
      </div>
      <div className="min-w-0"> 
        <p className="text-[18px] md:text-[20px] font-semibold font-inter text-[#0F172A]">
          {modules.length.toString().padStart(2, "0")}
        </p>
        <p className="text-[13px] md:text-[14px] font-regular font-inter text-[#0F172A] whitespace-nowrap">
          Total Modules
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4 bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm flex-1">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
        <FileText className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <p className="text-[18px] md:text-[20px] font-semibold font-inter text-[#0F172A]">
          42
        </p>
        <p className="text-[13px] md:text-[14px] font-regular font-inter text-black whitespace-nowrap">
          Total Lessons
        </p>
      </div>
    </div>
  </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="bg-white border border-slate-100 rounded-[20px] p-5 flex items-center justify-between group cursor-pointer hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <GripHorizontal className="h-4 w-4 text-slate-300" />
                        <div>
                          <h5 className="text-[18px] font-medium font-inter text-black">
                            Module {num}: Professional Introductions & Networking
                          </h5>
                          <p className="text-[12px] font-medium font-inter text-black/70 mt-0.5">
                            4 Lessons • 1h 45m
                          </p>
                        </div>
                      </div>
                      <ChevronDown className="h-5 w-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Visibility Access Section */}
              <div className="bg-slate-50/50 rounded-[24px] p-8 border border-slate-100/50 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h4 className="text-[18px] font-medium font-inter text-[#0F172A]">
                      Visibility Access
                    </h4>
                  </div>
                  <button
                    onClick={() => setStep(4)}
                    className="text-[16px] font-medium font-inter text-[#31564E] hover:text-[#2D4A43] transition-colors"
                  >
                    View Full Curriculum
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Scope
                    </p>
                    <p className="text-[18px] font-semibold font-inter text-[#0F172A]">
                      Selected Institutes
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Institutes
                    </p>
                    <p className="text-[18px] font-semibold font-inter text-[#0F172A]">
                      12 Selected
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-regular font-inter text-black capitalize">
                      Access Level
                    </p>
                    <p className="text-[16px] font-semibold font-inter text-[#007FFF]">
                      Premium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12">
            <div className="mb-8 p-6 rounded-full bg-emerald-50 shadow-inner">
              <Globe className="h-20 w-20 text-emerald-500 animate-pulse" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Course Published Successfully!
            </h2>

            <div className="space-y-4 mb-12">
              <p className="text-lg text-slate-600 leading-relaxed">
                Your course{" "}
                <span className="font-bold text-foreground">
                  &quot;English Communication Mastery&quot;
                </span>{" "}
                is now live on the platform.
              </p>
              <div className="p-4 bg-slate-50 border border-border rounded-2xl flex items-center gap-4 justify-center">
                <span className="text-sm font-medium text-muted-foreground font-mono">
                  https://smartedlabs.com/courses/english-mastery
                </span>
                <button className="text-[#31564E] text-xs font-bold hover:underline">
                  Copy Link
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Button
                variant="outline"
                onClick={onBack}
                className="h-14 rounded-2xl px-10 border-slate-300 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all min-w-[240px]"
              >
                Go to Course List
              </Button>
              <Button
                onClick={onSuccess || onBack}
                className="h-14 rounded-2xl px-10 bg-black text-white font-bold text-lg hover:bg-black/90 shadow-xl shadow-black/20 transition-all min-w-[240px]"
              >
                View Course Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default AddCourse;
