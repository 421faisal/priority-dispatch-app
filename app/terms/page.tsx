import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {
    title: "Terms of Service | Priority Dispatch LLC",
    description: "Review the terms of service for Priority Dispatch LLC freight dispatching services. Understand your rights and responsibilities as a carrier partner.",
    alternates: { canonical: "https://prioritydispatchllc.com/terms" },
}

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <section className="bg-muted py-12 md:py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Terms of Service</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="mx-auto max-w-4xl px-4 prose prose-slate dark:prose-invert">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using the services of Priority Dispatch LLC, you accept and agree to be bound by the terms and provisions of this agreement.</p>

                        <h2>2. Description of Service</h2>
                        <p>Priority Dispatch LLC provides freight dispatching services, negotiating and securing loads on behalf of motor carriers and owner-operators.</p>

                        <h2>3. User Responsibilities</h2>
                        <p>You agree to provide accurate and complete information when registering or utilizing our services. You are responsible for maintaining the confidentiality of any account information.</p>

                        <h2>4. Limitation of Liability</h2>
                        <p>Priority Dispatch LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>

                        <h2>5. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Your continued use of the service constitutes your acceptance of the new terms.</p>

                        <h2>6. Contact Us</h2>
                        <p>If you have any questions about these Terms of Service, please contact us at prioritydispatch4u@gmail.com.</p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
