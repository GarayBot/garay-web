"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function PropuestaCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a64eb]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4a64eb]/30 bg-[#4a64eb]/10 text-sm text-[#6d86f5]">
            <Calendar className="w-4 h-4" />
            Próximos spots disponibles
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          ¿Listo para{" "}
          <span className="bg-gradient-to-r from-[#6d86f5] via-[#4a64eb] to-[#8b5cf6] bg-clip-text text-transparent">
            escalar
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#9999aa] max-w-2xl mx-auto mb-12"
        >
          Agenda una consulta gratuita de 30 minutos. Analizamos tu situación actual y te decimos exactamente qué necesitas para crecer.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#4a64eb] to-[#6d86f5] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(74,100,235,0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agendar consulta gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6d86f5] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="mailto:igarcia@garaywebs.com"
            className="px-10 py-5 rounded-full border border-[#3a3a4a] text-white font-medium text-lg hover:bg-white/5 hover:border-[#4a64eb]/50 transition-all duration-300"
          >
            Enviar email →
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-[#777788]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Respuesta en 24h
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Sin compromiso
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            100% personalizado
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
