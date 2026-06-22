import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Drop Network Connective | FTTX Design & Telecom Engineering',
    template: '%s | Drop Network Connective',
  },
  description:
    'Drop Network Connective delivers end-to-end FTTX design and engineering solutions — HLD, LLD, construction drawings, GIS mapping, permitting and fiber network planning for telecom operators, ISPs and contractors in the USA and India.',
  keywords: [
    'FTTX design',
    'HLD LLD',
    'fiber network planning',
    'GIS mapping telecom',
    'construction drawings',
    'permitting support',
    'OSP design',
    'splice sheet preparation',
    'ArcGIS telecom',
    'QGIS fiber',
    'telecom engineering India',
    'USA fiber deployment',
    'Drop Network Connective',
    'dncfiber',
  ],
  authors: [{ name: 'Drop Network Connective', url: 'https://dncfiber.com' }],
  creator: 'Drop Network Connective',
  metadataBase: new URL('https://dncfiber.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dncfiber.com',
    siteName: 'Drop Network Connective',
    title: 'Drop Network Connective | FTTX Design & Telecom Engineering',
    description:
      'End-to-end FTTX design and engineering — HLD, LLD, GIS, construction drawings and permitting for telecom operators and ISPs across the USA and India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drop Network Connective | FTTX Design & Telecom Engineering',
    description:
      'End-to-end FTTX design and engineering solutions for telecom operators, ISPs and contractors.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
