"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We investigate your business — website, content, operations, growth channels. No assumptions. Just data.",
    detail: "Free",
  },
  {
    number: "02",
    title: "Diagnose",
    description: "You get a clear breakdown of what's working, what's broken, and what's costing you the most. Prioritised.",
    detail: "1 week",
  },
  {
    number: "03",
    title: "Build",
    description: "Our specialist team builds the fix. Custom, tested, documented. Purpose-built for your business.",
    detail: "Days, not months",
  },
  {
    number: "04",
    title: "Grow",
    description: "We stay. Monthly optimisation, continuous improvement, new capabilities as your business evolves.",
    detail: "Ongoing",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
          >
            The process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em]"
          >
            Investigate. Fix.{" "}
            <span className="font-display italic font-normal text-accent">
              Grow.
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-foreground/[0.06] origin-left z-0"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-center relative z-10 p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/[0.06] flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">{step.number}</span>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-light text-accent inline-block mb-3">
                {step.detail}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted text-sm max-w-[500px] mx-auto"
        >
          Your business in month 1 vs month 12 will look completely different.
          We build for longevity — not one-off delivery.
        </motion.p>
      </div>
    </section>
  );
}
