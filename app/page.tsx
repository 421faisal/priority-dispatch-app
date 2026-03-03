import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Stats } from "@/components/site/stats"
import { Testimonials } from "@/components/site/testimonials"
import { Contact } from "@/components/site/contact"
import { BlogPreview } from "@/components/site/blog-preview"
import { SiteFooter } from "@/components/site/site-footer"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <Contact />
      <SiteFooter />
    </main>
  )
}
