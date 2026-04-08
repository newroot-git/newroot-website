import type { Metadata } from "next";
import ServiceTheme from "@/components/service-theme";
import ContentOverwhelm from "@/components/content/content-overwhelm";
import WhyContent from "@/components/content/why-content";
import PlatformShowcase from "@/components/content/platform-showcase";
import CompoundingEffect from "@/components/content/compounding-effect";
import ContentPipeline from "@/components/content/content-pipeline";
import SectionTestimonials from "@/components/shared/section-testimonials";
import CrossSellStrip from "@/components/shared/cross-sell-strip";
import SectionCTA from "@/components/shared/section-cta";

export const metadata: Metadata = {
  title: "Content — Elemental Studios",
  description:
    "Consistent, quality content across every channel. AI-powered production, directed by a Creative Director. Show up every day without the overhead.",
};

export default function ContentPage() {
  return (
    <ServiceTheme color="#22C55E" colorLight="#ECFDF5" colorDark="#16A34A">
      <ContentOverwhelm />
      <WhyContent />
      <PlatformShowcase />
      <CompoundingEffect />
      <ContentPipeline />
      <SectionTestimonials service="content" />

      <CrossSellStrip
        headline="Content drives traffic. Your website converts it."
        items={[
          { label: "Websites", href: "/websites", description: "All that content needs somewhere to land. Make sure your website actually converts." },
          { label: "AI & Automation", href: "/ai", description: "Automate distribution, scheduling, and repurposing so content runs on autopilot." },
        ]}
      />

      <SectionCTA
        headline="Ready to stop being"
        accentWord="invisible?"
        body="Free call. Content strategy. No 47-slide proposal."
      />
    </ServiceTheme>
  );
}
