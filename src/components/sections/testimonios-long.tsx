import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { BlurFade } from "@/components/ui/blur-fade"

const reviews = [
  { name: "María G.", username: "Clínica Dental Somrís", body: "Iván transformó nuestra presencia online. Profesional, rápido y con resultados medibles desde el primer mes.", img: "https://avatar.vercel.sh/maria" },
  { name: "Carlos R.", username: "Spikes Energía", body: "El CRM que nos hizo duplicó nuestras ventas. Entiende el negocio, no solo el código.", img: "https://avatar.vercel.sh/carlos" },
  { name: "Ana P.", username: "TradingLateral", body: "Esta tarea era súper tediosa y costosa, e Iván la automatizó por completo. Ahorramos más de 20 horas semanales.", img: "https://avatar.vercel.sh/ana" },
  { name: "Jorge M.", username: "PecadoCarnal", body: "No puedo estar más contento. Iván fue más allá en cada situación. Creó workflows increíbles.", img: "https://avatar.vercel.sh/jorge" },
  { name: "Laura S.", username: "Asesoría Fiscal Lluch", body: "Antes nuestro sistema estaba fragmentado. Iván entró, entendió los gaps y lo simplificó todo.", img: "https://avatar.vercel.sh/laura" },
  { name: "Frank V.", username: "YMF Global", body: "Piensa contigo para resolver los problemas reales de tu negocio. Ha sido vital para nuestros éxitos.", img: "https://avatar.vercel.sh/frank" },
  { name: "David B.", username: "Skale Media", body: "Su conocimiento profundo y profesionalismo destacaron en cada paso. Simplifica conceptos complejos.", img: "https://avatar.vercel.sh/david" },
  { name: "Elena G.", username: "Backbody Project", body: "Los sistemas de automatización que configuró son exactamente lo que necesitaba. Funcionan y son simples.", img: "https://avatar.vercel.sh/elena" },
  { name: "Pedro A.", username: "Goldfaden & Asociados", body: "Trabajo excelente. 10/10 volvería a trabajar con Iván. Atención al detalle impecable.", img: "https://avatar.vercel.sh/pedro" },
  { name: "Nazar H.", username: "BotsCrew", body: "Resultados que superaron todas las expectativas. Profesionalismo, comprensión profunda y habilidad para resolver problemas.", img: "https://avatar.vercel.sh/nazar" },
  { name: "Facundo R.", username: "Good Nomads", body: "Gracias a sus automatizaciones, los leads se añaden al CRM al instante. Nos ha ahorrado muchísimo tiempo.", img: "https://avatar.vercel.sh/facundo" },
  { name: "George B.", username: "Skale Media", body: "Su capacidad para simplificar conceptos complejos hizo todo fluido y productivo. Un crack en IA y automatizaciones.", img: "https://avatar.vercel.sh/george" },
]

const firstRow = reviews.slice(0, 3)
const secondRow = reviews.slice(3, 6)
const thirdRow = reviews.slice(6, 9)
const fourthRow = reviews.slice(9, 12)

function ReviewCard({ img, name, username, body }: { img: string; name: string; username: string; body: string }) {
  return (
    <figure className={cn(
      "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function TestimoniosLong() {
  return (
    <section id="testimonios" className="py-24">
      <div className="mx-auto max-w-6xl mb-12 text-center px-4 md:px-6">
        <BlurFade delay={0.1} inView>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">Testimonios</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Empresas que confían en nosotros</h2>
          <p className="mt-3 text-[#888899] max-w-2xl mx-auto">Descubre cómo empresas están transformando sus operaciones con nuestras soluciones.</p>
        </BlurFade>
      </div>

      <div className="relative flex h-[400px] md:h-[450px] w-full mx-auto max-w-6xl flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] px-4 md:px-6">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {thirdRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {fourthRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f1117]" />
      </div>
    </section>
  )
}
