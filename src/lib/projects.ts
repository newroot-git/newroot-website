import type { Service } from "./services";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  services: ("websites" | "content" | "ai" | "growth")[];
  metrics: { label: string; value: string }[];
  image: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "cyberpeak",
    title: "CyberPeak",
    tagline: "IT support company, Johannesburg",
    description:
      "Full brand site shipped in under a week. Strategic design, clear service architecture, and a site that actually converts visitors into booked calls. Three retainer upsells followed the initial build.",
    services: ["websites"],
    metrics: [
      { label: "Build time", value: "6 days" },
      { label: "Retainer upsells", value: "3" },
    ],
    image: null,
    featured: true,
  },
  {
    slug: "odile-hypnose",
    title: "Odile Hypnose",
    tagline: "Hypnotherapy practice, Mauritius",
    description:
      "Complete digital setup for a hypnotherapy practice — website, booking flow, and content system. From zero online presence to a professional operation that books clients while she sleeps.",
    services: ["websites", "content"],
    metrics: [
      { label: "Services", value: "Web + Content" },
      { label: "Status", value: "In progress" },
    ],
    image: null,
    featured: false,
  },
  {
    slug: "feuilles-fleurs",
    title: "Feuilles & Fleurs",
    tagline: "Botanical business, digital overhaul",
    description:
      "Full digital and operational overhaul for a botanical business — website, WhatsApp commerce integration, and streamlined operations. A case study in bringing a traditional business online.",
    services: ["websites", "ai"],
    metrics: [
      { label: "Scope", value: "Digital + Ops" },
      { label: "Status", value: "In progress" },
    ],
    image: null,
    featured: false,
  },
];

export const serviceFilterMap: Record<string, { label: string; color: string }> = {
  websites: { label: "Websites", color: "#FF5C35" },
  content: { label: "Content", color: "#22C55E" },
  ai: { label: "AI & Automation", color: "#8B5CF6" },
  growth: { label: "Marketing & Growth", color: "#F59E0B" },
};
