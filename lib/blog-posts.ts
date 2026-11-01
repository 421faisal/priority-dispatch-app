export interface BlogPost {
    title: string
    slug: string
    excerpt: string
    date: string
    author: string
}

// Every live post, newest first. Used by the blog index, the homepage preview
// and the "Keep reading" links at the end of each post.
export const blogPosts: BlogPost[] = [
    {
        title: "How Much Does a Truck Dispatcher Charge? (2026 Rates)",
        slug: "truck-dispatcher-cost",
        excerpt: "Truck dispatchers usually charge 3% to 10% of each load or a flat weekly fee. Typical rates by equipment, what the fee should include and the red flags to avoid.",
        date: "November 1, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "What Is Inspection in Trucking? DOT Inspections Explained for Owner-Operators",
        slug: "what-is-inspection-in-trucking",
        excerpt: "Complete guide to DOT inspections, CVSA levels, and why clean inspection history opens doors with brokers. Learn how to pass inspections and protect your CSA score.",
        date: "June 23, 2026",
        author: "Priority Dispatch LLC",
    },
    {
        title: "How New Trucking Companies Can Survive the First 90 Days — And How MC Leasing Helps",
        slug: "how-to-survive-new-trucking-authority-mc-leasing",
        excerpt: "New trucking companies face brutal first-90-day challenges. Learn how MC leasing works, when it helps, and how Priority Dispatch LLC supports new owner-operators from day one.",
        date: "May 25, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "What Does TSA Certified Mean in Trucking?",
        slug: "what-is-tsa-certified-trucking",
        excerpt: "TSA certification unlocks air cargo and high-security freight in trucking. Learn how to become TSA certified and access premium expedited loads.",
        date: "May 22, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "What Is a TWIC Card in Trucking?",
        slug: "what-is-twic-card-trucking",
        excerpt: "A TWIC card opens the door to high-paying port loads. Learn what it is, how to get one, and how to find premium maritime freight opportunities.",
        date: "May 22, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "What Is a Bonded Carrier in Trucking?",
        slug: "what-is-bonded-carrier-trucking",
        excerpt: "Learn what a bonded carrier is in trucking, how to become one, and why owner-operators work with dispatch services to find bonded freight opportunities.",
        date: "May 22, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "How to Use Load Boards Effectively as an Owner‑Operator",
        slug: "how-to-use-load-boards",
        excerpt: "Load boards can flood your truck with freight — or waste hours of dead time. Here's how owner‑operators and small fleets can use them strategically to find better rates, avoid bad brokers, and keep wheels turning.",
        date: "April 8, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "How to Start a Trucking Company: From LLC to IRP Plates",
        slug: "how-to-start-trucking-company-llc-mc-authority",
        excerpt: "The ultimate A-to-Z guide on setting up your carrier authority. Learn exactly how to get your LLC, MC Authority, BOC-3, UCR, and Interstate permits.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Insider Trucking Tips: What I Learned the Hard Way in Logistics",
        slug: "insider-trucking-dispatch-tips-faisal",
        excerpt: "Faisal Bilal shares deep, unfiltered industry secrets on negotiating detention, spotting bad brokers, and surviving freight recessions.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Reality of Autonomous Trucking in 2026",
        slug: "impact-of-autonomous-trucking-2026",
        excerpt: "Explore the real-world impact of autonomous trucking in 2026. Are robot trucks taking over, or is the human driver still the most vital asset in logistics?",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Navigating the 2026 Freight Rate Rebound",
        slug: "navigating-freight-rate-rebound",
        excerpt: "The 2026 freight market is officially exiting the recession. Learn how to renegotiate contract rates, leverage spot market volatility, and push average RPM higher.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Electric Semis (EV) and the Future of Green Logistics in 2026",
        slug: "sustainability-ev-trucks-future",
        excerpt: "Are heavy-duty EV trucks ready for prime time? Explore the charging infrastructure hurdles, weight limits, and how regional haulers can leverage sustainability.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The EPA 2027 Pre-Buy Strategy: Why Carriers Are Buying Now",
        slug: "epa-2027-pre-buy-strategy",
        excerpt: "A massive regulatory shift is coming in 2027 with the EPA NOx standards, causing a surge in Class 8 truck orders in 2026. Discover the pre-buy strategy.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Combatting Freight Fraud and Digital Theft in 2026",
        slug: "combatting-freight-fraud-2026",
        excerpt: "Freight fraud and double brokering have reached record highs. Learn the 2026 carrier vetting checklist and how to detect chameleon carriers.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "AI Dispatching vs. Human Intuition: The Co-Pilot Model",
        slug: "ai-dispatching-co-pilot-model",
        excerpt: "Fully autonomous trucks are delayed, but AI dispatching is a baseline in 2026. See how the Human-in-the-Loop model uncovers hidden backhauls.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Non-Domiciled CDL Crackdown and Capacity Tightening",
        slug: "dot-cdl-crackdown-capacity-tightening",
        excerpt: "The DOT crackdown on non-domiciled CDLs could remove 200,000 drivers. Analyze how this capacity shortage will cause a spot rate recovery.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Micro-Niche Specialization: The Rise of Reefer and Flatbed",
        slug: "micro-niche-reefer-flatbed",
        excerpt: "While dry van rates stabilize, Reefer and Flatbed demand is exploding. Explore our transition guide to high-paying trucking niches.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "What Is Freight Dispatching? A Complete Guide for 2026",
        slug: "what-is-freight-dispatching",
        excerpt: "Learn how professional dispatching services can transform your trucking business by handling rate negotiations, scheduling, and back‑office work.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "2026 Freight Market Outlook: Navigating the Recovery",
        slug: "2026-freight-market-outlook",
        excerpt: "What should carriers and owner-operators expect in the 2026 freight market? Get real-time data on rates, volume, and supply chain trends.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "ELD Compliance Checklist: Essential Guardrails for 2026",
        slug: "eld-compliance-checklist-2026",
        excerpt: "Stay ahead of the FMCSA with our 2026 ELD compliance checklist. Avoid fines, maintain your CSA score, and keep your fleet on the road.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Maximizing Fuel Efficiency: Strategies for High-Mileage Fleets",
        slug: "maximizing-fuel-efficiency",
        excerpt: "Diesel prices remain the #1 expense for carriers in 2026. Learn how to slash fuel costs through aerodynamic upgrades and strategic routing.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "From One Truck to a Fleet: A Scaling Guide for Carriers",
        slug: "scaling-trucking-fleet-guide",
        excerpt: "Thinking about adding your second or third truck? Learn the financial, operational, and technical challenges of scaling your company in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Reefer Market Deep Dive: Protecting Perishable Profits",
        slug: "reefer-market-deep-dive",
        excerpt: "Refrigerated freight requires a specialized touch. Learn the latest trends in reefer dispatching and cold-chain compliance for 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Intermodal vs. Over-the-Road: Choosing the Right Path",
        slug: "intermodal-vs-over-the-road",
        excerpt: "Should your fleet focus on long-haul OTR or intermodal drayage? Discover the pros, cons, and profit potential of each mode in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Driver Shortage Solved? Modern Retention Strategies",
        slug: "driver-retention-strategies-2026",
        excerpt: "Discover the top retention strategies that small fleets are using to build loyalty and reduce turnover in the competitive 2026 market.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Last-Mile Logistics: The Boom in Box Truck Opportunities",
        slug: "last-mile-logistics-box-trucks",
        excerpt: "The E-commerce explosion has created a massive niche for last-mile delivery. Learn how box truck carriers are maximizing profits in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Future of Freight Brokerage: Digital Matching Platforms",
        slug: "future-of-freight-brokerage",
        excerpt: "Explore how digital freight matching (DFM) platforms and AI-driven brokerage are reshaping the carrier-broker relationship in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Mental Health and the Long-Haul Driver: Staying Healthy",
        slug: "mental-health-long-haul-drivers",
        excerpt: "Trucking is a lifestyle that can be taxing on mental health. Explore strategies for staying connected and healthy while over-the-road in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Owner-Operator Success: How to Maximize Your Revenue",
        slug: "owner-operator-guide",
        excerpt: "Discover the top strategies for owner-operators to increase their rate-per-mile and reduce deadhead through smart lane planning.",
        date: "March 1, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "How to Choose the Best Truck Dispatch Service",
        slug: "how-to-choose-dispatch-service",
        excerpt: "Not all dispatch services are created equal. Here is what to look for when choosing a partner for your carrier business.",
        date: "February 25, 2026",
        author: "Muhammad Faisal Bilal",
    }
]

type Topic = "getting-started" | "dispatch" | "market" | "equipment" | "fleet"

const topicOf: Record<string, Topic> = {
    "how-to-start-trucking-company-llc-mc-authority": "getting-started",
    "how-to-survive-new-trucking-authority-mc-leasing": "getting-started",
    "what-is-inspection-in-trucking": "getting-started",
    "eld-compliance-checklist-2026": "getting-started",
    "what-is-bonded-carrier-trucking": "getting-started",
    "what-is-tsa-certified-trucking": "getting-started",
    "what-is-twic-card-trucking": "getting-started",
    "dot-cdl-crackdown-capacity-tightening": "getting-started",
    "what-is-freight-dispatching": "dispatch",
    "truck-dispatcher-cost": "dispatch",
    "how-to-choose-dispatch-service": "dispatch",
    "how-to-use-load-boards": "dispatch",
    "insider-trucking-dispatch-tips-faisal": "dispatch",
    "owner-operator-guide": "dispatch",
    "ai-dispatching-co-pilot-model": "dispatch",
    "combatting-freight-fraud-2026": "dispatch",
    "2026-freight-market-outlook": "market",
    "navigating-freight-rate-rebound": "market",
    "epa-2027-pre-buy-strategy": "market",
    "impact-of-autonomous-trucking-2026": "market",
    "sustainability-ev-trucks-future": "market",
    "future-of-freight-brokerage": "market",
    "micro-niche-reefer-flatbed": "equipment",
    "reefer-market-deep-dive": "equipment",
    "intermodal-vs-over-the-road": "equipment",
    "last-mile-logistics-box-trucks": "equipment",
    "scaling-trucking-fleet-guide": "fleet",
    "driver-retention-strategies-2026": "fleet",
    "maximizing-fuel-efficiency": "fleet",
    "mental-health-long-haul-drivers": "fleet",
}

export interface ServiceLink {
    href: string
    label: string
}

const topicService: Record<Topic, ServiceLink> = {
    "getting-started": { href: "/services/new-carrier-setup", label: "New carrier setup and first loads" },
    dispatch: { href: "/owner-operator-dispatch", label: "Truck dispatch for owner-operators" },
    market: { href: "/pricing", label: "Dispatch pricing with no contracts" },
    equipment: { href: "/services", label: "Dispatch for every trailer type" },
    fleet: { href: "/services", label: "Dispatch services for small fleets" },
}

const postService: Record<string, ServiceLink> = {
    "reefer-market-deep-dive": { href: "/services/reefer-dispatch", label: "Reefer dispatch service" },
    "micro-niche-reefer-flatbed": { href: "/services/flatbed-dispatch", label: "Flatbed dispatch service" },
    "last-mile-logistics-box-trucks": { href: "/services/box-truck-dispatch", label: "Box truck dispatch service" },
    "intermodal-vs-over-the-road": { href: "/services/dry-van-dispatch", label: "Dry van dispatch service" },
    "how-to-use-load-boards": { href: "/services/dry-van-dispatch", label: "Dry van dispatch service" },
    "what-is-inspection-in-trucking": { href: "/carrier-setup", label: "Set up your carrier profile" },
    "truck-dispatcher-cost": { href: "/pricing", label: "See our dispatch rates" },
}

/** Up to `count` posts on the same topic, taken in turn after this one so every post gets inbound links. */
export function relatedPosts(slug: string, count = 3): BlogPost[] {
    const topic = topicOf[slug]
    const same = blogPosts.filter((p) => topicOf[p.slug] === topic)
    const at = same.findIndex((p) => p.slug === slug)
    const ordered = [...same.slice(at + 1), ...same.slice(0, Math.max(at, 0))].filter((p) => p.slug !== slug)
    const picks = ordered.slice(0, count)
    for (const p of blogPosts) {
        if (picks.length >= count) break
        if (p.slug !== slug && !picks.includes(p)) picks.push(p)
    }
    return picks
}

export function serviceFor(slug: string): ServiceLink {
    return postService[slug] ?? topicService[topicOf[slug] ?? "dispatch"]
}
