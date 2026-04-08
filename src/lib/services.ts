export interface Service {
  tag: string;
  label: string;
  href: string;
  description: string;
  icon: string;
  color: string;
  colorLight: string;
  element: string;
}

export const services: Service[] = [
  {
    tag: "WEBSITES",
    label: "Websites",
    href: "/websites",
    description: "Custom sites shipped in days, not months",
    icon: "monitor",
    color: "#FF5C35",
    colorLight: "#FFF0EC",
    element: "Fire",
  },
  {
    tag: "CONTENT",
    label: "Content",
    href: "/content",
    description: "Consistent content at scale",
    icon: "pen",
    color: "#22C55E",
    colorLight: "#ECFDF5",
    element: "Earth",
  },
  {
    tag: "AI & AUTOMATION",
    label: "AI & Automation",
    href: "/ai",
    description: "Workflow automation that saves hours",
    icon: "bolt",
    color: "#8B5CF6",
    colorLight: "#F3F0FF",
    element: "Air",
  },
  {
    tag: "GROWTH",
    label: "Marketing & Growth",
    href: "/growth",
    description: "SEO, ads, email, and organic growth",
    icon: "chart",
    color: "#F59E0B",
    colorLight: "#FFFBEB",
    element: "Gold",
  },
];

// Hub/Elemental = Blue (Water)
export const hubColor = "#0055FF";
export const hubColorLight = "#EBF2FF";
