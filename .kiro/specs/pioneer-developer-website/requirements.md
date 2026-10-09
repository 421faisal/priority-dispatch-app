# Requirements Document

## Introduction

Pioneer Developer is a founder-led digital agency run by Fatima Syed, a CS graduate and full-stack developer. This project rebuilds her existing plain HTML/CSS/JS website as a modern Next.js 15 application using the exact same tech stack as Priority Dispatch (App Router, TypeScript, Tailwind CSS v4, Radix UI / shadcn/ui, Nodemailer, Vercel Analytics). The rebuilt site must preserve all existing content — home, services, portfolio, about, blog (4 articles), contact, privacy, terms, and a standalone HRMS landing page — while adding full SEO infrastructure, JSON-LD structured data, per-page metadata, a sitemap, robots.txt, LLMs.txt, and a contact form backed by Gmail SMTP.

The output project MUST be created at `c:\Users\421fa\Downloads\pioneer-developer` as a standalone Next.js workspace (not inside the Priority Dispatch folder).

---

## Glossary

- **Website**: The Pioneer Developer Next.js application deployed at `https://faatimaah2004.com`
- **App_Router**: The Next.js 15 App Router directory convention (`app/` folder)
- **Component**: A reusable React TypeScript component located under `components/`
- **Page**: A Next.js route segment file (`app/**/page.tsx`) that renders a full web page
- **Layout**: A Next.js route segment file (`app/**/layout.tsx`) that wraps child pages
- **Metadata**: The `Metadata` object exported from a Next.js Page or Layout used for `<head>` SEO tags
- **JSON-LD**: Structured data script tags of type `application/ld+json` embedded in the document `<head>`
- **Sitemap**: The `app/sitemap.ts` file that returns `MetadataRoute.Sitemap` for all public URLs
- **Robots**: The `app/robots.ts` file that returns `MetadataRoute.Robots` controlling crawler access
- **LLMs_Route**: The `app/llms-txt/route.ts` GET handler that serves LLM-friendly site content
- **Contact_API**: The `app/api/contact/route.ts` POST handler that sends email via Nodemailer
- **Health_API**: The `app/api/health/route.ts` GET handler that checks email configuration
- **Nodemailer**: The Node.js email library used to send messages via Gmail SMTP (port 465, TLS)
- **Tailwind**: Tailwind CSS v4 used for all styling via utility classes
- **shadcn_ui**: Pre-built accessible UI components from shadcn/ui built on Radix UI primitives
- **Reveal**: The `components/site/reveal.tsx` scroll-reveal wrapper using Intersection Observer
- **Smooth_Scroll**: The `components/site/smooth-scroll.tsx` client component that enables CSS smooth scrolling
- **Site_Header**: The sticky navigation component with logo, nav links, and mobile hamburger menu
- **Site_Footer**: The multi-column footer with social links, navigation, and legal links
- **Hero**: The homepage hero section with headline, subheadline, CTA buttons, and background gradient
- **Services_Section**: The homepage services overview cards (Website Dev, Android Apps, Social Media)
- **Portfolio_Grid**: The filterable project card grid showing Carrier OS, ZubanX, and Enterprise HRMS
- **Founder_Section**: The founder spotlight section featuring Fatima Syed's bio and photo
- **FAQ_Accordion**: The accordion-style FAQ component using Radix UI Accordion
- **Contact_Form**: The project request form with react-hook-form + zod validation
- **CTA_Banner**: The full-width call-to-action banner linking to contact or Fiverr
- **Blog_Preview**: The blog card grid displayed on the homepage and blog index page
- **Marquee**: The horizontally scrolling industry marquee on the homepage
- **Blog_Article**: An individual blog post page rendered at `app/blog/[slug]/page.tsx`
- **Slug**: The URL-safe kebab-case identifier for a blog article
- **OG_Image**: The Open Graph image tag (`og:image`) used for social media sharing previews
- **Canonical_URL**: The `<link rel="canonical">` tag preventing duplicate-content indexing
- **Inter**: The Inter typeface loaded via `next/font/google` and applied as the site font
- **pnpm**: The package manager used to install dependencies (`pnpm install`)
- **HRMS_Page**: The standalone landing page for the Enterprise HRMS product at `app/hrms/page.tsx`
- **Fatima_Syed**: The founder and sole owner of Pioneer Developer
- **Pioneer_Developer**: The digital agency brand whose website is being built

---

## Requirements

### Requirement 1: Project Initialization and Configuration

**User Story:** As a developer, I want a correctly scaffolded Next.js 15 project at `c:\Users\421fa\Downloads\pioneer-developer`, so that I can run, build, and deploy the Pioneer Developer website without manual setup.

#### Acceptance Criteria

1. THE Website SHALL be initialized as a Next.js 15 project with TypeScript, Tailwind CSS v4, and the App Router at the path `c:\Users\421fa\Downloads\pioneer-developer`.
2. THE Website SHALL use pnpm as the package manager with a `pnpm-lock.yaml` lockfile committed to the repository.
3. THE Website SHALL include a `package.json` with the name `"pioneer-developer"`, version `"0.1.0"`, and scripts `build`, `dev`, `lint`, and `start` matching the Priority Dispatch reference exactly.
4. THE Website SHALL pin all dependency versions to match the Priority Dispatch `package.json` exactly, including Next.js `15.2.8`, React `19.2.4`, Tailwind CSS `^4.1.9`, and all Radix UI packages at their specified versions.
5. THE Website SHALL include a `next.config.mjs` with `images.formats: ['image/avif', 'image/webp']`, `compress: true`, `reactStrictMode: true`, `compiler.removeConsole` in production, `poweredByHeader: false`, and `experimental.optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']`.
6. THE Website SHALL include security headers in `next.config.mjs`: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: origin-when-cross-origin`, and `X-DNS-Prefetch-Control: on` applied to all routes.
7. THE Website SHALL include a cache-control header `public, max-age=31536000, immutable` for all `/images/:path*` routes in `next.config.mjs`.
8. THE Website SHALL include a rewrite in `next.config.mjs` mapping `/llms.txt` to `/llms-txt`.
9. THE Website SHALL include a `.env.example` file with the keys `GMAIL_USER` and `GMAIL_APP_PASSWORD` (no `NEXT_PUBLIC_SITE_URL`); the `.env.example` file SHALL be committed to the repository.
10. THE Website SHALL include a `.gitignore` that excludes `.env*` (covering `.env.local` and all local env overrides), `node_modules/`, and `.next/`, while explicitly allowing `.env.example` to be tracked.

### Requirement 2: Root Layout, Global Fonts, and JSON-LD

**User Story:** As a site visitor, I want every page to load with the correct brand fonts, global styles, and structured data, so that the site renders consistently and search engines can understand its identity.

#### Acceptance Criteria

1. THE App_Router SHALL include a root `app/layout.tsx` that wraps all pages with the Inter font loaded via `next/font/google` with `subsets: ['latin']` and `variable: '--font-inter'`.
2. THE App_Router SHALL apply `font-sans` and the `inter.variable` class to the `<body>` element in the root layout.
3. THE App_Router SHALL embed a `Metadata` export in `app/layout.tsx` with: `metadataBase: new URL('https://faatimaah2004.com')`, `title: 'Pioneer Developer — Custom Websites, Web Apps & Mobile Apps'`, `description: 'Pioneer Developer is a founder-led digital agency specializing in custom websites, web applications, mobile apps, and social media growth for startups and businesses worldwide.'`, `keywords: 'pioneer developer, custom website development, web app development, android app development, social media management, full-stack developer, Fatima Syed, Fiverr developer'`, `openGraph` (title, description, url `https://faatimaah2004.com`, siteName `"Pioneer Developer"`, images array with `/images/og-image.jpg` at 1200×630, locale `en_US`, type `website`), `twitter` (card `summary_large_image`, site `@PioneerDevs`, title, description, images), `icons` (icon, shortcut, apple all pointing to `/images/logo.png`), and `alternates.canonical: 'https://faatimaah2004.com'`.
4. THE App_Router SHALL embed two JSON-LD `<script type="application/ld+json">` blocks in `app/layout.tsx`: one `Organization` schema (name `"Pioneer Developer"`, url `https://faatimaah2004.com`, email `fatimaqasimsyed@gmail.com`, sameAs array containing exactly: `https://www.facebook.com/profile.php?id=61591512537802`, `https://github.com/syeda-fatimaah`, `https://twitter.com/PioneerDevs`, `https://www.instagram.com/pioneer.developer`) and one `Person` schema for Fatima Syed (name `"Fatima Syed"`, jobTitle `"Founder & Full-Stack Developer"`, url `https://faatimaah2004.com/about`, sameAs: `https://github.com/syeda-fatimaah`, `https://www.fiverr.com/faatimaah2004`).
5. THE App_Router SHALL include `<Analytics />` from `@vercel/analytics/next` in the root layout body.
6. THE App_Router SHALL include `<Toaster />` from `@/components/ui/toaster` in the root layout body.
7. THE App_Router SHALL include `<SmoothScroll />` from `@/components/site/smooth-scroll` in the root layout body.
8. THE App_Router SHALL include `app/globals.css` imported in `app/layout.tsx` that applies Tailwind CSS base, components, and utilities directives.

### Requirement 3: SEO Infrastructure — Sitemap, Robots, LLMs.txt

**User Story:** As a site owner, I want search engines and AI crawlers to discover all pages and understand the site structure, so that Pioneer Developer ranks well in search results and AI-powered tools can describe the agency accurately.

#### Acceptance Criteria

1. THE Sitemap SHALL be implemented at `app/sitemap.ts` returning all public routes with `url`, `lastModified`, `changeFrequency`, and `priority` fields using the base URL `https://faatimaah2004.com`.
2. THE Sitemap SHALL include these routes at minimum: `/` (priority 1.0, weekly), `/services` (0.9, monthly), `/portfolio` (0.9, monthly), `/about` (0.8, monthly), `/blog` (0.8, weekly), `/contact` (0.9, monthly), `/privacy` (0.4, yearly), `/terms` (0.4, yearly), `/hrms` (0.7, monthly), and all four blog article slugs at `/blog/custom-websites`, `/blog/react-native-vs-flutter`, `/blog/social-media-revenue`, `/blog/uiux-principles` (each 0.7–0.8, monthly).
3. THE Robots SHALL be implemented at `app/robots.ts` returning `rules: [{ userAgent: '*', allow: '/' }]` and `sitemap: 'https://faatimaah2004.com/sitemap.xml'`.
4. THE LLMs_Route SHALL be implemented at `app/llms-txt/route.ts` as a `force-static` GET handler that returns `Content-Type: text/plain; charset=utf-8` with a Markdown document containing at minimum: a `# Pioneer Developer` heading, an `## About` section with brand description, a `## Services` section listing Website Development / Android App Development / Social Media Management, a `## Pages` section listing every route URL with a one-sentence description, a `## Contact` section with email `fatimaqasimsyed@gmail.com` and Fiverr URL, and a `## Founder` section with Fatima Syed's name and title.
5. THE Website SHALL include a static `public/llms.txt` file containing the same Markdown sections as the LLMs_Route response (About, Services, Pages, Contact, Founder).
6. THE Website SHALL include a static `public/robots.txt` file containing `User-agent: *`, `Allow: /`, and `Sitemap: https://faatimaah2004.com/sitemap.xml`.
7. WHEN a search engine requests `/sitemap.xml`, THE Sitemap SHALL return an XML document with a `<urlset>` root element containing one `<url>` element per route, where each `<url>` element has `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` child elements with valid values.
8. WHEN a crawler requests `/llms.txt`, THE Website SHALL serve the LLMs.txt content via the rewrite rule defined in `next.config.mjs`.

### Requirement 4: Per-Page Metadata and Canonical URLs

**User Story:** As a site owner, I want every page to have its own unique title, description, Open Graph tags, and canonical URL, so that each page is indexed correctly and appears attractively in search results and social media previews.

#### Acceptance Criteria

1. THE App_Router SHALL export a `metadata` constant or `generateMetadata` function from every `page.tsx` file.
2. WHEN a page has a unique URL (e.g., `/services`, `/portfolio`), THE Metadata SHALL include `alternates.canonical` set to that page's full absolute URL.
3. THE Metadata for each page SHALL include a unique `title` following the pattern `"[Page Topic] | Pioneer Developer"` and a unique `description` of 120–160 characters.
4. THE Metadata for each page SHALL include `openGraph.images` with at least one entry pointing to `/images/og-image.jpg` (1200×630).
5. THE Blog_Article pages SHALL use `generateMetadata` with the article slug to produce unique title, description, and canonical URL per article.
6. WHERE a page is an inner page (not the homepage), THE App_Router SHALL embed a BreadcrumbList JSON-LD schema in that page's `<script type="application/ld+json">` block reflecting the page's position in the site hierarchy.

### Requirement 5: Site Header and Navigation

**User Story:** As a site visitor, I want a clear, sticky navigation bar that works on both desktop and mobile, so that I can reach any part of the Pioneer Developer website without effort.

#### Acceptance Criteria

1. THE Site_Header SHALL be implemented as a sticky `<header>` component in `components/site/site-header.tsx` that remains visible at the top of the viewport when the user scrolls.
2. THE Site_Header SHALL display the Pioneer Developer logo/wordmark on the left and navigation links on the right on desktop viewports (≥768px).
3. THE Site_Header SHALL include navigation links to: Home (`/`), Services (`/services`), Portfolio (`/portfolio`), About (`/about`), Blog (`/blog`), and Contact (`/contact`).
4. WHEN the viewport width is less than 768px, THE Site_Header SHALL display a hamburger menu button that toggles a mobile navigation drawer.
5. WHEN the mobile navigation drawer is open, THE Site_Header SHALL display all navigation links stacked vertically.
6. WHEN a navigation link matches the current route, THE Site_Header SHALL visually indicate the active link with a distinct style.
7. THE Site_Header SHALL include a primary CTA button linking to `/contact` labeled "Start a Project" visible on desktop viewports.

### Requirement 6: Site Footer

**User Story:** As a site visitor, I want a professional footer with quick links, contact info, and social media links, so that I can navigate to key areas and follow Pioneer Developer on social platforms.

#### Acceptance Criteria

1. THE Site_Footer SHALL be implemented in `components/site/site-footer.tsx` and included in the root layout below the page content.
2. THE Site_Footer SHALL render a 4-column layout on desktop with columns for: Brand (logo + tagline), Services (links to service sections), Company (About, Blog, Contact, Privacy, Terms), and Contact Info (email, phone, social icons).
3. THE Site_Footer SHALL display social media icon links for Facebook (`https://www.facebook.com/profile.php?id=61591512537802`), GitHub (`https://github.com/syeda-fatimaah`), Twitter (`https://twitter.com/PioneerDevs`), and Instagram (`https://www.instagram.com/pioneer.developer`).
4. THE Site_Footer SHALL include a copyright notice displaying the current year and "Pioneer Developer. All rights reserved."
5. THE Site_Footer SHALL include links to `/privacy` (Privacy Policy) and `/terms` (Terms of Service) in the footer bottom bar.
6. WHEN the viewport is less than 768px, THE Site_Footer SHALL stack all columns vertically.

### Requirement 7: Homepage

**User Story:** As a prospective client, I want a compelling homepage that immediately communicates what Pioneer Developer does, so that I can decide to explore services or get in touch.

#### Acceptance Criteria

1. THE Hero SHALL be implemented in `components/site/hero.tsx` and rendered as the first section of `app/page.tsx` with a dark navy gradient background (`#07142C` → `#0A2A62`), the headline "We Build Digital Products That Scale", a subheadline referencing the tagline "Where Technical Precision Meets Digital Scale", and two CTA buttons: "Start a Project" (linking to `/contact`) and "View Portfolio" (linking to `/portfolio`).
2. THE Marquee SHALL be rendered below the Hero as an infinitely horizontally scrolling strip listing industries/keywords (e.g., FinTech, HealthTech, EdTech, SaaS, E-Commerce, Enterprise) using CSS animation.
3. THE Services_Section SHALL be rendered on the homepage as an overview grid of three service cards: Website Development, Android App Development, and Social Media Management — each with an icon, short description, and a "Learn More" link to `/services`.
4. THE Homepage SHALL render a "How It Works" section with exactly 4 numbered steps: (1) Discovery Call, (2) Proposal & Planning, (3) Design & Development, (4) Launch & Support.
5. THE Portfolio_Grid SHALL be rendered on the homepage showing a featured subset of 3 projects (Carrier OS, ZubanX AI Translator, Enterprise HRMS) with project name, short description, tech tags, and a link to the full portfolio.
6. THE Founder_Section SHALL be rendered on the homepage featuring Fatima Syed's name, title "Founder & Full-Stack Developer", a short bio paragraph, and a photo placeholder.
7. THE Homepage SHALL include a Testimonials placeholder section labeled "What Clients Say" with at least 2 placeholder testimonial cards.
8. THE Homepage SHALL render a Tech Stack section displaying logos or named badges for the technologies Pioneer Developer uses (e.g., React, Next.js, TypeScript, Node.js, Flutter, Tailwind CSS).
9. THE FAQ_Accordion SHALL be rendered on the homepage with at least 5 frequently asked questions about Pioneer Developer's services, process, and pricing, using Radix UI Accordion.
10. THE CTA_Banner SHALL be rendered as the final section of the homepage with a full-width dark background, a headline "Ready to Build Something?", and a button linking to `/contact`.
11. THE Reveal SHALL wrap each homepage section so that content fades or slides into view as the user scrolls using Intersection Observer.

### Requirement 8: Services Page

**User Story:** As a prospective client, I want a dedicated services page that clearly explains each offering in detail, so that I can evaluate which service fits my project.

#### Acceptance Criteria

1. THE App_Router SHALL render the services page at `/services` via `app/services/page.tsx` with its own `metadata` export.
2. THE Services page SHALL include three detailed service sections: Website Development, Android App Development, and Social Media Management — each with a heading, paragraph description, a bullet list of deliverables, and a CTA button to `/contact`.
3. THE Services page SHALL include a comparison table listing the three services as columns against feature/deliverable rows to help clients compare.
4. THE Services page SHALL render a 6-step process timeline section (e.g., Discovery → Proposal → Design → Build → QA → Launch) with step numbers, titles, and short descriptions.
5. THE Services page SHALL end with a CTA_Banner component linking to `/contact`.

### Requirement 9: Portfolio Page

**User Story:** As a prospective client, I want to browse Pioneer Developer's portfolio with the ability to filter by project type, so that I can see relevant work examples quickly.

#### Acceptance Criteria

1. THE App_Router SHALL render the portfolio page at `/portfolio` via `app/portfolio/page.tsx` with its own `metadata` export.
2. THE Portfolio_Grid SHALL render project cards for: Carrier OS (logistics platform), ZubanX AI Translator (AI/NLP app), and Enterprise HRMS (HR management system) — each with project name, short description, tech stack tags, and a placeholder image.
3. THE Portfolio_Grid SHALL include a filter bar with at minimum the categories: All, Web, Mobile, Enterprise.
4. WHEN a filter category is selected, THE Portfolio_Grid SHALL show only project cards matching that category and hide non-matching cards without a full page reload.
5. THE Portfolio page SHALL display each project card with a "View Details" or "Live Demo" action link.

### Requirement 10: About Page

**User Story:** As a prospective client, I want to learn about Fatima Syed's background and philosophy, so that I can decide whether Pioneer Developer is the right partner for my project.

#### Acceptance Criteria

1. THE App_Router SHALL render the about page at `/about` via `app/about/page.tsx` with its own `metadata` export.
2. THE About page SHALL include a Founder Story section with a heading, a multi-paragraph bio for Fatima Syed (CS graduate, full-stack developer), and a photo placeholder.
3. THE About page SHALL include a Philosophy section describing Pioneer Developer's approach to digital product development.
4. THE About page SHALL include a Skills section listing Fatima Syed's technical skills with visual indicators (e.g., badges or icon groups) for React, Next.js, TypeScript, Node.js, Flutter, and Tailwind CSS.
5. THE About page SHALL include a Fiverr CTA encouraging visitors to hire Fatima on Fiverr at `https://www.fiverr.com/faatimaah2004`.

### Requirement 11: Blog Index Page

**User Story:** As a reader, I want to browse Pioneer Developer's blog with category filtering, so that I can find articles relevant to my interests.

#### Acceptance Criteria

1. THE App_Router SHALL render the blog index at `/blog` via `app/blog/page.tsx` with its own `metadata` export.
2. THE Blog_Preview SHALL render exactly 4 blog article cards on the blog index page: "Custom Websites vs. Templates", "React Native vs. Flutter", "Social Media as a Revenue Channel", and "UI/UX Principles That Convert".
3. THE Blog index SHALL include a category filter bar with at minimum: All, Web Dev, Mobile, Marketing, Design.
4. WHEN a category is selected, THE Blog_Preview SHALL show only cards matching that category without a full page reload.
5. Each Blog_Preview card SHALL display: article title, category badge, date, estimated read time, a short excerpt, and a "Read More" link to the article's slug URL.

### Requirement 12: Blog Article Pages

**User Story:** As a reader, I want to read full blog articles with proper formatting and navigation, so that I get value from Pioneer Developer's content and can find related posts.

#### Acceptance Criteria

1. THE App_Router SHALL render individual blog articles at `/blog/[slug]` via `app/blog/[slug]/page.tsx` using a dynamic route segment.
2. THE Blog_Article SHALL be implemented for exactly these four slugs: `custom-websites`, `react-native-vs-flutter`, `social-media-revenue`, and `uiux-principles`.
3. WHEN an unsupported slug is requested, THE App_Router SHALL return a 404 response via `notFound()`.
4. THE Blog_Article page SHALL export `generateStaticParams` returning the four valid slugs so the articles are statically generated at build time.
5. THE Blog_Article page SHALL export `generateMetadata` that returns a unique title, description, and canonical URL for each slug.
6. THE Blog_Article page SHALL render: article title as `<h1>`, publication date, category badge, estimated read time, full article body with `<h2>` / `<h3>` sub-headings, and a concluding CTA linking to `/contact`.
7. THE Blog_Article page SHALL embed an `Article` JSON-LD schema block with `headline`, `datePublished`, `author` (Fatima Syed), and `publisher` (Pioneer Developer).
8. THE Blog_Article page SHALL display a "Back to Blog" breadcrumb link at the top of the page.

### Requirement 13: Contact Page and Form

**User Story:** As a prospective client, I want to send Pioneer Developer a project request through a validated form, so that Fatima Syed can respond to my inquiry via email.

#### Acceptance Criteria

1. THE App_Router SHALL render the contact page at `/contact` via `app/contact/page.tsx` with its own `metadata` export.
2. THE Contact_Form SHALL be implemented in `components/site/contact-form.tsx` using react-hook-form and zod for client-side validation.
3. THE Contact_Form SHALL include these fields: Name (required, min 2 chars), Email (required, valid email format), Phone (optional), Service Interest (select: Website Dev / Android App / Social Media / Other), Project Budget (select: <$500 / $500–$2000 / $2000–$5000 / $5000+), Project Description (required, textarea, min 20 chars), and a Submit button.
4. WHEN the user submits the Contact_Form with valid data, THE Contact_Form SHALL POST the data to `/api/contact` and display a success toast notification using the shadcn_ui Toaster.
5. IF the POST to `/api/contact` fails, THEN THE Contact_Form SHALL display an error toast notification without clearing the form data.
6. THE Contact page SHALL also display Pioneer Developer's contact information: email `fatimaqasimsyed@gmail.com`, phone `+92 329 4146450`, and Fiverr link `https://www.fiverr.com/faatimaah2004`.
7. THE Contact page SHALL include an FAQ accordion with at least 4 questions specific to the project request process.

### Requirement 14: Contact API Route and Email Delivery

**User Story:** As a site owner, I want project inquiries submitted via the contact form to be delivered to my Gmail inbox, so that I can respond to leads promptly.

#### Acceptance Criteria

1. THE Contact_API SHALL be implemented at `app/api/contact/route.ts` as a POST handler with `export const runtime = "nodejs"`.
2. WHEN the Contact_API receives a POST request, THE Contact_API SHALL parse `name`, `email`, `phone`, `serviceInterest`, `budget`, and `message` from the JSON request body.
3. IF `name` or `email` is missing from the request body, THEN THE Contact_API SHALL return HTTP 400 with `{ "error": "Name and email are required." }`.
4. WHEN all required fields are present, THE Contact_API SHALL call `sendEmail` from `lib/email.ts` with an HTML email body containing all submitted fields and deliver it to `process.env.GMAIL_USER`.
5. WHEN `sendEmail` completes successfully, THE Contact_API SHALL return HTTP 200 with `{ "success": true, "message": "Message sent successfully!" }`.
6. IF `sendEmail` throws an error, THEN THE Contact_API SHALL return HTTP 500 with `{ "error": "Failed to send message. Please try again later." }`.
7. THE Health_API SHALL be implemented at `app/api/health/route.ts` as a GET handler that returns JSON indicating whether `GMAIL_USER` and `GMAIL_APP_PASSWORD` environment variables are set.
8. THE Email helper `lib/email.ts` SHALL use Nodemailer with Gmail SMTP host `smtp.gmail.com`, port `465`, `secure: true`, and the sender display name `"Pioneer Developer"`.

### Requirement 15: Privacy Policy and Terms of Service Pages

**User Story:** As a site visitor, I want to read Pioneer Developer's privacy policy and terms of service, so that I understand how my data is handled.

#### Acceptance Criteria

1. THE App_Router SHALL render the privacy policy at `/privacy` via `app/privacy/page.tsx` with its own `metadata` export including title `"Privacy Policy | Pioneer Developer"`.
2. THE App_Router SHALL render the terms of service at `/terms` via `app/terms/page.tsx` with its own `metadata` export including title `"Terms of Service | Pioneer Developer"`.
3. THE Privacy page SHALL include sections covering: data collection, how data is used, cookies, third-party services, contact information for data inquiries, and last-updated date.
4. THE Terms page SHALL include sections covering: acceptance of terms, use of services, intellectual property, limitation of liability, governing law, and last-updated date.
5. BOTH the Privacy and Terms pages SHALL be excluded from search engine indexing via `robots: { index: false, follow: false }` in their `metadata` exports.

### Requirement 16: HRMS Standalone Landing Page

**User Story:** As a potential Enterprise HRMS customer, I want a dedicated landing page for the HRMS product, so that I can learn about its features and request a demo independently of the main Pioneer Developer site.

#### Acceptance Criteria

1. THE App_Router SHALL render the HRMS landing page at `/hrms` via `app/hrms/page.tsx` with its own `metadata` export including title `"Enterprise HRMS — HR Management Platform | Pioneer Developer"`.
2. THE HRMS_Page SHALL include a hero section with the product name "Enterprise HRMS", a one-line value proposition, and a CTA button "Request a Demo" linking to `/contact`.
3. THE HRMS_Page SHALL include a features section listing at least 5 HRMS capabilities (e.g., Employee Records, Payroll, Attendance Tracking, Leave Management, Performance Reviews) with icons and short descriptions.
4. THE HRMS_Page SHALL include a CTA banner at the bottom linking to `/contact`.
5. THE Site_Header and Site_Footer SHALL still be rendered on the HRMS_Page (it is not a completely isolated page).

### Requirement 17: Component Architecture and Shared UI

**User Story:** As a developer, I want a clean, consistent component architecture that mirrors Priority Dispatch, so that the codebase is maintainable and new pages can be built quickly.

#### Acceptance Criteria

1. THE Website SHALL implement all site-specific components in `components/site/` and all shadcn_ui primitives in `components/ui/`.
2. THE Website SHALL implement `lib/utils.ts` with the `cn()` helper function using `clsx` and `tailwind-merge` exactly as in Priority Dispatch.
3. THE Reveal SHALL be implemented in `components/site/reveal.tsx` as a client component that uses `IntersectionObserver` to add a visible class to its children when they enter the viewport, enabling CSS-based fade-in or slide-in animations.
4. THE Smooth_Scroll SHALL be implemented in `components/site/smooth-scroll.tsx` as a client component that sets `scroll-behavior: smooth` on the `<html>` element.
5. THE Website SHALL use Lucide React icons for all iconography throughout the codebase.
6. WHERE Font Awesome 6 icons are required for specific social or brand icons not available in Lucide, THE Website SHALL load Font Awesome 6 via CDN `<link>` tag in the root layout `<head>`.
7. THE shadcn_ui Accordion component SHALL be used for all FAQ sections across the site.
8. THE shadcn_ui Toast / Toaster SHALL be used for all form submission notifications across the site.

### Requirement 18: Styling, Color Scheme, and Responsive Design

**User Story:** As a site visitor, I want the Pioneer Developer website to look professional and visually consistent across all devices and screen sizes, so that I have a polished user experience whether on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Website SHALL use blue as the primary accent color with `#3B82F6` as the base and `#2563EB` as the hover/active shade.
2. THE Hero and dark sections SHALL use the navy gradient from `#07142C` to `#0A2A62` as the background.
3. THE Website SHALL use white (`#ffffff`) as the default section background and `#F9FAFB` as the alternate section background for visual rhythm.
4. THE Website SHALL be fully responsive across these breakpoints: mobile (320px+), tablet (768px+), and desktop (1280px+), using Tailwind CSS responsive utility classes.
5. THE Website SHALL implement a mobile-first layout where all multi-column grids collapse to a single column on viewports below 768px.
6. THE Website's touch targets (buttons, links, nav items) SHALL have a minimum height and width of 44px on mobile viewports to meet WCAG 2.1 AA touch target guidelines.
7. THE Website SHALL use only Tailwind CSS v4 utility classes for all styling — no inline styles or custom CSS files other than `globals.css` (which only contains Tailwind directives and CSS custom properties).

### Requirement 19: Performance and Build Quality

**User Story:** As a site owner, I want the Pioneer Developer website to build without errors and load quickly, so that visitors get a fast experience and the site performs well in search rankings.

#### Acceptance Criteria

1. WHEN `pnpm build` is run, THE Website SHALL complete a successful production build with zero TypeScript type errors and zero ESLint errors.
2. THE Website SHALL use `next/image` for all images in the project, supplying `width`, `height`, and `alt` attributes on every `<Image>` component; `<Image>` components using the `fill` layout prop are exempt from explicit `width`/`height` but SHALL still supply `alt`.
3. THE Website SHALL use `next/link` for all internal navigation links to enable client-side prefetching.
4. THE Website SHALL not import any server-only modules (e.g., `nodemailer`, `fs`) in Client Components — all server code SHALL be in API routes or Server Components only.
5. WHEN the Node.js runtime is production, THE Website's `next.config.mjs` `compiler.removeConsole` SHALL strip all `console.*` calls from the client bundle.
6. THE Website SHALL generate static pages at build time for: home, services, portfolio, about, blog index, all 4 blog article slugs, privacy, terms, hrms, and contact (contact page static, contact form submits via API).

### Requirement 20: Accessibility

**User Story:** As a site visitor using assistive technology, I want the Pioneer Developer website to be keyboard-navigable and screen-reader compatible, so that I can access all content regardless of disability.

#### Acceptance Criteria

1. THE Site_Header SHALL use a `<nav>` element with an `aria-label="Main navigation"` attribute wrapping all navigation links.
2. THE Mobile hamburger button in Site_Header SHALL include an `aria-label` attribute and `aria-expanded` attribute reflecting the drawer's open/closed state.
3. THE Contact_Form SHALL associate every form field with its label using matching `htmlFor` and `id` attributes, and display inline validation error messages with `role="alert"`.
4. THE FAQ_Accordion SHALL use Radix UI Accordion which provides ARIA attributes (`aria-expanded`, `aria-controls`) for keyboard navigation out of the box.
5. THE Reveal wrapper component SHALL respect the `prefers-reduced-motion` media query and, when that preference is active, make the wrapped element immediately visible without any transition or animation.
6. ALL `<img>` and `next/image` usages SHALL include a descriptive `alt` attribute — decorative images SHALL use `alt=""`.
7. THE Website's color contrast ratio between body text rendered at font-size less than 18px and its direct background color SHALL meet WCAG 2.1 AA minimum of 4.5:1.
