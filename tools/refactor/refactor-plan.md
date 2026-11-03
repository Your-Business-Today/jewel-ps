# Refactoring plan

Written by the code quality check at a score of 81.6%. These are the steps a refactor of this repository follows, in this order; a round takes the next steps from the top. The plan is measured, so a finished step is gone the next time the check runs. The facts are measured; the judgement is the round's.

## The order

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
11. Break `src/routes/about/+page.svelte` (142 lines) into components. Component-sized blocks: lines 27–50 (24 lines); lines 53–77 (25 lines); lines 80–93 (14 lines); lines 96–112 (17 lines).
12. Break `src/lib/components/brochure/PageBackCover.svelte` (140 lines) into components. Component-sized blocks: lines 6–47 (42 lines).
13. Break `src/lib/components/brochure/PageTeam.svelte` (127 lines) into components. Component-sized blocks: lines 14–44 (31 lines).
14. Break `src/routes/fire-flood-restoration/+page.svelte` (112 lines) into components. Component-sized blocks: lines 36–63 (28 lines); lines 66–87 (22 lines); lines 90–107 (18 lines).

**Pass 3 — Utility function identification**

15. Remove the 11 components and functions nothing calls. Listed in audit.json under details.orphans and details.inventory.offenders.orphans; confirm each has no caller before it goes.

**Pass 4 — Design pattern identification**

16. Divide `src/lib/server/brochures.js` (316 lines) into the units its pattern names. 19 functions; the longest is 20 lines.
17. Divide `src/lib/site.js` (316 lines) into the units its pattern names. 0 functions; the longest is 0 lines.
18. Divide `src/lib/brochure/templates.js` (282 lines) into the units its pattern names. 1 functions; the longest is 3 lines.
19. Divide `src/lib/server/db.js` (230 lines) into the units its pattern names. 16 functions; the longest is 19 lines.
20. Divide `src/lib/brochure/defaults.js` (186 lines) into the units its pattern names. 1 functions; the longest is 168 lines.
21. Divide `src/lib/motion.js` (168 lines) into the units its pattern names. 8 functions; the longest is 26 lines.
22. Divide `src/lib/server/auth.js` (154 lines) into the units its pattern names. 13 functions; the longest is 13 lines.
23. Divide `src/lib/server/email.js` (121 lines) into the units its pattern names. 4 functions; the longest is 83 lines.
24. Divide `src/lib/server/login-attempts.js` (113 lines) into the units its pattern names. 4 functions; the longest is 25 lines.
25. Divide `src/routes/contact/+page.server.js` (111 lines) into the units its pattern names. 1 functions; the longest is 7 lines.

**Pass 5 — The sweep to zero**

26. Deeply indented lines: 219 to zero. Scores 37.4% at weight 4; the offenders are in audit.json under details.prose, fifty at a time.
27. Conditions compared to a raw literal: 32 to zero. Scores 56.2% at weight 6; the offenders are in audit.json under details.conditions, fifty at a time.
28. Inline magic values: 76 to zero. Scores 67.4% at weight 4; the offenders are in audit.json under details.magicValues, fifty at a time.
29. Explanatory comment lines: 101 to zero. Scores 82.7% at weight 4; the offenders are in audit.json under details.comments, fifty at a time.
30. Conditions with calls tangled inside calls: 12 to zero. Scores 83.6% at weight 8; the offenders are in audit.json under details.conditions, fifty at a time.
31. Long member chain lines: 54 to zero. Scores 84.6% at weight 4; the offenders are in audit.json under details.prose, fifty at a time.
32. Functions over the line limit: 6 to zero. Scores 85.8% at weight 8; the offenders are in audit.json under details.functionShape, fifty at a time.
33. Duplication %: 0.78 to zero. Scores 96.1% at weight 8; the offenders are in audit.json under details.duplication, fifty at a time.
34. Else blocks: 3 to zero. Scores 97.9% at weight 5; the offenders are in audit.json under details.functionShape, fifty at a time.

## The detail behind the first targets

### `src/routes/admin/brochure/[id]/+page.svelte` — 379 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<div class="head">` | 35 | 23–57 | — |
| `<div class="adders">` | 18 | 59–76 | — |
| `{#if pages.length === 0}` | 50 | 78–127 | pageTitle |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| pageTitle | 12 | 3 | — | — |

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

### `src/lib/site.js` — 316 lines

### `src/routes/admin/brochure/+page.svelte` — 312 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<div class="head">` | 13 | 21–33 | — |
| `{#if showCreate}` | 26 | 53–78 | — |
| `{#if data.brochures.length === 0 && !showCreate}` | 57 | 80–136 | fmtDate |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| fmtDate | 8 | 7 | — | — |

### `src/routes/admin/media/+page.svelte` — 301 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<div class="head">` | 16 | 64–79 | uploadFiles |
| `{#if data.configured && !data.dbError}` | 42 | 104–145 | — |
| `{#each data.groups as group (group.label)}` | 17 | 147–163 | — |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| uploadFiles | 17 | 28 | — | — |
| copyUrl | 47 | 11 | — | — |

### `src/lib/brochure/templates.js` — 282 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| templateName | 276 | 3 | `src/routes/admin/brochure/[id]/+page.svelte` | — |

### `src/routes/+page.svelte` — 282 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `<section class="sticky top-0 z-0 flex min-h-[100svh] flex-col justify-end overfl` | 38 | 73–110 | — |
| `<section id="services" class="py-20 sm:py-28">` | 41 | 115–155 | — |
| `<section class="border-t border-white/[0.06] py-20 sm:py-28">` | 34 | 158–191 | — |
| `<section bind:this={processSection} class="bg-night-2 py-20 sm:py-28">` | 27 | 194–220 | — |
| `<section class="py-20 sm:py-28">` | 21 | 223–243 | — |
| `<section class="py-20 sm:py-28">` | 15 | 249–263 | — |

### `src/routes/admin/rtw/+page.svelte` — 253 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `{#if !data.configured}` | 76 | 43–118 | ukDate, ukDateTime, outcomeClass |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| ukDate | 5 | 5 | — | — |
| ukDateTime | 12 | 7 | — | — |
| outcomeClass | 21 | 5 | — | — |

### `src/lib/components/admin/ImagePicker.svelte` — 241 lines

| Block opens with | Lines | Range | Functions that move with it |
| --- | --- | --- | --- |
| `{#if open}` | 67 | 62–128 | pick, uploadFiles |

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| pick | 26 | 4 | — | — |
| uploadFiles | 32 | 28 | — | — |

### `src/lib/server/db.js` — 230 lines

| Function | Line | Lines | Imported by | Same body also in |
| --- | --- | --- | --- | --- |
| baseUrl | 26 | 3 | — | — |
| serviceKey | 30 | 3 | — | — |
| dbConfigured | 34 | 3 | `src/lib/server/brochures.js`, `src/lib/server/login-attempts.js`, `src/routes/admin/+layout.server.js`, `src/routes/admin/+page.server.js` +9 | — |
| headers | 39 | 8 | — | — |
| restUrl | 49 | 3 | — | — |
| check | 57 | 7 | — | — |
| dbSelect | 71 | 5 | `src/lib/server/brochures.js`, `src/lib/server/login-attempts.js`, `src/routes/admin/+page.server.js`, `src/routes/admin/enquiries/+page.server.js` +1 | — |
| dbCount | 82 | 10 | `src/routes/admin/+layout.server.js`, `src/routes/admin/+page.server.js`, `src/routes/admin/enquiries/+page.server.js`, `src/routes/admin/rtw/+page.server.js` | — |
| dbInsert | 99 | 10 | `src/lib/server/brochures.js`, `src/lib/server/login-attempts.js`, `src/routes/contact/+page.server.js`, `src/routes/rtw/submit/+server.js` | — |
| dbUpdate | 115 | 8 | `src/lib/server/brochures.js`, `src/routes/admin/brochure/[id]/+page.server.js`, `src/routes/admin/enquiries/+page.server.js` | — |
| dbUpdateWhere | 130 | 8 | `src/lib/server/brochures.js` | — |
| dbDelete | 143 | 7 | `src/lib/server/brochures.js`, `src/routes/admin/enquiries/+page.server.js` | — |
| dbDeleteWhere | 157 | 8 | `src/lib/server/login-attempts.js` | — |
| storageSignedUpload | 177 | 16 | `src/routes/admin/api/media/+server.js` | — |
| storageList | 200 | 19 | `src/lib/server/brochures.js`, `src/routes/admin/media/+page.server.js` | — |
| storageDelete | 224 | 7 | `src/routes/admin/media/+page.server.js` | — |
