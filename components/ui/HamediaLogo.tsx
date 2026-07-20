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
  // Icon-only variant renders the textless icon mark directly
  if (variant === "icon") {
    return (
      <div className={cn("select-none flex items-center justify-center", className)}>
        <img 
          src="/icon.png" 
          className={cn("w-auto object-contain", iconClassName || "h-16")} 
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
      !light && "glass-dark bg-black/40 backdrop-blur-md pt-[22px] pb-[10px] px-[14px] rounded-2xl border border-white/10 shadow-md",
      className
    )}>
      <img 
        src="/logo.png" 
        className={cn("w-auto object-contain scale-[1.3] translate-y-1 origin-center", iconClassName || "h-16")} 
        alt="Hamedia Investments" 
      />
    </div>
  );
};
