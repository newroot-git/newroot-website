"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
        <div className="text-center max-w-[560px]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-5"
          >
            Page not found
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-[clamp(48px,6vw,80px)] leading-[1.05] tracking-[-0.03em] mb-4"
          >
            Nothing{" "}
            <span className="font-display italic font-normal">here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg leading-relaxed mb-10"
          >
            Whatever you were looking for, it&apos;s not at this address.
            Let&apos;s get you somewhere useful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/"
              className="h-12 px-8 inline-flex items-center justify-center rounded-lg bg-foreground text-background text-[15px] font-medium hover:bg-foreground/85 transition-all duration-200 hover:shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="h-12 px-8 inline-flex items-center justify-center rounded-lg border border-foreground/15 text-foreground text-[15px] font-medium hover:bg-surface transition-all duration-200"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
