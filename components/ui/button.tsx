import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-accent-2 to-accent text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 active:scale-[0.97]",
        outline:
          "border border-surface-border text-ink bg-white/60 backdrop-blur-sm hover:border-accent hover:text-accent hover:bg-accent-light/30 active:scale-[0.97]",
        ghost: "text-ink hover:text-accent hover:bg-accent-light/20 bg-transparent active:scale-[0.97]",
        signal:
          "bg-gradient-to-r from-signal to-amber-400 text-white shadow-lg shadow-signal/20 hover:shadow-xl hover:shadow-signal/30 hover:brightness-110 active:scale-[0.97]",
        glow:
          "bg-gradient-to-r from-accent-2 to-accent text-white animate-glow-pulse hover:brightness-110 active:scale-[0.97]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
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
