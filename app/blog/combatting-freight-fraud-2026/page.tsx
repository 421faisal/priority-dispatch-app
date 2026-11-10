import type { Metadata } from "next"
import { ArticleShell } from "@/components/site/article-shell"

const slug = "combatting-freight-fraud-2026"
const title = "Freight Fraud & Double Brokering: A Carrier Checklist"
const description =
    "The freight scams hitting carriers in 2026 (double brokering, identity theft, fake pickups) and a step-by-step checklist to vet brokers before you book."
const url = `https://prioritydispatchllc.com/blog/${slug}`
const image = `/images/blog/photos/${slug}-og.jpg`

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Priority Dispatch LLC", type: "article", publishedTime: "2026-03-12", modifiedTime: "2026-11-10", authors: ["Muhammad Faisal Bilal"], images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
}

const faqs = [
    { q: "What is double brokering?", a: "A company books a load from a broker, then re-brokers it to another carrier without permission, often at a lower rate, and disappears with the payment. The carrier that hauled the load may never get paid." },
    { q: "How do I check if a broker is real?", a: "Look the broker up on FMCSA by MC or USDOT number, confirm active broker authority and a bond or trust on file, and call the phone number listed there, not the number in the email. Check that the email domain matches the company." },
    { q: "What is FMCSA's Motus system?", a: "Motus is FMCSA's new registration system, launched on May 19, 2026. It adds identity verification with a government ID and a facial scan plus business validation, to make it harder for fraudsters to register or take over carrier and broker identities. MC numbers still exist." },
    { q: "Should I ever pay to get a load?", a: "No. Legitimate brokers do not charge carriers to book freight. A request for a fee, a deposit or a change of payment details by email is a red flag." },
]

export default function FraudGuide() {
    return (
        <ArticleShell
            slug={slug}
            title={title}
            description={description}
            h1="Freight Fraud and Double Brokering: How Carriers Protect Themselves"
            datePublished="2026-03-12"
            dateModified="2026-11-10"
            dateLabel="Updated November 10, 2026"
            readMinutes={7}
            photo={slug}
            photoAlt="Padlock and chain securing metal doors"
            faqs={faqs}
            sources={[
                { label: "FMCSA: launch of the Motus anti-fraud registration system (May 19, 2026)", url: "https://www.fmcsa.dot.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-launches-new-anti-fraud-registration-system" },
                { label: "FMCSA SAFER company snapshot", url: "https://safer.fmcsa.dot.gov/CompanySnapshot.aspx" },
            ]}
        >
            <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                <strong>Short answer:</strong> most freight fraud against carriers comes down to someone pretending to be a broker,
                shipper or carrier they are not. You protect yourself by checking every broker on FMCSA, calling back on a number
                you found yourself, getting everything on a rate confirmation that matches, and never paying to get a load.
            </p>

            <h2>The scams carriers see most</h2>
            <ul>
                <li><strong>Double brokering:</strong> a fake or rogue company books the load and re-brokers it to you. You haul it, they collect, you do not get paid.</li>
                <li><strong>Broker identity theft:</strong> scammers use a real broker&apos;s name and MC with a look-alike email domain or phone number.</li>
                <li><strong>Fictitious pickups:</strong> a thief poses as a carrier to collect freight at the shipper and steal the load. Carriers&apos; identities get used for this too.</li>
                <li><strong>Payment change requests:</strong> an email &quot;from the broker&quot; or &quot;from your factoring company&quot; asks you to update bank details.</li>
                <li><strong>Account takeovers:</strong> phishing emails steal load board or FMCSA portal logins and use your authority to book loads.</li>
            </ul>

            <h2>Broker vetting checklist (before every new broker)</h2>
            <ol>
                <li>Look up the MC or USDOT number on FMCSA and confirm <strong>active broker authority</strong>.</li>
                <li>Check there is a <strong>broker bond or trust</strong> on file.</li>
                <li>Compare the <strong>email domain and phone number</strong> with the company&apos;s FMCSA record and website. One letter off is a warning.</li>
                <li><strong>Call back</strong> using the number you found yourself, not the one in the email, and confirm the load and the person.</li>
                <li>Check the broker&apos;s <strong>credit and days to pay</strong> in your load board or factoring tools.</li>
                <li>Read the <strong>rate confirmation</strong>: broker name and MC, pickup number, addresses and rate must match what you agreed.</li>
                <li>Be careful with loads paying <strong>far above</strong> the lane rate with pressure to move &quot;right now&quot;.</li>
            </ol>

            <h2>Protect your own authority</h2>
            <ul>
                <li>Never share FMCSA portal, load board or email passwords. Turn on two-factor login everywhere it is offered.</li>
                <li>Keep your contact details on FMCSA current so brokers can verify you.</li>
                <li>Confirm payment-change requests by phone with your factoring company. We work with{" "}
                    <a href="https://www.bobtail.com/" target="_blank" rel="noopener noreferrer">Bobtail</a> for factoring.</li>
                <li>When you stop working with a dispatcher, close everything out. Read{" "}
                    <a href="/blog/never-share-your-mc-case-study">how one uncancelled load damaged a carrier&apos;s reputation</a>.</li>
            </ul>

            <h2>What changed in 2026: FMCSA&apos;s Motus system</h2>
            <p>
                On May 19, 2026, FMCSA launched Motus, a new registration system that replaces the old ones. New registrations go
                through identity verification with a government ID and a facial scan, plus checks that the business is real. The
                goal is to make it harder to create fake companies or take over real ones. MC numbers and BOC-3 rules have not
                changed at launch, so keep checking MC records the same way.
            </p>

            <h2>If you think you have been scammed</h2>
            <ol>
                <li>Stop work on the load if it is still in progress and call the shipper and the real broker.</li>
                <li>Save every email, text, rate confirmation and call log.</li>
                <li>Report it to the real broker, your factoring company and FMCSA, and to police if freight was stolen.</li>
                <li>Warn your dispatcher so the same contact is blocked for your other trucks.</li>
            </ol>
            <p>
                Checking brokers on every load is part of the service at Priority Dispatch; see{" "}
                <a href="/owner-operator-dispatch">how owner-operator dispatch works</a> and{" "}
                <a href="/blog/how-to-choose-dispatch-service">how to choose a dispatch service</a>.
            </p>
        </ArticleShell>
    )
}
