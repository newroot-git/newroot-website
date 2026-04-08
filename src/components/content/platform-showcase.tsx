"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const platforms = [
  {
    name: "LinkedIn",
    color: "#0A66C2",
    format: "Thought leadership post with carousel",
    description: "Your blog post becomes a punchy LinkedIn post with a hook, key takeaways, and a call to engage. Designed for decision-makers scrolling during their morning coffee.",
    metrics: "3,200 impressions → 47 profile visits → 8 website clicks",
  },
  {
    name: "Instagram",
    color: "#E4405F",
    format: "Visual carousel + story sequence",
    description: "The same content becomes a scroll-stopping carousel with branded visuals, plus a story sequence that drives engagement and saves.",
    metrics: "1,800 reach → 94 saves → 12 DM conversations",
  },
  {
    name: "Blog",
    color: "#22C55E",
    format: "SEO-optimised long-form article",
    description: "The full piece — optimised for Google, structured for readability, designed to rank and drive organic traffic for months.",
    metrics: "Ranks page 1 → 340 monthly visits → 23 leads/month",
  },
  {
    name: "Email",
    color: "#6366F1",
    format: "Newsletter with key insights",
    description: "The core ideas distilled into a scannable email that lands in your subscriber's inbox with a clear CTA. High open rates, high click-throughs.",
    metrics: "38% open rate → 12% click rate → 3 booked calls/week",
  },
  {
    name: "X",
    color: "#1DA1F2",
    format: "Thread + standalone tweets",
    description: "A punchy thread that breaks down the topic in bite-sized takes. Plus standalone tweets that pull from key quotes and data points.",
    metrics: "500 impressions/day → growing follower base → DM pipeline",
  },
];

// Content preview that transforms per platform
function ContentPreview({ platform }: { platform: typeof platforms[number] }) {
  const blockStyle = { backgroundColor: `${platform.color}15` };
  const accentStyle = { backgroundColor: `${platform.color}30` };
  const solidStyle = { backgroundColor: platform.color };

  if (platform.name === "Instagram") {
    return (
      <div className="flex flex-col items-center">
        {/* Phone frame */}
        <div className="w-[200px] rounded-[24px] border-[3px] border-foreground/10 bg-white overflow-hidden">
          <div className="h-5 bg-foreground/[0.02] flex items-center justify-center">
            <div className="w-10 h-1 rounded-full bg-foreground/10" />
          </div>
          <div className="aspect-square relative" style={blockStyle}>
            <motion.div animate={{ x: [0, -200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex absolute inset-y-0">
              {[1, 2].map((s) => (
                <div key={s} className="w-[200px] h-full flex items-center justify-center shrink-0 p-6">
                  <motion.div className="w-12 h-12 rounded-xl" style={accentStyle} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: s * 0.3 }} />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="px-3 py-2 space-y-1">
            <div className="h-1.5 w-full rounded-full bg-foreground/6" />
            <div className="h-1.5 w-2/3 rounded-full bg-foreground/6" />
          </div>
        </div>
      </div>
    );
  }

  if (platform.name === "Email") {
    return (
      <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden">
        <div className="px-4 py-2 bg-foreground/[0.02] border-b border-foreground/[0.06] text-[8px] text-muted font-medium">Inbox</div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="px-4 py-3 border-b-2" style={{ borderColor: platform.color }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full" style={blockStyle} />
            <div className="text-[9px] font-bold text-foreground">Your Brand Newsletter</div>
          </div>
          <div className="space-y-1 mb-2">
            <div className="h-1.5 w-full rounded-full bg-foreground/6" />
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/6" />
          </div>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
            className="h-6 w-20 rounded flex items-center justify-center" style={solidStyle}>
            <span className="text-white text-[7px] font-bold">Read More</span>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (platform.name === "Blog") {
    return (
      <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground/[0.02] border-b border-foreground/[0.06]">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
          <div className="ml-1 h-4 flex-1 rounded bg-foreground/[0.03] max-w-[150px] flex items-center px-1.5">
            <span className="text-[6px] text-muted">yourbusiness.com/blog</span>
          </div>
        </div>
        <div className="p-4">
          <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 0.8 }}
            className="h-2.5 rounded-full mb-2" style={accentStyle} />
          <div className="space-y-1 mb-3">
            <div className="h-1.5 w-full rounded-full bg-foreground/5" />
            <div className="h-1.5 w-4/5 rounded-full bg-foreground/5" />
          </div>
          <div className="h-16 rounded-lg" style={blockStyle} />
        </div>
      </div>
    );
  }

  if (platform.name === "LinkedIn") {
    return (
      <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full" style={blockStyle} />
          <div>
            <div className="h-1.5 w-20 rounded-full bg-foreground/10 mb-1" />
            <div className="h-1 w-14 rounded-full bg-foreground/5" />
          </div>
        </div>
        {[1, 1, 0.6].map((w, i) => (
          <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${w * 100}%` }} transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
            className="h-1.5 rounded-full bg-foreground/6 mb-1.5" />
        ))}
        <div className="h-20 rounded-lg mt-3 mb-3" style={blockStyle} />
        <div className="flex gap-4 pt-2 border-t border-foreground/[0.06]">
          {["Like", "Comment", "Repost"].map((a) => (
            <span key={a} className="text-[8px] text-muted">{a}</span>
          ))}
        </div>
      </div>
    );
  }

  // X/Twitter
  return (
    <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden p-4">
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-full shrink-0" style={blockStyle} />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-1.5 w-16 rounded-full bg-foreground/10" />
            <div className="h-1 w-10 rounded-full bg-foreground/5" />
          </div>
          {[1, 1, 0.7].map((w, i) => (
            <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${w * 100}%` }} transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              className="h-1.5 rounded-full bg-foreground/6 mb-1.5" />
          ))}
          <div className="flex gap-4 pt-2 text-[8px] text-muted">
            <span>12 replies</span><span>8 reposts</span><span>47 likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — visual block with tabs */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
            >
              One piece, five formats
            </motion.span>

            {/* Platform tabs */}
            <div className="flex gap-1 mb-6 overflow-x-auto">
              {platforms.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    active === i
                      ? "text-white"
                      : "text-muted bg-background border border-foreground/[0.06] hover:text-foreground"
                  }`}
                  style={active === i ? { backgroundColor: p.color } : undefined}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Preview window */}
            <div className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[260px] mx-auto"
                >
                  <ContentPreview platform={platforms[active]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Format label */}
            <motion.p
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-muted mt-3 text-center"
            >
              Same content → {platforms[active].format}
            </motion.p>
          </div>

          {/* Right — text */}
          <div className="lg:pt-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-6"
            >
              One piece of content.{" "}
              <span className="font-display italic font-normal text-accent">
                Five platforms.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg leading-relaxed mb-8"
            >
              Each platform has different rules, different audiences, different formats. We create native content for each — not the same post copy-pasted everywhere.
            </motion.p>

            {/* Active platform details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-xl px-5 py-4 mb-4" style={{ backgroundColor: `${platforms[active].color}08` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: platforms[active].color }} />
                    <span className="text-sm font-semibold text-foreground">{platforms[active].name}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{platforms[active].description}</p>
                </div>
                <div className="rounded-xl px-5 py-3 bg-foreground/[0.03] border border-foreground/[0.04]">
                  <span className="text-[10px] font-medium text-muted tracking-wider uppercase block mb-1">Real metrics</span>
                  <p className="text-sm font-medium text-foreground">{platforms[active].metrics}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xs text-muted mt-6 flex items-center gap-2"
            >
              <span className="flex -space-x-1">
                {platforms.map((p) => (
                  <span key={p.name} className="w-3 h-3 rounded-full border border-surface" style={{ backgroundColor: p.color }} />
                ))}
              </span>
              A viewer here becomes a follower there, a subscriber, and eventually a client.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
