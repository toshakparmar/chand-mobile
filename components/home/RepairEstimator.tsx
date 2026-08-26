"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Smartphone,
  Tag,
  Wrench,
  Activity,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { BookingDialog } from "@/components/booking/BookingDialog";
import {
  deviceCatalog,
  repairTypes,
  conditions,
  estimateRepair,
  type Condition,
  type RepairType,
} from "@/lib/repairPricing";
import { waLink } from "@/config/business";

export function RepairEstimator() {
  const [brand, setBrand] = useState("Apple");
  const [model, setModel] = useState("iPhone 15 Pro");
  const [repairType, setRepairType] = useState<RepairType>("Screen Replacement");
  const [condition, setCondition] = useState<Condition>("Good");

  const models = deviceCatalog[brand] ?? [];

  const result = useMemo(
    () => estimateRepair(brand, repairType, condition),
    [brand, repairType, condition]
  );

  function handleBrandChange(next: string) {
    setBrand(next);
    setModel(deviceCatalog[next]?.[0] ?? "");
  }

  return (
    <section id="estimator" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-300/[0.12] blur-[130px]" />
      <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-300/[0.1] blur-[120px]" />

      {/* Header with single-line typography */}
      <FadeIn className="mb-10 flex flex-col items-start sm:mb-14 max-w-5xl">
        <div>
          <Badge variant="outline" className="mb-6 bg-white/70 backdrop-blur-md px-3.5 py-1.5 shadow-sm border-slate-200">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Instant Cost Estimator
          </Badge>
          <h2 className="font-display text-[2.5rem] leading-tight font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Know your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
              repair cost.
            </span>
          </h2>
          <p className="mt-4 max-w-4xl text-[1.125rem] leading-normal text-slate-600 font-medium whitespace-normal lg:whitespace-nowrap">
            Get an instant estimate for your device — 100% transparent pricing confirmed before any work begins.
          </p>
        </div>
      </FadeIn>

      {/* Main Glassmorphic Calculator Container */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 gap-8 rounded-[2.5rem] border border-slate-200/90 bg-white/70 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgb(0,0,0,0.04)] backdrop-blur-2xl lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Controls Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-display text-sm font-bold text-slate-900">
                Device Configuration
              </span>
              <span className="font-mono text-xs font-semibold text-slate-400">
                Step 1 of 2
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Brand Select */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 font-display text-[13px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <Smartphone className="h-3.5 w-3.5" />
                  </span>
                  <span>Device Brand</span>
                </Label>
                <Select value={brand} onValueChange={handleBrandChange}>
                  <SelectTrigger className="h-12 sm:h-13 rounded-2xl border-slate-200/90 bg-slate-50/60 px-4 font-semibold text-slate-800 shadow-sm transition-all hover:bg-white hover:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200 bg-white shadow-xl">
                    {Object.keys(deviceCatalog).map((b) => (
                      <SelectItem key={b} value={b} className="font-medium">
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Model Select */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 font-display text-[13px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                    <Tag className="h-3.5 w-3.5" />
                  </span>
                  <span>Device Model</span>
                </Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="h-12 sm:h-13 rounded-2xl border-slate-200/90 bg-slate-50/60 px-4 font-semibold text-slate-800 shadow-sm transition-all hover:bg-white hover:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200 bg-white shadow-xl max-h-60">
                    {models.map((m) => (
                      <SelectItem key={m} value={m} className="font-medium">
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Repair Type Select */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 font-display text-[13px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <Wrench className="h-3.5 w-3.5" />
                  </span>
                  <span>Repair Service</span>
                </Label>
                <Select
                  value={repairType}
                  onValueChange={(v) => setRepairType(v as RepairType)}
                >
                  <SelectTrigger className="h-12 sm:h-13 rounded-2xl border-slate-200/90 bg-slate-50/60 px-4 font-semibold text-slate-800 shadow-sm transition-all hover:bg-white hover:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200 bg-white shadow-xl max-h-60">
                    {repairTypes.map((r) => (
                      <SelectItem key={r} value={r} className="font-medium">
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Device Condition Select */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 font-display text-[13px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                    <Activity className="h-3.5 w-3.5" />
                  </span>
                  <span>Current Condition</span>
                </Label>
                <Select
                  value={condition}
                  onValueChange={(v) => setCondition(v as Condition)}
                >
                  <SelectTrigger className="h-12 sm:h-13 rounded-2xl border-slate-200/90 bg-slate-50/60 px-4 font-semibold text-slate-800 shadow-sm transition-all hover:bg-white hover:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200 bg-white shadow-xl">
                    {conditions.map((c) => (
                      <SelectItem key={c} value={c} className="font-medium">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2.5 rounded-2xl bg-slate-50/80 p-3.5 border border-slate-100 text-xs font-semibold text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Includes OEM Grade-A Parts, Precision Labor & 12 Months Warranty</span>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border border-blue-100/90 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 p-6 sm:p-8 shadow-[0_16px_40px_rgb(37,99,235,0.08)] backdrop-blur-xl">
            {/* Ambient inner halo */}
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-200/60 shadow-sm">
                  Estimated Total
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Free Diagnostics Included
                </span>
              </div>

              {/* Dynamic Price Display */}
              <div className="mt-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={result.price}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-baseline gap-1.5"
                  >
                    <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                      ₹{result.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Inc. Taxes
                    </span>
                  </motion.div>
                </AnimatePresence>
                <p className="mt-1 font-display text-xs text-slate-500 font-medium">
                  {brand} {model} • {repairType}
                </p>
              </div>

              {/* Metric Highlights */}
              <div className="mt-6 space-y-3 rounded-2xl bg-white/95 p-4 border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Clock className="h-4 w-4 text-blue-600" /> Estimated Time:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{result.time}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2 text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> Warranty:
                  </span>
                  <span className="font-mono font-bold text-emerald-700">{result.warranty}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Sparkles className="h-4 w-4 text-indigo-600" /> Device Rating:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{condition}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(`Hi Chand Mobile, I'd like a quote for ${brand} ${model} (${repairType}, Condition: ${condition}). Estimated: ₹${result.price}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-5 py-3.5 font-display text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Quote</span>
              </a>

              <BookingDialog
                trigger={
                  <button className="group flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] px-5 py-3.5 font-display text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-[0.98]">
                    <span>Book Repair</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
