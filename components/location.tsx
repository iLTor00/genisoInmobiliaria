"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const WHATSAPP_URL =
  "https://wa.me/541155812392?text=Hola%2C%20me%20contacto%20desde%20la%20web"

export function Location() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="contacto"
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
            Contacto
          </span>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Visitanos en nuestra oficina
          </h2>
        </div>

        <div
          className={`grid gap-6 lg:grid-cols-5 lg:gap-8 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Info column */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Address */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    Direccion
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    Av. de Mayo 2614
                    <br />
                    Ramos Mejia, Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    Horarios
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    Lunes a Viernes: 10:00 - 18:00
                    <br />
                    {"Sabados y Domingos: Cerrado"}
                  </p>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    Telefonos
                  </h3>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">
                    <a
                      href="tel:+541155812392"
                      className="transition-colors hover:text-primary"
                    >
                      +54 11 5581 2392
                    </a>
                    <br />
                    <a
                      href="tel:+541144826067"
                      className="transition-colors hover:text-primary"
                    >
                      +54 11 4482 6067
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-lg bg-whatsapp px-7 py-3.5 text-sm font-semibold text-background shadow-md shadow-whatsapp/15 transition-all hover:shadow-lg hover:shadow-whatsapp/20 hover:brightness-110"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactanos por WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="h-full min-h-[400px] overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Ubicacion de Geniso Propiedades en Ramos Mejia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9997071018597!2d-58.57062!3d-34.6435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e4a5f32ca5%3A0xd3d1eadb8e5d4c0a!2sAv.%20de%20Mayo%202614%2C%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
