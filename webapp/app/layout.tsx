import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlos López Carrillo — Backend Architect & Cloud Engineer',
  description: 'Carlos López Carrillo is a backend architect and cloud engineer building dependable platforms, data systems, and useful AI workflows.',
  openGraph: {
    title: 'Carlos López Carrillo — Backend Architect & Cloud Engineer',
    description: 'Software architecture, cloud infrastructure, data systems, and a decade of measurable outcomes.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
