"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <>
      {/* Doctor not pharmacist */}
      <section className="py-[120px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
              >
                Our philosophy
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-6"
              >
                We&apos;re the doctor,{" "}
                <span className="font-display italic font-normal text-accent">
                  not the pharmacist.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg leading-relaxed"
              >
                You don&apos;t walk into a pharmacy and pick your own medicine.
                You see a doctor who listens, diagnoses, and prescribes. That&apos;s
                how we work.
              </motion.p>
            </div>

            <div className="space-y-4">
              {[
                { title: "We investigate before we build", body: "Most agencies hand you a quote before understanding the problem. We do the opposite." },
                { title: "Specialist teams, not generalists", body: "Each service arm has dedicated expertise. When you need a website, a website specialist builds it." },
                { title: "Built for the long game", body: "Month 1 is just the start. We optimise, iterate, and grow with your business." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="bg-white rounded-2xl border border-foreground/[0.06] p-6"
                >
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We tell AI — kept as one contrast section (the CTA section at bottom is the other) */}
      <section className="py-[120px] px-6 bg-foreground">
        <div className="max-w-[1280px] mx-auto text-center max-w-[650px]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-background/30 text-[11px] font-medium tracking-[0.15em] uppercase block mb-4"
          >
            On AI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.1] text-background mb-6"
          >
            We don&apos;t ask AI. We{" "}
            <span className="font-display italic font-normal text-accent">tell</span> AI.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-background/60 text-lg leading-relaxed"
          >
            The person who tells AI is an expert. We come up with the direction,
            the ideas, the strategy. Then we specifically direct AI to handle the
            things that normally take hours. Speed without sacrificing quality.
          </motion.p>
        </div>
      </section>

      {/* Why Newroot */}
      <section className="py-[120px] px-6">
        <div className="max-w-[1280px] mx-auto text-center max-w-[600px]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            Why &ldquo;Newroot&rdquo;
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-5"
          >
            Every route to{" "}
            <span className="font-display italic font-normal text-accent">growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed"
          >
            New roots for your business. New routes to your customers. Your
            website, your content, your growth channels — we build the
            foundations so growth takes care of itself.
          </motion.p>
        </div>
      </section>
    </>
  );
}
