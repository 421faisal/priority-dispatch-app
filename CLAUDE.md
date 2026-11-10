# Priority Dispatch LLC website

Marketing site for Priority Dispatch LLC, a US truck dispatching service for owner-operators and small fleets
(Florida LLC, Sunbiz document number L25000443970; registered address 804 Brack St, Kissimmee, FL 34744; the
dispatch team works remotely). Live at https://prioritydispatchllc.com.

## Run and test

- `pnpm install` (Vercel uses pnpm-lock.yaml), then `npx next build` and `npx next start -p 3000`.
- Type check: `npx tsc --noEmit -p .` (ignore errors from the untracked scratch files `blog-content-new.tsx`
  and `temp_restore/`; `next.config.mjs` has `ignoreBuildErrors: true`, so the build will not catch them).
- Trucking calculator math: `node --experimental-strip-types scripts/test-trucking-calc.mjs`.
- After a deploy: `node scripts/indexnow.mjs` submits the sitemap to Bing and other IndexNow engines.

## Deploy

GitHub `421faisal/priority-dispatch-app`, branch `main`. Vercel builds every push (about 1 minute).
`vercel-ignore-build.sh` always builds. `priority-dispatch-app.vercel.app` and `www` redirect (308) to the apex domain.

## Where things live

- Rates by equipment: `lib/pricing.ts` (single source; 4% dry van/reefer/flatbed/step deck/power only,
  6% box truck/hotshot, 10% sprinter; paid after the broker pays; no contract).
- Blog list, topics and "Keep reading" links: `lib/blog-posts.ts`. New posts go there and in `app/sitemap.ts`.
- Location pages: `lib/locations.ts` rendered by `app/truck-dispatcher/[state]/page.tsx` (regions, states and
  the Atlanta city page; content must be genuinely local, never name-swapped).
- Free tools: `lib/tools.ts` (page copy) + `lib/trucking-calc.ts` (math) + `components/site/trucking-tools.tsx`.
- Service page FAQs and related links: `lib/service-content.ts` + `components/site/service-extras.tsx`.
- Spanish page: `app/es/despacho-de-camiones` (dispatcher calls are in English for now; say so honestly).
- AI summary: `public/llms.txt`, edited by hand. Keyword map: `SEO-KEYWORD-MAP.md`.
- Images: real photos only (Unsplash License), WebP in `public/images/blog/photos/` with a 1200x630 `-og.jpg`.

## Conventions

- No invented claims: no fake reviews, stats, offices or policies. Case studies anonymize brokers, carriers and drivers.
- Titles 60 characters or less, descriptions 70-160; answer-first intros; FAQPage schema where there is a FAQ.
- Partners: Bobtail (factoring), Simplex Group (ELD). Do not publish personal contact names.

## Status (10 Nov 2026)

48 pages indexed (Search Console); SEO audit score 81/100 (see the latest audit). On 10 Nov the 9 "crawled -
currently not indexed" posts were handled: 7 rewritten on `components/site/article-shell.tsx` (sources, FAQ, photo,
author box) and 2 merged with 308 redirects in `next.config.mjs`. New guides should use ArticleShell. Open items:
watch those URLs in Search Console; collect real reviews; partner links; expand the contact and carrier setup pages.
