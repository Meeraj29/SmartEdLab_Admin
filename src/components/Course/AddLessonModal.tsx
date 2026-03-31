"use client";

import {
  ClipboardCheck,
  FileText,
  HelpCircle,
  UploadCloud,
  Video,
  X,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: any) => void;
  moduleTitle?: string;
}

const AddLessonModal = ({ isOpen, onClose, onAdd }: AddLessonModalProps) => {
  const [lessonType, setLessonType] = React.useState("video");
  const [formData, setFormData] = React.useState({
    title: "",
    duration: "45",
    description: "",
  });

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lessonTypes = [
    { id: "video", label: "Video", icon: Video },
    { id: "practice", label: "Practice", icon: FileText },
    { id: "quiz", label: "Quiz", icon: HelpCircle },
    { id: "assessment", label: "Assessment", icon: ClipboardCheck },
  ];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 transition-opacity" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-[600px] bg-white rounded-[20px] p-6 md:p-8 shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 text-center">
            <h2 className="text-[32px] font-semibold font-inter text-black tracking-tight">
              Add New Lesson
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute right-6 top-6 h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-5 mb-8 overflow-y-auto max-h-[60vh] px-1 custom-scrollbar">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="lessonTitle"
              className="text-[16px] font-medium font-inter text-black"
            >
              Lesson Title <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              id="lessonTitle"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g. Advanced Routing Techniques"
              className="h-11 w-full rounded-[10px] bg-[#F4F4F4] px-4 text-[14px] font-regular font-inter text-black/70 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-[16px] font-medium font-inter text-black">
                Lesson Type <span className="text-rose-500 font-bold">*</span>
              </span>
              <div className="grid grid-cols-2 gap-2">
                {lessonTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setLessonType(type.id)}
                    className={cn(
                      "flex items-center gap-2 px-3 h-10 rounded-[10px] border-2 transition-all ",
                      lessonType === type.id
                        ? "bg-[#2D4A43]/10 border-[#2D4A43] text-[#2D4A43] shadow-sm"
                        : "bg-[#F4F4F4] border-transparent text-slate-600 hover:bg-[#EAEAEA]"
                    )}
                  >
                    <type.icon
                      className={cn(
                        "h-3.5 w-3.5",
                        lessonType === type.id
                          ? "text-[#2D4A43]"
                          : "text-slate-400"
                      )}
                    />
                    <span className="text-[16px] font-medium font-inter ">
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lessonDuration"
                className="text-[16px] font-medium font-inter text-black"
              >
                Estimated Duration{" "}
                <span className="text-rose-500 font-bold">*</span>
              </label>
              <div className="relative group">
                <input
                  id="lessonDuration"
                  type="text"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  placeholder="45"
                  className="h-10 w-full rounded-[10px] bg-[#F4F4F4] px-4 pr-12 text-[14px] font-regular font-inter text-black/70 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] font-medium text-[14px] font-inter">
                  mins
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="lessonDescription"
              className="text-[16px] font-medium font-inter text-black"
            >
              Lesson Description{" "}
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <textarea
              id="lessonDescription"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Briefly describe what students will learn in this lesson..."
              className="h-24 w-full rounded-[10px] bg-[#F4F4F4] p-4 text-[14px] font-regular font-inter text-black/70 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200 resize-none font-medium leading-relaxed"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[16px] font-medium font-inter text-black">
              Content Upload <span className="text-rose-500 font-bold">*</span>
            </span>
            <div className="border border-dashed border-slate-200 rounded-[12px] p-4 flex flex-col items-center justify-center bg-white hover:bg-slate-50 hover:border-[#2D4A43]/30 transition-all cursor-pointer group">
              <div className="h-10 w-10 rounded-full bg-[#F0F7FF] flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                <UploadCloud className="h-5 w-5 text-[#0066FF]" />
              </div>
              <h4 className="text-[16px] font-medium font-inter text-[#0F172A] mb-0.5">
                Click to upload or drag and drop
              </h4>
              <p className="text-[14px] font-regular font-inter text-[#64748B] text-center">
                Video (MP4, MOV) or Documents (PDF, DOCX) up to 500MB
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end pt-2 border-t border-slate-50">
          <Button
            onClick={() => onAdd({ ...formData, type: lessonType })}
            className="h-11 bg-black hover:bg-black/90 text-white px-8 rounded-[12px] font-medium font-inter text-[16px] shadow-xl shadow-black/10 transition-all active:scale-95"
          >
            Add Lesson
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddLessonModal;
