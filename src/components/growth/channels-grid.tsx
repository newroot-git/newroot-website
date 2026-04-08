"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";

const channels = [
  {
    name: "Google Ads",
    description: "Show up at the exact moment someone is searching for what you offer. Intent-based targeting.",
    stat: "Avg 200% ROI",
    statSource: "Google Economic Impact",
  },
  {
    name: "Meta Ads",
    description: "Reach your ideal customer on Facebook and Instagram with visual, scroll-stopping creative.",
    stat: "3.7B daily active users",
    statSource: "Meta Q4 2024",
  },
  {
    name: "SEO",
    description: "Rank for the searches your customers are making. The #1 organic result gets 18x more clicks than the #1 paid ad.",
    stat: "Top 3 results get 68.7% of clicks",
    statSource: "First Page Sage, 2026",
  },
  {
    name: "Email Marketing",
    description: "Nurture leads and drive repeat business. The highest ROI channel in digital marketing.",
    stat: "$36 return per $1 spent",
    statSource: "Litmus 2024",
  },
  {
    name: "LinkedIn",
    description: "B2B lead generation and thought leadership. Reach decision-makers directly.",
    stat: "80% of B2B leads",
    statSource: "LinkedIn Business",
  },
  {
    name: "WhatsApp",
    description: "Direct messaging for high-intent leads. 98% open rates. Conversational commerce.",
    stat: "98% open rate",
    statSource: "MessageBird",
  },
];

export default function ChannelsGrid() {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          label="Channels"
          headline="Every way your customers can"
          accentWord="find you."
          subtext="Most businesses are only visible in one or two places. Your customers are everywhere — you should be too."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-7"
            >
              <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {channel.description}
              </p>
              <div className="bg-accent/[0.06] rounded-lg px-3 py-2">
                <span className="text-sm font-semibold text-accent">
                  {channel.stat}
                </span>
                <span className="text-[10px] text-muted ml-2">
                  — {channel.statSource}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
