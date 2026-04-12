import type { Metadata } from "next";
import DiagnosticFlow from "@/components/start/diagnostic-flow";

export const metadata: Metadata = {
  title: "Get Your Diagnosis — Newroot",
  description:
    "Takes 60 seconds. No email required. Find out what's holding your business back and get a personalised recommendation.",
};

export default function StartPage() {
  return <DiagnosticFlow />;
}
