"use client";

import { motion } from "framer-motion";
import BookCallButton from "@/components/ui/book-call-button";
import Link from "next/link";

interface SectionHeroProps {
  badge?: string;
  headlineBefore: string;
  headlineAccent: string;
  headlineAfter?: string;
  subtitle: string;
  showDiagnosisCTA?: boolean;
}

export default function SectionHero({
  badge,
  headlineBefore,
  headlineAccent,
  headlineAfter,
  subtitle,
  showDiagnosisCTA = true,
}: SectionHeroProps) {
  return (
    <section className="pt-[160px] pb-[120px] px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-10"
          >
            <span className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase border border-accent/20 rounded-full px-4 py-1.5">
              {badge}
            </span>
          </motion.div>
        )}

        <div className="max-w-[800px] mx-auto mb-6">
          <h1 className="font-sans font-bold text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">
            {headlineBefore.split(" ").map((word, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + headlineBefore.split(" ").length * 0.06 }}
              className="inline-block mr-[0.2em] font-display italic font-normal text-accent"
            >
              {headlineAccent}
            </motion.span>
            {headlineAfter && headlineAfter.split(" ").map((word, i) => (
              <motion.span
                key={`a-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + (headlineBefore.split(" ").length + 1 + i) * 0.06 }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[17px] text-muted max-w-[460px] mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex items-center justify-center gap-4"
        >
          <BookCallButton />
          {showDiagnosisCTA && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/start"
                className="h-12 px-7 inline-flex items-center justify-center rounded-lg border border-foreground/[0.1] text-foreground font-medium hover:border-foreground/[0.2] transition-colors"
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
