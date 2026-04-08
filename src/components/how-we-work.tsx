"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "We investigate your business — website, content, operations, growth. No assumptions.", detail: "Free" },
  { number: "02", title: "Diagnose", description: "Clear breakdown of what's working, what's broken, and what's costing you most.", detail: "1 week" },
  { number: "03", title: "Build", description: "Our specialist team builds the fix. Custom, tested, purpose-built for your business.", detail: "Days, not months" },
  { number: "04", title: "Grow", description: "We stay. Monthly optimisation, continuous improvement as your business evolves.", detail: "Ongoing" },
];

export default function HowWeWork() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            The process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em]"
          >
            Investigate. Fix.{" "}
            <span className="font-display italic font-normal text-accent">Grow.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-foreground/[0.06] p-8 text-center"
            >
              <span className="text-3xl font-bold text-accent/20 block mb-2">{step.number}</span>
              <span className="text-[11px] font-medium text-accent tracking-wider uppercase block mb-3">{step.detail}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted mt-8 max-w-[450px] mx-auto"
        >
          Month 1 is just the start. We build for longevity — not one-off delivery.
        </motion.p>
      </div>
    </section>
  );
}
