"use client";

import { motion } from "framer-motion";

function FloatingMockup({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 7 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-foreground/[0.06]"
      >
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

export default function HeroMockups() {
  return (
    <>
      {/* Dashboard mockup */}
      <FloatingMockup className="top-8 left-4 w-[340px]" delay={0.3}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-foreground/10" />
            <div className="h-6 w-16 rounded-md bg-accent/10 flex items-center justify-center">
              <span className="text-[10px] font-medium text-accent">+24%</span>
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

      {/* Content calendar mockup */}
      <FloatingMockup className="top-32 right-0 w-[260px]" delay={0.5}>
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

      {/* Automation flow mockup */}
      <FloatingMockup className="bottom-12 left-8 w-[280px]" delay={0.7}>
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
              <span className="text-[9px] font-medium text-accent">Active</span>
            </div>
            <span className="text-[10px] text-muted">3 workflows running</span>
          </div>
        </div>
      </FloatingMockup>
    </>
  );
}
