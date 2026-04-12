"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  accentWord?: string;
  subtext?: string;
}

export default function SectionHeader({
  label,
  headline,
  accentWord,
  subtext,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 max-w-[700px] mx-auto">
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em]"
      >
        {headline}
        {accentWord && (
          <>
            {" "}
            <span className="font-display italic font-normal text-accent">
              {accentWord}
            </span>
          </>
        )}
      </motion.h2>
      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg leading-relaxed mt-5 max-w-[520px] mx-auto"
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
