"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "LinkedIn",
    color: "#0A66C2",
    format: "Thought leadership post",
  },
  {
    name: "Instagram",
    color: "#E4405F",
    format: "Visual carousel",
  },
  {
    name: "Blog",
    color: "#22C55E",
    format: "SEO article",
  },
  {
    name: "Email",
    color: "#6366F1",
    format: "Newsletter",
  },
  {
    name: "X",
    color: "#1DA1F2",
    format: "Thread",
  },
];

// Positions: X in front, Email pulled closer, tighter composition
const stickerLayout = [
  { rotate: -3, left: "0%", top: "0%", zIndex: 2, width: 250 },       // LinkedIn — top left
  { rotate: 4, left: "52%", top: "-2%", zIndex: 3, width: 210 },      // Instagram — top right
  { rotate: -1.5, left: "18%", top: "32%", zIndex: 4, width: 270 },   // Blog — center
  { rotate: 3, left: "5%", top: "56%", zIndex: 1, width: 235 },       // Email — bottom left (pulled in)
  { rotate: -2.5, left: "42%", top: "48%", zIndex: 6, width: 245 },   // X — foreground, overlapping blog
];

// Platform logo SVGs
function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function XLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedInSticker() {
  return (
    <div className="rounded-xl border border-foreground/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
            <LinkedInLogo className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="h-2 w-24 rounded-full bg-foreground/12 mb-1.5" />
            <div className="h-1.5 w-16 rounded-full bg-foreground/6" />
          </div>
        </div>
        <div className="space-y-1.5 mb-3">
          <div className="h-2 w-full rounded-full bg-foreground/6" />
          <div className="h-2 w-full rounded-full bg-foreground/6" />
          <div className="h-2 w-3/5 rounded-full bg-foreground/6" />
        </div>
        <div className="h-24 rounded-lg bg-[#0A66C2]/8 mb-3" />
        <div className="flex gap-6 pt-2.5 border-t border-foreground/[0.06]">
          {["Like", "Comment", "Repost", "Send"].map((a) => (
            <span key={a} className="text-[9px] font-medium text-muted">{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InstagramSticker() {
  return (
    <div className="rounded-2xl border border-foreground/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className="w-7 h-7 rounded-full border-2 border-[#E4405F]/40 flex items-center justify-center">
          <InstagramLogo className="w-3.5 h-3.5 text-[#E4405F]" />
        </div>
        <div className="h-2 w-20 rounded-full bg-foreground/10" />
      </div>
      <div className="aspect-[4/5] bg-gradient-to-br from-[#E4405F]/10 to-[#E4405F]/5 flex items-center justify-center">
        <InstagramLogo className="w-12 h-12 text-[#E4405F]/20" />
      </div>
      <div className="px-3 py-2.5">
        <div className="flex gap-3 mb-2">
          <svg className="w-5 h-5 text-foreground/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <svg className="w-5 h-5 text-foreground/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg className="w-5 h-5 text-foreground/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
        <div className="h-1.5 w-20 rounded-full bg-foreground/8 mb-1" />
        <div className="h-1.5 w-full rounded-full bg-foreground/5" />
      </div>
    </div>
  );
}

function BlogSticker() {
  return (
    <div className="rounded-xl border border-foreground/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-foreground/[0.02] border-b border-foreground/[0.06]">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <div className="ml-2 h-5 flex-1 rounded-md bg-foreground/[0.04] max-w-[180px] flex items-center px-2">
          <svg className="w-2.5 h-2.5 text-foreground/20 mr-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span className="text-[7px] text-muted">yourbusiness.com/blog/content-strategy</span>
        </div>
      </div>
      <div className="p-5">
        <div className="h-3 w-4/5 rounded-full bg-[#22C55E]/20 mb-3" />
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1.5 w-12 rounded-full bg-foreground/6" />
          <div className="w-1 h-1 rounded-full bg-foreground/10" />
          <div className="h-1.5 w-16 rounded-full bg-foreground/6" />
        </div>
        <div className="space-y-1.5 mb-4">
          <div className="h-1.5 w-full rounded-full bg-foreground/5" />
          <div className="h-1.5 w-full rounded-full bg-foreground/5" />
          <div className="h-1.5 w-4/5 rounded-full bg-foreground/5" />
        </div>
        <div className="h-20 rounded-lg bg-[#22C55E]/6 mb-4" />
        <div className="space-y-1.5">
          <div className="h-2 w-2/3 rounded-full bg-foreground/8" />
          <div className="h-1.5 w-full rounded-full bg-foreground/5" />
          <div className="h-1.5 w-full rounded-full bg-foreground/5" />
          <div className="h-1.5 w-3/4 rounded-full bg-foreground/5" />
        </div>
      </div>
    </div>
  );
}

function EmailSticker() {
  return (
    <div className="rounded-xl border border-foreground/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="px-4 py-2.5 bg-foreground/[0.02] border-b border-foreground/[0.06] flex items-center gap-2">
        <svg className="w-4 h-4 text-[#6366F1]" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span className="text-[9px] font-semibold text-foreground/70">Inbox</span>
      </div>
      <div className="p-4 border-l-3 border-[#6366F1]">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
            <span className="text-[8px] font-bold text-[#6366F1]">YB</span>
          </div>
          <div>
            <div className="text-[10px] font-bold text-foreground">Your Brand Newsletter</div>
            <div className="text-[8px] text-muted">5 key insights this week</div>
          </div>
        </div>
        <div className="space-y-1.5 mb-3">
          <div className="h-1.5 w-full rounded-full bg-foreground/5" />
          <div className="h-1.5 w-full rounded-full bg-foreground/5" />
          <div className="h-1.5 w-3/4 rounded-full bg-foreground/5" />
        </div>
        <div className="h-7 w-24 rounded-md bg-[#6366F1] flex items-center justify-center">
          <span className="text-white text-[8px] font-semibold">Read More</span>
        </div>
      </div>
    </div>
  );
}

function XSticker() {
  return (
    <div className="rounded-xl border border-foreground/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden p-4">
      <div className="flex items-start gap-2.5">
        <div className="w-10 h-10 rounded-full bg-foreground/[0.04] flex items-center justify-center shrink-0">
          <XLogo className="w-4.5 h-4.5 text-foreground/80" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-20 rounded-full bg-foreground/12" />
            <div className="h-1.5 w-12 rounded-full bg-foreground/5" />
          </div>
          <div className="space-y-1.5 mb-3">
            <div className="h-2 w-full rounded-full bg-foreground/6" />
            <div className="h-2 w-full rounded-full bg-foreground/6" />
            <div className="h-2 w-2/3 rounded-full bg-foreground/6" />
          </div>
          <div className="h-1 w-full border-t border-foreground/[0.04] mb-2.5" />
          <div className="space-y-1.5 mb-3">
            <div className="h-2 w-full rounded-full bg-foreground/6" />
            <div className="h-2 w-4/5 rounded-full bg-foreground/6" />
          </div>
          <div className="flex gap-6 pt-2 text-[9px] text-muted">
            <span>24</span><span>12</span><span>89</span><span>1.2K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const stickerComponents = [LinkedInSticker, InstagramSticker, BlogSticker, EmailSticker, XSticker];

// Small logo icons for the right-side list
function PlatformIcon({ name, color }: { name: string; color: string }) {
  if (name === "LinkedIn") return (
    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
      <LinkedInLogo className="w-3 h-3 text-white" />
    </div>
  );
  if (name === "Instagram") return (
    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
      <InstagramLogo className="w-3 h-3 text-white" />
    </div>
  );
  if (name === "X") return (
    <div className="w-5 h-5 rounded-md bg-foreground flex items-center justify-center">
      <XLogo className="w-2.5 h-2.5 text-white" />
    </div>
  );
  if (name === "Blog") return (
    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    </div>
  );
  // Email
  return (
    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    </div>
  );
}

export default function PlatformShowcase() {
  return (
    <section className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — stacked pile of all formats */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-8"
            >
              One piece, five formats
            </motion.span>

            <div className="relative h-[560px]">
              {platforms.map((platform, i) => {
                const layout = stickerLayout[i];
                const Sticker = stickerComponents[i];
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: layout.rotate }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      y: -8,
                      zIndex: 10,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute cursor-default hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                    style={{
                      left: layout.left,
                      top: layout.top,
                      zIndex: layout.zIndex,
                      width: layout.width,
                    }}
                  >
                    <Sticker />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg leading-relaxed mb-8"
            >
              Each platform has different rules, different audiences, different formats. We create native content for each — not the same post copy-pasted everywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              {platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <PlatformIcon name={p.name} color={p.color} />
                  <span className="text-sm font-medium text-foreground">{p.name}</span>
                  <span className="text-sm text-muted">— {p.format}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="text-xs text-muted mt-8 flex items-center gap-2"
            >
              <span className="flex -space-x-1.5">
                {platforms.map((p) => (
                  <span key={p.name} className="w-4 h-4 rounded-md border border-surface flex items-center justify-center" style={{ backgroundColor: p.name === "X" ? "#1A1A1A" : p.color }}>
                    {p.name === "LinkedIn" && <LinkedInLogo className="w-2.5 h-2.5 text-white" />}
                    {p.name === "Instagram" && <InstagramLogo className="w-2.5 h-2.5 text-white" />}
                    {p.name === "X" && <XLogo className="w-2 h-2 text-white" />}
                    {p.name === "Blog" && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                    {p.name === "Email" && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>}
                  </span>
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
