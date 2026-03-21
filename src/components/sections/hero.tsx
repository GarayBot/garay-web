"use client";

import { motion } from "framer-motion";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Ripple } from "@/components/ui/ripple";
import { RippleButton } from "@/components/ui/ripple-button";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Zap, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-20">
      {/* Ripple background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Ripple mainCircleSize={210} numCircles={8} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <AnimatedGradientText className="mb-8 inline-flex cursor-default">
            <Zap className="mr-2 size-4" />
            <span className="text-sm">Desarrollo Web a Medida</span>
          </AnimatedGradientText>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Haz crecer tu negocio,{" "}
          <span className="bg-gradient-to-r from-[#6d86f5] to-[#5b75f0] bg-clip-text text-transparent">no tu nómina.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-[#9999aa] max-w-2xl mx-auto leading-relaxed"
        >
          El camino a 6 cifras empieza con una web profesional, automatización inteligente y el trabajo diario en{" "}
piloto automático.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contacto">
            <RippleButton rippleColor="#4a64eb" className="bg-[#4a64eb] text-white rounded-full px-7 py-3 border-0 font-medium hover:bg-[#5b75f0] hover:shadow-lg hover:shadow-[#4a64eb]/25">
              Reserva tu llamada
            </RippleButton>
          </a>
          <a href="#servicios">
            <RippleButton rippleColor="#fff" className="border border-[#3a3a4a] text-white rounded-full px-7 py-3 bg-transparent font-medium hover:bg-white/5 hover:border-[#555]">
              Ver servicios
            </RippleButton>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          {/* Avatar circles + count */}
          <div className="flex items-center">
            {["IG", "CR", "AP", "JM", "LS"].map((initials, i) => (
              <div
                key={initials}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1a1d27] bg-gradient-to-br text-xs font-bold text-white",
                  i === 0 && "from-[#4a64eb] to-[#3b50d4]",
                  i === 1 && "from-emerald-600 to-teal-600",
                  i === 2 && "from-orange-600 to-red-600",
                  i === 3 && "from-blue-600 to-cyan-600",
                  i === 4 && "from-pink-600 to-rose-600",
                  i > 0 && "-ml-2.5",
                )}
              >
                {initials}
              </div>
            ))}
            <div className="-ml-2.5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1a1d27] bg-[#3a3a4a] text-xs font-bold text-white">
              +<NumberTicker value={50} />
            </div>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-[#777788]">Más de 50 proyectos entregados con éxito</p>
        </motion.div>

        {/* Hero Video Dialog */}
        <HeroVideoDialog
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
          thumbnailSrc="https://placehold.co/1280x720/1a1d27/4a64eb?text=Garay+Web"
          thumbnailAlt="Video presentación Garay"
          animationStyle="from-bottom"
          className="max-w-3xl mx-auto mt-16 border border-[#2a2d3a] rounded-xl"
        />
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b75f0]/30 to-transparent" />
    </section>
  );
}
