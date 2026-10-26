import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showroom Interior Design in Bihar | Bihar Builders",
  description: "Expansive automobile, ceramic tile, sanitaryware, and furniture showroom interiors with grand showcase lighting and VIP customer lounges.",
};

export default function ShowroomInteriorPage() {
  const service = siteData.services.find(s => s.id === "showroom-int")!;
  return <ServiceDetailView service={service} />;
}
