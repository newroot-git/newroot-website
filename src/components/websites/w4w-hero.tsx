"use client";

import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import BookCallButton from "@/components/ui/book-call-button";

export default function W4wHero() {
  return (
    <section className="relative pt-[130px] pb-[80px] px-6 overflow-hidden min-h-screen flex items-center">
      {/* Floating browser chrome frames */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large frame — top right */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-4, -2, -4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[8%] w-52 h-36 rounded-xl bg-background border border-black/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.07)] opacity-70"
        >
          <div className="flex items-center gap-1.5 px-3 pt-3 pb-2 border-b border-black/[0.05]">
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="flex-1 h-1.5 rounded-full bg-black/05 ml-1" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 bg-accent/10 rounded-full w-3/5" />
            <div className="h-1.5 bg-black/05 rounded-full w-full" />
            <div className="h-1.5 bg-black/05 rounded-full w-4/5" />
            <div className="h-6 bg-accent/[0.08] rounded-lg w-2/5 mt-1" />
          </div>
        </motion.div>

        {/* Medium frame — left mid */}
        <motion.div
          animate={{ y: [0, 22, 0], rotate: [5, 3, 5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[38%] left-[4%] w-40 h-28 rounded-xl bg-background border border-black/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.06)] opacity-60"
        >
          <div className="flex items-center gap-1 px-2.5 pt-2.5 pb-2 border-b border-black/[0.05]">
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
          </div>
          <div className="p-2.5 space-y-1.5">
            <div className="h-1.5 bg-black/07 rounded-full w-full" />
            <div className="h-1.5 bg-black/05 rounded-full w-2/3" />
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              <div className="h-5 bg-accent/[0.07] rounded-md" />
              <div className="h-5 bg-black/[0.03] rounded-md" />
            </div>
          </div>
        </motion.div>

        {/* Small frame — right lower */}
        <motion.div
          animate={{ y: [-8, 14, -8], rotate: [3, 6, 3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-[28%] right-[12%] w-32 h-24 rounded-xl bg-background border border-black/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.06)] opacity-50"
        >
          <div className="flex items-center gap-1 px-2.5 pt-2.5 pb-1.5 border-b border-black/[0.05]">
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
          </div>
          <div className="p-2 space-y-1.5">
            <div className="h-1.5 bg-black/05 rounded-full w-full" />
            <div className="h-1.5 bg-black/05 rounded-full w-3/4" />
            <div className="h-4 bg-accent/[0.1] rounded-md w-1/2 mt-0.5" />
          </div>
        </motion.div>

        {/* Tiny accent frame — top left */}
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 6, 0], rotate: [-6, -4, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[22%] left-[18%] w-24 h-16 rounded-lg bg-background border border-black/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.05)] opacity-40"
        >
          <div className="flex items-center gap-1 px-2 pt-2 pb-1.5 border-b border-black/[0.05]">
            <span className="w-1 h-1 rounded-full bg-black/10" />
            <span className="w-1 h-1 rounded-full bg-black/10" />
            <span className="w-1 h-1 rounded-full bg-black/10" />
          </div>
          <div className="p-1.5 space-y-1">
            <div className="h-1 bg-accent/10 rounded-full w-full" />
            <div className="h-1 bg-black/05 rounded-full w-2/3" />
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="flex items-center gap-1.5 bg-surface border border-black/[0.06] rounded-full px-4 py-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.svg key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 400 }} className="w-3.5 h-3.5 text-accent fill-accent" viewBox="0 0 20 20">
                  <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.49L10 13.47l-4.94 2.63L6 10.61l-4-3.9 5.61-.87L10 1z" />
                </motion.svg>
              ))}
            </div>
            <span className="text-xs text-muted font-medium">50+ projects</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-[950px] mx-auto mb-6">
          <h1 className="font-sans font-bold text-[clamp(44px,6.5vw,80px)] leading-[1.02] tracking-[-0.03em]">
            {["Custom", "websites"].map((word, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className="inline-block mr-[0.22em]">{word}</motion.span>
            ))}
            <br />
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="inline-block mr-[0.22em]">built in</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.42 }} className="inline-block mr-[0.22em] font-display italic font-normal text-accent">days,</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="inline-block mr-[0.22em]">not</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.56 }} className="inline-block font-display italic font-normal">months.</motion.span>
          </h1>
        </div>

        {/* Rotating subtitle */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex items-center justify-center text-[17px] text-muted text-center max-w-[440px] mx-auto mb-10 leading-relaxed h-7 overflow-hidden">
          <TextRotate texts={["AI-accelerated. Done in days.", "Creative Director quality.", "Built to convert.", "No templates. No excuses."]} rotationInterval={2800} splitBy="words" staggerFrom="first" staggerDuration={0.04} transition={{ type: "spring", damping: 30, stiffness: 400 }} initial={{ y: "110%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-110%", opacity: 0 }} splitLevelClassName="overflow-hidden" mainClassName="justify-center" />
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }} className="flex items-center justify-center gap-4 mb-24">
          <BookCallButton />
          <motion.a href="#our-work" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="h-12 px-7 inline-flex items-center justify-center rounded-lg border border-foreground/15 text-foreground font-medium hover:bg-surface transition-colors">
            Our work
          </motion.a>
        </motion.div>

        {/* Portfolio preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { bg: "bg-[#E05A2D]", label: "SaaS Platform" },
            { bg: "bg-[#E8734D]", label: "E-commerce" },
            { bg: "bg-[#C74B20]", label: "Agency Site" },
            { bg: "bg-[#F09070]", label: "Portfolio" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 1.0 + i * 0.12, type: "spring", stiffness: 100 }} whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`${item.bg} aspect-[4/3] rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300`}>
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-black/10" /><span className="w-2 h-2 rounded-full bg-black/10" /><span className="w-2 h-2 rounded-full bg-black/10" />
              </div>
              <div className="absolute top-10 left-4 right-4 space-y-2 opacity-[0.12]">
                <div className="h-2 bg-black rounded-full w-2/3" /><div className="h-1.5 bg-black rounded-full w-full" /><div className="h-1.5 bg-black rounded-full w-4/5" /><div className="h-6 bg-black/50 rounded-lg w-1/3 mt-3" />
              </div>
              <div className="absolute inset-0 flex items-end p-5">
                <motion.span className="text-sm font-medium text-foreground/50 group-hover:text-foreground transition-colors">{item.label}</motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
