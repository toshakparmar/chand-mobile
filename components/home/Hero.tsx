"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Wrench, Zap, Smartphone, Tablet, Laptop, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { GridPattern } from "@/components/animations/GridPattern";
import { waLink } from "@/config/business";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";

export type DeviceType = "phone" | "tablet" | "laptop";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/90 bg-white/80 p-5 shadow-xl backdrop-blur-2xl drop-shadow-sm">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20" />
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
        </div>
        <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider animate-pulse">Initializing 3D Lab…</span>
      </div>
    </div>
  ),
});

export function Hero() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("phone");
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { amount: 0.2 });

  // Auto-switch devices every 10 seconds
  useEffect(() => {
    const devices: DeviceType[] = ["phone", "tablet", "laptop"];
    const interval = setInterval(() => {
      setActiveDevice((current) => {
        const currentIndex = devices.indexOf(current);
        const nextIndex = (currentIndex + 1) % devices.length;
        return devices[nextIndex];
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-24 lg:pt-32">
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
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[5%] top-[15%] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2], x: [0, 20, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[40%] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left — copy */}
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <Badge variant="outline" className="mb-8 bg-white/60 backdrop-blur-md px-3.5 py-1">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Premium Repair Center
            </Badge>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <h1 className="font-display text-[3.5rem] font-bold leading-[1.05] tracking-tighter text-slate-950 sm:text-6xl lg:text-[5rem]">
              Revive your <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeDevice}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-2"
                >
                  {activeDevice === 'phone' ? 'phone.' : activeDevice === 'tablet' ? 'tablet.' : 'laptop.'}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <p className="mt-6 max-w-lg text-[1.125rem] leading-[1.7] text-slate-600 font-medium">
              Expert technicians, genuine parts, and lightning-fast turnarounds. We bring your essential tech back to life with uncompromised quality.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="mt-10 flex flex-wrap items-center gap-4">
            <BookingDialog
              trigger={
                <Button size="lg" className="group">
                  <span className="relative z-10">Book Repair</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              }
            />
            <a href="#services">
              <Button variant="outline" size="lg" className="group bg-white/50 border-slate-300/60 shadow-sm backdrop-blur-md">
                Our Services
              </Button>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-110">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current drop-shadow-sm" />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">
                <span className="font-bold text-slate-900">4.9/5</span> from 10k+ reviews
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — 3D interactive visual with heavy glassmorphism badges */}
        <div className="relative mx-auto flex h-[440px] w-full max-w-2xl items-center justify-center sm:h-[520px]">
          {/* 3D React Three Fiber Canvas (Non-blocking Lazy Mount) */}
          <div className="relative z-10 flex h-[420px] w-full max-w-[500px] justify-center sm:h-[540px] sm:max-w-[700px] cursor-grab active:cursor-grabbing">
            <HeroCanvas activeDevice={activeDevice} />
          </div>

          {/* Floating badges - Premium Glassmorphism */}
          {/* Top Left */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, -12, 0], opacity: 1 }}
            transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, opacity: { duration: 0.8 } }}
            className="absolute left-1 sm:-left-6 lg:-left-10 top-12 z-30 flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-white/60 bg-white/70 p-2.5 sm:p-3 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 shrink-0">
              <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Expert</p>
              <p className="font-display text-xs sm:text-sm font-bold text-slate-800">Technicians</p>
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, 12, 0], opacity: 1 }}
            transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }, opacity: { duration: 0.8 } }}
            className="absolute bottom-16 right-1 sm:-right-6 lg:-right-10 z-30 flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-white/60 bg-white/70 p-2.5 sm:p-3 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Warranty</p>
              <p className="font-display text-xs sm:text-sm font-bold text-slate-800">12 Months</p>
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.8 } }}
            className="absolute right-[-10px] top-6 z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">Quality</p>
              <p className="font-display text-sm font-bold text-slate-800">Genuine Parts</p>
            </div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{ y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }, opacity: { duration: 0.8 } }}
            className="absolute bottom-8 left-[-10px] z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">Fast</p>
              <p className="font-display text-sm font-bold text-slate-800">Same Day Repair</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Bottom Action Pill (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed bottom-8 left-1/2 z-50 hidden lg:flex w-max -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/60 bg-white/70 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-2xl"
      >
        <AnimatePresence mode="wait">
          {isHeroInView ? (
            <motion.div
              key="device-toggle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1"
            >
              {(['phone', 'tablet', 'laptop'] as const).map((device) => (
                <button
                  key={device}
                  onClick={() => setActiveDevice(device)}
                  className={`group relative flex items-center justify-center rounded-full px-4 py-2.5 transition-colors ${activeDevice === device ? "text-white" : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                    }`}
                >
                  {activeDevice === device && (
                    <motion.div
                      layoutId="activeDevicePill"
                      className="absolute inset-0 rounded-full bg-slate-950 shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {device === 'phone' && <Smartphone className={`h-[14px] w-[14px] ${activeDevice === device ? 'text-white' : 'text-blue-500 group-hover:text-blue-600'}`} />}
                    {device === 'tablet' && <Tablet className={`h-[14px] w-[14px] ${activeDevice === device ? 'text-white' : 'text-purple-500 group-hover:text-purple-600'}`} />}
                    {device === 'laptop' && <Laptop className={`h-[14px] w-[14px] ${activeDevice === device ? 'text-white' : 'text-emerald-500 group-hover:text-emerald-600'}`} />}
                    <span className="capitalize font-bold text-sm tracking-wide">{device}</span>
                  </span>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="contact-actions"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <BookingDialog
                trigger={
                  <button className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-transparent px-6 py-2.5 font-display text-[14px] font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    <Wrench className="relative z-10 h-4 w-4 shrink-0 text-[#00c853] transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110" />
                    <span className="relative z-10">Book</span>
                  </button>
                }
              />
              <div className="h-6 w-px shrink-0 bg-slate-300" />
              <a
                href={waLink("Hi, I would like to know about repairing my device.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 font-display text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_4px_20px_rgba(37,211,102,0.2)]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#25D366]/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <svg className="relative z-10 h-4 w-4 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span className="relative z-10">WhatsApp</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
