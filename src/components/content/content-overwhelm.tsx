"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// Helper to bias positions toward center (15%-85% range, clustered around 50%)
// Uses a gaussian-ish distribution
function cx(base: number) {
  // Compress toward center: remap 0-100 → 15-85 with center bias
  return `${15 + base * 0.7}%`;
}
function cy(base: number) {
  return `${10 + base * 0.8}%`;
}

const overwhelmItems = [
  // Wave 1 (0-2s) — light scatter, center-biased
  { text: "You need to post more", x: cx(25), y: cy(8), delay: 0.2, rotate: -3, size: "md" },
  { text: "Try using AI tools", x: cx(65), y: cy(5), delay: 0.5, rotate: 4, size: "md" },
  { text: "Consistency is key!", x: cx(42), y: cy(12), delay: 0.8, rotate: -1, size: "md" },
  { text: "Your competitors are posting daily", x: cx(78), y: cy(18), delay: 1.2, rotate: 5, size: "lg" },
  { text: "You're falling behind", x: cx(55), y: cy(6), delay: 1.5, rotate: -2, size: "md" },
  { text: "Content is king", x: cx(10), y: cy(15), delay: 1.8, rotate: 3, size: "md" },
  // Wave 2 (2-4s) — building density
  { text: "Why aren't you on TikTok?", x: cx(18), y: cy(22), delay: 2.1, rotate: -4, size: "lg" },
  { text: "Post 3x/day minimum", x: cx(58), y: cy(24), delay: 2.4, rotate: 2, size: "lg" },
  { text: "Email is dead (actually no)", x: cx(35), y: cy(28), delay: 2.7, rotate: -2, size: "lg" },
  { text: "You should blog weekly", x: cx(72), y: cy(20), delay: 3.0, rotate: 3, size: "md" },
  { text: "Where's your newsletter?", x: cx(48), y: cy(18), delay: 3.3, rotate: -3, size: "lg" },
  { text: "Algorithm changed again", x: cx(22), y: cy(32), delay: 3.6, rotate: 2, size: "md" },
  { text: "Optimize your posting times", x: cx(82), y: cy(30), delay: 3.9, rotate: -1, size: "md" },
  // Wave 3 (4-7s) — bigger, denser, center-heavy
  { text: "LinkedIn is the new gold mine", x: cx(15), y: cy(40), delay: 4.2, rotate: 4, size: "xl" },
  { text: "Reels get 2x more reach", x: cx(52), y: cy(35), delay: 4.5, rotate: -3, size: "lg" },
  { text: "You need a content calendar", x: cx(32), y: cy(42), delay: 4.8, rotate: 1, size: "xl" },
  { text: "SEO takes 6 months to work", x: cx(68), y: cy(38), delay: 5.1, rotate: -5, size: "lg" },
  { text: "Video or you're invisible", x: cx(20), y: cy(50), delay: 5.4, rotate: 3, size: "lg" },
  { text: "Your engagement is dropping", x: cx(60), y: cy(48), delay: 5.7, rotate: -1, size: "xl" },
  { text: "Repurpose or die", x: cx(45), y: cy(45), delay: 6.0, rotate: 2, size: "xl" },
  { text: "Go viral or go home", x: cx(75), y: cy(44), delay: 6.3, rotate: -4, size: "lg" },
  { text: "Your hook is weak", x: cx(38), y: cy(52), delay: 6.6, rotate: 3, size: "lg" },
  // Wave 4 (7-10s) — aggressive, filling center
  { text: "Start a podcast", x: cx(50), y: cy(55), delay: 7.0, rotate: -2, size: "xl" },
  { text: "Your brand voice is inconsistent", x: cx(25), y: cy(58), delay: 7.3, rotate: 4, size: "xl" },
  { text: "Threads? Bluesky? Mastodon?", x: cx(65), y: cy(56), delay: 7.6, rotate: -1, size: "lg" },
  { text: "Carousels outperform single posts", x: cx(80), y: cy(36), delay: 7.9, rotate: 2, size: "lg" },
  { text: "You need to repurpose everything", x: cx(12), y: cy(62), delay: 8.2, rotate: -4, size: "xl" },
  { text: "Be authentic but also strategic", x: cx(42), y: cy(62), delay: 8.5, rotate: 3, size: "lg" },
  { text: "Everyone's using AI now", x: cx(62), y: cy(64), delay: 8.8, rotate: -2, size: "lg" },
  { text: "Your captions need work", x: cx(30), y: cy(68), delay: 9.1, rotate: 1, size: "lg" },
  { text: "More behind-the-scenes content", x: cx(72), y: cy(60), delay: 9.4, rotate: -3, size: "lg" },
  // Wave 5 (10-13s) — overwhelming
  { text: "Hook them in 3 seconds", x: cx(28), y: cy(72), delay: 10.0, rotate: 3, size: "xl" },
  { text: "Post at 9am for best reach", x: cx(55), y: cy(74), delay: 10.3, rotate: -3, size: "lg" },
  { text: "Newsletter. Now.", x: cx(78), y: cy(12), delay: 10.6, rotate: 5, size: "xl" },
  { text: "Your content is too salesy", x: cx(18), y: cy(76), delay: 10.9, rotate: -2, size: "xl" },
  { text: "Engage with comments more", x: cx(48), y: cy(78), delay: 11.2, rotate: -4, size: "lg" },
  { text: "Have you tried Canva?", x: cx(22), y: cy(82), delay: 11.5, rotate: 3, size: "xl" },
  { text: "You need a social media manager", x: cx(62), y: cy(80), delay: 11.8, rotate: -3, size: "xl" },
  { text: "Short-form video is king", x: cx(40), y: cy(84), delay: 12.1, rotate: 2, size: "lg" },
  // Wave 6 (13-16s) — relentless
  { text: "Your audience wants stories", x: cx(85), y: cy(50), delay: 12.5, rotate: -4, size: "lg" },
  { text: "Batch your content creation", x: cx(30), y: cy(15), delay: 12.8, rotate: 1, size: "lg" },
  { text: "Trending audio = more views", x: cx(55), y: cy(14), delay: 13.1, rotate: -2, size: "lg" },
  { text: "Your competitors hired an agency", x: cx(15), y: cy(88), delay: 13.4, rotate: 4, size: "xl" },
  { text: "Pinterest drives website traffic", x: cx(70), y: cy(70), delay: 13.7, rotate: -1, size: "lg" },
  { text: "You need a content strategy", x: cx(45), y: cy(88), delay: 14.0, rotate: 3, size: "xl" },
  { text: "Hashtags are dead. No wait.", x: cx(60), y: cy(86), delay: 14.3, rotate: -3, size: "lg" },
  { text: "UGC converts better", x: cx(82), y: cy(25), delay: 14.6, rotate: 2, size: "lg" },
  { text: "Cross-post everything", x: cx(38), y: cy(32), delay: 14.9, rotate: -1, size: "lg" },
  // Wave 7 (16-19s) — final flood, every gap
  { text: "YouTube Shorts or you don't exist", x: cx(28), y: cy(48), delay: 15.2, rotate: -5, size: "xl" },
  { text: "Your bio needs work", x: cx(85), y: cy(68), delay: 15.5, rotate: 3, size: "lg" },
  { text: "Analytics say post on Tuesday", x: cx(12), y: cy(35), delay: 15.8, rotate: 4, size: "lg" },
  { text: "Build in public", x: cx(70), y: cy(52), delay: 16.1, rotate: -3, size: "xl" },
  { text: "Document, don't create", x: cx(50), y: cy(30), delay: 16.4, rotate: 2, size: "lg" },
  { text: "Your feed aesthetic is off", x: cx(22), y: cy(60), delay: 16.7, rotate: -2, size: "lg" },
  { text: "AI can write your captions", x: cx(58), y: cy(42), delay: 17.0, rotate: 4, size: "xl" },
  { text: "Growth hacking is dead", x: cx(35), y: cy(55), delay: 17.3, rotate: -1, size: "lg" },
  { text: "You're not posting enough", x: cx(75), y: cy(78), delay: 17.6, rotate: 3, size: "xl" },
  { text: "Schedule 30 days ahead", x: cx(42), y: cy(70), delay: 17.9, rotate: -4, size: "lg" },
  { text: "Personal brand > company page", x: cx(18), y: cy(45), delay: 18.2, rotate: 2, size: "xl" },
  { text: "Authenticity sells", x: cx(65), y: cy(28), delay: 18.5, rotate: -3, size: "lg" },
  { text: "Your CTAs are buried", x: cx(52), y: cy(65), delay: 18.8, rotate: 1, size: "lg" },
  { text: "Micro-content is the future", x: cx(80), y: cy(42), delay: 19.1, rotate: -2, size: "xl" },
];

// ── Mini content cards that rise from below after resolve ────────────

const miniCard = "rounded-lg border border-foreground/[0.06] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] overflow-hidden";

function MiniInsta() {
  return (
    <div className={miniCard}>
      <div className="flex items-center gap-1 px-2 py-1.5">
        <div className="w-3.5 h-3.5 rounded-full bg-[#E4405F]/12" />
        <div className="h-1 w-8 rounded-full bg-foreground/6" />
      </div>
      <div className="aspect-square bg-[#E4405F]/[0.04]" />
    </div>
  );
}

function MiniBrowser() {
  return (
    <div className={miniCard}>
      <div className="flex items-center gap-0.5 px-1.5 py-1 bg-foreground/[0.02] border-b border-foreground/[0.04]">
        <span className="w-1 h-1 rounded-full bg-[#FF5F57]" />
        <span className="w-1 h-1 rounded-full bg-[#FEBC2E]" />
        <span className="w-1 h-1 rounded-full bg-[#28C840]" />
      </div>
      <div className="p-2 space-y-1">
        <div className="h-1.5 w-3/4 rounded-full bg-foreground/6" />
        <div className="h-1 w-full rounded-full bg-foreground/3" />
        <div className="h-6 rounded bg-foreground/[0.02]" />
      </div>
    </div>
  );
}

function MiniLinkedIn() {
  return (
    <div className={miniCard}>
      <div className="p-2">
        <div className="flex items-center gap-1 mb-1.5">
          <div className="w-4 h-4 rounded bg-[#0A66C2]/10" />
          <div className="h-1 w-10 rounded-full bg-foreground/6" />
        </div>
        <div className="space-y-0.5">
          <div className="h-1 w-full rounded-full bg-foreground/3" />
          <div className="h-1 w-2/3 rounded-full bg-foreground/3" />
        </div>
      </div>
    </div>
  );
}

function MiniEmail() {
  return (
    <div className={miniCard}>
      <div className="px-2 py-1 bg-foreground/[0.02] border-b border-foreground/[0.04]">
        <div className="h-1 w-6 rounded-full bg-[#6366F1]/15" />
      </div>
      <div className="p-2 space-y-0.5">
        <div className="h-1 w-full rounded-full bg-foreground/3" />
        <div className="h-1 w-3/4 rounded-full bg-foreground/3" />
        <div className="h-3.5 w-10 rounded bg-[#6366F1]/8 mt-1" />
      </div>
    </div>
  );
}

function MiniTweet() {
  return (
    <div className={miniCard}>
      <div className="p-2">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3.5 h-3.5 rounded-full bg-foreground/[0.04]" />
          <div className="h-1 w-8 rounded-full bg-foreground/6" />
        </div>
        <div className="h-1 w-full rounded-full bg-foreground/3" />
      </div>
    </div>
  );
}

function MiniVideo() {
  return (
    <div className={miniCard}>
      <div className="aspect-video bg-foreground/[0.02] flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-foreground/[0.05] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent border-l-[4px] border-l-foreground/12 ml-0.5" />
        </div>
      </div>
    </div>
  );
}

function MiniCarousel() {
  return (
    <div className={miniCard}>
      <div className="aspect-[4/3] bg-[#E4405F]/[0.03] flex items-end justify-center pb-1.5">
        <div className="flex gap-0.5">
          <div className="w-1 h-1 rounded-full bg-[#E4405F]/25" />
          <div className="w-1 h-1 rounded-full bg-[#E4405F]/10" />
          <div className="w-1 h-1 rounded-full bg-[#E4405F]/10" />
        </div>
      </div>
    </div>
  );
}

const risingCards = [
  { id: "r1", left: "3%",  bottom: "-10px", width: 110, rotate: -2.5, opacity: 0.7, Component: MiniInsta },
  { id: "r2", left: "15%", bottom: "20px",  width: 130, rotate: 3,    opacity: 0.5, Component: MiniBrowser },
  { id: "r3", left: "28%", bottom: "-5px",  width: 100, rotate: -1.5, opacity: 0.65, Component: MiniTweet },
  { id: "r4", left: "40%", bottom: "15px",  width: 115, rotate: 2,    opacity: 0.55, Component: MiniLinkedIn },
  { id: "r5", left: "53%", bottom: "-15px", width: 95,  rotate: -3,   opacity: 0.7, Component: MiniCarousel },
  { id: "r6", left: "64%", bottom: "10px",  width: 120, rotate: 1.5,  opacity: 0.5, Component: MiniEmail },
  { id: "r7", left: "76%", bottom: "0px",   width: 105, rotate: -2,   opacity: 0.6, Component: MiniVideo },
  { id: "r8", left: "88%", bottom: "25px",  width: 100, rotate: 3.5,  opacity: 0.55, Component: MiniInsta },
];

const sizeClasses = {
  sm: "text-[13px] px-4 py-2",
  md: "text-[15px] px-5 py-2.5",
  lg: "text-[17px] px-6 py-3 font-semibold",
  xl: "text-[19px] px-7 py-3.5 font-semibold",
};

// Compute a "push to edge" position: items fly to the nearest edge
function getExitPosition(xPercent: number, yPercent: number) {
  // Parse the percent values
  const x = parseFloat(xPercent as unknown as string);
  const y = parseFloat(yPercent as unknown as string);
  const centerX = 50;
  const centerY = 50;

  // Direction away from center
  const dx = x - centerX;
  const dy = y - centerY;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;

  // Normalize and push far out (150% of viewport)
  const pushX = (dx / dist) * 120;
  const pushY = (dy / dist) * 120;

  return { x: `${pushX}vw`, y: `${pushY}vh` };
}

export default function ContentOverwhelm() {
  const [resolved, setResolved] = useState(false);
  const [showResolution, setShowResolution] = useState(false);
  const controls = useAnimationControls();

  const handleResolve = useCallback(() => {
    if (resolved) return;
    setResolved(true);
    controls.start("exit");
    // Delay showing resolution text until items have scattered
    setTimeout(() => setShowResolution(true), 800);
  }, [resolved, controls]);

  // Start enter animation on mount
  useEffect(() => {
    controls.start("enter");
  }, [controls]);

  useEffect(() => {
    if (resolved) return;
    const timer = setTimeout(handleResolve, 22000);
    return () => clearTimeout(timer);
  }, [resolved, handleResolve]);

  return (
    <section className="relative pt-[160px] pb-[120px] px-6 overflow-hidden min-h-[100vh] flex items-center">
      {/* Flooding overwhelm elements — above text layer, clipped to section */}
      <div className="absolute inset-x-0 top-[100px] bottom-0 pointer-events-none overflow-hidden z-20">
        {overwhelmItems.map((item, i) => {
          const exit = getExitPosition(parseFloat(item.x), parseFloat(item.y));
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
              animate={controls}
              variants={{
                enter: {
                  opacity: [0, 0.85, 0.65, 0.85],
                  scale: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.5, delay: item.delay },
                },
                exit: {
                  opacity: [null, 0.9, 0],
                  scale: 0.6,
                  x: exit.x,
                  y: exit.y,
                  transition: {
                    duration: 0.7,
                    delay: i * 0.01,
                    ease: [0.32, 0, 0.67, 0],
                  },
                },
              }}
              className="absolute"
              style={{ left: item.x, top: item.y, rotate: `${item.rotate}deg` }}
            >
              <div className={`bg-white border border-foreground/[0.12] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] whitespace-nowrap ${sizeClasses[item.size as keyof typeof sizeClasses]}`}>
                <span className="text-foreground/80 font-medium">{item.text}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10 text-center">
        <motion.div
          animate={resolved ? { opacity: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={showResolution ? "hidden" : ""}
        >
          <h1 className="font-sans font-bold text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-[-0.03em] text-foreground mb-6">
            Everyone&apos;s telling you to{" "}
            <span className="font-display italic font-normal text-accent">post more.</span>
          </h1>
          <p className="text-xl text-muted max-w-[500px] mx-auto leading-relaxed mb-8">
            More platforms. More formats. More often. The pressure to produce content never stops — but your time and energy do.
          </p>
          <button
            onClick={handleResolve}
            className="h-13 px-10 rounded-lg bg-accent text-white text-lg font-medium hover:shadow-[0_4px_24px_rgba(34,197,94,0.35)] transition-shadow relative z-30 pointer-events-auto"
          >
            Make it stop
          </button>
        </motion.div>

        {/* Resolution */}
        {showResolution && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <svg viewBox="0 0 12 12" className="w-4 h-4 text-accent" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
            </div>
            <h1 className="font-sans font-bold text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-[-0.03em] text-foreground mb-6">
              What if content just{" "}
              <span className="font-display italic font-normal text-accent">happened?</span>
            </h1>
            <p className="text-xl text-muted max-w-[500px] mx-auto leading-relaxed">
              Strategy, creation, distribution — all handled. You approve on Monday, it publishes all week. Across every platform. In your voice.
            </p>
          </motion.div>
        )}
      </div>

      {/* Rising content cards after resolve — float up from below the fold */}
      {showResolution && (
        <div className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none overflow-hidden z-[1]">
          {risingCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: card.opacity, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute"
              style={{
                left: card.left,
                bottom: card.bottom,
                width: card.width,
                rotate: `${card.rotate}deg`,
              }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <card.Component />
              </motion.div>
            </motion.div>
          ))}
          {/* Fade out at bottom edge */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}
    </section>
  );
}
