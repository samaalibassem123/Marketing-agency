import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "glass" | "glass-elevated";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", ...props }, ref) => {
    const variants = {
      solid: "bg-[#111111] border border-white/10",
      glass:
        "bg-[#111111]/75 backdrop-blur-md border border-white/10 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)]",
      "glass-elevated":
        "bg-white/[0.06] backdrop-blur-xl border border-white/20 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-sm text-white transition-all duration-300",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-[#777777] font-normal leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

