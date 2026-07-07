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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
