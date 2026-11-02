import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-sm border border-white/10 bg-[#111111]/70 backdrop-blur-sm px-4 py-2 text-sm text-white placeholder:text-[#777777] focus-visible:outline-none focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.4)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
