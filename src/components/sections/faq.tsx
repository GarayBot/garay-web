"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    q: "¿Qué tipo de webs desarrolláis?",
    a: "Desarrollamos desde landing pages y webs corporativas hasta plataformas SaaS complejas, e-commerce, CRMs a medida y aplicaciones web con Next.js, React y Node.js. Cada proyecto se adapta 100% a las necesidades del negocio.",
  },
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Una web profesional desde 1.500€. Apps a medida entre 3.000€-10.000€. Siempre presupuesto cerrado antes de empezar — sin sorpresas. La consulta inicial es gratis.",
  },  {
    q: "¿Cuánto tiempo tarda un proyecto en estar listo?",
    a: "Una landing page puede estar lista en 1-2 semanas. Proyectos más complejos como CRMs o plataformas suelen tardar entre 4 y 8 semanas. Siempre damos plazos realistas y los cumplimos.",
  },
  {
    q: "¿Ofrecéis mantenimiento después del lanzamiento?",
    a: "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitorización, soporte técnico y mejoras continuas. Tu web siempre estará en las mejores manos.",
  },
  {
    q: "¿Qué tecnologías utilizáis?",
    a: "Trabajamos principalmente con Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL y Prisma. También integramos herramientas de IA (OpenAI, n8n), WordPress, Shopify y +100 herramientas más.",
  },
  {
    q: "¿Hacéis también automatizaciones e integraciones con IA?",
    a: "Sí, es una de nuestras especialidades. Desarrollamos chatbots con IA, automatizamos flujos de trabajo con n8n y Make, e integramos APIs para eliminar tareas manuales y repetitivas.",
  },
  {
    q: "¿Puedo ver ejemplos de proyectos anteriores?",
    a: "Por supuesto. En nuestra sección de Casos de Éxito puedes ver proyectos como el CRM de Spikes Energía, el chatbot de Luzia o la plataforma Impakta. También podemos mostrarte más ejemplos en la consulta inicial.",
  },
  {
    q: "¿Por qué Garay y no una agencia grande?",
    a: "Porque hablas directamente con nuestro equipo técnico — diseñamos, desarrollamos y desplegamos todo internamente. Sin comerciales, sin intermediarios. Más rápido, más barato y con mejor comunicación que una agencia grande.",
  },
  {
    q: "¿Qué pasa si no me gusta el resultado?",
    a: "Trabajamos con un proceso iterativo con revisiones en cada fase. Nunca avanzamos sin tu aprobación. Además, incluimos rondas de revisión ilimitadas hasta que el resultado sea exactamente lo que necesitas.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Empezamos con una consulta estratégica gratuita donde analizamos tu negocio. Luego diseñamos un plan personalizado, arrancamos el desarrollo con entregas semanales y finalmente optimizamos y escalamos juntos.",
  },
  {
    q: "¿Ofrecéis diseño UX/UI además de desarrollo?",
    a: "Sí, cada proyecto incluye diseño UX/UI profesional. Creamos interfaces modernas, intuitivas y optimizadas para conversión. No necesitas contratar un diseñador aparte.",
  },
  {
    q: "¿Qué pasa si mi web actual no vende?",
    a: "Es más común de lo que crees. Hacemos una auditoría gratuita en la consulta y te decimos exactamente qué está fallando y cómo solucionarlo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#4a64eb]/20 bg-[#4a64eb]/5 text-sm text-[#6d86f5] mb-6 text-center">FAQ</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-[#888899]">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion>
            {FAQ_DATA.map((item, i) => (
              <AccordionItem
                key={i}
                className="border-[#2a2d3a]"
              >
                <AccordionTrigger className="py-5 text-sm md:text-base font-medium text-white hover:no-underline hover:text-[#6d86f5] transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#9ca3af] leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
