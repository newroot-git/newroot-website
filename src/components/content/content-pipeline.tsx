"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const approaches = [
  {
    label: "Just AI",
    color: "#3B82F6",
    colorLight: "#EFF6FF",
    verdict: "Fast, but nobody can tell it's you",
    scores: [
      { metric: "Speed", value: 95 },
      { metric: "Brand voice", value: 20 },
      { metric: "Quality", value: 30 },
      { metric: "Strategy", value: 10 },
      { metric: "Consistency", value: 40 },
    ],
  },
  {
    label: "Just Human",
    color: "#D97706",
    colorLight: "#FFFBEB",
    verdict: "Quality, but you'll burn out in a month",
    scores: [
      { metric: "Speed", value: 15 },
      { metric: "Brand voice", value: 90 },
      { metric: "Quality", value: 85 },
      { metric: "Strategy", value: 70 },
      { metric: "Consistency", value: 25 },
    ],
  },
  {
    label: "Human + AI",
    color: "#2D5A3D",
    colorLight: "#E6F0EA",
    verdict: "Fast, on-brand, and sustainable",
    highlighted: true,
    scores: [
      { metric: "Speed", value: 90 },
      { metric: "Brand voice", value: 95 },
      { metric: "Quality", value: 90 },
      { metric: "Strategy", value: 85 },
      { metric: "Consistency", value: 95 },
    ],
  },
];

function Bar({ value, color, delay }: { value: number; color: string; delay: number }) {
  return (
    <div className="flex-1 h-2 rounded-full bg-foreground/[0.04] overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

function ApproachCard({
  approach,
  index,
}: {
  approach: typeof approaches[number];
  index: number;
}) {
  const isHighlighted = approach.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: isHighlighted ? -6 : 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border p-6 ${
        isHighlighted
          ? "bg-white border-accent/30 shadow-[0_8px_40px_rgba(45,90,61,0.12)] ring-2 ring-accent/15 scale-[1.02]"
          : "bg-white border-foreground/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: approach.color }}
        />
        <span className="text-[15px] font-bold text-foreground">
          {approach.label}
        </span>
        {isHighlighted && (
          <span className="text-[10px] font-semibold text-accent bg-accent-light rounded-md px-2 py-0.5 ml-auto uppercase tracking-wider">
            Our approach
          </span>
        )}
      </div>

      {/* Scores */}
      <div className="space-y-3 mb-5">
        {approach.scores.map((score, i) => (
          <div key={score.metric} className="flex items-center gap-3">
            <span className="text-[12px] text-muted font-medium w-[90px] shrink-0">
              {score.metric}
            </span>
            <Bar
              value={score.value}
              color={approach.color}
              delay={index * 0.35 + 0.3 + i * 0.08}
            />
            <span className="text-[11px] font-semibold text-foreground/60 w-[28px] text-right tabular-nums">
              {score.value}
            </span>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div
        className="rounded-lg px-3.5 py-2.5 border"
        style={{
          backgroundColor: approach.colorLight,
          borderColor: `${approach.color}20`,
        }}
      >
        <p className="text-[13px] font-medium" style={{ color: approach.color }}>
          {approach.verdict}
        </p>
      </div>
    </motion.div>
  );
}

export default function ContentPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
          >
            The pipeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-0.025em] mb-4"
          >
            AI speed. Human{" "}
            <span className="font-display italic font-normal text-accent">
              taste.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-[520px] mx-auto leading-relaxed"
          >
            AI alone is fast but soulless. Humans alone are great but slow.
            We combine both — and it's not even close.
          </motion.p>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          {approaches.map((approach, i) => (
            approach.highlighted ? (
              <motion.div
                key={approach.label}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <ApproachCard approach={approach} index={i} />
              </motion.div>
            ) : (
              <ApproachCard key={approach.label} approach={approach} index={i} />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
