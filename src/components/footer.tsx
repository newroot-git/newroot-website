import Link from "next/link";

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
            <Link href="/" className="inline-flex items-center">
              <img src="/newroot-logo.png" alt="Newroot" className="h-9" />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mt-3">
              Every route to growth.
            </p>
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
            &copy; {new Date().getFullYear()} Newroot. All rights
            reserved.
          </p>
          <p className="text-xs text-subtle">Every route to growth.</p>
        </div>
      </div>
    </footer>
  );
}
