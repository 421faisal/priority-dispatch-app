# Requirements Document

## Introduction

This document defines requirements for fixing critical technical SEO issues that prevent proper crawling and indexing of the Priority Dispatch LLC website. The site is a Next.js 15 application deployed to production with 33 pages including blog posts. Current issues include a non-functional sitemap.xml (500 server error), broken www subdomain redirects, duplicate title tags, and missing feed endpoints. These issues block Googlebot discovery and cause partial indexing. The fixes will ensure proper search engine crawling, eliminate duplicate content signals, and standardize URL structure across the site.

## Glossary

- **Sitemap_Generator**: The Next.js sitemap.ts file that generates the XML sitemap
- **Redirect_Manager**: The Next.js configuration system that handles URL redirects and rewrites
- **Metadata_System**: The Next.js metadata API that manages page titles, descriptions, and SEO tags
- **Search_Engine_Crawler**: Automated bots (Googlebot, Bingbot) that discover and index web pages
- **WWW_Subdomain**: The www-prefixed version of the domain (www.prioritydispatchllc.com)
- **Canonical_URL**: The preferred version of a URL that search engines should index
- **Trailing_Slash**: The forward slash character at the end of a URL path (e.g., /services/)
- **HTTP_Status_Code**: Numeric code indicating the result of an HTTP request (200, 301, 404, 500)
- **XML_Sitemap**: A file listing all URLs on a site for search engine discovery (sitemap.xml)
- **Robots_File**: A file that provides crawling instructions to search engines (robots.txt)

## Requirements

### Requirement 1: Sitemap XML Generation

**User Story:** As a search engine crawler, I want to retrieve a valid sitemap.xml file, so that I can discover and index all pages on the site efficiently.

#### Acceptance Criteria

1.1. WHEN a request is made to /sitemap.xml, THE Sitemap_Generator SHALL return HTTP status code 200

1.2. WHEN the Sitemap_Generator creates lastModified dates, THE Sitemap_Generator SHALL use dates that are valid ISO 8601 timestamps

1.3. WHEN the Sitemap_Generator creates lastModified dates, THE Sitemap_Generator SHALL not use future dates that cause runtime errors

1.4. WHEN a request is made to /sitemap.xml, THE Sitemap_Generator SHALL return valid XML conforming to the sitemap protocol schema

1.5. THE Sitemap_Generator SHALL include all 33 pages (core pages, blog index, and blog posts) in the generated sitemap

1.6. WHEN the XML_Sitemap is generated, THE Sitemap_Generator SHALL include the url, lastModified, changeFrequency, and priority fields for each entry

1.7. WHEN the XML_Sitemap is generated, THE Sitemap_Generator SHALL use the base URL https://prioritydispatchllc.com for all entries

### Requirement 2: WWW Subdomain Redirect

**User Story:** As a search engine crawler, I want www subdomain requests to redirect to the canonical non-www domain, so that I can consolidate indexing signals and avoid duplicate content penalties.

#### Acceptance Criteria

2.1. WHEN a request is made to www.prioritydispatchllc.com, THE Redirect_Manager SHALL return HTTP status code 301

2.2. WHEN a request is made to www.prioritydispatchllc.com, THE Redirect_Manager SHALL redirect to https://prioritydispatchllc.com

2.3. WHEN a request is made to www.prioritydispatchllc.com with any path, THE Redirect_Manager SHALL preserve the path in the redirect destination

2.4. WHEN a request is made to www.prioritydispatchllc.com with query parameters, THE Redirect_Manager SHALL preserve query parameters in the redirect destination

2.5. THE Redirect_Manager SHALL apply the www to non-www redirect before any other redirect rules

### Requirement 3: Trailing Slash Standardization

**User Story:** As a search engine crawler, I want consistent URL formatting with standardized trailing slash behavior, so that I can avoid indexing duplicate versions of the same content.

#### Acceptance Criteria

3.1. WHEN a request is made to a URL without a trailing slash, THE Redirect_Manager SHALL serve the content without redirecting

3.2. WHEN a request is made to a URL with a trailing slash, THE Redirect_Manager SHALL return HTTP status code 301

3.3. WHEN a request is made to a URL with a trailing slash, THE Redirect_Manager SHALL redirect to the same URL without the trailing slash

3.4. WHEN redirecting due to trailing slash, THE Redirect_Manager SHALL preserve query parameters in the redirect destination

3.5. IF the URL is the root path (/), THEN THE Redirect_Manager SHALL not apply trailing slash redirect logic

### Requirement 4: Unique Page Metadata

**User Story:** As a search engine crawler, I want each page to have unique title tags and meta descriptions, so that I can properly index and rank distinct pages without duplicate content confusion.

#### Acceptance Criteria

4.1. THE Metadata_System SHALL generate unique title tags for the homepage and blog index page

4.2. WHEN the Metadata_System generates a title tag, THE Metadata_System SHALL ensure the title is no longer than 60 characters

4.3. WHEN the Metadata_System generates a meta description, THE Metadata_System SHALL ensure the description is between 120 and 160 characters

4.4. THE Metadata_System SHALL include page-specific keywords in each page title

4.5. WHEN the Metadata_System generates metadata for a blog post, THE Metadata_System SHALL include the blog post title in the page title tag

4.6. THE Metadata_System SHALL not use identical title tags on multiple pages

4.7. THE Metadata_System SHALL not use identical meta descriptions on multiple pages

### Requirement 5: Canonical URL Declaration

**User Story:** As a search engine crawler, I want explicit canonical URL tags on all pages, so that I can identify the preferred version of each page and consolidate ranking signals.

#### Acceptance Criteria

5.1. THE Metadata_System SHALL include a canonical link tag in the HTML head of every page

5.2. WHEN the Metadata_System generates a canonical URL, THE Metadata_System SHALL use the https protocol

5.3. WHEN the Metadata_System generates a canonical URL, THE Metadata_System SHALL use the non-www domain (prioritydispatchllc.com)

5.4. WHEN the Metadata_System generates a canonical URL, THE Metadata_System SHALL exclude trailing slashes from the URL path

5.5. WHEN the Metadata_System generates a canonical URL for the homepage, THE Metadata_System SHALL use https://prioritydispatchllc.com as the canonical URL

5.6. WHEN a page has an existing canonical URL specified in metadata, THE Metadata_System SHALL render that canonical URL in the HTML output

### Requirement 6: Robots Meta Tag Verification

**User Story:** As a search engine crawler, I want pages to be explicitly allowed for indexing, so that I can include the site content in search results without uncertainty.

#### Acceptance Criteria

6.1. THE Metadata_System SHALL not include robots meta tags with noindex directive on indexable pages

6.2. IF a robots meta tag is present on a page, THEN THE Metadata_System SHALL ensure the robots tag allows indexing with "index, follow" directives

6.3. WHEN the Robots_File is requested at /robots.txt, THE Robots_File SHALL return HTTP status code 200

6.4. WHEN the Robots_File is generated, THE Robots_File SHALL allow all user agents to crawl all paths

6.5. WHEN the Robots_File is generated, THE Robots_File SHALL reference the sitemap at https://prioritydispatchllc.com/sitemap.xml

### Requirement 7: Feed Endpoint Handling

**User Story:** As a search engine crawler, I want proper HTTP responses for feed endpoints, so that I can correctly interpret the site structure without encountering broken links.

#### Acceptance Criteria

7.1. WHEN a request is made to /feed/, THE Redirect_Manager SHALL return HTTP status code 301 or 404

7.2. WHEN a request is made to /wp-sitemap.xml, THE Redirect_Manager SHALL return HTTP status code 404

7.3. IF the site does not provide RSS feeds, THEN THE Redirect_Manager SHALL return HTTP status code 404 for feed requests

7.4. IF RSS feed functionality is implemented, THEN THE Redirect_Manager SHALL redirect /feed/ to the RSS feed endpoint with HTTP status code 301

7.5. WHEN a 404 response is returned, THE Redirect_Manager SHALL serve a custom 404 page with HTTP status code 404

### Requirement 8: Search Console Sitemap Submission

**User Story:** As a site owner, I want documentation for submitting the fixed sitemap to Google Search Console, so that I can expedite the re-crawling and indexing of all site pages.

#### Acceptance Criteria

8.1. THE documentation SHALL include instructions for accessing Google Search Console

8.2. THE documentation SHALL include the sitemap URL to submit (https://prioritydispatchllc.com/sitemap.xml)

8.3. THE documentation SHALL include steps for triggering a manual sitemap resubmission

8.4. THE documentation SHALL include steps for requesting URL re-indexing through Google Search Console

8.5. THE documentation SHALL include expected timeline for sitemap processing (typically 1-7 days)

8.6. THE documentation SHALL include verification steps to confirm the sitemap was successfully processed

### Requirement 9: Production Deployment Verification

**User Story:** As a site owner, I want verification steps for production deployment, so that I can confirm all SEO fixes are working correctly in the live environment.

#### Acceptance Criteria

9.1. THE documentation SHALL include steps to verify sitemap.xml returns HTTP status code 200

9.2. THE documentation SHALL include steps to verify www subdomain redirects to non-www with HTTP status code 301

9.3. THE documentation SHALL include steps to verify trailing slash redirects return HTTP status code 301

9.4. THE documentation SHALL include steps to verify unique title tags on homepage and blog index using view-source or browser inspector

9.5. THE documentation SHALL include steps to verify canonical tags are present on all pages

9.6. THE documentation SHALL include steps to verify robots.txt is accessible and contains sitemap reference

9.7. THE documentation SHALL include steps to test sitemap validity using online XML sitemap validators

9.8. THE documentation SHALL include steps to verify no pages return server errors (500) when accessed
