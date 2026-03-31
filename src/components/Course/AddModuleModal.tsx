"use client";

import { X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface AddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: {
    title: string;
    description: string;
    duration: string;
  }) => void;
}

const AddModuleModal = ({ isOpen, onClose, onAdd }: AddModuleModalProps) => {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    duration: "45",
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

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 transition-opacity" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-[580px] bg-white rounded-[24px] p-8 md:p-10 shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 text-center">
            <h2 className="text-[32px] font-semibold font-inter text-black tracking-tight">
              Add New Module
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute right-8 top-8 h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="moduleName"
              className="text-[16px] font-medium font-inter text-black"
            >
              Module Name <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              id="moduleName"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g. Advanced Routing Techniques"
              className="h-13 w-full rounded-[12px] bg-[#F4F4F4] px-5 text-[14px] outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200 font-regular font-inter text-[14px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="moduleDescription"
              className="text-[16px] font-medium font-inter text-black"
            >
              Module Description{" "}
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <textarea
              id="moduleDescription"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Briefly describe what students will learn in this module..."
              className="h-28 w-full rounded-[12px] bg-[#F4F4F4] p-5 text-[14px] outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200 resize-none font-regular font-inter text-[14px] leading-relaxed"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="moduleDuration"
              className="text-[16px] font-medium font-inter text-black"
            >
              Estimated Duration{" "}
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <div className="relative group">
              <input
                id="moduleDuration"
                type="text"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                placeholder="45"
                className="h-13 w-full rounded-[12px] bg-[#F4F4F4] px-5 pr-16 text-[14px] font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#2D4A43]/10 border border-transparent focus:border-slate-200 font-regular font-inter text-[14px]"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#64748B] font-medium text-[14px] font-inter">
                mins
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <Button
            onClick={() => onAdd(formData)}
            className="h-13 bg-black hover:bg-black/90 text-white px-10 rounded-[14px] font-medium font-inter text-[16px] shadow-xl shadow-black/10 transition-all active:scale-95"
          >
            Add Module
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddModuleModal;
