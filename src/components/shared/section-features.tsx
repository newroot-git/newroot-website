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
}

export default function SectionFeatures({
  label,
  headline,
  accentWord,
  subtext,
  features,
}: SectionFeaturesProps) {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label={label} headline={headline} accentWord={accentWord} subtext={subtext} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-foreground/[0.06] p-8"
            >
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
