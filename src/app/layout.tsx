import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'leaflet/dist/leaflet.css'

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
        {children}
      </body>
    </html>
  )
}