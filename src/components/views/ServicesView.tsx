"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import GsapReveal from "@/components/animations/GsapReveal";

export default function ServicesView() {
  const { t } = useLanguage();

  return (
    <div
      className="pt-36 pb-24 bg-[#0A0A0A] text-white relative"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20">
        <GsapReveal direction="up">
          <div className="text-xs uppercase tracking-wider text-[#777777] mb-4 font-semibold">
            {t.servicesPage.badge}
          </div>

          <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.035em] uppercase mb-8">
            {t.servicesPage.title}
          </h1>

          <p className="max-w-2xl text-xl text-[#777777] font-normal leading-relaxed mb-16">
            {t.servicesPage.subtitle}
          </p>
        </GsapReveal>

        {/* 6 Services */}
        <div className="space-y-16">
          {SERVICES.map((srv, idx) => {
            const srvData = t.services.items[srv.id];
            const title = srvData?.title || srv.title;
            const fullDescription =
              srvData?.fullDescription || srv.fullDescription;
            const metricsHighlight =
              srvData?.metricsHighlight || srv.metricsHighlight;
            const deliverables = srvData?.deliverables || srv.deliverables;

            return (
              <GsapReveal key={srv.id} direction="up" delay={idx * 0.06}>
                <div className="p-8 sm:p-12 bg-[#111111]/75 backdrop-blur-md border border-white/10 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3 text-xs text-white mb-3 font-semibold">
                        <span>{srv.number}</span>
                        <span className="text-[#555]">•</span>
                        <span>{metricsHighlight}</span>
                      </div>

                      <h2 className="font-bold text-3xl sm:text-4xl uppercase text-white mb-4 tracking-tight">
                        {title}
                      </h2>

                      <p className="text-base text-[#CCCCCC] font-normal leading-relaxed mb-6">
                        {fullDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {deliverables.map((d, i) => (
                          <Badge key={i} variant="secondary">
                            {d}
                          </Badge>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-white/70 transition-colors group"
                      >
                        <span>
                          {t.servicesPage.inquireFor} {title}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-180" />
                      </Link>
                    </div>

                    <div className="lg:col-span-6">
                      <div
                        className="relative aspect-[16/10] overflow-hidden border border-white/10 rounded-sm"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src={srv.image}
                          alt={title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover filter grayscale contrast-115 hover:filter-none hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </GsapReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
