"use client"

import { Home, Key, ClipboardList } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const SERVICES = [
  {
    icon: Home,
    title: "Ventas",
    description:
      "Te ayudamos a vender tu propiedad al mejor precio del mercado, con una estrategia personalizada y difusion en los principales portales.",
  },
  {
    icon: Key,
    title: "Alquileres",
    description:
      "Gestionamos el alquiler de tu inmueble de forma integral: busqueda de inquilinos, contratos y seguimiento.",
  },
  {
    icon: ClipboardList,
    title: "Tasaciones",
    description:
      "Valuamos tu propiedad con criterio profesional basado en nuestra amplia experiencia en la zona.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="servicios" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Section header */}
        <div
          className={`mx-auto mb-16 max-w-lg text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Nuestros servicios
          </span>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas en un solo lugar
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group rounded-2xl border border-border bg-card p-7 transition-all duration-700 ease-out hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 lg:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <service.icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
