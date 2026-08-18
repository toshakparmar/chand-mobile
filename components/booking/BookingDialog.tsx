"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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

export function BookingDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
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
    // Frontend-only demo submission — wire up to an API route or CRM here.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("idle");
    setOpen(false);
    toast.success("Repair request received!", {
      description: `We'll text and call ${form.phone || "you"} shortly to confirm.`,
    });
    setForm(initialState);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        setStatus("idle");
        setForm(initialState);
        setErrors({});
      }, 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <AnimatePresence mode="wait">
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <DialogHeader>
                <DialogTitle>Book a Repair</DialogTitle>
                <DialogDescription>
                  Tell us about your device — we&apos;ll confirm pricing before any work begins.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Aarav Mehta"
                  />
                  {errors.name && <p className="mt-1 text-xs text-signal">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-signal">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-signal">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="brand">Device Brand</Label>
                  <Input
                    id="brand"
                    value={form.brand}
                    onChange={(e) => update("brand", e.target.value)}
                    placeholder="Apple"
                  />
                  {errors.brand && <p className="mt-1 text-xs text-signal">{errors.brand}</p>}
                </div>
                <div>
                  <Label htmlFor="model">Device Model</Label>
                  <Input
                    id="model"
                    value={form.model}
                    onChange={(e) => update("model", e.target.value)}
                    placeholder="iPhone 15 Pro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label>Repair Type</Label>
                  <Select
                    value={form.repairType}
                    onValueChange={(v) => update("repairType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select repair" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.name}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.repairType && (
                    <p className="mt-1 text-xs text-signal">{errors.repairType}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Anything else we should know?"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending Request…
                  </>
                ) : (
                  "Request Repair"
                )}
              </Button>
            </motion.form>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
