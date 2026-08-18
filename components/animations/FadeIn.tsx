"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
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
      viewport={{ once, margin: "100px 0px 0px 0px", amount: "some" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
