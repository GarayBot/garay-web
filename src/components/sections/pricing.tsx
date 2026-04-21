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
  return (
    <div className={cn(
      "rounded-2xl border h-full transition-all duration-500 relative overflow-hidden group flex flex-col",
      plan.destacado 
        ? "border-[#4a64eb]/30 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_40px_-15px_rgba(74,100,235,0.3)] hover:shadow-[0_0_60px_-10px_rgba(74,100,235,0.4)]"
        : "border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/[0.12]"
    )}>
      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 pointer-events-none",
        plan.destacado 
          ? "bg-gradient-to-br from-[#4a64eb]/10 via-transparent to-[#4a64eb]/5"
          : "bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]"
      )} />
      <div className={cn(
        "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-colors duration-500",
        plan.destacado 
          ? "bg-[#4a64eb]/20 group-hover:bg-[#4a64eb]/30"
          : "bg-white/[0.03] group-hover:bg-white/[0.05]"
      )} />
      
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Badge centrado arriba */}
        <div className="flex justify-center mb-6">
          {plan.destacado ? (
            <span className="text-[11px] font-mono uppercase tracking-wider px-4 py-1.5 bg-[#4a64eb] text-white rounded-full font-semibold">
              Más popular
            </span>
          ) : (
            <span className="text-[11px] font-mono uppercase tracking-wider px-4 py-1.5 text-transparent">
              .
            </span>
          )}
        </div>
        
        {/* Nombre del plan - más grande */}
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">{plan.nombre}</h3>
        <p className="text-base text-[#9ca3af] mt-2 text-center">{plan.desc}</p>
        
        {/* Precio - más grande */}
        <div className="mt-6 mb-8 text-center">
          <span className="text-sm text-[#6b7280] uppercase font-mono tracking-wider">desde</span>
          <div className="mt-2">
            <span className={cn(
              "text-5xl md:text-6xl font-bold",
              plan.destacado ? "text-[#4a64eb]" : "text-white"
            )}>
              {plan.precio}€
            </span>
          </div>
        </div>
        
        {/* Features - espacio flexible */}
        <ul className="space-y-4 mb-8 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="text-base text-[#9ca3af] flex items-center gap-3">
              <Check className="h-5 w-5 text-[#4a64eb] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        
        {/* Botón siempre abajo */}
        <a href="/contacto" className="mt-auto">
          <RippleButton
            rippleColor={plan.destacado ? "#4a64eb" : "#ffffff"}
            className={cn(
              "w-full py-3 rounded-full text-base font-medium",
              plan.destacado
                ? "bg-[#4a64eb] text-white border-0 hover:bg-[#5b75f0]"
                : "bg-transparent text-white border border-[#2a2d3a] hover:bg-white/5"
            )}
          >
            Empezar proyecto
          </RippleButton>
        </a>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl text-center">
        <BlurFade delay={0.1} inView>
          <span className="inline-block px-4 py-2 rounded-full border border-[#4a64eb]/20 bg-[#4a64eb]/5 text-sm text-[#6d86f5] mb-6 text-center">Precios</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
            Planes que se adaptan a tu negocio
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
