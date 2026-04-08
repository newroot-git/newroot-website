import type { Metadata } from "next";
import W4wHero from "@/components/websites/w4w-hero";
import W4wSocialProof from "@/components/websites/w4w-social-proof";
import W4wProblems from "@/components/websites/w4w-problems";
import W4wSolution from "@/components/websites/w4w-solution";
import W4wHowItWorks from "@/components/websites/w4w-how-it-works";
import W4wBoringStuff from "@/components/websites/w4w-boring-stuff";
import W4wServices from "@/components/websites/w4w-services";
import W4wBenefits from "@/components/websites/w4w-benefits";
import W4wTestimonials from "@/components/websites/w4w-testimonials";
import W4wCallToAction from "@/components/websites/w4w-call-to-action";

export const metadata: Metadata = {
  title: "Websites — Elemental Studios",
  description: "Custom websites built in days, not months. AI-accelerated. Creative Director quality. Built to convert.",
};

export default function WebsitesPage() {
  return (
    <>
      <W4wHero />
      <W4wSocialProof />
      <W4wProblems />
      <W4wSolution />
      <W4wHowItWorks />
      <W4wBoringStuff />
      <W4wServices />
      <W4wBenefits />
      <W4wTestimonials />
      <W4wCallToAction />
    </>
  );
}
