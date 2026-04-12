"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DiagnosisCard from "./diagnosis-card";

// ── Types ──────────────────────────────────────────────────
interface DiagnosticState {
  customerSource: string | null;
  mainChallenge: string | null;
  afterVisit: string | null;
  followUpSpeed: string | null;
  contentSituation: string | null;
  toolCount: string | null;
}

type FunnelLevel = "strong" | "needs-work" | "critical" | "none";

interface Diagnosis {
  website: FunnelLevel;
  content: FunnelLevel;
  automation: FunnelLevel;
  growth: FunnelLevel;
  topPriority: string;
  summary: string;
}

// ── Questions (indirect/behavioral) ────────────────────────
const customerSources = [
  { label: "Mostly word of mouth and referrals", value: "referrals" },
  { label: "Social media brings in a fair amount", value: "social" },
  { label: "People find us on Google", value: "organic" },
  { label: "We run paid ads", value: "paid" },
  { label: "Honestly, I'm not sure where they come from", value: "unknown" },
  { label: "We're not getting enough customers — that's the problem", value: "none" },
];

const mainChallenges = [
  { label: "Getting enough people to know we exist", value: "awareness" },
  { label: "People find us but don't buy or enquire", value: "conversion" },
  { label: "We can't keep up with demand and admin", value: "operations" },
  { label: "Everything feels disconnected and manual", value: "fragmented" },
  { label: "We're growing but it's chaotic", value: "scaling" },
  { label: "I don't know — I just know something's off", value: "unknown" },
];

const afterVisitOptions = [
  { label: "They usually leave without doing anything", value: "bounce" },
  { label: "Some fill out a form or make contact", value: "some-convert" },
  { label: "We get decent enquiries from the site", value: "converts" },
  { label: "We don't really have a proper website", value: "no-site" },
  { label: "I have no idea what happens on our site", value: "no-data" },
];

const followUpSpeeds = [
  { label: "Within minutes — we're on it", value: "fast" },
  { label: "Within a few hours", value: "hours" },
  { label: "Next business day, usually", value: "next-day" },
  { label: "It depends — sometimes things slip through", value: "inconsistent" },
  { label: "We don't have a system for this", value: "none" },
];

const contentSituations = [
  { label: "We post consistently across multiple platforms", value: "strong" },
  { label: "We post sometimes but it's not consistent", value: "inconsistent" },
  { label: "We know we should but we barely do", value: "weak" },
  { label: "We don't post content at all", value: "none" },
];

const toolCounts = [
  { label: "Just one or two — pretty streamlined", value: "few" },
  { label: "A handful of tools that mostly work together", value: "moderate" },
  { label: "Too many tools, nothing connects properly", value: "many" },
  { label: "Spreadsheets, notes apps, and hope", value: "chaos" },
];

// ── Diagnosis Logic ────────────────────────────────────────
function computeDiagnosis(state: DiagnosticState): Diagnosis {
  let website: FunnelLevel = "strong";
  let content: FunnelLevel = "strong";
  let automation: FunnelLevel = "strong";
  let growth: FunnelLevel = "strong";

  // Website
  if (state.afterVisit === "no-site") website = "none";
  else if (state.afterVisit === "bounce" || state.afterVisit === "no-data") website = "critical";
  else if (state.afterVisit === "some-convert") website = "needs-work";
  if (state.mainChallenge === "conversion") website = website === "strong" ? "needs-work" : "critical";

  // Content
  if (state.contentSituation === "none") content = "critical";
  else if (state.contentSituation === "weak") content = "critical";
  else if (state.contentSituation === "inconsistent") content = "needs-work";

  // Automation
  if (state.followUpSpeed === "none" || state.followUpSpeed === "inconsistent") automation = "critical";
  else if (state.followUpSpeed === "next-day") automation = "needs-work";
  if (state.toolCount === "chaos" || state.toolCount === "many") {
    automation = automation === "strong" ? "needs-work" : "critical";
  }
  if (state.mainChallenge === "fragmented" || state.mainChallenge === "operations") {
    automation = automation === "strong" ? "needs-work" : "critical";
  }

  // Growth
  if (state.customerSource === "none" || state.customerSource === "unknown") growth = "critical";
  else if (state.customerSource === "referrals") growth = "needs-work"; // over-reliant on one channel
  if (state.mainChallenge === "awareness") growth = growth === "strong" ? "needs-work" : "critical";

  // Scaling challenge affects everything
  if (state.mainChallenge === "scaling") {
    if (automation === "strong") automation = "needs-work";
    if (content === "strong") content = "needs-work";
  }

  // Top priority
  const levels: Record<string, number> = { none: 4, critical: 3, "needs-work": 2, strong: 1 };
  const scores = { website: levels[website], content: levels[content], automation: levels[automation], growth: levels[growth] };
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topKey = sorted[0][0];

  const priorityMap: Record<string, string> = {
    website: "Your website is the bottleneck. Visitors are arriving but leaving without taking action. Fixing this has the highest immediate impact on revenue.",
    content: "You're invisible between transactions. Without consistent content, potential customers forget you exist. This is the gap to close first.",
    automation: "You're losing leads and time to manual processes. Enquiries slip through, follow-ups are slow, and your tools don't talk to each other.",
    growth: "Your customers can't find you. You're over-reliant on one channel, which means one algorithm change could cut your pipeline overnight.",
  };

  const fixes = [];
  if (website === "critical" || website === "none") fixes.push("website rebuild");
  else if (website === "needs-work") fixes.push("conversion optimisation");
  if (content === "critical") fixes.push("content strategy");
  else if (content === "needs-work") fixes.push("content consistency");
  if (automation === "critical") fixes.push("workflow automation");
  else if (automation === "needs-work") fixes.push("process streamlining");
  if (growth === "critical") fixes.push("growth channels");
  else if (growth === "needs-work") fixes.push("channel diversification");

  return {
    website, content, automation, growth,
    topPriority: priorityMap[topKey],
    summary: fixes.length > 0
      ? `We'd focus on: ${fixes.join(", ")}. Starting with the highest-impact fix first.`
      : "You're in solid shape. A strategy call would help us identify the next growth lever.",
  };
}

// ── Component ──────────────────────────────────────────────
const STORAGE_KEY = "newroot-diagnostic-v1";
const TOTAL_STEPS = 8; // intro + 6 questions + results

export default function DiagnosticFlow() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<DiagnosticState>({
    customerSource: null,
    mainChallenge: null,
    afterVisit: null,
    followUpSpeed: null,
    contentSituation: null,
    toolCount: null,
  });
  const [direction, setDirection] = useState(1);
  const [showDeepAudit, setShowDeepAudit] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState(parsed.state);
        setStep(parsed.step);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, state }));
    } catch { /* ignore */ }
  }, [step, state]);

  const next = useCallback(() => { setDirection(1); setStep((s) => s + 1); }, []);
  const back = useCallback(() => { setDirection(-1); setStep((s) => Math.max(1, s - 1)); }, []);

  const selectAndNext = useCallback((key: keyof DiagnosticState, value: string) => {
    setState((s) => ({ ...s, [key]: value }));
    setTimeout(() => { setDirection(1); setStep((s) => s + 1); }, 200);
  }, []);

  const diagnosis = computeDiagnosis(state);
  const progress = Math.max(0, ((step - 1) / (TOTAL_STEPS - 1)) * 100);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const ease = [0.25, 0.1, 0.25, 1] as const;

  function OptionButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
      <button
        onClick={onClick}
        className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
          selected
            ? "border-[#0055FF] bg-[#0055FF]/5 text-foreground"
            : "border-foreground/8 bg-background text-foreground hover:border-foreground/15"
        }`}
      >
        {children}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="h-[72px] flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="inline-flex items-center">
          <img src="/newroot-logo.png" alt="Newroot" className="h-7" />
        </Link>
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          I&apos;ll explore instead
        </Link>
      </div>

      {/* Progress bar — starts empty, grows */}
      <div className="h-1.5 bg-surface mx-6 md:mx-12 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #0055FF, #8B5CF6, #FF5C35)" }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Step counter */}
      {step > 1 && step < TOTAL_STEPS && (
        <div className="px-6 md:px-12 mt-4">
          <span className="text-[11px] font-medium text-muted tracking-wider uppercase">
            {step - 1} of {TOTAL_STEPS - 2}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-8">
        <div className="w-full max-w-[520px]">
          <AnimatePresence mode="wait" custom={direction}>

            {/* Intro */}
            {step === 1 && (
              <motion.div key="intro" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }} className="text-center">
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }}
                  className="w-14 h-14 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center mx-auto mb-8">
                  <svg viewBox="0 0 12 12" className="w-4 h-4 text-[#0055FF]" fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
                </motion.div>
                <h1 className="font-sans font-bold text-[clamp(28px,5vw,44px)] leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
                  Let&apos;s find what&apos;s{" "}
                  <span className="font-display italic font-normal text-[#0055FF]">holding you back.</span>
                </h1>
                <p className="text-muted leading-relaxed max-w-[380px] mx-auto mb-10">
                  6 quick questions about how your business runs today. No email needed. Takes under a minute.
                </p>
                <button onClick={next} className="h-13 px-10 rounded-lg bg-[#0055FF] text-white text-lg font-medium hover:shadow-[0_4px_24px_rgba(0,85,255,0.3)] transition-shadow">
                  Let&apos;s go
                </button>
              </motion.div>
            )}

            {/* Q1: Where do customers come from? */}
            {step === 2 && (
              <motion.div key="q1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <h2 className="font-sans font-bold text-xl text-foreground mb-2">Where do most of your customers find you?</h2>
                <p className="text-muted text-sm mb-6">Pick the one that describes your main source.</p>
                <div className="space-y-2">
                  {customerSources.map((opt) => (
                    <OptionButton key={opt.value} selected={state.customerSource === opt.value} onClick={() => selectAndNext("customerSource", opt.value)}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q2: Main challenge */}
            {step === 3 && (
              <motion.div key="q2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <h2 className="font-sans font-bold text-xl text-foreground mb-2">What feels like the biggest challenge right now?</h2>
                <p className="text-muted text-sm mb-6">Not what you think should be — what actually keeps you up.</p>
                <div className="space-y-2">
                  {mainChallenges.map((opt) => (
                    <OptionButton key={opt.value} selected={state.mainChallenge === opt.value} onClick={() => selectAndNext("mainChallenge", opt.value)}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q3: What happens when someone visits */}
            {step === 4 && (
              <motion.div key="q3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <h2 className="font-sans font-bold text-xl text-foreground mb-2">When someone visits your website, what usually happens?</h2>
                <p className="text-muted text-sm mb-6">Think about the last 10 visitors.</p>
                <div className="space-y-2">
                  {afterVisitOptions.map((opt) => (
                    <OptionButton key={opt.value} selected={state.afterVisit === opt.value} onClick={() => selectAndNext("afterVisit", opt.value)}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q4: Follow-up speed */}
            {step === 5 && (
              <motion.div key="q4" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <h2 className="font-sans font-bold text-xl text-foreground mb-2">When a new enquiry comes in, how fast does someone respond?</h2>
                <p className="text-muted text-sm mb-6">Be honest — speed matters more than you think.</p>
                <div className="space-y-2">
                  {followUpSpeeds.map((opt) => (
                    <OptionButton key={opt.value} selected={state.followUpSpeed === opt.value} onClick={() => selectAndNext("followUpSpeed", opt.value)}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q5: Content situation */}
            {step === 6 && (
              <motion.div key="q5" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <h2 className="font-sans font-bold text-xl text-foreground mb-2">How&apos;s your content game — social, blog, email?</h2>
                <p className="text-muted text-sm mb-6">All channels count.</p>
                <div className="space-y-2">
                  {contentSituations.map((opt) => (
                    <OptionButton key={opt.value} selected={state.contentSituation === opt.value} onClick={() => selectAndNext("contentSituation", opt.value)}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q6: Tool situation */}
            {step === 7 && (
              <motion.div key="q6" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <h2 className="font-sans font-bold text-xl text-foreground mb-2">How many different tools and platforms is your business running on?</h2>
                <p className="text-muted text-sm mb-6">CRM, email, scheduling, invoicing, socials, etc.</p>
                <div className="space-y-2">
                  {toolCounts.map((opt) => (
                    <OptionButton key={opt.value} selected={state.toolCount === opt.value} onClick={() => selectAndNext("toolCount", opt.value)}>
                      {opt.label}
                    </OptionButton>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results */}
            {step === 8 && (
              <motion.div key="results" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease }}>
                <div className="text-center mb-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 12 12" className="w-4 h-4 text-[#0055FF]" fill="currentColor"><path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" /></svg>
                  </motion.div>
                  <h2 className="font-sans font-bold text-2xl text-foreground mb-2">Here&apos;s what we see.</h2>
                  <p className="text-muted text-sm">Based on how your business runs today.</p>
                </div>

                <DiagnosisCard diagnosis={diagnosis} />

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6">
                  <div className="bg-[#0055FF]/[0.05] rounded-xl px-5 py-4 border border-[#0055FF]/10 mb-4">
                    <span className="text-[10px] font-medium text-[#0055FF] tracking-wider uppercase block mb-1">Where to start</span>
                    <p className="text-sm text-foreground leading-relaxed">{diagnosis.topPriority}</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{diagnosis.summary}</p>
                </motion.div>

                {/* Two paths forward */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-8 space-y-3">
                  {!showDeepAudit ? (
                    <>
                      <Link href="/contact" className="block w-full h-13 rounded-xl bg-[#0055FF] text-white font-medium text-center leading-[3.25rem] hover:shadow-[0_4px_24px_rgba(0,85,255,0.3)] transition-shadow">
                        Book a free call — let&apos;s talk through this
                      </Link>
                      <button onClick={() => setShowDeepAudit(true)}
                        className="block w-full h-13 rounded-xl border border-foreground/10 text-foreground font-medium text-center leading-[3.25rem] hover:bg-surface transition-colors">
                        I want a deeper analysis
                      </button>
                      <p className="text-xs text-subtle text-center">15 min call, no pitch — or get a detailed audit sent to your inbox.</p>
                    </>
                  ) : (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <div className="bg-surface rounded-xl p-6 border border-foreground/[0.04]">
                        <h3 className="font-semibold text-foreground mb-1">Get a detailed audit</h3>
                        <p className="text-sm text-muted mb-4">Share a bit more and we&apos;ll send you a personalised analysis — reviewed by real humans, not just AI.</p>
                        <input type="url" placeholder="Your website URL (if you have one)" className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-background text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-[#0055FF] transition-colors mb-3" />
                        <input type="text" placeholder="Link to any social channels (optional)" className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-background text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-[#0055FF] transition-colors mb-3" />
                        <textarea placeholder="Anything else you want us to know? (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-background text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-[#0055FF] transition-colors resize-none mb-3" />
                        <input type="email" placeholder="Your email — we'll send the analysis here" className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-background text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-[#0055FF] transition-colors mb-4" />
                        <button className="w-full h-12 rounded-xl bg-[#0055FF] text-white font-medium hover:shadow-[0_4px_24px_rgba(0,85,255,0.3)] transition-shadow">
                          Send me the full audit
                        </button>
                        <p className="text-xs text-subtle text-center mt-3">Takes 24-48 hours. Checked by human eyes.</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Back button */}
      {step > 1 && step < TOTAL_STEPS && (
        <div className="px-6 md:px-12 pb-8">
          <button onClick={back} className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
