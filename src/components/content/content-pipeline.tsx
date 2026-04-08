"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Strategy", description: "Audience research, topic mapping, editorial calendar", detail: "Week 1" },
  { label: "AI Draft", description: "Fast first drafts powered by trained AI pipelines", detail: "Continuous" },
  { label: "Creative Direction", description: "Human review, brand voice refinement, quality check", detail: "Every piece" },
  { label: "Publish & Report", description: "Scheduled distribution, analytics, and iteration", detail: "Monthly" },
];

export default function ContentPipeline() {
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
            The pipeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em]"
          >
            AI speed. Human{" "}
            <span className="font-display italic font-normal text-accent">taste.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-3 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-foreground/[0.06] origin-left z-0"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-center relative z-10 p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/[0.06] flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-accent">{i + 1}</span>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-light text-accent inline-block mb-3">
                {step.detail}
              </span>
              <h3 className="text-lg font-semibold mb-1">{step.label}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
