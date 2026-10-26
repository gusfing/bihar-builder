import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Interior Design & Furnishing | Bihar Builders",
  description: "Ergonomic corporate workstations, CEO executive suites, acoustic conference rooms, and collaborative breakout zones by Bihar Builders.",
};

export default function OfficeInteriorPage() {
  const service = siteData.services.find(s => s.id === "office-int")!;
  return <ServiceDetailView service={service} />;
}
