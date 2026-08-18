import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-surface-border bg-surface px-4 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 hover:bg-surface-2",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
