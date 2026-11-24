# Refactor audit — baseline v3, after round 2

Generated 2026-11-23 from `refactor/round-2`, replacing the v2 baseline.

The widgets' designs: not set up. This repository has no design index and no `siteDefinition` catalogue in `rules.json`, so the site has never been checked against a brand sheet ("Check the site against the brand") nor its widgets against their sheets ("Check the widgets against their designs").

## Headline

**Code quality score 86.3% → 89.7%.** **18 of 297 source files are over the 100-line limit (6.1%)**, down from 23; the worst file is 321 lines (`src/lib/site.js`), down from 379.

## Code quality score

| Element | Reading | Score | Weight | 0% at |
| --- | --- | --- | --- | --- |
| **Standard baseline checks** | | **88.4%** | **60** | |
| Files over the line limit | 18 in 297 files | 87.9% | 10 | 50% of files |
| Worst file, in limits over | 2.21 | 75.4% | 5 | 9 |
| Functions over the line limit | 7 in 291 functions | 90.4% | 8 | 25% of functions |
| Else blocks | 3 in 418 branches | 98.6% | 5 | 50% of branches |
| Duplication % | 0.28 | 98.6% | 8 | 20 |
| Explanatory comment lines | 88 in 14.9 thousand lines | 88.2% | 4 | 50 per thousand lines |
| Inline magic values | 62 in 14.9 thousand lines | 79.2% | 4 | 20 per thousand lines |
| Orphan components and functions | 11 in 421 components and functions | 73.9% | 4 | 10% of components and functions |
| Long member chain lines | 52 in 14.9 thousand lines | 88.4% | 4 | 30 per thousand lines |
| Deeply indented lines | 83 in 14.9 thousand lines | 81.4% | 4 | 30 per thousand lines |
| Overlong function names | 0 in 291 functions | 100.0% | 4 | 10% of functions |
| **Design pattern file count** | | **100.0%** | **10** | |
| Files the patterns predict but are missing | 0 in 20 predicted files | 100.0% | 10 | 50% of predicted files |
| Entities outside their expected file count | not measured | not measured | — | 50% of entities |
| **Prose** | | **88.4%** | **20** | |
| Conditions with calls tangled inside calls | 10 in 418 branches | 90.4% | 8 | 25% of branches |
| Conditions compared to a raw literal | 27 in 418 branches | 74.2% | 6 | 25% of branches |
| Accessor names that want to be a property | 0 in 291 functions | 100.0% | 6 | 10% of functions |
| **Widget adoption** | | **not measured** | **0** | |
| Markup written by hand where a widget should be | not measured | not measured | — | 50% of widget slots |
| **Input validation** | | **not measured** | **0** | |
| Doors that write without checking their input against the columns | not measured | not measured | — | 50% of write doors |

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json` once the audit has run there; git ignores it.

## Summary

| Check | Key figures |
| --- | --- |
| fileLength | limit: 100, filesOverLimit: 18, totalFiles: 297, totalLines: 14905, worstFileLines: 321, worstFileTimesOverLimit: 2.21 |
| functionShape | limit: 30, functionsOverLimit: 7, totalFunctions: 291, elseBlocks: 3, ifBlocks: 418, measurementIsHeuristic: True |
| functionNames | overlongFunctionNames: 0, maxWords: 5, maxLength: 40 |
| accessorNames | gluedAccessorNames: 0, measurementIsHeuristic: True |
| duplication | clones: 3, duplicatedLines: 52, totalLines: 18833, duplicatedPercentage: 0.28 |
| naming | bannedAbbreviationHits: 145, unprefixedBooleans: 26 |
| comments | explanatoryCommentLines: 88, filesWithComments: 24, taskMarkers: 0 |
| magicValues | inlineHexColours: 57, inlineStyleAttributes: 5, repeatedStringLiterals: 0 |
| prose | longMemberChainLines: 52, deeplyIndentedLines: 83, overlongLines: 288, measurementIsHeuristic: True |
| conditions | tangledConditionLines: 10, literalComparisonLines: 27, measurementIsHeuristic: True |
| orphans | orphanFunctions: 0, functionsExamined: 291 |
| designPatterns | roleFamilies: 13, predictedFiles: 20, predictedFilesMissing: 0, entities: 0, entitiesOutOfRange: 0, entitiesAccepted: 0, measurementIsHeuristic: True |
| inventory | pages: 29, components: 130, orphanComponents: 11, averagePageLines: 64 |
| siteDefinition | skipped: no siteDefinition catalogue in rules.json |
| inputValidation | schemaTables: 7, limitedColumns: 0, writeDoors: 0, unvalidatedDoors: 0, looserLimits: 0 |
| fileAreas | totalFiles: 588, frontend: 264, tooling: 129, shared: 79, backend: 47, tests: 21, docs: 16, infrastructure: 14, database: 8, api: 8, other: 2 |

## Round 2 — the five longest pages broken into components

The round took the first five steps of the plan, all Pass 2. Each page was cut into components at the seams the plan measured, with the functions and styles that belong to each block moving with it. Three things the pages each wrote for themselves were given one home: the photo upload (`src/lib/admin/photo-upload.js` and `PhotoUploadButton.svelte`, now used by the media library and the image picker), the admin area's small buttons, link buttons and section labels (`admin.css`), and the UK date-time format (`src/lib/admin/uk-date-time.js`, which the RTW page now uses instead of its own copy). Behaviour is unchanged. The home page's hero, curtain and process animations were checked in a browser after the split.

- **`src/routes/admin/brochure/[id]/+page.svelte` 379 → 57**: `BrochureHead` (rename, publish state, preview and PDF), `BrochurePageAdders`, `BrochurePageRow` (thumbnail and title, taking `pageTitle`) and `BrochurePageActions` (move, edit, duplicate, delete), in `components/admin/brochure-editor/`.
- **`src/routes/admin/brochure/+page.svelte` 312 → 64**: `BrochureCreateForm`, `BrochureListRow` (taking the date format, renamed `shortDateOf`) and `BrochureRowActions`, in `components/admin/brochures/`.
- **`src/routes/admin/media/+page.svelte` 301 → 60**: `MediaUploads` (with the two-press delete), `MediaBuiltIn`, `MediaCell` and `CopyUrlButton`, in `components/admin/media/`. `uploadFiles` became `PhotoUploadButton` over `uploadPhoto`, and the image picker lost its own copy (241 → 195).
- **`src/routes/+page.svelte` 255 → 39**: `HomeHero` (the intro and the curtain animation, as two named steps), `HomeHeroFoot`, `HomeIntro`, `HomeProcess` (with its own scroll-line animation), `HomeTrades` and `HomeEcologi`, in `components/home/`. Three explanatory comments came off because the function names now say it.
- **`src/routes/admin/rtw/+page.svelte` 253 → 91**: `RtwSubmissionsTable`, `RtwSubmissionRow` (taking `ukDate` and `outcomeClass`) and `RtwPager`, in `components/admin/rtw/`.
- **Held**: every ratcheted figure held or improved. Files over the limit 23 → 18, worst file 379 → 321, duplication 0.88% → 0.28%, comments 99 → 88, deeply indented lines 204 → 83, literal comparisons 31 → 27, tangled conditions 11 → 10, member chains 55 → 52, functions over the limit 7 → 7, else blocks 3 → 3, orphan components 11 → 11.
- **Division signature**: none. The file count rose from 258 to 297 as the pages divided, and no figure drifted with it.

## The journey so far

| Figure | v1 | v2 | v3 |
| --- | --- | --- | --- |
| Code quality score | 82.8% | 86.1% | **89.7%** |
| Worst file | 379 | 379 | **321** |
| Average page length | — | 109 | **64** |
| Duplication % | 1.01 | 0.89 | **0.28** |
| Else blocks | 3 | 3 | **3** |
| Functions over the limit | 6 | 7 | **7** |
| Files over the limit | 24 | 23 | **18** |

## Worst files by length

| File | Lines |
| --- | --- |
| src/lib/site.js | 321 |
| src/lib/server/brochures.js | 316 |
| src/lib/brochure/templates.js | 282 |
| src/lib/server/db.js | 230 |
| src/routes/admin/+layout.svelte | 212 |
| src/routes/+layout.svelte | 202 |
| src/lib/components/admin/ImagePicker.svelte | 195 |
| src/lib/brochure/defaults.js | 186 |
| src/routes/admin/login/+page.svelte | 179 |
| src/lib/motion.js | 168 |
| src/lib/components/brochure/PageProjectDetail.svelte | 155 |
| src/lib/server/auth.js | 154 |
| src/lib/components/brochure/PageBackCover.svelte | 140 |
| src/lib/components/brochure/PageTeam.svelte | 127 |
| src/routes/about/+page.svelte | 122 |

## Next round, named

1. Break `src/routes/admin/+layout.svelte` (212 lines) into components.
2. Break `src/routes/+layout.svelte` (202 lines) into components.
3. Break `src/lib/components/admin/ImagePicker.svelte` (195 lines) into components.
4. Break `src/routes/admin/login/+page.svelte` (179 lines) into components.
5. Break `src/lib/components/brochure/PageProjectDetail.svelte` (155 lines) into components.

The worst file is now `src/lib/site.js` at 321 lines: the site's content and settings in one module, which Pass 4 divides once the pages are done.
