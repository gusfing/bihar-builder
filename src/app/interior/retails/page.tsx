import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & Store Interior Design in Bihar | Bihar Builders",
  description: "High-conversion retail store interiors, display gondolas, point-of-sale desks, and directional lighting that drives product sales.",
};

export default function RetailsInteriorPage() {
  const service = siteData.services.find(s => s.id === "retails-int")!;
  return <ServiceDetailView service={service} />;
}
