"use client";

import { motion } from "framer-motion";

const builds = [
  { title: "Custom CRM / Client Dashboard", description: "Stop juggling spreadsheets. A CRM built around how your business actually works." },
  { title: "Workflow Automation", description: "Data entry, reporting, communications — automated. Turn repetitive tasks into background processes." },
  { title: "AI Chatbot / Customer Assistant", description: "A smart assistant trained on your business that captures leads and handles support 24/7." },
  { title: "Internal Tools Suite", description: "Dashboards, calculators, admin panels — custom tools that save your team hours every week." },
  { title: "Document & Data Processing", description: "Automated extraction, summarisation, and routing of documents, invoices, and forms." },
  { title: "AI-Powered Lead Scoring", description: "Automatically qualify and prioritise incoming leads based on fit signals from your website." },
];

export default function CommonBuilds() {
  return (
    <section className="py-[140px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          Common builds
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1] max-w-[600px] mb-16"
        >
          Solutions we build every week
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-7"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 12 12" className="w-3 h-3 text-accent" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">{build.title}</h3>
              <p className="text-sm text-muted">{build.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
