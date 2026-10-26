import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition & Stall Interior Design | Bihar Builders",
  description: "Custom modular exhibition pavilions, expo booths, and temporary brand showcases engineered for quick setup and maximum footfall.",
};

export default function ExhibitionsInteriorPage() {
  const service = siteData.services.find(s => s.id === "exhibitions-int")!;
  return <ServiceDetailView service={service} />;
}
