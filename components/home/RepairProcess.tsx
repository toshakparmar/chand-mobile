"use client";

import { forwardRef, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Shield,
  Zap,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { waLink } from "@/config/business";
import { stepDetails } from "@/lib/data";

// Clean, compact step node
const StepNode = forwardRef<
  HTMLDivElement,
  {
    step: (typeof stepDetails)[0];
    onClick: () => void;
    align?: "left" | "right";
  }
>(({ step, onClick, align = "left" }, ref) => {
  const Icon = step.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2.5 shadow-[0_4px_16px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-[0_12px_28px_rgb(37,99,235,0.12)] active:scale-95 focus:outline-none w-[200px] sm:w-[220px]",
        align === "right" && "sm:flex-row-reverse sm:text-right"
      )}
    >
      {/* Icon node */}
      <div
        className={cn(
          "relative flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-all duration-300 group-hover:scale-105",
          step.badgeBg,
          "group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-blue-500"
        )}
      >
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
      </div>

      {/* Clean text */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">
          Step {step.step}
        </span>
        <span className="font-display text-[13px] sm:text-[14px] font-bold text-slate-900 tracking-tight truncate group-hover:text-blue-600 transition-colors">
          {step.title}
        </span>
      </div>

      {/* Anchor connection pin for the beam */}
      <div
        ref={ref}
        className={cn(
          "size-2 rounded-full bg-blue-500 ring-4 ring-blue-100/80 transition-transform duration-300 group-hover:scale-125",
          align === "left" ? "order-last ml-auto" : "order-first mr-auto"
        )}
      />
    </button>
  );
});

StepNode.displayName = "StepNode";

export function RepairProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const activeStep =
    activeStepIndex !== null ? stepDetails[activeStepIndex] : null;

  const handlePrevStep = () => {
    if (activeStepIndex === null) return;
    setActiveStepIndex(
      activeStepIndex === 0 ? stepDetails.length - 1 : activeStepIndex - 1
    );
  };

  const handleNextStep = () => {
    if (activeStepIndex === null) return;
    setActiveStepIndex(
      activeStepIndex === stepDetails.length - 1 ? 0 : activeStepIndex + 1
    );
  };

  return (
    <section id="process" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-300/[0.12] blur-[140px]" />
      <div className="absolute left-0 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-300/[0.1] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-end">
          <FadeIn className="max-w-4xl">
            <Badge
              variant="outline"
              className="mb-6 bg-white/80 backdrop-blur-md px-3.5 py-1.5 shadow-sm border-slate-200"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Standardized Repair Protocol
            </Badge>
            <h2 className="font-display text-[3rem] leading-tight font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[3.75rem]">
              Simple from{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
                start to finish.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[1.125rem] leading-[1.7] text-slate-600 font-medium">
              Every device passes through our certified 6-stage engineering pipeline. Click any step to inspect our procedures and guarantees.
            </p>
          </FadeIn>

          <div className="mt-8 flex flex-col items-end gap-6 md:mt-0">
            <a
              href="/book-repair"
              className="group hidden relative overflow-hidden items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 px-7 py-3 font-bold text-sm text-slate-800 shadow-xs backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/5 active:scale-[0.98] md:flex"
            >
              <span className="relative z-10">Start Your Repair</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Animated Beam Interactive Process Canvas */}
        <FadeIn delay={0.15} className="mt-14 sm:mt-16">
          <div
            ref={containerRef}
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white/70 p-6 sm:p-12 lg:p-16 shadow-[0_16px_50px_rgb(0,0,0,0.04)] backdrop-blur-2xl min-h-[520px]"
          >
            {/* Tech grid texture in background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-emerald-50/20 pointer-events-none" />

            {/* Top Interactive Helper Pill */}
            <div className="relative z-20 mb-10 inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/95 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-[0_4px_15px_rgb(0,0,0,0.04)] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Interactive Workflow: Click any stage to inspect details</span>
            </div>

            {/* 3-Column Diagram Layout with generous spacing */}
            <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-20 py-2">
              {/* Left Column: Intake Steps (1, 2, 3) */}
              <div className="flex flex-col gap-8 items-center lg:items-start">
                <StepNode
                  step={stepDetails[0]}
                  ref={div1Ref}
                  onClick={() => setActiveStepIndex(0)}
                  align="left"
                />
                <StepNode
                  step={stepDetails[1]}
                  ref={div2Ref}
                  onClick={() => setActiveStepIndex(1)}
                  align="left"
                />
                <StepNode
                  step={stepDetails[2]}
                  ref={div3Ref}
                  onClick={() => setActiveStepIndex(2)}
                  align="left"
                />
              </div>

              {/* Center Column: Compact Chand Mobile Master Hub */}
              <div className="flex flex-col items-center justify-center my-4 lg:my-0">
                <div
                  ref={div4Ref}
                  className="relative flex items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 p-4 sm:p-5 shadow-[0_12px_40px_rgb(37,99,235,0.16)] ring-8 ring-blue-500/10 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/images/logo/vertical-logo.png"
                    alt="Chand Mobile Master Hub"
                    width={150}
                    height={120}
                    className="h-24 sm:h-28 w-auto object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Execution & Delivery Steps (4, 5, 6) */}
              <div className="flex flex-col gap-8 items-center lg:items-end">
                <StepNode
                  step={stepDetails[3]}
                  ref={div5Ref}
                  onClick={() => setActiveStepIndex(3)}
                  align="right"
                />
                <StepNode
                  step={stepDetails[4]}
                  ref={div6Ref}
                  onClick={() => setActiveStepIndex(4)}
                  align="right"
                />
                <StepNode
                  step={stepDetails[5]}
                  ref={div7Ref}
                  onClick={() => setActiveStepIndex(5)}
                  align="right"
                />
              </div>
            </div>

            {/* Left Inputs -> Center Beams (Desktop only) */}
            <div className="hidden lg:block">
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-50}
                endYOffset={-10}
                gradientStartColor="#2563eb"
                gradientStopColor="#4f46e5"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
                gradientStartColor="#2563eb"
                gradientStopColor="#4f46e5"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={50}
                endYOffset={10}
                gradientStartColor="#2563eb"
                gradientStopColor="#4f46e5"
              />

              {/* Center -> Right Outputs Beams (Desktop only) */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-50}
                endYOffset={-10}
                reverse
                gradientStartColor="#4f46e5"
                gradientStopColor="#10b981"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
                gradientStartColor="#4f46e5"
                gradientStopColor="#10b981"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={50}
                endYOffset={10}
                reverse
                gradientStartColor="#4f46e5"
                gradientStopColor="#10b981"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Ultra-Professional Step Popup Modal Dialog */}
      <Dialog
        open={activeStepIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveStepIndex(null);
        }}
      >
        <DialogContent className="max-w-xl p-0 overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-2xl backdrop-blur-2xl">
          {activeStep && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col max-h-[85vh]"
              >
                {/* Modal Top Gradient Hero Header */}
                <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white shrink-0">
                  <div className="absolute right-0 top-0 h-40 w-40 bg-blue-500/20 blur-3xl pointer-events-none" />
                  <div className="absolute left-1/3 bottom-0 h-32 w-32 bg-emerald-500/15 blur-2xl pointer-events-none" />

                  {/* Progress bar / stage indicators */}
                  <div className="flex items-center justify-between gap-3 mb-4 pr-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono font-bold tracking-widest text-blue-300 backdrop-blur-md border border-white/10">
                      <span>STAGE {activeStep.step} / 06</span>
                      <span className="h-1 w-1 rounded-full bg-blue-400" />
                      <span className="text-white/80">{activeStep.tag}</span>
                    </div>

                    {/* Interactive Step Switcher Dots */}
                    <div className="flex items-center gap-1.5">
                      {stepDetails.map((s, idx) => (
                        <button
                          key={s.step}
                          type="button"
                          onClick={() => setActiveStepIndex(idx)}
                          className={cn(
                            "h-2 rounded-full transition-all duration-300 focus:outline-none",
                            idx === activeStepIndex
                              ? "w-6 bg-blue-400 shadow-sm"
                              : "w-2 bg-white/30 hover:bg-white/60"
                          )}
                          aria-label={`Jump to Step ${s.step}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-xl">
                      <activeStep.icon className="h-7 w-7 text-blue-300" />
                    </div>
                    <div>
                      <DialogTitle className="font-display text-2xl font-bold tracking-tight text-white leading-tight">
                        {activeStep.title}
                      </DialogTitle>
                      <DialogDescription className="mt-1 text-sm font-medium text-slate-300">
                        {activeStep.subtitle}
                      </DialogDescription>
                    </div>
                  </div>
                </div>

                {/* Modal Body Content */}
                <div className="p-6 space-y-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Highlight Takeaway Box */}
                  <div className="flex items-start gap-3 rounded-xl bg-blue-50/90 p-3.5 border border-blue-100/80">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                      <Zap className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                        Core Guarantee
                      </span>
                      <p className="mt-0.5 text-xs sm:text-[13px] font-medium text-blue-950 leading-relaxed">
                        {activeStep.keyTakeaway}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Narrative */}
                  <div>
                    <h4 className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Procedure Overview
                    </h4>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-700 font-normal">
                      {activeStep.description}
                    </p>
                  </div>

                  {/* 3 Step Pillars */}
                  <div>
                    <h4 className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Bench Checklist
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {activeStep.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold text-slate-900">
                              {benefit.head}
                            </p>
                            <p className="text-[11px] text-slate-600 font-medium leading-snug">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metric Strip */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-slate-50/50 p-2.5">
                      <Clock className="h-4 w-4 text-blue-600 shrink-0" />
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          Turnaround
                        </span>
                        <span className="font-mono text-[11px] font-bold text-slate-900">
                          {activeStep.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-slate-50/50 p-2.5">
                      <Shield className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          Protection
                        </span>
                        <span className="font-mono text-[11px] font-bold text-emerald-700">
                          {activeStep.warranty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Controls */}
                <div className="border-t border-slate-100 bg-slate-50/90 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-950 transition-all shadow-sm active:scale-95"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span>Prev</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-950 transition-all shadow-sm active:scale-95"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Primary Contact & Booking CTAs */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={waLink(
                        `Hi Chand Mobile, I have a question regarding Stage ${activeStep.step}: ${activeStep.title}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="/book-repair"
                      onClick={() => setActiveStepIndex(null)}
                      className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] text-white text-xs font-bold shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <span>Book Repair</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
