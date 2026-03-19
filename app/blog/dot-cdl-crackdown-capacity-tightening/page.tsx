import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Calendar, User, AlertTriangle, TrendingUp, BarChart, ArrowLeft, Linkedin } from "lucide-react"

export const metadata: Metadata = {
    title: "Non-Domiciled CDL Crackdown and Capacity Tightening | Priority Dispatch",
    description: "The DOT crackdown on non-domiciled CDLs will significantly reduce driver capacity in 2026. See how this truck driver shortage will affect Q3 and Q4 spot market rates.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/blog/dot-cdl-crackdown-capacity-tightening",
    },
}

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent mb-8">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </a>
                        <header className="mb-12 text-center md:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-6 leading-tight">
                                The "Non-Domiciled CDL" Crackdown and Capacity Tightening
                            </h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                                <span className="flex items-center gap-2 font-medium text-foreground">
                                    <Calendar className="h-4 w-4 text-accent" />
                                    March 12, 2026
                                </span>
                                <span className="flex items-center gap-2 font-medium text-foreground">
                                    <User className="h-4 w-4 text-accent" />
                                    Muhammad Faisal Bilal
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-accent" />
                                    14 min read
                                </span>
                            </div>
                        </header>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border border-border">
                            <img
                                src="https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&q=80"
                                alt="A delivery vehicle navigating urban streets for last-mile logistics."
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </Reveal>

                    <div className="prose prose-lg dark:prose-invert prose-primary mx-auto max-w-none text-foreground/90 leading-relaxed">
                        <Reveal delayMs={200}>
                            <p className="text-xl text-muted-foreground italic mb-8">
                                A major regulatory hurricane is sweeping through the North American trucking labor market. The Department of Transportation (DOT), in conjunction with state-level DMV audits, has initiated a strict crackdown on non-domiciled Commercial Driver's Licenses (CDLs), potentially removing nearly 200,000 drivers from the U.S. market by the end of 2026.
                            </p>

                            <h2 className="text-3xl font-bold mt-10 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-7 w-7 text-accent" />
                                What is the Non-Domiciled CDL Crackdown?
                            </h2>
                            <p>
                                A non-domiciled CDL is issued to a driver who is domiciled in a foreign jurisdiction (like Canada or Mexico) but meets the requirements to drive commercially in the U.S., or to foreign workers residing in the U.S. on temporary visas. Historically, lax state-level oversight and fragmented data-sharing between the FMCSA and state DMVs permitted the rapid, sometimes unregulated expansion of these licenses, which artificially eased the perceived driver shortage.
                            </p>
                            <p>
                                Now, facing intense political pressure, rigorous safety audits, and mounting evidence of identity fraud rings exploiting the CDL testing system, federal regulators are enforcing uncompromising residency and legal status verifications. State DMVs, particularly in border states and major freight hubs (Texas, California, Florida, Illinois), are revoking improperly issued CDLs en masse.
                            </p>

                            <h2 className="text-3xl font-bold mt-10 mb-4 flex items-center gap-2">
                                <TrendingUp className="h-7 w-7 text-accent" />
                                Freight Rate Forecast: A "Rate Recovery" for the Survivors
                            </h2>
                            <p>
                                Basic trucking economics dictates that when truck supply drastically drops but shipper demand remains steady (or grows during peak retail seasons), prices must rise. The sudden, forced removal of ~200,000 drivers equates to immediate and massive <strong>capacity tightening</strong>. For the owner-operators and carriers who hold valid, unassailable licensure and persevere, a substantial rate recovery is imminent.
                            </p>

                            <ul className="list-disc pl-6 space-y-4 my-6">
                                <li>
                                    <strong>Q3 2026 Projections:</strong> As holiday routing guides are established by major retailers, shippers will panic over the sudden lack of spot market capacity. Spot rates across general dry van and refrigerated lanes are projected to jump 15-20% higher than historical Q3 averages as brokers scramble to cover loads.
                                </li>
                                <li>
                                    <strong>Q4 2026 Chaos:</strong> The peak holiday delivery season will act as a pressure cooker. Carriers with perfectly compliant, reliable drivers will hold unprecedented negotiating leverage. Broker margins will severely compress as they fight to secure the dwindling number of available, legally compliant trucks.
                                </li>
                                <li>
                                    <strong>The Premium on Port Drayage:</strong> The crackdown disproportionately impacts drayage operations around major ports, as these localized, high-turnover jobs frequently utilized temporary or non-domiciled labor. Owner-operators serving ports like LA/Long Beach and Newark will see massive rate premiums.
                                </li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-10 mb-4 flex items-center gap-2">
                                <BarChart className="h-7 w-7 text-accent" />
                                How Dispatchers & Carriers Can Capitalize on the Shortage
                            </h2>
                            <p>
                                If you are a compliant owner-operator, a fleet manager, or a professional dispatch agency, the second half of 2026 is the moment you transition your posture from "taking whatever pays the diesel" to dictating the market terms.
                            </p>
                            
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm my-8">
                                <ol className="list-decimal pl-6 space-y-4">
                                    <li><strong>Avoid Long-term Contracts Now:</strong> Do not lock your fleet into depressed, multi-year contract rates in early 2026. Leave your capacity open and flexible to capture the anticipated spot market surges in Q3 and Q4. Your truck capacity is about to become a highly scarce commodity.</li>
                                    <li><strong>Target Desperate Lanes:</strong> Outbound loads from import-heavy coastal ports and cross-border manufacturing hubs (like Laredo, TX) will require immediate placement due to the localized driver drain, offering premium pay for reliable carriers. Build a lane strategy around these vacuum spots.</li>
                                    <li><strong>Market Your Compliance:</strong> Make your 100% legal, fully-compliant, defensively verified driver roster a massive selling point. When negotiating directly with shippers, use your bulletproof compliance record to justify premium dedicated rates over cheaper, riskier brokerage options.</li>
                                </ol>
                            </div>

                            <p>
                                At <strong>Priority Dispatch LLC</strong>, we analyze demographic and regulatory trends months before they hit the spot market. We are actively strategically positioning our carrier partners in regions where capacity is projected to tighten the fastest, ensuring they command the highest rate-per-mile possible during the 2026 CDL crunch.
                            </p>
                        </Reveal>

                        {/* Author Bio */}
                        <Reveal delayMs={250}>
                            <div className="mt-16 rounded-2xl bg-muted p-8 flex flex-col md:flex-row items-center gap-6 border border-border">
                                <img
                                    src="/images/Offical%20Pic%20.png"
                                    alt="Muhammad Faisal Bilal"
                                    className="h-24 w-24 rounded-full object-cover border-2 border-accent"
                                />
                                <div className="text-center md:text-left">
                                    <h4 className="text-xl font-bold">About the Author</h4>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">
                                        Muhammad Faisal Bilal is a logistics analyst and the CEO of Priority Dispatch LLC. Known for his macro-economic forecasting within the freight market, he helps independent carriers position their assets ahead of regulatory changes to maximize their long-term revenue.
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/muhammad-faisal-bilal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center justify-center md:justify-start gap-2 text-accent font-bold hover:underline"
                                    >
                                        <Linkedin className="h-4 w-4" />
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
// 
function Clock({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    )
}
