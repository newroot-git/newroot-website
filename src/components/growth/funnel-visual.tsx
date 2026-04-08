"use client";

import { motion } from "framer-motion";

const funnelStages = [
  {
    label: "Awareness",
    width: "100%",
    description: "People discover you exist — through ads, SEO, social, referrals",
    services: ["Google Ads", "Meta Ads", "SEO", "Content"],
  },
  {
    label: "Interest",
    width: "75%",
    description: "They visit your site, read your content, follow your socials",
    services: ["Website", "Blog", "Social Media"],
  },
  {
    label: "Consideration",
    width: "55%",
    description: "They compare you to alternatives, read reviews, check pricing",
    services: ["Email Nurture", "Case Studies", "Testimonials"],
  },
  {
    label: "Conversion",
    width: "35%",
    description: "They book a call, fill a form, make a purchase",
    services: ["Landing Pages", "Chatbot", "Booking Automation"],
  },
  {
    label: "Retention",
    width: "25%",
    description: "They come back, refer others, become long-term customers",
    services: ["Email", "WhatsApp", "Loyalty Automation"],
  },
];

export default function FunnelVisual() {
  return (
    <section className="relative py-[140px] px-6 bg-[#F59E0B] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-sm font-medium tracking-wide mb-6"
        >
          The funnel
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold text-[clamp(36px,5vw,60px)] leading-[1.05] text-white mb-4"
        >
          Where are you losing{" "}
          <span className="font-display italic font-normal">customers?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70 leading-relaxed max-w-[520px] mb-12"
        >
          Every business has a funnel. Most have holes. We find them and fix
          them — so fewer leads slip through the cracks at every stage.
        </motion.p>

        <div className="space-y-3 max-w-[700px]">
          {funnelStages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center gap-4"
            >
              {/* Funnel bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: stage.width }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 + 0.2 }}
                className="h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 flex items-center px-4 gap-3 overflow-hidden"
              >
                <span className="text-white font-semibold text-sm whitespace-nowrap">
                  {stage.label}
                </span>
                <span className="text-white/50 text-xs whitespace-nowrap hidden sm:inline">
                  {stage.description}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {["Google Ads", "Meta Ads", "SEO", "Email", "LinkedIn", "WhatsApp"].map((service) => (
            <span
              key={service}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 text-white border border-white/10"
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
