import React from "react";
import { cn } from "@/lib/utils";

interface HamediaLogoProps {
  className?: string;
  iconClassName?: string;
  variant?: "full" | "icon";
  light?: boolean; // Determines if we are on a dark backdrop (no wrapper needed) or light backdrop (dark glass badge wrapper needed)
  titleClassName?: string;
  subtitleClassName?: string;
  stripesClassName?: string;
}

export const HamediaLogo: React.FC<HamediaLogoProps> = ({
  className,
  iconClassName,
  variant = "full",
  light = false,
  titleClassName,
  subtitleClassName,
  stripesClassName,
}) => {
  // Icon-only variant crops the top portion of the PNG to isolate the logo mark
  if (variant === "icon") {
    return (
      <div 
        className={cn(
          "overflow-hidden relative flex items-center justify-center rounded-lg bg-black/5 border border-black/5", 
          iconClassName
        )}
        style={{ aspectRatio: "1/1" }}
      >
        <img 
          src="/logo.png" 
          className="absolute top-0 left-0 w-full h-full scale-[1.45] origin-top translate-y-[2%]" 
          alt="Hamedia Investments Icon" 
        />
      </div>
    );
  }

  // Full variant loads the high-res transparent PNG directly
  return (
    <div className={cn(
      "select-none flex items-center justify-center transition-all duration-300", 
      // Wrap in a dark glassy badge on light containers so the cream text is perfectly visible
      !light && "glass-dark bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-md",
      className
    )}>
      <img 
        src="/logo.png" 
        className={cn("h-16 w-auto object-contain", iconClassName)} 
        alt="Hamedia Investments" 
      />
    </div>
  );
};
