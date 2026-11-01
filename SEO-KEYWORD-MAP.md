# Keyword map: Priority Dispatch LLC

Which search terms each page targets, so two pages never compete for the same term.
Search volumes are not listed: check real numbers in Search Console (Performance → Queries)
and Google Keyword Planner before choosing new terms.

## Money keywords (people ready to hire a dispatcher)

| Keyword | Page |
|---|---|
| truck dispatcher, truck dispatch service, truck dispatching services, USA truck dispatcher, truck dispatching company | `/` (homepage) |
| truck dispatch services, dispatch service for trucks | `/services` |
| dispatch service for owner operators, owner operator dispatch, independent truck dispatcher | `/owner-operator-dispatch` |
| truck dispatch rates, truck dispatcher fee, dispatch service pricing | `/pricing` |
| dry van dispatch | `/services/dry-van-dispatch` |
| reefer dispatch, refrigerated truck dispatch | `/services/reefer-dispatch` |
| flatbed dispatch | `/services/flatbed-dispatch` |
| step deck dispatch | `/services/step-deck-dispatch` |
| power only dispatch | `/services/power-only-dispatch` |
| box truck dispatch, box truck dispatcher | `/services/box-truck-dispatch` |
| hotshot dispatch, hotshot dispatcher | `/services/hotshot-dispatch` |
| new trucking authority help, MC authority setup | `/services/new-carrier-setup` |

## Local keywords

| Keyword | Page |
|---|---|
| Midwest truck dispatcher, Midwest dispatch service | `/truck-dispatcher/midwest` |
| Chicago / Illinois truck dispatcher | `/truck-dispatcher/illinois` |
| Ohio, Columbus, Cincinnati truck dispatcher | `/truck-dispatcher/ohio` |
| Indiana, Indianapolis truck dispatcher | `/truck-dispatcher/indiana` |
| Michigan, Detroit truck dispatcher | `/truck-dispatcher/michigan` |
| Missouri, Kansas City, St. Louis truck dispatcher | `/truck-dispatcher/missouri` |
| East Coast truck dispatcher | `/truck-dispatcher/east-coast` |
| Pennsylvania, Lehigh Valley, Harrisburg truck dispatcher | `/truck-dispatcher/pennsylvania` |
| New Jersey, NJ port truck dispatcher | `/truck-dispatcher/new-jersey` |
| North Carolina, Charlotte truck dispatcher | `/truck-dispatcher/north-carolina` |
| truck dispatcher Florida, truck dispatcher Orlando, truck dispatch Kissimmee, local truck dispatcher | `/truck-dispatcher/florida` (+ Google Business Profile) |
| truck dispatcher Texas, Houston / Dallas truck dispatcher | `/truck-dispatcher/texas` |
| truck dispatcher Georgia, Atlanta truck dispatcher | `/truck-dispatcher/georgia` |
| truck dispatcher California | `/truck-dispatcher/california` |
| truck dispatch all 48 states, nationwide truck dispatcher | `/areas-we-serve` |

Add a new state page only with real, state-specific content (hubs, highways, freight, seasons). Pages that
just swap the state name get treated as doorway pages and can hurt the whole site.

## Question keywords (AEO: featured snippets and AI answers)

| Question | Page |
|---|---|
| how much does a truck dispatcher charge, truck dispatcher cost | `/blog/truck-dispatcher-cost` |
| what is freight dispatching, what does a truck dispatcher do | `/blog/what-is-freight-dispatching`, `/faq` |
| how to choose a truck dispatcher | `/blog/how-to-choose-dispatch-service` |
| dispatcher vs freight broker, do I need a local dispatcher | `/faq` |
| how to start a trucking company | `/blog/how-to-start-trucking-company-llc-mc-authority` |
| how to use load boards | `/blog/how-to-use-load-boards` |

Answers start with a direct one- or two-sentence reply, then detail. Keep that pattern in new posts.

## GEO (being cited by ChatGPT, Perplexity, Gemini, Google AI Overviews)

- `public/llms.txt`: business facts, rates and every page. Edit it by hand when rates or pages change.
- `lib/pricing.ts` is the single source of the rates shown on the site. Change rates there.
- Site-wide LocalBusiness schema in `app/layout.tsx`; Service + FAQPage + Breadcrumb schema on state pages.
- Same name, address and phone everywhere (site, Google Business Profile, directories):
  Priority Dispatch LLC, 804 Brack St, Kissimmee, FL 34744, (689) 314-8347.

## Next pages worth building

1. `sprinter van dispatch` service page (rate 10%; currently only on pricing and FAQ).
2. `truck dispatcher vs freight broker` blog post.
3. More state pages with real content: Wisconsin, Minnesota, New York, Virginia, Tennessee.
4. `best truck dispatch services` comparison post (honest, with criteria, includes Priority Dispatch).

## After every deploy

- `node scripts/indexnow.mjs` sends all sitemap URLs to Bing and other IndexNow engines.
- In Google Search Console, request indexing for new or changed key pages (about 10 a day).
