"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

export default function ContactContent() {
  return (
    <section className="pt-[140px] pb-[100px] px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-[3px] mb-8"
            >
              {services.map((s, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.06, type: "spring", stiffness: 400 }}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans font-bold text-[clamp(44px,6vw,72px)] leading-[1.02] tracking-[-0.03em] text-foreground mb-6"
            >
              Let&apos;s{" "}
              <span className="font-display italic font-normal text-accent">
                talk.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted leading-relaxed mb-10 max-w-[450px]"
            >
              No pitch. No pressure. Just an honest conversation about where you
              are and whether we can help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-2">
                  Email
                </span>
                <a
                  href="mailto:hello@newroot.io"
                  className="text-foreground font-medium hover:text-accent transition-colors"
                >
                  hello@newroot.io
                </a>
              </div>

              <div>
                <span className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-2">
                  Response time
                </span>
                <p className="text-foreground font-medium">
                  Within 24 hours. Usually much faster.
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-3">
                  Or take the quick route
                </span>
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor">
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                  </svg>
                  Start your free 60-second diagnosis
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — form + Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Calendly placeholder */}
            <div className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Book a 15-minute call
              </h3>
              <p className="text-sm text-muted mb-6">
                Pick a time that works. No prep needed — we&apos;ll ask the
                right questions.
              </p>
              <div className="h-[350px] rounded-xl bg-surface border border-foreground/[0.04] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted mb-3">Calendly embed</p>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                    <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 text-accent" fill="currentColor">
                      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact form */}
            <div className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Or send a message
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/[0.08] bg-transparent text-foreground placeholder:text-subtle text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/[0.08] bg-transparent text-foreground placeholder:text-subtle text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="What do you need help with? (one line is fine)"
                  className="w-full px-4 py-3 rounded-xl border border-foreground/[0.08] bg-transparent text-foreground placeholder:text-subtle text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-foreground text-background font-medium text-sm hover:bg-foreground/85 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
