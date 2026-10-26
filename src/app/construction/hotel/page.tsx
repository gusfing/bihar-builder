import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel & Hospitality Construction in Bihar | Bihar Builders",
  description: "Precision civil works and structural builds for hotels, resorts, banquets, and leisure complexes with acoustic insulation and swimming pool waterproofing.",
};

export default function HotelConstructionPage() {
  const service = siteData.services.find(s => s.id === "hotel-const")!;
  return <ServiceDetailView service={service} />;
}
