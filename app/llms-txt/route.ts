export const dynamic = "force-static"

export async function GET() {
    const content = `# Priority Dispatch LLC
Expert freight dispatching services for owner-operators and carrier fleets specializing in Reefers, Dry Vans, Box Trucks, Flatbeds, and Step Decks.

## Core Services Helpful
- Freight Dispatching: Load searching and aggressive rate negotiation.
- 24/7 Carrier Support: Night and weekend tracking and emergency assistance.
- Back-Office Management: Invoicing, broker vetting, and paperwork.
- Lane Optimization: Route planning to minimize deadhead miles.

## Contact Information
- Website: https://prioritydispatchllc.com
- Phone: +1 689-314-8347
- Email: prioritydispatch4u@gmail.com
- Location: 804 brack st, Kissimmee, FL 34744

## Navigation Links
- Carrier Setup: /carrier-setup
- Our Services: /services
- About the Founder: /about-owner
- Areas We Serve: /areas-we-serve
- Industry Blog: /blog
- FAQ: /faq

## Recent Blog Posts
- What Is Inspection in Trucking? DOT Inspections Explained: /blog/what-is-inspection-in-trucking
- How to Survive the First 90 Days as a New Trucking Company: /blog/how-to-survive-new-trucking-authority-mc-leasing
- What Is a TWIC Card in Trucking?: /blog/what-is-twic-card-trucking
- What Is a Bonded Carrier?: /blog/what-is-bonded-carrier-trucking
- How to Start a Trucking Company: /blog/how-to-start-trucking-company-llc-mc-authority
- Insider Trucking Dispatch Tips: /blog/insider-trucking-dispatch-tips-faisal
- How to Choose the Best Dispatch Service: /blog/how-to-choose-dispatch-service

## Mission
To become the most trusted dispatch partner in the U.S. freight industry by blending cutting-edge technology with personalized, 24/7 carrier support.`

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    })
}
