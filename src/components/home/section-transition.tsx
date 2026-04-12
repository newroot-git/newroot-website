"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionTransitionProps {
  color?: string;
}

export default function SectionTransition({
  color = "#0055FF",
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The glow expands as you scroll through the transition zone
  const glowScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1.2, 1.2, 0.3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.6, 0.8, 0.6, 0]);
  // The glow sweeps vertically
  const glowY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <div
      ref={ref}
      className="relative h-[200px] overflow-hidden pointer-events-none -my-[100px] z-[1]"
    >
      {/* Main radial glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: glowY }}
      >
        <motion.div
          className="w-[120%] aspect-[3/1] rounded-[50%]"
          style={{
            scale: glowScale,
            opacity: glowOpacity,
            background: `radial-gradient(ellipse at center, ${color}25 0%, ${color}12 30%, ${color}06 55%, transparent 75%)`,
          }}
        />
      </motion.div>

      {/* Horizontal light streak */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          top: "50%",
          opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.3, 0]),
          background: `linear-gradient(90deg, transparent 5%, ${color}30 30%, ${color}50 50%, ${color}30 70%, transparent 95%)`,
        }}
      />
    </div>
  );
}
