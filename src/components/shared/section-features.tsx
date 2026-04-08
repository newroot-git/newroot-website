"use client";

import { motion } from "framer-motion";
import SectionHeader from "./section-header";

interface Feature {
  title: string;
  description: string;
}

interface SectionFeaturesProps {
  label?: string;
  headline: string;
  accentWord?: string;
  subtext?: string;
  features: Feature[];
  bg?: "background" | "surface";
}

export default function SectionFeatures({
  label,
  headline,
  accentWord,
  subtext,
  features,
  bg = "background",
}: SectionFeaturesProps) {
  return (
    <section className={`py-[140px] px-6 ${bg === "surface" ? "bg-surface" : ""}`}>
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          label={label}
          headline={headline}
          accentWord={accentWord}
          subtext={subtext}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-7"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3 text-accent"
                  fill="currentColor"
                >
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
