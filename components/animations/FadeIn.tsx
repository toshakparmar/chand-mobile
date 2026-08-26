"use client";

import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * GPU-accelerated fade-in animation wrapper.
 * Uses `will-change: transform, opacity` and Framer Motion's viewport
 * detection to animate elements only when they enter the visible area.
 * Memoized to prevent unnecessary re-renders during parent state changes.
 */
export const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.5,
  scale = 1,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  scale?: number;
  className?: string;
  once?: boolean;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y, scale: scale < 1 ? scale : 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "50px 0px 0px 0px", amount: 0.1 }}
      variants={variants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
});
