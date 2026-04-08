"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const nudges = [
  "Do it.",
  "You know you want to.",
  "We don't bite.",
  "Best decision you'll make today.",
  "It's free, seriously.",
];

export default function BookCallButton({
  size = "default",
  className = "",
}: {
  size?: "default" | "large";
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [nudgeIndex, setNudgeIndex] = useState(0);

  const handleEnter = useCallback(() => {
    setHovered(true);
    setNudgeIndex((prev) => (prev + 1) % nudges.length);
  }, []);

  const isLarge = size === "large";

  return (
    <div className={`relative inline-flex ${className}`}>
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={nudgeIndex}
            initial={{ opacity: 0, y: 4, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-10"
          >
            <div className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
              {nudges[nudgeIndex]}
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onMouseEnter={handleEnter}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center rounded-lg bg-accent text-white font-medium transition-shadow duration-300 ${
            isLarge ? "h-14 px-10 text-lg" : "h-12 px-7"
          }`}
          style={{ ["--glow" as string]: "color-mix(in srgb, var(--accent) 40%, transparent)" }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 4px 24px color-mix(in srgb, var(--accent) 40%, transparent)`}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
        >
          Book a call
        </Link>
      </motion.div>
    </div>
  );
}
