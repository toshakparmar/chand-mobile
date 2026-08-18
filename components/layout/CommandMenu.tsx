"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, MonitorSmartphone, BatteryCharging, ShieldCheck, MapPin } from "lucide-react";
import { services } from "@/lib/data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function CommandMenu() {
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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/40 text-slate-600 transition-all hover:bg-white/60 backdrop-blur-md"
      >
        <Search className="h-[18px] w-[18px]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl overflow-hidden p-0 shadow-2xl [&>button]:hidden">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <Command className="flex h-full w-full flex-col bg-white">
            <div className="flex items-center border-b border-surface-border/40 px-4">
              <Search className="mr-2 h-5 w-5 shrink-0 text-muted" />
              <Command.Input
                placeholder="Type a command or search..."
                className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden px-2 py-3">
              <Command.Empty className="py-6 text-center text-sm text-muted">
                No results found.
              </Command.Empty>

              <Command.Group heading="Services" className="text-xs font-medium text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Command.Item
                      key={service.slug}
                      onSelect={() => runCommand(() => window.location.hash = "services")}
                      className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none aria-selected:bg-accent-light/30 aria-selected:text-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      <span>{service.name}</span>
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Separator className="-mx-2 my-2 h-px bg-surface-border/40" />

              <Command.Group heading="Quick Links" className="text-xs font-medium text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                <Command.Item
                  onSelect={() => runCommand(() => window.location.hash = "estimator")}
                  className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none aria-selected:bg-accent-light/30 aria-selected:text-accent transition-colors"
                >
                  <MonitorSmartphone className="mr-3 h-4 w-4" />
                  <span>Get an Estimate</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => window.location.hash = "contact")}
                  className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none aria-selected:bg-accent-light/30 aria-selected:text-accent transition-colors"
                >
                  <MapPin className="mr-3 h-4 w-4" />
                  <span>Find our Store</span>
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
