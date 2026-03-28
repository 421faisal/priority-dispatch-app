"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Reveal from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How much does a truck dispatcher cost?",
    a: "We charge a simple percentage of the gross load revenue — no flat monthly fees, no hidden charges. So you only pay when you earn. Contact us for an exact quote based on your equipment and operation size.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. There are no lock-in contracts at Priority Dispatch LLC. Because we earn your business every week with results — not paperwork. You can cancel anytime.",
  },
  {
    q: "What states do you dispatch in?",
    a: "We provide truck dispatcher services across all 48 continental states. Whether you run the East Coast, West Coast, or cross-country lanes, we've got you covered.",
  },
  {
    q: "How fast can I get started?",
    a: "Fast. Most owner-operators are set up and running loads within 24–48 hours of submitting their carrier setup form. Just fill in your MC number, insurance info, and equipment type — and we take it from there.",
  },
  {
    q: "What equipment types do you dispatch?",
    a: "Our truck dispatchers work with Reefers, Dry Vans, Box Trucks, Flatbeds, Step Decks, and more. So regardless of your equipment, we can find you high-paying loads that fit.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown className={cn("h-5 w-5 flex-none text-primary transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="border-t border-border px-6 py-4 text-sm leading-relaxed text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  )
}

export function HomeFAQ() {
  return (
    <section id="faq-home" className="bg-muted border-t border-border/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Questions about our truck dispatcher services? Here are the answers most owner-operators ask us first.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={i} delayMs={60 * i}>
              <FAQItem q={item.q} a={item.a} />
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <div className="mt-8 text-center">
            <a href="/faq" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              See all FAQs →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
