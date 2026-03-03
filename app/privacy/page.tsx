import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {
    title: "Privacy Policy | Priority Dispatch LLC",
    description: "Read Priority Dispatch LLC's privacy policy. Learn how we collect, use, and protect your personal information when using our freight dispatching services.",
    alternates: { canonical: "https://prioritydispatchllc.com/privacy" },
}

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <section className="bg-muted py-12 md:py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Privacy Policy</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="mx-auto max-w-4xl px-4 prose prose-slate dark:prose-invert">
                        <h2>1. Information We Collect</h2>
                        <p>At Priority Dispatch LLC, we collect information you provide directly to us when using our services, such as your name, email address, phone number, and any other details you choose to share when requesting a quote or contacting us via WhatsApp or our contact forms.</p>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, process quotes, and manage dispatching operations efficiently.</p>

                        <h2>3. Information Sharing</h2>
                        <p>We do not share, sell, or disclose your personal information to third parties except as necessary to provide our services or as required by law.</p>

                        <h2>4. Security</h2>
                        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>

                        <h2>5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at prioritydispatch4u@gmail.com.</p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
