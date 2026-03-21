"use client";

import { motion } from "framer-motion";

export function CTAFinal() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-[#4a64eb] to-[#a78bfa] p-12 md:p-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          ¿Listo para escalar tu negocio?
        </h2>
        <a
          href="#contacto"
          className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20"
        >
          Reserva tu consulta
        </a>
        <p className="mt-6 text-white/80 text-sm max-w-lg mx-auto">
          Agenda una consulta gratuita para descubrir las soluciones que te darán ROI inmediato.
        </p>
      </motion.div>
    </section>
  );
}
