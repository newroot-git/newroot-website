"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Website not converting", description: "Traffic up, revenue flat. Sound familiar?",
    visual: (
      <div className="relative w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-2 bg-white rounded-lg p-2 space-y-1.5 opacity-60">
          <div className="h-2 bg-gray-300 rounded w-1/2" /><div className="h-1 bg-gray-200 rounded w-full" /><div className="h-1 bg-gray-200 rounded w-3/4" /><div className="h-8 bg-gray-100 rounded mt-2" />
          <div className="grid grid-cols-3 gap-1 mt-1"><div className="h-6 bg-gray-100 rounded" /><div className="h-6 bg-gray-100 rounded" /><div className="h-6 bg-gray-100 rounded" /></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 15s1.5-2 4-2 4 2 4 2" /><line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" /><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" /></svg>
        </div>
      </div>
    ),
  },
  {
    title: "Content inconsistency", description: "Posting once a month isn't a strategy.",
    visual: (
      <div className="relative w-full h-32 mb-4 flex items-center justify-center">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#F0F0F2" strokeWidth="8" fill="none" />
          <motion.circle cx="50" cy="50" r="40" stroke="#EF4444" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="251" initial={{ strokeDashoffset: 251 }} whileInView={{ strokeDashoffset: 60 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: "easeOut" }} transform="rotate(-90 50 50)" />
          <text x="50" y="48" textAnchor="middle" className="fill-foreground text-lg font-bold" fontSize="18">3s</text>
          <text x="50" y="62" textAnchor="middle" className="fill-muted" fontSize="8">load time</text>
        </svg>
      </div>
    ),
  },
  {
    title: "Manual everything", description: "Your team is drowning in admin work.",
    visual: (
      <div className="relative w-full h-32 mb-4 flex items-end justify-center gap-2 px-4 pb-2">
        {[40, 55, 45, 65, 50, 70, 60, 75].map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex-1 rounded-t-md bg-gradient-to-t from-accent/20 to-accent/5" />
        ))}
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.5 }} className="absolute bottom-[35%] left-4 right-4 h-[2px] bg-red-400 origin-left" />
      </div>
    ),
  },
  {
    title: "Too many vendors", description: "Web agency, content freelancer, IT consultant. Three Slack channels.",
    visual: (
      <div className="relative w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-100 overflow-hidden flex items-center justify-center">
        <div className="relative w-3/4 h-3/4">
          <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 left-0 w-16 h-10 bg-white rounded shadow-sm border border-black/5 flex items-center justify-center"><div className="space-y-1"><div className="h-1 w-8 bg-gray-200 rounded" /><div className="h-1 w-5 bg-gray-200 rounded" /></div></motion.div>
          <motion.div animate={{ rotate: [3, -1, 3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-4 right-0 w-14 h-14 bg-white rounded shadow-sm border border-black/5 flex items-center justify-center"><div className="w-8 h-8 rounded bg-gray-100" /></motion.div>
          <motion.div animate={{ rotate: [-1, 3, -1] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute bottom-0 left-4 w-20 h-8 bg-white rounded shadow-sm border border-black/5 flex items-center justify-center"><div className="h-1 w-12 bg-gray-200 rounded" /></motion.div>
        </div>
      </div>
    ),
  },
];

export default function Problems() {
  return (
    <section className="py-[140px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} className="text-sm font-medium text-accent tracking-wide block mb-4">Sound familiar?</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[650px] mb-16">
          Is your business{" "}<span className="font-display italic font-normal">working against you?</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
              className="p-6 bg-background rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-black/[0.04] overflow-hidden">
              {problem.visual}
              <h3 className="text-lg font-semibold mb-1">{problem.title}</h3>
              <p className="text-sm text-muted">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
