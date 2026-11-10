import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { WhatIsDispatcher } from "@/components/site/what-is-dispatcher"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Benefits } from "@/components/site/benefits"
import { HowWeFindLoads } from "@/components/site/how-we-find-loads"
import { Stats } from "@/components/site/stats"
import { EEATAuthor } from "@/components/site/eeat-author"
import { Testimonials } from "@/components/site/testimonials"
import { HomeFAQ } from "@/components/site/home-faq"
import { BlogPreview } from "@/components/site/blog-preview"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"
import type { Metadata } from "next"

const title = "Truck Dispatcher & Dispatch Services USA | Priority Dispatch"
const description = "Truck and freight dispatch services for owner-operators and small fleets in all 48 states. High-paying loads, 24/7 support, from 4% of gross, no contracts."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://prioritydispatchllc.com",
    languages: {
      en: "https://prioritydispatchllc.com",
      es: "https://prioritydispatchllc.com/es/despacho-de-camiones",
      "x-default": "https://prioritydispatchllc.com",
    },
  },
  openGraph: {
    title,
    description,
    url: "https://prioritydispatchllc.com",
    siteName: "Priority Dispatch LLC",
    images: [
      {
        url: "/images/og-trucks-highway.jpg",
        width: 1200,
        height: 630,
        alt: "Priority Dispatch LLC - Truck Dispatcher for Owner Operators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-trucks-highway.jpg"],
  },
}

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <WhatIsDispatcher />
      <About />
      <Services />
      <Benefits />
      <HowWeFindLoads />
      <Stats />
      <EEATAuthor />
      <Testimonials />
      <HomeFAQ />
      <BlogPreview />
      <Contact />
      <SiteFooter />
    </main>
  )
}

