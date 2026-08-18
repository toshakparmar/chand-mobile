"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { businessConfig } from "@/config/business";
import { Wrench } from "lucide-react";

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during loading so users don't see unrendered sections
    document.body.style.overflow = "hidden";

    // Increment progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#f8fafc] select-none"
        >
          {/* Ambient Glows */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="absolute h-[250px] w-[250px] rounded-full bg-indigo-500/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Icon */}
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
              {/* Outer spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-6px] rounded-3xl border-2 border-dashed border-blue-500/40"
              />

              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-md"
              />

              {/* Logo Core */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-600/30">
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  CM
                </span>
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-white shadow-sm">
                  <Wrench className="h-3 w-3 text-blue-400" />
                </span>
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="font-display text-xl font-bold tracking-tight text-slate-900"
            >
              {businessConfig.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500"
            >
              Mobile Repair Center
            </motion.p>

            {/* Progress Bar Container */}
            <div className="mt-8 flex w-48 flex-col items-center gap-2">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <span className="font-mono text-[11px] font-medium text-slate-400">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
