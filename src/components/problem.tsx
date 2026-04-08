"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const funnelStages = [
  {
    label: "TRAFFIC",
    description: "People find you",
    issue: "Low visibility, weak SEO, no content driving awareness. People can't buy from you if they don't know you exist.",
    fix: "Content strategy + SEO",
    leakRate: 0.15,
  },
  {
    label: "WEBSITE",
    description: "They land on your site",
    issue: "Slow load, unclear value prop, outdated design. They bounce in 3 seconds. Your first impression is costing you.",
    fix: "Strategic website rebuild",
    leakRate: 0.3,
  },
  {
    label: "LEADS",
    description: "They show interest",
    issue: "No capture mechanism, weak CTAs, buried contact info. Interested visitors leave with no way to come back.",
    fix: "Conversion optimization",
    leakRate: 0.25,
  },
  {
    label: "NURTURE",
    description: "You build trust",
    issue: "No follow-up, no email, no content touchpoints. They forget about you in 48 hours.",
    fix: "Content + automation",
    leakRate: 0.2,
  },
  {
    label: "CLOSE",
    description: "They become a customer",
    issue: "Manual processes, slow response time, dropped leads. The sale that should have closed quietly dies.",
    fix: "AI + workflow automation",
    leakRate: 0.1,
  },
];

// Particle system for the funnel
interface Particle {
  id: number;
  x: number;
  y: number;
  speed: number;
  leaked: boolean;
  leakDirection: number;
  leakStage: number;
  opacity: number;
  size: number;
}

function FunnelCanvas({ isInView }: { isInView: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const nextIdRef = useRef(0);

  const createParticle = useCallback((): Particle => {
    return {
      id: nextIdRef.current++,
      x: 0.3 + Math.random() * 0.4, // normalized 0-1
      y: -0.02,
      speed: 0.001 + Math.random() * 0.001,
      leaked: false,
      leakDirection: Math.random() > 0.5 ? 1 : -1,
      leakStage: -1,
      opacity: 0.5 + Math.random() * 0.5,
      size: 2 + Math.random() * 2,
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;

    // Funnel shape: wider at top, narrower at bottom
    const funnelLeft = (y: number) => W * (0.1 + y * 0.25);
    const funnelRight = (y: number) => W * (0.9 - y * 0.25);

    let spawnTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // Spawn new particles
      spawnTimer++;
      if (spawnTimer % 8 === 0 && particlesRef.current.length < 60) {
        particlesRef.current.push(createParticle());
      }

      // Draw funnel outline (subtle)
      ctx.beginPath();
      ctx.moveTo(funnelLeft(0), 0);
      ctx.lineTo(funnelLeft(1), H);
      ctx.strokeStyle = "rgba(59, 74, 59, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(funnelRight(0), 0);
      ctx.lineTo(funnelRight(1), H);
      ctx.stroke();

      // Stage dividers
      for (let i = 1; i < 5; i++) {
        const stageY = (i / 5) * H;
        ctx.beginPath();
        ctx.moveTo(funnelLeft(i / 5), stageY);
        ctx.lineTo(funnelRight(i / 5), stageY);
        ctx.strokeStyle = "rgba(59, 74, 59, 0.04)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        if (p.leaked) {
          // Leak animation
          p.x += p.leakDirection * 0.008;
          p.y += 0.002;
          p.opacity -= 0.015;
          if (p.opacity <= 0) return false;

          const px = p.x * W;
          const py = p.y * H;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(199, 93, 44, ${p.opacity})`;
          ctx.fill();
          return true;
        }

        // Normal flow
        p.y += p.speed;

        // Check for leaks at stage boundaries
        const stageIndex = Math.floor(p.y * 5);
        if (stageIndex >= 0 && stageIndex < 5 && p.leakStage < stageIndex) {
          const stageBoundary = (stageIndex + 1) / 5;
          if (Math.abs(p.y - stageBoundary) < 0.01) {
            if (Math.random() < funnelStages[stageIndex].leakRate) {
              p.leaked = true;
              p.leakStage = stageIndex;
              return true;
            }
            p.leakStage = stageIndex;
          }
        }

        // Constrain to funnel
        const fl = funnelLeft(p.y) / W;
        const fr = funnelRight(p.y) / W;
        if (p.x < fl) p.x = fl + 0.02;
        if (p.x > fr) p.x = fr - 0.02;

        // Add slight horizontal drift
        p.x += (Math.random() - 0.5) * 0.003;

        if (p.y > 1.05) return false;

        const px = p.x * W;
        const py = p.y * H;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 74, 59, ${p.opacity * 0.6})`;
        ctx.fill();
        return true;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-36 px-6 bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="max-w-[960px] mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-muted mb-5"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.0] tracking-[-0.03em] text-foreground mb-6"
          >
            Your business is a funnel.
            <br />
            <span className="text-cta">Something&apos;s leaking.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-body leading-relaxed max-w-[520px] mx-auto"
          >
            Most businesses patch symptoms. We find the actual break in your
            funnel and fix the thing that moves the needle.
          </motion.p>
        </div>

        {/* Funnel visualization with particles */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left: funnel with animated particles */}
          <div className="relative" style={{ height: "500px" }}>
            <FunnelCanvas isInView={isInView} />

            {/* Stage labels overlaid on funnel */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-auto">
              {funnelStages.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className={`flex-1 flex items-center justify-center cursor-pointer transition-all duration-200 rounded-xl mx-4 ${
                    activeStage === i
                      ? "bg-accent/[0.06]"
                      : "hover:bg-accent/[0.03]"
                  }`}
                  onMouseEnter={() => setActiveStage(i)}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  <div className="text-center">
                    <span className="font-display font-bold text-xs tracking-[0.1em] text-foreground">
                      {stage.label}
                    </span>
                    <span className="hidden md:inline text-xs text-body/50 ml-2">
                      {stage.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: detail panel */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="sticky top-[100px]"
            >
              {activeStage !== null ? (
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-background rounded-2xl p-8"
                >
                  {/* Stage header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block w-8 h-8 rounded-lg bg-cta-light flex items-center justify-center">
                      <span className="font-display font-bold text-sm text-cta">
                        {String(activeStage + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="font-display font-bold text-lg text-foreground">
                      {funnelStages[activeStage].label}
                    </span>
                  </div>

                  {/* Issue */}
                  <p className="text-body leading-relaxed mb-5">
                    {funnelStages[activeStage].issue}
                  </p>

                  {/* Fix */}
                  <div className="flex items-center gap-2 pt-4 border-t border-surface">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-accent">
                      The fix: {funnelStages[activeStage].fix}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-background rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px]">
                  {/* Animated prompt */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-muted/40 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-sm text-muted text-center leading-relaxed">
                    Hover a stage to see
                    <br />
                    where it breaks and how we fix it
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
