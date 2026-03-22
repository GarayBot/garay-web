import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { BlurFade } from "@/components/ui/blur-fade"

const reviews = [
  { name: "María G.", username: "Clínica Dental Somrís", body: "Estoy 100% segura de que va a entregar un proyecto excelente y hará todo lo necesario para que estés satisfecho.", img: "https://avatar.vercel.sh/maria" },
  { name: "Carlos R.", username: "Spikes Energía", body: "Muy claro en su comunicación, muy conciso en su forma de trabajar. Y en cuanto a los entregables, simplemente cumple.", img: "https://avatar.vercel.sh/carlos" },
  { name: "Ana P.", username: "TradingLateral", body: "Esta tarea era súper tediosa y costosa, e Iván la automatizó por completo.", img: "https://avatar.vercel.sh/ana" },
  { name: "Frank V.", username: "YMF Global", body: "Piensa contigo para resolver los problemas reales de tu negocio. Con mucha experiencia resolviendo problemas empresariales.", img: "https://avatar.vercel.sh/frank" },
  { name: "Jorge M.", username: "PecadoCarnal", body: "No puedo estar más contento. Iván fue más allá en cada situación. Creó workflows increíbles.", img: "https://avatar.vercel.sh/jorge" },
  { name: "Laura S.", username: "Asesoría Fiscal Lluch", body: "Antes nuestro sistema estaba fragmentado. Iván entró, entendió los gaps y lo simplificó todo.", img: "https://avatar.vercel.sh/laura" },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({ img, name, username, body }: { img: string; name: string; username: string; body: string }) {
  return (
    <figure className={cn(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
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

export function TestimoniosShort() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="mx-auto max-w-6xl mb-12 text-center">
        <BlurFade delay={0.1} inView>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
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
