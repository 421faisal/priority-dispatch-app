import type { Metadata } from "next"
import { ArticleShell } from "@/components/site/article-shell"

const slug = "what-is-twic-card-trucking"
const title = "What Is a TWIC Card in Trucking? Cost, Steps, Port Loads"
const description =
    "A TWIC card lets truck drivers enter secure areas of US ports without an escort. Who needs one, the $125.25 fee, how to apply, renewal and port loads."
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
    { q: "How much does a TWIC card cost?", a: "TSA lists $125.25 for a new card and for in-person renewal, and $93.00 for applicants who hold a valid hazmat endorsement (HME) or FAST card. Eligible applicants can renew online for $117.25. Check tsa.gov/twic for the current fee before you apply." },
    { q: "How long is a TWIC card good for?", a: "Five years from issue. A card bought at the reduced rate expires with the HME or FAST card it was based on." },
    { q: "Do all truck drivers need a TWIC card?", a: "No. You need one only for unescorted access to secure areas of facilities and vessels regulated under the Maritime Transportation Security Act, which in trucking mostly means port container terminals. Drivers who never haul port freight do not need one." },
    { q: "Can a dispatcher find port loads without a TWIC?", a: "A dispatcher can still book warehouse and transload freight near ports, but terminal pickups and deliveries need a driver with a valid TWIC. Tell your dispatcher if you have one so they can include port freight." },
]

export default function TwicGuide() {
    return (
        <ArticleShell
            slug={slug}
            title={title}
            description={description}
            h1="What Is a TWIC Card in Trucking? Cost, Steps and Port Loads"
            datePublished="2026-05-22"
            dateModified="2026-11-10"
            dateLabel="Updated November 10, 2026"
            readMinutes={6}
            photo={slug}
            photoAlt="Container truck under cranes at a busy port"
            faqs={faqs}
            sources={[
                { label: "TSA: Transportation Worker Identification Credential (TWIC)", url: "https://www.tsa.gov/twic" },
                { label: "Federal Register, Nov 4 2022: TWIC fee notice", url: "https://www.govinfo.gov/content/pkg/FR-2022-11-04/html/2022-24101.htm" },
            ]}
        >
            <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                <strong>Short answer:</strong> a TWIC (Transportation Worker Identification Credential) is a federal ID issued
                by TSA that lets you enter the secure areas of US ports and other maritime facilities without an escort. For a
                truck driver it is the card that gets you through a container terminal gate. It costs $125.25 for most new
                applicants and is valid for five years.
            </p>

            <h2>Who needs a TWIC card</h2>
            <p>
                You need a TWIC if your work takes you into secure areas of facilities or vessels regulated under the Maritime
                Transportation Security Act. In trucking that mainly means:
            </p>
            <ul>
                <li>Drayage drivers picking up and returning containers at port terminals</li>
                <li>Owner-operators who take port loads now and then, such as import containers to a nearby warehouse</li>
                <li>Drivers serving some refineries, chemical plants and other waterfront facilities that are MTSA-regulated</li>
            </ul>
            <p>
                If you only haul between warehouses, distribution centers and shippers away from ports, you do not need one. Many
                transload warehouses near ports do not require a TWIC either; only the terminal itself does.
            </p>

            <h2>What it costs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Application type</th>
                        <th>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>New card</td><td>$125.25</td></tr>
                    <tr><td>Renewal in person</td><td>$125.25</td></tr>
                    <tr><td>Renewal online (eligible applicants)</td><td>$117.25</td></tr>
                    <tr><td>Reduced rate with a valid HME or FAST card</td><td>$93.00</td></tr>
                </tbody>
            </table>
            <p>Fees can change, so confirm the amount on tsa.gov/twic before you pay. Paying the fee does not guarantee approval.</p>

            <h2>How to get a TWIC card, step by step</h2>
            <ol>
                <li><strong>Pre-enroll online</strong> on the TSA TWIC page to save time at the enrollment center.</li>
                <li><strong>Book an appointment</strong> at a TSA enrollment center, or walk in where allowed.</li>
                <li><strong>Bring your documents:</strong> identity and, if needed, immigration or citizenship documents from TSA&apos;s accepted list.</li>
                <li><strong>Give fingerprints and a photo</strong> and pay the fee at the appointment.</li>
                <li><strong>Wait for the security threat assessment.</strong> TSA checks criminal, immigration and terrorism records.</li>
                <li><strong>Pick up or receive your card</strong> as instructed once you are approved.</li>
            </ol>
            <p>
                Apply well before you need port loads. If you already have a hazmat endorsement, you may qualify for the reduced
                rate because TSA has already completed a comparable background check.
            </p>

            <h2>Renewing your TWIC</h2>
            <p>
                The card is valid for five years. Some cardholders can renew online at the lower $117.25 fee; others must renew in
                person and follow the same steps as a new applicant. Put your expiration date in your phone: a terminal will turn
                you away the day after your card expires, even with a load assigned.
            </p>

            <h2>Is a TWIC worth it for an owner-operator?</h2>
            <p>
                If you run near a major port, such as Los Angeles and Long Beach, New York and New Jersey, Savannah, Houston or
                Charleston, a TWIC opens container and drayage freight that many drivers cannot take. It also helps when a
                transload load turns into a terminal pickup at the last minute. For about $25 a year spread over five years, most
                drivers who see port freight even occasionally find it worth having.
            </p>
            <p>
                If you have a TWIC, tell your dispatcher. At Priority Dispatch we include port and transload freight for TWIC
                holders; see our <a href="/truck-dispatcher/new-jersey">New Jersey</a>,{" "}
                <a href="/truck-dispatcher/georgia">Georgia</a> and <a href="/truck-dispatcher/california">California</a> dispatch
                pages for the ports we book around, and our <a href="/pricing">dispatch rates</a>.
            </p>
        </ArticleShell>
    )
}
