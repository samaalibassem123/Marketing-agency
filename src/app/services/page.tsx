import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore our full suite of digital growth services: Web Development, Branding, Social Media, Performance Marketing, AI Automation, and Media Production.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
