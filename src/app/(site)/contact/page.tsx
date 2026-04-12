import type { Metadata } from "next";
import ServiceTheme from "@/components/service-theme";
import ContactContent from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact — Newroot",
  description:
    "No pitch. No pressure. Just an honest conversation about where you are and whether we can help.",
};

export default function ContactPage() {
  return (
    <ServiceTheme color="#0055FF" colorLight="#EBF2FF" colorDark="#0044CC">
      <ContactContent />
    </ServiceTheme>
  );
}
