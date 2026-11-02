import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact & Start a Project",
  description:
    "Start a conversation with KONTRAST. Tell us about your objectives, timeline, and scope. A senior partner will review your brief within 24 hours.",
};

export default function ContactPage() {
  return <ContactView />;
}
