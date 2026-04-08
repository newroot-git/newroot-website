"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const cycleWords = [
  "more sales",
  "higher conversions",
  "consistent content",
  "automated workflows",
  "a website that works",
];

function FloatingMockup({
  className,
  delay,
  color,
  children,
}: {
  className: string;
  delay: number;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 7 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${color} rounded-xl shadow-lg overflow-hidden border border-foreground/[0.06]`}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground/[0.03]">
          <div className="w-2 h-2 rounded-full bg-foreground/10" />
          <div className="w-2 h-2 rounded-full bg-foreground/10" />
          <div className="w-2 h-2 rounded-full bg-foreground/10" />
          <div className="ml-2 h-4 flex-1 max-w-[120px] rounded bg-foreground/[0.04]" />
        </div>
        <div className="p-4">{children}</div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-sans font-medium tracking-wide uppercase text-accent mb-6"
            >
              Websites. Content. AI Solutions.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-bold text-[clamp(40px,5.5vw,72px)] leading-[1.05] tracking-[-0.03em] text-foreground"
            >
              We get you{" "}
              <span className="block h-[1.15em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-cta"
                  >
                    {cycleWords[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-lg text-body max-w-md leading-relaxed"
            >
              Websites, content, and AI solutions — built by two people who
              actually give a damn. One partner. Every piece your business needs
              to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-cta text-white font-sans font-medium text-[15px] hover:bg-cta-hover transition-all duration-200 hover:shadow-[0_4px_24px_rgba(224,90,45,0.3)]"
              >
                Book a Call
              </a>
              <a
                href="#services"
                className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-foreground/15 text-foreground font-sans font-medium text-[15px] hover:bg-surface transition-colors duration-200"
              >
                See Our Work
              </a>
            </motion.div>
          </div>

          {/* Right — Floating browser mockups */}
          <div className="relative h-[500px] lg:h-[560px] hidden lg:block">
            {/* Main mockup — dashboard */}
            <FloatingMockup
              className="top-8 left-4 w-[340px]"
              delay={0.3}
              color="bg-white"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded bg-foreground/10" />
                  <div className="h-6 w-16 rounded-md bg-accent/10 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-accent">
                      +24%
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-accent/20"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 p-2 rounded-lg bg-background">
                    <div className="text-[10px] text-muted">Visitors</div>
                    <div className="text-sm font-display font-semibold text-foreground">
                      4,329
                    </div>
                  </div>
                  <div className="flex-1 p-2 rounded-lg bg-background">
                    <div className="text-[10px] text-muted">Conversions</div>
                    <div className="text-sm font-display font-semibold text-foreground">
                      312
                    </div>
                  </div>
                </div>
              </div>
            </FloatingMockup>

            {/* Secondary mockup — content calendar */}
            <FloatingMockup
              className="top-32 right-0 w-[260px]"
              delay={0.5}
              color="bg-white"
            >
              <div className="space-y-2">
                <div className="h-3 w-20 rounded bg-foreground/10" />
                {["Mon", "Tue", "Wed", "Thu"].map((day) => (
                  <div key={day} className="flex items-center gap-2">
                    <span className="text-[10px] text-muted w-7">{day}</span>
                    <div className="flex-1 h-6 rounded-md bg-cta/10 flex items-center px-2">
                      <div className="h-1.5 w-12 rounded bg-cta/30" />
                    </div>
                  </div>
                ))}
              </div>
            </FloatingMockup>

            {/* Third mockup — automation flow */}
            <FloatingMockup
              className="bottom-12 left-8 w-[280px]"
              delay={0.7}
              color="bg-white"
            >
              <div className="space-y-2">
                <div className="h-3 w-24 rounded bg-foreground/10" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-accent/40" />
                  </div>
                  <div className="h-[2px] flex-1 bg-foreground/10" />
                  <div className="w-8 h-8 rounded-lg bg-cta/15 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-cta/40" />
                  </div>
                  <div className="h-[2px] flex-1 bg-foreground/10" />
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-accent/40" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-5 px-2 rounded bg-accent-light flex items-center">
                    <span className="text-[9px] font-medium text-accent">
                      Active
                    </span>
                  </div>
                  <span className="text-[10px] text-muted">
                    3 workflows running
                  </span>
                </div>
              </div>
            </FloatingMockup>
          </div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cta/[0.03] rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
