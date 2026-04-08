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

export default function AutomationFlows() {
  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            See it in action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[520px] mx-auto"
          >
            Click a scenario to see how a single event triggers an entire automated workflow.
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveFlow(i)}
                className={`w-full text-left bg-white rounded-2xl border p-6 transition-all duration-200 ${
                  activeFlow === i ? "border-accent/30" : "border-foreground/[0.06] hover:border-foreground/[0.12]"
                }`}
              >
                <h3 className={`font-semibold mb-1 ${activeFlow === i ? "text-accent" : "text-foreground"} transition-colors`}>
                  {flow.title}
                </h3>
                <p className="text-sm text-muted mb-3">{flow.problem}</p>
                <p className="text-[12px] text-accent leading-snug">{flow.stat}</p>
                <p className="text-[10px] text-muted mt-1">— {flow.statSource}</p>
              </motion.button>
            ))}
          </div>

          {/* Flow visualization */}
          <div className="bg-white rounded-2xl border border-foreground/[0.06] p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">{flows[activeFlow].title}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {flows[activeFlow].nodes.map((node, i) => (
                  <div key={node.id}>
                    {i > 0 && (
                      <div className="flex justify-center py-1">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 16 }}
                          transition={{ delay: i * 0.12, duration: 0.2 }}
                          className="w-[1px] bg-foreground/10"
                        />
                      </div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.3 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
                        node.type === "trigger" || node.type === "output"
                          ? "border-accent/15 bg-accent/[0.03]"
                          : "border-foreground/[0.06]"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${
                        node.type === "trigger" || node.type === "output" ? "bg-accent" : "bg-foreground/20"
                      }`} />
                      <span className="text-sm font-medium text-foreground">{node.label}</span>
                      {(node.type === "trigger" || node.type === "output") && (
                        <span className="ml-auto text-[9px] font-medium text-accent uppercase tracking-wider">
                          {node.type}
                        </span>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-foreground/[0.06] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs text-muted">
                Total time: <span className="font-semibold text-accent">&lt;30 seconds</span> — no human needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
