"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { RippleButton } from "@/components/ui/ripple-button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANES = [
  {
    nombre: "Express",
    precio: "1.200",
    desc: "Landing page profesional",
    features: ["Diseño responsive", "SEO básico", "Formulario de contacto", "Entrega en 7 días", "1 revisión incluida"],
    destacado: false,
  },
  {
    nombre: "Profesional",
    precio: "2.500",
    desc: "Web multi-página completa",
    features: ["Hasta 8 páginas", "CMS integrado", "Blog", "Analytics avanzados", "Formularios pro", "SEO completo", "3 revisiones incluidas"],
    destacado: true,
  },
  {
    nombre: "Plataforma",
    precio: "5.000",
    desc: "Aplicación web a medida",
    features: ["App web completa", "Panel de administración", "API REST", "Integraciones externas", "Base de datos", "Soporte 3 meses"],
    destacado: false,
  },
];

const BONUSES = [
  { nombre: "Kit de Captación Digital", valor: "500€" },
  { nombre: "Automatización Primer Contacto", valor: "400€" },
  { nombre: "Guía Mantenimiento DIY", valor: "300€" },
  { nombre: "Auditoría de Competencia", valor: "200€" },
];

function PlanCard({ plan }: { plan: (typeof PLANES)[number] }) {
  const content = (
    <div className="p-6 md:p-8 flex flex-col h-full">
      {plan.destacado && (
        <span className="self-start text-[11px] font-mono uppercase tracking-wider px-3 py-1 bg-[#4a64eb] text-white rounded-full font-semibold mb-4">
          Más popular
        </span>
      )}
      <h3 className="text-xl font-bold text-white">{plan.nombre}</h3>
      <p className="text-sm text-[#9ca3af] mt-1">{plan.desc}</p>
      <div className="mt-5 mb-6">
        <span className="text-xs text-[#6b7280] uppercase font-mono tracking-wider">desde</span>
        <div className="mt-1">
          <span className={cn(
            "text-4xl font-bold",
            plan.destacado ? "text-[#4a64eb]" : "text-white"
          )}>
            {plan.precio}€
          </span>
        </div>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="text-sm text-[#9ca3af] flex items-center gap-2.5">
            <Check className="h-4 w-4 text-[#4a64eb] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a href="/contacto">
        <RippleButton
          rippleColor={plan.destacado ? "#4a64eb" : "#ffffff"}
          className={cn(
            "w-full py-2.5 rounded-full text-sm font-medium",
            plan.destacado
              ? "bg-[#4a64eb] text-white border-0 hover:bg-[#5b75f0]"
              : "bg-transparent text-white border border-[#2a2d3a] hover:bg-white/5"
          )}
        >
          Empezar proyecto
        </RippleButton>
      </a>
    </div>
  );

  if (plan.destacado) {
    return (
      <div className="rounded-2xl border border-[#4a64eb]/50 bg-[#1a1a24] h-full shadow-lg shadow-[#4a64eb]/10">
        {content}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] h-full hover:border-[#3a3d4a] transition-colors">
      {content}
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inView>
          <span className="inline-block px-4 py-2 rounded-full border border-[#4a64eb]/20 bg-[#4a64eb]/5 text-sm text-[#6d86f5] mb-6 text-center">Precios</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-4">
            Planes que se adaptan{" "}
            <span className="bg-gradient-to-r from-[#6d86f5] via-[#4a64eb] to-[#8b5cf6] bg-clip-text text-transparent">a tu negocio</span>
          </h2>
          <p className="text-[#888899] text-center max-w-2xl mx-auto mb-12">
            Sin sorpresas, sin letra pequeña. Elige el plan que mejor se adapte y empieza hoy.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
          {PLANES.map((plan, i) => (
            <BlurFade key={plan.nombre} delay={0.1 + i * 0.1} inView>
              <PlanCard plan={plan} />
            </BlurFade>
          ))}
        </div>


      </div>
    </section>
  );
}
