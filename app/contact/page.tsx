import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Contact } from "@/components/site/contact"
import Reveal from "@/components/site/reveal"

export const metadata: Metadata = {
    title: "Contact Priority Dispatch LLC | Talk to a Truck Dispatcher",
    description: "Call (+1) 689-314-8347 or send a request. Priority Dispatch LLC in Kissimmee, FL dispatches reefers, dry vans, flatbeds and box trucks in all 48 states.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/contact",
    },
    openGraph: {
        title: "Contact Priority Dispatch LLC | Talk to a Truck Dispatcher",
        description: "Call (+1) 689-314-8347 or send a request. Priority Dispatch LLC in Kissimmee, FL dispatches reefers, dry vans, flatbeds and box trucks in all 48 states.",
        url: "https://prioritydispatchllc.com/contact",
        type: "website",
        images: ["/images/og-trucks-highway.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Priority Dispatch LLC | Talk to a Truck Dispatcher",
        description: "Call (+1) 689-314-8347 or send a request for truck dispatching services.",
    },
}

export default function ContactPage() {
    return (
        <main>
            <SiteHeader />
            <div className="bg-primary py-12 text-primary-foreground md:py-20 lg:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">Contact a Truck Dispatcher</h1>
                        <p className="mt-6 text-xl opacity-90">
                            Talk to a dispatcher 24/7 at (689) 314-8347, or send a message below. Priority Dispatch LLC is based at 804 Brack St, Kissimmee, FL 34744, and dispatches owner-operators in all 48 states.
                        </p>
                    </Reveal>
                </div>
            </div>
            <Contact />
            <SiteFooter />
        </main>
    )
}
