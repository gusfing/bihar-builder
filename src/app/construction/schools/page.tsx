import ServiceDetailView from "@/components/ServiceDetailView";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School & College Building Construction | Bihar Builders",
  description: "Safe, durable, earthquake-engineered educational campuses, academic blocks, laboratories, and student residences built for generational longevity.",
};

export default function SchoolsConstructionPage() {
  const service = siteData.services.find(s => s.id === "schools-const")!;
  return <ServiceDetailView service={service} />;
}
