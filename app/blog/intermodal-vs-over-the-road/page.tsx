import type { Metadata } from "next"
import { ArticleShell } from "@/components/site/article-shell"

const slug = "intermodal-vs-over-the-road"
const title = "Intermodal vs. Over-the-Road Trucking: Which Pays Better?"
const description =
    "Intermodal drayage vs. over-the-road (OTR) for owner-operators: how each works, typical miles and home time, what you need to start, and which fits you."
const url = `https://prioritydispatchllc.com/blog/${slug}`
const image = `/images/blog/photos/${slug}-og.jpg`

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Priority Dispatch LLC", type: "article", publishedTime: "2026-03-03", modifiedTime: "2026-11-10", authors: ["Muhammad Faisal Bilal"], images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
}

const faqs = [
    { q: "What is intermodal drayage?", a: "Short truck moves of containers between rail yards or ports and nearby warehouses. The long part of the trip travels by train or ship; the truck handles the first and last miles." },
    { q: "Does intermodal pay more than OTR?", a: "Not per load. Drayage loads are short and often paid per move, so earnings depend on how many moves you can do per day and how long you wait at terminals. OTR pays more per load but takes more days away from home." },
    { q: "Do I need special equipment for intermodal?", a: "Usually a day cab or sleeper tractor that can pull a container chassis. Some moves need power only; port work needs a TWIC card. You do not need your own trailer for container moves." },
    { q: "Can an owner-operator do both?", a: "Yes. Some drivers run drayage near a port or rail hub during the week and take regional OTR loads when container volume is slow. A dispatcher can mix both." },
]

export default function IntermodalGuide() {
    return (
        <ArticleShell
            slug={slug}
            title={title}
            description={description}
            h1="Intermodal vs. Over-the-Road: Which Is Right for an Owner-Operator?"
            datePublished="2026-03-03"
            dateModified="2026-11-10"
            dateLabel="Updated November 10, 2026"
            readMinutes={6}
            photo={slug}
            photoAlt="Double-stack intermodal freight train in the mountains"
            faqs={faqs}
        >
            <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                <strong>Short answer:</strong> over-the-road (OTR) means long hauls in your own truck and trailer, with more money
                per load and more time away. Intermodal drayage means short container moves between rail yards or ports and
                warehouses, with more home time but income that depends on terminal waits and moves per day. Pick by your home
                base, equipment and how often you want to be home.
            </p>

            <h2>How each one works</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Intermodal drayage</th>
                        <th>Over-the-road</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Typical trip</td><td>Under about 250 miles, often local</td><td>500 to 2,500+ miles</td></tr>
                    <tr><td>Equipment</td><td>Tractor pulling a container chassis</td><td>Tractor with your own dry van, reefer or flatbed</td></tr>
                    <tr><td>Paid</td><td>Per move or per load, plus accessorials</td><td>Per load, often compared per mile</td></tr>
                    <tr><td>Home time</td><td>Often daily</td><td>Days or weeks out</td></tr>
                    <tr><td>Biggest risk</td><td>Waiting at terminals, chassis problems</td><td>Deadhead and weak reload markets</td></tr>
                    <tr><td>Extra credentials</td><td>TWIC card for port terminals</td><td>None beyond your authority</td></tr>
                </tbody>
            </table>

            <h2>Where the money comes from</h2>
            <p>
                In drayage, income depends on how many moves you complete in a day. Two short moves with long terminal waits can
                pay less than one good OTR day. Ask about detention, chassis splits, pre-pulls and storage, because those extras
                make or break the week.
            </p>
            <p>
                In OTR, income depends on the rate across all miles, including deadhead to the next pickup. Use our{" "}
                <a href="/toolbox/load-profit-calculator">load profit calculator</a> to compare a load&apos;s real rate per mile
                with your <a href="/toolbox/cost-per-mile-calculator">cost per mile</a>.
            </p>

            <h2>Who each one suits</h2>
            <ul>
                <li><strong>Intermodal</strong> suits drivers who live near a port or rail hub (Chicago, Los Angeles and Long Beach, the New York and New Jersey ports, Savannah, Dallas, Kansas City), want to be home most nights and do not own a trailer.</li>
                <li><strong>OTR</strong> suits drivers who own a trailer, are comfortable being out for a week or more and want the higher per-load pay of long lanes.</li>
            </ul>

            <h2>Getting started</h2>
            <ul>
                <li>For drayage: get a <a href="/blog/what-is-twic-card-trucking">TWIC card</a> if you will enter port terminals, and check which terminals and chassis pools you can access.</li>
                <li>For power only and rail-ramp freight, see our <a href="/services/power-only-dispatch">power only dispatch</a>.</li>
                <li>For OTR, plan lanes with strong reloads. Our <a href="/truck-dispatcher/midwest">Midwest</a> and{" "}
                    <a href="/truck-dispatcher/illinois">Chicago</a> pages explain why balanced markets keep deadhead low.</li>
            </ul>
        </ArticleShell>
    )
}
