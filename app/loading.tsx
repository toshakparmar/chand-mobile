import { businessConfig } from "@/config/business";
import { ShieldCheck } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/30 backdrop-blur-2xl select-none">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />

      {/* Floating Glassmorphic Center Card */}
      <div className="relative z-10 flex flex-col items-center rounded-3xl border border-white/80 bg-white/90 px-8 py-8 sm:px-12 sm:py-10 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] backdrop-blur-2xl max-w-sm sm:max-w-md w-[88vw] text-center">
        {/* Top Cyan/Blue Laser Accent Line */}
        <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

        {/* Official Brand Logo */}
        <div className="relative mb-5 flex items-center justify-center">
          <img
            src="/images/logo/horizontal-logo.png"
            alt={businessConfig.name}
            className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* Shimmering Linear Progress Bar */}
        <div className="w-full max-w-[260px] space-y-2 mt-2">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/60">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 animate-pulse" />
          </div>

          <div className="flex items-center justify-between font-mono text-[10.5px] font-semibold text-slate-500 px-0.5">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              <span>Loading page…</span>
            </span>
          </div>
        </div>

        {/* Micro Trust Guarantee Footnote */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>Certified Precision Engineering · 1-Year Warranty</span>
        </div>
      </div>
    </div>
  );
}
