"use client"

import { Shield, Users, Calendar } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const TRUST_ITEMS = [
  {
    icon: Calendar,
    title: "Desde 1987",
    description: "Mas de 35 anos de trayectoria en el mercado inmobiliario.",
  },
  {
    icon: Users,
    title: "Atencion cercana",
    description: "Acompanamiento personalizado en cada operacion.",
  },
  {
    icon: Shield,
    title: "Operaciones claras",
    description: "Transparencia y confianza en cada paso del proceso.",
  },
]

export function TrustStrip() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="border-b border-border bg-secondary/60 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 max-w-[240px] text-[13px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
