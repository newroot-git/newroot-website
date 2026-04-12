"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project, serviceFilterMap } from "@/lib/projects";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = Object.entries(serviceFilterMap);
  const filtered = activeFilter
    ? projects.filter((p) => p.services.includes(activeFilter as Project["services"][number]))
    : projects;

  return (
    <section className="py-[80px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.02em]"
          >
            All projects
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => setActiveFilter(null)}
              className={`text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                activeFilter === null
                  ? "bg-foreground text-background"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              All
            </button>
            {filters.map(([key, { label, color }]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(activeFilter === key ? null : key)}
                className="text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200"
                style={
                  activeFilter === key
                    ? { backgroundColor: color, color: "#fff" }
                    : { backgroundColor: "var(--surface)", color: "var(--muted)" }
                }
                onMouseEnter={(e) => {
                  if (activeFilter !== key) {
                    e.currentTarget.style.color = "var(--foreground)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== key) {
                    e.currentTarget.style.color = "var(--muted)";
                  }
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted py-20 text-lg"
          >
            More projects coming soon.
          </motion.p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryService = project.services[0];
  const serviceColor = serviceFilterMap[primaryService]?.color ?? "#0055FF";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="bg-white rounded-2xl border border-foreground/[0.06] overflow-hidden h-full transition-all hover:border-foreground/[0.12] hover:shadow-lg">
        {/* Image area */}
        <div
          className="h-52 relative overflow-hidden"
          style={{ backgroundColor: `${serviceColor}08` }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 opacity-25">
                <div
                  className="w-14 h-10 rounded-lg border-2 border-dashed"
                  style={{ borderColor: serviceColor }}
                />
                <span
                  className="text-[11px] font-medium"
                  style={{ color: serviceColor }}
                >
                  Coming soon
                </span>
              </div>
            </div>
          )}

          {/* Service tags */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {project.services.map((s) => (
              <span
                key={s}
                className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-md backdrop-blur-sm"
                style={{
                  color: serviceFilterMap[s]?.color,
                  backgroundColor: `${serviceFilterMap[s]?.color}18`,
                }}
              >
                {serviceFilterMap[s]?.label}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted mb-4">{project.tagline}</p>
          <p className="text-sm text-foreground/70 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Metrics row */}
          <div className="flex gap-6 pt-4 border-t border-foreground/[0.06]">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <span
                  className="block text-[18px] font-bold leading-tight"
                  style={{ color: serviceColor }}
                >
                  {metric.value}
                </span>
                <span className="text-[11px] text-muted">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
