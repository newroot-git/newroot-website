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
}

export default function SectionProcess({
  label = "How it works",
  headline,
  accentWord,
  steps,
}: SectionProcessProps) {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label={label} headline={headline} accentWord={accentWord} />

        <div className={`grid md:grid-cols-${steps.length} gap-4`}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-foreground/[0.06] p-8 text-center"
            >
              <span className="text-3xl font-bold text-accent/20 block mb-3">
                {step.number}
              </span>
              {step.detail && (
                <span className="text-[11px] font-medium text-accent tracking-wider uppercase block mb-3">
                  {step.detail}
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
