"use client";

import { useRef, useEffect, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ExternalLink } from "lucide-react";

const CASOS = [
  { num: "01", titulo: "CRM que duplicó ventas", empresa: "Spikes Energía · Ahorro energético", tags: ["CRM", "Automatización", "Next.js"], desc: "Gestión de clientes, contratos y documentación. Eliminó 400+ horas manuales al mes.", metricas: [{ valor: "400+", label: "Horas eliminadas" }, { valor: "67%", label: "Menos admin" }] },
  { num: "02", titulo: "Chatbot WhatsApp con IA", empresa: "Luzia · Energía", tags: ["IA", "WhatsApp API", "Node.js"], desc: "Compara tarifas, genera informes PDF y atiende 24/7 sin intervención humana.", metricas: [{ valor: "24/7", label: "Disponibilidad" }, { valor: "500+", label: "Comparativas/mes" }] },
  { num: "03", titulo: "Plataforma deportiva", empresa: "Impakta · Deportes", tags: ["Next.js", "Prisma", "SQLite"], desc: "Gestión de jugadores, estadísticas y rendimiento. 3x más rápido que Excel.", metricas: [{ valor: "3x", label: "Más rápido" }, { valor: "100+", label: "Jugadores" }] },
  { num: "04", titulo: "Formación trading", empresa: "TradingLateral · Formación", tags: ["Next.js", "Supabase", "Stripe"], desc: "Suscripciones, contenido premium y gestión de alumnos automatizada.", metricas: [{ valor: "200+", label: "Alumnos" }, { valor: "100%", label: "Pagos auto" }] },
  { num: "05", titulo: "App hábitos gamificada", empresa: "HabitRank · Productividad", tags: ["Next.js", "Supabase", "PWA"], desc: "Sistema XP, niveles, rachas y estadísticas. Convierte hábitos en juego.", metricas: [{ valor: "XP", label: "Niveles" }, { valor: "PWA", label: "Instalable" }] },
];

function CaseCard({ caso }: { caso: (typeof CASOS)[number] }) {
  return (
    <div className="flex-shrink-0 w-full md:w-[35vw] lg:w-[28vw] rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] p-5 md:p-7 flex flex-col">
      <span className="text-4xl md:text-5xl font-black text-[#2a2d3a] leading-none">{caso.num}</span>
      <h3 className="mt-3 text-base md:text-lg font-bold text-white leading-tight">{caso.titulo}</h3>
      <p className="mt-1.5 text-xs text-[#666677]">{caso.empresa}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {caso.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md border border-[#333344] bg-[#222230] text-[#aaaabc]">{tag}</span>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#777788] leading-relaxed flex-1">{caso.desc}</p>
      <div className="mt-5 flex gap-6">
        {caso.metricas.map((m) => (
          <div key={m.label}>
            <p className="text-lg md:text-xl font-bold text-white">{m.valor}</p>
            <p className="text-[11px] text-[#666677]">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
 * Desktop: Scroll-driven horizontal carousel
 * Uses CSS sticky + JS scroll listener to translate the track.
 * The section's height creates the "scroll runway" — while scrolling through it,
 * the content stays pinned and the cards move horizontally.
 * When the scroll runway ends, the section unpins and the next section appears.
 */
function DesktopCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [tx, setTx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let maxTx = 0;
    let runwayHeight = 0;

    const recalc = () => {
      if (!trackRef.current || !wrapperRef.current) return;
      // How far the track overflows beyond the viewport
      maxTx = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      // The wrapper (scroll runway) height = overflow + one viewport
      runwayHeight = maxTx + window.innerHeight;
      wrapperRef.current.style.height = `${runwayHeight}px`;
    };

    const onScroll = () => {
      if (!wrapperRef.current || maxTx <= 0) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      // How many px we've scrolled past the top of the wrapper
      const scrolled = Math.max(0, -rect.top);
      // The total scrollable distance within the wrapper
      const scrollable = runwayHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(1, scrolled / scrollable);
      setProgress(p);
      setTx(-p * maxTx);
    };

    recalc();
    // Recalc after layout settles (fonts, images)
    requestAnimationFrame(recalc);
    setTimeout(recalc, 300);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="px-6 lg:px-8 mb-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">Casos de Éxito</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Resultados reales de empresas reales</h2>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 pl-8 lg:pl-[calc((100vw-72rem)/2+2rem)]"
            style={{ transform: `translate3d(${tx}px, 0, 0)` }}
          >
            {CASOS.map((caso) => (
              <CaseCard key={caso.num} caso={caso} />
            ))}
          </div>
        </div>

        <div className="px-6 lg:px-8 mt-8">
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
            <div className="flex-1 h-0.5 bg-[#2a2d3a] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4a64eb] rounded-full origin-left"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            <a href="#contacto" className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#5b75f0]">
              Ser el siguiente <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CasosExito() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <section id="casos" className="py-16 px-4">
        <BlurFade delay={0.1} inView>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">Casos de Éxito</p>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Resultados reales de empresas reales</h2>
        </BlurFade>
        <div className="flex flex-col gap-4">
          {CASOS.map((caso, i) => (
            <BlurFade key={caso.num} delay={0.05 * i} inView>
              <CaseCard caso={caso} />
            </BlurFade>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#5b75f0]">
            ¿Listo para ser el siguiente? <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="casos">
      <DesktopCarousel />
    </section>
  );
}
