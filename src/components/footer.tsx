import Link from "next/link";

const paletteColors = ["#FE6237", "#FFB62E", "#7CC3FF", "#4164FF"];

const footerLinks = {
  Services: [
    { label: "Websites", href: "/websites" },
    { label: "Content", href: "/content" },
    { label: "AI & Automation", href: "/ai" },
    { label: "Marketing & Growth", href: "/growth" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-foreground/[0.06]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-xl">
              Elemental Studios
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-4 mt-3">
              Websites, content, and AI solutions. Built to convert, delivered
              in days.
            </p>
            <div className="flex h-[3px] w-16">
              {paletteColors.map((c, i) => (
                <span key={i} className="flex-1" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[11px] mb-4 uppercase tracking-[0.1em]">
                {title}
              </h4>
              <div className="space-y-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/[0.06]">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()} Elemental Studios. All rights
            reserved.
          </p>
          <p className="text-xs text-subtle">The foundations of growth.</p>
        </div>
      </div>
    </footer>
  );
}
