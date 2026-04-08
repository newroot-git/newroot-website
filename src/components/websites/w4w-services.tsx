"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web Design", "Development", "Landing Pages", "Branding", "Strategy"];

const works = [
  { title: "SaaS Dashboard Redesign", category: "Web Design", bg: "bg-gradient-to-br from-blue-500 to-blue-700", tall: true },
  { title: "E-commerce Platform", category: "Development", bg: "bg-gradient-to-br from-emerald-500 to-emerald-700", tall: false },
  { title: "Product Launch Page", category: "Landing Pages", bg: "bg-gradient-to-br from-amber-500 to-amber-700", tall: false },
  { title: "Fintech Brand Identity", category: "Branding", bg: "bg-gradient-to-br from-violet-500 to-violet-700", tall: true },
  { title: "Startup Marketing Site", category: "Web Design", bg: "bg-gradient-to-br from-rose-500 to-rose-700", tall: false },
  { title: "Conversion Audit", category: "Strategy", bg: "bg-gradient-to-br from-cyan-500 to-cyan-700", tall: false },
  { title: "Agency Portfolio", category: "Web Design", bg: "bg-gradient-to-br from-lime-500 to-lime-700", tall: false },
  { title: "SaaS Landing Page", category: "Landing Pages", bg: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-700", tall: true },
  { title: "Health App Website", category: "Development", bg: "bg-gradient-to-br from-teal-500 to-teal-700", tall: false },
];

export default function W4wServices() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <section id="our-work" className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
          <div>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4">What we do</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1]">
              Everything your website needs
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed md:pt-12">
            Design, development, strategy, and ongoing support. We handle the full stack so you can focus on running your business.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat ? "bg-foreground text-background" : "bg-background text-muted hover:text-foreground border border-foreground/[0.06]"
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Work grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <motion.div key={work.title} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                className={`${work.bg} rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid ${work.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <div className="h-full flex flex-col justify-between p-5">
                  {/* Wireframe content lines */}
                  <div className="space-y-2 opacity-[0.15]">
                    <div className="h-2 bg-white rounded w-2/3" />
                    <div className="h-1.5 bg-white rounded w-full" />
                    <div className="h-1.5 bg-white rounded w-4/5" />
                    <div className="h-5 bg-white/50 rounded w-1/3 mt-2" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-white/30 block mb-1 uppercase tracking-[0.1em]">{work.category}</span>
                    <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">{work.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
