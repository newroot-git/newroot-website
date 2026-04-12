"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";
import { services } from "@/lib/services";

// Map pathname to its service color
function getActiveServiceColor(pathname: string): string | null {
  const service = services.find((s) => s.href === pathname);
  return service ? service.color : null;
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const activeColor = getActiveServiceColor(pathname);
  const isServicePage = activeColor !== null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo with element dots */}
        <Link href="/" className="inline-flex items-center">
          <img src="/newroot-logo.png" alt="Newroot" className="h-7" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-[15px] transition-colors duration-200 flex items-center gap-1 ${
                    isServicePage ? "font-medium" : "text-muted hover:text-foreground"
                  }`}
                  style={isServicePage ? { color: activeColor! } : undefined}
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[280px] bg-background rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-black/[0.06] p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 rounded-xl transition-all duration-150"
                          style={{
                            backgroundColor: pathname === child.href ? child.colorLight : undefined,
                          }}
                          onMouseEnter={(e) => {
                            if (pathname !== child.href) {
                              e.currentTarget.style.backgroundColor = child.colorLight;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (pathname !== child.href) {
                              e.currentTarget.style.backgroundColor = "transparent";
                            }
                          }}
                        >
                          <div
                            className="text-sm font-medium transition-colors"
                            style={{ color: pathname === child.href ? child.color : undefined }}
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: child.color }}
                              />
                              {child.label}
                            </span>
                          </div>
                          <div className="text-xs text-muted mt-0.5 pl-4">{child.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] transition-colors duration-200 ${
                  pathname === link.href ? "text-foreground font-medium" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex h-10 px-5 items-center justify-center rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-all duration-200 hover:shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
        >
          Book a call
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background border-t border-black/[0.06] px-6 py-6 space-y-4"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="text-lg text-foreground flex items-center gap-2"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 mt-2 space-y-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: child.color }} />
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="block text-lg text-foreground">
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="block w-full h-12 flex items-center justify-center rounded-lg bg-foreground text-background font-medium mt-4"
            >
              Book a call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
