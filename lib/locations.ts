export interface LocationFaq {
    q: string
    a: string
}

export interface Location {
    slug: string
    state: string
    abbr: string
    title: string
    description: string
    h1: string
    /** Answer-first summary: the two or three sentences an AI answer or snippet should quote */
    summary: string
    hubs: string[]
    corridors: string[]
    freight: string[]
    seasons: { name: string; detail: string }[]
    tips: { title: string; detail: string }[]
    equipment: string[]
    faqs: LocationFaq[]
    posts: string[]
}

export const locations: Location[] = [
    {
        slug: "florida",
        state: "Florida",
        abbr: "FL",
        title: "Truck Dispatcher in Florida | Priority Dispatch (Kissimmee)",
        description:
            "Florida truck dispatcher based in Kissimmee, near Orlando. We book Florida inbound and outbound loads for owner-operators from 4% of gross, with no contracts.",
        h1: "Truck Dispatcher in Florida",
        summary:
            "Priority Dispatch LLC is a truck dispatching company headquartered in Kissimmee, Florida, near Orlando. We dispatch owner-operators and small fleets running in and out of Florida, and across all 48 states, from 4% of the gross load with no contract and no setup fee.",
        hubs: ["Orlando / Kissimmee", "Jacksonville", "Tampa / Lakeland", "Miami / Port Everglades", "Ocala"],
        corridors: ["I-95 (Miami to Jacksonville and up the East Coast)", "I-75 (Tampa and Ocala to Atlanta)", "I-4 (Tampa to Orlando to Daytona)", "I-10 (Jacksonville to the Panhandle and Texas)"],
        freight: [
            "Consumer goods and groceries into Central Florida distribution centers",
            "Fresh produce, strawberries and citrus heading north (reefer)",
            "Building materials for Florida construction (flatbed and step deck)",
            "Container freight from JAXPORT, Port Everglades, PortMiami and Port Tampa Bay",
        ],
        seasons: [
            { name: "Winter to spring produce", detail: "Strawberries around Plant City and winter vegetables give reefers real outbound loads at the time of year when Florida freight is usually weakest." },
            { name: "Hurricane season (June to November)", detail: "Storm warnings bring surges of relief and building-material freight, and also closures. We plan around forecasts so you are not stuck in a closed lane." },
            { name: "Year-round imbalance", detail: "Far more freight comes into Florida than leaves it, so outbound rates are often low. Planning the reload before you deliver into Florida is what protects your weekly average." },
        ],
        tips: [
            { title: "Book the exit before you enter", detail: "We line up your outbound load while you are still heading south, often from Lakeland, Tampa or Jacksonville where outbound volume is better than Miami." },
            { title: "Use the Panhandle and Georgia", detail: "If Florida outbound is thin, a short repositioning run to Georgia or Alabama can put you on far better freight than a low-paying load out of South Florida." },
            { title: "Reefer pays more here", detail: "Florida is one of the better reefer states because of produce and food distribution. If you can run reefer, we target those loads first." },
        ],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "box-truck-dispatch", "hotshot-dispatch"],
        faqs: [
            { q: "Are you a local truck dispatcher in Florida?", a: "Yes. Priority Dispatch LLC is based at 804 Brack St, Kissimmee, FL 34744, near Orlando. We dispatch Florida carriers and drivers who run through Florida, and we cover all 48 states." },
            { q: "Why are outbound rates from Florida so low?", a: "Florida consumes far more freight than it produces, so many trucks compete for fewer outbound loads. The fix is planning: we book the outbound load before you deliver in Florida and target the better outbound markets like Lakeland, Tampa and Jacksonville." },
            { q: "How much does a truck dispatcher in Florida cost?", a: "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. There is no setup fee, no contract and no weekly minimum." },
            { q: "Do you dispatch box trucks and hotshots in Florida?", a: "Yes. We dispatch box trucks, hotshots, dry vans, reefers, flatbeds, step decks and power only units in Florida and nationwide." },
        ],
        posts: ["reefer-market-deep-dive", "how-to-use-load-boards", "what-is-freight-dispatching"],
    },
    {
        slug: "texas",
        state: "Texas",
        abbr: "TX",
        title: "Truck Dispatcher in Texas | Owner-Operator Dispatch",
        description:
            "Truck dispatching for Texas owner-operators: Dallas, Houston, Laredo, San Antonio and the Permian Basin. From 4% of gross, no contracts, 24/7 dispatch support.",
        h1: "Truck Dispatcher for Texas Owner-Operators",
        summary:
            "Priority Dispatch LLC dispatches owner-operators and small fleets in Texas, from Dallas-Fort Worth and Houston to Laredo and the Permian Basin. We find and negotiate loads, check brokers and handle paperwork from 4% of the gross load, with no contract.",
        hubs: ["Dallas-Fort Worth", "Houston", "San Antonio", "Laredo", "Midland / Odessa", "El Paso"],
        corridors: ["I-35 (Laredo to San Antonio to Dallas and north)", "I-10 (El Paso to San Antonio to Houston)", "I-45 (Houston to Dallas)", "I-20 (Dallas to West Texas and east to Louisiana)"],
        freight: [
            "Cross-border freight through Laredo, the busiest land port for US trade with Mexico",
            "Petrochemical, plastics and import container freight around Houston",
            "Retail and e-commerce distribution in Dallas-Fort Worth",
            "Oilfield equipment and pipe in the Permian Basin (hotshot and flatbed)",
        ],
        seasons: [
            { name: "Produce through South Texas", detail: "Mexican produce crossing at the border keeps reefer demand strong out of the Rio Grande Valley and Laredo much of the year." },
            { name: "Oilfield cycles", detail: "Permian Basin activity follows oil prices. When drilling is busy, hotshot and flatbed rates in West Texas climb fast." },
            { name: "Summer heat", detail: "Texas summers raise reefer demand and are hard on equipment. We plan routes and appointments to cut idle time in the heat." },
        ],
        tips: [
            { title: "Texas is a strong reload state", detail: "With freight both coming in and going out, Texas usually offers good reloads. We use that to keep your deadhead low." },
            { title: "Know the border freight rules", detail: "Laredo freight often involves cross-dock and transload work. We check the load details so you know what you are hauling before you commit." },
            { title: "Hotshot needs the right lanes", detail: "Hotshot rates are best on oilfield and construction freight. We focus hotshot carriers on West Texas and the Houston industrial belt." },
        ],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "hotshot-dispatch", "power-only-dispatch"],
        faqs: [
            { q: "Do you dispatch trucks based in Texas?", a: "Yes. We dispatch owner-operators and small fleets based anywhere in Texas and book loads in all 48 states. Our team works remotely with 24/7 dispatch support." },
            { q: "Which Texas lanes pay best?", a: "It changes week to week, but Laredo and the Rio Grande Valley reefer freight, Houston industrial freight and Permian Basin hotshot and flatbed work are often strong. We check current rates before booking every load." },
            { q: "How much does truck dispatching cost in Texas?", a: "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee, no contract and no minimum loads." },
            { q: "Can you dispatch hotshot trucks in the Permian Basin?", a: "Yes. We dispatch hotshot and flatbed carriers to oilfield and construction freight in West Texas and nationwide." },
        ],
        posts: ["navigating-freight-rate-rebound", "micro-niche-reefer-flatbed", "how-to-choose-dispatch-service"],
    },
    {
        slug: "georgia",
        state: "Georgia",
        abbr: "GA",
        title: "Truck Dispatcher in Georgia | Atlanta & Savannah Loads",
        description:
            "Georgia truck dispatching for owner-operators: Atlanta distribution freight, Port of Savannah containers and poultry reefer loads. From 4% of gross, no contracts.",
        h1: "Truck Dispatcher in Georgia",
        summary:
            "Priority Dispatch LLC dispatches owner-operators running in Georgia, including Atlanta distribution freight, Port of Savannah containers and North Georgia poultry and carpet freight. We charge from 4% of the gross load with no contract and no setup fee.",
        hubs: ["Atlanta", "Savannah", "Macon", "Gainesville", "Dalton"],
        corridors: ["I-75 (Florida to Atlanta to Tennessee)", "I-85 (Atlanta to the Carolinas and Alabama)", "I-20 (Atlanta to Birmingham and South Carolina)", "I-16 (Macon to Savannah)"],
        freight: [
            "Import containers and transload freight from the Port of Savannah",
            "Retail and e-commerce distribution around Atlanta",
            "Poultry and food products from North Georgia (reefer)",
            "Carpet and flooring from the Dalton area",
        ],
        seasons: [
            { name: "Peak import season", detail: "Late summer and fall bring heavy import volume through Savannah as retailers stock up for the holidays." },
            { name: "Spring produce", detail: "Vidalia onions and South Georgia vegetables create reefer demand in spring and early summer." },
            { name: "Holiday retail", detail: "Atlanta distribution centers run hot from October through December, which lifts dry van rates out of the metro." },
        ],
        tips: [
            { title: "Atlanta is a great reload market", detail: "Atlanta is one of the strongest freight markets in the Southeast, which makes it a reliable place to reload after a Florida delivery." },
            { title: "Savannah transload freight", detail: "Much Savannah freight is transloaded into 53-foot dry vans nearby. We look for these loads to keep dry van carriers busy." },
            { title: "Reefer for poultry", detail: "North Georgia is one of the biggest poultry regions in the country, so reefer carriers can find steady food-grade freight here." },
        ],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "box-truck-dispatch", "power-only-dispatch"],
        faqs: [
            { q: "Do you dispatch owner-operators in Georgia?", a: "Yes. We dispatch Georgia-based carriers and drivers who run through Georgia, with loads in all 48 states and 24/7 dispatch support." },
            { q: "Can you find loads out of the Port of Savannah?", a: "Yes. We book container, transload and dry van freight tied to the Port of Savannah and the surrounding warehouses." },
            { q: "How much does a truck dispatcher in Georgia charge?", a: "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. There is no contract and no setup fee." },
        ],
        posts: ["2026-freight-market-outlook", "owner-operator-guide", "combatting-freight-fraud-2026"],
    },
    {
        slug: "california",
        state: "California",
        abbr: "CA",
        title: "Truck Dispatcher in California | Owner-Operator Dispatch",
        description:
            "California truck dispatching for owner-operators: LA and Long Beach port freight, Inland Empire warehouses and Central Valley produce. From 4%, no contracts.",
        h1: "Truck Dispatcher for California Owner-Operators",
        summary:
            "Priority Dispatch LLC dispatches owner-operators who run in California, from the Ports of Los Angeles and Long Beach and Inland Empire warehouses to Central Valley produce. We check CARB-sensitive loads, negotiate rates and handle paperwork from 4% of the gross load.",
        hubs: ["Los Angeles / Long Beach", "Inland Empire (Ontario, Riverside, San Bernardino)", "Fresno and the Central Valley", "Salinas", "Stockton / Sacramento"],
        corridors: ["I-5 (Mexico border to Oregon through the Central Valley)", "I-10 (Los Angeles to Phoenix and Texas)", "I-15 (Inland Empire to Las Vegas and Salt Lake City)", "CA-99 (Central Valley produce route)"],
        freight: [
            "Import containers from the Ports of Los Angeles and Long Beach",
            "E-commerce and retail freight from Inland Empire warehouses",
            "Fresh produce from the Central Valley and Salinas Valley (reefer)",
            "Outbound freight east on I-10 and I-15 to Arizona, Nevada and Texas",
        ],
        seasons: [
            { name: "Produce season", detail: "Central Valley and Salinas produce runs from spring through fall, with strong reefer demand heading east." },
            { name: "Import peak", detail: "Late summer and fall are the busiest months at the Southern California ports." },
            { name: "Wildfire season", detail: "Summer and fall wildfires can close highways. We watch closures and reroute before you are stuck." },
        ],
        tips: [
            { title: "Check CARB compliance first", detail: "California's Clean Truck Check and engine rules affect which trucks can run in the state. Confirm your truck's compliance before taking California freight; we will ask before booking." },
            { title: "Plan the way back", detail: "California outbound reefer can pay well, but inbound rates vary. We pair your inbound and outbound loads so the round trip makes money." },
            { title: "Avoid port delays", detail: "Port and warehouse appointments in Southern California can mean long waits. We negotiate detention up front and push appointment times that keep you moving." },
        ],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "power-only-dispatch", "step-deck-dispatch"],
        faqs: [
            { q: "Do you dispatch trucks in California?", a: "Yes. We dispatch owner-operators running in and out of California, as long as the truck meets California's CARB requirements, and we book loads in all 48 states." },
            { q: "What do I need to run freight in California?", a: "Beyond your normal authority and insurance, your truck must meet California Air Resources Board (CARB) rules, including the Clean Truck Check program. We ask about compliance before booking California loads." },
            { q: "How much does a California truck dispatcher cost?", a: "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No contract, no setup fee." },
        ],
        posts: ["reefer-market-deep-dive", "sustainability-ev-trucks-future", "intermodal-vs-over-the-road"],
    },
]

export function locationBySlug(slug: string): Location | undefined {
    return locations.find((l) => l.slug === slug)
}
