"use client";

import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import BookCallButton from "@/components/ui/book-call-button";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative pt-[130px] pb-[80px] px-6 overflow-hidden min-h-screen flex items-center">
      {/* Floating browser chrome frames */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-4, -2, -4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[8%] w-52 h-36 rounded-xl bg-background border border-black/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.07)] opacity-70"
        >
          <div className="flex items-center gap-1.5 px-3 pt-3 pb-2 border-b border-black/[0.05]">
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="w-2 h-2 rounded-full bg-black/10" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 bg-accent/10 rounded-full w-3/5" />
            <div className="h-1.5 bg-black/05 rounded-full w-full" />
            <div className="h-1.5 bg-black/05 rounded-full w-4/5" />
          </div>
        </motion.div>

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
          </div>
        </motion.div>

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
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-surface border border-black/[0.06] rounded-full px-4 py-2">
            <div className="flex gap-1">
              {["#FF5C35", "#22C55E", "#8B5CF6", "#F59E0B"].map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 400 }}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="text-xs text-muted font-medium">
              Four specialist teams. One vision.
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-[950px] mx-auto mb-6">
          <h1 className="font-sans font-bold text-[clamp(44px,6.5vw,80px)] leading-[1.02] tracking-[-0.03em]">
            {["We", "find", "what's"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="inline-block mr-[0.22em] font-display italic font-normal text-accent"
            >
              broken.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block mr-[0.22em]"
            >
              Then we
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="inline-block font-display italic font-normal text-accent"
            >
              fix it.
            </motion.span>
          </h1>
        </div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center text-[17px] text-muted text-center max-w-[440px] mx-auto mb-10 leading-relaxed h-7 overflow-hidden"
        >
          <TextRotate
            texts={[
              "Not another agency. A diagnostic partner.",
              "Specialist teams. One shared vision.",
              "We don't guess. We investigate.",
              "Your website. Your content. Your growth.",
            ]}
            rotationInterval={3200}
            splitBy="words"
            staggerFrom="first"
            staggerDuration={0.04}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            splitLevelClassName="overflow-hidden"
            mainClassName="justify-center"
          />
        </motion.div>

        {/* CTA — direct, outcome-focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col items-center gap-4 mb-24"
        >
          <div className="flex items-center gap-4">
            <Link
              href="/start"
              className="h-14 px-10 inline-flex items-center justify-center rounded-lg bg-accent text-white text-lg font-medium hover:shadow-[0_4px_24px_rgba(0,85,255,0.35)] transition-shadow"
            >
              Find out what&apos;s holding you back
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>60 seconds</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>No email required</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>Free diagnosis</span>
          </div>
        </motion.div>

        {/* Funnel preview — shows the journey, not just service names */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { step: "01", label: "Discovery", sub: "Find the gaps", color: "#0055FF" },
            { step: "02", label: "Strategy", sub: "Map the fix", color: "#0055FF" },
            { step: "03", label: "Build", sub: "Ship the solution", color: "#0055FF" },
            { step: "04", label: "Grow", sub: "Iterate & scale", color: "#0055FF" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-5 text-center"
            >
              <span className="text-2xl font-bold text-accent/20">{item.step}</span>
              <h3 className="font-semibold text-foreground mt-1">{item.label}</h3>
              <p className="text-xs text-muted mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
