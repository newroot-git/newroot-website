"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Josh Sharpe",
    role: "Creative Director & AI Architect",
    description: "Designs it, builds it, automates it. Years at the intersection of creative direction and AI development. Every site, every piece of content, every automation comes through his hands.",
    initial: "J",
  },
  {
    name: "Conor",
    role: "Business Director & Operations",
    description: "Finds the clients, runs the business, closes the deals. Finance, legal, sales, operations — the engine that keeps the studio running.",
    initial: "C",
  },
];

export default function Team() {
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
            The team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em]"
          >
            Small team. Big{" "}
            <span className="font-display italic font-normal text-accent">output.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-foreground/[0.06] p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">{member.initial}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
