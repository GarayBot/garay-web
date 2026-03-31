"use client";

import { Logo } from "@/components/ui/logo";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  return (
    <header className="hidden md:block fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 pt-4">
        <nav className="flex w-full items-center justify-between gap-6 rounded-full border border-[#2a2d3a] bg-[#1a1d27]/80 backdrop-blur-2xl px-6 py-3">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <Logo size="sm" />
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a0a0b0] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/contacto"
            className="shrink-0 rounded-full bg-[#4a64eb] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5b75f0]"
          >
            Reserva tu llamada
          </a>
        </nav>
      </div>
    </header>
  );
}
