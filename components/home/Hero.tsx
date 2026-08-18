            "use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Map, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { GridPattern } from "@/components/animations/GridPattern";
import { businessConfig, telLink, waLink } from "@/config/business";

export function Hero() {
  const deviceRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      ctx = gsap.context(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        gsap.to(deviceRef.current, {
          y: -18,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        badgeRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.to(el, {
            y: i % 2 === 0 ? -12 : 12,
            duration: 2.6 + i * 0.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.2,
          });
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pt-32 bg-[#f8fafc]">
      {/* Grid backdrop */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className="opacity-[0.15] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,_black_40%,_transparent_100%)]"
      />

      {/* Gradient orbs for Glassmorphism backgrounds */}
      <div className="absolute left-[5%] top-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-[5%] top-[15%] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute bottom-[10%] left-[40%] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-1.5 backdrop-blur-md shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
              Premium Repair Center
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-[56px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-7xl lg:text-[80px]"
          >
            Revive your <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">devices.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl font-medium"
          >
            Expert technicians, genuine parts, and lightning-fast turnarounds. We bring your essential tech back to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <BookingDialog
              trigger={
                <button className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 font-display text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.8)]">
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                  Book Repair <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              }
            />
            <a href="#services">
              <button className="flex h-14 items-center gap-2 rounded-full border border-white/60 bg-white/50 px-8 font-display text-base font-bold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-white/80 hover:shadow-md">
                Our Services
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-5 sm:mt-10"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700 mt-1">
                <span className="font-bold text-slate-900">4.9/5</span> from 10k+ reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right — device visual with heavy glassmorphism badges */}
        <div className="relative mx-auto flex h-[440px] w-full max-w-lg items-center justify-center sm:h-[520px]">
          {/* Spinning orbit rings */}
          <div className="absolute h-[420px] w-[420px] animate-spin-slow rounded-full border-2 border-dashed border-blue-400/20 sm:h-[540px] sm:w-[540px]" />
          <div className="absolute h-[340px] w-[340px] animate-spin-slow [animation-direction:reverse] rounded-full border border-indigo-400/20 sm:h-[440px] sm:w-[440px]" />

          {/* Primary Image Frame */}
          <div
            ref={deviceRef}
            className="relative z-10 flex h-[380px] w-[280px] overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/20 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:h-[500px] sm:w-[340px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/hero_repair_tech.jpg"
                alt="Professional phone repair technician"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 280px, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Secondary Layered Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-10 -right-4 z-20 hidden sm:flex h-[200px] w-[200px] overflow-hidden rounded-[2rem] border-[4px] border-white/80 bg-white/40 shadow-xl shadow-blue-900/15 backdrop-blur-xl"
          >
            <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
              <Image
                src="/images/showcase/battery.jpg"
                alt="Battery repair"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating badges - Premium Glassmorphism */}
          <div
            ref={(el) => { badgeRefs.current[0] = el; }}
            className="absolute left-[-20px] top-16 z-30 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-xl sm:left-[-40px]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">Expert</p>
              <p className="font-display text-sm font-bold text-slate-800">Technicians</p>
            </div>
          </div>

          <div
            ref={(el) => { badgeRefs.current[1] = el; }}
            className="absolute bottom-32 right-[-20px] z-30 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-xl sm:right-[-60px]"
          >
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">Warranty</p>
              <p className="font-display text-sm font-bold text-slate-800">12 Months</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Bottom Action Pill (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed bottom-8 left-1/2 z-50 hidden lg:flex w-max -translate-x-1/2 items-center justify-center gap-3 rounded-full border border-white/60 bg-white/70 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-2xl"
      >
        <BookingDialog
          trigger={
            <button className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-transparent px-3 py-2 sm:px-6 sm:py-2.5 font-display text-[13px] sm:text-[14px] font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <Wrench className="relative z-10 h-4 w-4 shrink-0 text-[#00c853] transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110" /> 
              <span className="relative z-10">Book</span>
            </button>
          }
        />
        <div className="h-5 w-px shrink-0 bg-slate-300 sm:h-6" />
        <a 
          href={waLink("Hi, I would like to know about repairing my device.")} 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900 px-4 py-2 sm:px-6 sm:py-2.5 font-display text-[13px] sm:text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_4px_20px_rgba(37,211,102,0.2)]"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#25D366]/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          <svg className="relative z-10 h-4 w-4 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg> 
          <span className="relative z-10">WhatsApp</span>
        </a>
      </motion.div>
    </section>
  );
}
