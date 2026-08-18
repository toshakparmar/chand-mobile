"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;

function SheetContent({
  className,
  children,
  open,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { open?: boolean }) {
  return (
    <DialogPrimitive.Portal forceMount>
      <AnimatePresence>
        {open && (
          <>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-md"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild forceMount {...props}>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                className={cn(
                  "fixed right-0 top-0 z-50 h-dvh w-[85vw] max-w-sm border-l border-surface-border/40 bg-white/95 backdrop-blur-xl p-6 shadow-2xl shadow-accent/5 focus:outline-none overflow-y-auto",
                  className
                )}
              >
                {children}
                <DialogPrimitive.Close className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-ink transition-all hover:border-accent hover:bg-accent/5 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </DialogPrimitive.Close>
              </motion.div>
            </DialogPrimitive.Content>
          </>
        )}
      </AnimatePresence>
    </DialogPrimitive.Portal>
  );
}

export { Sheet, SheetTrigger, SheetContent };
