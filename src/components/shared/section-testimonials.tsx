"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { testimonials as allTestimonials, type Testimonial } from "@/lib/testimonials";
import { services } from "@/lib/services";

interface SectionTestimonialsProps {
  service?: Testimonial["service"];
}

// Extended testimonials with more detail for the expanded view
const extendedInfo: Record<string, { metric: string; before: string; after: string; serviceColor: string }> = {
  "Sarah M.": { metric: "Lead conversion rate", before: "1.2%", after: "4.8%", serviceColor: "#FF5C35" },
  "James K.": { metric: "Monthly content output", before: "4 posts", after: "48 posts", serviceColor: "#22C55E" },
  "Priya D.": { metric: "Hours saved per week", before: "0", after: "15+", serviceColor: "#8B5CF6" },
  "Marcus W.": { metric: "Time to launch", before: "3 months (quoted)", after: "8 days", serviceColor: "#FF5C35" },
  "David H.": { metric: "Return on ad spend", before: "0.8x", after: "3.1x", serviceColor: "#F59E0B" },
  "Rachel T.": { metric: "Vendor count", before: "3 freelancers", after: "1 team", serviceColor: "#8B5CF6" },
  "Tom L.": { metric: "Weekly content time", before: "12 hours", after: "1 hour", serviceColor: "#22C55E" },
  "Nina P.": { metric: "Build time", before: "Estimated 6 weeks", after: "10 days", serviceColor: "#FF5C35" },
  "Chris B.": { metric: "Organic leads per month", before: "2", after: "40+", serviceColor: "#F59E0B" },
};

function getServiceColor(service: string): string {
  const s = services.find((svc) =>
    svc.href === `/${service}`
  );
  return s?.color ?? "#0055FF";
}

export default function SectionTestimonials({ service }: SectionTestimonialsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filtered = service
    ? allTestimonials.filter((t) => t.service === service)
    : allTestimonials;

  if (filtered.length === 0) return null;

  // Duplicate for marquee effect when we have enough
  const row1 = [...filtered, ...filtered, ...filtered];
  const row2 = [...filtered.slice().reverse(), ...filtered.slice().reverse(), ...filtered.slice().reverse()];

  return (
    <section className="py-[140px] px-6 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          Results
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] mb-12"
        >
          Don&apos;t take our{" "}
          <span className="font-display italic font-normal">word</span> for it
        </motion.h2>
      </div>

      {/* Scrolling rows */}
      <div className="space-y-3">
        {[row1, row2].map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: rowIndex === 0 ? [0, -600] : [-600, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 w-max"
              onHoverStart={() => {}}
            >
              {row.map((t, i) => {
                const globalIndex = rowIndex * 100 + i;
                const isExpanded = expandedIndex === globalIndex;
                const color = getServiceColor(t.service);
                const extra = extendedInfo[t.name];

                return (
                  <motion.div
                    key={`${rowIndex}-${i}`}
                    layout
                    onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                    className="cursor-pointer shrink-0"
                    whileHover={{ y: -3 }}
                  >
                    <motion.div
                      layout
                      className={`bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-shadow duration-300 ${
                        isExpanded ? "w-[380px]" : "w-[280px]"
                      }`}
                      style={{
                        boxShadow: isExpanded ? `0 4px 30px ${color}20, 0 0 0 1px ${color}30` : undefined,
                      }}
                    >
                      {/* Color bar */}
                      <div className="h-1" style={{ backgroundColor: color }} />

                      <div className="p-5">
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-3">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} className="w-3 h-3 fill-current" style={{ color }} viewBox="0 0 20 20">
                              <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.49L10 13.47l-4.94 2.63L6 10.61l-4-3.9 5.61-.87L10 1z" />
                            </svg>
                          ))}
                        </div>

                        <p className="text-[14px] text-foreground leading-relaxed mb-4">
                          &ldquo;{t.quote}&rdquo;
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-foreground">{t.name}</div>
                            <div className="text-xs text-subtle">{t.role}, {t.company}</div>
                          </div>
                          <span
                            className="text-[10px] font-medium px-2 py-1 rounded-full"
                            style={{ backgroundColor: `${color}15`, color }}
                          >
                            {t.service}
                          </span>
                        </div>

                        {/* Expanded detail */}
                        <AnimatePresence>
                          {isExpanded && extra && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-foreground/[0.06]">
                                <span className="text-[10px] font-medium tracking-wider uppercase text-muted block mb-2">
                                  Key metric
                                </span>
                                <div className="text-sm font-medium text-foreground mb-3">
                                  {extra.metric}
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="flex-1 text-center p-2 rounded-lg bg-surface">
                                    <div className="text-xs text-muted">Before</div>
                                    <div className="text-lg font-bold text-foreground/40 line-through">{extra.before}</div>
                                  </div>
                                  <svg className="w-4 h-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                  </svg>
                                  <div className="flex-1 text-center p-2 rounded-lg" style={{ backgroundColor: `${color}10` }}>
                                    <div className="text-xs text-muted">After</div>
                                    <div className="text-lg font-bold" style={{ color }}>{extra.after}</div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
