import type { Metadata } from "next"
import { ArticleShell } from "@/components/site/article-shell"

const slug = "eld-compliance-checklist-2026"
const title = "ELD Compliance Checklist for Owner-Operators (2026)"
const description =
    "A practical ELD compliance checklist: what must be in the cab, malfunctions, revoked devices, exemptions, edits and roadside data transfer, per FMCSA rules."
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
    { q: "What do I need in the truck for ELD compliance?", a: "An ELD from FMCSA's registered list, plus the user manual, an instruction sheet for transferring data to an officer, an instruction sheet for malfunctions, and at least 8 days of blank paper logs. The manual and sheets can be electronic." },
    { q: "What happens if my ELD stops working?", a: "Note the malfunction and tell your carrier within 24 hours, rebuild your logs for the current day and the previous 7 days, and run paper logs until it is fixed. The carrier has 8 days to repair or replace it unless FMCSA grants an extension." },
    { q: "Who is exempt from the ELD rule?", a: "Drivers using the short-haul exception, drivers who keep paper logs no more than 8 days in any 30-day period, driveaway-towaway operations, and trucks with an engine model year older than 2000. Exempt drivers still have to follow hours-of-service rules." },
    { q: "What if FMCSA revokes my ELD model?", a: "Revoked devices are listed on FMCSA's ELD website. Carriers generally get 60 days from the revocation to switch to a compliant device, so check the list and plan the change early." },
]

export default function EldChecklist() {
    return (
        <ArticleShell
            slug={slug}
            title={title}
            description={description}
            h1="ELD Compliance Checklist for Owner-Operators"
            datePublished="2026-03-03"
            dateModified="2026-11-10"
            dateLabel="Updated November 10, 2026"
            readMinutes={7}
            photo={slug}
            photoAlt="Dry van trailer on the highway at dusk"
            faqs={faqs}
            sources={[
                { label: "FMCSA: ELD rule and registered devices", url: "https://eld.fmcsa.dot.gov/" },
                { label: "49 CFR 395.22 and 395.34 (motor carrier and driver ELD duties, malfunctions)", url: "https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395" },
                { label: "FMCSA: ELD malfunctions and data diagnostics FAQ", url: "https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/2022-03/FMCSA-ELD-Malfunctions-Data-Diagnostics-FAQs%282022-03-10%29_1.docx" },
            ]}
        >
            <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                <strong>Short answer:</strong> to stay ELD compliant you need a device on FMCSA&apos;s registered list, the
                required instructions and blank paper logs in the cab, accurate logs with no unassigned driving left unexplained,
                and a plan for malfunctions and roadside data transfer. Use the checklist below before every trip.
            </p>

            <h2>The device</h2>
            <ul>
                <li>Your ELD model is on FMCSA&apos;s <strong>registered</strong> list and not on the <strong>revoked</strong> list.</li>
                <li>It is mounted where you can see it from the normal driving position and it connects to the engine.</li>
                <li>Each driver logs in with their own account. No sharing logins between team drivers.</li>
                <li>The truck&apos;s engine model year is 2000 or newer (older engines are exempt, but you still keep logs).</li>
            </ul>

            <h2>What must be in the cab</h2>
            <ul>
                <li>The ELD user manual (paper or electronic)</li>
                <li>An instruction sheet on how to transfer your data to an officer</li>
                <li>An instruction sheet on what to do when the ELD malfunctions</li>
                <li>A supply of blank paper logs for at least 8 days</li>
            </ul>
            <p>Missing instruction sheets are one of the easiest violations to avoid. Keep them in the same folder as your registration and insurance.</p>

            <h2>Daily log habits</h2>
            <ul>
                <li>Certify your logs at the end of each day.</li>
                <li>Review and accept or reject <strong>unassigned driving time</strong>. Someone has to account for every mile the truck moved.</li>
                <li>Make edits only with an annotation that explains why. Edits proposed by the carrier must be approved by the driver.</li>
                <li>Keep supporting documents (bills of lading, fuel receipts, dispatch records) for 6 months, as you do your logs.</li>
                <li>Use yard move and personal conveyance only as FMCSA guidance allows, and annotate them.</li>
            </ul>

            <h2>When the ELD malfunctions</h2>
            <p>Under 49 CFR 395.34:</p>
            <ol>
                <li>Note the malfunction and notify your carrier within 24 hours.</li>
                <li>Reconstruct your record of duty status for the current day and the previous 7 days on paper (unless you can retrieve them).</li>
                <li>Keep paper logs until the device is repaired.</li>
                <li>The carrier must repair or replace the ELD within 8 days, or ask FMCSA for an extension within 5 days of the driver&apos;s notice.</li>
            </ol>
            <p>
                Tell your broker or dispatcher too: if they cannot see the truck&apos;s location, they need another way to track the
                load. We learned this the hard way; read{" "}
                <a href="/blog/eld-down-driver-location-case-study">what happened when an ELD went down mid-load</a>.
            </p>

            <h2>At a roadside inspection</h2>
            <ul>
                <li>Know how to show your logs on the screen and how to transfer them, either by telematics (web services or email) or locally (USB or Bluetooth), depending on your device.</li>
                <li>Practice the data transfer once before you need it. Fumbling with the device makes a stop longer.</li>
                <li>Have your instruction sheets ready if the transfer fails.</li>
            </ul>

            <h2>Who is exempt</h2>
            <ul>
                <li>Drivers using the short-haul exception (within 150 air miles, back within 14 hours)</li>
                <li>Drivers who keep paper logs no more than 8 days in any 30-day period</li>
                <li>Driveaway-towaway operations</li>
                <li>Trucks with an engine model year older than 2000</li>
            </ul>
            <p>Exempt drivers still follow hours-of-service rules. Our free <a href="/toolbox/hos-calculator">HOS calculator</a> helps you plan the 11, 14 and 70-hour limits.</p>

            <h2>If FMCSA revokes your device</h2>
            <p>
                FMCSA removes ELDs that do not meet the rules and publishes a revoked list. Carriers generally get 60 days to switch
                to a compliant device. Check the list a few times a year, and ask your ELD provider (ours is{" "}
                <a href="https://simplexgroup.net/" target="_blank" rel="noopener noreferrer">Simplex Group</a>) to confirm the
                model is still registered.
            </p>
        </ArticleShell>
    )
}
