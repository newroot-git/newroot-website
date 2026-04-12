"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "One team, every capability",
    description: "Websites, content, and AI — all under one roof.",
    span: 2,
    accentBg: false,
    visual: (
      <div className="flex gap-2 mb-4">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1 }} whileHover={{ y: -3, rotate: -2 }}
            className="w-20 h-14 rounded-xl bg-accent/[0.08] shadow-sm" style={{ opacity: 1 - i * 0.15 }} />
        ))}
      </div>
    ),
  },
  {
    title: "Days, not months",
    description: "AI-accelerated across everything.",
    span: 1,
    accentBg: true,
    visual: (
      <motion.div className="text-[48px] font-bold leading-none mb-3 text-white/90" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", stiffness: 200 }}>
        <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>7d</motion.span>
      </motion.div>
    ),
  },
  {
    title: "Doctor, not pharmacist",
    description: "We diagnose before we prescribe.",
    span: 1,
    accentBg: false,
    visual: (
      <div className="flex items-center gap-1 mb-4">
        {[60, 85, 70, 95, 75].map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-3 rounded-sm bg-accent/15" style={{ maxHeight: `${h * 0.5}px` }}>
            <div className="w-full rounded-sm bg-accent h-full" style={{ height: `${h}%` }} />
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "No templates, no shortcuts",
    description: "Every build is bespoke.",
    span: 1,
    accentBg: false,
    visual: (
      <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}
        className="w-10 h-10 rounded-lg border-2 border-dashed border-accent/30 flex items-center justify-center mb-4">
        <span className="text-accent text-lg">x</span>
      </motion.div>
    ),
  },
  {
    title: "Ongoing partnership",
    description: "We stay and grow with you.",
    span: 1,
    accentBg: false,
    visual: (
      <div className="flex gap-1 mb-4">
        {["Y1", "Y2", "Y3"].map((label, i) => (
          <motion.div key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1 }}
            className="w-9 h-9 rounded-lg bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
            <span className="text-foreground/40 text-[10px] font-bold">{label}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "AI-powered, human-led",
    description: "AI expands our margins, not replaces our thinking.",
    span: 2,
    accentBg: false,
    visual: (
      <div className="flex items-center gap-3 mb-4">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}
          className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </motion.div>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] flex-1 bg-gradient-to-r from-accent/30 to-accent/5 origin-left rounded-full" />
        <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-sm font-bold text-foreground/50">You</div>
      </div>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4">Why us</motion.span>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1] max-w-[600px] mb-16">
          Why businesses choose us
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-3">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}
              className={`rounded-2xl transition-shadow duration-200 hover:shadow-lg overflow-hidden ${benefit.span === 2 ? "md:col-span-2" : ""} ${
                benefit.accentBg ? "bg-[#0055FF] text-white" : "bg-background border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              }`}>
              <div className="p-7">
                {benefit.visual}
                <h3 className={`text-lg font-semibold mb-1 ${benefit.accentBg ? "" : "text-foreground"}`}>{benefit.title}</h3>
                <p className={`text-sm ${benefit.accentBg ? "text-white/70" : "text-muted"}`}>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
