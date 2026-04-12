"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cardStyle =
  "rounded-xl border border-foreground/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden";

// ── Mini card components ────────────────────────────────────────────

function BrowserCard() {
  return (
    <div className={cardStyle}>
      <div className="flex items-center gap-1 px-2 py-1.5 bg-foreground/[0.02] border-b border-foreground/[0.06]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        <div className="ml-1 h-3 flex-1 rounded bg-foreground/[0.04]" />
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="h-2 w-3/4 rounded-full bg-foreground/8" />
        <div className="h-1.5 w-full rounded-full bg-foreground/4" />
        <div className="h-10 rounded bg-foreground/[0.03]" />
      </div>
    </div>
  );
}

function InstaCard() {
  return (
    <div className={cardStyle}>
      <div className="flex items-center gap-1.5 px-2 py-1.5">
        <div className="w-4 h-4 rounded-full bg-[#E4405F]/15" />
        <div className="h-1.5 w-10 rounded-full bg-foreground/8" />
      </div>
      <div className="aspect-square bg-[#E4405F]/[0.06]" />
      <div className="px-2 py-1.5">
        <div className="h-1 w-10 rounded-full bg-foreground/6" />
      </div>
    </div>
  );
}

function LinkedInCard() {
  return (
    <div className={cardStyle}>
      <div className="p-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-5 h-5 rounded bg-[#0A66C2]/12" />
          <div className="h-1.5 w-12 rounded-full bg-foreground/8" />
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded-full bg-foreground/4" />
          <div className="h-1.5 w-2/3 rounded-full bg-foreground/4" />
        </div>
        <div className="h-8 rounded bg-[#0A66C2]/[0.05] mt-2" />
      </div>
    </div>
  );
}

function EmailCard() {
  return (
    <div className={cardStyle}>
      <div className="px-2 py-1.5 bg-foreground/[0.02] border-b border-foreground/[0.06]">
        <span className="text-[6px] text-foreground/30 font-medium">Inbox</span>
      </div>
      <div className="p-2 space-y-1">
        <div className="h-1.5 w-3/4 rounded-full bg-foreground/6" />
        <div className="h-1 w-full rounded-full bg-foreground/3" />
        <div className="h-1 w-full rounded-full bg-foreground/3" />
      </div>
    </div>
  );
}

function BlogCard() {
  return (
    <div className={cardStyle}>
      <div className="flex items-center gap-1 px-2 py-1.5 bg-foreground/[0.02] border-b border-foreground/[0.06]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="h-2 w-2/3 rounded-full bg-[#22C55E]/15" />
        <div className="h-1 w-full rounded-full bg-foreground/3" />
        <div className="h-6 rounded bg-[#22C55E]/[0.04] mt-1" />
      </div>
    </div>
  );
}

function ThreadCard() {
  return (
    <div className={cardStyle}>
      <div className="p-2">
        <div className="flex items-center gap-1 mb-1.5">
          <div className="w-4 h-4 rounded-full bg-foreground/[0.06]" />
          <div className="h-1.5 w-10 rounded-full bg-foreground/8" />
        </div>
        <div className="space-y-1">
          <div className="h-1 w-full rounded-full bg-foreground/4" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/4" />
        </div>
      </div>
    </div>
  );
}

function CarouselCard() {
  return (
    <div className={cardStyle}>
      <div className="aspect-[4/3] bg-[#E4405F]/[0.04] flex items-center justify-center">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-[#E4405F]/30" />
          <div className="w-1 h-1 rounded-full bg-[#E4405F]/15" />
          <div className="w-1 h-1 rounded-full bg-[#E4405F]/15" />
        </div>
      </div>
      <div className="px-2 py-1.5">
        <div className="h-1 w-2/3 rounded-full bg-foreground/5" />
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className={cardStyle}>
      <div className="aspect-video bg-foreground/[0.03] flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-foreground/[0.06] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-foreground/15 ml-0.5" />
        </div>
      </div>
    </div>
  );
}

function NewsletterCard() {
  return (
    <div className={cardStyle}>
      <div className="p-2">
        <div className="h-1.5 w-2/3 rounded-full bg-[#6366F1]/10 mb-1.5" />
        <div className="space-y-1">
          <div className="h-1 w-full rounded-full bg-foreground/3" />
          <div className="h-1 w-full rounded-full bg-foreground/3" />
        </div>
        <div className="h-4 w-12 rounded bg-[#6366F1]/8 mt-1.5" />
      </div>
    </div>
  );
}

function TweetCard() {
  return (
    <div className={cardStyle}>
      <div className="p-2">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-4 h-4 rounded-full bg-[#1DA1F2]/10" />
          <div className="h-1.5 w-10 rounded-full bg-foreground/8" />
        </div>
        <div className="space-y-0.5">
          <div className="h-1 w-full rounded-full bg-foreground/4" />
          <div className="h-1 w-3/5 rounded-full bg-foreground/4" />
        </div>
      </div>
    </div>
  );
}

function StoryCard() {
  return (
    <div className={`${cardStyle} !rounded-2xl`}>
      <div className="aspect-[9/16] bg-gradient-to-b from-[#E4405F]/[0.06] to-[#E4405F]/[0.02] flex flex-col items-center justify-end p-2">
        <div className="h-1 w-2/3 rounded-full bg-foreground/6" />
      </div>
    </div>
  );
}

// ── Card layout — dense, scattered across full width ────────────────

interface CardDef {
  id: string;
  left: string;
  top: number;
  width: number;
  rotate: number;
  speed: number;
  z: number;
  Component: () => React.ReactNode;
}

const cards: CardDef[] = [
  // Row 1 — top
  { id: "browser1",   left: "2%",   top: 20,  width: 150, rotate: -2.5, speed: 60,  z: 2, Component: BrowserCard },
  { id: "insta1",     left: "18%",  top: 10,  width: 110, rotate: 3,    speed: 90,  z: 3, Component: InstaCard },
  { id: "linkedin1",  left: "32%",  top: 30,  width: 140, rotate: -1.5, speed: 70,  z: 1, Component: LinkedInCard },
  { id: "email1",     left: "50%",  top: 5,   width: 130, rotate: 4,    speed: 100, z: 4, Component: EmailCard },
  { id: "blog1",      left: "65%",  top: 25,  width: 135, rotate: -3,   speed: 75,  z: 2, Component: BlogCard },
  { id: "thread1",    left: "82%",  top: 15,  width: 120, rotate: 2,    speed: 85,  z: 3, Component: ThreadCard },
  // Row 2 — middle
  { id: "carousel1",  left: "6%",   top: 130, width: 120, rotate: 2.5,  speed: 80,  z: 3, Component: CarouselCard },
  { id: "video1",     left: "20%",  top: 120, width: 140, rotate: -3.5, speed: 65,  z: 1, Component: VideoCard },
  { id: "tweet1",     left: "38%",  top: 140, width: 115, rotate: 1.5,  speed: 95,  z: 4, Component: TweetCard },
  { id: "newsletter1",left: "54%",  top: 125, width: 130, rotate: -2,   speed: 72,  z: 2, Component: NewsletterCard },
  { id: "story1",     left: "70%",  top: 115, width: 70,  rotate: 4.5,  speed: 110, z: 5, Component: StoryCard },
  { id: "browser2",   left: "80%",  top: 135, width: 145, rotate: -1,   speed: 68,  z: 1, Component: BrowserCard },
  // Row 3 — bottom
  { id: "insta2",     left: "3%",   top: 230, width: 105, rotate: -4,   speed: 90,  z: 2, Component: InstaCard },
  { id: "linkedin2",  left: "16%",  top: 245, width: 130, rotate: 3,    speed: 55,  z: 1, Component: LinkedInCard },
  { id: "email2",     left: "34%",  top: 235, width: 125, rotate: -2.5, speed: 85,  z: 3, Component: EmailCard },
  { id: "video2",     left: "50%",  top: 250, width: 135, rotate: 1,    speed: 78,  z: 2, Component: VideoCard },
  { id: "tweet2",     left: "68%",  top: 240, width: 110, rotate: -3.5, speed: 95,  z: 4, Component: TweetCard },
  { id: "blog2",      left: "84%",  top: 225, width: 120, rotate: 2,    speed: 62,  z: 1, Component: BlogCard },
];

// ── Wrapper with parallax ───────────────────────────────────────────

function FloatingCardWrapper({
  card,
  scrollYProgress,
}: {
  card: CardDef;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 1], [card.speed, -card.speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.55, 0.8], [0, 1, 1, 0]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: card.left,
        top: card.top,
        width: card.width,
        zIndex: card.z,
        rotate: card.rotate,
        y,
        opacity,
      }}
    >
      <card.Component />
    </motion.div>
  );
}

// ── Main component ──────────────────────────────────────────────────

export default function ContentTransition() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="relative h-[360px] -mt-16 overflow-hidden">
      {cards.map((card) => (
        <FloatingCardWrapper
          key={card.id}
          card={card}
          scrollYProgress={scrollYProgress}
        />
      ))}

      {/* Bottom gradient — fades into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
    </div>
  );
}
