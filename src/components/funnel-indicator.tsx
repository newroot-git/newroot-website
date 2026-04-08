"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const funnelSteps = [
  { label: "Discover", service: "/growth", color: "#F59E0B", description: "Get found" },
  { label: "Attract", service: "/content", color: "#22C55E", description: "Build trust" },
  { label: "Convert", service: "/websites", color: "#FF5C35", description: "Close deals" },
  { label: "Automate", service: "/ai", color: "#8B5CF6", description: "Scale up" },
];

export default function FunnelIndicator() {
  const pathname = usePathname();
  const isServicePage = funnelSteps.some((s) => s.service === pathname);

  if (!isServicePage) return null;

  const activeIndex = funnelSteps.findIndex((s) => s.service === pathname);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="fixed top-[72px] left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-foreground/[0.04]"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-2 flex items-center gap-1">
        <span className="text-[10px] text-muted font-medium tracking-wider uppercase mr-3 shrink-0">
          Funnel
        </span>
        <div className="flex items-center gap-0 flex-1">
          {funnelSteps.map((step, i) => {
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;

            return (
              <div key={step.label} className="flex items-center flex-1">
                <Link
                  href={step.service}
                  className="flex items-center gap-1.5 group relative"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? step.color : isPast ? step.color : "#D1CDC6",
                      opacity: isActive ? 1 : isPast ? 0.5 : 0.3,
                      scale: isActive ? 1.3 : 1,
                    }}
                  />
                  <span
                    className="text-[11px] font-medium transition-colors duration-200"
                    style={{
                      color: isActive ? step.color : isPast ? step.color : "#9E9890",
                      opacity: isActive ? 1 : isPast ? 0.6 : 0.4,
                    }}
                  >
                    {step.label}
                  </span>

                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-foreground text-background text-[9px] font-medium px-2 py-1 rounded whitespace-nowrap">
                      {step.description}
                    </div>
                  </div>
                </Link>

                {/* Connector line */}
                {i < funnelSteps.length - 1 && (
                  <div className="flex-1 mx-2">
                    <div
                      className="h-[1px] w-full transition-colors duration-300"
                      style={{
                        backgroundColor: i < activeIndex ? funnelSteps[i + 1].color : "#D1CDC6",
                        opacity: i < activeIndex ? 0.3 : 0.15,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
