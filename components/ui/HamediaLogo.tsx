import React from "react";
import { cn } from "@/lib/utils";

interface HamediaLogoProps {
  className?: string;
  iconClassName?: string;
  variant?: "full" | "icon";
  light?: boolean; // If true, renders text in white (useful on dark/red backgrounds)
}

export const HamediaLogo: React.FC<HamediaLogoProps> = ({
  className,
  iconClassName,
  variant = "full",
  light = false,
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      {/* SVG Icon */}
      <svg
        viewBox="0 0 120 120"
        className={cn("w-16 h-16 transition-transform duration-300 hover:scale-105", iconClassName)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Organic H Shape Clip Path */}
          <clipPath id="h-organic-clip">
            <path d="M 32,33 C 32,28 36,24 41,24 C 46,24 50,28 50,33 L 50,46 C 50,49 52,51 55,51 L 63,51 C 66,51 68,49 68,46 L 68,33 C 68,28 72,24 77,24 C 82,24 86,28 86,33 L 86,79 C 86,84 82,88 77,88 C 72,88 68,84 68,79 L 68,66 C 68,63 66,61 63,61 L 55,61 C 52,61 50,63 50,66 L 50,79 C 50,84 46,88 41,88 C 36,88 32,84 32,79 Z" />
          </clipPath>
        </defs>

        {/* Floating Blue Circle on Top Left */}
        <circle cx="41" cy="11" r="7" fill="#0062AC" />

        {/* H Shape Group with Stripes */}
        <g clipPath="url(#h-organic-clip)">
          {/* Top Stripe (Red) */}
          <rect x="20" y="24" width="80" height="21.3" fill="#E21A37" />
          {/* Middle Stripe (Blue) */}
          <rect x="20" y="45.3" width="80" height="21.3" fill="#0062AC" />
          {/* Bottom Stripe (Gold) */}
          <rect x="20" y="66.6" width="80" height="21.4" fill="#FFBA00" />
        </g>

        {/* White Silhouette Map of Afghanistan */}
        {/* Centered over the crossbar of the H */}
        <path
          d="M 46,55 
             C 45,52 47,48 50,47 
             C 52,46 55,48 56,46 
             C 57,44 56,42 59,42 
             C 61,42 63,39 66,39 
             C 68,39 72,36 74,36 
             C 75,36 76,37 76,39 
             C 75,40 72,40 71,42 
             C 70,43 72,44 71,45 
             C 70,46 67,45 66,47 
             C 65,49 67,51 67,53 
             C 67,55 69,56 69,58 
             C 69,60 66,61 64,62 
             C 62,63 61,65 59,65 
             C 57,65 55,63 54,63 
             C 53,63 51,65 49,65 
             C 47,65 46,63 46,61 
             C 46,59 48,58 48,57 
             C 48,56 46,56 46,55 Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Brand Text Elements (Only shown in full variant) */}
      {variant === "full" && (
        <div className="flex flex-col items-center mt-2">
          {/* HAMEDIA */}
          <span
            className={cn(
              "font-serif text-lg font-black tracking-widest leading-none",
              light ? "text-white" : "text-brand-charcoal"
            )}
          >
            HAMEDIA
          </span>
          {/* INVESTMENTS */}
          <span
            className={cn(
              "font-sans text-[9px] font-bold tracking-[0.25em] mt-0.5 uppercase leading-none",
              light ? "text-brand-cream-light opacity-90" : "text-brand-gray"
            )}
          >
            INVESTMENTS
          </span>

          {/* Underline stripes */}
          <div className="flex gap-1 items-center mt-1.5 w-14 h-0.5">
            <div className="flex-1 h-full bg-[#E21A37]" />
            <div className="flex-1 h-full bg-[#0062AC]" />
            <div className="flex-1 h-full bg-[#FFBA00]" />
          </div>
        </div>
      )}
    </div>
  );
};
