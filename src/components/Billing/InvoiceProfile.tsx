"use client";

import {
  ArrowLeft,
  Building2,
  Download,
  ExternalLink,
  Mail,
  Printer,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface InvoiceProfileProps {
  id: string | null;
  onBack: () => void;
}

const InvoiceProfile = ({ id, onBack }: InvoiceProfileProps) => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-700">
      {/* Top Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all group"
          >
            <ArrowLeft className="h-6 w-6 text-slate-400 group-hover:text-slate-600" />
          </button>
          <div>
            <h2 className="text-3xl font-black text-foreground tracking-tighter flex items-center gap-3">
              Invoice #{id || "N/A"}
              <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-black uppercase tracking-widest border border-emerald-100">
                PAID
              </span>
            </h2>
            <p className="text-slate-400 font-bold tracking-tight">
              Institutional Billing Summary • Education Hub
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-12 rounded-2xl px-6 border-slate-200 text-slate-500 font-bold hover:bg-slate-50 gap-2"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button className="h-12 rounded-2xl px-8 bg-black text-white font-bold shadow-xl shadow-black/10 hover:bg-black/95 gap-2">
            <Download className="h-5 w-5" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 md:p-12 shadow-xl shadow-black/5 relative overflow-hidden group">
            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b border-slate-50 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
              Transaction Authenticity
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="space-y-2">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Issue Date
                </span>
                <p className="text-[14px] font-bold text-slate-800">
                  25 March, 2024
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Billing Method
                </span>
                <p className="text-[14px] font-bold text-slate-800">
                  Direct Bank Transfer
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Tax ID #
                </span>
                <p className="text-[14px] font-bold text-slate-800">
                  IE-902345-X
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-6 bg-slate-50/50 p-8 rounded-3xl border border-slate-100/50">
              <h4 className="text-[13px] font-black text-slate-500 uppercase tracking-widest">
                Payment Breakdown
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-600 font-black">
                    AI Enterprise License (Annual)
                  </span>
                  <span className="text-slate-900 font-black">$2,100.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100/50">
                  <span className="text-slate-600 font-black">
                    Platform Support & Hosting
                  </span>
                  <span className="text-slate-900 font-black">$350.00</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xl font-black text-slate-900 tracking-tighter">
                    Total Amount Paid
                  </span>
                  <span className="text-2xl font-black text-emerald-600 tracking-tighter">
                    $2,450.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Entity Info */}
        <div className="space-y-8">
          <div className="bg-[#2D4A43] rounded-[32px] p-8 shadow-xl shadow-[#2D4A43]/10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Building2 className="h-32 w-32" />
            </div>
            <h3 className="text-[12px] font-black text-slate-300 uppercase tracking-widest mb-6">
              Institution Entity
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-black tracking-tight">
                    Nexus High
                  </p>
                  <p className="text-[13px] font-bold text-slate-300">
                    San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-slate-300 font-bold">
                    Admin Contact
                  </span>
                  <span className="font-black text-white">James Rivera</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-slate-300 font-bold">
                    Billing Cycle
                  </span>
                  <span className="font-black text-emerald-400">Annual</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-2xl bg-white/5 border-white/20 text-white font-bold hover:bg-white/10 transition-all gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Registry
                </Button>
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-2xl bg-white/5 border-white/20 text-white font-bold hover:bg-white/10 transition-all gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceProfile;
