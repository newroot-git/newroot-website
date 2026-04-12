"use client";

import { motion } from "framer-motion";

export default function SquigglyDivider() {
  return (
    <div className="py-8 px-6 overflow-hidden">
      <div className="max-w-[600px] mx-auto">
        <svg
          viewBox="0 0 600 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            d="M0 50 C40 15, 80 85, 120 50 C160 15, 200 85, 240 50 C280 15, 320 85, 360 50 C400 15, 440 85, 480 50 C520 15, 560 85, 600 50"
            stroke="#0055FF"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  );
}
