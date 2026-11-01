import type { Metadata } from "next"
import { CareersClient } from "./careers-client"

export const metadata: Metadata = {
    title: "Careers at Priority Dispatch LLC | Dispatcher & Sales Jobs",
    description: "Join Priority Dispatch LLC. We're hiring Freight Dispatchers and Sales Agents worldwide. Remote and on-site positions available in Kissimmee, FL. Apply today.",
    openGraph: {
        title: "Careers at Priority Dispatch LLC | Dispatcher & Sales Jobs",
        description: "Join Priority Dispatch LLC. We're hiring Freight Dispatchers and Sales Agents worldwide. Remote and on-site positions available.",
        url: "https://prioritydispatchllc.com/careers",
        siteName: "Priority Dispatch LLC",
        images: [
            {
                url: "/images/og-trucks-highway.jpg",
                width: 1200,
                height: 630,
                alt: "Careers at Priority Dispatch LLC",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@PriorityDispatch",
        title: "Careers at Priority Dispatch LLC | Dispatcher & Sales Jobs",
        description: "Join Priority Dispatch LLC. Hiring Freight Dispatchers and Sales Agents worldwide.",
        images: ["/images/og-trucks-highway.jpg"],
    },
    alternates: {
        canonical: "https://prioritydispatchllc.com/careers",
    },
}

const jobPostingSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "JobPosting",
            "title": "Freight Dispatcher",
            "description": "We're looking for experienced freight dispatchers to join our growing team. You'll be responsible for finding loads, negotiating rates, and providing 24/7 support to our carrier partners.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Priority Dispatch LLC",
                "value": "freight-dispatcher"
            },
            "datePosted": "2026-10-15",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Priority Dispatch LLC",
                "sameAs": "https://prioritydispatchllc.com",
                "logo": "https://prioritydispatchllc.com/images/logo-priority-dispatch.png"
            },
            "jobLocation": [
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "804 Brack St",
                        "addressLocality": "Kissimmee",
                        "addressRegion": "FL",
                        "postalCode": "34744",
                        "addressCountry": "US"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "US"
                    }
                }
            ],
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": {
                    "@type": "QuantitativeValue",
                    "minValue": 40000,
                    "maxValue": 70000,
                    "unitText": "YEAR"
                }
            },
            "workHours": "Full-time",
            "responsibilities": "Search and book loads using DAT, Truckstop, and direct broker relationships. Negotiate competitive rates with freight brokers. Track shipments and provide real-time updates to carriers. Handle detention claims, rate confirmations, and paperwork.",
            "qualifications": "2+ years of freight dispatching experience. Strong knowledge of load boards (DAT, Truckstop, 123Loadboard). Excellent negotiation and communication skills.",
            "applicantLocationRequirements": [
                { "@type": "Country", "name": "US" },
                { "@type": "Country", "name": "Pakistan" },
                { "@type": "Country", "name": "India" }
            ],
            "jobLocationType": "TELECOMMUTE"
        },
        {
            "@type": "JobPosting",
            "title": "Sales Agent / Business Development",
            "description": "Join our sales team to help owner-operators and small fleets discover how Priority Dispatch can transform their business. This role combines outbound sales, relationship building, and customer success.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Priority Dispatch LLC",
                "value": "sales-agent"
            },
            "datePosted": "2026-10-15",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Priority Dispatch LLC",
                "sameAs": "https://prioritydispatchllc.com",
                "logo": "https://prioritydispatchllc.com/images/logo-priority-dispatch.png"
            },
            "jobLocation": [
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "804 Brack St",
                        "addressLocality": "Kissimmee",
                        "addressRegion": "FL",
                        "postalCode": "34744",
                        "addressCountry": "US"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "US"
                    }
                }
            ],
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": {
                    "@type": "QuantitativeValue",
                    "minValue": 35000,
                    "maxValue": 80000,
                    "unitText": "YEAR"
                }
            },
            "workHours": "Full-time",
            "responsibilities": "Prospect and qualify new carrier leads through cold calling, email, and social media. Present Priority Dispatch services and value proposition to owner-operators. Close deals and onboard new carriers to our dispatch platform.",
            "qualifications": "1+ years of B2B sales or business development experience. Strong communication and persuasion skills. Self-motivated with a proven track record of meeting quotas.",
            "applicantLocationRequirements": [
                { "@type": "Country", "name": "US" },
                { "@type": "Country", "name": "Pakistan" },
                { "@type": "Country", "name": "India" }
            ],
            "jobLocationType": "TELECOMMUTE"
        }
    ]
}

export default function CareersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
            />
            <CareersClient />
        </>
    )
}
