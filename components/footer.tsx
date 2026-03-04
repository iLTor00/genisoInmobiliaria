import { Phone } from "lucide-react"

const FOOTER_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#propiedades", label: "Propiedades" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-foreground py-14 text-background">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold leading-none text-primary-foreground">
                  G
                </span>
              </div>
              <span className="font-heading text-[15px] font-bold tracking-tight text-background">
                Geniso Propiedades
              </span>
            </div>
            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-background/50">
              Inmobiliaria de confianza en Ramos Mejia desde 1987.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/35">
              Navegacion
            </h4>
            <nav className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-background/55 transition-colors hover:text-background"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/35">
              Contacto
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px] text-background/55">
              <a
                href="tel:+541155812392"
                className="flex items-center gap-2 transition-colors hover:text-background"
              >
                <Phone className="h-3.5 w-3.5" />
                +54 11 5581 2392
              </a>
              <a
                href="tel:+541144826067"
                className="flex items-center gap-2 transition-colors hover:text-background"
              >
                <Phone className="h-3.5 w-3.5" />
                +54 11 4482 6067
              </a>
            </div>
          </div>

          {/* Location + Social */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/35">
              Ubicacion
            </h4>
            <p className="text-[13px] leading-relaxed text-background/55">
              Av. de Mayo 2614
              <br />
              Ramos Mejia, Buenos Aires
            </p>
            <a
              href="https://www.instagram.com/geniso.propiedades/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[13px] text-background/55 transition-colors hover:text-background"
              aria-label="Instagram de Geniso Propiedades"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 border-t border-background/10 pt-6 text-center">
          <p className="text-[11px] tracking-wide text-background/30">
            {`\u00A9 ${new Date().getFullYear()} Geniso Propiedades. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
