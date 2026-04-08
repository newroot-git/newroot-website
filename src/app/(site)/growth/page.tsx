import type { Metadata } from "next";
import ServiceTheme from "@/components/service-theme";
import SectionHero from "@/components/shared/section-hero";
import ProblemStatement from "@/components/shared/problem-statement";
import SearchDemo from "@/components/growth/search-demo";
import FunnelVisual from "@/components/growth/funnel-visual";
import ChannelsGrid from "@/components/growth/channels-grid";
import CrossSellStrip from "@/components/shared/cross-sell-strip";
import SectionCTA from "@/components/shared/section-cta";

export const metadata: Metadata = {
  title: "Marketing & Growth — Elemental Studios",
  description:
    "Google Ads, Meta Ads, SEO, email marketing, LinkedIn, WhatsApp — all connected to your website and content. Every channel. One strategy.",
};

export default function GrowthPage() {
  return (
    <ServiceTheme color="#F59E0B" colorLight="#FFFBEB" colorDark="#D97706">
      <SectionHero
        badge="Marketing & Growth"
        headlineBefore="Your customers are looking."
        headlineAccent="Can they find you?"
        subtitle="Google Ads, Meta Ads, SEO, email, LinkedIn, WhatsApp — every channel your customers use, connected into one growth strategy."
      />

      <ProblemStatement
        headline="Scattered marketing is"
        accentWord="expensive marketing."
        body="You're running ads in one place, posting content in another, and sending emails from a third. Nothing connects. Leads fall through the cracks between channels. We fix the gaps and connect the dots."
      />

      <SearchDemo />

      <FunnelVisual />

      <ChannelsGrid />

      <CrossSellStrip
        headline="Ads drive traffic. Your website converts it. Content keeps them engaged."
        items={[
          { label: "Websites", href: "/websites", description: "All that paid traffic needs somewhere to land. Make sure your website actually converts the clicks you're paying for." },
          { label: "Content", href: "/content", description: "Organic content compounds over time. Paid gets you started — content keeps the engine running." },
        ]}
      />

      <SectionCTA
        headline="Ready to stop leaving money on the"
        accentWord="table?"
        body="Free growth audit. Real data. No buzzword bingo."
      />
    </ServiceTheme>
  );
}
