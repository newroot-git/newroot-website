"use client";

import { motion } from "framer-motion";

const quotes = [
  { text: "From Squarespace embarrassment to a site that closes deals. 8 days.", author: "Sarah Chen", role: "Founder, TechFlow" },
  { text: "Agencies took 3 months for less. These two? One week.", author: "Marcus Webb", role: "CEO, GreenCart" },
  { text: "I was skeptical about the timeline. They sent a staging link on day 4.", author: "Priya Nair", role: "Founder, NovaPay" },
];

export default function W4wTestimonials() {
  return (
    <section className="py-[140px] px-6 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
              className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4">Results</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] mb-8">
              Don&apos;t take our{" "}<span className="font-display italic font-normal">word</span>{" "}for it
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-3">
              {[
                { value: "47%", label: "More conversions", client: "TechFlow" },
                { value: "8 days", label: "Average build time", client: "Avg across clients" },
                { value: "20%", label: "More time on site", client: "Apex Legal" },
                { value: "50+", label: "Sites shipped", client: "And counting" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 + i * 0.07 }}
                  className="bg-background rounded-2xl border border-foreground/[0.04] p-4">
                  <div className="text-[28px] font-bold text-accent leading-none mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-subtle mt-0.5">{stat.client}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-3">
            {quotes.map((q, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 100 }} whileHover={{ y: -2 }}
                className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-5">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.49L10 13.47l-4.94 2.63L6 10.61l-4-3.9 5.61-.87L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] text-foreground leading-relaxed mb-4">&ldquo;{q.text}&rdquo;</p>
                <div>
                  <div className="text-sm font-semibold text-foreground">{q.author}</div>
                  <div className="text-xs text-subtle">{q.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
