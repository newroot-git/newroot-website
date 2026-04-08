"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 1.5, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [isInView, count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={(el) => { (containerRef as React.MutableRefObject<HTMLSpanElement | null>).current = el; ref.current = el; }}>0{suffix}</span>;
}

export default function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-background" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { value: 47, suffix: "+", label: "Projects Shipped" },
            { value: 8, suffix: "", label: "Day Avg Build" },
            { value: 94, suffix: "%", label: "Retainer Rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-extrabold text-[clamp(48px,7vw,88px)] leading-none tracking-[-0.03em] text-foreground mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-sans font-medium tracking-[0.1em] uppercase text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
