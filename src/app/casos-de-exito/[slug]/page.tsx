import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/data/portfolio";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Garay`,
    description: project.description.slice(0, 160),
  };
}

export default async function CasoDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      {/* Header */}
      <section className="relative overflow-hidden pt-16 pb-8">
        <DotPattern
          className="opacity-10 text-[#4a64eb]"
          width={24}
          height={24}
          cr={0.8}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <BlurFade delay={0.05} inView>
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center gap-2 text-sm text-[#666677] hover:text-[#4a64eb] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              ← Volver al portfolio
            </Link>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
          </BlurFade>

          {project.tags.length > 0 && (
            <BlurFade delay={0.15} inView>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-[#333344] bg-[#1a1a24] text-[#aaaabc]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BlurFade>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        <BlurFade delay={0.2} inView>
          {project.images.length > 0 ? (
            <ProjectGallery imagenes={project.images} nombre={project.title} />
          ) : (
            <div className="rounded-xl border border-[#2a2d3a] bg-gradient-to-br from-[#4a64eb]/10 to-[#2a2d3a] h-64 flex items-center justify-center">
              <span className="text-5xl font-bold text-white/10">{project.title.charAt(0)}</span>
            </div>
          )}
        </BlurFade>
      </section>

      {/* Descripción */}
      {project.description && (
        <section className="mx-auto max-w-4xl px-6 py-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">Descripción</h2>
            <div className="rounded-xl border border-[#2a2d3a] bg-[#1a1a24] p-6 md:p-8">
              <p className="text-[#999aab] leading-relaxed text-base whitespace-pre-line">{project.description}</p>
            </div>
          </BlurFade>
        </section>
      )}

      {/* El Reto */}
      {project.challenge && (
        <section className="mx-auto max-w-4xl px-6 py-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">El Reto</h2>
            <div className="rounded-xl border border-[#2a2d3a] bg-[#1a1a24] p-6 md:p-8">
              <p className="text-[#999aab] leading-relaxed text-base whitespace-pre-line">{project.challenge}</p>
            </div>
          </BlurFade>
        </section>
      )}

      {/* La Solución */}
      {project.solution && (
        <section className="mx-auto max-w-4xl px-6 py-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">La Solución</h2>
            <div className="rounded-xl border border-[#2a2d3a] bg-[#1a1a24] p-6 md:p-8">
              <p className="text-[#999aab] leading-relaxed text-base whitespace-pre-line">{project.solution}</p>
              {project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#4a64eb]/10 text-[#6d86f5] border border-[#4a64eb]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </BlurFade>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-[#2a2d3a] mt-8 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl md:text-3xl font-bold">¿Quieres un proyecto similar?</h2>
            <p className="mt-3 text-[#777788] max-w-lg mx-auto">
              Cada proyecto empieza con una conversación. Cuéntanos qué necesitas y te decimos cómo podemos ayudarte.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-[#4a64eb] px-8 py-3 text-sm font-medium text-white hover:bg-[#5b75f0] transition-colors"
              >
                Contactar ahora
              </a>
              <Link
                href="/casos-de-exito"
                className="text-sm text-[#666677] hover:text-[#4a64eb] transition-colors"
              >
                ← Ver más proyectos
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
