"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const ctx = gsap.context(() => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.2,
        effects: false,
        smoothTouch: 0.1,
      });
    });

    // Handle internal anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const isHome =
        window.location.pathname === "/" || window.location.pathname === "";
      let hash = "";

      if (href.startsWith("#")) {
        hash = href;
      } else if (isHome && href.startsWith("/#")) {
        hash = href.slice(1);
      }

      if (hash && hash.length > 1) {
        const targetEl = document.querySelector(hash);
        if (targetEl && smootherRef.current) {
          e.preventDefault();
          smootherRef.current.scrollTo(targetEl, true, "top top");
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      ctx.revert();
    };
  }, []);

  // Sync and refresh ScrollTrigger on route navigation
  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTop(0);
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  return (
    <div
      id="smooth-wrapper"
      ref={wrapperRef}
      className="w-full min-h-screen overflow-hidden"
    >
      <div
        id="smooth-content"
        ref={contentRef}
        className="w-full flex flex-col min-h-screen"
      >
        {children}
      </div>
    </div>
  );
}

