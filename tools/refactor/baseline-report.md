# Refactor audit

Generated 2026-11-16 12:19 UTC.

## Headline

**Code quality score 86.1%.** **23 of 258 source files are over the 100-line limit (8.9%)**; the worst file is 379 lines.

## Code quality score

| Element | Reading | Score | Weight | 0% at |
| --- | --- | --- | --- | --- |
| **Standard baseline checks** | | **83.8%** | **60** | |
| Files over the line limit | 23 in 258 files | 82.2% | 10 | 50% of files |
| Worst file, in limits over | 2.79 | 69.0% | 5 | 9 |
| Functions over the line limit | 7 in 263 functions | 89.4% | 8 | 25% of functions |
| Else blocks | 3 in 392 branches | 98.5% | 5 | 50% of branches |
| Duplication % | 0.89 | 95.5% | 8 | 20 |
| Explanatory comment lines | 99 in 14.63 thousand lines | 86.5% | 4 | 50 per thousand lines |
| Inline magic values | 75 in 14.63 thousand lines | 74.4% | 4 | 20 per thousand lines |
| Orphan components and functions | 11 in 370 components and functions | 70.3% | 4 | 10% of components and functions |
| Long member chain lines | 55 in 14.63 thousand lines | 87.5% | 4 | 30 per thousand lines |
| Deeply indented lines | 204 in 14.63 thousand lines | 53.5% | 4 | 30 per thousand lines |
| Overlong function names | 0 in 263 functions | 100.0% | 4 | 10% of functions |
| **Design pattern file count** | | **100.0%** | **10** | |
| Files the patterns predict but are missing | 0 in 16 predicted files | 100.0% | 10 | 50% of predicted files |
| Entities outside their expected file count | not measured | not measured | — | 50% of entities |
| **Prose** | | **86.0%** | **20** | |
| Conditions with calls tangled inside calls | 11 in 392 branches | 88.8% | 8 | 25% of branches |
| Conditions compared to a raw literal | 31 in 392 branches | 68.4% | 6 | 25% of branches |
| Accessor names that want to be a property | 0 in 263 functions | 100.0% | 6 | 10% of functions |
| **Widget adoption** | | **not measured** | **0** | |
| Markup written by hand where a widget should be | not measured | not measured | — | 50% of widget slots |
| **Input validation** | | **not measured** | **0** | |
| Doors that write without checking their input against the columns | not measured | not measured | — | 50% of write doors |

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json` once the audit has run there; git ignores it.

## The repository by area

| Area | Files | Of which audited source | Source lines |
| --- | --- | --- | --- |
| frontend | 238 | 137 | 8,167 |
| tooling | 129 | 0 | 0 |
| shared | 74 | 74 | 3,549 |
| backend | 39 | 39 | 2,680 |
| tests | 21 | 0 | 0 |
| docs | 16 | 0 | 0 |
| infrastructure | 14 | 0 | 0 |
| database | 7 | 0 | 0 |
| api | 7 | 7 | 234 |
| other | 2 | 1 | 4 |
| **whole repository** | **547** | **258** | **14,634** |

## Summary

| Check | Key figures |
| --- | --- |
| fileLength | limit: 100, filesOverLimit: 23, totalFiles: 258, totalLines: 14634, worstFileLines: 379, worstFileTimesOverLimit: 2.79 |
| functionShape | limit: 30, functionsOverLimit: 7, totalFunctions: 263, elseBlocks: 3, ifBlocks: 392, measurementIsHeuristic: True |
| functionNames | overlongFunctionNames: 0, maxWords: 5, maxLength: 40 |
| accessorNames | gluedAccessorNames: 0, measurementIsHeuristic: True |
| duplication | clones: 10, duplicatedLines: 169, totalLines: 19089, duplicatedPercentage: 0.89 |
| naming | bannedAbbreviationHits: 153, unprefixedBooleans: 28 |
| comments | explanatoryCommentLines: 99, filesWithComments: 25, taskMarkers: 0 |
| magicValues | inlineHexColours: 70, inlineStyleAttributes: 5, repeatedStringLiterals: 0 |
| prose | longMemberChainLines: 55, deeplyIndentedLines: 204, overlongLines: 277, measurementIsHeuristic: True |
| conditions | tangledConditionLines: 11, literalComparisonLines: 31, measurementIsHeuristic: True |
| orphans | orphanFunctions: 0, functionsExamined: 263 |
| designPatterns | roleFamilies: 7, predictedFiles: 16, predictedFilesMissing: 0, entities: 0, entitiesOutOfRange: 0, entitiesAccepted: 0, measurementIsHeuristic: True |
| inventory | pages: 27, components: 107, orphanComponents: 11, averagePageLines: 109 |
| siteDefinition | skipped: no siteDefinition catalogue in rules.json |
| inputValidation | schemaTables: 6, limitedColumns: 0, writeDoors: 0, unvalidatedDoors: 0, looserLimits: 0 |
| fileAreas | totalFiles: 547, frontend: 238, tooling: 129, shared: 74, backend: 39, tests: 21, docs: 16, infrastructure: 14, database: 7, api: 7, other: 2 |

## Against the baseline

| Ratcheted figure | Baseline | Now | Verdict |
| --- | --- | --- | --- |
| code quality score | 82.8% | 86.1% | — |
| fileLength.filesOverLimit | 24 | 23 | better |
| fileLength.worstFileLines | 379 | 379 | held |
| functionShape.functionsOverLimit | 6 | 7 | worse |
| functionShape.elseBlocks | 3 | 3 | held |
| duplication.duplicatedPercentage | 1.01 | 0.89 | better |
| comments.explanatoryCommentLines | 101 | 99 | better |
| magicValues.inlineHexColours | 70 | 70 | held |
| inventory.orphanComponents | 11 | 11 | held |
| orphans.orphanFunctions | 0 | 0 | held |
| prose.longMemberChainLines | 53 | 55 | worse |
| prose.deeplyIndentedLines | 219 | 204 | better |
| functionNames.overlongFunctionNames | 0 | 0 | held |
| accessorNames.gluedAccessorNames | 0 | 0 | held |
| conditions.tangledConditionLines | 12 | 11 | better |
| conditions.literalComparisonLines | 32 | 31 | better |
| designPatterns.predictedFilesMissing | 0 | 0 | held |
| siteDefinition.handRolledElements | None | None | — |
| siteDefinition.boxedContentWidgets | None | None | — |
| inputValidation.unvalidatedDoors | 0 | 0 | held |
| inputValidation.looserLimits | 0 | 0 | held |

## Worst files by length

| File | Lines |
| --- | --- |
| src/routes/admin/brochure/[id]/+page.svelte | 379 |
| src/lib/site.js | 319 |
| src/lib/server/brochures.js | 316 |
| src/routes/admin/brochure/+page.svelte | 312 |
| src/routes/admin/media/+page.svelte | 301 |
| src/lib/brochure/templates.js | 282 |
| src/routes/+page.svelte | 255 |
| src/routes/admin/rtw/+page.svelte | 253 |
| src/lib/components/admin/ImagePicker.svelte | 241 |
| src/lib/server/db.js | 230 |
| src/routes/admin/+layout.svelte | 211 |
| src/routes/+layout.svelte | 202 |
| src/lib/brochure/defaults.js | 186 |
| src/routes/admin/login/+page.svelte | 179 |
| src/lib/motion.js | 168 |
| src/lib/components/brochure/PageProjectDetail.svelte | 155 |
| src/lib/server/auth.js | 154 |
| src/lib/components/brochure/PageBackCover.svelte | 140 |
| src/lib/components/brochure/PageTeam.svelte | 127 |
| src/routes/about/+page.svelte | 122 |

Full detail, including every offender list, is in `audit.json`.
