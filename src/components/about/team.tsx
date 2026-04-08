"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Josh Sharpe",
    role: "Creative Director & AI Architect",
    description:
      "Designs it, builds it, automates it. Josh has spent years at the intersection of creative direction and AI development. He builds with AI every day — not selling theory, selling practice. Every site, every piece of content, every automation comes through his hands.",
    initial: "J",
  },
  {
    name: "Conor",
    role: "Business Director & Operations",
    description:
      "Finds the clients, runs the business, closes the deals. Conor handles the business side so Josh can focus on delivery. Finance, legal, sales, operations — the engine that keeps the studio running.",
    initial: "C",
  },
];

export default function Team() {
  return (
    <section className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          The team
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1] max-w-[500px] mb-16"
        >
          Small team. Big{" "}
          <span className="not-italic text-accent">output.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">
                    {member.initial}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-muted leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
