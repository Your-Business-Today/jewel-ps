# Jewel Property Serve — website

The new **jewelps.co.uk**, built with SvelteKit 2 + Svelte 5 + Tailwind CSS v3 and deployed on Vercel.
Follows the Jewel Enterprise Brand Guidelines 2026 (PS Blue `#135EAA`, Jewel Gold `#C09A51`, PS Grey `#BBBBBB`; Switzer for headings, Geom Graphic for body).

## Pages

| Route | What's there |
| --- | --- |
| `/` | Sticky parallax hero the page slides over, services, intro + count-up stats, scroll-progress process, trades index, testimonials, Ecologi, CTA |
| `/about` | Story, mission, CEO quote, four brand values, Ecologi, testimonials |
| `/refurbishment` | Kitchens, bathrooms, carpentry & joinery, tiling, decoration |
| `/maintenance` | All 17 maintenance services, managing-agent support |
| `/emergency` | 24/7 emergency callout: leaks, roof repairs, make-safe, board-up, drying |
| `/insurance-claims` | How Jewel handles insurance claims, for insurers and loss adjusters |
| `/managing-agents` | Portfolio maintenance for managing agents and block managers, Chiltern Court |
| `/fire-flood-restoration` | Restoration services, four-step claims process |
| `/contact` | Contact cards, map, enquiry form (server action), FAQs |
| `/brochure` | The active brochure from the admin builder, viewable as A4 pages + "Download PDF" |
| `/rtw` | Right to Work check tool (internal compliance; noindex, blocked in robots.txt) |
| `/privacy` | Privacy notice |
| `/sitemap.xml`, `/robots.txt` | Generated |

Old Webflow URLs (`/about-us-jewel-property-serve.html` etc.) 301-redirect to the new routes via `vercel.json`.

## Where things live

- **All copy & data** — `src/lib/site.js` (nav, services, testimonials, FAQs, contact details).
- **Brand colours / fonts** — `tailwind.config.js` and `src/app.css`.
- **Motion** — `src/lib/motion.js` (`reveal`, `parallax`, `countUp` actions + lazy-loaded GSAP). Everything respects `prefers-reduced-motion`.
- **Header / footer / mobile menu / sticky call bar** — `src/routes/+layout.svelte`.
- **Shared sections** — `src/lib/components/` (PageHero, Testimonials, CtaBand, Faq, Accreditations, Seo, Icon, Facets).
- **Logos** — `static/images/logos/` (from the official logo pack).
- **Photography** — `static/images/photos/` (self-hosted asset library recovered from the old Webflow site); the picker groups live in `src/lib/data/photos.js`.
- **Brochure builder** — templates & default content in `src/lib/brochure/`, A4 page renderers in `src/lib/components/brochure/`, data access in `src/lib/server/brochures.js`, PDF rendering in `src/lib/server/pdf.js`.
- **Admin area** — `src/routes/admin/` (see below); shared admin look in `src/routes/admin/admin.css`, auth in `src/lib/server/auth.js`, Supabase client + storage in `src/lib/server/db.js`.

## Admin area

There's a full admin at **`/admin`** (discreet link in the footer, `noindex`, blocked in `robots.txt`) — the same
structure and look as the jewelbb.co.uk admin:

- **Enquiries** — every contact-form submission is stored in Supabase and shown as an inbox: unread badge, open to read
  (marks it read), reply-by-email, archive/restore, delete, pagination. Each submission is also emailed to
  `enquiries@jewelps.co.uk` via Resend, so you get both.
- **Media** — a photo library backed by Supabase Storage (public `media` bucket). Photos upload straight to storage at
  full resolution via short-lived signed URLs (sidesteps Vercel's ~4.5 MB body cap), and every image the site ships
  with is browsable too, with copy-URL everywhere.
- **Brochures** — the full brochure builder from jewelbb.co.uk, redesigned for the PS brand. Compose print-quality A4
  brochures page by page from designed templates (cover, introduction, services, process, case-study spreads, gallery,
  team, testimonials, back cover), with a live A4 preview and the media picker on every image field. Keep brochures in
  draft and make one **active** — that's what visitors see at `/brochure` and download as a PDF. PDFs are rendered
  server-side with headless Chromium (`puppeteer-core` + `@sparticuz/chromium`), so the output is identical to the
  designed pages every time. A new brochure can be seeded from the built-in Jewel PS layout, which is also the fallback
  shown at `/brochure` before anything is published.
- **RTW checks** — every Right to Work check completed at `/rtw` (Jeremy's guided check tool, entity `JPS`) is logged
  to a register viewable here; the tool's copy-row and print outputs are unchanged.
- **Login** — one shared username/password from env vars, held in a signed `httpOnly` cookie for 8 hours. No accounts
  table, no third-party auth. Rate-limited against brute force (see *Security* below).
- **Supabase** — talked to over plain `fetch` with the service-role key (no SDK). Tables have RLS enabled with no
  policies, so nothing is reachable with the public anon key.

If Supabase isn't configured the public site is unaffected: the form still delivers via the webhook, `/brochure` shows
the built-in default, and the dashboard explains what's missing.

**Setup (once):**

1. In the Jewel PS Supabase project's **SQL Editor**, run `supabase/schema.sql` (enquiries + login-attempt log),
   `supabase/2026-08-26-admin.sql` (media bucket, brochures, RTW register) and
   `supabase/2026-09-04-security-hardening.sql` (locks the public API roles out, adds the login-attempt log to an
   existing database). *The first two have already been applied to the live `jewel-ps` project; run the hardening
   script there once — it's safe on live data.* (Existing database? Don't re-run `schema.sql` — see *Database
   migrations* below.)
2. **Project Settings → API**: copy the **Project URL** and **service_role** key into `SUPABASE_URL` /
   `SUPABASE_SERVICE_ROLE_KEY` (locally in `.env`, and on Vercel). The service-role key bypasses RLS — server only,
   never commit it.
3. Set `ADMIN_USERNAME` / `ADMIN_PASSWORD` (and ideally a random `ADMIN_SESSION_SECRET`) for the login.
4. Redeploy, then sign in at `/admin`.

**PDF generation** — on Vercel nothing to configure (`@sparticuz/chromium` is bundled; the routes set
`maxDuration: 60`). Locally it uses an installed Chrome/Chromium automatically, or set `PDF_CHROME_PATH`.

### Database migrations

`schema.sql` is for a **fresh** database. On the live database, apply changes with the dated, standalone files in
`supabase/` instead — each is additive, idempotent and safe to re-run:

| File | Adds |
| --- | --- |
| `2026-08-26-admin.sql` | `media` storage bucket, `brochures` + `brochure_pages` (brochure builder), `rtw_submissions` (RTW register) |
| `2026-09-04-security-hardening.sql` | RLS on every table, public API roles revoked, `admin_login_attempts` table (see *Security*) |

Those files were run by hand and stay where they are. **New migrations go in `migrations/`** at the repository root,
named `YYYY-MM-DD-<what-it-does>.sql`: when a pull request merges, the `run migrations` workflow
(`.github/workflows/run-migrations.yml`, `scripts/run-added-migrations.sh`) runs every file the merge added there, in
filename order and one transaction each, against the repository secret `SUPABASE_DB_URL`. Nothing under `supabase/` is
ever run by it, and a file already on `main` never runs again.

## Security

**Database.** Every table has row-level security enabled with **no policies**. The site's server code authenticates
with the `service_role` key, which bypasses RLS; the public `anon`/`authenticated` keys are never used and see nothing.
As a second layer, `2026-09-04-security-hardening.sql` also revokes the table privileges Supabase grants those public
roles by default (and stops future tables getting them), so even if RLS were switched off by mistake the public keys
still couldn't read or write anything. The script ends with a report — every table should show `rls_enabled = true`,
`policies = 0`, `anon_access = false`, `service_role_access = true`. If a table is ever meant to be read with the anon
key, it needs both a policy *and* an explicit `grant select on public.<table> to anon`. The public `media` storage
bucket is unaffected — uploaded photos keep serving as before.

**Admin area (`/admin`).** Guarded in `src/hooks.server.js` for every request whose path starts with `/admin` (except
the login page): the `jps_admin` cookie must carry a valid, unexpired HMAC-SHA256 signature. The cookie is `HttpOnly`,
`Secure`, `SameSite=Lax` and lasts 8 hours; SvelteKit's built-in origin check protects the login/logout forms from
CSRF. Credentials and signatures are compared in constant time. The login is rate-limited — after **5 failed attempts
from one IP within 15 minutes** further attempts are refused until the window passes (attempts are logged in
`admin_login_attempts`, so the limit survives redeploys; a wrong password also costs a one-second delay). Every
`/admin` response is sent with `Cache-Control: no-store`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`,
`Referrer-Policy: same-origin` and `X-Robots-Tag: noindex`. Failed and refused logins appear in the Vercel function
logs as `Admin login failed for <ip>` / `Admin login refused for <ip>`.

To sign every admin out at once (e.g. after a shared laptop goes missing), change `ADMIN_SESSION_SECRET` in Vercel and
redeploy.

## Launch checklist

1. **Photography** — ✅ done: the full image library from the old site now lives in `static/images/photos/` and
   `VITE_IMG_BASE=/images/photos` is set in `.env` — remember to set the same variable in Vercel so the deployed site
   self-hosts too. (`scripts/fetch-assets.sh` remains only as a fallback.)
2. **Contact form email** — enquiries are emailed via [Resend](https://resend.com) (the `jewelps.co.uk` domain is
   verified there). Set `RESEND_API_KEY` in Vercel → Settings → Environment Variables; optionally `CONTACT_TO_EMAIL`
   (default `enquiries@jewelps.co.uk`) and `CONTACT_FROM_EMAIL` (default `website@jewelps.co.uk` — must be on the
   verified domain). Emails have Reply-To set to the enquirer, so replying answers them directly. The old
   `FORM_WEBHOOK_URL` (n8n) path still works as an optional extra. With nothing configured, the form shows an
   "email us instead" fallback with a pre-filled mailto.
3. **Geom Graphic** — the licensed body font isn't in the repo; Outfit is the stand-in. Drop the `.woff2` files into `static/fonts/` and uncomment the `GEOM` block at the top of `src/app.css`.
4. **Terms & conditions** — `static/documents/terms-and-conditions.pdf` is a client-facing Terms of Business (v1.0, Aug 2026) written for the new site; the source is `scripts/terms-and-conditions.html` — edit it and re-export to PDF from a browser (Print → Save as PDF, A4, background graphics on). Have it checked before launch.
5. **Domain** — point `jewelps.co.uk` at Vercel under Project → Settings → Domains.
6. **Google Analytics** — set `PUBLIC_GA_MEASUREMENT_ID` (the GA4 Measurement ID, `G-…`) in Vercel → Settings →
   Environment Variables and redeploy. Until it is set nothing loads and no banner shows. Once set, visitors are asked
   once whether they accept analytics cookies (`src/lib/components/analytics/`); Google's tag loads only after they
   accept, and "Cookie choices" in the footer lets them change their mind. Two events are sent: `generate_lead` when the
   contact form is sent and `phone_tap` when a phone number is tapped, each with the page it happened on. Mark
   `generate_lead` as a key event in GA4 so it counts as a conversion. The privacy notice must describe the analytics
   before the variable is set.

The business details Google reads (address, phone, office hours, 24/7 emergency line, areas served and every service)
are LocalBusiness structured data built from `src/lib/site.js` by `src/lib/seo/` and rendered on every public page.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build
npm run preview      # builds, then serves the production build on http://localhost:4173
npm run check        # svelte-check (passes with 0 errors)
```

Copy `.env.example` to `.env` for local environment variables.

## Deploy to Vercel

Push to GitHub, import the repo in Vercel (framework auto-detects as SvelteKit), add the environment variables above, deploy.

<!-- code-quality:start -->
## Code quality

<table><tr><td align="center">
<strong>Code quality score</strong><h2>81.6%</h2>
<sub>measured 2026-11-02 · project-process kit 1.40.0</sub>
</td></tr></table>

427 files · frontend 201 · tooling 106 · shared 41 · backend 22 · docs 16 · tests 15 · infrastructure 14 · api 7 · database 3 · other 2

<details>
<summary><strong>How the 81.6% is made up</strong></summary>

| Element | Reading | Score | Weight | 0% at |
| --- | --- | --- | --- | --- |
| **Standard baseline checks** | | **78.9%** | **60** | |
| Files over the line limit | 24 in 179 files | 73.2% | 10 | 50% of files |
| Worst file, in limits over | 2.79 | 69.0% | 5 | 9 |
| Functions over the line limit | 6 in 169 functions | 85.8% | 8 | 25% of functions |
| Else blocks | 3 in 292 branches | 97.9% | 5 | 50% of branches |
| Duplication % | 0.78 | 96.1% | 8 | 20 |
| Explanatory comment lines | 101 in 11.66 thousand lines | 82.7% | 4 | 50 per thousand lines |
| Inline magic values | 76 in 11.66 thousand lines | 67.4% | 4 | 20 per thousand lines |
| Orphan components and functions | 11 in 251 components and functions | 56.2% | 4 | 10% of components and functions |
| Long member chain lines | 54 in 11.66 thousand lines | 84.6% | 4 | 30 per thousand lines |
| Deeply indented lines | 219 in 11.66 thousand lines | 37.4% | 4 | 30 per thousand lines |
| Overlong function names | 0 in 169 functions | 100.0% | 4 | 10% of functions |
| **Design pattern file count** | | **100.0%** | **10** | |
| Files the patterns predict but are missing | 0 in 11 predicted files | 100.0% | 10 | 50% of predicted files |
| Entities outside their expected file count | not measured | not measured | — | 50% of entities |
| **Prose** | | **80.3%** | **20** | |
| Conditions with calls tangled inside calls | 12 in 292 branches | 83.6% | 8 | 25% of branches |
| Conditions compared to a raw literal | 32 in 292 branches | 56.2% | 6 | 25% of branches |
| Accessor names that want to be a property | 0 in 169 functions | 100.0% | 6 | 10% of functions |
| **Widget adoption** | | **not measured** | **0** | |
| Markup written by hand where a widget should be | not measured | not measured | — | 50% of widget slots |
| **Input validation** | | **not measured** | **0** | |
| Doors that write without checking their input against the columns | not measured | not measured | — | 50% of write doors |

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json`.

</details>

<details>
<summary><strong>The repository by area: 427 files</strong></summary>

| Area | Files | Of which audited source | Source lines |
| --- | --- | --- | --- |
| frontend | 201 | 108 | 7,181 |
| tooling | 106 | 0 | 0 |
| shared | 41 | 41 | 2,336 |
| backend | 22 | 22 | 1,901 |
| docs | 16 | 0 | 0 |
| tests | 15 | 0 | 0 |
| infrastructure | 14 | 0 | 0 |
| api | 7 | 7 | 234 |
| database | 3 | 0 | 0 |
| other | 2 | 1 | 4 |
| **whole repository** | **427** | **179** | **11,656** |

</details>

<details>
<summary><strong>The refactoring plan: 34 steps, in order</strong></summary>

**Pass 2 — Component breakout**

1. Break `src/routes/admin/brochure/[id]/+page.svelte` (379 lines) into components. Component-sized blocks: lines 23–57 (35 lines); lines 59–76 (18 lines); lines 78–127 (50 lines, taking pageTitle).
2. Break `src/routes/admin/brochure/+page.svelte` (312 lines) into components. Component-sized blocks: lines 21–33 (13 lines); lines 53–78 (26 lines); lines 80–136 (57 lines, taking fmtDate).
3. Break `src/routes/admin/media/+page.svelte` (301 lines) into components. Component-sized blocks: lines 64–79 (16 lines, taking uploadFiles); lines 104–145 (42 lines); lines 147–163 (17 lines).
4. Break `src/routes/+page.svelte` (282 lines) into components. Component-sized blocks: lines 73–110 (38 lines); lines 115–155 (41 lines); lines 158–191 (34 lines); lines 194–220 (27 lines).
5. Break `src/routes/admin/rtw/+page.svelte` (253 lines) into components. Component-sized blocks: lines 43–118 (76 lines, taking ukDate, ukDateTime, outcomeClass).
6. Break `src/lib/components/admin/ImagePicker.svelte` (241 lines) into components. Component-sized blocks: lines 62–128 (67 lines, taking pick, uploadFiles).
7. Break `src/routes/admin/+layout.svelte` (207 lines) into components. Component-sized blocks: lines 26–58 (33 lines, taking isActive).
8. Break `src/routes/+layout.svelte` (203 lines) into components. Component-sized blocks: lines 55–93 (39 lines); lines 101–113 (13 lines); lines 129–191 (63 lines).
9. Break `src/routes/admin/login/+page.svelte` (179 lines) into components. Component-sized blocks: lines 13–66 (54 lines).
10. Break `src/lib/components/brochure/PageProjectDetail.svelte` (155 lines) into components. Component-sized blocks: lines 15–57 (43 lines).

… and 24 more steps. The whole plan, with the measured detail, is in [`tools/refactor/refactor-plan.md`](tools/refactor/refactor-plan.md).

</details>

<!-- code-quality:end -->
