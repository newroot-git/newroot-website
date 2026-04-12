"use client";

import { motion } from "framer-motion";

const services = [
  {
    tag: "WEBSITES",
    title: "Built to convert, not just exist",
    description:
      "Custom sites shipped in days, not months. Strategic design, not template swaps. Every site is a business tool — built to generate leads and close sales.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    tag: "CONTENT",
    title: "Show up every day without burning out",
    description:
      "Consistent, quality content across every channel. AI-powered production, directed by a Creative Director. Not AI slop. Not agency filler.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
  },
  {
    tag: "AI & AUTOMATION",
    title: "Stop doing manually what a machine should handle",
    description:
      "Custom CRMs, workflow automation, AI assistants, internal tools. We find the bottlenecks and build solutions that save real hours every week.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-medium tracking-wide uppercase text-accent mb-4">
            What We Do
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-foreground max-w-2xl mx-auto">
            Sometimes it&apos;s one piece. Sometimes it&apos;s all of them.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-6">
                {service.icon}
              </div>
              <span className="text-xs font-sans font-medium tracking-wider uppercase text-accent">
                {service.tag}
              </span>
              <h3 className="mt-3 font-display font-semibold text-xl text-foreground leading-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-body text-[15px] leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center text-sm font-medium text-accent group-hover:text-cta transition-colors duration-200"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
