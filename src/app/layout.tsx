import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montsFonts = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Traducto de voz a Lengua de Señas Mexicanas ',
  description: 'Conectando Culturas, Un Gesto A La Vez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montsFonts.className}>{children}</body>
    </html>
  )
}
