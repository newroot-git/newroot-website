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

// Each card gets unique sizing, rotation, and vertical offset for a playful scattered look
const cardStyles = [
  { rotate: -2, y: 0, scale: 1.05, z: 2, className: "lg:col-span-1 lg:row-span-1" },
  { rotate: 1.5, y: 20, scale: 0.97, z: 1, className: "lg:col-span-1 lg:row-span-1" },
  { rotate: -1, y: -10, scale: 1.02, z: 3, className: "lg:col-span-1 lg:row-span-1" },
  { rotate: 2.5, y: 8, scale: 0.95, z: 0, className: "lg:col-span-1 lg:row-span-1" },
];

export default function ServicesOverview() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            Specialist branches
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-5"
          >
            Not an all-in-one agency. A collection of{" "}
            <span className="font-display italic font-normal text-accent">specialists.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[520px] mx-auto"
          >
            Each branch is a hyper-niche team. Even if you only need one service,
            it gets built with full-picture context.
          </motion.p>
        </div>

        {/* Scattered, overlapping card layout */}
        <div className="relative flex flex-wrap justify-center gap-x-[-20px] max-w-[1100px] mx-auto">
          {services.map((service, i) => {
            const copy = cardCopy[service.tag];
            const style = cardStyles[i];

            return (
              <motion.div
                key={service.tag}
                initial={{ opacity: 0, y: 40, rotate: style.rotate * 2 }}
                whileInView={{
                  opacity: 1,
                  y: style.y,
                  rotate: style.rotate,
                }}
                whileHover={{
                  rotate: 0,
                  scale: 1.06,
                  y: style.y - 8,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
                className="w-[260px] md:w-[280px] shrink-0"
                style={{
                  zIndex: style.z,
                  marginLeft: i > 0 ? "-12px" : "0",
                  transform: `scale(${style.scale})`,
                }}
              >
                <Link
                  href={service.href}
                  className="block rounded-2xl border p-7 group transition-shadow hover:shadow-xl"
                  style={{
                    backgroundColor: service.colorLight,
                    borderColor: `${service.color}25`,
                    boxShadow: `0 4px 20px ${service.color}12, 0 2px 8px rgba(0,0,0,0.06)`,
                  }}
                >
                  <span className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }} />
                    <span className="text-[11px] font-medium tracking-wider uppercase" style={{ color: service.color }}>
                      {service.label}
                    </span>
                  </span>
                  <h3 className="font-semibold text-foreground mb-2 text-[15px]">{copy.title}</h3>
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
