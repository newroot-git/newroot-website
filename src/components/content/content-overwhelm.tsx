"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const floatingComments = [
  { text: "You need to post more", x: "8%", y: "15%", delay: 0, rotate: -3 },
  { text: "Try using AI tools", x: "72%", y: "10%", delay: 0.4, rotate: 4 },
  { text: "Why aren't you on TikTok?", x: "15%", y: "55%", delay: 0.8, rotate: -2 },
  { text: "Consistency is key!", x: "65%", y: "45%", delay: 1.2, rotate: 3 },
  { text: "You should blog weekly", x: "5%", y: "80%", delay: 1.6, rotate: -4 },
  { text: "Email is dead (actually no)", x: "58%", y: "75%", delay: 2, rotate: 2 },
  { text: "Post 3x/day minimum", x: "35%", y: "25%", delay: 0.6, rotate: -1 },
  { text: "Your competitors are posting", x: "80%", y: "60%", delay: 1.4, rotate: 5 },
];

const floatingIcons = [
  { icon: "♥", x: "25%", y: "20%", delay: 0.3, color: "#E4405F" },
  { icon: "👍", x: "85%", y: "30%", delay: 0.7, color: "#0A66C2" },
  { icon: "🔔", x: "45%", y: "70%", delay: 1.1, color: "#F59E0B" },
  { icon: "📊", x: "10%", y: "40%", delay: 1.5, color: "#22C55E" },
  { icon: "💬", x: "70%", y: "85%", delay: 1.9, color: "#1DA1F2" },
  { icon: "👀", x: "55%", y: "12%", delay: 0.5, color: "#8B5CF6" },
];

export default function ContentOverwhelm() {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (resolved) return;
    const timer = setTimeout(() => setResolved(true), 5000);
    return () => clearTimeout(timer);
  }, [resolved]);

  return (
    <section className="relative pt-[160px] pb-[120px] px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Floating overwhelm elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingComments.map((comment, i) => (
          <motion.div
            key={`comment-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={resolved
              ? { opacity: 0, scale: 0.3, y: -50 }
              : { opacity: [0, 0.7, 0.5, 0.7], scale: 1, y: [0, -5, 0] }
            }
            transition={resolved
              ? { duration: 0.6, delay: i * 0.05 }
              : { duration: 3, delay: comment.delay, repeat: Infinity }
            }
            className="absolute"
            style={{ left: comment.x, top: comment.y, rotate: `${comment.rotate}deg` }}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-foreground/[0.06] rounded-xl px-3 py-1.5 shadow-sm">
              <span className="text-[11px] text-foreground/60 font-medium whitespace-nowrap">{comment.text}</span>
            </div>
          </motion.div>
        ))}

        {floatingIcons.map((icon, i) => (
          <motion.div
            key={`icon-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={resolved
              ? { opacity: 0, scale: 0 }
              : { opacity: [0, 0.6, 0.3, 0.6], scale: [0.8, 1.2, 0.8] }
            }
            transition={resolved
              ? { duration: 0.4, delay: i * 0.03 }
              : { duration: 2.5, delay: icon.delay, repeat: Infinity }
            }
            className="absolute text-2xl"
            style={{ left: icon.x, top: icon.y }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10 text-center">
        <motion.div
          animate={resolved ? { y: -20, opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={resolved ? "hidden" : ""}
        >
          <h1 className="font-sans font-bold text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-[-0.03em] text-foreground mb-6">
            Everyone&apos;s telling you to{" "}
            <span className="font-display italic font-normal text-accent">post more.</span>
          </h1>
          <p className="text-xl text-muted max-w-[500px] mx-auto leading-relaxed mb-8">
            More platforms. More formats. More often. The pressure to produce content never stops — but your time and energy do.
          </p>
          <button
            onClick={() => setResolved(true)}
            className="h-13 px-10 rounded-lg bg-accent text-white text-lg font-medium hover:shadow-[0_4px_24px_rgba(34,197,94,0.35)] transition-shadow"
          >
            Make it stop
          </button>
        </motion.div>

        {/* Resolution */}
        {resolved && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
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
    </section>
  );
}
