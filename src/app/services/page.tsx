import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore our full suite of digital growth services: Web Development, Branding, Social Media, Performance Marketing, AI Automation, and Media Production.",
};

export default function ServicesPage() {
  return (
    <div
      className="pt-36 pb-24 bg-[#0A0A0A] text-white relative"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20">
        <div className="text-xs uppercase tracking-wider text-[#777777] mb-4 font-semibold">
          CAPABILITIES
        </div>

        <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.035em] uppercase mb-8">
          Services.
        </h1>

        <p className="max-w-2xl text-xl text-[#777777] font-normal leading-relaxed mb-16">
          Everything ambitious brands need to launch, scale, and automate.
        </p>

        {/* 6 Services */}
        <div className="space-y-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 sm:p-12 bg-[#111111]/75 backdrop-blur-md border border-white/10 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 text-xs text-white mb-3 font-semibold">
                    <span>{srv.number}</span>
                    <span className="text-[#555]">•</span>
                    <span>{srv.metricsHighlight}</span>
                  </div>

                  <h2 className="font-bold text-3xl sm:text-4xl uppercase text-white mb-4 tracking-tight">
                    {srv.title}
                  </h2>

                  <p className="text-base text-[#CCCCCC] font-normal leading-relaxed mb-6">
                    {srv.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {srv.deliverables.map((d, i) => (
                      <Badge key={i} variant="secondary">
                        {d}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-white/70 transition-colors"
                  >
                    <span>Inquire for {srv.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </Link>
                </div>

                <div className="lg:col-span-6">
                  <div
                    className="relative aspect-[16/10] overflow-hidden border border-white/10 rounded-sm"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
