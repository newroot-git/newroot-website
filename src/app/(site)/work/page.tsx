import type { Metadata } from "next";
import ServiceTheme from "@/components/service-theme";
import FeaturedProject from "@/components/work/featured-project";
import ProjectGrid from "@/components/work/project-grid";
import SectionCTA from "@/components/shared/section-cta";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work — Newroot",
  description:
    "Real projects, real results. See how we help businesses grow with websites, content, AI, and marketing.",
};

export default function WorkPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <ServiceTheme color="#0055FF" colorLight="#EBF2FF" colorDark="#0044CC">
      {featured && <FeaturedProject project={featured} />}
      <ProjectGrid projects={rest} />
      <SectionCTA
        headline="Want results like"
        accentWord="these?"
        body="Free call. We'll tell you exactly what we'd do differently."
      />
    </ServiceTheme>
  );
}
