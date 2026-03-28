import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { WhatIsDispatcher } from "@/components/site/what-is-dispatcher"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { HowDispatchWorks } from "@/components/site/how-dispatch-works"
import { Benefits } from "@/components/site/benefits"
import { HowWeFindLoads } from "@/components/site/how-we-find-loads"
import { Stats } from "@/components/site/stats"
import { EEATAuthor } from "@/components/site/eeat-author"
import { Testimonials } from "@/components/site/testimonials"
import { HomeFAQ } from "@/components/site/home-faq"
import { BlogPreview } from "@/components/site/blog-preview"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <WhatIsDispatcher />
      <About />
      <Services />
      <HowDispatchWorks />
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

