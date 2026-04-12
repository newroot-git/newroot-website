import type { Metadata } from "next";
import ServiceTheme from "@/components/service-theme";
import AboutHero from "@/components/about/about-hero";
import Philosophy from "@/components/about/philosophy";
import Team from "@/components/about/team";
import SectionCTA from "@/components/shared/section-cta";

export const metadata: Metadata = {
  title: "About — Newroot",
  description:
    "Two people. No fluff. Real results. Meet the team behind Newroot.",
};

export default function AboutPage() {
  return (
    <ServiceTheme color="#0055FF" colorLight="#EBF2FF" colorDark="#0044CC">
      <AboutHero />
      <Philosophy />
      <Team />
      <SectionCTA
        headline="Ready to work with people who actually"
        accentWord="care?"
        body="Free call. Honest conversation. No sales deck."
      />
    </ServiceTheme>
  );
}
