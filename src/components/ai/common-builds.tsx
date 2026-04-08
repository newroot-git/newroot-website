"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";

const builds = [
  { title: "Custom CRM / Client Dashboard", description: "Stop juggling spreadsheets. A CRM built around how your business actually works." },
  { title: "Workflow Automation", description: "Data entry, reporting, communications — automated. Repetitive tasks become background processes." },
  { title: "AI Chatbot / Assistant", description: "A smart assistant trained on your business. Captures leads and handles support 24/7." },
  { title: "Internal Tools Suite", description: "Dashboards, calculators, admin panels — custom tools that save your team hours weekly." },
  { title: "Document Processing", description: "Automated extraction, summarisation, and routing of documents, invoices, and forms." },
  { title: "Lead Scoring", description: "Automatically qualify and prioritise incoming leads based on fit signals from your website." },
];

export default function CommonBuilds() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          label="Common builds"
          headline="Solutions we build every"
          accentWord="week."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-foreground/[0.06] p-8"
            >
              <h3 className="font-semibold text-foreground mb-2">{build.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{build.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
