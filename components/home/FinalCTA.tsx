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
    <section className="relative overflow-hidden bg-slate-900 py-20">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Grid overlay */}
      <GridPattern
        width={64}
        height={64}
        x={-1}
        y={-1}
        strokeDasharray="4 4"
        className="opacity-30 stroke-blue-500/20"
      />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <FadeIn>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-md shadow-[0_0_30px_rgb(37,99,235,0.2)]"
          >
            <Wrench className="h-8 w-8 text-blue-400" />
          </motion.div>

          <h2 className="text-balance font-display text-[3rem] leading-[1.1] font-bold tracking-tighter text-white sm:text-5xl lg:text-[4.5rem]">
            Ready to bring your device <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">back to life?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.125rem] leading-[1.7] text-slate-400 font-medium">
            Join thousands of satisfied customers. Book your repair online today and get your
            device working like new.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookingDialog
              trigger={
                <Button size="lg" className="group w-full sm:w-auto h-14 text-lg">
                  <span className="relative z-10 text-lg">Book a Repair</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              }
            />
            <a href={telLink()} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="group w-full sm:w-auto h-14 border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:text-white">
                <span className="relative z-10 text-lg">Call for Free Estimate</span>
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
