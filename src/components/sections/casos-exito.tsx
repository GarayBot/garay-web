"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CASOS = [
  {
    titulo: "CRM que duplicó ventas en 6 meses",
    empresa: "Spikes Energía • Ahorro energético",
    tags: ["CRM", "Automatización", "Next.js"],
    desc: "Sistema completo de gestión de clientes, contratos y documentación. Eliminó 400+ horas de trabajo manual al mes y redujo el equipo de administración un 67%.",
    metricas: [
      { valor: "400+", label: "Horas manuales eliminadas" },
      { valor: "67%", label: "Reducción equipo admin" },
    ],
  },
  {
    titulo: "Chatbot WhatsApp con IA para tarifas",
    empresa: "Luzia • Energía",
    tags: ["IA", "WhatsApp API", "Node.js"],
    desc: "Bot inteligente que compara tarifas energéticas, genera informes PDF automáticos y atiende consultas 24/7. Más de 500 comparativas mensuales sin intervención humana.",
    metricas: [
      { valor: "24/7", label: "Disponibilidad" },
      { valor: "500+", label: "Comparativas/mes" },
    ],
  },
  {
    titulo: "Plataforma deportiva de gestión",
    empresa: "Impakta • Deportes",
    tags: ["Next.js", "Prisma", "SQLite"],
    desc: "Gestión completa de jugadores, estadísticas y seguimiento de rendimiento. 3x más rápido que el sistema anterior basado en Excel.",
    metricas: [
      { valor: "3x", label: "Más rápido que Excel" },
      { valor: "100+", label: "Jugadores gestionados" },
    ],
  },
];

function CasoCard({ caso }: { caso: typeof CASOS[number] }) {
  return (
    <div className="min-w-[340px] snap-start rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] p-8 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b75f0]/20 to-transparent" />
      <h3 className="text-lg font-bold text-white leading-tight">{caso.titulo}</h3>
      <p className="mt-2 text-xs text-[#666677]">{caso.empresa}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {caso.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-md border border-[#333344] bg-[#222230] text-[#aaaabc]">{tag}</span>
        ))}
      </div>
      <p className="mt-5 text-sm text-[#777788] leading-relaxed flex-1">{caso.desc}</p>
      <div className="mt-6 flex gap-8">
        {caso.metricas.map((m) => (
          <div key={m.label}>
            <p className="text-2xl font-bold text-white">{m.valor}</p>
            <p className="text-xs text-[#666677] mt-1">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CasosExito() {
  return (
    <section id="casos" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Casos de Éxito</h2>
          <p className="mt-3 text-[#888899]">Resultados reales de empresas reales con nuestras soluciones.</p>
        </motion.div>

        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0f1117] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0f1117] to-transparent" />

          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {CASOS.map((caso) => (
              <CasoCard key={caso.titulo} caso={caso} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#888899] mb-4">¿Listo para ser nuestro próximo caso de éxito?</p>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#5b75f0]">
            Reserva tu consulta estratégica <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
