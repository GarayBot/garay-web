"use client";

import { cn } from "@/lib/utils";

interface SectionGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowPosition?: "top" | "center" | "bottom";
}

export function SectionGlow({ 
  children, 
  className,
  glowColor = "rgba(74, 100, 235, 0.15)",
  glowPosition = "center"
}: SectionGlowProps) {
  const positionClasses = {
    top: "top-0 -translate-y-1/2",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0 translate-y-1/2"
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none",
          positionClasses[glowPosition]
        )}
        style={{ background: glowColor }}
      />
      {children}
    </div>
  );
}
