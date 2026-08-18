"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { GridPattern } from "@/components/animations/GridPattern";
import { telLink } from "@/config/business";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-32">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-2/40 via-slate-900 to-slate-900" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      
      {/* Grid overlay */}
      <GridPattern
        width={64}
        height={64}
        x={-1}
        y={-1}
        strokeDasharray="4 4"
        className="opacity-20 stroke-accent/40"
      />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <FadeIn>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Wrench className="h-8 w-8 text-accent" />
          </motion.div>

          <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Ready to bring your device <span className="text-accent">back to life?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Join thousands of satisfied customers. Book your repair online today and get your
            device working like new.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookingDialog
              trigger={
                <Button size="lg" className="w-full sm:w-auto bg-accent text-white hover:bg-accent-2 shadow-xl shadow-accent/20">
                  Book a Repair <ArrowRight className="h-4 w-4" />
                </Button>
              }
            />
            <a href={telLink()} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:text-white backdrop-blur-md">
                Call for Free Estimate
              </Button>
            </a>
          </div>
          
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
            No fix, no fee policy • 12-month warranty
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
