# Refactoring plan

Written by the code quality check at a score of 89.7%. These are the steps a refactor of this repository follows, in this order; a round takes the next steps from the top. The plan is measured, so a finished step is gone the next time the check runs. The facts are measured; the judgement is the round's.

## The order

**Pass 2 — Component breakout**

1. Break `src/routes/admin/+layout.svelte` (212 lines) into components. Component-sized blocks: lines 31–63 (33 lines, taking isActive).
2. Break `src/routes/+layout.svelte` (202 lines) into components. Component-sized blocks: lines 55–93 (39 lines); lines 101–113 (13 lines); lines 129–190 (62 lines).
3. Break `src/lib/components/admin/ImagePicker.svelte` (195 lines) into components. Component-sized blocks: lines 31–91 (61 lines, taking pick).
4. Break `src/routes/admin/login/+page.svelte` (179 lines) into components. Component-sized blocks: lines 13–66 (54 lines).
5. Break `src/lib/components/brochure/PageProjectDetail.svelte` (155 lines) into components. Component-sized blocks: lines 15–57 (43 lines).
6. Break `src/lib/components/brochure/PageBackCover.svelte` (140 lines) into components. Component-sized blocks: lines 6–47 (42 lines).
7. Break `src/lib/components/brochure/PageTeam.svelte` (127 lines) into components. Component-sized blocks: lines 14–44 (31 lines).
8. Break `src/routes/about/+page.svelte` (122 lines) into components. Component-sized blocks: lines 31–54 (24 lines); lines 57–81 (25 lines); lines 84–97 (14 lines); lines 100–116 (17 lines).
9. Break `src/routes/fire-flood-restoration/+page.svelte` (112 lines) into components. Component-sized blocks: lines 35–62 (28 lines); lines 65–86 (22 lines); lines 89–106 (18 lines).

**Pass 3 — Utility function identification**

10. Remove the 11 components and functions nothing calls. Listed in audit.json under details.orphans and details.inventory.offenders.orphans; confirm each has no caller before it goes.

**Pass 4 — Design pattern identification**

11. Divide `src/lib/site.js` (321 lines) into the units its pattern names. 0 functions; the longest is 0 lines.
12. Divide `src/lib/server/brochures.js` (316 lines) into the units its pattern names. 19 functions; the longest is 20 lines.
13. Divide `src/lib/brochure/templates.js` (282 lines) into the units its pattern names. 1 functions; the longest is 3 lines.
14. Divide `src/lib/server/db.js` (230 lines) into the units its pattern names. 16 functions; the longest is 19 lines.
15. Divide `src/lib/brochure/defaults.js` (186 lines) into the units its pattern names. 1 functions; the longest is 168 lines.
16. Divide `src/lib/motion.js` (168 lines) into the units its pattern names. 8 functions; the longest is 26 lines.
17. Divide `src/lib/server/auth.js` (154 lines) into the units its pattern names. 13 functions; the longest is 13 lines.
18. Divide `src/lib/server/email.js` (121 lines) into the units its pattern names. 4 functions; the longest is 83 lines.
19. Divide `src/lib/server/login-attempts.js` (113 lines) into the units its pattern names. 4 functions; the longest is 25 lines.

**Pass 5 — The sweep to zero**

20. Conditions compared to a raw literal: 27 to zero. Scores 74.2% at weight 6; the offenders are in audit.json under details.conditions, fifty at a time.
21. Inline magic values: 62 to zero. Scores 79.2% at weight 4; the offenders are in audit.json under details.magicValues, fifty at a time.
22. Deeply indented lines: 83 to zero. Scores 81.4% at weight 4; the offenders are in audit.json under details.prose, fifty at a time.
23. Explanatory comment lines: 88 to zero. Scores 88.2% at weight 4; the offenders are in audit.json under details.comments, fifty at a time.
24. Long member chain lines: 52 to zero. Scores 88.4% at weight 4; the offenders are in audit.json under details.prose, fifty at a time.
25. Functions over the line limit: 7 to zero. Scores 90.4% at weight 8; the offenders are in audit.json under details.functionShape, fifty at a time.
26. Conditions with calls tangled inside calls: 10 to zero. Scores 90.4% at weight 8; the offenders are in audit.json under details.conditions, fifty at a time.
27. Else blocks: 3 to zero. Scores 98.6% at weight 5; the offenders are in audit.json under details.functionShape, fifty at a time.
28. Duplication %: 0.28 to zero. Scores 98.6% at weight 8; the offenders are in audit.json under details.duplication, fifty at a time.

## The detail behind the first targets

### `src/lib/site.js` — 321 lines

### `src/lib/server/brochures.js` — 316 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| listBrochures | 45 | 15 | `src/routes/admin/brochure/+page.server.js` | — |
| getBrochure | 65 | 13 | `src/routes/admin/brochure/[id]/+page.server.js`, `src/routes/admin/brochure/[id]/page/[pageId]/+page.server.js`, `src/routes/admin/brochure/[id]/pdf/+server.js`, `src/routes/brochure/print/[id]/+page.server.js` | — |
| getActiveBrochure | 83 | 18 | `src/routes/brochure/+page.server.js`, `src/routes/brochure/pdf/+server.js` | — |
| fallbackBrochure | 106 | 20 | `src/routes/brochure/+page.server.js`, `src/routes/brochure/print/[id]/+page.server.js` | — |
| createBrochure | 134 | 17 | `src/routes/admin/brochure/+page.server.js` | — |
| duplicateBrochure | 156 | 16 | `src/routes/admin/brochure/+page.server.js` | — |
| touchBrochure | 174 | 3 | — | — |
| setActiveBrochure | 182 | 4 | `src/routes/admin/brochure/+page.server.js`, `src/routes/admin/brochure/[id]/+page.server.js` | — |
| setDraftBrochure | 188 | 3 | `src/routes/admin/brochure/+page.server.js`, `src/routes/admin/brochure/[id]/+page.server.js` | — |
| deleteBrochure | 193 | 3 | `src/routes/admin/brochure/+page.server.js`, `src/routes/admin/brochure/[id]/+page.server.js` | — |
| nextSortOrder | 200 | 3 | — | — |
| addPage | 210 | 14 | `src/routes/admin/brochure/[id]/+page.server.js` | — |
| addProjectPages | 229 | 5 | `src/routes/admin/brochure/[id]/+page.server.js` | — |
| updatePage | 240 | 4 | `src/routes/admin/brochure/[id]/page/[pageId]/+page.server.js` | — |
| deletePage | 249 | 4 | `src/routes/admin/brochure/[id]/+page.server.js`, `src/routes/admin/brochure/[id]/page/[pageId]/+page.server.js` | — |
| duplicatePage | 258 | 12 | `src/routes/admin/brochure/[id]/+page.server.js` | — |
| movePage | 277 | 14 | `src/routes/admin/brochure/[id]/+page.server.js` | — |
| siteImageLibrary | 300 | 3 | `src/routes/admin/brochure/[id]/page/[pageId]/+page.server.js` | — |
| uploadedImageLibrary | 308 | 9 | `src/routes/admin/+page.server.js`, `src/routes/admin/brochure/[id]/page/[pageId]/+page.server.js` | — |

### `src/lib/brochure/templates.js` — 282 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| templateName | 276 | 3 | `src/lib/components/admin/brochure-editor/BrochurePageRow.svelte` | — |

### `src/lib/server/db.js` — 230 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| baseUrl | 26 | 3 | — | — |
| serviceKey | 30 | 3 | — | — |
| dbConfigured | 34 | 3 | `src/lib/server/accreditations-store.js`, `src/lib/server/admin-record-actions.js`, `src/lib/server/brochures.js`, `src/lib/server/login-attempts.js` +20 | — |
| headers | 39 | 8 | — | — |
| restUrl | 49 | 3 | — | — |
| check | 57 | 7 | — | — |
| dbSelect | 71 | 5 | `src/lib/server/accreditations-store.js`, `src/lib/server/brochures.js`, `src/lib/server/login-attempts.js`, `src/lib/server/projects-store.js` +6 | — |
| dbCount | 82 | 10 | `src/routes/admin/+layout.server.js`, `src/routes/admin/+page.server.js`, `src/routes/admin/enquiries/+page.server.js`, `src/routes/admin/rtw/+page.server.js` | — |
| dbInsert | 99 | 10 | `src/lib/server/accreditations-store.js`, `src/lib/server/brochures.js`, `src/lib/server/login-attempts.js`, `src/lib/server/projects-store.js` +5 | — |
| dbUpdate | 115 | 8 | `src/lib/server/accreditations-store.js`, `src/lib/server/brochures.js`, `src/lib/server/projects-store.js`, `src/routes/admin/brochure/[id]/+page.server.js` +1 | — |
| dbUpdateWhere | 130 | 8 | `src/lib/server/brochures.js` | — |
| dbDelete | 143 | 7 | `src/lib/server/accreditations-store.js`, `src/lib/server/brochures.js`, `src/lib/server/projects-store.js`, `src/routes/admin/enquiries/+page.server.js` | — |
| dbDeleteWhere | 157 | 8 | `src/lib/server/login-attempts.js`, `src/lib/server/site-photos-store.js`, `src/lib/server/site-text-store.js` | — |
| storageSignedUpload | 177 | 16 | `src/routes/admin/api/media/+server.js` | — |
| storageList | 200 | 19 | `src/lib/server/brochures.js`, `src/routes/admin/accreditations/+page.server.js`, `src/routes/admin/media/+page.server.js`, `src/routes/admin/photos/+page.server.js` +1 | — |
| storageDelete | 224 | 7 | `src/routes/admin/media/+page.server.js` | — |

### `src/routes/admin/+layout.svelte` — 212 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<div class="admin" class:admin--login={onLogin}>` | 33 | 31–63 | isActive |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| isActive | 22 | 3 | — | — |

### `src/routes/+layout.svelte` — 202 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<header class="{isAdmin ? 'relative z-50 bg-night' : `fixed inset-x-0 top-0 z-50` | 39 | 55–93 | — |
| `<nav class="container-site flex flex-1 flex-col justify-center" aria-label="Mobi` | 13 | 101–113 | — |
| `<footer class="relative border-t border-white/[0.06] bg-night text-grey">` | 62 | 129–190 | — |

### `src/lib/components/admin/ImagePicker.svelte` — 195 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `{#if open}` | 61 | 31–91 | pick |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| pick | 25 | 4 | — | — |

### `src/lib/brochure/defaults.js` — 186 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| defaultBrochurePages | 19 | 168 | `src/lib/server/brochures.js` | — |

### `src/routes/admin/login/+page.svelte` — 179 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<div class="login">` | 54 | 13–66 | — |

### `src/lib/motion.js` — 168 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| getGsap | 14 | 13 | `src/lib/components/home/HomeHero.svelte`, `src/lib/components/home/HomeProcess.svelte` | — |
| prefersReducedMotion | 28 | 3 | `src/lib/components/home/HomeHero.svelte`, `src/lib/components/home/HomeProcess.svelte`, `src/lib/jewel/jewel-support.js` | — |
| initMotionPreference | 33 | 7 | `src/routes/+layout.svelte` | — |
| getRevealObserver | 43 | 16 | — | — |
| reveal | 65 | 15 | `src/lib/components/Accreditations.svelte`, `src/lib/components/BrochureOffer.svelte`, `src/lib/components/CtaBand.svelte`, `src/lib/components/Faq.svelte` +24 | — |
| parallax | 87 | 23 | `src/lib/components/PageHero.svelte`, `src/lib/components/Testimonials.svelte`, `src/lib/components/about/EcologiSection.svelte`, `src/lib/components/home/HomeEcologi.svelte` +5 | — |
| countUp | 117 | 26 | `src/lib/components/home/HomeIntro.svelte` | — |
| splitWords | 149 | 20 | `src/lib/components/home/HomeHero.svelte` | — |
