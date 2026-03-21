"use client";

import { motion } from "framer-motion";

export function CTAMid() {
  return (
    <section className="py-12 px-6 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="text-[#888899] mb-5">¿Listo para automatizar los procesos de tu negocio?</p>
        <a href="#contacto" className="inline-flex rounded-full bg-[#4a64eb] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#5b75f0] hover:shadow-lg hover:shadow-[#4a64eb]/25">
          Reserva tu consulta gratis
        </a>
      </motion.div>
    </section>
  );
}
