"use client";

import { motion } from "framer-motion";

export default function HandwrittenDivider() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-[400px] mx-auto flex flex-col items-center gap-2">
        {/* Handwritten text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(24px,4vw,36px)] text-foreground/70 text-center leading-tight"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Don&apos;t take our word for it
        </motion.p>

        {/* Hand-drawn curvy arrow pointing down */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
            <motion.path
              d="M20 5 C22 15, 28 20, 25 30 C22 38, 18 40, 20 45"
              stroke="#3A3A3A"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            />
            <motion.path
              d="M15 40 L20 47 L25 40"
              stroke="#3A3A3A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.9, duration: 0.3, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
