"use client";

import { motion, useMotionValue, useTransform, animate, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "before" | "sweeping" | "after";

const negativeBubbles = [
  { label: "Where do I click?", x: "right-[-14px]", y: "top-[8%]", align: "left" as const, rotate: -2 },
  { label: "Image won't load", x: "left-[-14px]", y: "top-[42%]", align: "right" as const, rotate: 3 },
  { label: "Can't read this", x: "right-[-14px]", y: "top-[22%]", align: "left" as const, rotate: 1.5 },
  { label: "Looks broken on mobile", x: "left-[-14px]", y: "top-[68%]", align: "right" as const, rotate: -2.5 },
  { label: "Is this site from 2012?", x: "right-[-14px]", y: "bottom-[12%]", align: "left" as const, rotate: 2 },
];

const positiveBubbles = [
  { label: "I know exactly what to do", x: "right-[-14px]", y: "top-[8%]", align: "left" as const, rotate: 1.5 },
  { label: "This looks incredible", x: "left-[-14px]", y: "top-[42%]", align: "right" as const, rotate: -2 },
  { label: "Clear and compelling", x: "right-[-14px]", y: "top-[22%]", align: "left" as const, rotate: -1 },
  { label: "Works perfectly everywhere", x: "left-[-14px]", y: "top-[68%]", align: "right" as const, rotate: 2.5 },
  { label: "I want to work with them", x: "right-[-14px]", y: "bottom-[12%]", align: "left" as const, rotate: -1.5 },
];

function AnnotationBubble({
  label, x, y, align, index, positive, rotate = 0,
}: {
  label: string; x: string; y: string; align: "left" | "right"; index: number; positive: boolean; rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: align === "left" ? -20 : 20 }}
      animate={{ opacity: 1, scale: 1, x: 0, rotate, y: [0, -3, 0] }}
      exit={{ opacity: 0, scale: 0.5, x: align === "left" ? -15 : 15 }}
      transition={{
        delay: index * 0.18, duration: 0.5, type: "spring", stiffness: 250, damping: 18,
        y: { delay: index * 0.18 + 0.5, duration: 2.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute ${x} ${y} z-40 px-4 py-2 rounded-2xl text-[13px] font-bold whitespace-nowrap ${
        positive
          ? "bg-white text-foreground shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-[#FF3B5C] text-white shadow-[0_4px_20px_rgba(255,59,92,0.35)]"
      }`}
    >
      {label}
    </motion.div>
  );
}

const ELEMENT_THRESHOLDS = { navLogo: 0.05, navLinks: 0.65, headline: 0.18, image: 0.38, cards: 0.58, cta: 0.75 };

function BeforeAfter() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [phase, setPhase] = useState<Phase>("before");
  const [revealed, setRevealed] = useState({ navLogo: false, navLinks: false, headline: false, image: false, cards: false, cta: false });

  const wandProgress = useMotionValue(0);
  const beforeClip = useTransform(wandProgress, (v) => `inset(0 0 0 ${v * 100}%)`);
  const wandLeft = useTransform(wandProgress, (v) => `${v * 100}%`);
  const wandGlow = useTransform(wandProgress, [0, 0.2, 0.5, 0.8, 1], [0.2, 0.8, 1, 0.8, 0.2]);

  useMotionValueEvent(wandProgress, "change", (v) => {
    setRevealed((prev) => ({
      navLogo: prev.navLogo || v >= ELEMENT_THRESHOLDS.navLogo,
      navLinks: prev.navLinks || v >= ELEMENT_THRESHOLDS.navLinks,
      headline: prev.headline || v >= ELEMENT_THRESHOLDS.headline,
      image: prev.image || v >= ELEMENT_THRESHOLDS.image,
      cards: prev.cards || v >= ELEMENT_THRESHOLDS.cards,
      cta: prev.cta || v >= ELEMENT_THRESHOLDS.cta,
    }));
  });

  useEffect(() => {
    if (!hasTriggered) return;
    const bubbleTimer = setTimeout(() => {
      setPhase("sweeping");
      setTimeout(() => {
        animate(wandProgress, 1, {
          duration: 3, ease: [0.16, 0.7, 0.3, 0.98],
          onComplete: () => setPhase("after"),
        });
      }, 400);
    }, 2800);
    return () => clearTimeout(bubbleTimer);
  }, [hasTriggered, wandProgress]);

  const isSweepingOrAfter = phase === "sweeping" || phase === "after";
  const isAfter = phase === "after";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => { setTimeout(() => setHasTriggered(true), 600); }}
      className="relative max-w-[780px] mx-auto mb-12"
    >
      <div className="relative px-[120px] md:px-[140px]">
        <AnimatePresence>
          {hasTriggered && phase === "before" && negativeBubbles.map((b, i) => (
            <AnnotationBubble key={`neg-${i}`} label={b.label} x={b.x} y={b.y} align={b.align} index={i} positive={false} rotate={b.rotate} />
          ))}
        </AnimatePresence>
        <AnimatePresence>
          {isAfter && positiveBubbles.map((b, i) => (
            <AnnotationBubble key={`pos-${i}`} label={b.label} x={b.x} y={b.y} align={b.align} index={i} positive={true} rotate={b.rotate} />
          ))}
        </AnimatePresence>

        <motion.div
          animate={hasTriggered && phase === "before" ? { y: [0, -4, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`relative rounded-2xl overflow-hidden border backdrop-blur-sm aspect-[16/10] ${
            isAfter
              ? "border-white/25 bg-white/[0.06] shadow-[0_8px_50px_rgba(255,255,255,0.08)]"
              : "border-white/15 bg-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
          } transition-all duration-700`}
        >
          {/* === BEFORE === */}
          <motion.div
            className="absolute inset-0 bg-[#D8D8DC]"
            style={phase === "sweeping" ? { clipPath: beforeClip } : undefined}
            animate={isAfter ? { opacity: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5 md:p-7 h-full">
              <div className="flex items-center gap-0 mb-0 bg-[#C0C0C4] h-7 px-2 border-b border-[#B0B0B4]">
                <div className="w-7 h-3 bg-[#A8A8AD] border border-[#9898A0]" />
                <div className="flex gap-0 ml-auto items-center h-full">
                  <div className="h-full w-12 bg-[#CBCBD0] border-x border-[#B0B0B4] flex items-center justify-center"><div className="h-1 w-7 bg-[#888]" /></div>
                  <div className="h-full w-10 bg-[#CBCBD0] border-r border-[#B0B0B4] flex items-center justify-center"><div className="h-1 w-5 bg-[#888]" /></div>
                  <motion.div animate={{ rotate: [0, 2, 6, 12, 18], y: [0, 1, 3, 6, 10], opacity: [1, 1, 0.8, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeIn" }} className="h-full w-14 bg-[#CBCBD0] border-r border-[#B0B0B4] flex items-center justify-center origin-top-left"><div className="h-1 w-8 bg-[#888]" /></motion.div>
                  <div className="h-full w-10 bg-[#CBCBD0] flex items-center justify-center"><div className="h-1 w-6 bg-[#888]" /></div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="h-1.5 bg-[#BBBBC0] w-[92%]" /><div className="h-1.5 bg-[#BBBBC0] w-[85%]" /><div className="h-1.5 bg-[#B5B5BA] w-[95%]" />
                <div className="h-1 bg-[#AEAEB3] w-full mt-1" /><div className="h-1 bg-[#AEAEB3] w-[80%]" /><div className="h-1 bg-[#AEAEB3] w-[88%]" />
              </div>
              <div className="mt-3 h-[24%] bg-[#C5C5CA] border border-[#B0B0B4] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[45%]"><div className="h-1/3 bg-[#BCBCC0]" /><div className="h-1/3 bg-[#D0D0D4]" /><div className="h-1/3 bg-gradient-to-r from-[#C2C2C6] via-[#D5D5D9] to-[#C2C2C6]" /></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 text-[#999]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" /></motion.svg>
                </div>
                <div className="absolute top-1.5 left-1.5"><svg className="w-3.5 h-3.5 text-[#999]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="0" /><path d="M9 9l6 6M15 9l-6 6" /></svg></div>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="flex-1 h-9 bg-[#CCCCCE] border border-[#B5B5B8] p-1.5"><div className="h-1 bg-[#A5A5AA] w-full" /><div className="h-0.5 bg-[#B0B0B5] w-2/3 mt-1" /><div className="h-0.5 bg-[#B0B0B5] w-full mt-0.5" /></div>
                <div className="flex-1 h-11 bg-[#D0D0D4] border border-[#B5B5B8] p-1.5 translate-y-1.5"><div className="h-1 bg-[#A5A5AA] w-1/2" /><div className="h-0.5 bg-[#B0B0B5] w-full mt-1" /></div>
                <div className="flex-1 h-7 bg-[#C8C8CC] border border-[#B5B5B8] p-1.5 -translate-y-1"><div className="h-1 bg-[#A8A8AD] w-3/4" /></div>
              </div>
              <div className="flex gap-1.5 mt-2"><div className="h-4 w-16 bg-[#669966] border border-[#558855]" /><div className="h-4 w-12 bg-[#B0B0B5] border border-[#9A9A9F]" /></div>
              <div className="absolute bottom-4 left-2 right-2 h-6 bg-[#E0E0E4] border border-[#B5B5B8] flex items-center justify-between px-2 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]"><div className="h-1 bg-[#999] w-20" /><div className="flex gap-1"><div className="h-3 w-8 bg-[#669966] border border-[#558855]" /><div className="h-3 w-6 bg-[#B5B5B8] border border-[#A0A0A5]" /></div></div>
            </div>
          </motion.div>

          {/* === AFTER === */}
          <motion.div className="absolute inset-0 p-5 md:p-7" initial={{ opacity: 0 }} animate={{ opacity: isSweepingOrAfter ? 1 : 0 }} transition={{ duration: 0.15 }}>
            <div className="flex items-center gap-3 mb-3">
              <motion.div initial={{ opacity: 0, y: -10 }} animate={revealed.navLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }} transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}>
                <motion.div animate={isAfter ? { scale: [1, 1.05, 1] } : {}} transition={{ duration: 3, repeat: Infinity }} className="w-6 h-6 rounded-lg bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.15)]" />
              </motion.div>
              <motion.div className="flex gap-3.5 ml-auto items-center" initial={{ opacity: 0, x: 10 }} animate={revealed.navLinks ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }} transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}>
                {["w-9", "w-7", "w-11"].map((w, i) => (<motion.div key={i} animate={isAfter ? { opacity: [0.3, 0.5, 0.3] } : {}} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className={`h-1.5 ${w} rounded-full bg-white/35`} />))}
                <motion.div animate={isAfter ? { boxShadow: ["0 0 10px rgba(255,255,255,0.1)", "0 0 18px rgba(255,255,255,0.25)", "0 0 10px rgba(255,255,255,0.1)"] } : {}} transition={{ duration: 2.5, repeat: Infinity }} className="h-5 w-14 rounded-lg bg-white/55" />
              </motion.div>
            </div>
            <motion.div className="mt-2 space-y-1.5" initial={{ opacity: 0, y: 8 }} animate={revealed.headline ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }} transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}>
              <motion.div animate={revealed.headline ? { width: ["0%", "55%"] } : {}} transition={{ duration: 0.7, ease: "easeOut" }} className="h-3.5 bg-white/65 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.1)]" style={{ width: revealed.headline ? undefined : "0%" }} />
              <motion.div initial={{ opacity: 0 }} animate={revealed.headline ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="h-1.5 bg-white/25 rounded-full w-full mt-2" />
              <motion.div initial={{ opacity: 0 }} animate={revealed.headline ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.4, delay: 0.5 }} className="h-1.5 bg-white/25 rounded-full w-[78%]" />
            </motion.div>
            <motion.div className="mt-3 h-[26%] rounded-xl bg-gradient-to-br from-white/14 via-white/8 to-white/[0.04] overflow-hidden relative shadow-[0_4px_20px_rgba(255,255,255,0.06)]" initial={{ opacity: 0, scale: 0.92 }} animate={revealed.image ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }} transition={{ duration: 0.6, type: "spring", stiffness: 180, damping: 18 }}>
              <motion.div animate={isAfter ? { x: ["-100%", "200%"] } : {}} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }} className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
              <motion.div animate={isAfter ? { scale: [0.95, 1, 0.95], opacity: [0.5, 0.9, 0.5] } : {}} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center gap-2.5">
                {[0.22, 0.16, 0.19].map((o, i) => (<motion.div key={i} animate={isAfter ? { y: [0, -2, 0] } : {}} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} className="w-9 h-9 rounded-lg shadow-sm" style={{ backgroundColor: `rgba(255,255,255,${o})` }} />))}
              </motion.div>
            </motion.div>
            <div className="flex gap-2.5 mt-2.5">
              {[0, 1, 2].map((i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={revealed.cards ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }} className="flex-1 h-8 bg-white/[0.07] rounded-xl border border-white/10 p-1.5"><div className="h-1.5 bg-white/28 rounded-full w-2/3" /><div className="h-0.5 bg-white/14 rounded-full w-full mt-1" /></motion.div>))}
            </div>
            <motion.div className="mt-2.5 flex gap-2.5" initial={{ opacity: 0, y: 8 }} animate={revealed.cta ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }} transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}>
              <motion.div animate={isAfter ? { boxShadow: ["0 2px 12px rgba(255,255,255,0.1)", "0 2px 20px rgba(255,255,255,0.25)", "0 2px 12px rgba(255,255,255,0.1)"] } : {}} transition={{ duration: 2, repeat: Infinity }} className="h-5 w-20 rounded-lg bg-white/55" />
              <div className="h-5 w-16 rounded-lg border border-white/20 bg-white/[0.04]" />
            </motion.div>
          </motion.div>

          {/* === WAND SWEEP === */}
          {phase === "sweeping" && (
            <motion.div className="absolute inset-y-0 z-30 pointer-events-none" style={{ left: wandLeft }}>
              <div className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
              <motion.div style={{ opacity: wandGlow }} className="absolute -left-[70px] inset-y-0 w-[140px]"><div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" /></motion.div>
              <div className="absolute -left-[12px] inset-y-0 w-[24px]"><div className="h-full bg-gradient-to-r from-transparent via-white/35 to-transparent" /></div>
              {[10, 25, 45, 65, 80, 92].map((top, i) => (
                <motion.div key={i} animate={{ scale: [0.4, 1.3, 0.4], opacity: [0.2, 1, 0.2], x: [0, i % 2 === 0 ? 6 : -6, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.1 }} className="absolute -left-1" style={{ top: `${top}%` }}>
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white" fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
                </motion.div>
              ))}
            </motion.div>
          )}

          {isAfter && (
            <>
              <motion.div initial={{ opacity: 0.4 }} animate={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0 bg-white/10 pointer-events-none z-20 rounded-2xl" />
              {[
                { x: "95%", y: "15%", size: 3, delay: 0 }, { x: "92%", y: "35%", size: 4, delay: 0.05 },
                { x: "97%", y: "50%", size: 3.5, delay: 0.02 }, { x: "90%", y: "65%", size: 2.5, delay: 0.08 },
                { x: "94%", y: "80%", size: 3, delay: 0.04 }, { x: "88%", y: "25%", size: 2, delay: 0.1 },
                { x: "96%", y: "70%", size: 2, delay: 0.06 }, { x: "85%", y: "45%", size: 3, delay: 0.12 },
              ].map((spark, i) => (
                <motion.div key={`spark-${i}`} initial={{ opacity: 1, scale: 0 }} animate={{ opacity: [1, 1, 0], scale: [0, 1.5, 0.5], x: [0, (i % 2 === 0 ? 15 : -10)], y: [0, (i % 3 === 0 ? -12 : 8)] }} transition={{ duration: 0.8, delay: spark.delay, ease: "easeOut" }} className="absolute pointer-events-none z-30" style={{ left: spark.x, top: spark.y }}>
                  <svg viewBox="0 0 12 12" style={{ width: `${spark.size * 4}px`, height: `${spark.size * 4}px` }} className="text-white" fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
                </motion.div>
              ))}
              <motion.div initial={{ scale: 0, opacity: 0.6 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute right-[5%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/40 pointer-events-none z-30" />
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Solution() {
  return (
    <section className="relative py-[140px] px-6 bg-[#0055FF] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -left-20 -top-10 w-[600px] h-[600px]" viewBox="0 0 500 500" fill="none">
          <motion.path d="M50,250 C120,80 350,80 400,250 C450,420 300,450 200,350" stroke="white" strokeWidth="35" strokeLinecap="round" fill="none" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2.5, ease: "easeInOut" }} />
        </svg>
        <svg className="absolute -right-16 -bottom-16 w-[450px] h-[450px]" viewBox="0 0 400 400" fill="none">
          <motion.path d="M350,50 C200,100 300,300 50,350" stroke="white" strokeWidth="25" strokeLinecap="round" fill="none" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.08 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }} />
        </svg>
        {[
          { top: "12%", right: "18%", size: "w-5 h-5", delay: 0 },
          { top: "70%", left: "12%", size: "w-4 h-4", delay: 1 },
          { top: "45%", right: "8%", size: "w-3 h-3", delay: 2 },
          { top: "25%", left: "6%", size: "w-6 h-6", delay: 0.5 },
          { top: "85%", right: "25%", size: "w-2.5 h-2.5", delay: 1.5 },
        ].map((s, i) => (
          <motion.span key={i} animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: s.delay }} className="absolute select-none" style={{ top: s.top, left: "left" in s ? s.left : undefined, right: "right" in s ? s.right : undefined }}>
            <svg viewBox="0 0 12 12" className={`${s.size} text-white`} fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
          </motion.span>
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} className="text-white/40 text-sm font-medium tracking-wide mb-6">The fix</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="font-display text-[clamp(38px,5.5vw,68px)] leading-[1.05] text-white mb-8 max-w-[800px] mx-auto">
          This is where{" "}
          <motion.span animate={{ rotate: [0, 10, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="inline-flex items-center justify-center w-[0.75em] h-[0.75em] rounded-xl bg-white/20 align-middle mx-1">
            <svg viewBox="0 0 12 12" className="w-[0.4em] h-[0.4em] text-white" fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
          </motion.span>{" "}
          we come in
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="text-xl text-white/75 max-w-[580px] mx-auto mb-10 leading-relaxed">
          Websites, content, and AI solutions — built by two people who actually give a damn. One partner. Every piece your business needs.
        </motion.p>
        <BeforeAfter />
        <motion.a initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#book" className="inline-flex h-12 px-7 items-center justify-center rounded-lg bg-white text-[#0055FF] font-medium hover:bg-white/90 transition-colors shadow-[0_4px_20px_rgba(255,255,255,0.2)]">
          Book a call
        </motion.a>
      </div>
    </section>
  );
}
