import { services } from "./services";

export interface NavChild {
  label: string;
  href: string;
  description: string;
  color: string;
  colorLight: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navLinks: NavLink[] = [
  {
    label: "Services",
    href: "/websites",
    children: services.map((s) => ({
      label: s.label,
      href: s.href,
      description: s.description,
      color: s.color,
      colorLight: s.colorLight,
    })),
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
