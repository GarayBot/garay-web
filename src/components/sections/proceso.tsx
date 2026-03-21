"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PASOS = [
  { num: "1", titulo: "Consulta estratégica", desc: "Nos reunimos para hablar de tus objetivos y retos. Identificamos los sistemas de mayor impacto y creamos tu plan personalizado." },
  { num: "2", titulo: "Plan personalizado", desc: "Recibes un roadmap detallado: qué implementar primero, ROI esperado y calendario de cada fase del proyecto." },
  { num: "3", titulo: "Arranque inmediato", desc: "Una vez aprobado el plan, empezamos en 24 horas. Sin retrasos, sin excusas — implementación directa y comunicación constante." },
  { num: "4", titulo: "Escalar y optimizar", desc: "A medida que los sistemas dan resultados, optimizamos y expandimos para conseguir crecimiento compuesto." },
];

export function Proceso() {
  const [active, setActive] = useState(0);

  return (
    <section id="proceso" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Así conseguimos resultados</h2>
          <p className="mt-3 text-[#888899] max-w-lg mx-auto">Nuestro proceso probado en 4 pasos para identificar oportunidades y entregar ROI inmediato.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Steps */}
          <div className="space-y-3">
            {PASOS.map((paso, i) => (
              <motion.div
                key={paso.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full text-left rounded-xl p-5 transition-all duration-300",
                    active === i
                      ? "bg-[#1e1e28] border border-[#333344]"
                      : "hover:bg-[#1a1a24]"
                  )}
                >
                  <h3 className={cn(
                    "text-lg font-semibold transition-colors",
                    active === i ? "text-white" : "text-[#aaaabc]"
                  )}>
                    {paso.num}. {paso.titulo}
                  </h3>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-3 text-sm text-[#9999aa] leading-relaxed">{paso.desc}</p>
                      <div className="mt-4 h-0.5 w-32 bg-gradient-to-r from-blue-500 to-[#5b75f0] rounded-full" />
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] overflow-hidden flex items-center justify-center min-h-[350px]"
          >
            <div className="p-10 text-center">
              <div className="text-7xl font-black bg-gradient-to-br from-[#6d86f5] to-[#3b50d4] bg-clip-text text-transparent mb-4">
                {PASOS[active].num}
              </div>
              <h4 className="text-xl font-semibold text-white">{PASOS[active].titulo}</h4>
              <p className="mt-3 text-sm text-[#777788] max-w-sm mx-auto">{PASOS[active].desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
