import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym & Fitness Center Interior Design | Bihar Builders",
  description: "High-energy fitness studios, shock-absorbent rubber flooring, panoramic mirrors, ventilation systems, and motivating lighting.",
};

export default function GymInteriorPage() {
  const service = siteData.services.find(s => s.id === "gym-int")!;
  return <ServiceDetailView service={service} />;
}
