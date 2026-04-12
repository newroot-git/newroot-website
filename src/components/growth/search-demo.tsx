"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const searchQueries = [
  {
    query: "web design agency near me",
    yourPosition: 47,
    results: [
      { title: "Ad -- TopDesign Agency -- We Build Websites", url: "topdesign.com", isAd: true },
      { title: "Ad -- QuickSites -- Website in 24 Hours", url: "quicksites.io", isAd: true },
      { title: "10 Best Web Design Agencies in 2025 -- Forbes", url: "forbes.com/business", isAd: false },
      { title: "How to Choose a Web Design Company -- HubSpot", url: "hubspot.com/marketing", isAd: false },
      { title: "Web Design Services -- Competitor Site", url: "competitor.com", isAd: false },
    ],
  },
  {
    query: "best restaurant website",
    yourPosition: 23,
    results: [
      { title: "Ad -- FoodSite Pro -- Restaurant Websites", url: "foodsitepro.com", isAd: true },
      { title: "Ad -- MenuDigital -- Online Ordering Built In", url: "menudigital.io", isAd: true },
      { title: "15 Best Restaurant Website Examples -- Eater", url: "eater.com/design", isAd: false },
      { title: "Restaurant Website Builder -- Square", url: "square.com/restaurants", isAd: false },
      { title: "How to Build a Restaurant Website -- Shopify", url: "shopify.com/blog", isAd: false },
    ],
  },
  {
    query: "ecommerce development",
    yourPosition: 31,
    results: [
      { title: "Ad -- ShopBuilder Inc -- Custom Ecommerce", url: "shopbuilder.com", isAd: true },
      { title: "Ad -- CartCraft -- Scalable Online Stores", url: "cartcraft.io", isAd: true },
      { title: "Ecommerce Development Guide 2025 -- TechCrunch", url: "techcrunch.com/ecommerce", isAd: false },
      { title: "Top Ecommerce Platforms Compared -- G2", url: "g2.com/categories", isAd: false },
      { title: "Custom Ecommerce Solutions -- Clutch", url: "clutch.co/ecommerce", isAd: false },
    ],
  },
];

const HOLD_DURATION = 4000;
const TYPE_SPEED = 60;
const DELETE_SPEED = 30;

type Phase = "typing" | "holding" | "deleting";

export default function SearchDemo() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [resultsRevealed, setResultsRevealed] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [displayedResults, setDisplayedResults] = useState(searchQueries[0].results);
  const [displayedPosition, setDisplayedPosition] = useState(searchQueries[0].yourPosition);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const holdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const query = searchQueries[activeQuery].query;

  const cleanup = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (holdRef.current) clearTimeout(holdRef.current);
  }, []);

  // Phase: typing
  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    timerRef.current = setInterval(() => {
      if (i <= query.length) {
        setTypedText(query.slice(0, i));
        i++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        // Show results after typing finishes
        setTimeout(() => {
          setResultsRevealed(true);
          setDisplayedResults(searchQueries[activeQuery].results);
          setDisplayedPosition(searchQueries[activeQuery].yourPosition);
          setResultsVisible(true);
          // Hold for a bit, then start deleting
          holdRef.current = setTimeout(() => setPhase("deleting"), HOLD_DURATION);
        }, 400);
      }
    }, TYPE_SPEED);
    return cleanup;
  }, [phase, query, activeQuery, cleanup]);

  // Phase: deleting
  useEffect(() => {
    if (phase !== "deleting") return;
    // Fade out results immediately
    setResultsVisible(false);
    let current = query.length;
    timerRef.current = setInterval(() => {
      if (current > 0) {
        current--;
        setTypedText(query.slice(0, current));
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        // Move to next query and start typing
        setActiveQuery((prev) => (prev + 1) % searchQueries.length);
        setPhase("typing");
      }
    }, DELETE_SPEED);
    return cleanup;
  }, [phase, query, cleanup]);

  return (
    <section className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        {/* Header — centered */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[11px] font-medium text-muted tracking-[0.15em] uppercase block mb-4"
          >
            The reality
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans font-bold text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.025em] mb-6"
          >
            Your customers are searching.{" "}
            <span className="font-display italic font-normal text-accent">
              Can they find you?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg leading-relaxed"
          >
            Right now, your competitors are showing up where you should be.
            Every search you&apos;re missing is revenue you&apos;re leaving on the table.
          </motion.p>
        </div>

        {/* Search demo + ranking — stacked, centered */}
        <div className="max-w-[640px] mx-auto flex flex-col items-center gap-8">
          {/* Search mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full bg-background rounded-2xl border border-foreground/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Search bar */}
            <div className="px-6 py-4 border-b border-foreground/[0.06] flex items-center gap-3">
              <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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

            {/* Results — fixed-height container, content crossfades */}
            <div
              className="transition-all duration-500 overflow-hidden"
              style={{
                minHeight: resultsRevealed ? 240 : 0,
                maxHeight: resultsRevealed ? 300 : 0,
                opacity: resultsRevealed ? 1 : 0,
              }}
            >
              <div
                className="px-6 py-4 space-y-4 transition-opacity duration-300"
                style={{ opacity: resultsVisible ? 1 : 0 }}
              >
                {displayedResults.map((result, i) => (
                  <div key={i} className="group">
                    {result.isAd && (
                      <span className="text-[10px] font-medium text-accent bg-accent/10 px-1.5 py-0.5 rounded mr-2">
                        Sponsored
                      </span>
                    )}
                    <div className="text-xs text-muted">{result.url}</div>
                    <div className="text-sm text-blue font-medium">{result.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Position callout — always mounted once revealed, number crossfades */}
          <div
            className="w-full bg-accent rounded-2xl px-8 py-8 text-center transition-all duration-500"
            style={{ opacity: resultsRevealed ? 1 : 0, transform: resultsRevealed ? "translateY(0)" : "translateY(16px)" }}
          >
            <div className="text-[64px] font-bold leading-none text-background mb-2 transition-opacity duration-300">
              #{displayedPosition}
            </div>
            <div className="text-base font-medium text-background/90 mb-1">
              That&apos;s where your business sits right now.
            </div>
            <div className="text-sm text-background/60">
              Page {Math.ceil(displayedPosition / 10)} &mdash; {displayedPosition > 10 ? "nobody scrolls this far" : "close, but not converting"}
            </div>
          </div>

          {/* Cycle indicators */}
          <div className="flex gap-2">
            {searchQueries.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeQuery === i ? "w-8 bg-accent" : "w-3 bg-foreground/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
