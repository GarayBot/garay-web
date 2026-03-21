"use client";

import { motion } from "framer-motion";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

const ROW_1 = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "WordPress", logo: null },
  { name: "n8n", logo: null },
  { name: "OpenAI", logo: null },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
];

const ROW_2 = [
  { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
  { name: "Supabase", logo: null },
  { name: "Prisma", logo: null },
  { name: "Shopify", logo: null },
  { name: "Stripe", logo: null },
  { name: "Make", logo: null },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
];

function Pill({ name, logo }: { name: string; logo: string | null }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-[#2a2d3a] bg-[#1a1d27] px-5 py-2.5 text-sm font-medium text-[#d1d5db] transition-colors hover:border-[#5b75f0]/40 hover:text-white whitespace-nowrap mx-2">
      {logo && (
        <img src={logo} alt={name} className="h-5 w-5" />
      )}
      {name}
    </span>
  );
}

export function Integraciones() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Utilizamos las últimas tecnologías
          </h2>
          <p className="mt-3 text-[#888899]">
            Trabajamos con las herramientas más modernas del mercado para crear soluciones robustas y escalables.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0f1117] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0f1117] to-transparent" />

        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={5} className="mb-4">
            {ROW_1.map((item) => (
              <Pill key={item.name} name={item.name} logo={item.logo} />
            ))}
          </ScrollVelocityRow>

          <ScrollVelocityRow baseVelocity={5} direction={-1}>
            {ROW_2.map((item) => (
              <Pill key={item.name} name={item.name} logo={item.logo} />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      <p className="text-center text-sm text-[#6b7280] mt-8">
        ¿No ves tu herramienta? Podemos integrarnos con la tuya.
      </p>
    </section>
  );
}
