"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { PROJECTS_SORTED, type Project } from "@/data/portfolio";

const CATEGORIES = [
  { label: "Todos", filter: () => true },
  { label: "Web", filter: (p: Project) => /wordpress|html|landing|web|corporativ/i.test(p.tags.join(" ") + " " + p.description) },
  { label: "App", filter: (p: Project) => /react|next\.js|vue|vite|spa|app|pwa/i.test(p.tags.join(" ")) },
  { label: "CRM", filter: (p: Project) => /crm|erp|gestion|dashboard|admin/i.test(p.description + " " + p.title) },
  { label: "E-commerce", filter: (p: Project) => /woocommerce|shopify|e-commerce|ecommerce|tienda/i.test(p.tags.join(" ") + " " + p.description) },
  { label: "Diseño", filter: (p: Project) => /branding|diseño|mockup|ui\/ux|figma/i.test(p.tags.join(" ") + " " + p.description) },
];

function truncate(text: string, max: number): string {
  if (!text || text.length <= max) return text || "";
  return text.substring(0, max).replace(/\s+\S*$/, "") + "…";
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const thumbnail = project.images.length > 0 ? project.images[0] : null;

  return (
    <BlurFade delay={0.04 * Math.min(index, 12)} inView>
      <Link href={`/casos-de-exito/${project.slug}`} className="group block h-full">
        <div className="h-full rounded-2xl border border-[#2a2d3a] bg-[#1a1a24] overflow-hidden transition-all duration-300 group-hover:border-[#4a64eb]/40 group-hover:scale-[1.02]">
          {/* Thumbnail */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#2a2d3a]">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a64eb]/20 to-[#2a2d3a] flex items-center justify-center">
                <span className="text-3xl font-bold text-white/10">{project.title.charAt(0)}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#6d86f5] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#777788] mt-2 leading-relaxed">
              {truncate(project.description, 110)}
            </p>
            {project.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md border border-[#333344] bg-[#222230] text-[#aaaabc]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 text-xs font-medium text-[#4a64eb] group-hover:text-[#6d86f5] transition-colors">
              Ver proyecto →
            </div>
          </div>
        </div>
      </Link>
    </BlurFade>
  );
}

export default function CasosDeExitoPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const filtered = useMemo(() => {
    return PROJECTS_SORTED.filter(CATEGORIES[activeCategory].filter);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      {/* Mini Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <DotPattern
          className="opacity-20 text-[#4a64eb]"
          width={20}
          height={20}
          cr={1}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
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
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">Portfolio</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Nuestro Portfolio
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="mt-4 text-lg text-[#777788] max-w-2xl">
              +50 proyectos entregados. Desde CRMs completos hasta plataformas SaaS, e-commerce y webs corporativas.
              Aquí están todos.
            </p>
          </BlurFade>

          {/* Category Filter */}
          <BlurFade delay={0.3} inView>
            <div className="mt-8 flex flex-wrap gap-2">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(i)}
                  className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === i
                      ? "bg-[#4a64eb] border-[#4a64eb] text-white"
                      : "border-[#2a2d3a] text-[#777788] hover:border-[#4a64eb]/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                  {i === 0 && (
                    <span className="ml-1.5 text-xs opacity-60">({PROJECTS_SORTED.length})</span>
                  )}
                </button>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#666677]">
            No hay proyectos en esta categoría.
          </div>
        )}
      </section>

      {/* CTA final */}
      <section className="border-t border-[#2a2d3a] py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl md:text-3xl font-bold">¿Quieres ser el siguiente?</h2>
            <p className="mt-3 text-[#777788]">Hablemos de tu proyecto sin compromiso.</p>
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
