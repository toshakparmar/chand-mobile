import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:bg-[100%_0] active:scale-[0.98]",
        secondary:
          "border border-slate-200/90 bg-white/70 text-slate-800 backdrop-blur-xl shadow-xs hover:border-blue-400/80 hover:bg-white hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98]",
        outline:
          "border border-slate-200/90 bg-white/70 text-slate-800 backdrop-blur-xl shadow-xs hover:border-blue-400/80 hover:bg-white hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98]",
        ghost:
          "text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 bg-transparent active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        dark:
          "bg-slate-950 text-white shadow-md hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
