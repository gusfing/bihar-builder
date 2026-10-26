import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banquet Hall & Event Space Interior Design | Bihar Builders",
  description: "Majestic grand chandeliers, acoustic walls, customizable mood lighting, and bridal green rooms for weddings and conventions.",
};

export default function BanquetHallInteriorPage() {
  const service = siteData.services.find(s => s.id === "banquet-hall-int")!;
  return <ServiceDetailView service={service} />;
}
