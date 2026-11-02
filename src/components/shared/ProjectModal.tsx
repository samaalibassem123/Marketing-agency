"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#111111]/90 backdrop-blur-2xl text-white border border-white/15 rounded-sm overflow-y-auto flex flex-col shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#111111]/85 backdrop-blur-md border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs text-white uppercase tracking-wider font-semibold">
                  Case Study
                </span>
                <span className="text-white/20">/</span>
                <span className="text-xs text-[#777777] uppercase">
                  {project.industry}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 border border-white/10 hover:bg-white/10 text-white rounded-sm transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Title & Metadata */}
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl tracking-tight mb-4 text-white uppercase">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.map((srv, idx) => (
                    <Badge key={idx} variant="secondary">
                      {srv}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Main Image */}
              <div
                className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 rounded-sm"
                style={{ position: "relative" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>

              {/* Impact Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                {project.impact.map((imp, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {imp.metric}
                    </span>
                    <span className="text-xs text-[#777777] uppercase tracking-wider mt-1">
                      {imp.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Narrative: Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 bg-white/[0.03] border border-white/10 rounded-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <h4 className="text-xs uppercase tracking-wider text-white mb-2 font-semibold">
                    The Challenge
                  </h4>
                  <p className="text-sm text-[#777777] leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 bg-white/[0.03] border border-white/10 rounded-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <h4 className="text-xs uppercase tracking-wider text-white mb-2 font-semibold">
                    Our Solution & Implementation
                  </h4>
                  <p className="text-sm text-[#777777] leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Full Description & Deep Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-white mb-3 font-semibold">
                  Scope & Execution
                </h4>
                <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed font-normal">
                  {project.fullDescription}
                </p>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="p-6 sm:p-8 border-l-2 border-white bg-white/[0.03] border-y border-r border-white/10 rounded-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <p className="italic text-lg text-white mb-4 font-normal">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-xs">
                      {project.testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">
                        {project.testimonial.author}
                      </div>
                      <div className="text-[11px] text-[#777777]">
                        {project.testimonial.role} — {project.client}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#777777]">
                  Project completed in {project.year} • All rights reserved
                </span>
                <Link href="/#contact" onClick={onClose}>
                  <Button variant="default" size="sm" className="gap-2">
                    <span>Build A Similar Platform</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
