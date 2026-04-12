"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OnboardingEntry() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] mb-4"
          >
            60 seconds. No email.{" "}
            <span className="font-display italic font-normal text-accent">Real answers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg mb-8 leading-relaxed"
          >
            We&apos;ll tell you exactly what&apos;s holding your business back
            and what to fix first. Not a sales pitch — a diagnosis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/start"
              className="inline-flex h-13 px-10 items-center justify-center rounded-lg bg-accent text-white text-lg font-medium transition-shadow hover:shadow-lg"
            >
              Start your free diagnosis
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
