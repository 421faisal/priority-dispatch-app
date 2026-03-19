import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ShieldCheck, Building, FileText, Anchor } from "lucide-react"

export const metadata: Metadata = {
    title: "New Carrier Setup & MC Lease Services | Priority Dispatch LLC",
    description: "Expert A-Z setup for new trucking companies. We handle your LLC, MC Authority, BOC-3, Insurance compliance, IFTA, IRP plates, and build your website.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/services/new-carrier-setup",
    },
}

const inclusions = [
    { title: "LLC Formation & EIN", desc: "We register your corporate entity and obtain your Employer Identification Number securely." },
    { title: "USDOT & MC Authority", desc: "Navigating the FMCSA portal to secure your operational authority without painful delays." },
    { title: "BOC-3 Filing", desc: "Assigning your federally mandated Process Agents across all 50 states." },
    { title: "Insurance Navigation", desc: "Guiding you to bind commercial auto liability and cargo insurance within the strict 90-day widow." },
    { title: "UCR & Form 2290", desc: "Filing your Unified Carrier Registration and Heavy Highway Vehicle Use Tax (IRS 2290)." },
    { title: "IRP Plates & IFTA", desc: "Managing apportioned plates and fuel tax agreements once your MC is officially active." },
    { title: "Free Corporate Website", desc: "We build a professional, custom website for your new MC to establish trust with brokers." },
    { title: "State Specific Permits", desc: "Securing KYU, NY HUT, NM, or OR weight-mile tax permits based on your running lanes." },
]

export default function NewCarrierSetupPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <SiteHeader />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-32">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="A team of dispatchers and logistics experts reviewing compliance documents in a corporate office."
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative mx-auto max-w-5xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
                            Start Your Trucking Company the Right Way
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg sm:text-xl opacity-90 mb-10">
                            The bureaucracy of the FMCSA can break a new carrier before they haul a single load. Let our experts handle the A-to-Z process of securing your LLC, MC Authority, complex permits, and digital branding.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/contact">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-md px-8">
                                    Start My Setup Now
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-muted">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl border border-border">
                                <img 
                                    src="https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="A pristine commercial fleet driving confidently on the interstate, representing a legally compliant trucking company."
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </Reveal>
                        <Reveal delayMs={100}>
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 text-primary">
                                    Why Pay Professionals to Do It?
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    Many aspiring owner-operators attempt to file their own paperwork to save money. The result? They run afoul of the FMCSA's strict deadlines. If you apply for an MC number but fail to bind commercial insurance within exactly <strong>90 days</strong>, your application is dismissed and your money is forfeited. <br/><br/>
                                    If you attempt to secure IRP plates before your MC is active, you will be rejected. 
                                    We manage the razor-thin timeline sequencing. We ensure your insurance is bound, your UCR is paid, and your 2290 is stamped exactly when the DOT requires it—saving you thousands of dollars in delays.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                                        <span className="text-foreground"><strong>Avoid The 90-Day Trap:</strong> We sequence your DOT filings directly with your insurance vendor.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Anchor className="w-6 h-6 text-accent shrink-0" />
                                        <span className="text-foreground"><strong>Compliance Peace of Mind:</strong> We guarantee your BOC-3 and IFTA setups are flawless.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Building className="w-6 h-6 text-accent shrink-0" />
                                        <span className="text-foreground"><strong>Free Corporate Identity:</strong> A professional website included to help you pass intense broker vetting.</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Included Services Grid */}
            <section className="py-20 bg-background">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-primary">
                            The Complete Formation Package
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
                            From the moment you decide to start a trucking company to the moment you are legally cleared to cross state lines. Here is exactly what is included.
                        </p>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                        {inclusions.map((item, i) => (
                            <Reveal key={i} delayMs={50 * i}>
                                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm h-full hover:shadow-md transition-shadow">
                                    <FileText className="w-8 h-8 text-accent mb-4" />
                                    <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-accent text-accent-foreground text-center">
                <Reveal>
                    <div className="mx-auto max-w-3xl px-4">
                        <h2 className="text-3xl font-extrabold mb-6">Don't Delay Your Authority Anymore</h2>
                        <p className="text-xl mb-10 opacity-90">
                            Contact Priority Dispatch today. We will outline the exact timeline and capital required for your specific state to get your company operating legally.
                        </p>
                        <a href="/contact">
                            <Button size="lg" variant="secondary" className="font-bold text-lg px-10 h-14 bg-white text-accent hover:bg-gray-100 shadow-xl">
                                Book a Free Setup Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </div>
                </Reveal>
            </section>

            <SiteFooter />
        </main>
    )
}
