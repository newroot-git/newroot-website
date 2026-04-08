"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

const cardCopy: Record<string, { title: string; body: string }> = {
  WEBSITES: { title: "Built to convert, not just exist", body: "Custom sites shipped in days. Strategic design, not template swaps." },
  CONTENT: { title: "Show up every day without burning out", body: "Consistent content across every channel. AI-powered, creatively directed." },
  "AI & AUTOMATION": { title: "One trigger. Everything handled.", body: "Custom CRMs, workflow automation, AI assistants. We find the bottlenecks." },
  GROWTH: { title: "Get found. Get chosen. Get growing.", body: "SEO, paid ads, email marketing — all connected, not siloed." },
};

export default function ServicesOverview() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            Specialist branches
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-5"
          >
            Not an all-in-one agency. A collection of{" "}
            <span className="font-display italic font-normal text-accent">specialists.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[520px] mx-auto"
          >
            Each branch is a hyper-niche team. Even if you only need one service,
            it gets built with full-picture context.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const copy = cardCopy[service.tag];
            return (
              <motion.div
                key={service.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-2xl border border-foreground/[0.06] p-8 h-full group transition-colors hover:border-foreground/[0.12]"
                >
                  <span className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: service.color }} />
                    <span className="text-[11px] font-medium tracking-wider uppercase" style={{ color: service.color }}>
                      {service.label}
                    </span>
                  </span>
                  <h3 className="font-semibold text-foreground mb-2">{copy.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{copy.body}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
