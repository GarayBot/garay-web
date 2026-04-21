import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { BlurFade } from "@/components/ui/blur-fade"

const reviews = [
  { name: "María G.", username: "Directora Clínica Dental Somrís", body: "Estoy 100% segura de que va a entregar un proyecto excelente y hará todo lo necesario para que estés satisfecho. Nuestra web ahora genera citas por sí sola.", img: "https://avatar.vercel.sh/maria" },
  { name: "Carlos R.", username: "CEO Spikes Energía", body: "Iván se sentó con nosotros, entendió los flujos comerciales y construyó un CRM que duplicó nuestras ventas en 3 meses.", img: "https://avatar.vercel.sh/carlos" },
  { name: "Ana P.", username: "Operaciones TradingLateral", body: "Esta tarea era súper tediosa y costosa, e Iván la automatizó por completo. Ahorramos más de 20 horas semanales.", img: "https://avatar.vercel.sh/ana" },
  { name: "Frank V.", username: "Director YMF Global", body: "Piensa contigo para resolver los problemas reales de tu negocio. No es un desarrollador que solo ejecuta — aporta soluciones.", img: "https://avatar.vercel.sh/frank" },
  { name: "Jorge M.", username: "Founder PecadoCarnal", body: "No puedo estar más contento. Iván fue más allá en cada situación. Creó workflows increíbles que gestionan pedidos, stock y envíos de forma automática.", img: "https://avatar.vercel.sh/jorge" },
  { name: "Laura S.", username: "Directora Asesoría Fiscal Lluch", body: "Antes nuestro sistema estaba fragmentado entre 5 herramientas. Iván entró, entendió los gaps y lo simplificó todo en una sola plataforma.", img: "https://avatar.vercel.sh/laura" },
  { name: "David F.", username: "Director Comercial Spikes Energía", body: "El chatbot de WhatsApp atiende consultas 24/7 y cualifica leads automáticamente. La tasa de conversión ha subido un 40%.", img: "https://avatar.vercel.sh/davidf" },
]

const firstRow = reviews.slice(0, 2)
const secondRow = reviews.slice(2, 4)
const thirdRow = reviews.slice(4, 7)

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
          <span className="inline-block px-4 py-2 rounded-full border border-[#4a64eb]/20 bg-[#4a64eb]/5 text-sm text-[#6d86f5] mb-6">Testimonios</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Resultados{" "}
            <span className="bg-gradient-to-r from-[#6d86f5] via-[#4a64eb] to-[#8b5cf6] bg-clip-text text-transparent">reales</span>
            , no promesas
          </h2>
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
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f1117]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f1117]" />
      </div>
    </section>
  )
}
