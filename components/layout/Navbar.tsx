"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageCircle, ShieldCheck, Sparkles, Smartphone, Banknote, Tag } from "lucide-react";
import { Logo } from "./Logo";
import { CommandMenu } from "./CommandMenu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { businessConfig, telLink, waLink } from "@/config/business";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Buy Phones", href: "/buy", badge: "Hot" },
  { label: "Sell Device", href: "/sell", badge: "Cash" },
  { label: "Pricing", href: "/repair-pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto mt-4 flex max-w-[1240px] h-[72px] items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-2xl sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative font-display text-[14px] xl:text-[15px] font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[9px] font-black uppercase leading-tight ${
                      link.badge === "Hot"
                        ? "bg-rose-500 text-white"
                        : "bg-emerald-500 text-white"
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CommandMenu />
          <a
            href={waLink("Hi Chand Mobile, I have an inquiry about buying, selling, or repairing a device.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/60 text-slate-700 transition-all duration-300 hover:bg-white hover:text-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.25)] hover:-translate-y-0.5 backdrop-blur-md shadow-xs"
          >
            <svg className="relative z-10 h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
          <BookingDialog
            trigger={
              <button className="group relative flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-5 xl:px-6 font-bold text-xs xl:text-sm text-white shadow-[0_4px_14px_rgb(37,99,235,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgb(37,99,235,0.4)]">
                <span className="relative z-10">Book a Repair</span>
              </button>
            }
          />
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 lg:hidden shadow-xs"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Slide-Over Drawer */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent open={menuOpen}>
          <div className="mb-6">
            <Logo />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-base font-bold transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${
                        link.badge === "Hot" ? "bg-rose-500 text-white" : "bg-emerald-500 text-white"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
            <BookingDialog
              trigger={
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 font-bold text-sm text-white shadow-md"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Book a Repair</span>
                </button>
              }
            />
            <a
              href={waLink("Hi Chand Mobile, I have an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] font-bold text-sm text-white shadow-xs"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Store</span>
            </a>
            <a
              href={telLink()}
              className="flex w-full h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 font-bold text-sm text-slate-800"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span>Call {businessConfig.phone}</span>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
