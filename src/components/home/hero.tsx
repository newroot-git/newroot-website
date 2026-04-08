"use client";

import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import BookCallButton from "@/components/ui/book-call-button";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="pt-[160px] pb-[120px] px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <div className="flex items-center gap-2 border border-foreground/[0.06] rounded-full px-4 py-2">
            <div className="flex gap-[3px]">
              {["#FF5C35", "#22C55E", "#8B5CF6", "#F59E0B"].map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 400 }}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="text-xs text-muted font-medium">Four specialist teams. One vision.</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[800px] mx-auto mb-6">
          <h1 className="font-sans font-bold text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="inline-block mr-[0.2em]">We find</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="inline-block mr-[0.2em]">what&apos;s</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="inline-block font-display italic font-normal text-accent mr-[0.2em]">broken.</motion.span>
            <br />
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="inline-block mr-[0.2em]">Then we</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.58 }} className="inline-block font-display italic font-normal text-accent">fix it.</motion.span>
          </h1>
        </div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center text-[17px] text-muted max-w-[440px] mx-auto mb-10 h-7 overflow-hidden"
        >
          <TextRotate
            texts={["Not another agency. A diagnostic partner.", "Specialist teams. One shared vision.", "We don't guess. We investigate."]}
            rotationInterval={3200}
            splitBy="words"
            staggerFrom="first"
            staggerDuration={0.04}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            splitLevelClassName="overflow-hidden"
            mainClassName="justify-center"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-col items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-4">
            <Link
              href="/start"
              className="h-13 px-10 inline-flex items-center justify-center rounded-lg bg-accent text-white text-lg font-medium transition-shadow hover:shadow-lg"
            >
              Find out what&apos;s holding you back
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-subtle">
            <span>60 seconds</span>
            <span className="w-1 h-1 rounded-full bg-subtle" />
            <span>No email required</span>
            <span className="w-1 h-1 rounded-full bg-subtle" />
            <span>Free diagnosis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
