"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

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
    stat: "Companies that respond within 5 minutes are 21x more likely to qualify a lead.",
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
    stat: "Teams that respond within 1 minute see up to 391% higher conversions.",
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
    stat: "Automated workflows generate 320% more revenue than non-automated campaigns.",
    statSource: "Omnisend, 2024",
    nodes: [
      { id: "t1", label: "Blog post published", type: "trigger" },
      { id: "p1", label: "AI creates platform variants", type: "process" },
      { id: "p2", label: "Scheduled across channels", type: "process" },
      { id: "p3", label: "Engagement tracked", type: "process" },
      { id: "o1", label: "1 post, 5 platforms, automated", type: "output" },
    ],
  },
];

export default function AutomationFlows() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const runAnimation = useCallback(() => {
    setVisibleNodes(0);
    setIsAnimating(true);

    const nodeCount = flows[activeFlow].nodes.length;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setVisibleNodes(step);
      if (step >= nodeCount) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [activeFlow]);

  useEffect(() => {
    const cleanup = runAnimation();
    return cleanup;
  }, [runAnimation]);

  const currentFlow = flows[activeFlow];

  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            See it in action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-5"
          >
            One trigger.{" "}
            <span className="font-display italic font-normal text-accent">
              Everything handled.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[520px] mx-auto"
          >
            Pick a scenario. Watch the automation unfold step by step.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Flow selector */}
          <div className="space-y-3">
            {flows.map((flow, i) => (
              <motion.button
                key={flow.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveFlow(i)}
                className={`w-full text-left bg-white rounded-2xl border p-6 transition-all duration-200 ${
                  activeFlow === i ? "border-accent/30" : "border-foreground/[0.06] hover:border-foreground/[0.12]"
                }`}
              >
                <h3 className={`font-semibold mb-1 transition-colors ${activeFlow === i ? "text-accent" : "text-foreground"}`}>
                  {flow.title}
                </h3>
                <p className="text-sm text-muted mb-3">{flow.problem}</p>
                <p className="text-[12px] text-muted leading-snug">{flow.stat}</p>
                <p className="text-[10px] text-muted/60 mt-1">-- {flow.statSource}</p>
              </motion.button>
            ))}
          </div>

          {/* Flow visualization — sequential reveal */}
          <div className="bg-white rounded-2xl border border-foreground/[0.06] p-8">
            <div className="flex items-center gap-2 mb-8">
              <span className={`w-2 h-2 rounded-full transition-colors ${isAnimating ? "bg-accent animate-pulse" : "bg-accent"}`} />
              <span className="text-sm font-medium text-foreground">{currentFlow.title}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {currentFlow.nodes.map((node, i) => {
                  const isVisible = i < visibleNodes;
                  const isLatest = i === visibleNodes - 1;
                  const isCompleted = i < visibleNodes - 1;

                  return (
                    <div key={node.id}>
                      {/* Connecting line */}
                      {i > 0 && (
                        <div className="flex justify-center">
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={isVisible
                              ? { height: 28, opacity: 1 }
                              : { height: 28, opacity: 0.1 }
                            }
                            transition={{ duration: 0.3 }}
                            className={`w-[2px] rounded-full ${isVisible ? "bg-accent" : "bg-foreground/[0.06]"}`}
                          />
                        </div>
                      )}

                      {/* Node */}
                      <motion.div
                        initial={{ opacity: 0.15 }}
                        animate={isVisible
                          ? { opacity: 1 }
                          : { opacity: 0.15 }
                        }
                        transition={{ duration: 0.4 }}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-300 ${
                          isLatest
                            ? "border-accent/30 bg-accent/[0.04] shadow-[0_0_0_1px_rgba(139,92,246,0.1)]"
                            : isCompleted
                              ? "border-accent/15 bg-transparent"
                              : "border-foreground/[0.04] bg-transparent"
                        }`}
                      >
                        {/* Progress dot */}
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300 ${
                          isLatest
                            ? "bg-accent"
                            : isCompleted
                              ? "bg-accent/40"
                              : "bg-foreground/[0.08]"
                        }`} />

                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isVisible ? "text-foreground" : "text-foreground/20"
                        }`}>
                          {node.label}
                        </span>

                        {(node.type === "trigger" || node.type === "output") && isVisible && (
                          <span className="ml-auto text-[9px] font-medium text-accent uppercase tracking-wider">
                            {node.type}
                          </span>
                        )}

                        {/* Check mark for completed */}
                        {isCompleted && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-4 h-4 text-accent/50"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </motion.svg>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <motion.div
              animate={{ opacity: visibleNodes >= currentFlow.nodes.length ? 1 : 0.3 }}
              transition={{ duration: 0.4 }}
              className="mt-8 pt-4 border-t border-foreground/[0.06] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs text-muted">
                Total time: <span className="font-semibold text-accent">&lt;30 seconds</span> -- no human needed
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
