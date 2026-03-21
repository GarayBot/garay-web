"use client";

import { Home, Briefcase, FolderOpen, Tag, HelpCircle, Mail } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const NAV_ITEMS = [
  { icon: Home, href: "#", label: "Inicio" },
  { icon: Briefcase, href: "#servicios", label: "Servicios" },
  { icon: FolderOpen, href: "#casos", label: "Casos" },
  { icon: Tag, href: "#proceso", label: "Proceso" },
  { icon: HelpCircle, href: "#faq", label: "FAQ" },
  { icon: Mail, href: "#contacto", label: "Contacto" },
];

export function DockNav() {
  return (
    <div className="md:hidden">
    <Dock
      direction="middle"
      iconSize={40}
      iconMagnification={60}
      iconDistance={140}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 border-[#2a2d3a] bg-[#1a1d27]/80 backdrop-blur-2xl"
    >
      {NAV_ITEMS.map((item) => (
        <DockIcon key={item.href} className="text-[#a0a0b0] hover:text-white transition-colors">
          <a href={item.href} aria-label={item.label}>
            <item.icon className="size-5" />
          </a>
        </DockIcon>
      ))}
      <DockIcon className="text-[#a0a0b0] hover:text-white transition-colors">
        <AnimatedThemeToggler className="flex items-center justify-center [&_svg]:size-5" />
      </DockIcon>
    </Dock>
    </div>
  );
}
