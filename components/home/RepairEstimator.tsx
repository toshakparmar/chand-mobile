"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";
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
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <FadeIn className="max-w-xl">
        <Badge>SEC.05 — Estimator</Badge>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Know your <span className="gradient-text-blue">repair cost.</span>
        </h2>
        <p className="mt-4 text-muted">
          Get an instant demo estimate. Final pricing is always confirmed after a free diagnosis.
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-6 rounded-3xl border border-surface-border/40 bg-white/70 backdrop-blur-sm p-6 shadow-lg shadow-accent/5 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex h-full flex-col justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            <div>
              <Label>Device Brand</Label>
              <Select value={brand} onValueChange={handleBrandChange}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {Object.keys(deviceCatalog).map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Device Model</Label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {models.map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Repair Type</Label>
              <Select value={repairType} onValueChange={(v) => setRepairType(v as RepairType)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {repairTypes.map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Device Condition</Label>
              <Select value={condition} onValueChange={(v) => setCondition(v as Condition)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {conditions.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-surface-border/60 bg-gradient-to-b from-accent-light/20 to-white p-7 shadow-inner shadow-accent/5 sm:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Estimated Price
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={result.price}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-1 font-display text-4xl font-semibold gradient-text-blue"
              >
                ₹{result.price.toLocaleString("en-IN")}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-6 space-y-4 border-t border-surface-border/60 pt-6">
            <div className="flex items-center gap-3 text-[14.5px] font-medium text-slate-700 sm:text-[15px]">
              <Clock className="h-5 w-5 shrink-0 text-blue-600" /> Est. time: {result.time}
            </div>
            <div className="flex items-center gap-3 text-[14.5px] font-medium text-slate-700 sm:text-[15px]">
              <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" /> {result.warranty}
            </div>
            <div className="flex items-center gap-3 text-[14.5px] font-medium text-slate-700 sm:text-[15px]">
              <Sparkles className="h-5 w-5 shrink-0 text-blue-600" /> Condition: {condition}
            </div>
          </div>

          <BookingDialog
            trigger={
              <button className="mt-8 w-full rounded-full bg-blue-600 py-3 font-display text-[14px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/25 active:scale-[0.98] sm:py-3.5 sm:text-[15px] sm:shadow-lg">
                Book This Repair
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
