"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BookCallButton from "@/components/ui/book-call-button";

interface SectionHeroProps {
  badge?: string;
  headlineBefore: string;
  headlineAccent: string;
  headlineAfter?: string;
  subtitle: string;
  showDiagnosisCTA?: boolean;
  visual?: React.ReactNode;
}

export default function SectionHero({
  badge,
  headlineBefore,
  headlineAccent,
  headlineAfter,
  subtitle,
  showDiagnosisCTA = true,
  visual,
}: SectionHeroProps) {
  return (
    <section className="relative pt-[130px] pb-[80px] px-6 overflow-hidden min-h-screen flex items-center">
      {visual && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {visual}
        </div>
      )}

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex items-center gap-2 bg-surface border border-black/[0.06] rounded-full px-4 py-2">
              <span className="text-xs text-muted font-medium">{badge}</span>
            </div>
          </motion.div>
        )}

        <div className="text-center max-w-[950px] mx-auto mb-6">
          <h1 className="font-sans font-bold text-[clamp(44px,6.5vw,80px)] leading-[1.02] tracking-[-0.03em]">
            {headlineBefore.split(" ").map((word, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + headlineBefore.split(" ").length * 0.08 }}
              className="inline-block mr-[0.22em] font-display italic font-normal text-accent"
            >
              {headlineAccent}
            </motion.span>
            {headlineAfter && headlineAfter.split(" ").map((word, i) => (
              <motion.span
                key={`a-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + (headlineBefore.split(" ").length + 1 + i) * 0.08 }}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-[17px] text-muted text-center max-w-[440px] mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex items-center justify-center gap-4"
        >
          <BookCallButton />
          {showDiagnosisCTA && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/start"
                className="h-12 px-7 inline-flex items-center justify-center rounded-lg border border-foreground/15 text-foreground font-medium hover:bg-surface transition-colors"
              >
                Free diagnosis
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
