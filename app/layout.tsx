import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#5271FF',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Geniso Propiedades | Inmobiliaria en Ramos Mejia desde 1987',
  description:
    'Inmobiliaria Geniso: ventas, alquileres y tasaciones en Ramos Mejia, Buenos Aires. Desde 1987 brindando confianza y atencion personalizada.',
  keywords: [
    'inmobiliaria',
    'Ramos Mejia',
    'propiedades',
    'venta',
    'alquiler',
    'tasaciones',
    'Buenos Aires',
    'Geniso',
  ],
  openGraph: {
    title: 'Geniso Propiedades | Inmobiliaria en Ramos Mejia desde 1987',
    description:
      'Ventas, alquileres y tasaciones en Ramos Mejia. Confianza desde 1987.',
    url: 'https://genisopropiedades.com.ar',
    siteName: 'Geniso Propiedades',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
