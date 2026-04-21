import { PropuestaHero } from "@/components/propuesta/hero-3d";
import { PropuestaServicios } from "@/components/propuesta/servicios-3d";
import { PropuestaProceso } from "@/components/propuesta/proceso-3d";
import { PropuestaCTA } from "@/components/propuesta/cta-3d";
import { FloatingParticles } from "@/components/propuesta/floating-particles";

export default function PropuestaPage() {
  return (
    <main className="relative bg-[#0a0a0f] text-white overflow-hidden">
      {/* Partículas flotantes de fondo */}
      <FloatingParticles />
      
      {/* Hero con efecto 3D */}
      <PropuestaHero />
      
      {/* Servicios con tarjetas 3D */}
      <PropuestaServicios />
      
      {/* Proceso con línea temporal 3D */}
      <PropuestaProceso />
      
      {/* CTA final */}
      <PropuestaCTA />
    </main>
  );
}
