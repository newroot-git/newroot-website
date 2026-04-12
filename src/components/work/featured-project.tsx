"use client";

import { motion } from "framer-motion";
import { type Project, serviceFilterMap } from "@/lib/projects";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const primaryService = project.services[0];
  const serviceColor = serviceFilterMap[primaryService]?.color ?? "#0055FF";

  return (
    <section className="pt-[160px] pb-[80px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[11px] font-medium text-accent tracking-[0.15em] uppercase block mb-8"
        >
          Featured project
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-4">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md"
                    style={{
                      color: serviceFilterMap[s]?.color,
                      backgroundColor: `${serviceFilterMap[s]?.color}12`,
                    }}
                  >
                    {serviceFilterMap[s]?.label}
                  </span>
                ))}
              </div>

              <h1 className="font-sans font-bold text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-0.025em] mb-2">
                {project.title}
              </h1>
              <p className="text-muted text-lg mb-6">{project.tagline}</p>
              <p className="text-foreground/80 text-[17px] leading-relaxed mb-8 max-w-[480px]">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex gap-8">
                {project.metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span
                      className="block text-[clamp(28px,3vw,36px)] font-bold tracking-tight leading-none mb-1"
                      style={{ color: serviceColor }}
                    >
                      {metric.value}
                    </span>
                    <span className="text-sm text-muted">{metric.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden relative"
              style={{ backgroundColor: `${serviceColor}08` }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 opacity-30">
                    <div
                      className="w-20 h-14 rounded-lg border-2 border-dashed"
                      style={{ borderColor: serviceColor }}
                    />
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: serviceColor }}
                    >
                      Project screenshot
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
