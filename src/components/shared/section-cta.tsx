"use client";

import { motion } from "framer-motion";
import BookCallButton from "@/components/ui/book-call-button";

interface SectionCTAProps {
  headline?: string;
  accentWord?: string;
  body?: string;
}

export default function SectionCTA({
  headline = "Ready to stop settling for",
  accentWord = "mediocre?",
  body = "Free call. Honest advice. No 47-slide proposal.",
}: SectionCTAProps) {
  return (
    <section className="py-[120px] px-6 bg-foreground">
      <div className="max-w-[1280px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-sans font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.1] tracking-[-0.025em] text-background max-w-[650px] mx-auto mb-5"
        >
          {headline}{" "}
          <span className="font-display italic font-normal text-accent">
            {accentWord}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-background/50 text-lg max-w-[400px] mx-auto mb-10"
        >
          {body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <BookCallButton size="large" />
          <p className="text-sm text-background/30 mt-4">
            No commitment. Just a conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
