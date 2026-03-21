"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const TESTIMONIALS = [
  // Column 1
  [
    { text: "Iván transformó completamente nuestra presencia digital. Pasamos de una web estática a una plataforma que genera leads automáticamente. En 3 meses triplicamos las consultas entrantes.", author: "Carlos Rodríguez", role: "CEO, Spikes Energía" },
    { text: "Lo que más valoro es su capacidad de entender el negocio. No es solo un programador, es alguien que piensa contigo para resolver los problemas reales de tu empresa.", author: "Frank Villanueva", role: "CEO, YMF Global" },
    { text: "El CRM que nos desarrolló eliminó más de 400 horas de trabajo manual al mes. Ahora nuestro equipo se enfoca en vender, no en gestionar hojas de cálculo.", author: "Laura Martínez", role: "COO, Spikes Energía" },
  ],
  // Column 2
  [
    { text: "Contraté a Iván para automatizar nuestros procesos de onboarding y fue la mejor decisión del año. Lo que antes tardaba 3 días ahora se hace en 2 horas.", author: "María García", role: "Directora, Clínica Somrís" },
    { text: "Necesitábamos una plataforma deportiva completa y la entregó en 6 semanas. Funciona perfecto, es rápida y nuestros entrenadores la adoptaron al instante.", author: "Jordi Puig", role: "Fundador, Impakta" },
    { text: "El chatbot de WhatsApp que nos montó atiende consultas 24/7 y ha reducido las llamadas al equipo de soporte en un 60%. La IA funciona sorprendentemente bien.", author: "Ana Pérez", role: "Fundadora, TradingLateral" },
  ],
  // Column 3
  [
    { text: "Muy profesional y cumple plazos. Nos hizo una tienda online con Shopify que factura un 40% más que la anterior. La inversión se recuperó en el primer mes.", author: "Diego Navarro", role: "CEO, PecadoCarnal" },
    { text: "La web que nos desarrolló carga en menos de 1 segundo y está perfectamente optimizada para SEO. Pasamos de la página 3 a los primeros resultados de Google en 2 meses.", author: "Marta López", role: "Marketing, HomeFit22" },
    { text: "Iván no solo entrega código, entrega soluciones. Su dashboard de métricas nos permitió tomar decisiones basadas en datos por primera vez en la historia de nuestra empresa.", author: "Roberto Sánchez", role: "Director, Aqualinks" },
  ],
];

function TestimonialCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <div className="rounded-2xl border border-[#2a2d3a] bg-[#1a1d27] p-6 transition-all hover:border-[#3a3d4a] mb-4">
      <p className="text-sm text-[#d1d5db] leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#4a64eb]/30 to-[#3b50d4]/30 border border-[#5b75f0]/20 flex items-center justify-center text-xs font-bold text-[#8ea0f7]">
          {author.split(" ").map((w) => w[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{author}</p>
          <p className="text-xs text-[#9ca3af]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimoniosLong() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-3 text-[#888899]">
            Testimonios reales de clientes que han transformado sus negocios.
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Fade top/bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#0f1117] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0f1117] to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] overflow-hidden">
          {TESTIMONIALS.map((col, colIdx) => (
            <Marquee
              key={colIdx}
              vertical
              pauseOnHover
              className={`[--duration:${25 + colIdx * 5}s]`}
            >
              {col.map((t) => (
                <TestimonialCard key={t.author} {...t} />
              ))}
            </Marquee>
          ))}
        </div>
      </div>
    </section>
  );
}
