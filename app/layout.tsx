import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppFloating } from '@/components/site/whatsapp-floating'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Priority Dispatch LLC | Freight Dispatching Services',
  description: 'Priority Dispatch LLC provides expert freight dispatching for Reefers, Dry Vans, Box Trucks, and Owner-Operators. Your road to reliable revenue, speed, and results.',
  keywords: 'freight dispatching, truck dispatch, priority dispatch llc, reefer dispatch, dry van dispatch, box truck dispatch, owner operator services',
  openGraph: {
    title: 'Priority Dispatch LLC | Freight Dispatching Services',
    description: 'Expert freight dispatching for Reefers, Dry Vans, Box Trucks, and Owner-Operators.',
    url: 'https://prioritydispatchllc.com',
    siteName: 'Priority Dispatch LLC',
    images: [
      {
        url: '/images/hero-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Priority Dispatch LLC - Freight Dispatching',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "/images/logo-priority-dispatch.png",
    shortcut: "/images/logo-priority-dispatch.png",
    apple: "/images/logo-priority-dispatch.png",
  },
  alternates: {
    canonical: 'https://prioritydispatchllc.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Priority Dispatch LLC',
  image: 'https://prioritydispatchllc.com/images/logo-priority-dispatch.png',
  description: 'Expert freight dispatching for Reefers, Dry Vans, Box Trucks, and Owner-Operators. Reliable revenue, speed, and results.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '804 brack st',
    addressLocality: 'Kissimmee',
    addressRegion: 'FL',
    postalCode: '34744',
    addressCountry: 'US'
  },
  telephone: '+16893148347',
  email: 'prioritydispatch4u@gmail.com',
  url: 'https://prioritydispatchllc.com'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
        <WhatsAppFloating />
        <Analytics />
      </body>
    </html>
  )
}
