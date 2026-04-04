"use client";

import { motion } from "framer-motion";

export function CTAFinal() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1a2a6c] via-[#4a64eb] to-[#2d3a8c] p-8 md:p-12 lg:p-16 text-center"
      >
        <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 mb-6">Plazas limitadas</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          Hagamos que tu negocio crezca
        </h2>
        <p className="mb-8 text-white/80 text-sm max-w-lg mx-auto">
          Más de 50 empresas ya confían en nosotros. El siguiente paso es una conversación de 30 minutos. Sin compromiso.
        </p>
        <a
          href="#reservar"
          className="inline-flex w-full sm:w-auto justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20"
        >
          Reservar consulta gratis
        </a>
      </motion.div>
    </section>
  );
}
