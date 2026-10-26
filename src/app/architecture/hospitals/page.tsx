import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital & Healthcare Architecture in Bihar | Bihar Builders",
  description: "Multispecialty hospitals, diagnostic centers, sterile OT suites, and clinics planned to minimize infection risks and streamline patient transit.",
};

export default function HospitalsArchitecturePage() {
  const service = siteData.services.find(s => s.id === "hospital-arch")!;
  return <ServiceDetailView service={service} />;
}
