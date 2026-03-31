"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ExternalLink } from "lucide-react";

const CASOS = [
  {
    num: "01",
    titulo: "CRM/ERP para Ahorro Energético",
    empresa: "Spikes Energía",
    tags: ["Next.js", "Express", "Docker"],
    desc: "Gestión completa de contratos, leads, comisiones y documentación. 3 microservicios + chatbot WhatsApp con IA.",
    metricas: [{ valor: "39", label: "Pantallas" }, { valor: "3", label: "Microservicios" }],
    thumbnail: "/portfolio/Spikes/1.png",
    slug: "spikes",
  },
  {
    num: "02",
    titulo: "Plataforma de Salud Digital",
    empresa: "MunDoctor",
    tags: ["React", "Node.js", "Stripe"],
    desc: "Pacientes, profesionales y admins. Citas en tiempo real, geolocalización, pagos con Stripe y Socket.io.",
    metricas: [{ valor: "31", label: "Pantallas" }, { valor: "3", label: "Roles" }],
    thumbnail: "/portfolio/Mundoctor/1.png",
    slug: "mundoctor",
  },
  {
    num: "03",
    titulo: "Gestión de Inventario SaaS",
    empresa: "Pecado Carnal · Agritek",
    tags: ["Next.js", "Supabase", "OpenAI"],
    desc: "Multi-almacén para restaurantes. OCR con GPT-4o para facturas, pedidos automáticos y control de stock.",
    metricas: [{ valor: "20", label: "Pantallas" }, { valor: "OCR", label: "Con IA" }],
    thumbnail: "/portfolio/PecadoCarnal/1.png",
    slug: "pecadocarnal",
  },
  {
    num: "04",
    titulo: "Evaluación de Talento VISTA™",
    empresa: "Impakta Jugadores",
    tags: ["Next.js", "Prisma", "TypeScript"],
    desc: "Plataforma multi-tenant para evaluar equipos en 6 dimensiones. Informes PDF, dashboards y radar charts.",
    metricas: [{ valor: "18", label: "Pantallas" }, { valor: "6", label: "Dimensiones" }],
    thumbnail: "/portfolio/impakta-jugadores/1.png",
    slug: "impakta-jugadores",
  },
  {
    num: "05",
    titulo: "Dashboard para Restaurantes",
    empresa: "Chefs",
    tags: ["Bootstrap", "Chart.js", "jQuery"],
    desc: "Panel admin completo: pedidos, facturas, reseñas, calendario, analíticas y gestión de clientes.",
    metricas: [{ valor: "11", label: "Pantallas" }, { valor: "100%", label: "Responsive" }],
    thumbnail: "/portfolio/Chefs/1.png",
    slug: "chefs",
  },
  {
    num: "06",
    titulo: "Gestión de Brokers de Subastas",
    empresa: "AppBrokers",
    tags: ["React", "Node.js", "MongoDB"],
    desc: "Sistema completo para brokers de subastas de vehículos. Gestión de pujas, clientes y operaciones.",
    metricas: [{ valor: "11", label: "Pantallas" }, { valor: "3", label: "Roles" }],
    thumbnail: "/portfolio/AppBrokers/1.png",
    slug: "appbrokers",
  },
  {
    num: "07",
    titulo: "Experiencia 3D Interactiva",
    empresa: "Aqualinks 3D",
    tags: ["Three.js", "React", "Vite"],
    desc: "Visualización 3D interactiva de productos con navegación inmersiva y animaciones en tiempo real.",
    metricas: [{ valor: "3D", label: "Interactivo" }, { valor: "9", label: "Escenas" }],
    thumbnail: "/portfolio/Aqualinks_3d/1.png",
    slug: "aqualinks-3d",
  },
  {
    num: "08",
    titulo: "Gestión de Carrera Popular",
    empresa: "Cursa Bellvitge",
    tags: ["WordPress", "PHP", "WooCommerce"],
    desc: "Plataforma completa para carreras populares con inscripción online, control de dorsales y resultados.",
    metricas: [{ valor: "8", label: "Pantallas" }, { valor: "500+", label: "Corredores" }],
    thumbnail: "/portfolio/CursaBellvitge/1.png",
    slug: "cursabellvitge",
  },
  {
    num: "09",
    titulo: "Panel de Administración RBAC",
    empresa: "Agetest",
    tags: ["Laravel", "React", "Inertia.js"],
    desc: "Plataforma con autenticación, control de acceso basado en roles, gestión de sesiones y notificaciones.",
    metricas: [{ valor: "RBAC", label: "Permisos" }, { valor: "3", label: "Roles" }],
    thumbnail: "/portfolio/Adminventa/1.png",
    slug: "agetest",
  },
  {
    num: "10",
    titulo: "Plataforma Deportiva OnPlay",
    empresa: "OnPlay",
    tags: ["React", "Node.js", "Socket.io"],
    desc: "Red social deportiva con reservas de pistas, torneos, ranking de jugadores y chat en tiempo real.",
    metricas: [{ valor: "11", label: "Pantallas" }, { valor: "Real-time", label: "Chat" }],
    thumbnail: "/portfolio/Onplay/1.png",
    slug: "onplay",
  },
];

// Mobile shows first 5, desktop shows all 10
const MOBILE_CASOS = CASOS.slice(0, 5);

function CaseCard({ caso, large }: { caso: (typeof CASOS)[number]; large?: boolean }) {
  return (
    <a
      href={`/casos-de-exito/${caso.slug}`}
      className={`group flex-shrink-0 rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#4a64eb]/40 ${
        large ? "w-full md:w-[42vw] lg:w-[36vw]" : "w-full"
      }`}
    >
      {/* Thumbnail */}
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#2a2d3a] ${
        large ? "aspect-[16/11]" : "aspect-[16/10]"
      }`}>
        <Image
          src={caso.thumbnail}
          alt={caso.titulo}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes={large ? "(max-width: 768px) 100vw, 42vw" : "100vw"}
        />
      </div>
      <div className="p-5 md:p-7 flex flex-col flex-1">
        <span className="text-4xl md:text-5xl font-black text-[#2a2d3a] leading-none">{caso.num}</span>
        <h3 className="mt-3 text-base md:text-lg font-bold text-white leading-tight group-hover:text-[#6d86f5] transition-colors">{caso.titulo}</h3>
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
    </a>
  );
}

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
      maxTx = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      runwayHeight = maxTx + window.innerHeight;
      wrapperRef.current.style.height = `${runwayHeight}px`;
    };

    const onScroll = () => {
      if (!wrapperRef.current || maxTx <= 0) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const scrollable = runwayHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(1, scrolled / scrollable);
      setProgress(p);
      setTx(-p * maxTx);
    };

    recalc();
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
            className="flex gap-6 pl-8 lg:pl-[calc((100vw-72rem)/2+2rem)]"
            style={{ transform: `translate3d(${tx}px, 0, 0)` }}
          >
            {CASOS.map((caso) => (
              <CaseCard key={caso.num} caso={caso} large />
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
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#5b75f0]">
                Ser el siguiente <ExternalLink className="h-3 w-3" />
              </a>
              <a href="/casos-de-exito" className="inline-flex items-center gap-2 rounded-full border border-[#4a64eb] px-5 py-2.5 text-xs font-medium text-[#4a64eb] hover:bg-[#4a64eb]/10 transition-colors">
                Descubre +50 proyectos →
              </a>
            </div>
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
          {MOBILE_CASOS.map((caso, i) => (
            <BlurFade key={caso.num} delay={0.05 * i} inView>
              <CaseCard caso={caso} />
            </BlurFade>
          ))}
        </div>
        <div className="mt-8 text-center flex flex-col items-center gap-3">
          <a href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#5b75f0]">
            ¿Listo para ser el siguiente? <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href="/casos-de-exito" className="inline-flex items-center gap-2 rounded-full border border-[#4a64eb] px-6 py-2.5 text-sm font-medium text-[#4a64eb] hover:bg-[#4a64eb]/10 transition-colors">
            Descubre +50 proyectos →
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
