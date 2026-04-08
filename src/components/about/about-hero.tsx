"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services";

export default function AboutHero() {
  return (
    <section className="pt-[160px] pb-[120px] px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-[3px] mb-10"
        >
          {services.map((s, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.06, type: "spring", stiffness: 400 }}
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: s.color }}
            />
          ))}
        </motion.div>

        <div className="max-w-[700px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans font-bold text-[clamp(40px,6vw,64px)] leading-[1.05] tracking-[-0.03em] text-foreground mb-6"
          >
            Two people. No fluff.{" "}
            <span className="font-display italic font-normal text-accent">Real results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-muted leading-relaxed max-w-[520px] mx-auto"
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
