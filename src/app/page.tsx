import { Header } from "@/components/sections/header";
import { DockNav } from "@/components/sections/dock-nav";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { TestimoniosShort } from "@/components/sections/testimonios-short";
import { Servicios } from "@/components/sections/servicios";
import { CTAMid } from "@/components/sections/cta-mid";
import { CasosExito } from "@/components/sections/casos-exito";
import { Proceso } from "@/components/sections/proceso";
import { Integraciones } from "@/components/sections/integraciones";
import { FAQ } from "@/components/sections/faq";
import { TestimoniosLong } from "@/components/sections/testimonios-long";
import { CalSection } from "@/components/sections/cal-section";
import { CTAFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <DockNav />
      <Hero />
      <LogoCloud />
      <TestimoniosShort />
      <Servicios />
      <CTAMid />
      <CasosExito />
      <Proceso />
      <Integraciones />
      <FAQ />
      <TestimoniosLong />
      <CalSection />
      <CTAFinal />
      <Footer />
    </main>
  );
}
