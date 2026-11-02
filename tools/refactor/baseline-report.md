# Refactor audit — baseline v2, after round 1

Generated 2026-11-02 from refactor/round-1, replacing the v1 baseline.

## Headline

**Code quality score 71.3% → 81.6%.** **24 of 179 source files are over the 100-line limit (13.4%)**; the worst file is 379 lines (was 1,028).

## Code quality score

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

## Summary

| Check | Key figures |
| --- | --- |
| fileLength | limit: 100, filesOverLimit: 24, totalFiles: 179, totalLines: 11656, worstFileLines: 379, worstFileTimesOverLimit: 2.79 |
| functionShape | limit: 30, functionsOverLimit: 6, totalFunctions: 169, elseBlocks: 3, ifBlocks: 292, measurementIsHeuristic: True |
| functionNames | overlongFunctionNames: 0, maxWords: 5, maxLength: 40 |
| accessorNames | gluedAccessorNames: 0, measurementIsHeuristic: True |
| duplication | clones: 7, duplicatedLines: 123, totalLines: 15684, duplicatedPercentage: 0.78 |
| naming | bannedAbbreviationHits: 141, unprefixedBooleans: 25 |
| comments | explanatoryCommentLines: 101, filesWithComments: 25, taskMarkers: 0 |
| magicValues | inlineHexColours: 70, inlineStyleAttributes: 6, repeatedStringLiterals: 0 |
| prose | longMemberChainLines: 54, deeplyIndentedLines: 219, overlongLines: 220, measurementIsHeuristic: True |
| conditions | tangledConditionLines: 12, literalComparisonLines: 32, measurementIsHeuristic: True |
| orphans | orphanFunctions: 0, functionsExamined: 169 |
| designPatterns | roleFamilies: 4, predictedFiles: 11, predictedFilesMissing: 0, entities: 0, entitiesOutOfRange: 0, entitiesAccepted: 0, measurementIsHeuristic: True |
| inventory | pages: 23, components: 82, orphanComponents: 11, averagePageLines: 122 |
| siteDefinition | skipped: no siteDefinition catalogue in rules.json |
| inputValidation | schemaTables: 2, limitedColumns: 0, writeDoors: 0, unvalidatedDoors: 0, looserLimits: 0 |
| fileAreas | totalFiles: 427, frontend: 201, tooling: 106, shared: 41, backend: 22, docs: 16, tests: 15, infrastructure: 14, api: 7, database: 3, other: 2 |

## Round 1 — the four longest pages broken into components

The round took the first four steps of the plan: the four longest files in the repository, each a page holding several components that had never been separated. Each was a move, not a rewrite: every component took the functions and styles that belong to it, and each page was checked before and after in a headless browser — the same links, texts and behaviour, and pixel-identical screenshots at desktop and phone width (the admin pages through a temporary harness with sample data, removed before this commit).

- **`src/routes/rtw/+page.svelte` 1,028 → 44**: the hero, the progress rail, the print heading, six step components and the check record became components in `src/lib/components/rtw/`; the tool's logic (engagement types, dates, progress, the missing-answers check, the check record and register row) moved into focused modules in `src/lib/rtw/`, and its styles into one stylesheet. Jeremy's wording, date logic and register column order are unchanged.
- **`src/routes/admin/brochure/[id]/page/[pageId]/+page.svelte` 708 → 99**: crumbs, the save notice, the fields form, one editor per field, the image field and grid, the group list and its items, the delete form and the live preview became components in `src/lib/components/admin/page-editor/`; list and image helpers went to `src/lib/brochure/page-content.js` and the A4 sizes to `src/lib/brochure/a4.js`.
- **`src/routes/admin/enquiries/+page.svelte` 543 → 81**: the header and tabs, the notices, the empty state, each enquiry row with its summary, contact details and actions, and the pager became components in `src/lib/components/admin/enquiries/`; received-time formatting went to `src/lib/enquiry/received-time.js` and the reply link to `src/lib/enquiry/reply-link.js`.
- **`src/routes/admin/+page.svelte` 470 → 38**: the heading, the setup notice, the enquiries card (with its heading and message), the counts, the recent enquiries and the site content tiles became components in `src/lib/components/admin/dashboard/`; the tile list went to `src/lib/admin/content-sections.js` and the day label to `receivedDay` in `src/lib/enquiry/received-time.js`.
- **Held**: functions over the limit (6), orphan components (11), and the figures already at zero. Nothing got worse.

## The journey so far

| Figure | v1 | v2 |
| --- | --- | --- |
| Code quality score | 71.3% | **81.6%** |
| Worst file | 1,028 | **379** |
| Average page length | — | 122 |
| Duplication % | 0.89 | **0.78** |
| Else blocks | 8 | **3** |
| Functions over the limit | 6 | **6** |
| Files over the limit | 28 | **24** |

## Worst files by length

| File | Lines |
| --- | --- |
| src/routes/admin/brochure/[id]/+page.svelte | 379 |
| src/lib/server/brochures.js | 316 |
| src/lib/site.js | 316 |
| src/routes/admin/brochure/+page.svelte | 312 |
| src/routes/admin/media/+page.svelte | 301 |
| src/lib/brochure/templates.js | 282 |
| src/routes/+page.svelte | 282 |
| src/routes/admin/rtw/+page.svelte | 253 |
| src/lib/components/admin/ImagePicker.svelte | 241 |
| src/lib/server/db.js | 230 |
| src/routes/admin/+layout.svelte | 207 |
| src/routes/+layout.svelte | 203 |
| src/lib/brochure/defaults.js | 186 |
| src/routes/admin/login/+page.svelte | 179 |
| src/lib/motion.js | 168 |

## Next round, named

1. Break `src/routes/admin/brochure/[id]/+page.svelte` (379 lines) into components.
2. Break `src/routes/admin/brochure/+page.svelte` (312 lines) into components.
3. Break `src/routes/admin/media/+page.svelte` (301 lines) into components.
4. Break `src/routes/+page.svelte` (282 lines) into components.
5. Break `src/routes/admin/rtw/+page.svelte` (253 lines) into components.

The worst file is now the brochure overview page at 379 lines, about a third of the worst before the round.
