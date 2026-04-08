"use client";

import { motion } from "framer-motion";

interface ProblemStatementProps {
  label?: string;
  headline: string;
  accentWord?: string;
  body: string;
}

export default function ProblemStatement({
  label = "Sound familiar?",
  headline,
  accentWord,
  body,
}: ProblemStatementProps) {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-accent tracking-wide block mb-4"
        >
          {label}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[650px] mb-8"
        >
          {headline}
          {accentWord && (
            <>
              {" "}
              <span className="font-display italic font-normal">
                {accentWord}
              </span>
            </>
          )}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg leading-relaxed max-w-[580px]"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
