"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Clock,
  Zap,
  TrendingUp,
  Shield,
  MessageSquare,
} from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { RippleButton } from "@/components/ui/ripple-button";
import { cn } from "@/lib/utils";

const PACKS = [
  {
    name: "Starter",
    hours: 5,
    pricePerHour: 40,
    total: 200,
    discount: null,
    description: "Ideal para cambios puntuales y ajustes menores.",
    popular: false,
    features: [
      "Cambios de diseño menores",
      "Corrección de bugs",
      "Actualizaciones de contenido",
      "Soporte por email",
    ],
  },
  {
    name: "Growth",
    hours: 10,
    pricePerHour: 36,
    total: 360,
    discount: 10,
    description: "Para mejoras continuas y nuevas funcionalidades.",
    popular: true,
    features: [
      "Todo lo del pack Starter",
      "Nuevas secciones o páginas",
      "Integraciones básicas",
      "Optimización SEO",
      "Soporte prioritario",
    ],
  },
  {
    name: "Business",
    hours: 20,
    pricePerHour: 32,
    total: 640,
    discount: 20,
    description: "Para proyectos con cambios frecuentes y evolución constante.",
    popular: false,
    features: [
      "Todo lo del pack Growth",
      "Desarrollo de funcionalidades complejas",
      "Automatizaciones",
      "Migraciones y refactoring",
      "Reuniones de seguimiento",
      "Soporte prioritario 24h",
    ],
  },
  {
    name: "Enterprise",
    hours: 40,
    pricePerHour: 28,
    total: 1120,
    discount: 30,
    description: "Máximo ahorro para desarrollo intensivo y dedicado.",
    popular: false,
    features: [
      "Todo lo del pack Business",
      "Desarrollo dedicado",
      "Arquitectura y consultoría técnica",
      "Deploy y DevOps incluido",
      "Informes de progreso semanales",
      "Canal de comunicación directo",
      "Prioridad máxima",
    ],
  },
];

const BENEFITS = [
  {
    icon: Clock,
    title: "Sin compromiso mensual",
    desc: "Compra un pack y úsalo cuando lo necesites. Las horas no caducan en 6 meses.",
  },
  {
    icon: Zap,
    title: "Respuesta rápida",
    desc: "Los clientes con bolsa de horas tienen prioridad. Empezamos en menos de 24h.",
  },
  {
    icon: TrendingUp,
    title: "Ahorro progresivo",
    desc: "Cuantas más horas contrates, menor es el precio por hora. Hasta un 30% de descuento.",
  },
  {
    icon: Shield,
    title: "Transparencia total",
    desc: "Recibes un desglose detallado de las horas utilizadas en cada tarea.",
  },
];

const FAQ = [
  {
    q: "¿Qué tipo de trabajos puedo solicitar?",
    a: "Cualquier cambio, mejora o implementación en tu web: diseño, nuevas funcionalidades, integraciones, optimización, corrección de errores, actualizaciones de contenido, SEO, etc.",
  },
  {
    q: "¿Las horas caducan?",
    a: "No. Las horas son válidas durante 6 meses desde la compra. Si necesitas más tiempo, hablamos.",
  },
  {
    q: "¿Cómo sé cuántas horas necesito?",
    a: "Antes de empezar cualquier tarea, te damos una estimación del tiempo que llevará. Tú decides si seguir adelante.",
  },
  {
    q: "¿Puedo comprar más horas si se me acaban?",
    a: "Por supuesto. Puedes renovar o cambiar de pack en cualquier momento.",
  },
  {
    q: "¿Cómo me comunico con vosotros?",
    a: "Por email, WhatsApp o videollamada. Los packs Business y Enterprise incluyen un canal de comunicación directo.",
  },
];

export default function BolsaDeHorasPage() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <DotPattern
          className="opacity-20 text-[#4a64eb]"
          width={20}
          height={20}
          cr={1}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <BlurFade delay={0.1} inView>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#666677] hover:text-[#4a64eb] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">
              Bolsa de Horas
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Horas de desarrollo{" "}
              <span className="bg-gradient-to-r from-[#6d86f5] to-[#5b75f0] bg-clip-text text-transparent">
                a tu ritmo
              </span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="mt-4 text-lg text-[#777788] max-w-2xl">
              Contrata packs de horas para cambios, mejoras e implementaciones
              en tu web. Sin sorpresas, con precios claros y transparencia
              total.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKS.map((pack, i) => (
            <BlurFade key={pack.name} delay={0.1 + i * 0.08} inView>
              <div
                className={cn(
                  "relative rounded-2xl border p-6 flex flex-col h-full transition-all duration-300",
                  pack.popular
                    ? "border-[#4a64eb] bg-[#1a1d27] shadow-lg shadow-[#4a64eb]/10"
                    : "border-[#2a2d3a] bg-[#1a1a24] hover:border-[#333344]"
                )}
              >
                {/* Popular badge */}
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4a64eb] text-white text-[11px] font-semibold px-4 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white">{pack.name}</h3>
                  <p className="text-xs text-[#666677] mt-1">
                    {pack.description}
                  </p>
                </div>

                {/* Hours */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-black text-white">
                    {pack.hours}
                  </span>
                  <span className="text-sm text-[#777788]">horas</span>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">
                      {pack.total}€
                    </span>
                    {pack.discount && (
                      <span className="text-xs text-[#666677] line-through">
                        {pack.hours * 40}€
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-[#9999aa]">
                      {pack.pricePerHour}€/hora
                    </span>
                    {pack.discount && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                        -{pack.discount}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pack.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-[#4a64eb] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#aaaabb]">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="/contacto">
                  <RippleButton
                    rippleColor={pack.popular ? "#4a64eb" : "#ffffff"}
                    className={cn(
                      "w-full rounded-full py-3 text-sm font-medium border-0",
                      pack.popular
                        ? "bg-[#4a64eb] text-white hover:bg-[#5b75f0] hover:shadow-lg hover:shadow-[#4a64eb]/25"
                        : "bg-[#222230] text-white hover:bg-[#2a2d3a]"
                    )}
                  >
                    Contratar {pack.hours}h
                  </RippleButton>
                </a>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Custom note */}
        <BlurFade delay={0.5} inView>
          <div className="mt-8 rounded-xl border border-[#4a64eb]/20 bg-[#4a64eb]/5 p-5 text-center">
            <p className="text-sm text-[#9999aa]">
              ¿Necesitas un volumen mayor?{" "}
              <a
                href="/contacto"
                className="text-[#6d86f5] hover:underline font-medium"
              >
                Contacta con nosotros
              </a>{" "}
              y te preparamos un pack personalizado.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-6 py-16 border-t border-[#2a2d3a]">
        <BlurFade delay={0.1} inView>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            ¿Por qué la bolsa de horas?
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, i) => (
            <BlurFade key={benefit.title} delay={0.1 + i * 0.08} inView>
              <div className="rounded-xl border border-[#2a2d3a] bg-[#1a1a24] p-6 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4a64eb]/10 text-[#6d86f5]">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#777788] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-16 border-t border-[#2a2d3a]">
        <BlurFade delay={0.1} inView>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Cómo funciona
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Elige tu pack",
              desc: "Selecciona las horas que mejor se adapten a tus necesidades.",
            },
            {
              step: "2",
              title: "Solicita cambios",
              desc: "Envíanos tus peticiones. Te estimamos el tiempo antes de empezar.",
            },
            {
              step: "3",
              title: "Recibe resultados",
              desc: "Implementamos, testeamos y desplegamos. Tú solo revisas y apruebas.",
            },
          ].map((item, i) => (
            <BlurFade key={item.step} delay={0.1 + i * 0.1} inView>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4a64eb]/10 text-[#6d86f5] text-xl font-black mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#777788] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 border-t border-[#2a2d3a]">
        <BlurFade delay={0.1} inView>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Preguntas frecuentes
          </h2>
        </BlurFade>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <BlurFade key={i} delay={0.1 + i * 0.05} inView>
              <details className="group rounded-xl border border-[#2a2d3a] bg-[#1a1a24] overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-white hover:text-[#6d86f5] transition-colors [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="ml-4 text-[#666677] group-open:rotate-45 transition-transform text-lg">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-[#777788] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#2a2d3a] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <BlurFade delay={0.1} inView>
            <MessageSquare className="h-8 w-8 text-[#6d86f5] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold">
              ¿Tienes dudas sobre qué pack elegir?
            </h2>
            <p className="mt-3 text-[#777788] max-w-lg mx-auto">
              Escríbenos y te ayudamos a elegir la opción que mejor se adapte a
              tu proyecto.
            </p>
            <a
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-8 py-3 text-sm font-medium text-white hover:bg-[#5b75f0] transition-colors"
            >
              Contactar ahora
            </a>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
