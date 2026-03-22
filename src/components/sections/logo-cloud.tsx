"use client";

import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

const CLIENTS = ["Spikes Energía", "TradingLateral", "Impakta", "PecadoCarnal", "HomeFit22", "Aqualinks", "HabitRank", "MedicalTrends", "Luzia"];

export function LogoCloud() {
  return (
    <section className="py-16">
      <p className="text-center text-xs font-medium uppercase tracking-[3px] text-[#666677] mb-8">
        Confían en nosotros
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f1117] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f1117] to-transparent z-10" />
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={5}>
            {CLIENTS.map((c) => (
              <span key={c} className="mx-10 text-base font-semibold text-[#555566] transition-colors hover:text-white whitespace-nowrap">
                {c}
              </span>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
}
