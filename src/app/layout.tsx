import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'The Sprouse-Prouse Family: An Eight-Century Commercial History',
  description: 'An Eight-Century Analysis of the Sprouse-Prouse Family and the Infrastructure of Power.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}