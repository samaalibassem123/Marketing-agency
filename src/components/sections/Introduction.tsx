"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GeometricArtifact from "@/components/three/GeometricArtifact";
import GsapReveal from "@/components/animations/GsapReveal";
import { AGENCY_INFO } from "@/data/agency";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="py-28 lg:py-36 bg-[#F7F7F7] text-[#0A0A0A] relative border-t border-[#E5E5E5] overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0 bg-grid-subtle-light pointer-events-none opacity-60 z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Editorial Subheader */}
        <GsapReveal direction="up">
          <div className="text-xs uppercase tracking-wider text-[#777777] mb-8 font-semibold">
            ABOUT KONTRAST
          </div>
        </GsapReveal>

        {/* Main Grid: Headline + 3D Interactive Object */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7">
            <GsapReveal direction="up" delay={0.1}>
              <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] uppercase leading-[0.95] mb-8 text-[#0A0A0A]">
                More than an agency. <br />
                <span className="underline decoration-1 underline-offset-8">Your partner</span> in digital
                growth.
              </h2>
            </GsapReveal>

            <GsapReveal direction="up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-[#222222] font-normal leading-relaxed mb-6">
                We believe great work happens when bold design, clean code, and
                commercial strategy operate together from day one.
              </p>
              <p className="text-base text-[#777777] leading-relaxed mb-8 max-w-xl font-normal">
                Based in Tunis and working worldwide, we build digital flagships
                that make brands impossible to ignore and engineered to convert.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] hover:text-[#777777] transition-colors group"
              >
                <span>Read our story & principles</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#0A0A0A]" />
              </Link>
            </GsapReveal>
          </div>

          {/* Right Side: Three.js Interactive 3D Artifact */}
          <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
            <GsapReveal direction="right" delay={0.2}>
              <div
                className="p-8 bg-[#0A0A0A] border border-[#E5E5E5] text-white rounded-sm relative overflow-hidden"
                style={{ position: "relative" }}
              >
                {/* Three.js Canvas */}
                <GeometricArtifact />
              </div>
            </GsapReveal>
          </div>
        </div>

        {/* 4 Clean Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#E5E5E5]">
          {AGENCY_INFO.stats.map((stat, idx) => (
            <GsapReveal key={idx} direction="up" delay={idx * 0.08}>
              <div className="p-6 bg-white border border-[#E5E5E5] rounded-sm">
                <div className="font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-[#777777] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
