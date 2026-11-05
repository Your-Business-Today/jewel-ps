# Refactor audit

Generated 2026-11-05 22:09 UTC.

## Headline

**Code quality score 82.8%.** **24 of 194 source files are over the 100-line limit (12.4%)**; the worst file is 379 lines.

## Code quality score

| Element | Reading | Score | Weight | 0% at |
| --- | --- | --- | --- | --- |
| **Standard baseline checks** | | **80.2%** | **60** | |
| Files over the line limit | 24 in 194 files | 75.3% | 10 | 50% of files |
| Worst file, in limits over | 2.79 | 69.0% | 5 | 9 |
| Functions over the line limit | 6 in 189 functions | 87.3% | 8 | 25% of functions |
| Else blocks | 3 in 320 branches | 98.1% | 5 | 50% of branches |
| Duplication % | 1.01 | 95.0% | 8 | 20 |
| Explanatory comment lines | 101 in 12.46 thousand lines | 83.8% | 4 | 50 per thousand lines |
| Inline magic values | 76 in 12.46 thousand lines | 69.5% | 4 | 20 per thousand lines |
| Orphan components and functions | 11 in 277 components and functions | 60.3% | 4 | 10% of components and functions |
| Long member chain lines | 53 in 12.46 thousand lines | 85.8% | 4 | 30 per thousand lines |
| Deeply indented lines | 219 in 12.46 thousand lines | 41.4% | 4 | 30 per thousand lines |
| Overlong function names | 0 in 189 functions | 100.0% | 4 | 10% of functions |
| **Design pattern file count** | | **100.0%** | **10** | |
| Files the patterns predict but are missing | 0 in 13 predicted files | 100.0% | 10 | 50% of predicted files |
| Entities outside their expected file count | not measured | not measured | — | 50% of entities |
| **Prose** | | **82.0%** | **20** | |
| Conditions with calls tangled inside calls | 12 in 320 branches | 85.0% | 8 | 25% of branches |
| Conditions compared to a raw literal | 32 in 320 branches | 60.0% | 6 | 25% of branches |
| Accessor names that want to be a property | 0 in 189 functions | 100.0% | 6 | 10% of functions |
| **Widget adoption** | | **not measured** | **0** | |
| Markup written by hand where a widget should be | not measured | not measured | — | 50% of widget slots |
| **Input validation** | | **not measured** | **0** | |
| Doors that write without checking their input against the columns | not measured | not measured | — | 50% of write doors |

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json`.

## The repository by area

| Area | Files | Of which audited source | Source lines |
| --- | --- | --- | --- |
| frontend | 208 | 115 | 7,527 |
| tooling | 107 | 0 | 0 |
| shared | 43 | 43 | 2,442 |
| backend | 28 | 28 | 2,252 |
| docs | 17 | 0 | 0 |
| tests | 15 | 0 | 0 |
| infrastructure | 14 | 0 | 0 |
| api | 7 | 7 | 234 |
| database | 4 | 0 | 0 |
| other | 2 | 1 | 4 |
| **whole repository** | **445** | **194** | **12,459** |

## Summary

| Check | Key figures |
| --- | --- |
| fileLength | limit: 100, filesOverLimit: 24, totalFiles: 194, totalLines: 12459, worstFileLines: 379, worstFileTimesOverLimit: 2.79 |
| functionShape | limit: 30, functionsOverLimit: 6, totalFunctions: 189, elseBlocks: 3, ifBlocks: 320, measurementIsHeuristic: True |
| functionNames | overlongFunctionNames: 0, maxWords: 5, maxLength: 40 |
| accessorNames | gluedAccessorNames: 0, measurementIsHeuristic: True |
| duplication | clones: 10, duplicatedLines: 169, totalLines: 16685, duplicatedPercentage: 1.01 |
| naming | bannedAbbreviationHits: 143, unprefixedBooleans: 28 |
| comments | explanatoryCommentLines: 101, filesWithComments: 25, taskMarkers: 0 |
| magicValues | inlineHexColours: 70, inlineStyleAttributes: 6, repeatedStringLiterals: 0 |
| prose | longMemberChainLines: 53, deeplyIndentedLines: 219, overlongLines: 236, measurementIsHeuristic: True |
| conditions | tangledConditionLines: 12, literalComparisonLines: 32, measurementIsHeuristic: True |
| orphans | orphanFunctions: 0, functionsExamined: 189 |
| designPatterns | roleFamilies: 5, predictedFiles: 13, predictedFilesMissing: 0, entities: 0, entitiesOutOfRange: 0, entitiesAccepted: 0, measurementIsHeuristic: True |
| inventory | pages: 24, components: 88, orphanComponents: 11, averagePageLines: 119 |
| siteDefinition | skipped: no siteDefinition catalogue in rules.json |
| inputValidation | schemaTables: 3, limitedColumns: 0, writeDoors: 0, unvalidatedDoors: 0, looserLimits: 0 |
| fileAreas | totalFiles: 445, frontend: 208, tooling: 107, shared: 43, backend: 28, docs: 17, tests: 15, infrastructure: 14, api: 7, database: 4, other: 2 |

## Against the baseline

| Ratcheted figure | Baseline | Now | Verdict |
| --- | --- | --- | --- |
| code quality score | 81.6% | 82.8% | — |
| fileLength.filesOverLimit | 24 | 24 | held |
| fileLength.worstFileLines | 379 | 379 | held |
| functionShape.functionsOverLimit | 6 | 6 | held |
| functionShape.elseBlocks | 3 | 3 | held |
| duplication.duplicatedPercentage | 0.78 | 1.01 | worse |
| comments.explanatoryCommentLines | 101 | 101 | held |
| magicValues.inlineHexColours | 70 | 70 | held |
| inventory.orphanComponents | 11 | 11 | held |
| orphans.orphanFunctions | 0 | 0 | held |
| prose.longMemberChainLines | 54 | 53 | better |
| prose.deeplyIndentedLines | 219 | 219 | held |
| functionNames.overlongFunctionNames | 0 | 0 | held |
| accessorNames.gluedAccessorNames | 0 | 0 | held |
| conditions.tangledConditionLines | 12 | 12 | held |
| conditions.literalComparisonLines | 32 | 32 | held |
| designPatterns.predictedFilesMissing | 0 | 0 | held |
| siteDefinition.handRolledElements | None | None | — |
| siteDefinition.boxedContentWidgets | None | None | — |
| inputValidation.unvalidatedDoors | 0 | 0 | held |
| inputValidation.looserLimits | 0 | 0 | held |

## Worst files by length

| File | Lines |
| --- | --- |
| src/routes/admin/brochure/[id]/+page.svelte | 379 |
| src/lib/server/brochures.js | 316 |
| src/lib/site.js | 316 |
| src/routes/admin/brochure/+page.svelte | 312 |
| src/routes/admin/media/+page.svelte | 301 |
| src/routes/+page.svelte | 289 |
| src/lib/brochure/templates.js | 282 |
| src/routes/admin/rtw/+page.svelte | 253 |
| src/lib/components/admin/ImagePicker.svelte | 241 |
| src/lib/server/db.js | 230 |
| src/routes/admin/+layout.svelte | 208 |
| src/routes/+layout.svelte | 202 |
| src/lib/brochure/defaults.js | 186 |
| src/routes/admin/login/+page.svelte | 179 |
| src/lib/motion.js | 168 |
| src/lib/components/brochure/PageProjectDetail.svelte | 155 |
| src/lib/server/auth.js | 154 |
| src/routes/about/+page.svelte | 142 |
| src/lib/components/brochure/PageBackCover.svelte | 140 |
| src/lib/components/brochure/PageTeam.svelte | 127 |

Full detail, including every offender list, is in `audit.json`.
