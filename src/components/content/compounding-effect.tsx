"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const months = [
  { label: "M1", organic: 5, paid: 40, content: 8 },
  { label: "M2", organic: 8, paid: 40, content: 16 },
  { label: "M3", organic: 14, paid: 38, content: 24 },
  { label: "M4", organic: 22, paid: 36, content: 30 },
  { label: "M5", organic: 32, paid: 35, content: 38 },
  { label: "M6", organic: 45, paid: 34, content: 48 },
  { label: "M7", organic: 55, paid: 32, content: 55 },
  { label: "M8", organic: 65, paid: 30, content: 64 },
  { label: "M9", organic: 72, paid: 28, content: 70 },
  { label: "M10", organic: 80, paid: 26, content: 78 },
  { label: "M11", organic: 88, paid: 24, content: 85 },
  { label: "M12", organic: 95, paid: 22, content: 92 },
];

export default function CompoundingEffect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-[140px] px-6 bg-[#22C55E] overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 text-sm font-medium tracking-wide mb-6"
            >
              The compounding effect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[clamp(36px,5vw,56px)] leading-[1.05] text-white mb-8"
            >
              Content doesn&apos;t add up.
              <br />
              It <span className="font-display italic font-normal">multiplies.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white leading-relaxed mb-4"
            >
              Paid ads stop the second you stop paying. Content keeps working. A blog post you write today drives traffic for years. Each piece compounds on the last.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 leading-relaxed mb-8"
            >
              By month 6, your content library works for you 24/7. By month 12, organic traffic alone outperforms what your paid ads ever did.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "62%", label: "Less cost than outbound", source: "Demand Metric" },
                { value: "3x", label: "More leads per dollar", source: "Demand Metric" },
                { value: "53%", label: "Of all traffic is organic", source: "BrightEdge" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-white/60 mt-1">{stat.label}</div>
                  <div className="text-[8px] text-white/40 mt-0.5">{stat.source}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chart visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"
          >
            {/* Legend */}
            <div className="flex gap-4 mb-6 text-[11px] font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="text-white/80">Organic traffic</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <span className="text-white/50">Paid traffic (same spend)</span>
              </span>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-1.5 h-[220px]">
              {months.map((month, i) => (
                <div key={month.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  {/* Organic bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${month.organic}%` } : { height: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                    className="w-full rounded-t bg-white relative"
                  >
                    {i === 11 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.5 }}
                        className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white whitespace-nowrap"
                      >
                        95%
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Paid bar (declining) */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${month.paid}%` } : { height: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08 + 0.1, ease: "easeOut" }}
                    className="w-full rounded-t bg-white/20"
                  />

                  <span className="text-[8px] text-white/40 mt-1">{month.label}</span>
                </div>
              ))}
            </div>

            {/* Crossover annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-4 pt-3 border-t border-white/10 text-center"
            >
              <span className="text-xs text-white/70">
                By month 5, organic overtakes paid — and it only accelerates from there.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
