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
  other: {
    'link-preconnect-unsplash': '<link rel="preconnect" href="https://images.unsplash.com">',
    'link-dns-prefetch-unsplash': '<link rel="dns-prefetch" href="https://images.unsplash.com">',
    'link-preconnect-gtag': '<link rel="preconnect" href="https://www.googletagmanager.com">',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  name: 'Priority Dispatch LLC',
  image: 'https://prioritydispatchllc.com/images/logo-priority-dispatch.png',
  description: 'Professional truck dispatcher services for owner-operators. We find high-paying loads, negotiate rates, and handle all paperwork across all 48 US states.',
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
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+16893148347',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  },
  founder: {
    '@type': 'Person',
    name: 'Muhammad Faisal Bilal',
    jobTitle: 'Founder & CEO',
    url: 'https://www.linkedin.com/in/muhammad-faisal-bilal'
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 10
  },
  sameAs: [
    'https://www.facebook.com/PriorityDispatchLLC',
    'https://www.instagram.com/prioritydispatchllc'
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prioritydispatchllc.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://prioritydispatchllc.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Carrier Setup', item: 'https://prioritydispatchllc.com/carrier-setup' },
    { '@type': 'ListItem', position: 4, name: 'FAQ', item: 'https://prioritydispatchllc.com/faq' },
    { '@type': 'ListItem', position: 5, name: 'About', item: 'https://prioritydispatchllc.com/about-owner' },
  ],
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
        {/* Facebook Pixel — lazyOnload for performance */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'REPLACE_WITH_FB_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=REPLACE_WITH_FB_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
