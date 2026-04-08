"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <>
      {/* Doctor not pharmacist */}
      <section className="py-[140px] px-6 bg-surface">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
              >
                Our philosophy
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] mb-8"
              >
                We&apos;re the doctor,{" "}
                <span className="font-display italic font-normal text-accent">
                  not the pharmacist.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg leading-relaxed"
              >
                You don&apos;t walk into a pharmacy and pick your own medicine.
                You see a doctor who listens, diagnoses, and prescribes. That&apos;s
                how we work. We don&apos;t start with a sales pitch. We start
                with questions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  title: "We investigate before we build",
                  body: "Most agencies hand you a quote before understanding the problem. We do the opposite — diagnose first, prescribe second.",
                },
                {
                  title: "Specialist teams, not generalists",
                  body: "Each service arm has dedicated expertise. When you need a website, a website specialist builds it — not a generalist who also does ads.",
                },
                {
                  title: "Built for the long game",
                  body: "We don't do one-off projects and disappear. Month 1 is the start. We optimise, iterate, and grow with your business.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6"
                >
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* We tell AI */}
      <section className="relative py-[140px] px-6 bg-[#0055FF] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm font-medium tracking-wide mb-6"
          >
            On AI
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-[clamp(40px,5.5vw,68px)] leading-[1.05] text-white mb-8 max-w-[700px] mx-auto"
          >
            We don&apos;t ask AI.
            <br />
            We{" "}
            <span className="font-display italic font-normal">tell</span> AI.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-[550px] mx-auto leading-relaxed mb-4"
          >
            The person who tells AI is an expert. We come up with the direction,
            the ideas, the strategy. Then we specifically direct AI to handle the
            things that normally take hours.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-[500px] mx-auto leading-relaxed"
          >
            AI is our tool, not our decision-maker. That&apos;s how you get
            speed without sacrificing quality or taste.
          </motion.p>
        </div>
      </section>

      {/* Why Elemental */}
      <section className="py-[140px] px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
          >
            Why &ldquo;Elemental&rdquo;
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(36px,4vw,56px)] leading-[1.1] max-w-[600px] mx-auto mb-8"
          >
            The foundations of growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-[500px] mx-auto"
          >
            Elemental means fundamental. The basic building blocks that
            everything else is built on. Your website, your content, your
            operations, your growth channels — when the foundations are right,
            growth takes care of itself.
          </motion.p>
        </div>
      </section>
    </>
  );
}
