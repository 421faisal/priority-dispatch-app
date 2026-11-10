// Driver jobs based in Torrance, CA. One page per job (Google for Jobs wants one
// JobPosting per page): app/careers/[role]/page.tsx renders each entry.
// Pay is agreed per driver (percentage of the load or per mile): no figures are
// published until the owner gives them.

export interface DriverJob {
    slug: string
    id: string
    title: string // the job title in JobPosting and the h1
    metaTitle: string // <= 60 characters
    metaDescription: string
    equipment: string
    license: string
    shortLicense: string
    lead: string
    photo: string
    photoAlt: string
    requirements: string[]
    duties: string[]
    faqs: { q: string; a: string }[]
    other: string // slug of the other driver job
}

export const DATE_POSTED = "2026-11-10"
export const VALID_THROUGH = "2027-02-10"
export const BASE = "Torrance, CA"

const shared = {
    pay: "Paid by percentage of the load or by the mile, your choice. We agree the rate with you before your first trip.",
}

export const driverJobs: DriverJob[] = [
    {
        slug: "class-a-cdl-dry-van-driver-torrance-ca",
        id: "class-a-dry-van-torrance",
        title: "Class A CDL Dry Van Driver, OTR and Regional",
        metaTitle: "Class A CDL Dry Van Driver Jobs in Torrance, CA",
        metaDescription:
            "Hiring dedicated Class A CDL dry van drivers in Torrance, CA for OTR and regional runs. Truck and trailer provided, percentage or per-mile pay. New CDL drivers welcome.",
        equipment: "Dry van (53 ft trailer and tractor provided)",
        license: "Class A CDL",
        shortLicense: "Class A CDL",
        lead: "We are hiring dedicated Class A CDL drivers to run our dry van out of Torrance, California, on OTR and regional routes. We provide the truck and trailer. You choose percentage or per-mile pay. New CDL holders are welcome to apply.",
        photo: "/images/blog/photos/2026-freight-market-outlook.webp",
        photoAlt: "Two semi trucks pulling dry van trailers on an interstate highway",
        requirements: [
            "A valid Class A CDL",
            "21 or older, as federal rules require for interstate driving",
            "A current DOT medical card",
            "Able to pass a DOT pre-employment drug test",
            "New CDL graduates welcome: tell us your training school",
        ],
        duties: [
            "Run dedicated OTR and regional dry van loads from our Torrance, CA base",
            "Pre-trip and post-trip inspections and ELD logs",
            "Send BOLs and PODs through the dispatcher after every load",
            "Stay in touch with dispatch, which is there 24/7",
        ],
        faqs: [
            { q: "Do you hire new CDL drivers with no experience?", a: "Yes. New Class A CDL holders can apply. Tell us where you trained, and we will tell you what our insurance needs for your first runs." },
            { q: "How is the pay for this dry van job?", a: shared.pay },
            { q: "Is the truck provided?", a: "Yes. We provide the tractor and the 53 ft dry van trailer. You do not need your own truck or authority." },
            { q: "Where do the routes start?", a: "Every route starts and ends at our base in Torrance, California. We run both regional and over-the-road (OTR) lanes." },
            { q: "How do I apply?", a: "Fill in the short form on this page with your name, phone number and a photo of your license, or call or WhatsApp us at (689) 314-8347." },
        ],
        other: "box-truck-driver-torrance-ca",
    },
    {
        slug: "box-truck-driver-torrance-ca",
        id: "box-truck-torrance",
        title: "Box Truck Driver, Class B CDL or Non-CDL, OTR and Regional",
        metaTitle: "Box Truck Driver Jobs in Torrance, CA: CDL or Non-CDL",
        metaDescription:
            "Hiring dedicated box truck drivers in Torrance, CA for OTR and regional runs. Class B CDL or a regular license for non-CDL trucks. Truck provided, percentage or per-mile pay.",
        equipment: "Box truck (provided)",
        license: "Class B CDL, or a regular driver's license for non-CDL box trucks",
        shortLicense: "Class B CDL or regular license",
        lead: "We are hiring dedicated box truck drivers out of Torrance, California, for OTR and regional routes. Drive with a Class B CDL, or with a regular license on our non-CDL box trucks. We provide the truck, and you choose percentage or per-mile pay. New drivers can apply.",
        photo: "/images/blog/photos/last-mile-logistics-box-trucks.webp",
        photoAlt: "A white box truck with its rear door open, unloading on a city street",
        requirements: [
            "A Class B CDL for box trucks over 26,000 lb, or a regular driver's license for non-CDL box trucks",
            "21 or older for interstate (out-of-state) runs",
            "A DOT medical card for trucks over 10,000 lb on interstate runs",
            "Able to pass a DOT drug test if you drive on a CDL",
            "New drivers welcome",
        ],
        duties: [
            "Run dedicated OTR and regional box truck loads from our Torrance, CA base",
            "Load checks, straps and liftgate use where the load needs it",
            "Pre-trip inspections and logs where your truck requires them",
            "Send BOLs and PODs through the dispatcher after every delivery",
        ],
        faqs: [
            { q: "Do I need a CDL to drive your box truck?", a: "Not always. Box trucks over 26,000 lb need a Class B CDL. Our non-CDL box trucks can be driven with a regular driver's license." },
            { q: "Can new drivers apply for the box truck job?", a: "Yes. New drivers can apply. Send your license photo and we will tell you which truck you can start on." },
            { q: "How is the pay for this box truck job?", a: shared.pay },
            { q: "Where do the routes start?", a: "Every route starts and ends at our base in Torrance, California, with regional and over-the-road (OTR) runs." },
            { q: "How do I apply?", a: "Fill in the short form on this page with your name, phone number and a photo of your license, or call or WhatsApp us at (689) 314-8347." },
        ],
        other: "class-a-cdl-dry-van-driver-torrance-ca",
    },
]

export function driverJobBySlug(slug: string) {
    return driverJobs.find((j) => j.slug === slug)
}

export const PAY_LINE = shared.pay
