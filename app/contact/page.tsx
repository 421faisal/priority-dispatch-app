import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Contact } from "@/components/site/contact"
import Reveal from "@/components/site/reveal"

export const metadata: Metadata = {
    title: "Contact Us — Priority Dispatch LLC | Freight Dispatching Solutions",
    description: "Ready to maximize your earnings? Contact Priority Dispatch LLC today for expert freight dispatching services across all 48 states.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/contact",
    },
}

export default function ContactPage() {
    return (
        <main>
            <SiteHeader />
            <div className="bg-primary py-12 text-primary-foreground md:py-20 lg:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">Get in Touch</h1>
                        <p className="mt-6 text-xl opacity-90">
                            We are ready to handle your dispatching needs 24/7. Reach out today and start moving higher-paying loads.
                        </p>
                    </Reveal>
                </div>
            </div>
            <Contact />
            <SiteFooter />
        </main>
    )
}
