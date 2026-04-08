"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "They didn't just build us a website — they understood our business and built something that actually converts. Best decision we made.",
    name: "Sarah M.",
    role: "Founder",
    company: "NuHealth",
  },
  {
    quote:
      "We went from posting once a month to daily content across three platforms. And it actually sounds like us, not generic AI garbage.",
    name: "James K.",
    role: "CEO",
    company: "Meridian Co.",
  },
  {
    quote:
      "The automation they built saves us 15 hours a week. That alone paid for the entire engagement within the first month.",
    name: "Priya D.",
    role: "Operations Lead",
    company: "Kinetic Labs",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-medium tracking-wide uppercase text-accent mb-4">
            What Clients Say
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-foreground">
            Don&apos;t take our word for it.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-cta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-body text-[15px] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                  <span className="text-sm font-display font-semibold text-accent">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
