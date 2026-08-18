"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/booking/BookingDialog";

export function SpecialOffer() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-2 via-accent to-blue-400 p-10 sm:p-16 text-white">
          {/* Floating shapes */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-[60px]" />
          <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-white/10 blur-[40px]" />

          {/* Animated sparkles */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-10 top-10 hidden sm:block"
          >
            <Sparkles className="h-6 w-6 text-white/60" />
          </motion.div>
          <motion.div
            animate={{ opacity: [0.2, 0.7, 0.2], y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            className="absolute right-32 bottom-12 hidden sm:block"
          >
            <Sparkles className="h-4 w-4 text-white/40" />
          </motion.div>

          {/* Geometric shapes */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="h-32 w-32 rounded-2xl border border-white/10"
            />
          </div>

          <div className="relative max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
              Limited-time offer
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Your first repair just got better.
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Get <span className="font-display text-2xl font-bold text-white">15% OFF</span> your first repair
              when you book online this month.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BookingDialog trigger={
                <Button size="lg" className="bg-white text-accent-2 hover:bg-white/90 shadow-xl shadow-black/10 hover:shadow-2xl">
                  Claim My Offer
                </Button>
              } />
              <p className="text-xs text-white/50">*Terms apply. Cannot be combined with other offers.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
