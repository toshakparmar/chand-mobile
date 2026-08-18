import Link from "next/link";
import { Camera, Users, AtSign, PlayCircle } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/lib/data";
import { businessConfig } from "@/config/business";

export function Footer() {
  return (
    <footer id="contact-footer" className="relative bg-slate-900 text-slate-300">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-2 to-accent shadow-md shadow-accent/30">
                <span className="font-display text-sm font-bold text-white">FP</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-semibold tracking-tight text-white">
                  {businessConfig.shortName}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Mobile Repair
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {businessConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Camera, Users, AtSign, PlayCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-accent hover:text-accent hover:shadow-md hover:shadow-accent/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/#why-us" className="text-slate-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/#process" className="text-slate-400 hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link href="/#reviews" className="text-slate-400 hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link href="/book-repair" className="text-slate-400 hover:text-accent transition-colors">Book a Repair</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href="/#services" className="text-slate-400 hover:text-accent transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Support
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/#faq" className="text-slate-400 hover:text-accent transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          <p className="font-mono">{businessConfig.phone} · {businessConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}
