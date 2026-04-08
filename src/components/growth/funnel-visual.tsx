"use client";

import { motion } from "framer-motion";

const funnelStages = [
  { label: "Awareness", width: "100%", description: "People discover you exist" },
  { label: "Interest", width: "75%", description: "They visit, read, follow" },
  { label: "Consideration", width: "55%", description: "They compare and evaluate" },
  { label: "Conversion", width: "35%", description: "They book, buy, enquire" },
  { label: "Retention", width: "25%", description: "They come back and refer" },
];

export default function FunnelVisual() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
            >
              The funnel
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-6"
            >
              Where are you losing{" "}
              <span className="font-display italic font-normal text-accent">customers?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg leading-relaxed mb-8"
            >
              Every business has a funnel. Most have holes. We find them and fix them — so fewer leads slip through at every stage.
            </motion.p>

            <div className="flex flex-wrap gap-2">
              {["Google Ads", "Meta Ads", "SEO", "Email", "LinkedIn", "WhatsApp"].map((ch) => (
                <span key={ch} className="px-3 py-1.5 rounded-full text-xs font-medium border border-foreground/[0.06] text-muted">
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Funnel bars */}
          <div className="bg-white rounded-2xl border border-foreground/[0.06] p-8">
            <div className="space-y-3">
              {funnelStages.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{stage.label}</span>
                    <span className="text-xs text-muted">{stage.description}</span>
                  </div>
                  <div className="h-8 bg-surface rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: stage.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                      className="h-full rounded-lg bg-accent/20"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
