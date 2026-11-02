"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  triggerHook?: number;
}

export default function GsapReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className = "",
  triggerHook = 0.88,
}: GsapRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let x = 0;
    let y = 0;
    if (direction === "up") y = 40;
    if (direction === "down") y = -40;
    if (direction === "left") x = 40;
    if (direction === "right") x = -40;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: `top ${triggerHook * 100}%`,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, delay, duration, triggerHook]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}

