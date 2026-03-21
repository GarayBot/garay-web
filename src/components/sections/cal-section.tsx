"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export function CalSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      (window as any).Cal?.("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "ivangarcia/consulta",
        config: { theme: "dark" },
      });
    };
  }, []);

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Reserva tu consulta estratégica gratuita
          </h2>
          <p className="mt-3 text-[#888899] max-w-2xl mx-auto">
            Agenda una videollamada de 30 minutos para analizar tu negocio y descubrir oportunidades de crecimiento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl border border-[#2a2d3a] bg-[#1a1d27] overflow-hidden"
        >
          <div id="cal-embed" className="w-full min-h-[600px] rounded-xl overflow-hidden" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#9ca3af]"
        >
          <span>✓ Análisis de procesos</span>
          <span>✓ Plan personalizado</span>
          <span>✓ Proyecciones de ROI</span>
        </motion.div>
      </div>
    </section>
  );
}
