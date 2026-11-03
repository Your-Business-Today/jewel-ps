# Refactor audit

Generated 2026-11-02 09:38 UTC.

## Headline

**Code quality score 81.6%.** **24 of 179 source files are over the 100-line limit (13.4%)**; the worst file is 379 lines.

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

Each element scores 100% with no offenders and falls in a straight line to 0% when its offenders, measured against the size of the codebase, reach the figure in the last column. The score is the weighted average of the elements that could be measured; an element that could not be measured lends its weight to the rest. Weights and zero points are set in `tools/refactor/rules.json` under `score.elements`. The offenders behind every reading are in `tools/refactor/audit-output/audit.json`.

## The repository by area

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

## Against the baseline

| Ratcheted figure | Baseline | Now | Verdict |
| --- | --- | --- | --- |
| code quality score | 71.3% | 81.6% | — |
| fileLength.filesOverLimit | 28 | 24 | better |
| fileLength.worstFileLines | 1028 | 379 | better |
| functionShape.functionsOverLimit | 6 | 6 | held |
| functionShape.elseBlocks | 8 | 3 | better |
| duplication.duplicatedPercentage | 0.89 | 0.78 | better |
| comments.explanatoryCommentLines | 103 | 101 | better |
| magicValues.inlineHexColours | 95 | 70 | better |
| inventory.orphanComponents | 11 | 11 | held |
| orphans.orphanFunctions | 0 | 0 | held |
| prose.longMemberChainLines | 58 | 54 | better |
| prose.deeplyIndentedLines | 461 | 219 | better |
| functionNames.overlongFunctionNames | 0 | 0 | held |
| accessorNames.gluedAccessorNames | 0 | 0 | held |
| conditions.tangledConditionLines | 14 | 12 | better |
| conditions.literalComparisonLines | 35 | 32 | better |
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
| src/lib/components/brochure/PageProjectDetail.svelte | 155 |
| src/lib/server/auth.js | 154 |
| src/routes/about/+page.svelte | 142 |
| src/lib/components/brochure/PageBackCover.svelte | 140 |
| src/lib/components/brochure/PageTeam.svelte | 127 |

Full detail, including every offender list, is in `audit.json`.
