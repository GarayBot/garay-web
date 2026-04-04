"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6000;

const PASOS = [
  {
    num: "1",
    titulo: "Consulta estratégica",
    desc: "Nos sentamos 30 minutos. Nos cuentas qué problema quieres resolver. Te decimos exactamente cómo lo haríamos y cuánto cuesta. Sin compromiso.",
    image: "/proceso/paso-1.webp",
  },
  {
    num: "2",
    titulo: "Diseño",
    desc: "Diseñamos la solución completa antes de escribir una línea de código. Ves wireframes y la arquitectura técnica. Apruebas todo antes de que arranquemos.",
    image: "/proceso/paso-2.webp",
  },
  {
    num: "3",
    titulo: "Desarrollo",
    desc: "Desarrollo iterativo con entregas semanales. Cada viernes ves avances reales funcionando — no mockups. Si algo no te convence, lo ajustamos al momento.",
    image: "/proceso/paso-3.webp",
  },
  {
    num: "4",
    titulo: "Lanzamiento",
    desc: "Tu proyecto en producción, optimizado y monitorizado. No te dejamos solo — nos quedamos para asegurar que todo funciona perfecto.",
    image: "/proceso/paso-4.webp",
  },
];

export function Proceso() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  // Animation frame loop for smooth progress
  useEffect(() => {
    if (paused) return;

    startRef.current = Date.now() - (progress / 100) * INTERVAL_MS;

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / INTERVAL_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActive((prev) => (prev + 1) % PASOS.length);
        setProgress(0);
        startRef.current = Date.now();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="proceso" className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            De tu idea a resultados en 4 semanas
          </h2>
          <p className="mt-3 text-[#888899] max-w-lg mx-auto">
            Un proceso claro, sin sorpresas, enfocado en resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Steps */}
          <div
            className="space-y-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {PASOS.map((paso, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <button
                    onClick={() => goTo(i)}
                    className={cn(
                      "w-full text-left rounded-xl p-4 md:p-5 transition-all duration-300",
                      isActive
                        ? "bg-[#1e1e28] border border-[#333344]"
                        : "border border-transparent hover:bg-[#1a1a24]"
                    )}
                  >
                    <h3
                      className={cn(
                        "text-lg font-semibold transition-colors",
                        isActive ? "text-white" : "text-[#aaaabc]"
                      )}
                    >
                      {paso.num}. {paso.titulo}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm text-[#9999aa] leading-relaxed">
                            {paso.desc}
                          </p>

                          {/* Progress bar */}
                          <div className="mt-4 h-[3px] w-full rounded-full bg-[#2a2d3a] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#4a64eb] to-[#5b75f0]"
                              style={{
                                width: `${progress}%`,
                                transition: paused
                                  ? "none"
                                  : "width 50ms linear",
                              }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] overflow-hidden items-center justify-center min-h-[400px] relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={PASOS[active].image}
                  alt={PASOS[active].titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  priority={active === 0}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] via-transparent to-transparent opacity-60" />

                {/* Step number badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a64eb] text-xl font-black text-white shadow-lg shadow-[#4a64eb]/30">
                    {PASOS[active].num}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {PASOS[active].titulo}
                    </p>
                    <p className="text-xs text-white/60">
                      Paso {PASOS[active].num} de {PASOS.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
