"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Business blocks - some filled, some are gaps
const gridItems = [
  { id: 1, filled: true, label: "Brand", color: "bg-surface-dark" },
  { id: 2, filled: true, label: "Product", color: "bg-surface-dark" },
  { id: 3, filled: false, label: "Website", color: "bg-cta", fixColor: "bg-cta" },
  { id: 4, filled: true, label: "Sales", color: "bg-surface-dark" },
  { id: 5, filled: false, label: "Content", color: "bg-[#4A6FA5]", fixColor: "bg-[#4A6FA5]" },
  { id: 6, filled: true, label: "Team", color: "bg-surface-dark" },
  { id: 7, filled: true, label: "Ops", color: "bg-surface-dark" },
  { id: 8, filled: false, label: "SEO", color: "bg-[#6B8F71]", fixColor: "bg-[#6B8F71]" },
  { id: 9, filled: true, label: "Finance", color: "bg-surface-dark" },
  { id: 10, filled: false, label: "Automation", color: "bg-accent", fixColor: "bg-accent" },
  { id: 11, filled: true, label: "Support", color: "bg-surface-dark" },
  { id: 12, filled: false, label: "Analytics", color: "bg-[#D4A252]", fixColor: "bg-[#D4A252]" },
];

const gapIndices = gridItems
  .map((item, i) => (item.filled ? -1 : i))
  .filter((i) => i !== -1);

export default function GapFiller() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filledGaps, setFilledGaps] = useState<number[]>([]);
  const [allFilled, setAllFilled] = useState(false);

  // Sequentially fill gaps after entering view
  useEffect(() => {
    if (!isInView) return;

    const timers: NodeJS.Timeout[] = [];
    gapIndices.forEach((gapIndex, i) => {
      timers.push(
        setTimeout(() => {
          setFilledGaps((prev) => [...prev, gapIndex]);
          if (i === gapIndices.length - 1) {
            setTimeout(() => setAllFilled(true), 600);
          }
        }, 1500 + i * 700)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section id="how" className="py-28 md:py-36 px-6 bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="max-w-[960px] mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-muted mb-5"
          >
            Full Stack Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.0] tracking-[-0.03em] text-foreground"
          >
            We find the gaps.
            <br />
            <span className="text-cta">Then we fill them.</span>
          </motion.h2>
        </div>

        {/* Block grid */}
        <div className="max-w-[700px] mx-auto mb-16">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {gridItems.map((item, i) => {
              const isGap = !item.filled;
              const isFilled = filledGaps.includes(i);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: allFilled ? 0 : isGap && !isFilled ? [0, -3, 0] : 0,
                        }
                      : {}
                  }
                  transition={
                    isGap && !isFilled && !allFilled
                      ? {
                          y: {
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          opacity: { duration: 0.4, delay: 0.2 + i * 0.05 },
                          scale: { duration: 0.4, delay: 0.2 + i * 0.05 },
                        }
                      : {
                          duration: 0.4,
                          delay: 0.2 + i * 0.05,
                        }
                  }
                  className={`aspect-square rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isGap && !isFilled
                      ? "border-2 border-dashed border-surface-dark"
                      : isGap && isFilled
                        ? `${item.fixColor} shadow-[0_4px_16px_rgba(0,0,0,0.1)]`
                        : item.color
                  }`}
                >
                  {isGap && !isFilled ? (
                    // Empty gap - dotted
                    <motion.span
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-[10px] font-sans font-medium text-subtle tracking-wide uppercase"
                    >
                      ?
                    </motion.span>
                  ) : isGap && isFilled ? (
                    // Filled gap - colored with label
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-[11px] font-sans font-semibold text-white tracking-wide uppercase"
                    >
                      {item.label}
                    </motion.span>
                  ) : (
                    // Already filled
                    <span className="text-[11px] font-sans font-medium text-body/50 tracking-wide uppercase">
                      {item.label}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Status text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <AnimatePresence mode="wait">
              {!allFilled ? (
                <motion.p
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-muted"
                >
                  {filledGaps.length === 0
                    ? "Analyzing your business..."
                    : `Filling gap ${filledGaps.length} of ${gapIndices.length}...`}
                </motion.p>
              ) : (
                <motion.p
                  key="done"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium text-accent"
                >
                  All gaps filled. Growth unlocked.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* After gaps filled: the overwhelming services list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={allFilled ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {allFilled && <ServicesExplosion />}
        </motion.div>
      </div>
    </section>
  );
}

// AnimatePresence import at the top already
import { AnimatePresence } from "framer-motion";

const allServices = [
  { label: "Websites", color: "bg-cta" },
  { label: "Landing Pages", color: "bg-cta/80" },
  { label: "Content Strategy", color: "bg-[#4A6FA5]" },
  { label: "Social Media", color: "bg-[#4A6FA5]/80" },
  { label: "Blog Writing", color: "bg-[#4A6FA5]/60" },
  { label: "Email Marketing", color: "bg-[#B87D7D]" },
  { label: "WhatsApp Commerce", color: "bg-[#6B8F71]" },
  { label: "SEO", color: "bg-[#6B8F71]/80" },
  { label: "Paid Ads", color: "bg-[#D4A252]" },
  { label: "AI Chatbots", color: "bg-accent" },
  { label: "CRM Setup", color: "bg-accent/80" },
  { label: "Workflow Automation", color: "bg-accent/60" },
  { label: "Analytics", color: "bg-[#5A6B7B]" },
  { label: "Conversion Optimization", color: "bg-cta/70" },
  { label: "Video Production", color: "bg-[#8B6B99]" },
  { label: "Brand Identity", color: "bg-[#D4A252]/80" },
];

function ServicesExplosion() {
  const [showSimplified, setShowSimplified] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSimplified(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[800px] mx-auto text-center">
      {/* Services blocks - fanned/scattered */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allServices.map((service, i) => (
          <motion.div
            key={service.label}
            initial={{ opacity: 0, scale: 0, rotate: (Math.random() - 0.5) * 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: (Math.random() - 0.5) * 6,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: i * 0.06,
            }}
            className={`${service.color} text-white px-4 py-2.5 rounded-lg shadow-sm`}
          >
            <span className="font-sans font-medium text-sm whitespace-nowrap">
              {service.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* The punchline */}
      <AnimatePresence>
        {showSimplified && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <p className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 tracking-[-0.02em]">
              Overwhelming? Good.
            </p>
            <p className="text-body text-lg leading-relaxed max-w-[500px] mx-auto mb-8">
              That&apos;s everything we can do. But we don&apos;t throw it all
              at you. We audit, find the gaps, and build a plan that fits.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-14 px-8 items-center justify-center rounded-lg bg-cta text-white font-sans font-medium text-[15px] transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(199,93,44,0.35)]"
            >
              Get your customized plan
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
