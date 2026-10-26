import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel & Resort Interior Design | Bihar Builders",
  description: "Opulent hotel lobbies, serene guest suites, themed fine-dining restaurants, and ambient corridors crafted for lasting memory.",
};

export default function HotelInteriorPage() {
  const service = siteData.services.find(s => s.id === "hotel-int")!;
  return <ServiceDetailView service={service} />;
}
