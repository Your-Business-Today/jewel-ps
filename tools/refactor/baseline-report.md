# Refactor audit

Generated 2026-11-01 08:08 UTC.

## Headline

**Code quality score 71.3%.** **28 of 111 source files are over the 100-line limit (25.2%)**; the worst file is 1,028 lines.

## Code quality score

| Element | Reading | Score | Weight | 0% at |
| --- | --- | --- | --- | --- |
| **Standard baseline checks** | | **64.3%** | **60** | |
| Files over the line limit | 28 in 111 files | 49.5% | 10 | 50% of files |
| Worst file, in limits over | 9.28 | 0.0% | 5 | 9 |
| Functions over the line limit | 6 in 156 functions | 84.6% | 8 | 25% of functions |
| Else blocks | 8 in 290 branches | 94.5% | 5 | 50% of branches |
| Duplication % | 0.89 | 95.5% | 8 | 20 |
| Explanatory comment lines | 103 in 11.15 thousand lines | 81.5% | 4 | 50 per thousand lines |
| Inline magic values | 101 in 11.15 thousand lines | 54.7% | 4 | 20 per thousand lines |
| Orphan components and functions | 11 in 194 components and functions | 43.3% | 4 | 10% of components and functions |
| Long member chain lines | 58 in 11.15 thousand lines | 82.7% | 4 | 30 per thousand lines |
| Deeply indented lines | 461 in 11.15 thousand lines | 0.0% | 4 | 30 per thousand lines |
| Overlong function names | 0 in 156 functions | 100.0% | 4 | 10% of functions |
| **Design pattern file count** | | **100.0%** | **10** | |
| Files the patterns predict but are missing | 0 in 11 predicted files | 100.0% | 10 | 50% of predicted files |
| Entities outside their expected file count | not measured | not measured | — | 50% of entities |
| **Prose** | | **77.8%** | **20** | |
| Conditions with calls tangled inside calls | 14 in 290 branches | 80.7% | 8 | 25% of branches |
| Conditions compared to a raw literal | 35 in 290 branches | 51.7% | 6 | 25% of branches |
| Accessor names that want to be a property | 0 in 156 functions | 100.0% | 6 | 10% of functions |
| **Widget adoption** | | **not measured** | **0** | |
| Markup written by hand where a widget should be | not measured | not measured | — | 50% of widget slots |
| **Input validation** | | **not measured** | **0** | |
| Doors that write without checking their input against the columns | not measured | not measured | — | 50% of write doors |

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json`.

## The repository by area

| Area | Files | Of which audited source | Source lines |
| --- | --- | --- | --- |
| frontend | 154 | 62 | 7,657 |
| tooling | 104 | 0 | 0 |
| backend | 22 | 22 | 1,901 |
| shared | 19 | 19 | 1,355 |
| docs | 16 | 0 | 0 |
| tests | 14 | 0 | 0 |
| infrastructure | 14 | 0 | 0 |
| api | 7 | 7 | 232 |
| database | 3 | 0 | 0 |
| other | 2 | 1 | 4 |
| **whole repository** | **355** | **111** | **11,149** |

## Summary

| Check | Key figures |
| --- | --- |
| fileLength | limit: 100, filesOverLimit: 28, totalFiles: 111, totalLines: 11149, worstFileLines: 1028, worstFileTimesOverLimit: 9.28 |
| functionShape | limit: 30, functionsOverLimit: 6, totalFunctions: 156, elseBlocks: 8, ifBlocks: 290, measurementIsHeuristic: True |
| functionNames | overlongFunctionNames: 0, maxWords: 5, maxLength: 40 |
| accessorNames | gluedAccessorNames: 0, measurementIsHeuristic: True |
| duplication | clones: 9, duplicatedLines: 145, totalLines: 16274, duplicatedPercentage: 0.89 |
| naming | bannedAbbreviationHits: 150, unprefixedBooleans: 20 |
| comments | explanatoryCommentLines: 103, filesWithComments: 26, taskMarkers: 0 |
| magicValues | inlineHexColours: 95, inlineStyleAttributes: 6, repeatedStringLiterals: 0 |
| prose | longMemberChainLines: 58, deeplyIndentedLines: 461, overlongLines: 144, measurementIsHeuristic: True |
| conditions | tangledConditionLines: 14, literalComparisonLines: 35, measurementIsHeuristic: True |
| orphans | orphanFunctions: 0, functionsExamined: 156 |
| designPatterns | roleFamilies: 3, predictedFiles: 11, predictedFilesMissing: 0, entities: 0, entitiesOutOfRange: 0, entitiesAccepted: 0, measurementIsHeuristic: True |
| inventory | pages: 21, components: 38, orphanComponents: 11, averagePageLines: 250 |
| siteDefinition | skipped: no siteDefinition catalogue in rules.json |
| inputValidation | schemaTables: 2, limitedColumns: 0, writeDoors: 0, unvalidatedDoors: 0, looserLimits: 0 |
| fileAreas | totalFiles: 355, frontend: 154, tooling: 104, backend: 22, shared: 19, docs: 16, tests: 14, infrastructure: 14, api: 7, database: 3, other: 2 |

## Against the baseline

| Ratcheted figure | Baseline | Now | Verdict |
| --- | --- | --- | --- |
| code quality score | 68.2% | 71.3% | — |
| fileLength.filesOverLimit | 29 | 28 | better |
| fileLength.worstFileLines | 1028 | 1028 | held |
| functionShape.functionsOverLimit | 6 | 6 | held |
| functionShape.elseBlocks | 8 | 8 | held |
| duplication.duplicatedPercentage | 0.92 | 0.89 | better |
| comments.explanatoryCommentLines | 105 | 103 | better |
| magicValues.inlineHexColours | 95 | 95 | held |
| inventory.orphanComponents | 11 | 11 | held |
| orphans.orphanFunctions | 0 | 0 | held |
| prose.longMemberChainLines | 58 | 58 | held |
| prose.deeplyIndentedLines | 520 | 461 | better |
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
| src/routes/admin/+layout.svelte | 207 |
| src/routes/+layout.svelte | 201 |
| src/lib/brochure/defaults.js | 186 |
| src/routes/admin/login/+page.svelte | 179 |
| src/lib/motion.js | 168 |
| src/lib/components/brochure/PageProjectDetail.svelte | 155 |

Full detail, including every offender list, is in `audit.json`.
