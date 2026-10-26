import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Architecture Services in Bihar | Bihar Builders",
  description: "Custom residential architectural design, luxury villas, duplex layouts, 3D elevations, and Vastu-compliant blueprints across Bihar by Ar. Imran Ahmad.",
};

export default function ResidentialArchitecturePage() {
  const service = siteData.services.find(s => s.id === "residential-arch")!;
  return <ServiceDetailView service={service} />;
}
