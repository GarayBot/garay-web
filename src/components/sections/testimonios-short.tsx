"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const QUOTES = [
  { text: "Estoy 100% seguro de que va a entregar un proyecto excelente y hará todo lo necesario para que estés satisfecho.", author: "Carlos R.", role: "CEO, Spikes Energía", tag: "CRM & Automatización" },
  { text: "Muy claro en su comunicación, muy conciso en su forma de trabajar. Y en cuanto a los entregables, simplemente cumple.", author: "María G.", role: "Directora, Clínica Somrís", tag: "Desarrollo Web" },
  { text: "Esta tarea era súper tediosa y costosa, e Iván la automatizó por completo.", author: "Ana P.", role: "Fundadora, TradingLateral", tag: "Automatización" },
  { text: "Piensa contigo para resolver los problemas reales de tu negocio. Con mucha experiencia resolviendo problemas empresariales.", author: "Frank V.", role: "CEO, YMF Global", tag: "Consultoría" },
];

export function TestimoniosShort() {
  return (
    <section id="testimonios" className="py-20 px-6">
      <div className="mx-auto max-w-6xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
          <p className="mt-3 text-[#888899]">Empresas reales que han escalado sus operaciones con nuestras soluciones.</p>
        </motion.div>
      </div>

      <Marquee pauseOnHover className="[--duration:40s]">
        {QUOTES.map((q) => (
          <div key={q.author} className="mx-3 w-[380px] rounded-2xl border border-[#2a2d3a] bg-[#1a1d27] p-6 transition-all hover:border-[#3a3d4a]">
            <p className="text-xs font-medium text-[#6d86f5] mb-3">{q.tag}</p>
            <p className="text-sm text-[#d1d5db] leading-relaxed mb-5">&ldquo;{q.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#4a64eb]/30 to-[#3b50d4]/30 border border-[#5b75f0]/20 flex items-center justify-center text-xs font-bold text-[#8ea0f7]">
                {q.author.split(" ").map(w => w[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{q.author}</p>
                <p className="text-xs text-[#9ca3af]">{q.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
