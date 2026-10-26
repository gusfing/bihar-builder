import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Building Construction in Bihar | Bihar Builders",
  description: "Heavy-load commercial complexes, shopping centers, corporate headquarters, and retail bazaars constructed by Bihar Builders.",
};

export default function CommercialConstructionPage() {
  const service = siteData.services.find(s => s.id === "commercial-const")!;
  return <ServiceDetailView service={service} />;
}
