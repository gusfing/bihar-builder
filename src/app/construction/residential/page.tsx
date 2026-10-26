import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Building Construction in Bihar | Bihar Builders",
  description: "Turnkey residential civil construction for villas, independent homes, and apartments with certified TMT 550D steel and precision concrete.",
};

export default function ResidentialConstructionPage() {
  const service = siteData.services.find(s => s.id === "residential-const")!;
  return <ServiceDetailView service={service} />;
}
