"use client";

import { motion } from "framer-motion";

// Wrapper that gives any SVG illustration the "sticker" treatment:
// white die-cut border, slight rotation, drop shadow, pop-in animation
function StickerWrap({
  children,
  rotation = -4,
  size = 100,
  className = "",
}: {
  children: React.ReactNode;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: rotation - 8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
      className={`inline-block pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[2px_3px_4px_rgba(0,0,0,0.15)]"
      >
        {children}
      </svg>
    </motion.div>
  );
}

// --- Magnifying Glass (Home — "We find what's broken") ---
export function StickerMagnify({
  color = "#FF5C35",
  rotation = -6,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <circle cx="42" cy="40" r="28" fill="white" />
      <rect x="56" y="60" width="16" height="30" rx="4" transform="rotate(-45 64 75)" fill="white" />
      {/* Color fill */}
      <circle cx="42" cy="40" r="24" fill={color} />
      {/* Outline */}
      <circle cx="42" cy="40" r="24" fill="none" stroke="#1A1A1A" strokeWidth="4" />
      {/* Glass shine */}
      <path d="M32 30 C34 24, 42 22, 48 26" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Handle */}
      <rect x="60" y="58" width="10" height="26" rx="3" transform="rotate(-45 65 71)" fill={color} stroke="#1A1A1A" strokeWidth="4" />
      {/* Inner circle */}
      <circle cx="42" cy="40" r="14" fill="none" stroke="#1A1A1A" strokeWidth="2.5" opacity="0.3" />
    </StickerWrap>
  );
}

// --- Cursor / Pointer (Websites — digital) ---
export function StickerCursor({
  color = "#8B5CF6",
  rotation = 5,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <path d="M25 10 L25 72 L40 58 L58 78 L68 70 L50 50 L70 46 Z" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Color fill */}
      <path d="M25 10 L25 72 L40 58 L58 78 L68 70 L50 50 L70 46 Z" fill={color} />
      {/* Outline */}
      <path d="M25 10 L25 72 L40 58 L58 78 L68 70 L50 50 L70 46 Z" fill="none" stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
    </StickerWrap>
  );
}

// --- Pencil (Content — creation) ---
export function StickerPencil({
  color = "#22C55E",
  rotation = 8,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <path d="M30 10 L70 10 L70 72 L50 90 L30 72 Z" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Body */}
      <rect x="34" y="14" width="32" height="56" rx="2" fill={color} stroke="#1A1A1A" strokeWidth="4" />
      {/* Tip */}
      <path d="M34 70 L50 88 L66 70" fill="#F5F2EC" stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round" />
      {/* Point */}
      <path d="M44 78 L50 88 L56 78" fill="#1A1A1A" />
      {/* Stripe details */}
      <line x1="34" y1="28" x2="66" y2="28" stroke="#1A1A1A" strokeWidth="3" />
      <line x1="34" y1="38" x2="66" y2="38" stroke="#1A1A1A" strokeWidth="2" opacity="0.3" />
      <line x1="34" y1="48" x2="66" y2="48" stroke="#1A1A1A" strokeWidth="2" opacity="0.3" />
    </StickerWrap>
  );
}

// --- Gear / Cog (AI & Automation) ---
export function StickerGear({
  color = "#8B5CF6",
  rotation = -5,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <path d="M50 8 L56 18 L68 14 L68 26 L80 30 L74 42 L84 50 L74 58 L80 70 L68 74 L68 86 L56 82 L50 92 L44 82 L32 86 L32 74 L20 70 L26 58 L16 50 L26 42 L20 30 L32 26 L32 14 L44 18 Z"
        fill="white" stroke="white" strokeWidth="5" strokeLinejoin="round" />
      {/* Color fill */}
      <path d="M50 8 L56 18 L68 14 L68 26 L80 30 L74 42 L84 50 L74 58 L80 70 L68 74 L68 86 L56 82 L50 92 L44 82 L32 86 L32 74 L20 70 L26 58 L16 50 L26 42 L20 30 L32 26 L32 14 L44 18 Z"
        fill={color} />
      {/* Outline */}
      <path d="M50 8 L56 18 L68 14 L68 26 L80 30 L74 42 L84 50 L74 58 L80 70 L68 74 L68 86 L56 82 L50 92 L44 82 L32 86 L32 74 L20 70 L26 58 L16 50 L26 42 L20 30 L32 26 L32 14 L44 18 Z"
        fill="none" stroke="#1A1A1A" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Center hole */}
      <circle cx="50" cy="50" r="14" fill="#F5F2EC" stroke="#1A1A1A" strokeWidth="3.5" />
      {/* Inner dot */}
      <circle cx="50" cy="50" r="5" fill="#1A1A1A" />
    </StickerWrap>
  );
}

// --- Megaphone (Growth / Marketing) ---
export function StickerMegaphone({
  color = "#F59E0B",
  rotation = 6,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <path d="M20 35 L40 30 L75 12 L75 78 L40 60 L20 55 Z" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Body */}
      <path d="M20 35 L40 30 L40 60 L20 55 Z" fill={color} stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round" />
      {/* Cone */}
      <path d="M40 30 L75 12 L75 78 L40 60 Z" fill={color} stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round" />
      {/* Opening */}
      <ellipse cx="75" cy="45" rx="6" ry="16" fill="#F5F2EC" stroke="#1A1A1A" strokeWidth="3" />
      {/* Handle */}
      <rect x="14" y="38" width="10" height="14" rx="3" fill={color} stroke="#1A1A1A" strokeWidth="3" />
      {/* Sound lines */}
      <path d="M84 34 C90 38, 90 52, 84 56" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M88 26 C98 34, 98 56, 88 64" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </StickerWrap>
  );
}

// --- Lightbulb (About — ideas/creativity) ---
export function StickerLightbulb({
  color = "#FF5C35",
  rotation = -4,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <path d="M50 8 C28 8, 14 24, 14 42 C14 56, 24 64, 34 72 L34 82 L66 82 L66 72 C76 64, 86 56, 86 42 C86 24, 72 8, 50 8 Z"
        fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Bulb */}
      <path d="M50 8 C28 8, 14 24, 14 42 C14 56, 24 64, 34 72 L34 82 L66 82 L66 72 C76 64, 86 56, 86 42 C86 24, 72 8, 50 8 Z"
        fill={color} stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round" />
      {/* Base */}
      <rect x="36" y="80" width="28" height="10" rx="2" fill="#F5F2EC" stroke="#1A1A1A" strokeWidth="3" />
      {/* Base lines */}
      <line x1="38" y1="86" x2="62" y2="86" stroke="#1A1A1A" strokeWidth="2" />
      {/* Filament */}
      <path d="M42 60 L42 48 L50 40 L58 48 L58 60" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Shine */}
      <path d="M36 30 C38 22, 46 18, 52 20" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
    </StickerWrap>
  );
}

// --- Speech Bubble (Contact) ---
export function StickerSpeechBubble({
  color = "#0055FF",
  rotation = 4,
  size = 100,
  className = "",
}: {
  color?: string;
  rotation?: number;
  size?: number;
  className?: string;
}) {
  return (
    <StickerWrap rotation={rotation} size={size} className={className}>
      {/* White border */}
      <path d="M50 10 C78 10, 90 22, 90 40 C90 58, 78 68, 50 68 L34 68 L22 84 L26 68 C14 66, 10 56, 10 40 C10 22, 22 10, 50 10 Z"
        fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Bubble */}
      <path d="M50 10 C78 10, 90 22, 90 40 C90 58, 78 68, 50 68 L34 68 L22 84 L26 68 C14 66, 10 56, 10 40 C10 22, 22 10, 50 10 Z"
        fill={color} stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round" />
      {/* Dots */}
      <circle cx="35" cy="40" r="4" fill="#1A1A1A" />
      <circle cx="50" cy="40" r="4" fill="#1A1A1A" />
      <circle cx="65" cy="40" r="4" fill="#1A1A1A" />
    </StickerWrap>
  );
}
