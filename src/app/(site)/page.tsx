import ServiceTheme from "@/components/service-theme";
import HomeHero from "@/components/home/hero";
import ValueStatement from "@/components/value-statement";
import PortfolioShowcase from "@/components/home/portfolio-showcase";
import ServicesOverview from "@/components/home/services-overview";
import HowWeWork from "@/components/how-we-work";
import SectionTestimonials from "@/components/shared/section-testimonials";
import SectionCTA from "@/components/shared/section-cta";

export default function Home() {
  return (
    <ServiceTheme color="#0055FF" colorLight="#EBF2FF" colorDark="#0044CC">
      <HomeHero />
      <ValueStatement />
      <PortfolioShowcase />
      <ServicesOverview />
      <HowWeWork />
      <SectionTestimonials />
      <SectionCTA
        headline="Ready to find out what's"
        accentWord="possible?"
        body="Free discovery. Real answers. No 47-slide proposal."
      />
    </ServiceTheme>
  );
}
