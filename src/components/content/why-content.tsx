"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    stat: "75%",
    statSource: "Stanford Web Credibility Research",
    point: "of people judge your credibility by your online presence",
    detail: "If you're not showing up consistently, potential customers assume you're not serious — or worse, not around anymore.",
  },
  {
    stat: "62%",
    statSource: "Demand Metric",
    point: "less cost per lead vs outbound marketing",
    detail: "Content compounds. A blog post you write today keeps driving traffic for months. A paid ad stops the second you stop paying.",
  },
  {
    stat: "80%",
    statSource: "Lucidpress / Marq",
    point: "increase in brand recognition from consistent posting",
    detail: "People need to see your brand 7+ times before they remember it. Consistency isn't optional — it's how you stay in the conversation.",
  },
];

export default function WhyContent() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          Why content matters
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[650px] mb-16"
        >
          The businesses winning right now all have one thing in{" "}
          <span className="font-display italic font-normal text-accent">common.</span>
        </motion.h2>

        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.stat}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-[120px,1fr] gap-6 items-start bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-8"
            >
              <div>
                <span className="text-[40px] font-bold text-accent leading-none block">
                  {reason.stat}
                </span>
                <span className="text-[9px] text-muted mt-1 block">
                  {reason.statSource}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.point}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {reason.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
