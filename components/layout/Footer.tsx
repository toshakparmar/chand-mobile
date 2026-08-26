import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { services } from "@/lib/data";
import { businessConfig, telLink, waLink } from "@/config/business";

export function Footer() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessConfig.name} ${businessConfig.address} ${businessConfig.city}`
  )}`;

  return (
    <footer className="relative mt-16 bg-transparent text-slate-300">
      {/* Curved Container Wrapper with Deep Dark Blue Shade */}
      <div className="relative overflow-hidden rounded-t-[3rem] sm:rounded-t-[4.5rem] border-t border-slate-800/80 bg-gradient-to-b from-[#091428] via-[#0b1730] to-[#050b18] px-5 pt-20 pb-12 sm:px-8 sm:pt-28 sm:pb-16 shadow-[0_-25px_60px_rgba(5,11,24,0.3)]">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl">
          
          {/* Top Brand Statement: Massive Typographic Headline */}
          <div className="text-center">
            <h1 className="font-display font-black tracking-tighter uppercase select-none text-[2.25rem] leading-none sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] 2xl:text-[10rem] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-2xl">
              CHAND MOBILE EXPERT
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-300">
              Expert smartphone repairs, genuine OEM parts, and lightning-fast turnarounds.
              Welcome to the future of express mobile device care.
            </p>

            {/* Centered Floating Quick Switcher */}
            <div className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/90 p-1.5 shadow-2xl backdrop-blur-xl">
              <Link
                href="/book-repair"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                <span>Book a Repair</span>
              </Link>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-300 transition-all hover:text-white active:scale-95"
              >
                <Phone className="h-3.5 w-3.5 text-blue-400" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Navigation & Interactive Connect Grid */}
          <div className="mt-20 sm:mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 border-t border-slate-800/80 pt-16">
            
            {/* Column 1: Company (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-slate-500">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/#why-us" className="text-slate-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="text-slate-400 hover:text-blue-400 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#reviews" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Visit Our Store
                  </Link>
                </li>
                <li>
                  <Link href="/book-repair" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Priority Booking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources & Services (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-slate-500">
                Services &amp; Repairs
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link href="/#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Trust & Reviews Card (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-slate-500">
                Trust &amp; Reviews
              </h4>
              
              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4.5 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-white">Wall of Love</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </div>

                <div className="mt-4 flex items-center gap-3">
                  {/* Customer Avatars */}
                  <div className="flex -space-x-2 overflow-hidden">
                    {["D", "A", "R", "M"].map((initial, i) => (
                      <div
                        key={i}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-tr from-blue-600 to-indigo-500 text-[10px] font-black text-white shadow-xs"
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="mt-0.5 font-bold text-slate-200">10k+ happy clients</p>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-300 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>1-Year Certified Warranty</span>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Connect Grid (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-slate-500 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Instant Connect</span>
              </h4>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <a
                  href={waLink("Hi Chand Mobile Expert, I have an inquiry about repairing my smartphone.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-center transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/10 active:scale-95 group"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366] transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-bold text-slate-300 group-hover:text-white">WhatsApp</span>
                </a>

                <a
                  href={telLink()}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-center transition-all hover:border-blue-500/60 hover:bg-blue-600/10 active:scale-95 group"
                >
                  <Phone className="h-4 w-4 text-blue-400 transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-bold text-slate-300 group-hover:text-white">Call Now</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-center transition-all hover:border-indigo-500/60 hover:bg-indigo-600/10 active:scale-95 group"
                >
                  <MapPin className="h-4 w-4 text-indigo-400 transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-bold text-slate-300 group-hover:text-white">Directions</span>
                </a>

                <Link
                  href="/book-repair"
                  className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-center transition-all hover:border-emerald-500/60 hover:bg-emerald-600/10 active:scale-95 group"
                >
                  <Sparkles className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-bold text-slate-300 group-hover:text-white">Book Online</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="mt-16 flex flex-col gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Warranty Terms</a>
            </div>
            <p className="font-mono text-slate-400">{businessConfig.phone} · {businessConfig.email}</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
