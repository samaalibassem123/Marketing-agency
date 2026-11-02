"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectItem } from "@/types";
import ProjectModal from "@/components/shared/ProjectModal";
import GsapReveal from "@/components/animations/GsapReveal";

export default function SelectedWork() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters = ["All", "Web", "Branding", "AI", "Video"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === "All") return true;
    return p.services.some((s) =>
      s.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  });

  return (
    <section
      id="work"
      className="py-28 lg:py-36 bg-[#0A0A0A] text-white relative border-t border-white/10"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <GsapReveal direction="up">
            <div className="text-xs uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              SELECTED WORK
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] uppercase">
              Recent Work.
            </h2>
          </GsapReveal>

          {/* Filter Pills */}
          <GsapReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-sm border ${
                    selectedFilter === filter
                      ? "bg-white text-[#0A0A0A] border-white font-bold shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                      : "bg-[#111111]/70 backdrop-blur-sm text-[#777777] border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </GsapReveal>
        </div>

        {/* Asymmetrical Grid of Work */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? "md:col-span-8" : "md:col-span-4";
            const aspect = isWide ? "aspect-[16/10]" : "aspect-[4/5]";

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
                onClick={() => setActiveProject(project)}
              >
                <GsapReveal direction="up" delay={idx * 0.08}>
                  {/* Image Frame */}
                  <div
                    className={`relative ${aspect} overflow-hidden border border-white/10 bg-[#111111] rounded-sm mb-5 transition-all duration-300 group-hover:border-white/40`}
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter grayscale contrast-110 group-hover:filter-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-white border border-white/10 rounded-sm">
                        {project.industry}
                      </span>
                      <span className="text-white font-bold">
                        {project.year}
                      </span>
                    </div>

                    {/* View overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="px-5 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 rounded-sm shadow-md">
                        <Eye className="w-4 h-4" />
                        <span>Case Study</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-[#0A0A0A]/75 backdrop-blur-md border border-white/10 rounded-sm flex items-center justify-between text-xs text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                      <span className="text-[#CCCCCC]">{project.impact[0]?.label}</span>
                      <span className="text-white font-bold">
                        {project.impact[0]?.metric}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short sentence */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-bold text-2xl uppercase tracking-tight text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-sm text-[#777777] line-clamp-2 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>
                </GsapReveal>
              </div>
            );
          })}
        </div>

        {/* View All Action */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-end text-xs">
          <Link
            href="/work"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors uppercase tracking-wider font-semibold"
          >
            <span>View All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
