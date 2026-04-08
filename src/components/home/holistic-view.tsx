"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HolisticView() {
  return (
    <section className="relative py-[140px] px-6 bg-[#0055FF] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -left-20 -top-10 w-[600px] h-[600px]" viewBox="0 0 500 500" fill="none">
          <motion.path
            d="M50,250 C120,80 350,80 400,250 C450,420 300,450 200,350"
            stroke="white" strokeWidth="35" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[100px]" />
        {[
          { top: "12%", right: "18%", size: "w-5 h-5", delay: 0 },
          { top: "70%", left: "12%", size: "w-4 h-4", delay: 1 },
          { top: "45%", right: "8%", size: "w-3 h-3", delay: 2 },
          { top: "25%", left: "6%", size: "w-6 h-6", delay: 0.5 },
        ].map((s, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: s.delay }}
            className="absolute select-none"
            style={{ top: s.top, left: "left" in s ? s.left : undefined, right: "right" in s ? s.right : undefined }}
          >
            <svg viewBox="0 0 12 12" className={`${s.size} text-white`} fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </motion.span>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-sm font-medium tracking-wide mb-6"
        >
          The bigger picture
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(38px,5.5vw,68px)] leading-[1.05] text-white mb-8 max-w-[800px] mx-auto"
        >
          Every arm feeds the{" "}
          <motion.span
            animate={{ rotate: [0, 10, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-[0.75em] h-[0.75em] rounded-xl bg-white/20 align-middle mx-1"
          >
            <svg viewBox="0 0 12 12" className="w-[0.4em] h-[0.4em] text-white" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </motion.span>{" "}
          next
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/75 max-w-[580px] mx-auto mb-12 leading-relaxed"
        >
          Your website drives leads. Your content keeps them warm. Your AI
          automates the follow-up. When these pieces connect — growth compounds.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-3 mb-10">
          {[
            { label: "Websites", sub: "Drives leads", href: "/websites" },
            { label: "Content", sub: "Builds trust", href: "/content" },
            { label: "AI", sub: "Automates scale", href: "/ai" },
            { label: "Growth", sub: "Amplifies reach", href: "/growth" },
          ].map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={node.href}
                className="block rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-center hover:bg-white/[0.1] transition-colors"
              >
                <div className="text-white font-semibold text-lg">{node.label}</div>
                <div className="text-white/50 text-sm mt-1">{node.sub}</div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/start"
            className="inline-flex h-12 px-7 items-center justify-center rounded-lg bg-white text-[#0055FF] font-medium hover:bg-white/90 transition-colors shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
          >
            Find out what you need
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
