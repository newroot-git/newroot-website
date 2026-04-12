"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Listen",
    description: "You tell us what's going on. We ask the questions your last agency didn't.",
    detail: "Discovery",
    visual: (
      <div className="relative h-28 mb-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-accent/[0.06] flex items-center justify-center">
            <motion.svg animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <motion.path d="M8 9h8M8 13h4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.5 }} />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Diagnose & Fix",
    description: "We audit your setup, find what's broken, and build exactly what you need.",
    detail: "Days, not months",
    visual: (
      <div className="relative h-28 mb-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.4 }}
          className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-accent/[0.06] flex items-center justify-center relative">
            <motion.svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 5l-5 7 5 7" /><path d="M16 5l5 7-5 7" />
              <motion.line x1="14" y1="4" x2="10" y2="20" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.6 }} />
            </motion.svg>
            <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-2xl border-2 border-accent/20" />
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Grow",
    description: "We stay. Monthly support, new features, continuous improvement.",
    detail: "Partnership",
    visual: (
      <div className="relative h-28 mb-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.6 }}
          className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-accent/[0.06] flex items-center justify-center">
            <motion.svg animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4">How it works</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em]">
            We diagnose before{" "}<span className="font-display italic font-normal text-accent">we prescribe.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-12 relative">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block absolute top-[80px] left-[20%] right-[20%] h-[1px] bg-foreground/[0.06] origin-left z-0" />

          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.2 }} whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-center relative z-10 p-8">
              {step.visual}
              <span className="text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block bg-accent-light text-accent">{step.detail}</span>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            "Websites",
            "Content",
            "AI Solutions",
            "One team",
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-2 text-sm font-medium text-muted">
              <svg viewBox="0 0 12 12" className="w-3 h-3 text-accent" fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
              {t}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
