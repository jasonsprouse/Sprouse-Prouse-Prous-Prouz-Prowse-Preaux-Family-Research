import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'The Sprouse-Prouse Family: An Eight-Century Commercial History',
  description: 'Family Lineage Research',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}