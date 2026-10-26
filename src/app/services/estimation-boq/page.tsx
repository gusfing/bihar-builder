import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Estimation & BOQ Services | Bihar Builders",
  description: "Precise itemized Bill of Quantities (BOQ), material estimation, schedule of rates, and financial planning that eliminates budget surprises.",
};

export default function EstimationBOQPage() {
  const service = siteData.services.find(s => s.id === "estimation-boq")!;
  return <ServiceDetailView service={service} />;
}
