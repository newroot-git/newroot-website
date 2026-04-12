"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Coastal Roasters",
    type: "Website + Content",
    description: "Full brand site rebuild with automated content pipeline. Went from 0 to 12k monthly visitors in 90 days.",
    color: "#FF5C35",
    colorLight: "#FFF0EC",
    metric: "12k monthly visitors",
    image: null, // placeholder
  },
  {
    title: "UrbanFlow Fitness",
    type: "AI & Automation",
    description: "Custom CRM with automated follow-ups, class reminders, and lead scoring. 40% more bookings in month one.",
    color: "#8B5CF6",
    colorLight: "#F3F0FF",
    metric: "40% more bookings",
    image: null,
  },
  {
    title: "Bloom Interiors",
    type: "Full Stack Growth",
    description: "Website, content, SEO, and paid ads working together. Quadrupled qualified leads in 60 days.",
    color: "#22C55E",
    colorLight: "#ECFDF5",
    metric: "4x qualified leads",
    image: null,
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-4"
          >
            Our work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] relative inline-block"
          >
            Results that speak for{" "}
            <span className="font-display italic font-normal">themselves.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-foreground/[0.06] overflow-hidden h-full transition-all hover:border-foreground/[0.12] hover:shadow-lg">
                {/* Image placeholder */}
                <div
                  className="h-64 relative overflow-hidden"
                  style={{ backgroundColor: project.colorLight }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder pattern */}
                    <div className="flex flex-col items-center gap-2 opacity-40">
                      <div className="w-16 h-12 rounded-lg border-2 border-dashed" style={{ borderColor: project.color }} />
                      <span className="text-[11px] font-medium" style={{ color: project.color }}>
                        Project preview
                      </span>
                    </div>
                  </div>
                  {/* Metric badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg text-white text-[12px] font-semibold shadow-md"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.metric}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span
                      className="text-[11px] font-medium tracking-wider uppercase"
                      style={{ color: project.color }}
                    >
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
