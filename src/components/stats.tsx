"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target]);
  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-[120px] px-6 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-accent tracking-wide block mb-4"
        >
          Track record
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1] max-w-[600px] mb-14"
        >
          Results that{" "}
          <span className="inline-flex items-center justify-center w-[0.8em] h-[0.8em] rounded-xl bg-accent/10 align-middle mx-0.5">
            <svg className="w-[0.4em] h-[0.4em] text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </span>{" "}
          speak for themselves
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { target: 50, suffix: "+", label: "Projects shipped", accent: true },
            { target: 8, suffix: " days", label: "Average delivery", accent: false },
            { target: 94, suffix: "%", label: "Retainer rate", accent: false },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
              className={`p-8 rounded-2xl text-center ${
                stat.accent
                  ? "bg-[#0055FF] text-white"
                  : "bg-background shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/[0.04]"
              }`}
            >
              <div className={`text-[clamp(36px,5vw,56px)] font-bold leading-none mb-2 ${stat.accent ? "" : "text-foreground"}`}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className={`text-sm ${stat.accent ? "text-white/60" : "text-muted"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
