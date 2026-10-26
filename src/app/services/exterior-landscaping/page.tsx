import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Design & Landscaping Services | Bihar Builders",
  description: "Stunning outdoor living spaces, lawn landscaping, stone pathways, boundary facade treatments, and weather-resistant structures across Bihar.",
};

export default function ExteriorLandscapingPage() {
  const service = siteData.services.find(s => s.id === "exterior-landscaping")!;
  return <ServiceDetailView service={service} />;
}
