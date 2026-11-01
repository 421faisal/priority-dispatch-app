export interface LocationFaq {
    q: string
    a: string
}

export interface Location {
    slug: string
    /** Name used in headings, e.g. "Texas" or "the Midwest" */
    state: string
    abbr: string
    /** Set for a multi-state region page; areaServed then lists these states */
    regionStates?: string[]
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
    /** Region pages: slugs of the state pages in this region */
    members?: string[]
}

export const locations: Location[] = [
    {
        slug: "midwest",
        members: ["illinois", "ohio", "indiana", "michigan", "missouri"],
        state: "the Midwest",
        abbr: "Midwest",
        regionStates: ["Illinois", "Ohio", "Indiana", "Michigan", "Missouri", "Wisconsin", "Minnesota", "Iowa", "Kansas", "Nebraska"],
        title: "Midwest Truck Dispatcher | Owner-Operator Dispatch Service",
        description: "Midwest truck dispatching for owner-operators: Chicago, Columbus, Indianapolis, Detroit, Kansas City and St. Louis freight. From 4% of gross, no contracts.",
        h1: "Midwest Truck Dispatcher for Owner-Operators",
        summary: "Priority Dispatch LLC dispatches owner-operators and small fleets across the Midwest, from Chicago, Indianapolis and Columbus to Detroit, Kansas City and St. Louis. The Midwest is one of the best regions to run because freight flows both in and out, so reloads are easier and deadhead stays low. Fees run from 4% of the gross load, with no contract.",
        hubs: ["Chicago / Joliet, IL", "Indianapolis, IN", "Columbus, OH", "Detroit, MI", "Kansas City, MO", "St. Louis, MO", "Minneapolis, MN", "Milwaukee, WI"],
        corridors: ["I-80 and I-90 (Chicago east to Ohio and the Northeast, west to Iowa and Nebraska)", "I-70 (Kansas City to St. Louis, Indianapolis and Columbus)", "I-94 (Minneapolis to Milwaukee, Chicago and Detroit)", "I-65 and I-75 (north-south links to the Southeast)"],
        freight: ["Manufacturing and auto parts from Michigan, Ohio and Indiana", "Intermodal containers from the Chicago rail hubs (power only and dry van)", "Food, beverage and packaged goods from Midwest processing plants (reefer and dry van)", "Steel, machinery and building materials (flatbed and step deck)", "E-commerce and retail distribution around Columbus, Indianapolis and Chicago"],
        seasons: [{"name": "Fall harvest", "detail": "September to November brings grain, food and farm equipment freight, and tightens capacity across the rural Midwest."}, {"name": "Winter weather", "detail": "Snow, ice and lake-effect storms slow trucks from December to March. We plan buffer time and watch road closures, and winter often lifts rates."}, {"name": "Spring and summer build", "detail": "Construction materials, Michigan produce and retail restocking keep flatbed, reefer and dry van busy from April onward."}],
        tips: [{"title": "Balanced freight means easy reloads", "detail": "Unlike Florida or the Northeast, Midwest markets ship about as much as they receive. We plan reload to reload so your truck rarely runs empty."}, {"title": "Short and medium hauls add up", "detail": "Many Midwest lanes are 300 to 700 miles, so drivers can run more loads per week and get home more often."}, {"title": "Winter-ready trucks earn more", "detail": "Carriers who keep running through Midwest winters, with anti-gel fuel treatment and chains where needed, often see the best rates of the year."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "step-deck-dispatch", "power-only-dispatch", "box-truck-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in the Midwest?", "a": "Yes. The Midwest is one of our main regions. We dispatch owner-operators and small fleets based in Illinois, Ohio, Indiana, Michigan, Missouri, Wisconsin, Minnesota, Iowa, Kansas and Nebraska, and book loads in all 48 states."}, {"q": "Why is the Midwest a good region for owner-operators?", "a": "Freight flows in and out of the Midwest in similar volumes, so reloads are easier and empty miles are lower than in one-way markets. Many lanes are short to medium length, which means more loads per week and more home time."}, {"q": "How much does a Midwest truck dispatcher cost?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract. Fleets of 2 or more trucks get negotiable rates."}, {"q": "Which Midwest cities do you book loads from?", "a": "Chicago and Joliet, Indianapolis, Columbus, Cincinnati, Cleveland, Detroit, Grand Rapids, Kansas City, St. Louis, Milwaukee and Minneapolis, plus the rural markets in between."}],
        posts: ["owner-operator-guide", "how-to-use-load-boards", "truck-dispatcher-cost"],
    },
    {
        slug: "east-coast",
        members: ["pennsylvania", "new-jersey", "north-carolina", "georgia", "florida"],
        state: "the East Coast",
        abbr: "East Coast",
        regionStates: ["New York", "New Jersey", "Pennsylvania", "Maryland", "Virginia", "North Carolina", "South Carolina", "Massachusetts", "Connecticut", "Delaware"],
        title: "East Coast Truck Dispatcher | Owner-Operator Dispatch Service",
        description: "East Coast truck dispatching for owner-operators: NY/NJ ports, Pennsylvania warehouses, I-95 and I-81 lanes, the Carolinas. From 4% of gross, no contracts.",
        h1: "East Coast Truck Dispatcher for Owner-Operators",
        summary: "Priority Dispatch LLC dispatches owner-operators up and down the East Coast, from the Port of New York and New Jersey and the Pennsylvania warehouse corridors to Baltimore, Virginia and the Carolinas. The East Coast has the densest population in the country, so freight demand is constant and short lanes often pay well per mile. Fees run from 4% of the gross load, with no contract.",
        hubs: ["New York / New Jersey ports", "Lehigh Valley (Allentown), PA", "Harrisburg / Carlisle, PA", "Philadelphia, PA", "Baltimore, MD", "Norfolk / Richmond, VA", "Charlotte, NC", "Boston, MA"],
        corridors: ["I-95 (Maine to Florida through every major East Coast city)", "I-81 (Pennsylvania to Virginia and Tennessee, a major warehouse corridor)", "I-78 and I-80 (New Jersey ports to Pennsylvania)", "I-85 and I-40 (Virginia through the Carolinas)"],
        freight: ["Import containers from the Port of New York and New Jersey, Baltimore and the Port of Virginia", "Retail and e-commerce distribution in the Lehigh Valley, Harrisburg and central New Jersey", "Food and grocery freight for the dense Northeast population (reefer)", "Building materials and steel (flatbed and step deck)", "Furniture, poultry and pork freight from the Carolinas"],
        seasons: [{"name": "Import peak", "detail": "Late summer through the holidays brings the heaviest container volume through East Coast ports and the warehouses behind them."}, {"name": "Nor'easters and winter", "detail": "Winter storms can shut down I-95 and I-81 for a day or more. We plan around forecasts and reschedule early."}, {"name": "Summer produce", "detail": "New Jersey and Carolina produce and summer beverage demand lift reefer volume from June to September."}],
        tips: [{"title": "Plan the exit from the Northeast", "detail": "Big cities in the Northeast take in far more freight than they ship. We book your reload from the Lehigh Valley, Harrisburg or the Carolinas so you do not leave New England or New York City empty."}, {"title": "Short hauls that pay per mile", "detail": "Traffic and tight appointments mean East Coast short hauls often pay more per mile. We find lanes that make your daily revenue add up."}, {"title": "Know the city rules", "detail": "New York City has truck routes, parkways where trucks are banned and tolls on most crossings. We check the route and toll cost before you accept."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "power-only-dispatch", "box-truck-dispatch", "step-deck-dispatch"],
        faqs: [{"q": "Do you dispatch trucks on the East Coast?", "a": "Yes. We dispatch owner-operators and small fleets running in New York, New Jersey, Pennsylvania, Maryland, Virginia, the Carolinas and New England, and book loads in all 48 states."}, {"q": "Is the East Coast good for owner-operators?", "a": "It can be very good. Freight demand is constant and short lanes often pay well per mile. The key is planning outbound loads, because big Northeast cities receive more freight than they ship."}, {"q": "How much does an East Coast truck dispatcher cost?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract. Fleets of 2 or more trucks get negotiable rates."}, {"q": "Can you book port loads out of New York and New Jersey?", "a": "Yes. We book container and transload freight tied to the Port of New York and New Jersey. Port terminals require a TWIC card for the driver."}],
        posts: ["what-is-twic-card-trucking", "how-to-use-load-boards", "truck-dispatcher-cost"],
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
        slug: "illinois",
        state: "Illinois",
        abbr: "IL",
        title: "Truck Dispatcher in Illinois | Chicago Owner-Operator Dispatch",
        description: "Illinois truck dispatching for owner-operators: Chicago and Joliet intermodal, food and consumer goods freight. From 4% of gross, paid after you get paid.",
        h1: "Truck Dispatcher in Illinois and Chicago",
        summary: "Priority Dispatch LLC dispatches owner-operators running in Illinois, centered on Chicago, the busiest rail and freight hub in the United States. We book intermodal, dry van, reefer and flatbed loads in and out of Chicagoland and central Illinois, from 4% of the gross load with no contract.",
        hubs: ["Chicago", "Joliet / Elwood", "Rockford", "Peoria", "Springfield", "Champaign"],
        corridors: ["I-80 (Iowa to Joliet to Indiana)", "I-55 (Chicago to St. Louis)", "I-90 and I-94 (Chicago to Wisconsin, Indiana and Michigan)", "I-57 (Chicago south to Memphis)"],
        freight: ["Intermodal containers from Chicago and Joliet rail ramps (power only and dry van)", "Food and beverage from Chicagoland processing plants (reefer)", "Consumer goods from the large warehouse clusters along I-55 and I-80", "Corn, soybeans and farm equipment from central Illinois"],
        seasons: [{"name": "Fall harvest", "detail": "Central Illinois grain and farm freight peaks from September to November."}, {"name": "Chicago winter", "detail": "Snow and cold slow pickups and deliveries. We build buffer time into appointments so you avoid late fees."}, {"name": "Peak retail", "detail": "Import containers moving inland by rail keep Chicago intermodal and dry van busy from late summer through the holidays."}],
        tips: [{"title": "Chicago is a top reload market", "detail": "Few cities have as much outbound freight as Chicago, which makes it a reliable place to reload after any delivery."}, {"title": "Power only around the rail ramps", "detail": "Joliet and the Chicago intermodal ramps create steady power only and drop-trailer work for carriers without their own trailer."}, {"title": "Plan around Chicago traffic", "detail": "We schedule city pickups outside rush hour and route around the worst congestion to protect your hours of service."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "power-only-dispatch", "flatbed-dispatch", "box-truck-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in Chicago?", "a": "Yes. We dispatch owner-operators running in and out of Chicago, Joliet and the rest of Illinois, and book loads in all 48 states."}, {"q": "Can you find intermodal and power only loads in Chicago?", "a": "Yes. The Chicago and Joliet rail ramps generate container and drop-trailer freight, which suits power only carriers and dry vans."}, {"q": "How much does a truck dispatcher in Illinois charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["intermodal-vs-over-the-road", "how-to-use-load-boards", "truck-dispatcher-cost"],
    },
    {
        slug: "ohio",
        state: "Ohio",
        abbr: "OH",
        title: "Truck Dispatcher in Ohio | Columbus, Cincinnati & Cleveland",
        description: "Ohio truck dispatching for owner-operators: Columbus e-commerce, Cincinnati, Cleveland steel and Toledo freight. From 4% of gross, no contracts, 24/7 support.",
        h1: "Truck Dispatcher in Ohio",
        summary: "Priority Dispatch LLC dispatches owner-operators in Ohio, a state within a day's drive of a large share of the US and Canadian population. We book e-commerce freight around Columbus, manufacturing loads from Cincinnati, Cleveland and Toledo, and long-haul lanes out of Ohio, from 4% of the gross load.",
        hubs: ["Columbus", "Cincinnati", "Cleveland", "Toledo", "Dayton", "Akron"],
        corridors: ["I-70 (Indianapolis to Columbus to Pennsylvania)", "I-71 (Cincinnati to Columbus to Cleveland)", "I-75 (Michigan to Toledo, Dayton and Cincinnati)", "I-80 and I-90 Ohio Turnpike (Chicago to the Northeast)"],
        freight: ["E-commerce and retail distribution centers around Columbus", "Auto parts and assembly freight across western and northern Ohio", "Steel, metal and machinery from Cleveland and northeast Ohio (flatbed)", "Consumer goods and food from Cincinnati"],
        seasons: [{"name": "Holiday e-commerce peak", "detail": "Columbus distribution centers run hardest from October through December, lifting dry van and box truck demand."}, {"name": "Lake-effect winter", "detail": "Northeast Ohio gets heavy lake-effect snow. We watch the forecast and adjust appointments around storms."}, {"name": "Construction season", "detail": "Spring through fall brings steel and building material loads for flatbed and step deck."}],
        tips: [{"title": "Short runs to big markets", "detail": "From Ohio you can reach Chicago, Detroit, Pittsburgh and many East Coast cities in a day, so we can stack several loads a week."}, {"title": "Box trucks do well here", "detail": "Columbus and Cincinnati have dense regional distribution, which suits box trucks running local and regional freight."}, {"title": "Use the Turnpike wisely", "detail": "The Ohio Turnpike saves time but costs tolls. We factor tolls into the rate before you accept a load."}],
        equipment: ["dry-van-dispatch", "box-truck-dispatch", "flatbed-dispatch", "step-deck-dispatch", "reefer-dispatch"],
        faqs: [{"q": "Do you dispatch owner-operators in Ohio?", "a": "Yes. We dispatch Ohio carriers and drivers running through Ohio, with loads in all 48 states and 24/7 support."}, {"q": "Do you dispatch box trucks in Columbus and Cincinnati?", "a": "Yes. Ohio's distribution centers create steady box truck freight, and our box truck fee is 6% of the gross load."}, {"q": "How much does an Ohio truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["last-mile-logistics-box-trucks", "owner-operator-guide", "truck-dispatcher-cost"],
    },
    {
        slug: "indiana",
        state: "Indiana",
        abbr: "IN",
        title: "Truck Dispatcher in Indiana | Indianapolis Dispatch Service",
        description: "Indiana truck dispatching for owner-operators: Indianapolis distribution, Elkhart RV freight and northwest Indiana steel. From 4% of gross, no contracts.",
        h1: "Truck Dispatcher in Indiana",
        summary: "Priority Dispatch LLC dispatches owner-operators in Indiana, the Crossroads of America, where more major interstates meet than almost anywhere in the country. We book Indianapolis distribution freight, Elkhart RV and trailer loads and northwest Indiana steel, from 4% of the gross load with no contract.",
        hubs: ["Indianapolis", "Elkhart", "Fort Wayne", "Gary / Northwest Indiana", "Evansville", "Lafayette"],
        corridors: ["I-65 (Chicago to Indianapolis to Louisville)", "I-70 (St. Louis to Indianapolis to Columbus)", "I-69 (Michigan to Indianapolis to Evansville)", "I-80/90 Indiana Toll Road (Chicago to Ohio)"],
        freight: ["Distribution and e-commerce freight around Indianapolis", "RVs, trailers and parts from the Elkhart area (power only and hotshot)", "Steel and metal from Gary and northwest Indiana (flatbed)", "Pharmaceutical and food freight from central Indiana (reefer)"],
        seasons: [{"name": "RV production cycles", "detail": "Elkhart RV output follows dealer demand, with busy stretches that push up hotshot and power only rates."}, {"name": "Harvest", "detail": "Corn and soybean harvest in the fall pulls trucks to farm freight and tightens capacity."}, {"name": "Winter", "detail": "Northern Indiana gets lake-effect snow along I-80 and I-90. We plan routes and buffer time."}],
        tips: [{"title": "Central location, easy reloads", "detail": "From Indianapolis, Chicago, Louisville, Columbus and St. Louis are all a short run away, which keeps your truck loaded."}, {"title": "Hotshot and power only around Elkhart", "detail": "RV and trailer delivery work out of Elkhart suits hotshot and power only carriers."}, {"title": "Steel needs the right setup", "detail": "Northwest Indiana steel pays well on flatbed and step deck if you have tarps and securement ready."}],
        equipment: ["dry-van-dispatch", "flatbed-dispatch", "hotshot-dispatch", "power-only-dispatch", "reefer-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in Indiana?", "a": "Yes. We dispatch Indiana owner-operators and small fleets, and book loads in all 48 states with 24/7 support."}, {"q": "Can you find RV and trailer loads out of Elkhart?", "a": "Yes. We book RV, trailer and parts freight from the Elkhart area for hotshot and power only carriers."}, {"q": "How much does an Indiana truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["micro-niche-reefer-flatbed", "how-to-choose-dispatch-service", "truck-dispatcher-cost"],
    },
    {
        slug: "michigan",
        state: "Michigan",
        abbr: "MI",
        title: "Truck Dispatcher in Michigan | Detroit & Grand Rapids Loads",
        description: "Michigan truck dispatching for owner-operators: Detroit auto parts, Canada border freight, Grand Rapids and Michigan produce. From 4% of gross, no contracts.",
        h1: "Truck Dispatcher in Michigan",
        summary: "Priority Dispatch LLC dispatches owner-operators in Michigan, home of the US auto industry and the busiest US-Canada truck crossings. We book auto parts, expedited, manufacturing and produce freight around Detroit, Grand Rapids and the rest of the state, from 4% of the gross load with no contract.",
        hubs: ["Detroit", "Grand Rapids", "Lansing", "Flint", "Kalamazoo", "Saginaw"],
        corridors: ["I-75 (Detroit to Ohio and the South)", "I-94 (Detroit to Chicago)", "I-96 (Detroit to Grand Rapids)", "I-69 (Port Huron to Lansing to Indiana)"],
        freight: ["Auto parts and assembly freight for Detroit-area plants, often time-critical", "Cross-border freight to and from Canada through Detroit and Port Huron", "Furniture and manufacturing freight from Grand Rapids", "Cherries, apples and other Michigan produce in summer and fall (reefer)"],
        seasons: [{"name": "Produce season", "detail": "Michigan cherries in summer and apples in fall give reefers strong outbound loads."}, {"name": "Plant shutdowns", "detail": "Auto plants often pause for model-year changeovers in summer, which can soften auto freight for a few weeks."}, {"name": "Winter", "detail": "Heavy snow, especially in west Michigan, slows trucks from December to March."}],
        tips: [{"title": "Expedited auto parts", "detail": "When an assembly line needs parts fast, sprinter vans and box trucks get premium expedited loads. We target these for smaller equipment."}, {"title": "Plan the way out", "detail": "Michigan sits at the end of many lanes, so we book your outbound load before you deliver into the state."}, {"title": "Canada freight needs paperwork", "detail": "Cross-border loads need the right customs documents, and drivers need a valid passport or FAST card. We check before booking."}],
        equipment: ["dry-van-dispatch", "box-truck-dispatch", "reefer-dispatch", "flatbed-dispatch", "power-only-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in Michigan?", "a": "Yes. We dispatch Michigan owner-operators and small fleets, and book loads in all 48 states with 24/7 support."}, {"q": "Do you dispatch sprinter vans and box trucks for expedited auto parts?", "a": "Yes. We book expedited automotive freight for sprinter vans (10% fee) and box trucks (6% fee)."}, {"q": "How much does a Michigan truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["last-mile-logistics-box-trucks", "reefer-market-deep-dive", "truck-dispatcher-cost"],
    },
    {
        slug: "missouri",
        state: "Missouri",
        abbr: "MO",
        title: "Truck Dispatcher in Missouri | Kansas City & St. Louis Loads",
        description: "Missouri truck dispatching for owner-operators: Kansas City and St. Louis hubs, food, auto and farm freight. From 4% of gross, paid after you get paid.",
        h1: "Truck Dispatcher in Missouri",
        summary: "Priority Dispatch LLC dispatches owner-operators in Missouri, where Kansas City and St. Louis sit near the center of the country's freight network. We book food, auto, farm and distribution freight in and out of both cities, from 4% of the gross load with no contract.",
        hubs: ["Kansas City", "St. Louis", "Springfield", "Joplin", "Columbia"],
        corridors: ["I-70 (Kansas City to St. Louis and east)", "I-35 (Kansas City to Iowa and Texas)", "I-44 (St. Louis to Springfield and Oklahoma)", "I-55 (St. Louis to Chicago and Memphis)"],
        freight: ["Distribution and rail-served freight around Kansas City", "Auto assembly and parts freight near Kansas City and St. Louis", "Meat, food and beverage processing (reefer)", "Grain, feed and farm equipment from rural Missouri"],
        seasons: [{"name": "Harvest", "detail": "Fall harvest pulls trucks into farm freight and tightens capacity across the state."}, {"name": "River flooding", "detail": "Spring flooding on the Missouri and Mississippi rivers can close roads. We reroute ahead of closures."}, {"name": "Summer reefer", "detail": "Heat raises demand for temperature-controlled food freight from processing plants."}],
        tips: [{"title": "Central hubs, many directions", "detail": "From Kansas City or St. Louis you can head to Texas, Chicago, the Southeast or the West, which makes reloading easy."}, {"title": "Reefer for food freight", "detail": "Missouri's food processing plants give reefer carriers steady loads year-round."}, {"title": "Use I-44 for Texas runs", "detail": "I-44 to Oklahoma connects you to Texas freight, a strong lane pairing with Missouri."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "hotshot-dispatch", "power-only-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in Kansas City and St. Louis?", "a": "Yes. We dispatch owner-operators running in and out of Kansas City, St. Louis and the rest of Missouri, and book loads in all 48 states."}, {"q": "Which equipment does best in Missouri?", "a": "Dry van and reefer have the most steady freight, with flatbed and hotshot work tied to construction and farm equipment."}, {"q": "How much does a Missouri truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["navigating-freight-rate-rebound", "owner-operator-guide", "truck-dispatcher-cost"],
    },
    {
        slug: "pennsylvania",
        state: "Pennsylvania",
        abbr: "PA",
        title: "Truck Dispatcher in Pennsylvania | Lehigh Valley & Harrisburg",
        description: "Pennsylvania truck dispatching for owner-operators: Lehigh Valley and Harrisburg warehouses, Philadelphia and Pittsburgh. From 4% of gross, no contracts.",
        h1: "Truck Dispatcher in Pennsylvania",
        summary: "Priority Dispatch LLC dispatches owner-operators in Pennsylvania, home to some of the largest warehouse corridors on the East Coast in the Lehigh Valley and around Harrisburg and Carlisle. We book distribution, food, steel and energy freight across the state, from 4% of the gross load with no contract.",
        hubs: ["Lehigh Valley (Allentown / Bethlehem)", "Harrisburg / Carlisle", "Philadelphia", "Pittsburgh", "Scranton / Wilkes-Barre", "York / Lancaster"],
        corridors: ["I-81 (New York to Harrisburg to Virginia)", "I-76 Pennsylvania Turnpike (Philadelphia to Pittsburgh)", "I-78 (New Jersey ports to the Lehigh Valley and Harrisburg)", "I-80 (New Jersey to Ohio across northern Pennsylvania)"],
        freight: ["Retail and e-commerce distribution in the Lehigh Valley and around Harrisburg and Carlisle", "Food and snack manufacturing in central and southern Pennsylvania (reefer and dry van)", "Steel and industrial freight around Pittsburgh (flatbed)", "Natural gas and energy equipment in western and northern Pennsylvania (flatbed and hotshot)"],
        seasons: [{"name": "Peak retail", "detail": "Warehouses along I-78 and I-81 run hardest from late summer through the holidays."}, {"name": "Mountain winter", "detail": "Snow on the Turnpike and I-80 mountain stretches can close roads. We plan around storms and chain laws."}, {"name": "Construction season", "detail": "Spring to fall brings steel and building material loads for flatbed and step deck."}],
        tips: [{"title": "Reload in Harrisburg and the Lehigh Valley", "detail": "These warehouse clusters ship huge volumes, which makes them the best place to reload after a Northeast delivery."}, {"title": "Count the Turnpike tolls", "detail": "Pennsylvania Turnpike tolls for trucks are high. We include tolls when we compare loads so you keep more of the rate."}, {"title": "Hotshot for energy work", "detail": "Western Pennsylvania energy projects create hotshot and flatbed freight for carriers set up for it."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "hotshot-dispatch", "power-only-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in Pennsylvania?", "a": "Yes. We dispatch Pennsylvania owner-operators and small fleets, and book loads in all 48 states with 24/7 support."}, {"q": "Can you find loads out of the Lehigh Valley and Harrisburg?", "a": "Yes. These warehouse corridors are some of the strongest outbound markets on the East Coast, and we use them to keep your truck loaded."}, {"q": "How much does a Pennsylvania truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["how-to-use-load-boards", "owner-operator-guide", "truck-dispatcher-cost"],
    },
    {
        slug: "new-jersey",
        state: "New Jersey",
        abbr: "NJ",
        title: "Truck Dispatcher in New Jersey | NY/NJ Port & Warehouse Loads",
        description: "New Jersey truck dispatching for owner-operators: Port Newark and Elizabeth containers, Exit 8A warehouses and NYC freight. From 4% of gross, no contracts.",
        h1: "Truck Dispatcher in New Jersey",
        summary: "Priority Dispatch LLC dispatches owner-operators in New Jersey, home to Port Newark and Elizabeth, the busiest container terminals on the East Coast, and the warehouse clusters that feed New York City. We book port, distribution and regional freight, from 4% of the gross load with no contract.",
        hubs: ["Newark / Elizabeth port area", "Exit 8A (Cranbury / Monroe)", "Edison / Central Jersey", "Secaucus / Meadowlands", "South Jersey (Swedesboro)"],
        corridors: ["I-95 New Jersey Turnpike (Delaware to New York City)", "I-78 (Newark to Pennsylvania)", "I-287 (northern New Jersey ring)", "I-80 (New York City to Pennsylvania)"],
        freight: ["Import containers and transload freight from Port Newark and Elizabeth", "Retail, grocery and e-commerce distribution around Exit 8A and Central Jersey", "Pharmaceutical and chemical freight from Central Jersey", "Food distribution for the New York City market (reefer)"],
        seasons: [{"name": "Import peak", "detail": "Late summer to the holidays brings the heaviest container volume through the New Jersey terminals."}, {"name": "Summer produce", "detail": "South Jersey blueberries and vegetables add reefer loads in summer."}, {"name": "Winter storms", "detail": "Nor'easters can stop traffic on the Turnpike and into New York City. We reschedule early."}],
        tips: [{"title": "TWIC for port terminals", "detail": "Drivers need a TWIC card to enter the port terminals. If you have one, we can target port and transload freight."}, {"title": "Head west to reload", "detail": "New Jersey ships less than it receives, so we often reload you in the Lehigh Valley or Harrisburg, an easy run west on I-78."}, {"title": "Watch tolls and NYC rules", "detail": "Bridges, tunnels and the Turnpike add up fast. We include tolls and New York City truck-route rules when we pick loads."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "power-only-dispatch", "box-truck-dispatch", "flatbed-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in New Jersey?", "a": "Yes. We dispatch New Jersey owner-operators and drivers running through the state, and book loads in all 48 states with 24/7 support."}, {"q": "Do I need a TWIC card for New Jersey port loads?", "a": "Yes. Drivers need a TWIC card to enter the port terminals at Newark and Elizabeth. Warehouse and transload freight nearby does not always require one."}, {"q": "How much does a New Jersey truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["what-is-twic-card-trucking", "intermodal-vs-over-the-road", "truck-dispatcher-cost"],
    },
    {
        slug: "north-carolina",
        state: "North Carolina",
        abbr: "NC",
        title: "Truck Dispatcher in North Carolina | Charlotte & Triad Loads",
        description: "North Carolina truck dispatching for owner-operators: Charlotte, the Triad furniture market, Raleigh and eastern NC poultry and pork. From 4% of gross.",
        h1: "Truck Dispatcher in North Carolina",
        summary: "Priority Dispatch LLC dispatches owner-operators in North Carolina, from the Charlotte distribution market and the Triad furniture industry to Raleigh and the poultry and pork producers of eastern North Carolina. We book dry van, reefer and flatbed loads across the state, from 4% of the gross load with no contract.",
        hubs: ["Charlotte", "Greensboro / Winston-Salem / High Point (the Triad)", "Raleigh / Durham", "Wilmington", "Fayetteville"],
        corridors: ["I-85 (Atlanta to Charlotte to Virginia)", "I-40 (Tennessee to the Triad to Raleigh and Wilmington)", "I-77 (Charlotte to Ohio)", "I-95 (eastern North Carolina, Virginia to South Carolina)"],
        freight: ["Retail and grocery distribution around Charlotte", "Furniture from the Triad and western North Carolina", "Poultry and pork from eastern North Carolina (reefer)", "Building materials for fast-growing metro areas (flatbed)", "Container freight from the Port of Wilmington"],
        seasons: [{"name": "Sweet potato and produce season", "detail": "North Carolina is a leading sweet potato state, and fall and winter shipments add reefer and dry van loads."}, {"name": "Hurricane season", "detail": "Coastal storms from June to November can close I-40 and I-95 near the coast. We plan around forecasts."}, {"name": "Furniture market cycles", "detail": "Furniture shipping out of the Triad picks up around the High Point Market seasons."}],
        tips: [{"title": "Balanced Southeast hub", "detail": "Charlotte and the Triad both ship and receive steadily, so reloads are usually close by."}, {"title": "Reefer for food freight", "detail": "Eastern North Carolina poultry and pork give reefer carriers steady, food-grade loads."}, {"title": "Connect to the Midwest", "detail": "I-77 and I-40 link North Carolina to Ohio and Tennessee, a good way to move between the East Coast and the Midwest loaded."}],
        equipment: ["dry-van-dispatch", "reefer-dispatch", "flatbed-dispatch", "box-truck-dispatch", "step-deck-dispatch"],
        faqs: [{"q": "Do you dispatch trucks in North Carolina?", "a": "Yes. We dispatch North Carolina owner-operators and small fleets, and book loads in all 48 states with 24/7 support."}, {"q": "Can you find reefer loads in North Carolina?", "a": "Yes. Poultry, pork and produce from eastern North Carolina create steady reefer freight."}, {"q": "How much does a North Carolina truck dispatcher charge?", "a": "Our fee is 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays you. No setup fee and no contract."}],
        posts: ["reefer-market-deep-dive", "how-to-use-load-boards", "truck-dispatcher-cost"],
    },
]

export function locationBySlug(slug: string): Location | undefined {
    return locations.find((l) => l.slug === slug)
}
