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

export const metadata: Metadata = {
  alternates: {
    canonical: "https://prioritydispatchllc.com",
  },
  openGraph: {
    title: "Truck Dispatcher for Owner Operators | Priority Dispatch LLC",
    description: "Professional truck dispatcher services for owner operators. We find high-paying loads across all 48 states. 24/7 support. No contracts.",
    url: "https://prioritydispatchllc.com",
    siteName: "Priority Dispatch LLC",
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Priority Dispatch LLC - Truck Dispatcher for Owner Operators",
      },
    ],
    locale: "en_US",
    type: "website",
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

