"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const businessBlocks = [
  { id: "web", label: "Website", status: "issue", color: "#FF5C35" },
  { id: "seo", label: "SEO", status: "ok", color: "#22C55E" },
  { id: "content", label: "Content", status: "issue", color: "#22C55E" },
  { id: "ads", label: "Paid Ads", status: "ok", color: "#F59E0B" },
  { id: "email", label: "Email", status: "issue", color: "#F59E0B" },
  { id: "social", label: "Social", status: "ok", color: "#22C55E" },
  { id: "crm", label: "CRM", status: "ok", color: "#8B5CF6" },
  { id: "auto", label: "Automation", status: "issue", color: "#8B5CF6" },
  { id: "analytics", label: "Analytics", status: "ok", color: "#0055FF" },
];

const issues = businessBlocks.filter((b) => b.status === "issue");
const issueIds = issues.map((b) => b.id);

type Phase = "idle" | "scanning" | "found" | "fixing" | "done";

export default function BusinessDiagnostic() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [highlightedCount, setHighlightedCount] = useState(0);
  const [fixedCount, setFixedCount] = useState(0);
  const [fixProgress, setFixProgress] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showSticker, setShowSticker] = useState(false);

  // Smooth scan progress (0 to 100 over duration)
  const animateProgress = useCallback((
    setter: (v: number) => void,
    duration: number,
    onDone: () => void,
  ) => {
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setter(p);
      if (p < 100) {
        requestAnimationFrame(frame);
      } else {
        onDone();
      }
    };
    requestAnimationFrame(frame);
  }, []);

  // Phase: scanning
  useEffect(() => {
    if (!hasTriggered) return;
    setPhase("scanning");
    animateProgress(setScanProgress, 3500, () => {
      setTimeout(() => setPhase("found"), 400);
    });
  }, [hasTriggered, animateProgress]);

  // Phase: found — highlight issues one at a time
  useEffect(() => {
    if (phase !== "found") return;
    setHighlightedCount(0);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setHighlightedCount(i);
      if (i >= issues.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("fixing"), 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [phase]);

  // Phase: fixing — fix issues one at a time synced with progress
  useEffect(() => {
    if (phase !== "fixing") return;
    setFixedCount(0);
    setFixProgress(0);

    const totalDuration = 3000;
    const perIssue = totalDuration / issues.length;

    // Progress bar
    animateProgress(setFixProgress, totalDuration, () => {
      setTimeout(() => {
        setPhase("done");
        setTimeout(() => setShowSticker(true), 600);
      }, 300);
    });

    // Stagger fixes
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setFixedCount(i);
      if (i >= issues.length) clearInterval(interval);
    }, perIssue);

    return () => clearInterval(interval);
  }, [phase, animateProgress]);

  // Which blocks are currently scanned (smooth — based on progress %)
  const scanThreshold = (index: number) => {
    const blockPercent = ((index + 1) / businessBlocks.length) * 100;
    return scanProgress >= blockPercent;
  };

  const isHighlighted = (id: string) => {
    if (phase !== "found" && phase !== "fixing") return false;
    const idx = issueIds.indexOf(id);
    if (idx === -1) return false;
    if (phase === "fixing") return idx >= fixedCount; // not yet fixed
    return idx < highlightedCount;
  };

  const isFixed = (id: string) => {
    if (phase === "done") return issueIds.includes(id);
    if (phase !== "fixing") return false;
    const idx = issueIds.indexOf(id);
    return idx !== -1 && idx < fixedCount;
  };

  const isScanned = (index: number) => {
    if (phase !== "scanning" && phase !== "idle") return true;
    return scanThreshold(index);
  };

  // Current progress bar state
  const barProgress = phase === "scanning" ? scanProgress
    : phase === "found" ? Math.round((highlightedCount / issues.length) * 100)
    : phase === "fixing" ? fixProgress
    : 100;

  const barColor = phase === "scanning" ? "#0055FF"
    : phase === "found" ? "#FF5C35"
    : phase === "fixing" ? "#F59E0B"
    : "#22C55E";

  const statusLabel = phase === "idle" ? "Ready to scan"
    : phase === "scanning" ? "Scanning your business..."
    : phase === "found" ? `${highlightedCount} of ${issues.length} issues found`
    : phase === "fixing" ? `Fixing... (${fixedCount}/${issues.length})`
    : "Optimised. Ready to grow.";

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasTriggered) {
          setTimeout(() => setHasTriggered(true), 800);
        }
      }}
      viewport={{ once: true, margin: "-200px" }}
      className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-8 relative"
      style={{ minHeight: 360 }}
    >
      {/* Phase label + progress */}
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          animate={phase === "done" ? {} : phase === "idle" ? {} : { scale: [1, 1.3, 1] }}
          transition={{ duration: 0.6, repeat: phase === "done" || phase === "idle" ? 0 : Infinity }}
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: phase === "idle" ? "#9E9890" : barColor }}
        />
        <span className="text-sm font-medium text-foreground">{statusLabel}</span>
        {phase !== "idle" && (
          <span className="ml-auto text-[11px] font-semibold tabular-nums" style={{ color: barColor }}>
            {barProgress}%
          </span>
        )}
      </div>

      {/* Progress bar — resets each phase via key */}
      <div className="h-1.5 bg-foreground/[0.04] rounded-full overflow-hidden mb-5">
        {phase !== "idle" && (
          <motion.div
            key={phase}
            initial={{ width: "0%" }}
            animate={{ width: `${barProgress}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="h-full rounded-full"
            style={{ backgroundColor: barColor }}
          />
        )}
      </div>

      {/* Business blocks grid */}
      <div className="grid grid-cols-3 gap-2">
        {businessBlocks.map((block, index) => {
          const scanned = isScanned(index);
          const highlighted = isHighlighted(block.id);
          const fixed = isFixed(block.id);

          return (
            <motion.div
              key={block.id}
              animate={{
                opacity: scanned ? 1 : 0.25,
                scale: highlighted ? 1.05 : 1,
                borderColor: highlighted
                  ? "#FF5C35"
                  : fixed
                    ? "#22C55E"
                    : scanned && phase === "scanning"
                      ? `${block.color}30`
                      : "rgba(0,0,0,0.04)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-xl border-2 p-3 text-center"
              style={{
                backgroundColor: fixed
                  ? `${block.color}10`
                  : highlighted
                    ? "#FFF0EC"
                    : scanned && phase === "scanning"
                      ? `${block.color}06`
                      : "transparent",
                boxShadow: highlighted
                  ? "0 0 20px rgba(255,92,53,0.15)"
                  : fixed
                    ? `0 0 20px ${block.color}15`
                    : "none",
              }}
            >
              <span className="text-xs font-medium text-foreground">{block.label}</span>

              {/* Scanned check */}
              <AnimatePresence>
                {scanned && phase === "scanning" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-blue flex items-center justify-center"
                  >
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Issue indicator */}
              <AnimatePresence>
                {highlighted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center"
                  >
                    <span className="text-white text-[8px] font-bold">!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Fixed indicator */}
              <AnimatePresence>
                {fixed && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: block.color }}
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom area — fixed height, content swaps */}
      <div className="mt-4 pt-4 border-t border-foreground/[0.06] min-h-[56px]">
        <AnimatePresence mode="wait">
          {phase === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }}>
              <span className="text-[10px] font-medium text-muted tracking-wider uppercase">
                Waiting to begin...
              </span>
            </motion.div>
          )}

          {phase === "scanning" && (
            <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}>
              <span className="text-[10px] font-medium text-muted tracking-wider uppercase">
                Analysing {businessBlocks.length} areas...
              </span>
            </motion.div>
          )}

          {(phase === "found" || phase === "fixing") && (
            <motion.div key="issues" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <span className="text-[10px] font-medium text-accent tracking-wider uppercase block mb-2">
                Issues identified
              </span>
              <div className="flex flex-wrap gap-1.5">
                {issues.map((issue, i) => (
                  <motion.span
                    key={issue.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: phase === "found" ? (i < highlightedCount ? 1 : 0) : 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {issue.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span className="text-[10px] font-medium text-green-600 tracking-wider uppercase block mb-2">
                Fixed & optimised
              </span>
              <div className="flex flex-wrap gap-1.5">
                {issues.map((issue, i) => (
                  <motion.span
                    key={issue.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${issue.color}15`, color: issue.color }}
                  >
                    {issue.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Speech bubble overlays — below the graphic, pointing up */}
      <AnimatePresence>
        {showSticker && (
          <>
            {/* Bubble 1 — centered below, tail pointing up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30"
            >
              <div className="bg-white rounded-2xl border border-foreground/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-6 py-3.5 relative">
                {/* Tail pointing up */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-foreground/[0.08] rotate-45" />
                <span className="text-base font-semibold text-foreground block text-center whitespace-nowrap relative z-10">
                  It&apos;s that easy.
                </span>
              </div>
            </motion.div>

            {/* Bubble 2 — left side, delayed, tail pointing up-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 18, delay: 1.2 }}
              className="absolute -bottom-16 left-[15%] z-30"
            >
              <div className="bg-accent rounded-2xl shadow-[0_8px_30px_rgba(255,92,53,0.2)] px-5 py-3 relative">
                {/* Tail pointing up */}
                <div className="absolute -top-2 left-8 w-4 h-4 bg-accent rotate-45" />
                <span className="text-sm font-semibold text-white block whitespace-nowrap relative z-10">
                  Well... almost.
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
