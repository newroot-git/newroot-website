"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MarqueeStrip({
  texts,
  variant = "default",
}: {
  texts: string[];
  variant?: "default" | "accent";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const bgClass =
    variant === "accent"
      ? "bg-accent text-white/80"
      : "bg-surface text-body/40";

  const dotClass =
    variant === "accent" ? "bg-white/30" : "bg-body/15";

  // Double the texts for seamless loop
  const items = [...texts, ...texts];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`${bgClass} py-4 overflow-hidden select-none`}
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {items.map((text, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold text-sm tracking-[0.08em] uppercase mx-8">
              {text}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
