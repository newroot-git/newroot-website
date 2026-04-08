"use client";

import { motion } from "framer-motion";

export default function AIPhilosophy() {
  return (
    <section className="relative py-[140px] px-6 bg-[#8B5CF6] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -right-16 -bottom-16 w-[450px] h-[450px]" viewBox="0 0 400 400" fill="none">
          <motion.path
            d="M350,50 C200,100 300,300 50,350"
            stroke="white" strokeWidth="25" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[100px]" />
        {[
          { top: "15%", right: "20%", size: "w-4 h-4", delay: 0 },
          { top: "65%", left: "10%", size: "w-5 h-5", delay: 1.5 },
          { top: "35%", right: "10%", size: "w-3 h-3", delay: 0.5 },
        ].map((s, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: s.delay }}
            className="absolute"
            style={{ top: s.top, left: "left" in s ? s.left : undefined, right: "right" in s ? s.right : undefined }}
          >
            <svg viewBox="0 0 12 12" className={`${s.size} text-white`} fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </motion.span>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm font-medium tracking-wide mb-6"
            >
              Our philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[clamp(36px,5vw,60px)] leading-[1.05] text-white mb-8"
            >
              We don&apos;t ask AI.
              <br />
              We <span className="font-display italic font-normal">tell</span> AI.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/75 leading-relaxed mb-6"
            >
              Most businesses ask AI &ldquo;what should I do?&rdquo; and get generic garbage back. We already know the answer. AI is our tool, not our strategist.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 leading-relaxed"
            >
              The person who tells AI is an expert. We come up with the direction, the ideas, the strategy. Then we specifically direct AI to handle the things that normally take hours — the things a human doesn&apos;t need to do. That&apos;s how you get speed without sacrificing quality.
            </motion.p>
          </div>

          <div className="space-y-4">
            {[
              { wrong: "\"Make me a website for my restaurant\"", right: "\"Build a conversion-focused 7-page site with this exact layout, these CTAs, and this colour system\"", label: "Website brief" },
              { wrong: "\"Write me some social media posts\"", right: "\"Create 12 LinkedIn posts following this content pillar strategy, in this brand voice, hitting these pain points\"", label: "Content creation" },
              { wrong: "\"Can you automate my business?\"", right: "\"Build a Zapier flow that captures form submissions, qualifies via these 4 criteria, and routes to the right rep within 30 seconds\"", label: "Automation" },
            ].map((example, i) => (
              <motion.div
                key={example.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-xl bg-white/[0.08] border border-white/10 p-5"
              >
                <span className="text-[10px] font-medium text-white/40 tracking-wider uppercase">
                  {example.label}
                </span>
                <div className="mt-3 flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-0.5 shrink-0">✕</span>
                  <p className="text-sm text-white/40 line-through">{example.wrong}</p>
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <span className="text-white text-xs mt-0.5 shrink-0">✓</span>
                  <p className="text-sm text-white/90">{example.right}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
