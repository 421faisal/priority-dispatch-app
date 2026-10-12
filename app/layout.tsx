import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppFloating } from '@/components/site/whatsapp-floating'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://prioritydispatchllc.com'),
  title: 'Truck Dispatcher for Owner Operators | Priority Dispatch LLC',
  description: 'Need a truck dispatcher? Priority Dispatch LLC finds high-paying loads for owner operators across all 48 states. Reefers, Dry Vans, Box Trucks & Flatbeds. 24/7 support. No contracts.',
  keywords: 'truck dispatcher, dispatch services, owner operator dispatch, find loads, load booking, freight dispatch services, reefer dispatch, dry van dispatch, box truck dispatch, flatbed dispatching, priority dispatch llc',
  openGraph: {
    title: 'Truck Dispatcher for Owner Operators | Priority Dispatch LLC',
    description: 'Professional truck dispatcher services for owner operators. We find high-paying loads across all 48 states. 24/7 support. No contracts.',
    url: 'https://prioritydispatchllc.com',
    siteName: 'Priority Dispatch LLC',
    images: [
      {
        url: '/images/hero-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Priority Dispatch LLC - Truck Dispatcher for Owner Operators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PriorityDispatch',
    title: 'Truck Dispatcher for Owner Operators | Priority Dispatch LLC',
    description: 'Professional truck dispatcher finding high-paying loads for owner operators. 24/7 support. No contracts.',
    images: ['/images/hero-truck.jpg'],
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
  description: 'Truck dispatching for owner-operators and small fleets in all 48 states.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '804 Brack St',
    addressLocality: 'Kissimmee',
    addressRegion: 'FL',
    postalCode: '34744',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.2999,
    longitude: -81.4076
  },
  telephone: '+16893148347',
  email: 'prioritydispatch4u@gmail.com',
  url: 'https://prioritydispatchllc.com',
  areaServed: 'US',
  founder: {
    '@type': 'Person',
    name: 'Muhammad Faisal Bilal'
  },
  sameAs: [
    'https://www.facebook.com/prioritydispatchllc',
    'https://www.instagram.com/priority_dispatch',
    'https://twitter.com/PDispatch4u',
    'https://www.linkedin.com/company/priority-dispatch-llc/',
    'https://www.youtube.com/@prioritydispatch4u'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external image/script origins for faster mobile LCP */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
      </head>
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning>
        {/* Google Analytics — lazyOnload for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LP1X3P58HM"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LP1X3P58HM');
          `}
        </Script>
        


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
        <WhatsAppFloating />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
