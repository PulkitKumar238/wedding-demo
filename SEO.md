# SEO — Click Weds

What has been built into the site, what still needs real data, and the
off‑site work that has to happen for the site to rank for competitive terms.

---

## 1. What the code now does

### Crawlability
- `src/app/robots.ts` → `/robots.txt` — allows everything except `/api/`, points at the sitemap, declares the canonical host.
- `src/app/sitemap.ts` → `/sitemap.xml` — every URL, generated from the same data the pages use. Wedding URLs include `<image:image>` entries.
- `src/app/opengraph-image.tsx` — a branded 1200×630 fallback share card. Individual pages override it with a real photo.

### Metadata (every route)
- Correct `metadataBase` (`https://clickweds.com`, override per‑environment with `NEXT_PUBLIC_SITE_URL`).
- Unique `<title>` + `<meta name="description">` per page.
- Self‑referencing `<link rel="canonical">` on every page.
- `max-image-preview:large` — lets Google show full‑size photo thumbnails in results.
- Open Graph + Twitter card tags on every page.
- Google Search Console verification wired to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (see §3).

### Structured data (JSON‑LD)
| Where | Schema |
|---|---|
| Global (`layout.tsx`) | `LocalBusiness` + `ProfessionalService` (NAP, geo, price band, `areaServed`, `sameAs`), `WebSite`, `OfferCatalog` of all 9 packages with INR prices |
| `/packages` | `BreadcrumbList`, `ItemList` of `Service` + `Offer` (price rich‑result eligible) |
| `/services` + `/services/[slug]` | `BreadcrumbList`, `Service` per craft, linked `Offer`s |
| `/films` + wedding pages with a film | `VideoObject` per film |
| `/weddings/[slug]` | `BreadcrumbList`, `ImageGallery`, `Review` (the couple's words) |
| `/wedding-photography-lucknow` | `BreadcrumbList`, `WebPage`, `FAQPage` |

### New indexable pages (was 2 URLs, now 32)
- `/weddings` + 10 × `/weddings/[couple]` — real galleries (18 photos, descriptive alt text), the couple's testimonial, embedded film where one exists.
- `/services` + 8 × `/services/[slug]` — one page per craft, targeting "candid wedding photographer Lucknow", "wedding drone photography Lucknow", etc.
- `/films` — all 7 films, real thumbnails, `VideoObject` markup.
- `/wedding-photography-lucknow` — the primary local landing page: deep copy, service links, featured Lucknow weddings, package prices, visible FAQ.

### Internal linking
- Footer "Explore" column links every new hub from every page.
- "View all weddings →" / "Explore all services →" links added to the home sections.
- Services ↔ packages ↔ weddings cross‑link.

---

## 2. Data that still needs to be made real

| Item | Where | Why it matters |
|---|---|---|
| **Exact studio geo‑coordinates** | `src/data/site.ts` → `brand.geo` | Currently the Hazratganj locality centroid. Drop the exact pin from the studio's verified Google Business Profile. A wrong pin hurts local ranking. |
| **Street address + PIN** | `src/data/site.ts` → `brand.postal.streetAddress` / `postalCode` | Only "Hazratganj" / "226001" placeholder. Must match the Google Business Profile character‑for‑character. |
| **Review star ratings** | `src/lib/seo.ts` → `REVIEWS_HAVE_RATINGS` | The 10 testimonials have no star rating, so `Review` markup is emitted without one and there is **no `aggregateRating`** — safe, but no ⭐ in results. Set the flag to `true` only once the studio confirms every testimonial is genuinely 5★, or replace the section with real rated Google reviews. |
| **Film upload dates** | `src/data/site.ts` → `films`, then `VideoObject` in `/films` + wedding pages | `VideoObject.uploadDate` (ISO 8601) is required for video rich results and is currently omitted (marked `TODO`). |
| **YouTube channel URL** | `src/data/site.ts` → `brand.sameAs` | Add the studio's YouTube channel to `sameAs` once confirmed. |
| **Wedding dates / venues** | `src/data/pages.ts` | Left deliberately vague (city only). If the studio confirms venues/months, add them to each wedding's `intro` — venue names are strong long‑tail keywords. |

---

## 3. Launch checklist (do these when `clickweds.com` goes live)

1. **Connect the domain** in Vercel and point DNS. Nothing ranks until the site is on `clickweds.com`.
2. **Google Search Console** — add the `clickweds.com` property.
   - Verify by DNS TXT record (preferred), **or** set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the Vercel project env and redeploy.
   - Submit `https://clickweds.com/sitemap.xml`.
   - Use "URL Inspection → Request indexing" on the homepage and `/wedding-photography-lucknow`.
3. **Bing Webmaster Tools** — import from Search Console in one click, submit the same sitemap.
4. **Validate structured data** — run the homepage, `/packages`, a wedding page and `/wedding-photography-lucknow` through:
   - <https://search.google.com/test/rich-results>
   - <https://validator.schema.org>
5. **Analytics** — add `@vercel/analytics` (`npm i @vercel/analytics`, mount `<Analytics />` in `layout.tsx`) or GA4. Not installed yet.
6. **PageSpeed** — run <https://pagespeed.web.dev> on the homepage. Watch the hero video's effect on LCP; if it's poor, drop to poster‑only on mobile.

---

## 4. Off‑site work — this is ~60% of ranking for "wedding photographer Lucknow"

The code cannot do any of this. Without it, the head local term will not reach the top 3.

### Google Business Profile (single biggest lever)
- Claim / verify the listing for the Hazratganj address.
- Primary category **Wedding Photographer**; add **Videographer**, **Photography Studio**.
- Fill every field: hours, service area (Lucknow, Varanasi, Kanpur), services, `clickweds.com` as the website, phone matching the site exactly.
- Upload 20+ real photos and keep posting.
- **Reviews are the ranking factor here** — ask every past couple for a Google review with a one‑tap link. Target 25+ in the first quarter, reply to each.

### Citations (consistent Name / Address / Phone everywhere)
Create or claim listings — NAP identical to the site:
- WedMeGood, WeddingWire India, ShaadiSaga, WeddingBazaar, Canvera
- Justdial, Sulekha, IndiaMART, 99acres‑style local directories
- Facebook Page, Instagram (link `clickweds.com` in bio)

### Backlinks
- Ask venues and planners the studio works with to list it as a preferred vendor with a link.
- Submit real weddings to blogs (WedMeGood real weddings, The Wedding Brigade, WeddingSutra) — each feature is a link + referral traffic.
- The films on YouTube: put `clickweds.com` in every video description.

### Content cadence
- Publish each new real wedding as a `/weddings/[couple]` page (the template is built — add photos + a copy block in `src/data/pages.ts`).
- Consider a `/journal` for venue guides ("Best wedding venues in Lucknow"), planning posts, etc. — these rank for research‑stage searches that lead to bookings.

---

## 5. Realistic timeline

| Term | Expectation |
|---|---|
| "Click Weds" / brand | #1 within days of indexing |
| Long‑tail ("candid wedding photographer Hazratganj", "wedding film studio Lucknow") | Top 3–5 in ~2–4 months with GBP + the pages above |
| "wedding photographer Lucknow" (head term) | Top 3 in ~4–8 months, and only with sustained reviews, citations and backlinks |

No agency can guarantee a position — Google's results are not for sale. What is in our control is being technically flawless and more useful than the competing sites, and that part is now done.
