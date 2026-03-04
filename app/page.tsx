import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Services } from "@/components/services"
import { Properties } from "@/components/properties"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Geniso Propiedades",
  alternateName: "Inmobiliaria Geniso",
  url: "https://genisopropiedades.com.ar",
  telephone: ["+54 11 5581 2392", "+54 11 4482 6067"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. de Mayo 2614",
    addressLocality: "Ramos Mejia",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6435,
    longitude: -58.5706,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  foundingDate: "1987",
  sameAs: ["https://www.instagram.com/geniso.propiedades/"],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Properties />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  )
}
