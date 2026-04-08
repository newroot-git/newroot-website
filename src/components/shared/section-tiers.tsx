"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./section-header";

interface Tier {
  name: string;
  highlight?: boolean;
  price: string;
  period?: string;
  features: string[];
}

interface SectionTiersProps {
  label?: string;
  headline: string;
  accentWord?: string;
  subtext?: string;
  tiers: Tier[];
  bg?: "background" | "surface";
}

export default function SectionTiers({
  label = "Pricing",
  headline,
  accentWord,
  subtext,
  tiers,
  bg = "background",
}: SectionTiersProps) {
  return (
    <section className={`py-[140px] px-6 ${bg === "surface" ? "bg-surface" : ""}`}>
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          label={label}
          headline={headline}
          accentWord={accentWord}
          subtext={subtext}
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-7 ${
                tier.highlight
                  ? "bg-[#0055FF] text-white"
                  : "bg-background border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              }`}
            >
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full inline-block mb-4 ${
                  tier.highlight
                    ? "bg-white/20 text-white"
                    : "bg-accent-light text-accent"
                }`}
              >
                {tier.name}
              </span>

              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className={`font-bold text-[32px] leading-none ${
                    tier.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-sm ${tier.highlight ? "text-white/60" : "text-muted"}`}>
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 12 12"
                      className={`w-3 h-3 mt-1 shrink-0 ${
                        tier.highlight ? "text-white/80" : "text-accent"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                    </svg>
                    <span
                      className={`text-sm leading-relaxed ${
                        tier.highlight ? "text-white/90" : "text-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full inline-flex h-11 items-center justify-center rounded-lg font-medium text-sm transition-all duration-200 ${
                  tier.highlight
                    ? "bg-white text-[#0055FF] hover:bg-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                    : "bg-accent text-white hover:shadow-[0_4px_24px_rgba(255,92,53,0.4)]"
                }`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
