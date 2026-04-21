"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe, Bot, Cog, ShoppingCart, Link, Rocket } from "lucide-react";

import { SectionGlow } from "@/components/ui/section-glow";

const SERVICIOS = [
  {
    Icon: Globe,
    name: "Webs que Convierten",
    description: "Páginas web modernas que transforman visitantes en clientes. Animaciones fluidas, diseño a medida, optimizadas para SEO y velocidad. Nada de plantillas.",
    href: "/contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#4a64eb]/10 to-transparent" />,
  },
  {
    Icon: Cog,
    name: "Apps a Medida",
    description: "Dashboards, CRMs, plataformas de formación, sistemas de reservas. Construido exactamente como lo necesitas, por nuestro equipo.",
    href: "/contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    Icon: Bot,
    name: "Soluciones con IA",
    description: "Chatbots de WhatsApp 24/7, workflows automáticos, herramientas que analizan datos por ti. Ahorra +20h/semana.",
    href: "/contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />,
  },
  {
    Icon: ShoppingCart,
    name: "E-Commerce",
    description: "Tiendas online con Stripe, gestión de inventario y envíos. Todo integrado para vender más con menos esfuerzo.",
    href: "/contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />,
  },
  {
    Icon: Link,
    name: "Integraciones",
    description: "Conectamos tu CRM, email marketing, WhatsApp y facturación en un flujo unificado. Deja de copiar datos a mano.",
    href: "/contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
  {
    Icon: Rocket,
    name: "Soporte Continuo",
    description: "Tu departamento técnico sin contratar. Mantenimiento, actualizaciones y nuevas funcionalidades. Respondemos en horas.",
    href: "/contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />,
  },
];

export function Servicios() {
  return (
    <SectionGlow className="py-24 px-4 md:px-6" glowColor="rgba(74, 100, 235, 0.08)">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inView>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3 text-center">Nuestros Servicios</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-4">Soluciones que hacen crecer tu negocio</h2>
          <p className="text-[#888899] text-center max-w-2xl mx-auto mb-14">Cada proyecto es único. Sin plantillas, sin atajos, sin intermediarios.</p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <BentoGrid>
            {SERVICIOS.map((s, i) => (
              <BentoCard key={i} {...s} />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </SectionGlow>
  );
}
