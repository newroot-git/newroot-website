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
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            Track record
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em]"
          >
            Results that speak for{" "}
            <span className="font-display italic font-normal">themselves.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[800px] mx-auto">
          {[
            { target: 50, suffix: "+", label: "Projects shipped" },
            { target: 8, suffix: " days", label: "Average delivery" },
            { target: 94, suffix: "%", label: "Retainer rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-foreground/[0.06] p-8 text-center"
            >
              <div className="text-[clamp(36px,5vw,48px)] font-bold text-foreground leading-none mb-2">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
