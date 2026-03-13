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
  title: 'Priority Dispatch LLC | Freight Dispatching Services',
  description: 'Priority Dispatch LLC delivers elite freight dispatching for Reefers, Dry Vans, Box Trucks & Flatbeds. Maximize carrier revenue with 24/7 support.',
  keywords: 'priority dispatch llc, freight dispatching, trucking dispatch services, reefer dispatch, dry van dispatch, box truck dispatch, flatbed dispatching, owner operator dispatch',
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
  twitter: {
    card: 'summary_large_image',
    site: '@PriorityDispatch',
    title: 'Priority Dispatch LLC | Freight Dispatching Services',
    description: 'Expert freight dispatching for Reefers, Dry Vans, Box Trucks & Flatbeds. 24/7 support.',
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
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
      </head>
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LP1X3P58HM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LP1X3P58HM');
          `}
        </Script>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
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
