import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { CarrierSetupForm } from "@/components/site/carrier-setup-form"

export const metadata: Metadata = {
    title: "Carrier Setup & Registration | Priority Dispatch LLC",
    description: "Join Priority Dispatch LLC today. Securely upload your MC authority, W-9, and COI to start receiving high-paying freight loads. Fast carrier onboarding.",
    openGraph: {
        title: "Carrier Setup & Registration | Priority Dispatch LLC",
        description: "Start working with Priority Dispatch LLC. Upload your documents and get loaded fast.",
        url: "https://prioritydispatchllc.com/carrier-setup",
    },
    alternates: {
        canonical: "https://prioritydispatchllc.com/carrier-setup",
    },
}

export default function CarrierSetupPage() {
    return (
        <div className="flex min-h-screen flex-col bg-muted/50">
            <SiteHeader />
            <main className="flex-1">
                <section className="bg-primary py-12 text-primary-foreground md:py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Carrier Setup</h1>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Join Priority Dispatch LLC. Upload your documents securely and let&apos;s get you loaded.
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
