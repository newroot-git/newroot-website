import Navigation from "@/components/navigation";
import FunnelIndicator from "@/components/funnel-indicator";
import Footer from "@/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <FunnelIndicator />
      <main>{children}</main>
      <Footer />
    </>
  );
}
