import type { Metadata } from "next"
import { ArticleShell } from "@/components/site/article-shell"

const slug = "what-is-tsa-certified-trucking"
const title = "TSA Certified Trucking: What It Means & How to Get It"
const description =
    "TSA certified trucking means the driver passed a TSA Security Threat Assessment to haul air cargo. Who needs it, how it works and the loads it unlocks."
const url = `https://prioritydispatchllc.com/blog/${slug}`
const image = `/images/blog/photos/${slug}-og.jpg`

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Priority Dispatch LLC", type: "article", publishedTime: "2026-05-22", modifiedTime: "2026-11-10", authors: ["Muhammad Faisal Bilal"], images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
}

const faqs = [
    { q: "Is there a TSA certification for truck drivers?", a: "Not a single card. What people call TSA certified usually means the driver has passed a TSA Security Threat Assessment (STA) so an indirect air carrier can let them handle air cargo without an escort. For port work the separate credential is the TWIC card." },
    { q: "How do I get a TSA Security Threat Assessment?", a: "Usually through the company you haul air cargo for. Indirect air carriers (freight forwarders approved by TSA) submit the STA for their employees and agents, typically with TSA Form 419F. Ask the forwarder or airline cargo contact what they require." },
    { q: "Is a TSA STA the same as a TWIC?", a: "No. A TWIC is for unescorted access to secure areas of ports and maritime facilities. A TSA STA for air cargo covers unescorted access to cargo moving to aircraft. Both involve a TSA background check." },
    { q: "Does a hazmat endorsement help?", a: "TSA can accept certain comparable background checks, so a hazmat endorsement or TWIC may make the process easier. The indirect air carrier decides what it can accept under its security program." },
]

export default function TsaGuide() {
    return (
        <ArticleShell
            slug={slug}
            title={title}
            description={description}
            h1="What Does TSA Certified Mean in Trucking?"
            datePublished="2026-05-22"
            dateModified="2026-11-10"
            dateLabel="Updated November 10, 2026"
            readMinutes={5}
            photo={slug}
            photoAlt="Cargo being loaded onto a jet at an airport"
            faqs={faqs}
            sources={[
                { label: "TSA Indirect Air Carrier Management System", url: "https://iac.tsa.dhs.gov/iac/home.go" },
                { label: "49 CFR Part 1548: Indirect Air Carrier Security", url: "https://www.ecfr.gov/current/title-49/subtitle-B/chapter-XII/subchapter-C/part-1548" },
            ]}
        >
            <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                <strong>Short answer:</strong> in trucking, &quot;TSA certified&quot; usually means the driver has passed a TSA
                Security Threat Assessment (STA). It is required before an indirect air carrier, a TSA-approved freight forwarder,
                can let you handle air cargo without an escort. In practice it lets you haul freight to and from airport cargo
                areas for airlines and forwarders.
            </p>

            <h2>Why air cargo has its own rules</h2>
            <p>
                Cargo that will fly on passenger and cargo planes is screened and tracked under TSA security programs. Indirect air
                carriers, the forwarders that consolidate freight for airlines, must make sure everyone with unescorted access to
                that cargo, from their facility until it is handed to the airline, has passed a security threat assessment. A
                truck driver moving that cargo is often one of those people.
            </p>

            <h2>Who needs it</h2>
            <ul>
                <li>Drivers hauling for an indirect air carrier between its facility and the airport</li>
                <li>Owner-operators leased to or contracted by a forwarder for air freight runs</li>
                <li>Owners and officers of a trucking company that becomes an authorized representative for an air carrier</li>
            </ul>
            <p>
                If you never touch cargo going onto aircraft, you do not need an STA. Regular warehouse-to-warehouse freight near an
                airport does not require one.
            </p>

            <h2>How it works</h2>
            <ol>
                <li><strong>Find the forwarder or air carrier</strong> you will haul for. They hold the TSA security program.</li>
                <li><strong>Complete the STA application</strong> they give you (often TSA Form 419F) with your identity details.</li>
                <li><strong>The company submits it to TSA,</strong> which checks terrorism, immigration and criminal records.</li>
                <li><strong>Follow their training and handling rules,</strong> such as seals, chain-of-custody paperwork and secure parking.</li>
            </ol>
            <p>
                An STA completed for one employer generally does not need to be repeated if you move to another position that needs
                one, as long as you stayed continuously in such a position. Ask the new carrier what it can accept.
            </p>

            <h2>What it unlocks for owner-operators</h2>
            <p>
                Air freight runs are often short, time-sensitive moves between forwarders and airport cargo buildings. They suit
                straight trucks, box trucks and sprinter vans as well as semis, and expedited loads can pay a premium because they
                cannot wait. Reliability matters more than anything: missing a flight cut-off loses the load and the customer.
            </p>
            <p>
                If you hold an STA or a <a href="/blog/what-is-twic-card-trucking">TWIC card</a>, tell your dispatcher so they
                can target that freight. See our <a href="/services/box-truck-dispatch">box truck dispatch</a> and{" "}
                <a href="/pricing">rates</a>, or <a href="/blog/what-is-bonded-carrier-trucking">what a bonded carrier is</a>{" "}
                for another kind of secure freight.
            </p>
        </ArticleShell>
    )
}
