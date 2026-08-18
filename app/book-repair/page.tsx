"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
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

type FormState = {
  name: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  repairType: string;
  date: string;
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
  }

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <Badge>Book a Repair</Badge>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Tell us what&apos;s wrong.
          </h1>
          <p className="mt-4 text-muted">
            We&apos;ll confirm transparent pricing before any work begins.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 rounded-3xl border border-surface-border bg-surface/50 p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-ok" />
                <h2 className="font-display text-2xl text-ink">Repair request received!</h2>
                <p className="max-w-sm text-muted">
                  We&apos;ll text and call {form.phone || "you"} shortly to confirm your slot
                  and give you a final quote.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setStatus("idle");
                    setForm(initialState);
                  }}
                >
                  Book Another Repair
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Aarav Mehta" />
                    {errors.name && <p className="mt-1 text-xs text-signal">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" />
                    {errors.phone && <p className="mt-1 text-xs text-signal">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
                  {errors.email && <p className="mt-1 text-xs text-signal">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="brand">Device Brand</Label>
                    <Input id="brand" value={form.brand} onChange={(e) => update("brand", e.target.value)} placeholder="Apple" />
                    {errors.brand && <p className="mt-1 text-xs text-signal">{errors.brand}</p>}
                  </div>
                  <div>
                    <Label htmlFor="model">Device Model</Label>
                    <Input id="model" value={form.model} onChange={(e) => update("model", e.target.value)} placeholder="iPhone 15 Pro" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label>Repair Type</Label>
                    <Select value={form.repairType} onValueChange={(v) => update("repairType", v)}>
                      <SelectTrigger><SelectValue placeholder="Select repair" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.name}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.repairType && <p className="mt-1 text-xs text-signal">{errors.repairType}</p>}
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Anything else we should know?" />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending Request…</>
                  ) : (
                    "Request Repair"
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </div>
  );
}
