"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OnboardingEntry() {
  return (
    <section className="py-[100px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl border border-foreground/[0.04] p-12 md:p-16 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6"
          >
            <svg viewBox="0 0 12 12" className="w-4 h-4 text-accent" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </motion.div>

          <h2 className="font-sans font-bold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] mb-4">
            60 seconds. No email.{" "}
            <span className="font-display italic font-normal text-accent">
              Real answers.
            </span>
          </h2>
          <p className="text-muted text-lg max-w-[480px] mx-auto mb-8 leading-relaxed">
            We&apos;ll tell you exactly what&apos;s holding your business back
            and what to fix first. Not a sales pitch — a diagnosis.
          </p>
          <Link
            href="/start"
            className="inline-flex h-14 px-10 items-center justify-center rounded-lg bg-accent text-white text-lg font-medium transition-shadow duration-300"
            style={{ boxShadow: `0 4px 24px color-mix(in srgb, var(--accent) 35%, transparent)` }}
          >
            Start your free diagnosis
          </Link>
          <p className="text-sm text-subtle mt-4">
            Takes less time than reading this page.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
