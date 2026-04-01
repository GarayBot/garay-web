"use client";

import { useState, useEffect } from "react";
import { Home, Briefcase, FolderOpen, Tag, HelpCircle, Mail } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Home, href: "#", sectionId: "", label: "Inicio" },
  { icon: Briefcase, href: "#servicios", sectionId: "servicios", label: "Servicios" },
  { icon: FolderOpen, href: "#casos", sectionId: "casos", label: "Casos" },
  { icon: Tag, href: "#proceso", sectionId: "proceso", label: "Proceso" },
  { icon: HelpCircle, href: "#faq", sectionId: "faq", label: "FAQ" },
  { icon: Mail, href: "#contacto", sectionId: "contacto", label: "Contacto" },
];

export function DockNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Si estamos arriba del todo, Home activo
      if (window.scrollY < 300) {
        setActive("");
        return;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:hidden">
      <Dock
        direction="middle"
        iconSize={36}
        iconMagnification={36}
        disableMagnification
        iconDistance={100}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 border-[#2a2d3a] bg-[#0f1117]/90 backdrop-blur-2xl rounded-2xl px-2 h-[56px]"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.sectionId;
          return (
            <DockIcon
              key={item.href}
              disableMagnification
              className={cn(
                "transition-all duration-200",
                isActive
                  ? "text-[#4a64eb] bg-[#4a64eb]/15 ring-1 ring-[#4a64eb]/30 rounded-full"
                  : "text-[#666677]"
              )}
            >
              <a
                href={item.href}
                aria-label={item.label}
                {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-center w-full h-full"
              >
                <item.icon className="size-[18px]" strokeWidth={1.8} />
              </a>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  );
}
