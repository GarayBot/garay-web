"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Bot, Sparkles, Zap, Code, BarChart3 } from "lucide-react";

interface ServicioCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

function ServicioCard({ icon, title, description, features, index }: ServicioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className="relative p-5 sm:p-8 rounded-3xl border border-[#2a2d3a]/50 bg-[#111118]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#4a64eb]/30"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74,100,235,0.15) 0%, transparent 50%)`
            : undefined,
        }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(109,134,245,0.2) 0%, transparent 60%)`,
          }}
        />

        {/* Icon */}
        <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4a64eb]/20 to-[#6d86f5]/10 border border-[#4a64eb]/20 group-hover:scale-110 transition-transform duration-300">
          <div className="text-[#6d86f5]">{icon}</div>
        </div>

        {/* Content */}
        <h3 className="relative text-xl font-bold text-white mb-3">{title}</h3>
        <p className="relative text-[#9999aa] text-sm leading-relaxed mb-6">{description}</p>

        {/* Features */}
        <ul className="relative space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-[#777788]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a64eb]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* 3D tilt border */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#4a64eb]/20 transition-colors duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}

const servicios = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Webs que Venden",
    description: "Landing pages y webs corporativas diseñadas para convertir visitantes en clientes. Optimizadas para velocidad, SEO y experiencia de usuario.",
    features: ["Diseño a medida", "SEO técnico", "Analytics integrado", "A/B testing"],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Chatbots con IA",
    description: "Asistentes inteligentes que atienden a tus clientes 24/7, cualifican leads y responden preguntas frecuentes automáticamente.",
    features: ["GPT-4o integrado", "WhatsApp / Web", "Base de conocimiento", "Analytics"],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Automatizaciones",
    description: "Conectamos tus herramientas y eliminamos tareas repetitivas. Workflows inteligentes que ahorran horas cada semana.",
    features: ["n8n / Make", "CRM sync", "Email automation", "Reportes automáticos"],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Apps a Medida",
    description: "Aplicaciones web y móviles construidas desde cero para resolver problemas específicos de tu negocio.",
    features: ["Next.js / React", "APIs REST", "Base de datos", "Deploy cloud"],
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "CRM Personalizado",
    description: "Sistema de gestión de clientes adaptado a tu flujo de trabajo. No más Excel ni notas dispersas.",
    features: ["Pipeline visual", "Tareas automáticas", "Integración email", "Dashboards"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Análisis & Datos",
    description: "Dashboards y reportes que te muestran exactamente qué está funcionando y qué necesita mejora.",
    features: ["KPIs en tiempo real", "Funnels", "Cohort analysis", "Alertas"],
  },
];

export function PropuestaServicios() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="servicios" className="relative py-32 px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4a64eb 1px, transparent 1px), linear-gradient(90deg, #4a64eb 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#4a64eb]/20 bg-[#4a64eb]/5 text-sm text-[#6d86f5] mb-6">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Todo lo que necesitas{" "}
            <span className="bg-gradient-to-r from-[#6d86f5] to-[#4a64eb] bg-clip-text text-transparent">
              para crecer
            </span>
          </h2>
          <p className="text-lg text-[#9999aa] max-w-2xl mx-auto">
            Desde la web hasta la automatización completa. Un solo equipo, soluciones integrales.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => (
            <ServicioCard key={servicio.title} {...servicio} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
