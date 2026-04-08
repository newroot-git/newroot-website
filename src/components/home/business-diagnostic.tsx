"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

type Phase = "scanning" | "found" | "fixing" | "done";

export default function BusinessDiagnostic() {
  const [phase, setPhase] = useState<Phase>("scanning");
  const [scanIndex, setScanIndex] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!hasTriggered) return;

    // Scanning phase
    const scanInterval = setInterval(() => {
      setScanIndex((prev) => {
        if (prev >= businessBlocks.length - 1) {
          clearInterval(scanInterval);
          setTimeout(() => setPhase("found"), 600);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(scanInterval);
  }, [hasTriggered]);

  useEffect(() => {
    if (phase === "found") {
      const timer = setTimeout(() => setPhase("fixing"), 2000);
      return () => clearTimeout(timer);
    }
    if (phase === "fixing") {
      const timer = setTimeout(() => setPhase("done"), 2500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const isIssue = (id: string) => issues.some((b) => b.id === id);
  const isScanned = (index: number) => phase !== "scanning" || index <= scanIndex;
  const isHighlighted = (id: string) =>
    (phase === "found" || phase === "fixing") && isIssue(id);
  const isFixed = (id: string) => phase === "done" && isIssue(id);

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasTriggered) {
          setTimeout(() => setHasTriggered(true), 500);
        }
      }}
      viewport={{ once: true }}
      className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-8 relative overflow-hidden"
    >
      {/* Phase label */}
      <div className="flex items-center gap-2 mb-6">
        <motion.div
          animate={
            phase === "scanning"
              ? { scale: [1, 1.3, 1] }
              : phase === "done"
                ? {}
                : { scale: [1, 1.2, 1] }
          }
          transition={{ duration: 0.8, repeat: phase === "done" ? 0 : Infinity }}
          className={`w-2.5 h-2.5 rounded-full ${
            phase === "done"
              ? "bg-green-500"
              : phase === "found" || phase === "fixing"
                ? "bg-accent"
                : "bg-blue"
          }`}
        />
        <span className="text-sm font-medium text-foreground">
          {phase === "scanning" && "Scanning your business..."}
          {phase === "found" && `${issues.length} issues found`}
          {phase === "fixing" && "Fixing..."}
          {phase === "done" && "Optimised. Ready to grow."}
        </span>
      </div>

      {/* Business blocks grid */}
      <div className="grid grid-cols-3 gap-2">
        {businessBlocks.map((block, index) => (
          <motion.div
            key={block.id}
            animate={{
              opacity: isScanned(index) ? 1 : 0.3,
              scale: isHighlighted(block.id) ? 1.05 : 1,
              borderColor: isHighlighted(block.id)
                ? "#FF5C35"
                : isFixed(block.id)
                  ? "#22C55E"
                  : "rgba(0,0,0,0.04)",
            }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl border-2 p-3 text-center transition-colors"
            style={{
              backgroundColor: isFixed(block.id)
                ? `${block.color}10`
                : isHighlighted(block.id)
                  ? "#FFF0EC"
                  : "transparent",
              boxShadow: isHighlighted(block.id)
                ? "0 0 20px rgba(255,92,53,0.15)"
                : isFixed(block.id)
                  ? `0 0 20px ${block.color}15`
                  : "none",
            }}
          >
            <span className="text-xs font-medium text-foreground">
              {block.label}
            </span>

            {/* Issue indicator */}
            <AnimatePresence>
              {isHighlighted(block.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center"
                >
                  <span className="text-white text-[8px] font-bold">!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fixed indicator */}
            <AnimatePresence>
              {isFixed(block.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
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
        ))}
      </div>

      {/* Extracted issues */}
      <AnimatePresence>
        {(phase === "found" || phase === "fixing") && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 pt-4 border-t border-foreground/[0.06] overflow-hidden"
          >
            <span className="text-[10px] font-medium text-accent tracking-wider uppercase block mb-2">
              Issues identified
            </span>
            <div className="flex flex-wrap gap-1.5">
              {issues.map((issue, i) => (
                <motion.span
                  key={issue.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                >
                  {issue.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Done state */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="mt-4 pt-4 border-t border-foreground/[0.06] overflow-hidden"
          >
            <span className="text-[10px] font-medium text-green-600 tracking-wider uppercase block mb-2">
              Fixed & optimised
            </span>
            <div className="flex flex-wrap gap-1.5">
              {issues.map((issue, i) => (
                <motion.span
                  key={issue.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${issue.color}15`, color: issue.color }}
                >
                  ✓ {issue.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
