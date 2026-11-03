"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  href?: string;
}

export function KontrastMark({
  size = 30,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 180"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      <clipPath id="kontrast-circle-clip">
        <circle cx="90" cy="90" r="90" />
      </clipPath>

      <g clipPath="url(#kontrast-circle-clip)">
        {/* Obsidian Base Canvas */}
        <circle cx="90" cy="90" r="90" fill="#0A0A0A" />

        {/* Specular Rim Highlight (inspired by Next.js / Apple Glass) */}
        <circle
          cx="90"
          cy="90"
          r="89"
          stroke="url(#kontrast_rim_grad)"
          strokeWidth="2"
        />

        {/* K: Left Vertical Spine */}
        <path d="M54 54h12.114v72H54z" fill="#FFFFFF" />

        {/* K: Upper Diagonal Branch */}
        <path
          d="M66.114 88.5L113 54h14l-48 44.5-12.886-10z"
          fill="url(#kontrast_upper_grad)"
        />

        {/* K: Signature Next.js Diagonal Gradient Slash (breaking bottom-right circle boundary) */}
        <path
          d="M73 87l66.999 77.845c3.334-2.231 6.51-4.68 9.509-7.325L85.5 87H73z"
          fill="url(#kontrast_slash_grad)"
        />
      </g>

      <defs>
        {/* Next.js-style fading diagonal slash */}
        <linearGradient
          id="kontrast_slash_grad"
          x1="82"
          y1="96"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="0.65" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Upper branch subtle sheen */}
        <linearGradient
          id="kontrast_upper_grad"
          x1="120"
          y1="54"
          x2="66"
          y2="92"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.85" />
        </linearGradient>

        {/* Circular specular rim gradient */}
        <linearGradient
          id="kontrast_rim_grad"
          x1="0"
          y1="0"
          x2="180"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgba(255, 255, 255, 0.35)" />
          <stop offset="0.5" stopColor="rgba(255, 255, 255, 0.1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 0.25)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  href = "/",
}: LogoProps) {
  const pixelSize = size === "sm" ? 24 : size === "lg" ? 38 : 30;
  const textSize =
    size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-2xl"
      : "text-xl";

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      <KontrastMark size={pixelSize} />
      {showText && (
        <span
          className={`font-extrabold ${textSize} tracking-[-0.035em] uppercase text-white transition-colors group-hover:text-white/90`}
        >
          KONTRAST
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="KONTRAST Digital Agency Home">
        {content}
      </Link>
    );
  }

  return content;
}
