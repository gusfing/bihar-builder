import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Wellness Interior Design | Bihar Builders",
  description: "Tranquil massage therapy rooms, sauna cabins, aromatic treatment suites, and gentle water features for deep rejuvenation.",
};

export default function SpaInteriorPage() {
  const service = siteData.services.find(s => s.id === "spa-int")!;
  return <ServiceDetailView service={service} />;
}
