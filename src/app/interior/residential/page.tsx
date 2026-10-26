import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Interior & Modular Kitchen in Bihar | Bihar Builders",
  description: "Bespoke home interiors, modular kitchens with marine plywood, custom wardrobes, false ceilings, and ambient mood lighting by Bihar Builders.",
};

export default function ResidentialInteriorPage() {
  const service = siteData.services.find(s => s.id === "residential-int")!;
  return <ServiceDetailView service={service} />;
}
