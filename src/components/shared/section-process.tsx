"use client";

import { motion } from "framer-motion";
import SectionHeader from "./section-header";

interface Step {
  number: string;
  title: string;
  description: string;
  detail?: string;
}

interface SectionProcessProps {
  label?: string;
  headline: string;
  accentWord?: string;
  steps: Step[];
  columns?: 3 | 4;
}

export default function SectionProcess({
  label = "How it works",
  headline,
  accentWord,
  steps,
  columns = 3,
}: SectionProcessProps) {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          label={label}
          headline={headline}
          accentWord={accentWord}
          align="center"
        />

        <div className={`grid md:grid-cols-${columns} gap-3 relative`}>
          {columns >= 3 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block absolute top-[80px] left-[20%] right-[20%] h-[1px] bg-foreground/[0.06] origin-left z-0"
            />
          )}

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-center relative z-10 p-8"
            >
              <div className="relative h-20 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/[0.06] flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>
              </div>
              {step.detail && (
                <span className="text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block bg-accent-light text-accent">
                  {step.detail}
                </span>
              )}
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
