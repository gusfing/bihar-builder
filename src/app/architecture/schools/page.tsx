import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School & Educational Institution Architecture | Bihar Builders",
  description: "Modern schools, university campuses, laboratories, and auditoriums designed for child safety, interactive learning, and collaborative growth.",
};

export default function SchoolsArchitecturePage() {
  const service = siteData.services.find(s => s.id === "school-arch")!;
  return <ServiceDetailView service={service} />;
}
