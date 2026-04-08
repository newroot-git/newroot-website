"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FlowNode {
  id: string;
  label: string;
  type: "trigger" | "process" | "output";
}

interface FlowDemo {
  title: string;
  problem: string;
  stat: string;
  statSource: string;
  nodes: FlowNode[];
}

const flows: FlowDemo[] = [
  {
    title: "Lead Response",
    problem: "Slow follow-up kills conversions",
    stat: "Companies that respond within 5 minutes are 21x more likely to qualify a lead. Only 0.1% of businesses actually do.",
    statSource: "MIT / InsideSales.com",
    nodes: [
      { id: "t1", label: "New form submission", type: "trigger" },
      { id: "p1", label: "AI qualifies lead", type: "process" },
      { id: "p2", label: "Personalised email sent", type: "process" },
      { id: "p3", label: "CRM record created", type: "process" },
      { id: "o1", label: "Sales notified in <30s", type: "output" },
    ],
  },
  {
    title: "Booking Automation",
    problem: "Manual scheduling wastes hours",
    stat: "Teams that respond within 1 minute see up to 391% higher conversions vs those that wait.",
    statSource: "Chili Piper / Verse.ai",
    nodes: [
      { id: "t1", label: "Client requests a call", type: "trigger" },
      { id: "p1", label: "Available slots checked", type: "process" },
      { id: "p2", label: "Calendar link sent instantly", type: "process" },
      { id: "p3", label: "Reminder sequence triggered", type: "process" },
      { id: "o1", label: "Zero no-shows, zero admin", type: "output" },
    ],
  },
  {
    title: "Content Distribution",
    problem: "Posting everywhere manually doesn't scale",
    stat: "Automated email workflows generate 320% more revenue than non-automated campaigns.",
    statSource: "Omnisend, 2024",
    nodes: [
      { id: "t1", label: "Blog post published", type: "trigger" },
      { id: "p1", label: "AI creates platform variants", type: "process" },
      { id: "p2", label: "Scheduled across channels", type: "process" },
      { id: "p3", label: "Engagement tracked", type: "process" },
      { id: "o1", label: "1 post → 5 platforms, automated", type: "output" },
    ],
  },
];

const nodeColors = {
  trigger: { bg: "bg-accent/10", border: "border-accent/20", text: "text-accent", dot: "bg-accent" },
  process: { bg: "bg-foreground/[0.03]", border: "border-foreground/[0.08]", text: "text-foreground", dot: "bg-foreground/30" },
  output: { bg: "bg-accent/10", border: "border-accent/20", text: "text-accent", dot: "bg-accent" },
};

function FlowVisualization({ flow, isActive }: { flow: FlowDemo; isActive: boolean }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);

  // Auto-animate through nodes when active
  useState(() => {
    if (!isActive) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveNodeIndex(i);
      i++;
      if (i >= flow.nodes.length) {
        setTimeout(() => setActiveNodeIndex(-1), 1500);
        i = 0;
      }
    }, 800);
    return () => clearInterval(interval);
  });

  return (
    <div className="space-y-3">
      {flow.nodes.map((node, i) => {
        const colors = nodeColors[node.type];
        const isNodeActive = isActive && activeNodeIndex >= i;

        return (
          <div key={node.id}>
            {/* Connection line */}
            {i > 0 && (
              <div className="flex justify-center py-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 20 }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  className={`w-[2px] ${isNodeActive ? "bg-accent" : "bg-foreground/10"} transition-colors duration-300`}
                />
              </div>
            )}

            {/* Node */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${colors.bg} ${colors.border} ${
                isNodeActive ? "ring-2 ring-accent/30 shadow-[0_0_20px_rgba(var(--accent-rgb,139,92,246),0.15)]" : ""
              } transition-all duration-300`}
            >
              {/* Animated dot */}
              <motion.div
                animate={isNodeActive ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.6, repeat: isNodeActive ? Infinity : 0 }}
                className={`w-2.5 h-2.5 rounded-full ${isNodeActive ? "bg-accent" : colors.dot} transition-colors duration-300`}
              />
              <span className={`text-sm font-medium ${isNodeActive ? "text-accent" : colors.text} transition-colors duration-300`}>
                {node.label}
              </span>
              {node.type === "trigger" && (
                <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  TRIGGER
                </span>
              )}
              {node.type === "output" && (
                <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  RESULT
                </span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function AutomationFlows() {
  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <section className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          See it in action
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[650px] mb-6"
        >
          One trigger.{" "}
          <span className="font-display italic font-normal text-accent">
            Everything handled.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg leading-relaxed max-w-[520px] mb-12"
        >
          Click a scenario to see how a single event triggers an entire automated workflow — no manual steps, no dropped balls.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Flow selector */}
          <div className="space-y-3">
            {flows.map((flow, i) => (
              <motion.button
                key={flow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveFlow(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeFlow === i
                    ? "bg-background border-accent/20 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                    : "bg-background border-foreground/[0.04] hover:border-foreground/[0.08]"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-lg font-semibold ${activeFlow === i ? "text-accent" : "text-foreground"} transition-colors`}>
                    {flow.title}
                  </h3>
                  <motion.div
                    animate={activeFlow === i ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1, repeat: activeFlow === i ? Infinity : 0 }}
                    className={`w-3 h-3 rounded-full mt-1.5 ${activeFlow === i ? "bg-accent" : "bg-foreground/10"}`}
                  />
                </div>
                <p className="text-sm text-muted mb-3">{flow.problem}</p>
                <div className="bg-accent/[0.06] rounded-lg px-3 py-2">
                  <p className="text-[13px] font-medium text-accent leading-snug">
                    {flow.stat}
                  </p>
                  <p className="text-[10px] text-muted mt-1">
                    — {flow.statSource}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Flow visualization */}
          <div className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">
                {flows[activeFlow].title} — Live flow
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <FlowVisualization
                  flow={flows[activeFlow]}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-foreground/[0.06] flex items-center gap-3"
            >
              <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 text-accent" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <span className="text-sm text-muted">
                Total time: <span className="font-semibold text-accent">&lt;30 seconds</span> — no human intervention required
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
