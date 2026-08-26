"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Sparkles, ShieldCheck, Zap, Clock, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { services } from "@/lib/data";
import { businessConfig, waLink, telLink } from "@/config/business";
import { toast } from "sonner";

type FormState = {
  name: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  repairType: string;
  date: string;
  timeSlot: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  brand: "",
  model: "",
  repairType: "",
  date: "",
  timeSlot: "Morning (10:00 AM - 1:00 PM)",
  message: "",
};

export default function BookRepairPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[0-9+\s-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.brand.trim()) next.brand = "Device brand is required";
    if (!form.repairType) next.repairType = "Select a repair type";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
    toast.success("Priority repair slot reserved!", {
      description: `We'll call ${form.phone} shortly to confirm your booking.`,
    });
  }

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.12] blur-[140px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-emerald-300/[0.1] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="mb-5 bg-white/80 border-blue-200/80 text-blue-600 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2 text-blue-600" />
            <span className="font-semibold text-slate-800">Priority Service Booking</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Schedule your repair. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
              Skip the queue.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Reserve your technician appointment ahead of time for express same-day turnaround.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              1-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-600" />
              15-Min Free Diagnosis
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" />
              No Fix, No Fee
            </span>
          </div>
        </FadeIn>

        {/* Booking Card */}
        <FadeIn delay={0.15} className="mt-10 sm:mt-14">
          <div className="rounded-[2.5rem] border border-slate-200/90 bg-white/80 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-950">
                  Appointment Reserved Successfully!
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{form.name}</strong>. Our service advisor will call{" "}
                  <strong>{form.phone}</strong> to confirm your slot for {form.brand} {form.model}.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm(initialState);
                    }}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50"
                  >
                    Book Another Device
                  </button>
                  <a
                    href={waLink(`Hi Chand Mobile, I just submitted an online repair booking for my ${form.brand} ${form.model}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="mt-1.5 h-12 rounded-2xl border-slate-200/90 bg-slate-50/60"
                    />
                    {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="mt-1.5 h-12 rounded-2xl border-slate-200/90 bg-slate-50/60"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="brand" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Device Brand
                    </Label>
                    <Input
                      id="brand"
                      value={form.brand}
                      onChange={(e) => update("brand", e.target.value)}
                      placeholder="e.g. Apple, Samsung, OnePlus"
                      className="mt-1.5 h-12 rounded-2xl border-slate-200/90 bg-slate-50/60"
                    />
                    {errors.brand && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.brand}</p>}
                  </div>

                  <div>
                    <Label htmlFor="model" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Device Model
                    </Label>
                    <Input
                      id="model"
                      value={form.model}
                      onChange={(e) => update("model", e.target.value)}
                      placeholder="e.g. iPhone 15 Pro, S24 Ultra"
                      className="mt-1.5 h-12 rounded-2xl border-slate-200/90 bg-slate-50/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Repair Issue
                    </Label>
                    <Select
                      value={form.repairType}
                      onValueChange={(v) => update("repairType", v)}
                    >
                      <SelectTrigger className="mt-1.5 h-12 rounded-2xl border-slate-200/90 bg-slate-50/60 font-semibold text-slate-800">
                        <SelectValue placeholder="Select repair required" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200 bg-white shadow-xl">
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.name}>
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.repairType && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.repairType}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      className="mt-1.5 h-12 rounded-2xl border-slate-200/90 bg-slate-50/60 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Describe any other symptoms (e.g. water exposure, touch stutter, battery draining fast)..."
                    className="mt-1.5 rounded-2xl border-slate-200/90 bg-slate-50/60 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-14 rounded-2xl text-base font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-95"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Reserving Priority Slot…
                    </>
                  ) : (
                    "Confirm Priority Repair Booking"
                  )}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
