"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-white">
            Ready to find out what&apos;s holding you back?
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            15-minute call. No pitch. Just an honest look at where you are and
            what would actually move the needle.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-white text-accent font-sans font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200"
            >
              Book a Call
            </a>
            <a
              href="#"
              className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-white/30 text-white font-sans font-medium text-[15px] hover:bg-white/10 transition-colors duration-200"
            >
              Start with a Free Diagnosis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
