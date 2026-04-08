"use client";

import { motion } from "framer-motion";

export default function AIPhilosophy() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
            >
              Our philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-6"
            >
              We don&apos;t ask AI.
              <br />
              We{" "}
              <span className="font-display italic font-normal text-accent">
                tell
              </span>{" "}
              AI.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg leading-relaxed"
            >
              Most businesses ask AI &ldquo;what should I do?&rdquo; and get
              generic garbage back. We already know the answer. The person who
              tells AI is an expert — we come up with the direction, the ideas,
              the strategy. Then we specifically direct AI to handle the things
              that normally take hours.
            </motion.p>
          </div>

          <div className="space-y-4">
            {[
              {
                label: "Website brief",
                wrong: "\"Make me a website for my restaurant\"",
                right: "\"Build a conversion-focused 7-page site with this exact layout, these CTAs, and this colour system\"",
              },
              {
                label: "Content creation",
                wrong: "\"Write me some social media posts\"",
                right: "\"Create 12 LinkedIn posts following this content pillar strategy, in this brand voice, hitting these pain points\"",
              },
              {
                label: "Automation",
                wrong: "\"Can you automate my business?\"",
                right: "\"Build a flow that captures form submissions, qualifies via these 4 criteria, and routes to the right rep in 30 seconds\"",
              },
            ].map((example, i) => (
              <motion.div
                key={example.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="bg-white rounded-2xl border border-foreground/[0.06] p-6"
              >
                <span className="text-[10px] font-medium text-muted tracking-wider uppercase">
                  {example.label}
                </span>
                <div className="mt-3 flex items-start gap-2">
                  <span className="text-red-400/60 text-xs mt-0.5 shrink-0">x</span>
                  <p className="text-sm text-foreground/40 line-through">
                    {example.wrong}
                  </p>
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <span className="text-accent text-xs mt-0.5 shrink-0">&#10003;</span>
                  <p className="text-sm text-foreground">{example.right}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
