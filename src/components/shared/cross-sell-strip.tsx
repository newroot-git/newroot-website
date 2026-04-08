"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CrossSellItem {
  label: string;
  href: string;
  description: string;
}

interface CrossSellStripProps {
  headline: string;
  accentWord?: string;
  items: CrossSellItem[];
}

export default function CrossSellStrip({
  headline,
  accentWord,
  items,
}: CrossSellStripProps) {
  return (
    <section className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          The bigger picture
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1] max-w-[600px] mb-12"
        >
          {headline}
          {accentWord && (
            <>
              {" "}
              <span className="not-italic text-accent">{accentWord}</span>
            </>
          )}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={item.href}
                className="block bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-7 group transition-shadow hover:shadow-lg"
              >
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-light text-accent">
                  {item.label}
                </span>
                <p className="mt-4 text-[15px] text-foreground leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
