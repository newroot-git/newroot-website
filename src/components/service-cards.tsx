"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Websites",
    color: "bg-cta",
    rotate: -8,
    items: [
      "Custom Design",
      "Conversion Strategy",
      "SEO Setup",
      "AI Chatbots",
      "Monthly Retainer",
    ],
  },
  {
    title: "Content",
    color: "bg-[#4A6FA5]",
    rotate: -3,
    items: [
      "Social Media",
      "Blog Writing",
      "Email Marketing",
      "Video Production",
      "Editorial Calendar",
    ],
  },
  {
    title: "AI &\nAutomation",
    color: "bg-accent",
    rotate: 2,
    items: [
      "Custom CRMs",
      "Workflow Automation",
      "AI Assistants",
      "Internal Tools",
      "Process Audit",
    ],
  },
  {
    title: "Paid &\nGrowth",
    color: "bg-[#D4A252]",
    rotate: 6,
    items: [
      "Google Ads",
      "Meta Ads",
      "Landing Pages",
      "Conversion Optimization",
      "Analytics",
    ],
  },
  {
    title: "Strategy",
    color: "bg-[#6B8F71]",
    rotate: 10,
    items: [
      "Brand Strategy",
      "Business Audit",
      "Growth Planning",
      "Competitor Analysis",
      "Quarterly Reviews",
    ],
  },
];

export default function ServiceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-24 md:py-36 px-6 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(36px,5vw,64px)] leading-[1.0] tracking-[-0.03em] text-foreground text-center mb-16 md:mb-24"
        >
          call us if you need:
        </motion.h2>

        {/* Fanned cards */}
        <div className="relative flex justify-center items-end min-h-[400px] md:min-h-[480px]">
          {cards.map((card, i) => {
            // Fan positioning: spread from center
            const centerIndex = (cards.length - 1) / 2;
            const offset = i - centerIndex;
            const xShift = offset * 60; // horizontal spread

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 80, rotate: 0, x: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotate: card.rotate,
                        x: xShift,
                      }
                    : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 16,
                  delay: 0.1 + i * 0.1,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  y: -20,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                className={`${card.color} text-white rounded-2xl md:rounded-3xl p-6 md:p-8
                  w-[200px] md:w-[240px] shrink-0
                  shadow-[0_8px_30px_rgba(0,0,0,0.15)] cursor-default
                  origin-bottom absolute`}
                style={{
                  zIndex: i + 1,
                  // Slight vertical offset to create depth
                  marginBottom: `${Math.abs(offset) * 8}px`,
                }}
              >
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.02em] mb-5 whitespace-pre-line">
                  {card.title}
                </h3>
                <div className="border-t border-white/30 pt-4 space-y-2">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-white/60 text-xs">+</span>
                      <span className="text-sm font-sans font-medium text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
