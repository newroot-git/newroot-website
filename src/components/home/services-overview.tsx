"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

const cardCopy: Record<string, { title: string; body: string }> = {
  WEBSITES: {
    title: "Built to convert, not just exist",
    body: "Custom sites shipped in days. Strategic design, not template swaps. Every site is a business tool.",
  },
  CONTENT: {
    title: "Show up every day without burning out",
    body: "Consistent content across every channel. AI-powered production, directed by a Creative Director.",
  },
  "AI & AUTOMATION": {
    title: "One trigger. Everything handled.",
    body: "Custom CRMs, workflow automation, AI assistants. We find the bottlenecks and build the fix.",
  },
  GROWTH: {
    title: "Get found. Get chosen. Get growing.",
    body: "SEO, paid ads, email marketing — all connected to your website and content, not siloed.",
  },
};

export default function ServicesOverview() {
  return (
    <section className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
          >
            Specialist branches
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[700px] mb-6"
          >
            Not an all-in-one agency.
            <br />
            A collection of{" "}
            <span className="font-display italic font-normal text-accent">
              specialists.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[580px]"
          >
            Each branch is a hyper-niche team. Even if you only need one
            service, it gets built with full-picture context — because the
            other teams inform the strategy. Every arm feeds the next.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, i) => {
            const copy = cardCopy[service.tag];
            return (
              <motion.div
                key={service.tag}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={service.href}
                  className="block bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] h-full group overflow-hidden transition-shadow duration-300"
                  style={{
                    // Hover glow effect via CSS
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 30px ${service.color}20, 0 0 0 1px ${service.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Colored header with title */}
                  <div
                    className="px-7 py-5 rounded-t-2xl"
                    style={{ backgroundColor: service.color }}
                  >
                    <span className="text-white/70 text-[10px] font-medium tracking-wider uppercase">
                      {service.element}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-1">
                      {service.label}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <h4 className="font-semibold text-foreground mb-2">
                      {copy.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {copy.body}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center text-sm font-medium transition-transform group-hover:translate-x-1"
                      style={{ color: service.color }}
                    >
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
