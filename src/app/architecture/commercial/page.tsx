import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Architecture Services in Bihar | Bihar Builders",
  description: "High-yield commercial complex architecture, retail malls, shopping plazas, and corporate office parks designed by Bihar Builders.",
};

export default function CommercialArchitecturePage() {
  const service = siteData.services.find(s => s.id === "commercial-arch")!;
  return <ServiceDetailView service={service} />;
}
