import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel & Hospitality Architecture in Bihar | Bihar Builders",
  description: "Boutique hotels, luxury resorts, banquet complexes, and highway motels tailored for exceptional guest journeys and smooth back-of-house operations.",
};

export default function HotelArchitecturePage() {
  const service = siteData.services.find(s => s.id === "hotel-arch")!;
  return <ServiceDetailView service={service} />;
}
