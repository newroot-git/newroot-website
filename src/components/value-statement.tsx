"use client";

import { motion } from "framer-motion";
import BusinessDiagnostic from "@/components/home/business-diagnostic";

export default function ValueStatement() {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-accent tracking-wide block mb-4"
        >
          Why Elemental
        </motion.span>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] mb-8"
            >
              We don&apos;t sell you a package. We find the{" "}
              <span className="font-display italic font-normal">problem.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg leading-relaxed mb-6"
            >
              Most agencies give you a menu and wait for your order. We
              investigate first. Maybe your website is fine but your content is
              invisible. Maybe your ads are burning cash because there&apos;s no
              follow-up automation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted leading-relaxed"
            >
              We figure out what&apos;s actually costing you — then fix that
              first. Even if you only need one thing, every decision is informed
              by the full picture.
            </motion.p>
          </div>

          {/* Interactive diagnostic visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BusinessDiagnostic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
