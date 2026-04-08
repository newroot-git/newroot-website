"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const searchQueries = [
  { query: "web design agency near me", yourPosition: 47, competitor: "TopDesign Agency" },
  { query: "best restaurant website", yourPosition: 23, competitor: "FoodSite Pro" },
  { query: "ecommerce development", yourPosition: 31, competitor: "ShopBuilder Inc" },
];

const fakeResults = [
  { title: "Ad · TopDesign Agency — We Build Websites", url: "topdesign.com", isAd: true },
  { title: "Ad · QuickSites — Website in 24 Hours", url: "quicksites.io", isAd: true },
  { title: "10 Best Web Design Agencies in 2025 — Forbes", url: "forbes.com/business", isAd: false },
  { title: "How to Choose a Web Design Company — HubSpot", url: "hubspot.com/marketing", isAd: false },
  { title: "Web Design Services — Competitor Site", url: "competitor.com", isAd: false },
];

export default function SearchDemo() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const query = searchQueries[activeQuery].query;

  useEffect(() => {
    setTypedText("");
    setShowResults(false);
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= query.length) {
        setTypedText(query.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowResults(true), 400);
      }
    }, 60);
    return () => clearInterval(typeInterval);
  }, [activeQuery, query]);

  return (
    <section className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
        >
          The reality
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.025em] max-w-[700px] mb-6"
        >
          Your customers are searching.{" "}
          <span className="font-display italic font-normal text-accent">
            Can they find you?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg leading-relaxed max-w-[520px] mb-10"
        >
          Right now, your competitors are showing up where you should be.
          Every search you&apos;re missing is revenue you&apos;re leaving on the table.
        </motion.p>

        {/* Query selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {searchQueries.map((sq, i) => (
            <button
              key={sq.query}
              onClick={() => setActiveQuery(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeQuery === i
                  ? "bg-foreground text-background"
                  : "bg-background text-muted hover:text-foreground border border-foreground/[0.06]"
              }`}
            >
              &ldquo;{sq.query}&rdquo;
            </button>
          ))}
        </div>

        {/* Search mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden max-w-[700px]"
        >
          {/* Search bar */}
          <div className="px-6 py-4 border-b border-foreground/[0.06] flex items-center gap-3">
            <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="text-foreground text-sm">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[2px] h-4 bg-foreground ml-0.5 align-middle"
              />
            </span>
          </div>

          {/* Results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-6 py-4 space-y-4"
              >
                {fakeResults.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    {result.isAd && (
                      <span className="text-[10px] font-medium text-accent bg-accent/10 px-1.5 py-0.5 rounded mr-2">
                        Sponsored
                      </span>
                    )}
                    <div className="text-xs text-muted">{result.url}</div>
                    <div className="text-sm text-blue font-medium">{result.title}</div>
                  </motion.div>
                ))}

                {/* Your position callout */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 pt-4 border-t border-foreground/[0.06]"
                >
                  <div className="flex items-center gap-3 bg-accent/[0.06] rounded-xl px-4 py-3">
                    <span className="text-2xl font-bold text-accent">
                      #{searchQueries[activeQuery].yourPosition}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        That&apos;s where your business sits right now.
                      </div>
                      <div className="text-xs text-muted">
                        Page {Math.ceil(searchQueries[activeQuery].yourPosition / 10)} — {searchQueries[activeQuery].yourPosition > 10 ? "nobody scrolls this far" : "close, but not converting"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
