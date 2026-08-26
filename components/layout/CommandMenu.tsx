"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  Wrench,
  Smartphone,
  Banknote,
  Tag,
  ShieldCheck,
  MapPin,
  Sparkles,
  Info,
  HelpCircle,
} from "lucide-react";
import { services } from "@/lib/data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/60 text-slate-700 transition-all hover:bg-white hover:text-blue-600 backdrop-blur-md shadow-xs"
      >
        <Search className="h-[18px] w-[18px]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl overflow-hidden p-0 shadow-2xl rounded-3xl [&>button]:hidden">
          <DialogTitle className="sr-only">Quick Navigation Search</DialogTitle>
          <Command className="flex h-full w-full flex-col bg-white">
            <div className="flex items-center border-b border-slate-100 px-4">
              <Search className="mr-2 h-5 w-5 shrink-0 text-slate-400" />
              <Command.Input
                placeholder="Search repairs, buy phones, sell device..."
                className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm font-semibold outline-none placeholder:text-slate-400 placeholder:font-normal"
              />
            </div>
            <Command.List className="max-h-[340px] overflow-y-auto overflow-x-hidden px-2 py-3">
              <Command.Empty className="py-6 text-center text-sm text-slate-500 font-medium">
                No matching results found.
              </Command.Empty>

              {/* Main Pages */}
              <Command.Group heading="Main Hubs" className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1.5">
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/buy"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Smartphone className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Buy Certified Refurbished Phones</span>
                </Command.Item>

                <Command.Item
                  onSelect={() => runCommand(() => router.push("/sell"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  <Banknote className="mr-3 h-4 w-4 text-emerald-600" />
                  <span>Sell Old Phone for Instant Cash</span>
                </Command.Item>

                <Command.Item
                  onSelect={() => runCommand(() => router.push("/repair-pricing"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Tag className="mr-3 h-4 w-4 text-indigo-600" />
                  <span>Transparent Repair Pricing Matrix</span>
                </Command.Item>

                <Command.Item
                  onSelect={() => runCommand(() => router.push("/book-repair"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Sparkles className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Book a Priority Repair</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator className="-mx-2 my-2 h-px bg-slate-100" />

              {/* Repair Services */}
              <Command.Group heading="Repair Services" className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1.5">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Command.Item
                      key={service.slug}
                      onSelect={() => runCommand(() => router.push(`/services`))}
                      className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      <Icon className="mr-3 h-4 w-4 text-slate-400" />
                      <span>{service.name}</span>
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Separator className="-mx-2 my-2 h-px bg-slate-100" />

              {/* Company & Support */}
              <Command.Group heading="Company &amp; Support" className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1.5">
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/about"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  <Info className="mr-3 h-4 w-4 text-slate-400" />
                  <span>About Us &amp; Workshop Lab</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/contact"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  <MapPin className="mr-3 h-4 w-4 text-slate-400" />
                  <span>Store Location &amp; Map</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/faq"))}
                  className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  <HelpCircle className="mr-3 h-4 w-4 text-slate-400" />
                  <span>Frequently Asked Questions</span>
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
