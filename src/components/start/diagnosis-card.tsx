"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Level = "strong" | "needs-work" | "critical" | "none";

interface DiagnosisCardProps {
  diagnosis: {
    website: Level;
    content: Level;
    automation: Level;
    growth: Level;
    topPriority: string;
    summary: string;
  };
}

const areas = [
  { key: "website" as const, label: "Website", href: "/websites", color: "#FF5C35" },
  { key: "content" as const, label: "Content", href: "/content", color: "#22C55E" },
  { key: "automation" as const, label: "Automation", href: "/ai", color: "#8B5CF6" },
  { key: "growth" as const, label: "Growth", href: "/growth", color: "#F59E0B" },
];

const levelConfig: Record<Level, { label: string; width: string; opacity: number }> = {
  strong: { label: "Strong", width: "100%", opacity: 1 },
  "needs-work": { label: "Needs work", width: "55%", opacity: 0.7 },
  critical: { label: "Critical", width: "25%", opacity: 0.4 },
  none: { label: "Missing", width: "8%", opacity: 0.15 },
};

export default function DiagnosisCard({ diagnosis }: DiagnosisCardProps) {
  return (
    <div className="bg-background rounded-2xl border border-foreground/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 space-y-5">
      {areas.map((area, i) => {
        const level = diagnosis[area.key];
        const config = levelConfig[level];

        return (
          <Link key={area.key} href={area.href} className="block group">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: area.color }}
                />
                <span className="text-sm font-medium text-foreground group-hover:underline">
                  {area.label}
                </span>
              </span>
              <span
                className="text-xs font-semibold"
                style={{
                  color: level === "critical" || level === "none" ? "#EF4444"
                    : level === "needs-work" ? "#F59E0B"
                    : area.color,
                }}
              >
                {config.label}
              </span>
            </div>
            <div className="h-3 bg-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: config.width }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  backgroundColor: area.color,
                  opacity: config.opacity,
                }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
