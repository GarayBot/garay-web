"use client";

import { motion } from "framer-motion";

export function CTAMid() {
  return (
    <section className="pt-0 pb-4 px-6 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3">
          ¿Tu web actual te está{" "}
          <span className="bg-gradient-to-r from-[#6d86f5] via-[#4a64eb] to-[#8b5cf6] bg-clip-text text-transparent">costando clientes</span>
          ?
        </h3>
        <p className="text-[#888899] mb-5 max-w-xl mx-auto">Cada día sin una web profesional es dinero que pierdes. Agenda una consulta gratuita de 30 minutos y te mostramos cómo mejorar.</p>
        <a href="#reservar" className="inline-flex rounded-full bg-[#4a64eb] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#5b75f0] hover:shadow-lg hover:shadow-[#4a64eb]/25">
          Consulta gratuita →
        </a>
      </motion.div>
    </section>
  );
}
