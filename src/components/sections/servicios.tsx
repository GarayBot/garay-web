"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Globe, Bot, Database, Users, FileText, BarChart3 } from "lucide-react";

const SERVICIOS = [
  {
    Icon: Globe,
    name: "Desarrollo Web",
    description: "Webs a medida, landing pages y e-commerce de alto rendimiento. Presencia online profesional que genera confianza y convierte.",
    href: "#contacto",
    cta: "Saber más",
    gradient: "from-[#4a64eb]/20 to-transparent",
  },
  {
    Icon: Bot,
    name: "IA & Chatbots",
    description: "Asistentes inteligentes que atienden, cualifican y automatizan 24/7. Para empresas que reciben +20 consultas al día.",
    href: "#contacto",
    cta: "Saber más",
    gradient: "from-indigo-600/20 to-transparent",
  },
  {
    Icon: Database,
    name: "Hub de Operaciones",
    description: "Deja de hacer malabarismos con 6 herramientas. Todo en un solo sitio con datos en tiempo real.",
    href: "#contacto",
    cta: "Saber más",
    gradient: "from-cyan-600/20 to-transparent",
  },
  {
    Icon: Users,
    name: "Onboarding Automático",
    description: "Cada nuevo cliente recibe una experiencia profesional sin follow-up manual. Flujo automático tras el pago.",
    href: "#contacto",
    cta: "Saber más",
    gradient: "from-emerald-600/20 to-transparent",
  },
  {
    Icon: FileText,
    name: "Contenido con IA",
    description: "Nunca te quedes sin contenido. La IA genera, adapta y publica por ti en +10 formatos.",
    href: "#contacto",
    cta: "Saber más",
    gradient: "from-orange-600/20 to-transparent",
  },
  {
    Icon: BarChart3,
    name: "Dashboards en Vivo",
    description: "Decisiones más rápidas con visibilidad instantánea de ventas, operaciones y métricas clave.",
    href: "#contacto",
    cta: "Saber más",
    gradient: "from-pink-600/20 to-transparent",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
          <p className="mt-3 text-[#888899]">Soluciones completas para eliminar procesos manuales.</p>
        </motion.div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[20rem]">
          {SERVICIOS.map((s, i) => (
            <BentoCard
              key={s.name}
              name={s.name}
              description={s.description}
              Icon={s.Icon}
              href={s.href}
              cta={s.cta}
              className={i < 2 ? "lg:col-span-1 md:col-span-1" : "col-span-1"}
              background={
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-50`} />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
