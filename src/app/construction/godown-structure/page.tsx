import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godown & Industrial PEB Structure Construction | Bihar Builders",
  description: "Pre-engineered steel buildings (PEB), agro-warehouses, cold storage civil works, and heavy Tremix flooring across Bihar by Bihar Builders.",
};

export default function GodownStructureConstructionPage() {
  const service = siteData.services.find(s => s.id === "godown-structure")!;
  return <ServiceDetailView service={service} />;
}
