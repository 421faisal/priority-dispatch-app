import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://prioritydispatchllc.com'
    // Use current date to avoid future date errors
    const now = new Date()

    return [
        // ── Core Pages ──────────────────────────────────────────────────
        { url: baseUrl,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
        { url: `${baseUrl}/services`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/services/new-carrier-setup`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/about-owner`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/carrier-setup`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/areas-we-serve`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/toolbox`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/faq`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/privacy`,                       lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
        { url: `${baseUrl}/terms`,                         lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },

        // ── Careers (high priority — always hiring) ──────────────────────
        { url: `${baseUrl}/careers`,                       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },

        // ── Certificate Verification ──────────────────────────────────────
        { url: `${baseUrl}/verify`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/verify/PD-INT-2026-FZUNBUCA`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
        { url: `${baseUrl}/verify/PD-INT-2026-HMZMZFR`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },

        // ── Blog Index ───────────────────────────────────────────────────
        { url: `${baseUrl}/blog`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },

        // ── Blog Posts ───────────────────────────────────────────────────
        { url: `${baseUrl}/blog/what-is-inspection-in-trucking`,              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/how-to-survive-new-trucking-authority-mc-leasing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/what-is-tsa-certified-trucking`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/what-is-twic-card-trucking`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/what-is-bonded-carrier-trucking`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/how-to-start-trucking-company-llc-mc-authority`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/how-to-use-load-boards`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/insider-trucking-dispatch-tips-faisal`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/how-to-choose-dispatch-service`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/navigating-freight-rate-rebound`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/impact-of-autonomous-trucking-2026`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/sustainability-ev-trucks-future`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/epa-2027-pre-buy-strategy`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/combatting-freight-fraud-2026`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/ai-dispatching-co-pilot-model`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/dot-cdl-crackdown-capacity-tightening`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/micro-niche-reefer-flatbed`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/what-is-freight-dispatching`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/2026-freight-market-outlook`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/ai-machine-learning-dispatching`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/evolution-of-logistics`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/autonomous-trucks-2026`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/eld-compliance-checklist-2026`,               lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/maximizing-fuel-efficiency`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/scaling-trucking-fleet-guide`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/reefer-market-deep-dive`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/intermodal-vs-over-the-road`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/driver-retention-strategies-2026`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/last-mile-logistics-box-trucks`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/future-of-freight-brokerage`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/mental-health-long-haul-drivers`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/owner-operator-guide`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ]
}
