"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useState, useEffect } from "react";

const floatingEmojis = ["*", "+", "~", "!", "?", "#", "@", "&", "%", "$"];

function VibeSlider() {
  const [vibe, setVibe] = useState(69);
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold text-[#1A0033] uppercase tracking-wider">Vibe</span>
      <input
        type="range"
        min="0"
        max="100"
        value={vibe}
        onChange={(e) => setVibe(Number(e.target.value))}
        className="w-20 h-2 accent-[#FF00FF]"
      />
      <span className="text-[10px] font-bold text-[#FF00FF]">{vibe}%</span>
    </div>
  );
}

function FloatingJunk() {
  const [items] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: floatingEmojis[i % floatingEmojis.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 24,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[55] overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-[#FF00FF]/20 font-bold select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, -20, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}

function MarqueeBanner() {
  const messages = [
    "THIS WEBSITE IS INCREDIBLE",
    "BEST AGENCY EVER",
    "WOW SUCH DESIGN",
    "HIRE US IMMEDIATELY",
    "WE ARE SO GOOD AT THIS",
    "YOUR WEBSITE COULD LOOK LIKE THIS",
    "MAXIMUM EFFORT",
    "NO SERIOUSLY LOOK AT THIS",
  ];
  const text = messages.join("  //  ");

  return (
    <div className="fixed top-[72px] left-0 right-0 z-[58] bg-[#FF00FF] text-white overflow-hidden h-7 flex items-center">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap text-xs font-black tracking-wider"
      >
        {text}  //  {text}
      </motion.div>
    </div>
  );
}

function VisitorCounter() {
  const [count, setCount] = useState(1337);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 left-6 z-[58] bg-[#FFF0B8] border-2 border-[#FF00FF] rounded-xl px-4 py-2 shadow-[0_0_20px_rgba(255,0,255,0.3)]"
    >
      <div className="text-[9px] text-[#8B008B] uppercase tracking-wider font-bold">Visitors</div>
      <motion.div
        key={count}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        className="text-xl font-black text-[#FF00FF] tabular-nums"
      >
        {count.toLocaleString()}
      </motion.div>
    </motion.div>
  );
}

function UselessControls() {
  const [fun, setFun] = useState(true);
  const [speed, setSpeed] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-[58] bg-[#FFF0FF] border-2 border-[#FF00FF]/30 rounded-xl p-3 space-y-3 shadow-lg"
    >
      <div className="text-[9px] text-[#8B008B] uppercase tracking-wider font-bold mb-1">Controls</div>
      <VibeSlider />
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-[#1A0033] uppercase tracking-wider">Fun</span>
        <button
          onClick={() => setFun(!fun)}
          className={`w-8 h-4 rounded-full transition-colors relative ${fun ? "bg-[#FF00FF]" : "bg-[#CCC]"}`}
        >
          <motion.div
            animate={{ x: fun ? 16 : 2 }}
            className="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm"
          />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-[#1A0033] uppercase tracking-wider">Speed</span>
        <input
          type="range"
          min="0"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-16 h-2 accent-[#FF00FF]"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full text-[10px] font-bold text-white bg-[#FF00FF] rounded-lg py-1.5 uppercase tracking-wider"
      >
        Activate
      </motion.button>
    </motion.div>
  );
}

export default function MaximalistEffects() {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {theme === "maximalist" && (
        <>
          <FloatingJunk />
          <MarqueeBanner />
          <VisitorCounter />
          <UselessControls />
        </>
      )}
    </AnimatePresence>
  );
}
