import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Calendar, User, ArrowLeft, Linkedin, CheckCircle, ExternalLink, ShieldAlert, GraduationCap, Map } from "lucide-react"

export const metadata: Metadata = {
    title: "How to Start a Trucking Company: From LLC to IRP Plates | Priority Dispatch",
    description: "The ultimate 10/10 guide to starting a trucking company. Learn the exact steps to get your LLC, MC Authority, BOC-3, UCR, IFTA, 2290, and IRP plates. Interstate vs Intrastate explained.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/blog/how-to-start-trucking-company-llc-mc-authority",
    },
}

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent mb-8 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </a>
                        <header className="mb-12 text-center md:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-6 leading-tight">
                                The Ultimate A-to-Z Guide to Starting a Trucking Company (2026 Edition)
                            </h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                                <span className="flex items-center gap-2 font-medium text-foreground">
                                    <Calendar className="h-4 w-4 text-accent" />
                                    March 19, 2026
                                </span>
                                <span className="flex items-center gap-2 font-medium text-foreground">
                                    <User className="h-4 w-4 text-accent" />
                                    Muhammad Faisal Bilal
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-accent" />
                                    25 min read
                                </span>
                            </div>
                        </header>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-border">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                                alt="A warehouse worker utilizing modern technology for automated inventory processing."
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </Reveal>

                    <div className="prose prose-lg dark:prose-invert prose-primary mx-auto max-w-none text-foreground/90 leading-relaxed">
                        <Reveal delayMs={200}>
                            <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-accent pl-6">
                                The barrier to entry in the logistics market is incredibly high. You cannot simply buy a truck and start driving. Between federal mandates, complex tax structures, and insurance requirements, a single missed filing can cost you thousands of dollars in delays. Let me walk you through the exact blueprint for taking your business from a concept to a fully permitted entity ready to book <strong>high-paying freight</strong>.
                            </p>

                            {/* Intrastate vs Interstate block */}
                            <div className="bg-muted border border-border rounded-2xl p-8 my-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Map className="w-32 h-32" />
                                </div>
                                <h2 className="text-3xl font-extrabold flex items-center gap-3 text-primary relative z-10 m-0">
                                    <GraduationCap className="h-8 w-8 text-accent" />
                                    Phase 1: Defining Your Operational Scope
                                </h2>
                                <p className="mt-4 relative z-10 text-foreground/80">
                                    Before you file a single document, you must answer one critical question: <strong>Will you haul Interstate or Intrastate?</strong> The answer dictates every permit you will apply for moving forward.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6 relative z-10">
                                    <div className="bg-background rounded-xl p-5 border border-border/50 shadow-sm">
                                        <h3 className="text-xl font-bold text-accent mb-2">🚚 Interstate Commerce</h3>
                                        <p className="text-sm">
                                            This means crossing state lines, driving across international borders, or transporting cargo that originated in another state (even if <em>your specific truck</em> never leaves the state).<br/><br/>
                                            <strong>Requirements:</strong> You absolutely need a USDOT Number <em>and</em> an active MC Number (Motor Carrier Authority) from the FMCSA. This is the hardest and most expensive route, but it provides access to the entire national freight market.
                                        </p>
                                    </div>
                                    <div className="bg-background rounded-xl p-5 border border-border/50 shadow-sm">
                                        <h3 className="text-xl font-bold text-accent mb-2">🏙️ Intrastate Commerce</h3>
                                        <p className="text-sm">
                                            This means the freight is picked up, transported, and delivered entirely within the borders of a single state. The freight never originated from outside the state.<br/><br/>
                                            <strong>Requirements:</strong> You only need a USDOT Number (in most states) and state-specific commercial vehicle registrations. An MC Number is <em>not</em> required. This is cheaper, but limits you to a highly competitive local market (e.g., local dump trucks, sand, gravel).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>Assuming you want to maximize your revenue by capturing the massive national spot market, we will focus the rest of this guide on the <strong>Interstate</strong> setup process.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm">1</span>
                                LLC Formation & EIN Validation
                            </h2>
                            <p>
                                The foundation of your company protects your personal assets. You must form a Limited Liability Company (LLC) or a Corporation with your state. Once formed, you must apply for an Employer Identification Number (EIN) from the IRS. Do not use your Social Security Number for your trucking business to avoid immense liability risk.
                            </p>
                            
                            <div className="bg-muted border border-border rounded-xl p-6 my-6 shadow-sm">
                                <h4 className="font-bold text-accent text-lg mb-2">Vendors & Projected Investment</h4>
                                <p className="text-sm">Before starting, connect with vendors who outline projected investments for your equipment, maintenance, and insurance. For example, commercial truck dealerships (like Rush Truck Centers) or dedicated trucking CPAs can provide accurate 12-month projections. Expect your initial startup capital (excluding the truck down payment) to require around $15,000 to $25,000 just to safely float initial insurance premiums and federal permits.</p>
                            </div>
                            
                            <div className="my-8 rounded-2xl overflow-hidden aspect-[21/9] border border-border shadow-md">
                                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Business partners pointing at a laptop, outlining projected investments and financial spreadsheets for a new LLC formation." className="object-cover w-full h-full" />
                            </div>

                            <ul>
                                <li><strong>IRS Resource:</strong> <a href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">Apply for an EIN Online <ExternalLink className="inline h-3 w-3 mb-1" /></a></li>
                            </ul>
                            
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-6">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle className="h-5 w-5 text-green-500" /> Faisal's Field Tip: Brand Legitimacy</h4>
                                <p className="text-sm mb-0">Brokers in 2026 will heavily vet new authorities to combat fraud. Having a professional digital footprint is essential. At <strong>Priority Dispatch LLC</strong>, when a carrier partners with us for our comprehensive <a href="/services" className="text-accent font-medium hover:underline">New Carrier Setup</a> package, <strong>we build their corporate website completely free of charge.</strong> A slick, professional website makes brokers trust your new MC instantly.</p>
                            </div>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm">2</span>
                                Applying for USDOT and MC Authority
                            </h2>
                            <p>
                                Head to the Federal Motor Carrier Safety Administration (FMCSA) portal to apply through the Unified Registration System (URS). You will pay a non-refundable $300 fee per operating authority. 
                            </p>
                            <p>
                                <strong>Warning:</strong> Upon completing the application, your DOT number is active, but your MC number is listed as <em>"Not Active"</em>. You will immediately enter a mandatory 21-day federal protest period.
                            </p>
                            <ul>
                                <li><strong>FMCSA Resource:</strong> <a href="https://www.fmcsa.dot.gov/registration" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">FMCSA Registration Portal <ExternalLink className="inline h-3 w-3 mb-1" /></a></li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm">3</span>
                                The Missing Link: Insurance & BOC-3 (The Wait Period)
                            </h2>
                            <p>
                                Most new carriers make a catastrophic mistake here. <strong>Your MC Number will NEVER become active until the FMCSA receives two specific filings.</strong>
                            </p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>BOC-3 Filing:</strong> This designates a person or office in all 50 states where legal documents can be served to you. You must hire a "Process Agent" to file this electronically on your behalf.</li>
                                <li><strong>Insurance Filings (Form BMC-91X):</strong> You must secure an incredibly expensive Commercial Auto Liability policy (Federal minimum is $750,000, but brokers mandate <strong>$1,000,000</strong>) and a Motor Truck Cargo policy (standard is $100,000). Your insurance provider must file this directly with the FMCSA.</li>
                            </ol>
                            
                            <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-xl p-5 my-8">
                                <div className="flex items-start gap-3">
                                    <ShieldAlert className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">The 90-Day Insurance Deadline Expiration</h3>
                                        <p className="text-foreground/80 mt-1"><strong>CRITICAL RULE:</strong> After you apply for your MC number and pay the $300 fee, you have exactly <strong>90 days</strong> to get your active insurance policy filed with the FMCSA. If your insurance provider does not finalize and file the BMC-91X form within that 90-day window, your entire application is dismissed! Your $300 fee is wasted, your MC number is revoked, and you will have to restart the entire process and pay the fee again. You must have a clear line of communication with an insurance vendor before applying.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-8 rounded-2xl overflow-hidden aspect-[21/9] border border-border shadow-md">
                                <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A powerful semi truck parked safely, representing a fully insured and compliant commercial fleet ready to hit the road." className="object-cover w-full h-full" />
                            </div>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm">4</span>
                                Finalizing the Complex Permits: UCR, 2290, IFTA, & IRP
                            </h2>
                            <p>
                                Once your 21-day period clears, your insurance is bound, and your MC goes ACTIVE, the real bureaucratic sprint begins. 
                            </p>

                            <div className="space-y-6 mt-6">
                                <div className="border border-border/60 rounded-xl p-6 bg-card">
                                    <h4 className="text-xl font-bold text-accent mb-2">Unified Carrier Registration (UCR)</h4>
                                    <p className="text-sm">A federal-level system to collect fees from motor carriers based on fleet size. If you operate across state lines, you must pay this annually. <br/> <a href="https://www.ucr.gov/" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">UCR Official Site <ExternalLink className="inline h-3 w-3 mb-1" /></a></p>
                                </div>

                                <div className="border border-border/60 rounded-xl p-6 bg-card">
                                    <h4 className="text-xl font-bold text-accent mb-2">Heavy Highway Vehicle Use Tax (Form 2290)</h4>
                                    <p className="text-sm">The IRS requires proof of payment (a stamped Schedule 1) for any vehicle operating on public highways with a gross weight of 55,000+ pounds. You CANNOT get your physical license plates without this exact IRS document. <br/> <a href="https://www.irs.gov/forms-pubs/about-form-2290" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">Form 2290 IRS Resource <ExternalLink className="inline h-3 w-3 mb-1" /></a></p>
                                </div>

                                <div className="border border-border/60 rounded-xl p-6 bg-card">
                                    <h4 className="text-xl font-bold text-accent mb-2">International Registration Plan (IRP Plates)</h4>
                                    <p className="text-sm">These are your apportioned license plates. Because you drive in multiple states, the IRP system distributes your registration fees across jurisdictions based on where you accumulate miles. You obtain this through your home state's commercial DMV office. You will need your stamped Form 2290, active MC, and proof of insurance.</p>
                                </div>

                                <div className="border border-border/60 rounded-xl p-6 bg-card">
                                    <h4 className="text-xl font-bold text-accent mb-2">International Fuel Tax Agreement (IFTA)</h4>
                                    <p className="text-sm">Instead of buying a fuel permit at every state border, you put IFTA decals on your truck doors. You calculate all your fuel purchases and miles driven per state quarterly, and file a consolidated tax return. It equalizes the fuel taxes based on where fuel was burned versus where it was bought.</p>
                                </div>

                                <div className="border border-border/60 rounded-xl p-6 bg-card">
                                    <h4 className="text-xl font-bold text-accent mb-2">State Specific Permits (KYU, NY HUT, NM, OR)</h4>
                                    <p className="text-sm">Depending on your routing, certain states demand extra weight-mile tax permits. Kentucky (KYU), New York (HUT), New Mexico, and Oregon require specialized filings before you cross their borders.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-12 mb-6">
                                Why You Will Burn Out Fixing This Yourself
                            </h2>
                            <p>
                                I have seen brilliant owner-operators waste 4 months and thousands of dollars because they filed an incorrect insurance class, forgot their Form 2290 stamp, or skipped their KYU permit and caught a massive fine at a weigh station.
                            </p>
                            <p>
                                At <strong>Priority Dispatch LLC</strong>, we handle the <strong>entire</strong> compliance maze for investors and new drivers. From incorporating your LLC, building your brand, binding your intricate insurance policies, to managing the agonizing wait period for your IRP plates. We ensure every "i" is dotted before you ever turn the key, allowing you to focus on the only thing that matters: driving profitable freight.
                            </p>

                        </Reveal>

                        {/* Author Bio */}
                        <Reveal delayMs={250}>
                            <div className="mt-16 rounded-2xl bg-muted p-8 flex flex-col md:flex-row items-center gap-6 border border-border shadow-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                                <img
                                    src="/images/Offical%20Pic%20.png"
                                    alt="Muhammad Faisal Bilal"
                                    className="h-28 w-28 rounded-full object-cover border-4 border-accent relative z-10 shadow-lg"
                                />
                                <div className="text-center md:text-left relative z-10">
                                    <h4 className="text-2xl font-bold text-primary">About the Author</h4>
                                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm md:text-base">
                                        <strong>Muhammad Faisal Bilal</strong> is the CEO of Priority Dispatch LLC. Having guided hundreds of new carriers through the rigorous FMCSA audit process, Faisal has compiled the definitive strategy for navigating U.S. freight compliance quickly and aggressively, helping investors fast-track their MC authority.
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/muhammad-faisal-bilal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center justify-center md:justify-start gap-2 text-primary font-bold hover:text-accent transition-colors bg-background px-4 py-2 rounded-lg shadow-sm"
                                    >
                                        <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </article>
            <SiteFooter />
        </main>
    )
}

function Clock({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    )
}
