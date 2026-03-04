"use client"

import { Quote } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const TESTIMONIALS = [
  {
    text: "Impecable el trato, justos con el locador y locatarios, totalmente de confianza!",
    author: "Cliente verificado",
  },
  {
    text: "Excelente colega recomendable, muy profesional y responsable.",
    author: "Colega del sector",
  },
  {
    text: "Muy amables y muy buena atencion",
    author: "Cliente verificado",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="testimonios" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Section header */}
        <div
          className={`mx-auto mb-16 max-w-lg text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonios
          </span>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-700 ease-out lg:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              <Quote className="mb-5 h-7 w-7 text-primary/20" />
              <p className="flex-1 text-[15px] leading-relaxed text-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-bold text-primary">
                    {testimonial.author[0]}
                  </span>
                </div>
                <span className="text-[13px] font-medium text-muted-foreground">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
