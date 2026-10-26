import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital & Medical Center Construction | Bihar Builders",
  description: "Specialized clinical civil construction with lead-lined imaging enclosures, sterile HVAC ducting infrastructure, and medical gas integration.",
};

export default function HospitalsConstructionPage() {
  const service = siteData.services.find(s => s.id === "hospitals-const")!;
  return <ServiceDetailView service={service} />;
}
