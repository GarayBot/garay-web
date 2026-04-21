"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Search, Palette, Rocket, TrendingUp } from "lucide-react";

const pasos = [
  {
    num: "01",
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Descubrimiento",
    description: "Nos sentamos contigo a entender tu negocio, tus clientes y tus objetivos. No empezamos a diseñar hasta entender el problema real.",
    color: "#4a64eb",
  },
  {
    num: "02",
    icon: <Search className="w-5 h-5" />,
    title: "Investigación",
    description: "Analizamos a tu competencia, investigamos a tu audiencia y encontramos las oportunidades que otros pasan por alto.",
    color: "#6d86f5",
  },
  {
    num: "03",
    icon: <Palette className="w-5 h-5" />,
    title: "Diseño & Desarrollo",
    description: "Creamos prototipos interactivos, los validamos contigo y construimos la solución con código limpio y escalable.",
    color: "#8b5cf6",
  },
  {
    num: "04",
    icon: <Rocket className="w-5 h-5" />,
    title: "Lanzamiento",
    description: "Deployamos, configuramos analytics, conectamos dominios y hacemos que todo funcione a la perfección desde el día uno.",
    color: "#a78bfa",
  },
  {
    num: "05",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Optimización continua",
    description: "No abandonamos después del lanzamiento. Medimos, analizamos y mejoramos constantemente para maximizar resultados.",
    color: "#c4b5fd",
  },
];

export function PropuestaProceso() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="proceso" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4a64eb]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#4a64eb]/20 bg-[#4a64eb]/5 text-sm text-[#6d86f5] mb-6">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            De la idea{" "}
            <span className="bg-gradient-to-r from-[#6d86f5] to-[#4a64eb] bg-clip-text text-transparent">
              al resultado
            </span>
          </h2>
          <p className="text-lg text-[#9999aa] max-w-2xl mx-auto">
            Un proceso probado que lleva tu proyecto desde la idea inicial hasta el lanzamiento y más allá.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical animada — centrada en md+, a la izquierda en móvil */}
          <div className="absolute left-7 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#2a2d3a]">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4a64eb] via-[#6d86f5] to-[#8b5cf6]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Pasos */}
          <div className="space-y-12 md:space-y-24">
            {pasos.map((paso, i) => {
              const isEven = i % 2 === 0;
              
              return (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  {/* Desktop: 3-column layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start">
                    {/* Left column */}
                    <div className={`${isEven ? "text-right pr-4" : "opacity-0 pointer-events-none"}`}>
                      {isEven && (
                        <>
                          <div className="inline-flex items-center gap-3 mb-4 flex-row-reverse justify-end">
                            <span 
                              className="text-sm font-mono px-3 py-1 rounded-full border"
                              style={{ borderColor: `${paso.color}30`, color: paso.color, backgroundColor: `${paso.color}10` }}
                            >
                              {paso.num}
                            </span>
                            <div 
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: `${paso.color}15`, color: paso.color }}
                            >
                              {paso.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">{paso.title}</h3>
                          <p className="text-[#9999aa] leading-relaxed max-w-md ml-auto">
                            {paso.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                        className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-[#0a0a0f]"
                        style={{ 
                          borderColor: paso.color,
                          boxShadow: `0 0 30px ${paso.color}20`,
                        }}
                      >
                        <span className="text-lg font-bold" style={{ color: paso.color }}>
                          {paso.num}
                        </span>
                      </motion.div>
                    </div>

                    {/* Right column */}
                    <div className={`${!isEven ? "text-left pl-4" : "opacity-0 pointer-events-none"}`}>
                      {!isEven && (
                        <>
                          <div className="inline-flex items-center gap-3 mb-4">
                            <span 
                              className="text-sm font-mono px-3 py-1 rounded-full border"
                              style={{ borderColor: `${paso.color}30`, color: paso.color, backgroundColor: `${paso.color}10` }}
                            >
                              {paso.num}
                            </span>
                            <div 
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: `${paso.color}15`, color: paso.color }}
                            >
                              {paso.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">{paso.title}</h3>
                          <p className="text-[#9999aa] leading-relaxed max-w-md">
                            {paso.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Mobile: simple left-aligned */}
                  <div className="md:hidden flex items-start gap-4">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                        className="w-14 h-14 rounded-full border-2 flex items-center justify-center bg-[#0a0a0f]"
                        style={{ 
                          borderColor: paso.color,
                          boxShadow: `0 0 20px ${paso.color}30`,
                        }}
                      >
                        <span className="text-base font-bold" style={{ color: paso.color }}>
                          {paso.num}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span 
                          className="text-sm font-mono px-3 py-1 rounded-full border"
                          style={{ borderColor: `${paso.color}30`, color: paso.color, backgroundColor: `${paso.color}10` }}
                        >
                          {paso.num}
                        </span>
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${paso.color}15`, color: paso.color }}
                        >
                          {paso.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{paso.title}</h3>
                      <p className="text-[#9999aa] leading-relaxed text-sm">
                        {paso.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
