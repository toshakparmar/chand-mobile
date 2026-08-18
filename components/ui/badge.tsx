import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "signal";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]",
        variant === "default" && "bg-accent-light/60 text-accent border border-accent/20",
        variant === "outline" && "border border-surface-border text-muted bg-white/60",
        variant === "signal" && "bg-signal/10 text-signal border border-signal/30",
        className
      )}
      {...props}
    />
  );
}
