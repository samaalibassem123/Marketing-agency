import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-sm";

    const variants = {
      default:
        "bg-white text-[#0A0A0A] hover:bg-white/90 border border-white shadow-none",
      glass:
        "bg-white/[0.07] backdrop-blur-md text-white border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/[0.14] hover:border-white/30",
      secondary:
        "bg-[#111111] text-white border border-white/15 hover:bg-white hover:text-[#0A0A0A]",
      outline:
        "border border-white/20 text-white bg-transparent hover:bg-white hover:text-[#0A0A0A]",
      ghost:
        "text-white/80 hover:text-white hover:bg-white/10",
      link:
        "text-white underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      default: "h-11 px-6 py-2.5",
      sm: "h-9 px-4 text-[11px]",
      lg: "h-13 px-8 text-sm",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
