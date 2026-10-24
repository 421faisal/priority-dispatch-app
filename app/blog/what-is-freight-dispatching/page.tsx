import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { BlogArticleSchema } from "@/components/site/blog-article-schema"
import { Calendar, User, Clock, ArrowLeft, Linkedin, Zap, Scale, MessageSquare, ShieldCheck, TrendingUp, BarChart3, Target, Map } from "lucide-react"

export const metadata: Metadata = {
    title: "What Is Freight Dispatching? A Practical Guide for Owner-Operators (2026) | Priority Dispatch",
    description: "Freight dispatching explained: what dispatchers do, how they negotiate rates, vet brokers and plan lanes, what dispatching costs, and when you may not need one.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/blog/what-is-freight-dispatching",
    },
    openGraph: {
        title: "What Is Freight Dispatching? A Practical Guide for Owner-Operators (2026)",
        description: "Freight dispatching explained: what dispatchers do, how they negotiate rates, vet brokers and plan lanes, what dispatching costs, and when you may not need one.",
        url: "https://prioritydispatchllc.com/blog/what-is-freight-dispatching",
        type: "article",
        images: ["/images/blog/hero-dispatcher.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "What Is Freight Dispatching? A Practical Guide (2026)",
        description: "Freight dispatching explained: what dispatchers do, how they negotiate rates, vet brokers and plan lanes.",
    },
}

export default function BlogPostWhatIsDispatching() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <SiteHeader />
            <BlogArticleSchema
                title="What Is Freight Dispatching? A Practical Guide for Owner-Operators (2026)"
                description="Freight dispatching explained: what dispatchers do, how they negotiate rates, vet brokers and plan lanes, what dispatching costs, and when you may not need one."
                datePublished="2026-03-19"
                slug="what-is-freight-dispatching"
                imageUrl="/images/blog/hero-dispatcher.jpg"
            />
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent mb-8 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </a>
                        <header className="mb-12 text-center md:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-6 leading-tight">
                                What Is Freight Dispatching? A Practical Guide for Owner-Operators (2026)
                            </h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                                <span className="flex items-center gap-2 font-medium text-foreground">
                                    <Calendar className="h-4 w-4 text-accent" />
                                    October 23, 2026
                                </span>
                                <span className="flex items-center gap-2 font-medium text-foreground">
                                    <User className="h-4 w-4 text-accent" />
                                    Muhammad Faisal Bilal
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-accent" />
                                    12 min read
                                </span>
                            </div>
                        </header>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border border-border">
                            <img
                                src="/images/blog/hero-dispatcher.jpg"
                                alt="Professional freight dispatcher coordinating loads for owner-operators"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </Reveal>

                    <div className="prose prose-lg dark:prose-invert prose-primary mx-auto max-w-none text-foreground/90 leading-relaxed">
                        <Reveal delayMs={200}>
                            <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-accent pl-6">
                                <strong>Freight dispatching is the work of finding, negotiating, booking and managing loads on behalf of a motor carrier.</strong> A dispatcher works for the carrier (the truck owner), not the shipper or the broker. A good one keeps the truck loaded on profitable lanes, checks that brokers will actually pay, and handles the paperwork so the driver can drive.
                            </p>
                            <p>
                                This guide explains who is involved in a load, what a dispatcher does day to day, what dispatching costs, how to check brokers before you book, and when you may not need a dispatcher at all. Where a number comes from a regulator or published source, it is linked.
                            </p>
                            
                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <Target className="h-8 w-8 text-accent shrink-0" />
                                Who is involved in moving a load
                            </h2>
                            
                            <div className="overflow-x-auto my-8">
                                <table className="w-full text-left border-collapse bg-card border border-border shadow-sm">
                                    <thead>
                                        <tr className="bg-muted text-foreground">
                                            <th className="p-4 border-b border-border font-semibold">Party</th>
                                            <th className="p-4 border-b border-border font-semibold">Role</th>
                                            <th className="p-4 border-b border-border font-semibold">Who pays whom</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-border">
                                            <td className="p-4 font-semibold">Shipper</td>
                                            <td className="p-4">Owns the freight and needs it moved</td>
                                            <td className="p-4">Pays the broker (or the carrier directly)</td>
                                        </tr>
                                        <tr className="border-b border-border">
                                            <td className="p-4 font-semibold">Broker</td>
                                            <td className="p-4">Matches the shipper&apos;s freight with a carrier; must hold <a href="https://www.fmcsa.dot.gov/registration/broker-information" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA broker authority</a></td>
                                            <td className="p-4">Pays the carrier, usually after delivery and paperwork</td>
                                        </tr>
                                        <tr className="border-b border-border">
                                            <td className="p-4 font-semibold">Carrier / owner-operator</td>
                                            <td className="p-4">Owns the truck and holds the operating authority (MC number)</td>
                                            <td className="p-4">Pays the dispatcher, if they use one</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Dispatcher</td>
                                            <td className="p-4">Finds and books loads for the carrier, negotiates, handles paperwork</td>
                                            <td className="p-4">Is paid by the carrier</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <p>
                                <strong>The key distinction:</strong> a broker contracts with the shipper and pays the carrier. A dispatcher works under the carrier&apos;s authority and is paid by the carrier. Brokers must also keep a financial security of $75,000 (a BMC-84 surety bond or BMC-85 trust) on file with <a href="https://www.fmcsa.dot.gov/registration/broker-information" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">FMCSA</a>. Dispatchers who work only for carriers do not.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <MessageSquare className="h-8 w-8 text-accent shrink-0" />
                                What a freight dispatcher actually does
                            </h2>
                            
                            <ul className="space-y-4 my-6">
                                <li><strong>Load search and booking.</strong> Searching load boards such as <a href="https://www.dat.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">DAT</a> and Truckstop, plus direct broker and shipper contacts, for freight that fits your equipment, schedule and home-time needs.</li>
                                <li><strong>Rate negotiation.</strong> Comparing the offered rate with recent rates on that lane and asking for more when the data supports it.</li>
                                <li><strong>Broker checks.</strong> Confirming the broker&apos;s authority is active, the bond is on file, and the payment record is acceptable before you commit.</li>
                                <li><strong>Route and lane planning.</strong> Looking beyond one load to what freight is available at the destination, so the truck is not stranded empty.</li>
                                <li><strong>Paperwork.</strong> Rate confirmations, carrier packets, bills of lading, invoices, and follow-up on detention, layover or TONU (truck order not used) charges.</li>
                                <li><strong>Problem solving.</strong> Delays, breakdowns, lumper issues and receiver disputes, ideally at any hour.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <ShieldCheck className="h-8 w-8 text-accent shrink-0" />
                                What a dispatcher cannot do for you
                            </h2>
                            
                            <p>
                                Your authority, insurance and safety record are yours. A dispatcher cannot replace them:
                            </p>
                            
                            <ul className="space-y-3 my-6">
                                <li><strong>Operating authority.</strong> For-hire interstate carriers need an MC number from <a href="https://www.fmcsa.dot.gov/registration/do-i-need-usdot-number" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA</a>.</li>
                                <li><strong>Insurance.</strong> FMCSA requires <a href="https://www.fmcsa.dot.gov/registration/insurance-filings" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">proof of liability insurance</a> on file before authority is granted. For general freight the minimum is $750,000, and some cargo types require more, up to $5,000,000.</li>
                                <li><strong>A BOC-3 process agent filing,</strong> which every carrier with operating authority must have on file.</li>
                                <li><strong>Safe, compliant driving.</strong> Dispatch can plan a route, but hours-of-service and vehicle condition remain the driver&apos;s and carrier&apos;s responsibility.</li>
                            </ul>
                            
                            <p>
                                You also stay the one who signs the rate confirmation. Read it yourself, and never haul without a signed one.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <Map className="h-8 w-8 text-accent shrink-0" />
                                The life of a load, step by step
                            </h2>
                            
                            <ol className="list-decimal pl-6 space-y-3 my-6">
                                <li><strong>Search.</strong> The dispatcher filters loads by equipment, origin, destination and minimum rate.</li>
                                <li><strong>Vet the broker.</strong> Check authority, bond and payment history (see the checklist below).</li>
                                <li><strong>Negotiate.</strong> Ask for a rate that reflects the lane, the deadhead to pick up, and any extra stops or tight appointment times.</li>
                                <li><strong>Confirm.</strong> Review the rate confirmation for the rate, pickup and delivery windows, detention terms, and who pays for lumper fees. Get it signed before moving.</li>
                                <li><strong>Dispatch and track.</strong> Send the driver the pickup details and monitor progress.</li>
                                <li><strong>Deliver and document.</strong> Collect the signed proof of delivery and BOL.</li>
                                <li><strong>Invoice and collect.</strong> Submit the invoice, or send it to a factoring company, and follow up until it is paid.</li>
                                <li><strong>Plan the next load</strong> before the current one delivers.</li>
                            </ol>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <BarChart3 className="h-8 w-8 text-accent shrink-0" />
                                Why lane planning matters: a worked example
                            </h2>
                            
                            <p>
                                The highest rate on a single load is not always the best deal. What counts is the <strong>all-in rate per mile</strong>, which means total revenue divided by every mile driven, loaded and empty. These numbers are illustrative, not market quotes.
                            </p>
                            
                            <div className="my-8 p-6 bg-card border border-border rounded-xl shadow-sm">
                                <p className="mb-4">
                                    <strong>Option A:</strong> A 1,000-mile load pays $3.00 per mile, which is $3,000. The destination is a weak freight market, so the driver deadheads 400 miles to the next pickup. Revenue is $3,000 over 1,400 total miles, which is about <span className="text-red-500 font-bold">$2.14 per mile</span>.
                                </p>
                                <p>
                                    <strong>Option B:</strong> A 600-mile load at $2.60 per mile pays $1,560. It delivers into a stronger market, and an 800-mile load at $2.45 per mile follows, paying $1,960. Revenue is $3,520 over 1,400 total miles, which is about <span className="text-green-500 font-bold">$2.51 per mile</span>.
                                </p>
                            </div>
                            
                            <p>
                                Option B has a lower rate on every loaded leg but earns about $520 more over the same distance, because no miles are empty. Checking the next load before accepting the current one is a large part of a dispatcher&apos;s value.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <Scale className="h-8 w-8 text-accent shrink-0" />
                                What dispatching costs
                            </h2>
                            
                            <p>
                                Most dispatch services charge a percentage of each load&apos;s revenue. Industry guides commonly cite a range of <a href="https://otrucking.com/blog/how-much-do-truck-dispatchers-charge" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">5% to 10%</a>, and some services charge a flat weekly or per-load fee instead. On $10,000 of weekly gross revenue:
                            </p>
                            
                            <div className="overflow-x-auto my-8">
                                <table className="w-full text-left border-collapse bg-card border border-border shadow-sm">
                                    <thead>
                                        <tr className="bg-muted text-foreground">
                                            <th className="p-4 border-b border-border font-semibold">Fee</th>
                                            <th className="p-4 border-b border-border font-semibold">Cost per week</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-border">
                                            <td className="p-4">5%</td>
                                            <td className="p-4 font-semibold">$500</td>
                                        </tr>
                                        <tr className="border-b border-border">
                                            <td className="p-4">7%</td>
                                            <td className="p-4 font-semibold">$700</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">10%</td>
                                            <td className="p-4 font-semibold">$1,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <p className="mb-4">When comparing services, look beyond the headline percentage:</p>
                            
                            <ul className="space-y-2 my-6">
                                <li>Is the fee calculated on linehaul only or on gross including fuel surcharge?</li>
                                <li>Is there a long contract or minimum term, or can you leave with short notice?</li>
                                <li>Is there a forced-dispatch rule, or can you decline loads?</li>
                                <li>Will you see every rate confirmation and the rate the broker actually offered?</li>
                                <li>Are there setup fees, software fees or other charges?</li>
                            </ul>
                            
                            <p>
                                A lower percentage is not automatically cheaper. A dispatcher who finds loads that pay ten cents per mile more can cost less in the end than a cheaper one who does not. Compare your net revenue per truck over several weeks.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <ShieldCheck className="h-8 w-8 text-red-500 shrink-0" />
                                How to vet a broker before you book
                            </h2>
                            
                            <p>
                                Freight fraud is a real risk for carriers. Double brokering happens when a load is accepted and then secretly reassigned to another carrier, and the carrier doing the work may never be paid. Carrier identity theft, where scammers clone a legitimate carrier&apos;s USDOT or MC details, is another common scheme. <a href="https://www.freightwaves.com/news/fmcsa-checklist-a-freight-brokers-guide-to-spotting-fraud" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FreightWaves</a> has cited estimates of annual double-brokering losses of $500 million to $700 million, though such figures are estimates and vary by source.
                            </p>
                            
                            <div className="my-8 p-8 bg-card border border-border rounded-xl shadow-sm">
                                <h3 className="text-2xl font-bold mb-6">A practical checklist before you accept a load:</h3>
                                <ul className="space-y-4">
                                    <li><strong>Verify the authority.</strong> Look up the broker&apos;s MC or USDOT number in <a href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA&apos;s SAFER system</a> or the Licensing & Insurance site. Confirm the status is active and the company name, phone number and address match the contact you were given.</li>
                                    <li><strong>Check the bond.</strong> Brokers must keep $75,000 of financial security on file. Under <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-C/section-387.307" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA&apos;s financial responsibility rule</a>, in effect since January 16, 2026, a broker whose security drops below that amount must restore it within a short window or risk suspension of authority.</li>
                                    <li><strong>Review payment history.</strong> Use a carrier credit-reporting service or the broker&apos;s reviews from other carriers, and set your own limit for days-to-pay.</li>
                                    <li><strong>Check whether the invoice can be factored.</strong> If your factoring company will not approve the broker&apos;s credit, treat that as a warning.</li>
                                    <li><strong>Watch for warning signs.</strong> These include pressure to skip checks, a recently changed phone number or email, a very new authority offering a very high volume of freight, or requests for advance payment or credentials outside normal onboarding.</li>
                                    <li><strong>Get the rate confirmation in writing,</strong> signed by both sides, before the truck moves.</li>
                                    <li><strong>Report suspected fraud</strong> to the load board and to FMCSA, and keep all documentation.</li>
                                </ul>
                            </div>
                            
                            <p>
                                No checklist removes all risk. Keep your own records of every load, including the rate confirmation, emails and proof of delivery.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <TrendingUp className="h-8 w-8 text-accent shrink-0" />
                                Do you need a dispatcher?
                            </h2>
                            
                            <p className="mb-4">A dispatcher is not right for everyone.</p>
                            
                            <p className="mb-4"><strong>A dispatcher tends to help when:</strong></p>
                            <ul className="space-y-2 mb-6">
                                <li>You are new, with a new MC number and no broker relationships yet.</li>
                                <li>You spend hours a week on the phone, load boards and paperwork instead of driving or resting.</li>
                                <li>You run several trucks and need someone watching all of them.</li>
                                <li>Your lanes are in or out of weak markets where planning the next load matters.</li>
                            </ul>
                            
                            <p className="mb-4"><strong>You may not need one when:</strong></p>
                            <ul className="space-y-2 mb-6">
                                <li>You already have direct shipper contracts or dependable broker relationships that keep the truck full at good rates.</li>
                                <li>You prefer to negotiate and enjoy it, and have time for the admin.</li>
                                <li>The fee would take a large share of a thin margin on low-paying freight.</li>
                            </ul>
                            
                            <p>
                                A fair test is to track your rate per mile, deadhead percentage and weekly gross for four weeks before and after you start, and judge the service on those numbers.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                                <Zap className="h-8 w-8 text-accent shrink-0" />
                                How Priority Dispatch works
                            </h2>
                            
                            <p>
                                Priority Dispatch LLC is a freight dispatch firm based in Kissimmee, Florida, serving owner-operators in all 48 contiguous states. We dispatch dry van, reefer, flatbed, step deck, box truck, power only and hotshot equipment. Our fee is a flat 5% of load revenue, with no long-term contracts, and we do not force-dispatch loads. You can see the details on our <a href="/pricing" className="text-accent hover:underline font-semibold">pricing page</a> and <a href="/faq" className="text-accent hover:underline font-semibold">FAQ</a>, and how onboarding works on the <a href="/carrier-setup" className="text-accent hover:underline font-semibold">carrier setup page</a>.
                            </p>
                            
                            <p>
                                If you are comparing dispatch services, ask each one the questions in the cost section above, including us.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Frequently asked questions</h2>
                            
                            <div className="space-y-6 my-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">What is freight dispatching in simple terms?</h3>
                                    <p>It is finding and booking loads for a trucking company, negotiating rates, checking brokers, and handling the paperwork around each load.</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold mb-2">What is the difference between a dispatcher and a freight broker?</h3>
                                    <p>A broker contracts with the shipper and pays the carrier, and must hold FMCSA broker authority and a $75,000 bond or trust. A dispatcher works for the carrier and is paid by the carrier.</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold mb-2">How much does a truck dispatcher charge?</h3>
                                    <p>Commonly 5% to 10% of each load&apos;s revenue, though flat weekly and per-load pricing exists. Confirm whether the percentage is calculated on linehaul only or on gross.</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Do I need my own MC number to use a dispatcher?</h3>
                                    <p>If you haul regulated freight for hire across state lines, yes. You need your own operating authority, insurance filings and BOC-3 on file.</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Can a dispatcher guarantee higher rates?</h3>
                                    <p>No. A dispatcher can improve your odds with lane data, negotiation and load planning, but rates depend on the market. Be cautious of any service that guarantees a specific result.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Sources</h2>
                            
                            <ul className="space-y-3 my-6 text-sm">
                                <li><a href="https://www.fmcsa.dot.gov/registration/insurance-filings" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA, Insurance Filing Requirements</a>: carrier liability minimums and filing process.</li>
                                <li><a href="https://www.fmcsa.dot.gov/registration/broker-information" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA, Broker and Freight Forwarder Financial Responsibility Rule</a>: the $75,000 requirement and the January 16, 2026 changes.</li>
                                <li><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-C/section-387.307" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">eCFR, 49 CFR § 387.307</a>, Property broker surety bond or trust fund.</li>
                                <li><a href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FMCSA, SAFER System and Licensing & Insurance</a>: verify carrier and broker authority.</li>
                                <li><a href="https://www.freightwaves.com/news/fmcsa-checklist-a-freight-brokers-guide-to-spotting-fraud" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FreightWaves, FMCSA checklist: A freight broker&apos;s guide to spotting fraud</a>: double-brokering loss estimates.</li>
                                <li><a href="https://otrucking.com/blog/how-much-do-truck-dispatchers-charge" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">O Trucking, How much do dispatchers charge</a>: commonly cited 5% to 10% fee range.</li>
                            </ul>
                            
                            <p className="text-sm italic mt-8 p-6 bg-muted border-l-4 border-accent">
                                <strong>Disclaimer:</strong> This guide is general information, not legal or financial advice. Check current FMCSA requirements and read any dispatch agreement carefully before signing.
                            </p>

                            {/* Internal Links */}
                            <div className="mt-16 rounded-xl border-l-4 border-accent bg-muted p-8 shadow-sm">
                                <h3 className="font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                                    <MessageSquare className="h-6 w-6 text-accent" />
                                    Essential Related Reading
                                </h3>
                                <ul className="space-y-4 text-base">
                                    <li className="flex items-start gap-2">
                                        <ArrowLeft className="h-5 w-5 text-accent shrink-0 mt-0.5" /> 
                                        <span>
                                            <a href="/services" className="text-foreground font-bold hover:text-accent transition-colors">Comprehensive Truck Dispatch Services</a> 
                                            <br/><span className="text-sm text-muted-foreground">Explore our specialized dispatch programs for Reefers, Dry Vans, Box Trucks, and Flatbeds.</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowLeft className="h-5 w-5 text-accent shrink-0 mt-0.5" /> 
                                        <span>
                                            <a href="/carrier-setup" className="text-foreground font-bold hover:text-accent transition-colors">Carrier Setup Guide</a> 
                                            <br/><span className="text-sm text-muted-foreground">Discover how fast and easy it is to onboard your fleet and start booking premium freight with Priority Dispatch.</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowLeft className="h-5 w-5 text-accent shrink-0 mt-0.5" /> 
                                        <span>
                                            <a href="/faq" className="text-foreground font-bold hover:text-accent transition-colors">Frequently Asked Questions (FAQ)</a> 
                                            <br/><span className="text-sm text-muted-foreground">Got questions about our fee structures, no-force-dispatch policies, or billing? Find your answers here.</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Author Bio */}
                        <Reveal delayMs={250}>
                            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                                <h4 className="text-2xl font-bold mb-2">About the Author</h4>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                                    <strong>Muhammad Faisal Bilal</strong> is the Founder & CEO of Priority Dispatch LLC. With expertise in connecting TWIC-certified owner-operators with premium port freight, he helps drivers maximize their earnings through strategic load placement across all 48 states.
                                </p>
                                <a 
                                    href="https://www.linkedin.com/in/muhammad-faisal-bilal" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </article>
            <SiteFooter />
        </main>
    )
}
