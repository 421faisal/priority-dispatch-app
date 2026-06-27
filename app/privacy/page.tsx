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

                        <h2>5. Employment and Career Applications</h2>
                        <p>When you apply for employment opportunities through our <a href="/careers" className="text-accent hover:underline font-medium">Careers page</a>, we collect personal information including your name, email address, phone number, resume, cover letter, and any other information you provide in your application.</p>
                        
                        <h3>5.1. How We Use Employment Information</h3>
                        <p>We use the information you provide in your job application to:</p>
                        <ul>
                            <li>Evaluate your qualifications for the position you applied for</li>
                            <li>Communicate with you regarding your application status</li>
                            <li>Conduct background checks and verify references (with your consent)</li>
                            <li>Comply with legal and regulatory requirements</li>
                            <li>Maintain records for equal employment opportunity reporting</li>
                        </ul>

                        <h3>5.2. Retention of Application Data</h3>
                        <p>We retain application materials for a period of up to 2 years from the date of submission. This allows us to consider you for future opportunities that may align with your qualifications. You may request deletion of your application data at any time by contacting us.</p>

                        <h3>5.3. Equal Employment Opportunity</h3>
                        <p>Priority Dispatch LLC is an equal opportunity employer. We do not discriminate based on race, color, religion, sex, national origin, age, disability, veteran status, or any other protected characteristic under applicable law.</p>

                        <h2>6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our employment practices, please <a href="/contact" className="text-accent hover:underline font-medium">contact us here</a>.</p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
