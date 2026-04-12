import type { Metadata } from "next";
import ServiceTheme from "@/components/service-theme";
import SectionHero from "@/components/shared/section-hero";
import ProblemStatement from "@/components/shared/problem-statement";
import AIPhilosophy from "@/components/ai/ai-philosophy";
import AutomationFlows from "@/components/ai/automation-flows";
import SectionProcess from "@/components/shared/section-process";
import CommonBuilds from "@/components/ai/common-builds";
import SectionTestimonials from "@/components/shared/section-testimonials";
import CrossSellStrip from "@/components/shared/cross-sell-strip";
import SectionCTA from "@/components/shared/section-cta";

export const metadata: Metadata = {
  title: "AI & Automation — Newroot",
  description:
    "Custom CRMs, workflow automation, AI assistants, and internal tools. We audit your business, find the bottlenecks, and build the fix.",
};

export default function AIPage() {
  return (
    <ServiceTheme color="#8B5CF6" colorLight="#F3F0FF" colorDark="#7C3AED">
      <SectionHero
        badge="AI & Automation"
        headlineBefore="Stop doing manually what a machine"
        headlineAccent="should handle."
        subtitle="You know AI could help. You've tried ChatGPT. But you can't bridge the gap between AI hype and your actual workflows."
      />

      <ProblemStatement
        headline="AI hype won't fix your"
        accentWord="workflows."
        body="Everyone's talking about AI. But nobody's showing you how to apply it to your specific business. You need someone who understands both the technology and your operations."
      />

      <AIPhilosophy />

      <AutomationFlows />

      <SectionProcess
        label="How it works"
        headline="Stupidly"
        accentWord="simple."
        steps={[
          { number: "01", title: "Discovery", description: "We map your workflows, find bottlenecks, and deliver a prioritised opportunity report.", detail: "$500-$1K" },
          { number: "02", title: "Build", description: "Custom solution. Tested, documented, trained. Purpose-built for your business.", detail: "2-4 weeks" },
          { number: "03", title: "Grow", description: "Monthly retainer for maintenance, iteration, and new automations as you evolve.", detail: "Ongoing" },
        ]}
      />

      <CommonBuilds />

      <SectionTestimonials service="ai" />

      <CrossSellStrip
        headline="AI automates the follow-up. But first, you need leads."
        items={[
          { label: "Websites", href: "/websites", description: "Your AI is only as good as the leads it processes. Make sure your website is generating them." },
          { label: "Content", href: "/content", description: "Build the trust and awareness that feeds your automated funnels." },
        ]}
      />

      <SectionCTA
        headline="Ready to automate the"
        accentWord="boring stuff?"
        body="Discovery audit. Real recommendations. No AI buzzword bingo."
      />
    </ServiceTheme>
  );
}
