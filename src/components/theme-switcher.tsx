"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "@/lib/theme";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = THEMES.find((t) => t.id === theme)!;

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-14 right-0 p-3 rounded-2xl bg-background border border-foreground/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.12)] min-w-[200px]"
          >
            <p className="text-[10px] text-muted uppercase tracking-[0.12em] font-medium mb-2 px-1">Style</p>
            <div className="space-y-1">
              {THEMES.map((t, i) => (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    theme === t.id
                      ? "bg-foreground/[0.06]"
                      : "hover:bg-foreground/[0.03]"
                  }`}
                >
                  {/* Colour swatch */}
                  <div
                    className="w-5 h-5 rounded-full border border-foreground/10 flex-shrink-0 relative"
                    style={{ background: t.bg }}
                  >
                    <div
                      className="absolute inset-[3px] rounded-full"
                      style={{ background: t.accent }}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">{t.label}</span>
                  {theme === t.id && (
                    <svg className="w-3.5 h-3.5 text-accent ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full bg-foreground text-background shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center relative overflow-hidden"
      >
        {/* Inner accent dot */}
        <motion.div
          className="w-5 h-5 rounded-full"
          style={{ background: current.accent }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.button>
    </div>
  );
}
