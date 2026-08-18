import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[100px] w-full rounded-2xl border border-surface-border bg-surface px-4 py-3 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 hover:bg-surface-2",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
