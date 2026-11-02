import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "glass";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-white text-[#0A0A0A] border-transparent font-semibold",
    secondary: "bg-[#111111] text-[#777777] border-white/10",
    outline: "text-white/80 border-white/15 bg-transparent",
    accent: "bg-white/10 text-white border-white/20",
    glass:
      "bg-white/[0.06] backdrop-blur-sm text-white/90 border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-sm text-[11px] font-medium tracking-wider border uppercase transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
