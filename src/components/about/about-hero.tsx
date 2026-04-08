"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services";

export default function AboutHero() {
  return (
    <section className="pt-[140px] pb-[80px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="flex gap-[3px]">
            {services.map((s, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.06, type: "spring", stiffness: 400 }}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: s.color }}
              />
            ))}
          </div>
        </motion.div>

        <div className="max-w-[800px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans font-bold text-[clamp(44px,6vw,72px)] leading-[1.02] tracking-[-0.03em] text-foreground mb-6"
          >
            Two people. No fluff.{" "}
            <span className="font-display italic font-normal text-accent">
              Real results.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-muted leading-relaxed max-w-[600px]"
          >
            Elemental Studios is Josh Sharpe and Conor. A Creative Director and
            a Business Director who got tired of watching businesses get burned
            by agencies that overpromise and underdeliver.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
