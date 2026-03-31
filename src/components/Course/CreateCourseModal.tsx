"use client";

import { ChevronRight, X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateNew: () => void;
  onCloneMaster: () => void;
}

const CreateCourseModal = ({
  isOpen,
  onClose,
  onCreateNew,
  onCloneMaster,
}: CreateCourseModalProps) => {
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2">
      {/* Backdrop */}
      <div className="absolute inset-0 transition-opacity" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-[640px] bg-white rounded-[32px] p-5 md:p-12 shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 text-center">
            <h2 className="text-[32px] font-semibold font-inter text-black tracking-tight">
              Create New Course
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute right-8 top-8 h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-10">
          <button
            onClick={onCreateNew}
            className="w-full flex items-center justify-between p-6 rounded-[20px] border border-slate-200 bg-white hover:border-[#2D4A43] hover:bg-[#2D4A43]/5 transition-all group group"
          >
            <span className="text-[16px] font-medium font-inter text-[#31564E]">
              Create New Course
            </span>
            <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-[#2D4A43] transition-colors" />
          </button>

          <button
            onClick={onCloneMaster}
            className="w-full flex items-center justify-between p-6 rounded-[20px] border border-slate-200 bg-white hover:border-[#2D4A43] hover:bg-[#2D4A43]/5 transition-all group"
          >
            <span className="text-[16px] font-medium font-inter text-black/60">
              Clone Master Course
            </span>
            <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-[#2D4A43] transition-colors" />
          </button>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <Button
            onClick={onCreateNew}
            className="h-14 bg-black hover:bg-black/90 text-white px-10 rounded-2xl font-medium font-inter text-[16px] shadow-xl shadow-black/10 transition-all active:scale-95"
          >
            Create Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseModal;
