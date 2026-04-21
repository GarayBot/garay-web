import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { BlurFade } from "@/components/ui/blur-fade"

const reviews = [
  { name: "María G.", username: "Clínica Dental Somrís", body: "Iván transformó nuestra presencia online. Profesional, rápido y con resultados medibles desde el primer mes.", img: "https://avatar.vercel.sh/maria" },
  { name: "Carlos R.", username: "CEO Spikes Energía", body: "El CRM que nos hizo duplicó nuestras ventas. Entiende el negocio, no solo el código.", img: "https://avatar.vercel.sh/carlos" },
  { name: "Ana P.", username: "TradingLateral", body: "Automatizó una tarea que nos costaba 20 horas semanales. Ahora funciona sola.", img: "https://avatar.vercel.sh/ana" },
  { name: "Frank V.", username: "Director YMF Global", body: "Piensa contigo para resolver los problemas reales de tu negocio. No es un técnico más.", img: "https://avatar.vercel.sh/frank" },
  { name: "Jorge M.", username: "Founder PecadoCarnal", body: "Fue más allá en cada situación. Los workflows que creó son increíbles.", img: "https://avatar.vercel.sh/jorge" },
  { name: "Laura S.", username: "Asesoría Fiscal Lluch", body: "Nuestro sistema estaba fragmentado. Iván entró, entendió los gaps y lo simplificó todo.", img: "https://avatar.vercel.sh/laura" },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({ img, name, username, body }: { img: string; name: string; username: string; body: string }) {
  return (
    <figure className={cn(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-white/[0.08] bg-white/[0.03] backdrop-blur-md",
      "hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </div>
    </figure>
  )
}

export function TestimoniosShort() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="mx-auto max-w-6xl mb-12 text-center">
        <BlurFade delay={0.1} inView>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Resultados reales, no promesas</h2>
          <p className="mt-3 text-[#888899]">Empresas reales que han escalado sus operaciones con nuestras soluciones.</p>
        </BlurFade>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f1117]" />
      </div>
    </section>
  )
}
