"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const PROPERTIES = [
  { image: "/images/property-1.jpg", label: "Departamento en venta" },
  { image: "/images/property-2.jpg", label: "Casa en alquiler" },
  { image: "/images/property-3.jpg", label: "PH en venta" },
  { image: "/images/property-4.jpg", label: "Departamento en alquiler" },
  { image: "/images/property-5.jpg", label: "Casa en venta" },
  { image: "/images/property-6.jpg", label: "Local comercial" },
]

export function Properties() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="propiedades"
      ref={ref}
      className="bg-secondary/60 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Section header */}
        <div
          className={`mx-auto mb-16 max-w-lg text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Propiedades
          </span>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Encontra tu proximo hogar
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property, i) => (
            <div
              key={i}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <Image
                src={property.image}
                alt={property.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-sm font-medium text-background">
                  {property.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="https://www.argenprop.com/geniso-propiedades"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/15 transition-all hover:shadow-lg hover:shadow-primary/20 hover:brightness-110"
          >
            Ver todas en Argenprop
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://www.zonaprop.com.ar/inmobiliarias/german-raggi-inmobiliaria-geniso._30490054-inmuebles.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Ver todas en Zonaprop
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
