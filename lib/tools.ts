export interface ToolFaq {
    q: string
    a: string
}

export interface Tool {
    slug: string
    name: string
    /** One line for cards and link lists */
    short: string
    title: string
    description: string
    h1: string
    /** Answer-first intro, quoted by search snippets and AI answers */
    intro: string
    steps: string[]
    faqs: ToolFaq[]
    sources: { label: string; url: string }[]
}

export const tools: Tool[] = [
    {
        slug: "cost-per-mile-calculator",
        name: "Cost Per Mile Calculator",
        short: "Your true operating cost per mile, compared with the ATRI national average.",
        title: "Trucking Cost Per Mile Calculator (Free, 2026)",
        description:
            "Free trucking cost per mile calculator for owner-operators. Add fixed and variable costs to find your break-even rate and compare it with ATRI's $2.336 average.",
        h1: "Trucking Cost Per Mile Calculator",
        intro:
            "Your cost per mile is the minimum you must earn on every mile just to break even. Add your monthly fixed costs (truck payment, insurance, permits) and your per-mile variable costs (fuel, maintenance, tires) and divide by the miles you run. ATRI's 2026 report puts the national average at $2.336 per mile, or $1.854 without fuel.",
        steps: [
            "Enter the miles you drive in a typical month, loaded and empty.",
            "Enter your monthly fixed costs: truck and trailer payments, insurance, permits, ELD and other bills.",
            "Enter fuel price, your average MPG and your maintenance and tire cost per mile.",
            "Read your total cost per mile and compare it with the national average.",
        ],
        faqs: [
            { q: "What is a good cost per mile for an owner-operator?", a: "It depends on equipment and miles, but ATRI's 2026 report puts the national average at $2.336 per mile including fuel and $1.854 excluding fuel. Owner-operators who own their truck outright or run high miles can be well below that." },
            { q: "Should I include deadhead miles?", a: "Yes. Use all the miles you drive, loaded and empty. Your costs happen on every mile, so dividing by loaded miles only would make your cost per mile look lower than it really is." },
            { q: "How do I use my cost per mile?", a: "Never accept a load whose rate per mile, counted over all the miles including deadhead, is below your cost per mile. Add your profit target on top to set your minimum rate." },
        ],
        sources: [{ label: "ATRI, An Analysis of the Operational Costs of Trucking: 2026 Update", url: "https://truckingresearch.org/about-atri/atri-research/operational-costs-of-trucking/" }],
    },
    {
        slug: "load-profit-calculator",
        name: "Load Profit & Deadhead Calculator",
        short: "Is this load worth it? Profit, true rate per mile with deadhead, and break-even rate.",
        title: "Load Profit & Deadhead Calculator for Truckers",
        description:
            "Check if a load is worth taking. Enter the rate, loaded and deadhead miles, fuel and costs to see profit, true rate per mile and your break-even rate. Free.",
        h1: "Load Profit and Deadhead Calculator",
        intro:
            "A load that pays $3.00 per loaded mile can pay much less once you count the empty miles to get to it. This calculator spreads the rate over all the miles you drive, subtracts fuel, operating costs, tolls and the dispatch fee, and shows your real profit and the lowest rate you should accept.",
        steps: [
            "Enter the rate the broker is offering and the loaded miles.",
            "Enter the deadhead miles from where you are now to the pickup.",
            "Enter fuel price, MPG and your other costs per mile (from the cost per mile calculator).",
            "Pick your equipment to include the dispatch fee, then read profit and the break-even rate.",
        ],
        faqs: [
            { q: "How much deadhead is too much?", a: "There is no single rule, but many carriers aim to keep deadhead under 10 to 15% of total miles. ATRI found carriers average around 16.5% empty miles. What matters is the rate per mile across all miles, including deadhead." },
            { q: "What is the difference between loaded and all-miles rate per mile?", a: "Loaded rate per mile divides the rate by loaded miles only. All-miles rate per mile divides it by loaded plus deadhead miles. The all-miles number is the one to compare with your cost per mile." },
            { q: "What is a break-even rate?", a: "It is the lowest total rate that covers fuel, operating costs, tolls and dispatch fees for the trip. Anything above it is profit." },
        ],
        sources: [{ label: "ATRI, An Analysis of the Operational Costs of Trucking: 2026 Update", url: "https://truckingresearch.org/about-atri/atri-research/operational-costs-of-trucking/" }],
    },
    {
        slug: "hos-calculator",
        name: "Hours of Service (HOS) Calculator",
        short: "How many driving hours you have left under the 11, 14, 30-minute and 60/70 rules.",
        title: "Hours of Service (HOS) Calculator: 11, 14 & 70-Hour Rules",
        description:
            "Free FMCSA hours of service calculator. See driving time left under the 11-hour, 14-hour, 30-minute break and 60/70-hour rules, and when your window closes.",
        h1: "Hours of Service (HOS) Calculator",
        intro:
            "Property-carrying drivers may drive up to 11 hours within a 14-hour window after 10 hours off duty, must take a 30-minute break after 8 hours of driving, and cannot drive after 60 hours in 7 days or 70 hours in 8 days until they take a 34-hour restart. Enter where you are in your day to see which limit you hit first.",
        steps: [
            "Enter the time you came on duty after your last 10 hours off, and the time now.",
            "Enter how many hours you have driven since that 10-hour break, and since your last 30-minute break.",
            "Choose your 60-hour/7-day or 70-hour/8-day cycle and enter the on-duty hours you have used.",
            "Read your driving time left, the rule that limits you and when you need a break.",
        ],
        faqs: [
            { q: "Does a break stop the 14-hour clock?", a: "No. The 14-hour window keeps running during breaks, fuel stops and waiting time. Only the split sleeper berth option can pause it, which this calculator does not model." },
            { q: "What counts as the 30-minute break?", a: "Any 30 consecutive minutes not driving: off duty, sleeper berth or on duty not driving, such as fueling or waiting at a dock. It is required after 8 cumulative hours of driving." },
            { q: "How do I reset my 70-hour clock?", a: "Take 34 or more consecutive hours off duty. That 34-hour restart resets your 60 or 70-hour cycle to zero." },
            { q: "Can I rely on this instead of my ELD?", a: "No. This is a planning tool. Your ELD record is what counts at a roadside inspection, and exceptions such as adverse driving conditions, short-haul and split sleeper berth are not included here." },
        ],
        sources: [
            { label: "FMCSA, Summary of Hours of Service Regulations", url: "https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations" },
            { label: "49 CFR Part 395", url: "https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395" },
        ],
    },
    {
        slug: "ifta-calculator",
        name: "IFTA Fuel Tax Calculator",
        short: "Quarterly IFTA worksheet: miles and gallons by state, tax owed or credited.",
        title: "IFTA Fuel Tax Calculator for Truckers (Free Worksheet)",
        description:
            "Free IFTA calculator. Enter miles, gallons bought and the tax rate for each state to find your fleet MPG, taxable gallons and net fuel tax owed or credited.",
        h1: "IFTA Fuel Tax Calculator",
        intro:
            "IFTA spreads your fuel tax across the states you drove in. Your fleet MPG (total miles divided by total gallons) sets how many gallons you used in each state. Tax is owed on those gallons at each state's rate, and you get credit for the tax you already paid at the pump in that state.",
        steps: [
            "Add a row for each state you drove in this quarter.",
            "Enter the miles driven and the gallons bought in that state.",
            "Enter each state's diesel tax rate for the quarter from the IFTA tax rate matrix.",
            "Read the tax owed or credited per state and your net total.",
        ],
        faqs: [
            { q: "Where do I find the IFTA tax rates?", a: "IFTA, Inc. publishes the official tax rate matrix every quarter at iftach.org. Some states also add a surcharge; include it in the rate you enter." },
            { q: "Why do I get a credit in some states?", a: "If you bought more fuel in a state than you burned there, you already paid more tax at the pump than you owe, so that state credits you the difference." },
            { q: "When is IFTA due?", a: "IFTA returns are due by the last day of the month after each quarter: April 30, July 31, October 31 and January 31." },
        ],
        sources: [{ label: "IFTA, Inc. tax rate matrix", url: "https://www.iftach.org/taxmatrix4/Taxmatrix.php" }],
    },
    {
        slug: "per-diem-calculator",
        name: "Truck Driver Per Diem Calculator",
        short: "Your IRS per diem deduction at $80 a day, 80% deductible for DOT drivers.",
        title: "Truck Driver Per Diem Calculator 2026 ($80/Day IRS Rate)",
        description:
            "Free truck driver per diem calculator using the IRS $80/day transportation rate. Counts partial days at 75% and the 80% deduction limit for DOT drivers.",
        h1: "Truck Driver Per Diem Calculator",
        intro:
            "The IRS special meals and incidentals (M&IE) rate for the transportation industry is $80 per day for travel in the continental US and $86 outside it, unchanged for the year starting October 1, 2026. Days you leave and return count at 75%, and drivers under DOT hours-of-service rules can deduct 80% of the total.",
        steps: [
            "Count the full days you were away from home overnight.",
            "Count partial days, such as the days you left and came home.",
            "Keep the $80 rate for travel in the continental US, or use $86 outside it.",
            "Optionally enter your tax rate to estimate the tax you save.",
        ],
        faqs: [
            { q: "Who can claim truck driver per diem?", a: "Self-employed owner-operators who travel away from their tax home overnight can deduct it. Company drivers generally cannot deduct unreimbursed expenses, but employers can pay per diem tax-free. Ask a tax professional about your situation." },
            { q: "Why only 80%?", a: "Normally only 50% of meal costs are deductible. People subject to Department of Transportation hours-of-service rules, including most truck drivers, can deduct 80%." },
            { q: "How are partial days counted?", a: "The day you leave and the day you return count at 75% of the daily rate. A day you leave and return the same day, without an overnight rest, does not qualify." },
        ],
        sources: [
            { label: "IRS Notice 2025-54, special per diem rates", url: "https://www.irs.gov/pub/irs-drop/n-25-54.pdf" },
            { label: "IRS Publication 463, travel and meal expenses", url: "https://www.irs.gov/publications/p463" },
        ],
    },
    {
        slug: "detention-pay-calculator",
        name: "Detention Pay Calculator",
        short: "What to bill for time waiting at shippers and receivers after free time.",
        title: "Detention Pay Calculator for Truck Drivers",
        description:
            "Free detention pay calculator. Enter check-in and release times, free time and your hourly rate to see billable detention, rounded the way brokers bill it.",
        h1: "Detention Pay Calculator",
        intro:
            "Most brokers and shippers give two hours of free time at pickup and delivery, then pay detention by the hour. Enter when you checked in and when you were released to see how much detention you can bill, rounded up to your billing increment.",
        steps: [
            "Enter the time you checked in at the facility and the time you were released.",
            "Enter the free time on your rate confirmation, usually 2 hours.",
            "Enter the detention rate per hour from your rate confirmation.",
            "Choose the billing increment and read the amount to bill.",
        ],
        faqs: [
            { q: "How much is detention pay?", a: "It is set on your rate confirmation. Typical rates run around $25 to $75 per hour after two hours of free time, and some brokers cap the daily amount." },
            { q: "How do I get paid for detention?", a: "Get the detention terms in writing on the rate confirmation, record in and out times on the bill of lading or with photos and ELD data, and tell the broker as soon as free time is running out." },
            { q: "Does a dispatcher handle detention claims?", a: "A good dispatcher does. At Priority Dispatch, detention and TONU claims are included in the dispatch fee." },
        ],
        sources: [],
    },
]

export function toolBySlug(slug: string): Tool | undefined {
    return tools.find((t) => t.slug === slug)
}
