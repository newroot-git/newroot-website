"use client";

import { motion } from "framer-motion";
import BookCallButton from "@/components/ui/book-call-button";

export default function W4wCallToAction() {
  return (
    <section id="book" className="py-[160px] px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 50%, rgba(255,92,53,0.06) 0%, transparent 60%)",
              "radial-gradient(ellipse at 70% 50%, rgba(255,92,53,0.04) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 50%, rgba(255,92,53,0.06) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="font-sans font-bold text-[clamp(40px,5.5vw,72px)] leading-[1.05] tracking-[-0.03em] max-w-[750px] mx-auto mb-6">
          Ready to stop settling for{" "}<span className="font-display italic font-normal text-accent">mediocre?</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }}
          className="text-[17px] text-muted max-w-sm mx-auto mb-10">
          Free call. Honest advice. No 47-slide proposal.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}>
          <BookCallButton size="large" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.4 }}
            className="text-sm text-subtle mt-4">No commitment. Just a conversation.</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
