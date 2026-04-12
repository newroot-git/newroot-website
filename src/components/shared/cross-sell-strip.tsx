"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

interface CrossSellItem {
  label: string;
  href: string;
  description: string;
}

interface CrossSellStripProps {
  headline: string;
  items: CrossSellItem[];
}

function getColor(href: string) {
  return services.find((s) => s.href === href)?.color ?? "#0055FF";
}

export default function CrossSellStrip({ headline, items }: CrossSellStripProps) {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            The bigger picture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(28px,3.5vw,40px)] leading-[1.15] tracking-[-0.02em]"
          >
            {headline}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
          {items.map((item, i) => {
            const color = getColor(item.href);
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="block bg-white rounded-2xl border border-foreground/[0.06] p-8 group transition-colors hover:border-foreground/[0.12]"
                >
                  <span className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-[11px] font-medium tracking-wider uppercase" style={{ color }}>
                      {item.label}
                    </span>
                  </span>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
