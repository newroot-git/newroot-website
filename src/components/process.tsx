"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "We look at everything. Find the gaps. Give you the honest picture.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Custom strategy. Only what you need. No bloated scope.",
  },
  {
    number: "03",
    title: "Build",
    description: "We execute. Fast. Most projects live in days, not months.",
  },
  {
    number: "04",
    title: "Grow",
    description: "We stick around. Updates, improvements, new solutions as you scale.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 px-6 bg-background" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left: headline */}
          <div className="lg:sticky lg:top-[120px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-muted mb-5"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.0] tracking-[-0.03em] text-foreground mb-6"
            >
              Audit. Plan.
              <br />
              Build. Grow.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-body leading-relaxed"
            >
              We&apos;re the doctor, not the pharmacist.
            </motion.p>
          </div>

          {/* Right: steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ x: 8 }}
                className="bg-white rounded-2xl p-6 md:p-8 flex items-start gap-5 group cursor-default transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <span className="font-display font-extrabold text-3xl md:text-4xl leading-none tracking-[-0.03em] text-surface-dark group-hover:text-accent transition-colors duration-300 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-body text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
