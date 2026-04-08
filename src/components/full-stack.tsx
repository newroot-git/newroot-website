"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const nodes = [
  {
    id: "websites",
    label: "WEBSITES",
    tagline: "Built to convert, not just exist",
    description:
      "Custom sites shipped in days. Strategic design, conversion-focused, built to generate leads and close sales.",
    feeds: "Drives traffic and captures leads",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: "content",
    label: "CONTENT",
    tagline: "Show up every day without burning out",
    description:
      "Consistent, quality content across every channel. AI-powered production, creative direction. Not AI slop.",
    feeds: "Builds trust and drives traffic to your site",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI & AUTOMATION",
    tagline: "Stop doing manually what a machine should handle",
    description:
      "Custom CRMs, workflow automation, AI assistants. We audit your business, find bottlenecks, and build solutions.",
    feeds: "Automates follow-up and scales everything",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

// Animated connection lines between cards
function ConnectionLines({ isInView }: { isInView: boolean }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 900 300"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Line 1: Websites → Content */}
      <motion.path
        d="M280 150 Q450 80 600 150"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.2 } : {}}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Line 2: Content → AI */}
      <motion.path
        d="M600 150 Q750 220 900 150"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.2 } : {}}
        transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Pulsing dots at connection points */}
      {[280, 600].map((cx, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={150}
          r={3}
          fill="var(--color-accent)"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: [0, 0.6, 0.3],
                  scale: [0, 1, 1],
                }
              : {}
          }
          transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
        />
      ))}
    </svg>
  );
}

export default function FullStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="max-w-[960px] mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-muted mb-5"
          >
            The Full Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.0] tracking-[-0.03em] text-foreground mb-6"
          >
            Every arm feeds the next.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-body leading-relaxed max-w-[520px] mx-auto"
          >
            Your website drives leads. Your content keeps them warm. Your AI
            automates the follow-up. When these pieces connect, growth compounds.
          </motion.p>
        </div>

        {/* Cards with connection lines */}
        <div className="relative max-w-[900px] mx-auto">
          <ConnectionLines isInView={isInView} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="bg-background rounded-2xl p-7 cursor-pointer transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(59,74,59,0.1)]"
              >
                {/* Icon + label */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center text-accent">
                    {node.icon}
                  </div>
                  <span className="text-xs font-sans font-medium tracking-[0.1em] text-accent">
                    {node.label}
                  </span>
                </div>

                {/* Tagline */}
                <h3 className="font-display font-bold text-xl leading-[1.15] tracking-[-0.02em] text-foreground mb-3">
                  {node.tagline}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-body leading-relaxed mb-4">
                  {node.description}
                </p>

                {/* Feeds indicator (always visible but subtle, highlighted on hover) */}
                <div
                  className={`pt-4 border-t border-surface transition-opacity duration-200 ${
                    activeNode === node.id ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <p className="text-sm text-accent font-medium flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                    {node.feeds}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center text-body mt-12 md:mt-16 max-w-[480px] mx-auto leading-relaxed"
        >
          We don&apos;t sell services in isolation. We look at your business as a
          system and fix the weakest link first.
        </motion.p>
      </div>
    </section>
  );
}
