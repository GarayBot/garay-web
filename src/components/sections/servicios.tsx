"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe, Bot, Database, Users, FileText, BarChart3 } from "lucide-react";

const SERVICIOS = [
  {
    Icon: Globe,
    name: "Desarrollo Web",
    description: "Webs a medida, landing pages y e-commerce de alto rendimiento con tecnología de vanguardia.",
    href: "#contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#4a64eb]/10 to-transparent" />,
  },
  {
    Icon: Bot,
    name: "IA & Chatbots",
    description: "Asistentes inteligentes para WhatsApp, email y atención al cliente. Tu negocio, 24/7.",
    href: "#contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    Icon: Database,
    name: "CRM & Integraciones",
    description: "Deja de hacer malabarismos con 6 herramientas. Centraliza todo en un solo sistema conectado.",
    href: "#contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />,
  },
  {
    Icon: Users,
    name: "Consultoría & Formación",
    description: "Te guiamos para que tu equipo domine las herramientas sin depender de nadie.",
    href: "#contacto",
    cta: "Saber más",
    className: "col-span-1 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />,
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inView>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3 text-center">Nuestros Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">Soluciones completas para tu negocio</h2>
          <p className="text-[#888899] text-center max-w-2xl mx-auto mb-14">Desde tu web hasta la automatización total.</p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <BentoGrid>
            {SERVICIOS.map((s, i) => (
              <BentoCard key={i} {...s} />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  );
}
