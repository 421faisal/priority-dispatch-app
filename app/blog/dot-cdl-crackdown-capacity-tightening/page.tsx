import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Calendar, User, AlertTriangle, TrendingUp, BarChart } from "lucide-react"

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
                        <header className="mb-12 text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-6">
                                The "Non-Domiciled CDL" Crackdown and Capacity Tightening
                            </h1>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    March 12, 2026
                                </span>
                                <span className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Priority Dispatch
                                </span>
                            </div>
                        </header>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1582234372722-50d7caece302?q=80&w=2670&auto=format&fit=crop"
                                alt="A line of parked 18 wheeler trucks representing the capacity shortage in the freight industry."
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </Reveal>

                    <div className="prose prose-lg dark:prose-invert prose-primary mx-auto">
                        <Reveal delayMs={200}>
                            <p className="lead text-xl text-muted-foreground mb-8">
                                A major regulatory hurricane is sweeping through the trucking labor market. The Department of Transportation (DOT) has initiated a strict crackdown on non-domiciled Commercial Driver's Licenses (CDLs), potentially removing nearly 200,000 drivers from the U.S. market by the end of 2026.
                            </p>

                            <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6 text-accent" />
                                What is the Non-Domiciled CDL Crackdown?
                            </h2>
                            <p>
                                A non-domiciled CDL is issued to a driver who is domiciled in a foreign jurisdiction (like Canada or Mexico) but meets the requirements to drive in the U.S., or to foreign workers on temporary visas. Historically, lax state-level oversight permitted the rapid expansion of these licenses, easing the driver shortage.
                            </p>
                            <p>
                                Now, facing intense political pressure and safety audits, federal regulators are enforcing strict residency and legal status verifications. State DMVs are revoking improperly issued CDLs en masse.
                            </p>

                            <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                                <TrendingUp className="h-6 w-6 text-accent" />
                                Freight Rate Forecast: A "Rate Recovery" for the Survivors
                            </h2>
                            <p>
                                In economics, when supply drastically drops and demand remains steady, prices rise. The removal of ~200,000 drivers equates to massive <strong>capacity tightening</strong>. For the owner-operators and carriers who hold valid licensure and persevere, a substantial rate recovery is imminent.
                            </p>

                            <ul className="my-6">
                                <li>
                                    <strong>Q3 2026 Projections:</strong> As holiday routing guides are established, shippers will panic over the sudden lack of spot market capacity. Spot rates are projected to jump 15-20% higher than historical Q3 averages.
                                </li>
                                <li>
                                    <strong>Q4 2026 Chaos:</strong> The peak delivery season will act as a pressure cooker. Carriers with reliable drivers will hold unprecedented negotiating power. Broker margins will compress as they fight to secure the dwindling number of available trucks.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                                <BarChart className="h-6 w-6 text-accent" />
                                How Dispatchers Can Capitalize on the Shortage
                            </h2>
                            <p>
                                If you are an owner-operator or a fleet manager, the second half of 2026 is when you transition from "taking whatever pays the fuel" to dictating terms.
                            </p>
                            <ol className="my-6 space-y-3">
                                <li><strong>Avoid Long-term Contracts Now:</strong> Do not lock into depressed contract rates in early 2026. Leave capacity open for the anticipated spot market surge in Q3.</li>
                                <li><strong>Target Desperate Lanes:</strong> Outbound loads from import-heavy ports (like Los Angeles and Savannah) will require immediate placement, offering premium pay for reliable carriers.</li>
                                <li><strong>Market Your Compliance:</strong> Make your 100% legal, fully-compliant driver roster a massive selling point when negotiating directly with shippers.</li>
                            </ol>
                        </Reveal>
                    </div>
                </div>
            </article>
            <SiteFooter />
        </main>
    )
}
