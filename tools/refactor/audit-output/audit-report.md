# Refactor audit

Generated 2026-10-25 19:20 UTC.

## Headline

**Code quality score 65.6%.** **29 of 88 source files are over the 100-line limit (33.0%)**; the worst file is 1,028 lines.

## Code quality score

| Element | Reading | Score | Weight | 0% at |
| --- | --- | --- | --- | --- |
| **Standard baseline checks** | | **54.9%** | **52** | |
| Files over the line limit | 29 in 88 files | 34.1% | 10 | 50% of files |
| Worst file, in limits over | 9.28 | 0.0% | 5 | 9 |
| Functions over the line limit | 6 in 134 functions | 82.1% | 8 | 25% of functions |
| Else blocks | 8 in 271 branches | 94.1% | 5 | 50% of branches |
| Duplication % | not measured | not measured | — | 20 |
| Explanatory comment lines | 105 in 10.66 thousand lines | 80.3% | 4 | 50 per thousand lines |
| Inline magic values | 101 in 10.66 thousand lines | 52.6% | 4 | 20 per thousand lines |
| Orphan components and functions | 11 in 160 components and functions | 31.2% | 4 | 10% of components and functions |
| Long member chain lines | 58 in 10.66 thousand lines | 81.9% | 4 | 30 per thousand lines |
| Deeply indented lines | 520 in 10.66 thousand lines | 0.0% | 4 | 30 per thousand lines |
| Overlong function names | 0 in 134 functions | 100.0% | 4 | 10% of functions |
| **Design pattern file count** | | **100.0%** | **10** | |
| Files the patterns predict but are missing | 0 in 11 predicted files | 100.0% | 10 | 50% of predicted files |
| Entities outside their expected file count | not measured | not measured | — | 50% of entities |
| **Prose** | | **76.2%** | **20** | |
| Conditions with calls tangled inside calls | 14 in 271 branches | 79.3% | 8 | 25% of branches |
| Conditions compared to a raw literal | 35 in 271 branches | 48.3% | 6 | 25% of branches |
| Accessor names that want to be a property | 0 in 134 functions | 100.0% | 6 | 10% of functions |
| **Widget adoption** | | **not measured** | **0** | |
| Markup written by hand where a widget should be | not measured | not measured | — | 50% of widget slots |
| **Input validation** | | **not measured** | **0** | |
| Doors that write without checking their input against the columns | not measured | not measured | — | 50% of write doors |

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json`.

## The repository by area

| Area | Files | Of which audited source | Source lines |
| --- | --- | --- | --- |
| frontend | 142 | 50 | 7,477 |
| tooling | 104 | 0 | 0 |
| backend | 21 | 21 | 1,854 |
| docs | 16 | 0 | 0 |
| tests | 14 | 0 | 0 |
| infrastructure | 14 | 0 | 0 |
| shared | 9 | 9 | 1,095 |
| api | 7 | 7 | 232 |
| database | 3 | 0 | 0 |
| other | 2 | 1 | 4 |
| **whole repository** | **332** | **88** | **10,662** |

## Summary

| Check | Key figures |
| --- | --- |
| fileLength | limit: 100, filesOverLimit: 29, totalFiles: 88, totalLines: 10662, worstFileLines: 1028, worstFileTimesOverLimit: 9.28 |
| functionShape | limit: 30, functionsOverLimit: 6, totalFunctions: 134, elseBlocks: 8, ifBlocks: 271, measurementIsHeuristic: True |
| functionNames | overlongFunctionNames: 0, maxWords: 5, maxLength: 40 |
| accessorNames | gluedAccessorNames: 0, measurementIsHeuristic: True |
| duplication | skipped: jscpd is not installed (npm install -g jscpd), carriedFromBaseline: True |
| naming | bannedAbbreviationHits: 146, unprefixedBooleans: 21 |
| comments | explanatoryCommentLines: 105, filesWithComments: 26, taskMarkers: 0 |
| magicValues | inlineHexColours: 95, inlineStyleAttributes: 6, repeatedStringLiterals: 0 |
| prose | longMemberChainLines: 58, deeplyIndentedLines: 520, overlongLines: 138, measurementIsHeuristic: True |
| conditions | tangledConditionLines: 14, literalComparisonLines: 35, measurementIsHeuristic: True |
| orphans | orphanFunctions: 0, functionsExamined: 134 |
| designPatterns | roleFamilies: 3, predictedFiles: 11, predictedFilesMissing: 0, entities: 0, entitiesOutOfRange: 0, measurementIsHeuristic: True |
| inventory | pages: 21, components: 26, orphanComponents: 11, averagePageLines: 256 |
| siteDefinition | skipped: no siteDefinition catalogue in rules.json |
| inputValidation | schemaTables: 2, limitedColumns: 0, writeDoors: 0, unvalidatedDoors: 0, looserLimits: 0 |
| fileAreas | totalFiles: 332, frontend: 142, tooling: 104, backend: 21, docs: 16, tests: 14, infrastructure: 14, shared: 9, api: 7, database: 3, other: 2 |

## Against the baseline

| Ratcheted figure | Baseline | Now | Verdict |
| --- | --- | --- | --- |
| code quality score | 65.6% | 65.6% | — |
| fileLength.filesOverLimit | 29 | 29 | held |
| fileLength.worstFileLines | 1028 | 1028 | held |
| functionShape.functionsOverLimit | 6 | 6 | held |
| functionShape.elseBlocks | 8 | 8 | held |
| duplication.duplicatedPercentage | None | None | — |
| comments.explanatoryCommentLines | 105 | 105 | held |
| magicValues.inlineHexColours | 95 | 95 | held |
| inventory.orphanComponents | 11 | 11 | held |
| orphans.orphanFunctions | 0 | 0 | held |
| prose.longMemberChainLines | 58 | 58 | held |
| prose.deeplyIndentedLines | 520 | 520 | held |
| functionNames.overlongFunctionNames | 0 | 0 | held |
| accessorNames.gluedAccessorNames | 0 | 0 | held |
| conditions.tangledConditionLines | 14 | 14 | held |
| conditions.literalComparisonLines | 35 | 35 | held |
| designPatterns.predictedFilesMissing | 0 | 0 | held |
| siteDefinition.handRolledElements | None | None | — |
| siteDefinition.boxedContentWidgets | None | None | — |
| inputValidation.unvalidatedDoors | 0 | 0 | held |
| inputValidation.looserLimits | 0 | 0 | held |

## Worst files by length

| File | Lines |
| --- | --- |
| src/routes/rtw/+page.svelte | 1028 |
| src/routes/admin/brochure/[id]/page/[pageId]/+page.svelte | 708 |
| src/routes/admin/enquiries/+page.svelte | 543 |
| src/routes/admin/+page.svelte | 470 |
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
| src/routes/+layout.svelte | 218 |
| src/routes/admin/+layout.svelte | 207 |
| src/routes/contact/+page.svelte | 187 |
| src/lib/brochure/defaults.js | 186 |
| src/routes/admin/login/+page.svelte | 179 |
| src/lib/motion.js | 168 |

Full detail, including every offender list, is in `audit.json`.
