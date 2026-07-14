import type { Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

import './globals.css'

export const metadata: Metadata = {
  title: 'HOF Migration',
  description: 'Company marketing website',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
