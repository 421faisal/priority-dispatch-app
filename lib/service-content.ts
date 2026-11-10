// Per-service FAQs and related links, rendered by components/site/service-extras.tsx
// so the service pages link into guides, state pages, tools and each other.
export interface ServiceContent {
    name: string
    faqs: { q: string; a: string }[]
    guides: string[]
    states: string[]
    tools: string[]
}

export const serviceContent: Record<string, ServiceContent> = {
    "dry-van-dispatch": {
        name: "Dry van",
        faqs: [
            { q: "How much is dry van dispatch?", a: "Our dry van dispatch fee is 4% of the gross load, paid only after the broker pays you. There is no setup fee and no contract." },
            { q: "What freight do dry vans haul?", a: "Packaged consumer goods, retail and e-commerce freight, paper, beverages, auto parts and anything that does not need temperature control or open-deck loading." },
            { q: "Which lanes are best for dry van?", a: "It changes with the market, but balanced regions like the Midwest and big distribution markets such as Atlanta, Dallas, Chicago and the Pennsylvania warehouse corridors usually offer the easiest reloads." },
        ],
        guides: ["how-to-use-load-boards", "owner-operator-guide", "2026-freight-market-outlook"],
        states: ["midwest", "east-coast", "texas"],
        tools: ["load-profit-calculator", "cost-per-mile-calculator"],
    },
    "reefer-dispatch": {
        name: "Reefer",
        faqs: [
            { q: "How much is reefer dispatch?", a: "Our reefer dispatch fee is 4% of the gross load, paid only after the broker pays you, with no contract." },
            { q: "What do reefer carriers need to watch for?", a: "Set point and temperature records, pre-cooling the trailer, clean trailers for food loads, and longer waits at food facilities. We confirm the temperature and any food-safety requirements on the rate confirmation before you accept." },
            { q: "Where is reefer freight strongest?", a: "Produce regions such as California, Florida, Georgia and the Rio Grande Valley, plus food processing in the Midwest and poultry and pork in the Southeast." },
        ],
        guides: ["reefer-market-deep-dive", "micro-niche-reefer-flatbed", "2026-freight-market-outlook"],
        states: ["california", "florida", "georgia"],
        tools: ["load-profit-calculator", "hos-calculator"],
    },
    "flatbed-dispatch": {
        name: "Flatbed",
        faqs: [
            { q: "How much is flatbed dispatch?", a: "Our flatbed dispatch fee is 4% of the gross load, paid only after the broker pays you, with no contract." },
            { q: "What equipment do flatbed loads need?", a: "Straps, chains, binders, edge protectors and tarps, depending on the load. Securement must meet FMCSA cargo securement rules, and we confirm tarp and securement requirements before booking." },
            { q: "Do you book oversize flatbed loads?", a: "Yes, when your equipment and permits allow it. Oversize loads need state permits and sometimes escorts, so we check the dimensions and route before you accept." },
        ],
        guides: ["micro-niche-reefer-flatbed", "2026-freight-market-outlook", "epa-2027-pre-buy-strategy"],
        states: ["texas", "pennsylvania", "indiana"],
        tools: ["load-profit-calculator", "cost-per-mile-calculator"],
    },
    "step-deck-dispatch": {
        name: "Step deck",
        faqs: [
            { q: "How much is step deck dispatch?", a: "Our step deck dispatch fee is 4% of the gross load, paid only after the broker pays you, with no contract." },
            { q: "What is the difference between step deck and flatbed?", a: "A step deck has a lower rear deck, so it can carry taller freight such as machinery and equipment without going over legal height. That often means better-paying loads that a standard flatbed cannot take." },
            { q: "Do step deck loads need permits?", a: "Legal-size loads do not. Over-height, over-width or overweight loads need state permits, and we check dimensions and route before you accept." },
        ],
        guides: ["micro-niche-reefer-flatbed", "how-to-choose-dispatch-service", "2026-freight-market-outlook"],
        states: ["texas", "california", "midwest"],
        tools: ["load-profit-calculator", "cost-per-mile-calculator"],
    },
    "power-only-dispatch": {
        name: "Power only",
        faqs: [
            { q: "How much is power only dispatch?", a: "Our power only dispatch fee is 4% of the gross load, paid only after the broker pays you, with no contract." },
            { q: "What is power only trucking?", a: "You haul a trailer provided by the shipper, broker or carrier, so you only need a tractor. It suits drivers without a trailer and drop-and-hook freight around warehouses and rail ramps." },
            { q: "What insurance do I need for power only?", a: "Most power only programs require trailer interchange insurance in addition to liability and cargo, because you are responsible for a trailer you do not own. Check the broker's requirements before you start." },
        ],
        guides: ["intermodal-vs-over-the-road", "how-to-use-load-boards", "owner-operator-guide"],
        states: ["illinois", "new-jersey", "california"],
        tools: ["load-profit-calculator", "hos-calculator"],
    },
    "box-truck-dispatch": {
        name: "Box truck",
        faqs: [
            { q: "How much is box truck dispatch?", a: "Our box truck dispatch fee is 6% of the gross load, paid only after the broker pays you, with no contract." },
            { q: "Do I need MC authority for a box truck?", a: "To haul other people's freight for pay across state lines, you need a USDOT number and MC operating authority once the truck is over 10,000 lbs GVWR. Smaller vehicles have different rules, so check with FMCSA for your setup." },
            { q: "What helps a box truck get more loads?", a: "A liftgate, a pallet jack, a team-ready schedule for expedited freight and a clean safety record. We look for loads that match your truck's size and equipment." },
        ],
        guides: ["last-mile-logistics-box-trucks", "how-to-start-trucking-company-llc-mc-authority", "how-to-use-load-boards"],
        states: ["ohio", "michigan", "florida"],
        tools: ["load-profit-calculator", "detention-pay-calculator"],
    },
    "hotshot-dispatch": {
        name: "Hotshot",
        faqs: [
            { q: "How much is hotshot dispatch?", a: "Our hotshot dispatch fee is 6% of the gross load, paid only after the broker pays you, with no contract." },
            { q: "Do I need a CDL for hotshot?", a: "You need a Class A CDL when the combined weight rating of truck and trailer is over 26,000 lbs and the trailer is over 10,000 lbs. Many hotshot setups cross that line, so check your ratings." },
            { q: "What freight do hotshot trucks haul?", a: "Time-sensitive and partial loads: oilfield and construction equipment, machinery parts, building materials and other freight that needs to move fast on a gooseneck or bumper-pull trailer." },
        ],
        guides: ["how-to-start-trucking-company-llc-mc-authority", "micro-niche-reefer-flatbed", "how-to-choose-dispatch-service"],
        states: ["texas", "pennsylvania", "indiana"],
        tools: ["load-profit-calculator", "cost-per-mile-calculator"],
    },
    "new-carrier-setup": {
        name: "New carrier",
        faqs: [
            { q: "How long does it take to get MC authority?", a: "After you apply and your insurance is on file, FMCSA usually activates new authority after a protest period of about 21 days. Start insurance early so it does not hold you up." },
            { q: "What do I need to start a trucking company?", a: "A business entity (often an LLC), an EIN, a USDOT number and MC authority, a BOC-3 process agent filing, insurance, UCR registration, IRP plates and IFTA for interstate travel, plus a drug and alcohol testing program." },
            { q: "Can you dispatch me once my authority is active?", a: "Yes. We dispatch new authorities and focus on brokers that accept them, so you can build a payment history in your first 90 days." },
        ],
        guides: ["how-to-start-trucking-company-llc-mc-authority", "how-to-survive-new-trucking-authority-mc-leasing", "what-is-inspection-in-trucking"],
        states: ["florida", "midwest", "east-coast"],
        tools: ["cost-per-mile-calculator", "ifta-calculator"],
    },
}
