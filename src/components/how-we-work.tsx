"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- Step visuals ---

function DiscoverVisual() {
  const areas = [
    { label: "Website", icon: "monitor", color: "#FF5C35", status: "Scanning...", items: ["Load speed", "Mobile UX", "Conversion paths", "SEO structure"] },
    { label: "Content", icon: "pen", color: "#22C55E", status: "Scanning...", items: ["Blog cadence", "Social presence", "Email sequences", "Brand voice"] },
    { label: "Ads", icon: "chart", color: "#F59E0B", status: "Scanning...", items: ["ROAS tracking", "Audience targeting", "Ad creative", "Landing pages"] },
    { label: "Operations", icon: "bolt", color: "#8B5CF6", status: "Scanning...", items: ["CRM setup", "Lead routing", "Follow-up speed", "Tool stack"] },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {areas.map((area, i) => (
        <motion.div
          key={area.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          className="rounded-xl border p-4"
          style={{
            backgroundColor: `${area.color}08`,
            borderColor: `${area.color}20`,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: area.color }} />
            <span className="text-xs font-semibold text-foreground">{area.label}</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="ml-auto text-[9px] font-medium"
              style={{ color: area.color }}
            >
              {area.status}
            </motion.span>
          </div>
          <div className="space-y-1.5">
            {area.items.map((item, j) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + i * 0.1 + j * 0.06, duration: 0.3 }}
                className="flex items-center gap-2 text-[10px] text-muted"
              >
                <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: `${area.color}60` }} />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Connecting lines overlay */}
      <div className="col-span-2 flex justify-center -mt-1">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-2 text-[10px] text-muted bg-background rounded-lg border border-foreground/[0.06] px-3 py-1.5"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
          Mapping connections between all 4 areas...
        </motion.div>
      </div>
    </div>
  );
}

function DiagnoseVisual() {
  const bars = [
    { label: "Website", score: 85, color: "#FF5C35", status: "Strong" },
    { label: "Content", score: 25, color: "#22C55E", status: "Critical" },
    { label: "Automation", score: 40, color: "#8B5CF6", status: "Weak" },
    { label: "Growth", score: 70, color: "#F59E0B", status: "Moderate" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2.5 h-2.5 rounded-full bg-accent"
        />
        <span className="text-sm font-semibold text-foreground">Diagnosis Complete</span>
        <span className="ml-auto text-[10px] font-medium text-accent">2 critical issues</span>
      </div>

      {bars.map((bar, i) => (
        <motion.div
          key={bar.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 + i * 0.12 }}
        >
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: bar.color }} />
              <span className="text-sm font-medium text-foreground">{bar.label}</span>
            </div>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-md"
              style={{
                color: bar.score < 50 ? "#DC2626" : bar.score < 70 ? bar.color : "#16A34A",
                backgroundColor: bar.score < 50 ? "#FEE2E2" : bar.score < 70 ? `${bar.color}15` : "#DCFCE7",
              }}
            >
              {bar.status}
            </span>
          </div>
          <div className="h-3 bg-foreground/[0.04] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.score}%` }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: bar.score < 50 ? "#DC2626" : bar.color }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-muted">0</span>
            <span className="text-[9px] font-medium" style={{ color: bar.color }}>{bar.score}/100</span>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 1 }}
        className="bg-red-50 border border-red-200 rounded-xl p-3 mt-2"
      >
        <span className="text-xs font-semibold text-red-600 block mb-1">Priority fix: Content</span>
        <span className="text-[11px] text-red-500">No consistent posting. Zero email sequences. Competitors outranking on every keyword.</span>
      </motion.div>
    </div>
  );
}

function BuildVisual() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Website — browser frame populating */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-[#FF5C35]/20 bg-[#FF5C35]/[0.04] p-3"
      >
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C35]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C35]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C35]/30" />
          <span className="flex-1 h-1 rounded-full bg-[#FF5C35]/10 ml-1" />
        </div>
        <div className="space-y-1.5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.5 }}
            className="h-8 rounded bg-[#FF5C35]/10" />
          <div className="flex gap-1.5">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.7 }}
              className="h-1.5 rounded-full bg-foreground/[0.06] flex-1" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.8 }}
              className="h-1.5 rounded-full bg-foreground/[0.06] w-2/3" />
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.9 }}
            className="h-1 rounded-full bg-foreground/[0.04] w-4/5" />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 1.0 }}
            className="h-5 rounded bg-[#FF5C35]/20 w-1/3 mt-1" />
        </div>
        <span className="text-[9px] font-medium text-[#FF5C35] mt-2 block">Website</span>
      </motion.div>

      {/* SEO — search result climbing */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.35 }}
        className="rounded-xl border border-[#F59E0B]/20 bg-[#F59E0B]/[0.04] p-3"
      >
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3 h-3 text-[#F59E0B]/50" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <span className="flex-1 h-1 rounded-full bg-[#F59E0B]/10" />
        </div>
        <div className="space-y-1">
          {[1, 2, 3, 4, 5].map((pos) => (
            <motion.div
              key={pos}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 + pos * 0.12 }}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[8px] ${
                pos === 1 ? "bg-[#F59E0B]/15 border border-[#F59E0B]/20" : ""
              }`}
            >
              <span className={`font-bold ${pos === 1 ? "text-[#F59E0B]" : "text-muted"}`}>{pos}.</span>
              <span className={pos === 1 ? "font-semibold text-foreground" : "text-muted"}>
                {pos === 1 ? "Your Business" : `Competitor ${pos}`}
              </span>
              {pos === 1 && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 1.2 }}
                  className="ml-auto text-[#F59E0B] font-bold"
                >
                  #1
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
        <span className="text-[9px] font-medium text-[#F59E0B] mt-2 block">SEO</span>
      </motion.div>

      {/* Content — Instagram post style */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.5 }}
        className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/[0.04] p-3"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-[#22C55E]/20" />
          <div>
            <div className="h-1 w-10 rounded-full bg-foreground/[0.08]" />
            <div className="h-0.5 w-6 rounded-full bg-foreground/[0.04] mt-0.5" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.8 }}
          className="h-16 rounded-lg bg-[#22C55E]/10 mb-2 flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded bg-[#22C55E]/20" />
        </motion.div>
        <div className="flex gap-3 mb-1.5">
          {["heart", "comment", "share"].map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 1.0 + i * 0.1 }}
              className="w-3 h-3 rounded-full bg-foreground/[0.06]" />
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 1.2 }}
          className="space-y-0.5">
          <div className="h-0.5 w-full rounded-full bg-foreground/[0.06]" />
          <div className="h-0.5 w-3/4 rounded-full bg-foreground/[0.04]" />
        </motion.div>
        <span className="text-[9px] font-medium text-[#22C55E] mt-2 block">Content</span>
      </motion.div>

      {/* Automation — flow nodes */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.65 }}
        className="rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.04] p-3"
      >
        <div className="space-y-1">
          {[
            { label: "New lead", type: "trigger" },
            { label: "Qualify", type: "process" },
            { label: "Route", type: "process" },
            { label: "Notify", type: "output" },
          ].map((node, i) => (
            <div key={node.label}>
              {i > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                  className="flex justify-center"
                >
                  <div className="w-[1px] h-2 bg-[#8B5CF6]/30" />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[8px] ${
                  node.type === "trigger" || node.type === "output"
                    ? "bg-[#8B5CF6]/10 border border-[#8B5CF6]/15"
                    : ""
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${
                  node.type === "trigger" || node.type === "output" ? "bg-[#8B5CF6]" : "bg-foreground/[0.12]"
                }`} />
                <span className="text-foreground/70 font-medium">{node.label}</span>
              </motion.div>
            </div>
          ))}
        </div>
        <span className="text-[9px] font-medium text-[#8B5CF6] mt-2 block">Automation</span>
      </motion.div>
    </div>
  );
}

function GrowVisual() {
  const metrics = [
    { label: "Traffic", value: "2.4k", change: "+340%", color: "#FF5C35" },
    { label: "Leads", value: "86", change: "+520%", color: "#22C55E" },
    { label: "Revenue", value: "$14k", change: "+180%", color: "#F59E0B" },
  ];

  return (
    <div className="space-y-4">
      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-2">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="rounded-xl p-3 text-center"
            style={{ backgroundColor: `${m.color}08`, border: `1px solid ${m.color}20` }}
          >
            <span className="text-[10px] text-muted block mb-1">{m.label}</span>
            <span className="text-lg font-bold text-foreground block">{m.value}</span>
            <span className="text-[11px] font-semibold" style={{ color: m.color }}>{m.change}</span>
          </motion.div>
        ))}
      </div>

      {/* Levers / controls */}
      <div className="bg-foreground/[0.02] rounded-xl border border-foreground/[0.04] p-4 space-y-4">
        <span className="text-[10px] font-medium text-muted tracking-wider uppercase block">Active optimisations</span>

        {[
          { label: "SEO intensity", value: 75, color: "#FF5C35" },
          { label: "Content frequency", value: 90, color: "#22C55E" },
          { label: "Ad spend allocation", value: 60, color: "#F59E0B" },
          { label: "Email cadence", value: 45, color: "#8B5CF6" },
        ].map((lever, i) => (
          <div key={lever.label} className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[11px] text-foreground font-medium">{lever.label}</span>
              <span className="text-[10px] font-semibold" style={{ color: lever.color }}>{lever.value}%</span>
            </div>
            <div className="relative h-2 bg-foreground/[0.04] rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lever.value}%` }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: lever.color }}
              />
              {/* Knob */}
              <motion.div
                initial={{ left: 0 }}
                whileInView={{ left: `${lever.value}%` }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 shadow-sm"
                style={{ borderColor: lever.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Growth chart */}
      <div className="flex items-end gap-1 h-20">
        {[15, 20, 18, 30, 35, 40, 38, 50, 55, 65, 70, 85, 90, 95, 100].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
            className="flex-1 rounded-t"
            style={{
              backgroundColor: i >= 12 ? "#22C55E" : i >= 8 ? "#22C55E50" : "#22C55E25",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main component ---

const steps = [
  {
    number: "01",
    title: "Discover",
    detail: "Free",
    description: "We investigate your entire business — website, content, operations, growth channels. No assumptions. Just a clear picture.",
    Visual: DiscoverVisual,
    rotate: -1.5,
  },
  {
    number: "02",
    title: "Diagnose",
    detail: "1 week",
    description: "Clear breakdown of what's working, what's broken, and what's costing you most. Prioritised by impact.",
    Visual: DiagnoseVisual,
    rotate: 1.5,
  },
  {
    number: "03",
    title: "Build",
    detail: "Days, not months",
    description: "Our specialist teams build the fix. Websites, content systems, automations, growth campaigns — purpose-built.",
    Visual: BuildVisual,
    rotate: -1,
  },
  {
    number: "04",
    title: "Grow",
    detail: "Ongoing",
    description: "We stay. Monthly optimisation, continuous improvement, new opportunities as your business evolves.",
    Visual: GrowVisual,
    rotate: 1,
  },
];

type Step = typeof steps[0];

export default function HowWeWork() {
  return (
    <section className="py-[80px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            The process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em]"
          >
            Investigate. Fix.{" "}
            <span className="font-display italic font-normal text-accent">Grow.</span>
          </motion.h2>
        </div>

        <div className="space-y-28">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <StepBlock key={step.number} step={step} isLeft={isLeft} index={i} />
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted mt-24"
        >
          Month 1 is just the start. We build for longevity — not one-off delivery.
        </motion.p>
      </div>
    </section>
  );
}

function StepBlock({ step, isLeft, index }: { step: Step; isLeft: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      {/* Text side */}
      <div className={isLeft ? "lg:order-1" : "lg:order-2"}>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-14 h-14 rounded-2xl bg-white border border-foreground/[0.06] flex items-center justify-center text-lg font-bold text-accent shrink-0 shadow-sm">
            {step.number}
          </span>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
            <span className="text-[11px] font-medium text-accent tracking-wider uppercase">{step.detail}</span>
          </div>
        </div>
        <p className="text-muted text-lg leading-relaxed">{step.description}</p>
      </div>

      {/* Visual side — slight tilt */}
      <motion.div
        initial={{ rotate: step.rotate * 2 }}
        whileInView={{ rotate: step.rotate }}
        whileHover={{ rotate: 0, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className={`bg-white rounded-2xl border border-foreground/[0.06] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${isLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <step.Visual />
      </motion.div>
    </motion.div>
  );
}
