"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const platforms = [
  {
    name: "LinkedIn",
    icon: "in",
    color: "#0A66C2",
    type: "Professional reach",
    example: "Thought leadership post about industry trends. 3,200 impressions → 47 profile visits → 8 website clicks.",
  },
  {
    name: "Instagram",
    icon: "ig",
    color: "#E4405F",
    type: "Visual storytelling",
    example: "Behind-the-scenes carousel of a client project. 1,800 reach → 94 saves → 12 DM conversations.",
  },
  {
    name: "Blog / SEO",
    icon: "www",
    color: "#22C55E",
    type: "Organic discovery",
    example: "\"5 signs your website is losing you money\" — ranks page 1 → 340 monthly visits → 23 leads/month.",
  },
  {
    name: "Email",
    icon: "@",
    color: "#6366F1",
    type: "Nurture & convert",
    example: "Weekly newsletter to 2,100 subscribers. 38% open rate → 12% click rate → 3 booked calls/week.",
  },
  {
    name: "X / Twitter",
    icon: "X",
    color: "#1DA1F2",
    type: "Real-time engagement",
    example: "Daily threads on business tips. 500 impressions/day → growing follower base → DM pipeline.",
  },
];

// Platform-specific animated mockup
function PlatformMockup({ platform }: { platform: typeof platforms[number] }) {
  if (platform.name === "Instagram") {
    return (
      <div className="mx-auto w-[220px]">
        <div className="rounded-[28px] border-[3px] border-foreground/10 bg-white overflow-hidden shadow-lg">
          <div className="h-6 bg-foreground/[0.03] flex items-center justify-center">
            <div className="w-12 h-1.5 rounded-full bg-foreground/10" />
          </div>
          <div className="px-3 py-2 flex items-center gap-2 border-b border-foreground/[0.06]">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${platform.color}20` }} />
            <div className="h-1.5 w-16 rounded-full bg-foreground/10" />
          </div>
          {/* Animated scroll through carousel */}
          <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: `${platform.color}08` }}>
            <motion.div
              animate={{ x: [0, -220, -440, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.6, 1] }}
              className="flex absolute inset-y-0"
            >
              {[1, 2, 3].map((slide) => (
                <div key={slide} className="w-[220px] h-full flex flex-col items-center justify-center gap-2 p-6 shrink-0">
                  <motion.div className="w-14 h-14 rounded-xl" style={{ backgroundColor: `${platform.color}20` }}
                    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: slide * 0.3 }} />
                  <div className="w-16 h-2 rounded-full bg-foreground/10" />
                  <div className="w-20 h-2 rounded-full bg-foreground/8" />
                </div>
              ))}
            </motion.div>
            {/* Carousel dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {[0, 1, 2].map((dot) => (
                <motion.div key={dot} animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, times: [dot * 0.3, dot * 0.3 + 0.1, dot * 0.3 + 0.3] }}
                  className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.color }} />
              ))}
            </div>
          </div>
          {/* Animated like */}
          <div className="px-3 py-2 flex gap-3">
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.4, delay: 2, repeat: Infinity, repeatDelay: 5 }}
              className="w-5 h-5 rounded-sm flex items-center justify-center" style={{ color: platform.color }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            </motion.div>
            <div className="w-5 h-5 rounded-sm bg-foreground/10" />
            <div className="w-5 h-5 rounded-sm bg-foreground/10" />
          </div>
          <div className="px-3 pb-3">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 rounded-full bg-foreground/8 mb-1" />
            <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 0.8, delay: 0.8 }}
              className="h-1.5 rounded-full bg-foreground/6" />
          </div>
        </div>
      </div>
    );
  }

  if (platform.name === "Email") {
    return (
      <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden shadow-lg">
        <div className="px-4 py-2.5 bg-foreground/[0.02] border-b border-foreground/[0.06] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-foreground/10" />
          <span className="text-[8px] text-muted font-medium">Inbox</span>
          <div className="ml-auto text-[7px] text-muted">4 unread</div>
        </div>
        {/* Inbox scroll — highlighted email pulses then "opens" */}
        {[
          { from: "Newsletter", unread: false },
          { from: "Team Update", unread: false },
          { from: "Your Brand", unread: true },
          { from: "Promotions", unread: false },
        ].map((email, i) => (
          <motion.div key={i}
            animate={email.unread ? {
              backgroundColor: ["transparent", `${platform.color}08`, `${platform.color}12`, `${platform.color}08`],
            } : {}}
            transition={email.unread ? { duration: 2, delay: 1, repeat: Infinity, repeatDelay: 4 } : {}}
            className="px-4 py-2.5 border-b border-foreground/[0.04] flex items-center gap-3 relative"
          >
            {email.unread && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.color }} />
            )}
            <div className={`w-6 h-6 rounded-full shrink-0 ${email.unread ? "" : "bg-foreground/5"}`}
              style={email.unread ? { backgroundColor: `${platform.color}20` } : {}} />
            <div className="flex-1">
              <div className={`text-[9px] mb-0.5 ${email.unread ? "font-bold text-foreground" : "text-muted"}`}>{email.from}</div>
              <div className="h-1.5 w-full rounded-full bg-foreground/5" />
            </div>
          </motion.div>
        ))}
        {/* Email opens */}
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="overflow-hidden border-t-2" style={{ borderColor: platform.color }}>
          <div className="px-4 py-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${platform.color}20` }} />
              <div>
                <div className="text-[9px] font-bold text-foreground">Your Brand</div>
                <div className="text-[7px] text-muted">to: customer@email.com</div>
              </div>
            </div>
            <div className="space-y-1.5 mb-3">
              <div className="h-1.5 w-full rounded-full bg-foreground/6" />
              <div className="h-1.5 w-4/5 rounded-full bg-foreground/6" />
            </div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 4, type: "spring" }}
              className="h-7 w-24 rounded-md flex items-center justify-center cursor-pointer" style={{ backgroundColor: platform.color }}>
              <span className="text-white text-[8px] font-bold">Book a Call →</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (platform.name === "Blog / SEO") {
    return (
      <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden shadow-lg">
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-foreground/[0.02] border-b border-foreground/[0.06]">
          <span className="w-2 h-2 rounded-full bg-foreground/10" />
          <span className="w-2 h-2 rounded-full bg-foreground/10" />
          <span className="w-2 h-2 rounded-full bg-foreground/10" />
          <motion.div className="ml-2 flex-1 h-5 rounded bg-foreground/[0.04] max-w-[200px] flex items-center px-2 overflow-hidden">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-[7px] text-muted whitespace-nowrap">google.com → yourbusiness.com/blog</motion.span>
          </motion.div>
        </div>
        <div className="p-5">
          {/* Article title appears */}
          <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 0.8, delay: 0.8 }}
            className="h-3.5 rounded-full mb-3 overflow-hidden" style={{ backgroundColor: `${platform.color}30` }} />
          {/* Content loads in */}
          {[1, 0.9, 0.6].map((w, i) => (
            <motion.div key={i} initial={{ width: 0, opacity: 0 }} animate={{ width: `${w * 100}%`, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
              className="h-1.5 rounded-full bg-foreground/6 mb-1.5" />
          ))}
          {/* Image loads */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.4 }}
            className="h-20 rounded-lg my-4 relative overflow-hidden" style={{ backgroundColor: `${platform.color}10` }}>
            <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 3, repeat: Infinity, repeatDelay: 2 }}
            className="flex justify-center pt-2">
            <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
    );
  }

  if (platform.name === "LinkedIn") {
    return (
      <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden shadow-lg">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: `${platform.color}15` }} />
            <div>
              <div className="h-2 w-24 rounded-full bg-foreground/12 mb-1" />
              <div className="h-1.5 w-16 rounded-full bg-foreground/6" />
            </div>
          </div>
          {/* Text appears line by line */}
          {[1, 1, 0.6].map((w, i) => (
            <motion.div key={i} initial={{ width: 0, opacity: 0 }} animate={{ width: `${w * 100}%`, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
              className="h-1.5 rounded-full bg-foreground/8 mb-1.5" />
          ))}
          {/* Image card loads */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="h-28 rounded-lg mt-3 mb-3 relative overflow-hidden" style={{ backgroundColor: `${platform.color}08` }}>
            <div className="h-full flex items-center justify-center">
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 rounded-xl" style={{ backgroundColor: `${platform.color}20` }} />
            </div>
          </motion.div>
          {/* Engagement animates */}
          <div className="flex items-center justify-between pt-3 border-t border-foreground/[0.06]">
            {[
              { label: "Like", delay: 2 },
              { label: "Comment", delay: 2.5 },
              { label: "Repost", delay: 3 },
              { label: "Send", delay: 3.5 },
            ].map((action) => (
              <motion.div key={action.label} initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}
                transition={{ delay: action.delay, duration: 0.3 }}
                className="flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-foreground/5" />
                <span className="text-[9px] text-muted">{action.label}</span>
              </motion.div>
            ))}
          </div>
          {/* Like count animates up */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            className="mt-2 text-[9px] text-muted">
            <motion.span animate={{ opacity: [0, 1] }} transition={{ delay: 3 }}>47 reactions · 12 comments</motion.span>
          </motion.div>
        </div>
      </div>
    );
  }

  // X/Twitter — thread builds
  return (
    <div className="rounded-xl border border-foreground/[0.08] bg-white overflow-hidden shadow-lg">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full shrink-0" style={{ backgroundColor: `${platform.color}15` }} />
            <motion.div initial={{ height: 0 }} animate={{ height: 40 }} transition={{ delay: 2, duration: 0.5 }}
              className="w-0.5 mt-1 rounded-full" style={{ backgroundColor: `${platform.color}20` }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-2 w-20 rounded-full bg-foreground/12" />
              <div className="h-1.5 w-12 rounded-full bg-foreground/6" />
            </div>
            {[1, 1, 0.7].map((w, i) => (
              <motion.div key={i} initial={{ width: 0, opacity: 0 }} animate={{ width: `${w * 100}%`, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className="h-1.5 rounded-full bg-foreground/8 mb-1.5" />
            ))}
            {/* Engagement counters animate */}
            <div className="flex gap-6 pt-3">
              {[
                { icon: "💬", count: 12, delay: 1.5 },
                { icon: "🔁", count: 8, delay: 1.8 },
                { icon: "❤️", count: 47, delay: 2.1 },
              ].map((stat) => (
                <motion.span key={stat.icon} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: stat.delay }} className="text-[10px] text-muted">
                  {stat.icon} {stat.count}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        {/* Reply/thread appears */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }} className="flex items-start gap-3 mt-2 pt-2">
          <div className="w-9 h-9 rounded-full shrink-0" style={{ backgroundColor: `${platform.color}15` }} />
          <div className="flex-1 pt-1">
            <div className="h-1.5 w-full rounded-full bg-foreground/6 mb-1.5" />
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/6" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PlatformEcosystem() {
  const [activePlatform, setActivePlatform] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          The ecosystem
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[650px] mb-6"
        >
          One piece of content.{" "}
          <span className="font-display italic font-normal text-accent">
            Five platforms.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg leading-relaxed max-w-[520px] mb-12"
        >
          Each platform has different rules, different audiences, different
          formats. We create native content for each — not the same post
          copy-pasted everywhere.
        </motion.p>

        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Platform selector — left */}
          <div className="space-y-2">
            {platforms.map((platform, i) => (
              <motion.button
                key={platform.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08 }}
                onClick={() => {
                  setActivePlatform(i);
                  setAutoPlay(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                  activePlatform === i
                    ? "bg-background border-accent/20 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                    : "bg-background/50 border-foreground/[0.04] hover:border-foreground/[0.08]"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`font-semibold text-sm transition-colors ${
                      activePlatform === i ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {platform.name}
                  </div>
                  <div className="text-[11px] text-muted">{platform.type}</div>
                </div>
              </motion.button>
            ))}

            {/* Connection note */}
            <div className="pt-4 mt-4 border-t border-foreground/[0.06]">
              <div className="flex -space-x-1.5 mb-2">
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className="w-4 h-4 rounded-full border-2 border-surface"
                    style={{ backgroundColor: p.color }}
                  />
                ))}
              </div>
              <p className="text-[11px] text-muted leading-relaxed">
                A viewer on LinkedIn becomes a follower on Instagram, a
                newsletter subscriber, and eventually a client.
              </p>
            </div>
          </div>

          {/* Platform mockup + example — right */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Visual mockup */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <PlatformMockup platform={platforms[activePlatform]} />
              </motion.div>
            </AnimatePresence>

            {/* Example + metrics */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                    style={{ backgroundColor: platforms[activePlatform].color }}
                  >
                    {platforms[activePlatform].icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {platforms[activePlatform].name}
                    </div>
                    <div className="text-[11px] text-muted">
                      {platforms[activePlatform].type}
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-xl px-4 py-3 mb-4"
                  style={{ backgroundColor: `${platforms[activePlatform].color}08` }}
                >
                  <span
                    className="text-[10px] font-medium tracking-wider uppercase block mb-1.5"
                    style={{ color: platforms[activePlatform].color }}
                  >
                    Real example
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">
                    {platforms[activePlatform].example}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  Every platform feeds the funnel differently. We create native
                  content that works where your audience already is — then
                  connect it all back to your website.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
