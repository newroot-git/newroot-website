"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

export default function HolisticView() {
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
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-5"
          >
            Every arm feeds the{" "}
            <span className="font-display italic font-normal text-accent">next.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[520px] mx-auto"
          >
            Your website drives leads. Your content keeps them warm. Your AI automates the follow-up. When these connect — growth compounds.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-[900px] mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                className="block bg-white rounded-2xl border border-foreground/[0.06] p-6 text-center group transition-colors hover:border-foreground/[0.12]"
              >
                <span className="w-2.5 h-2.5 rounded-full mx-auto block mb-3" style={{ backgroundColor: service.color }} />
                <div className="font-semibold text-foreground text-sm">{service.label}</div>
                <div className="text-xs text-muted mt-1">{service.description}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
