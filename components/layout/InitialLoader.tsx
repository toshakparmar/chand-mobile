"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { businessConfig } from "@/config/business";
import { ShieldCheck, Sparkles, Activity } from "lucide-react";

const diagnosticSteps = [
  "Initializing System Diagnostics…",
  "Connecting Genuine Parts Catalog…",
  "Calibrating Engineering Matrix…",
  "System Ready",
];

export function InitialLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const isInitialMount = useRef(true);

  // Initial load & refresh
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setProgress(0);
    setStepIndex(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 12;
        if (next > 75) setStepIndex(2);
        else if (next > 35) setStepIndex(1);
        return Math.min(next, 100);
      });
    }, 60);

    const timer = setTimeout(() => {
      setStepIndex(3);
      setIsLoading(false);
      document.body.style.overflow = "";
      isInitialMount.current = false;
    }, 700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Route transition loader between pages
  useEffect(() => {
    if (isInitialMount.current) return;

    setIsLoading(true);
    setProgress(30);
    setStepIndex(1);

    const t1 = setTimeout(() => {
      setProgress(80);
      setStepIndex(2);
    }, 100);

    const t2 = setTimeout(() => {
      setProgress(100);
      setStepIndex(3);
      setIsLoading(false);
    }, 320);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key={`loader-${pathname}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.995 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-2xl select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
          <div className="absolute h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

          {/* Premium Floating Card Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center rounded-3xl border border-white/80 bg-white/90 px-8 py-8 sm:px-12 sm:py-10 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] backdrop-blur-2xl max-w-sm sm:max-w-md w-[88vw] text-center"
          >
            {/* Top Cyan/Blue Laser Accent Line */}
            <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

            {/* Official High-Resolution Brand Logo */}
            <div className="relative mb-5 flex items-center justify-center">
              <img
                src="/images/logo/horizontal-logo.png"
                alt={businessConfig.name}
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Live Progress Bar Container */}
            <div className="w-full max-w-[260px] space-y-2 mt-2">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/60">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.15 }}
                />
              </div>

              {/* Progress & Diagnostic Status Row */}
              <div className="flex items-center justify-between font-mono text-[10.5px] font-semibold text-slate-500 px-0.5">
                <span className="flex items-center gap-1.5 text-slate-600 truncate max-w-[180px]">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                  </span>
                  <span className="truncate">{diagnosticSteps[stepIndex]}</span>
                </span>
                <span className="font-mono font-bold text-slate-900 shrink-0">{progress}%</span>
              </div>
            </div>

            {/* Micro Trust Guarantee Footnote */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Certified Precision Engineering · 1-Year Warranty</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
