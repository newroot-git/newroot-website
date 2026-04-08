"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  accentWord?: string;
  subtext?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  headline,
  accentWord,
  subtext,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] ${
          align === "center" ? "max-w-[650px] mx-auto" : "max-w-[650px]"
        }`}
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
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-muted text-lg leading-relaxed mt-6 ${
            align === "center" ? "max-w-[580px] mx-auto" : "max-w-[580px]"
          }`}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
