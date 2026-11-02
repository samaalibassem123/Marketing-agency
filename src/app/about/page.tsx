import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About Us & Philosophy",
  description:
    "We are KONTRAST — a design and engineering studio based in Tunis, working with ambitious brands worldwide.",
};

export default function AboutPage() {
  return <AboutView />;
}
