import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { CarrierSetupForm } from "@/components/site/carrier-setup-form"

export const metadata: Metadata = {
    title: "Get Started with a Truck Dispatcher | Priority Dispatch LLC",
    description: "Start with Priority Dispatch LLC. Submit your MC number, W-9 and insurance (COI) and get matched with a dedicated truck dispatcher.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/carrier-setup",
    },
    openGraph: {
        title: "Get Started with a Truck Dispatcher | Priority Dispatch LLC",
        description: "Start with Priority Dispatch LLC. Submit your MC number, W-9 and insurance (COI) and get matched with a dedicated truck dispatcher.",
        url: "https://prioritydispatchllc.com/carrier-setup",
        type: "website",
        images: ["/images/og-trucks-highway.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Get Started with a Truck Dispatcher | Priority Dispatch LLC",
        description: "Submit your MC number, W-9 and insurance (COI) and get matched with a dedicated truck dispatcher.",
    },
}

export default function CarrierSetupPage() {
    return (
        <div className="flex min-h-screen flex-col bg-muted/50">
            <SiteHeader />
            <main className="flex-1">
                <section className="bg-primary py-12 text-primary-foreground md:py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Start Dispatching: Carrier Setup</h1>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Send your MC authority, W-9 and certificate of insurance securely. We set up your carrier packets and can book your first load within 24 to 48 hours.
                        </p>
                    </div>
                </section>

                <section className="py-12 md:py-16">
                    <div className="mx-auto max-w-3xl px-4">
                        <CarrierSetupForm />
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
