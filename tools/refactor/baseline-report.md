# Refactor audit

Generated 2026-11-25 17:38 UTC.

## Headline

**Code quality score 89.7%.** **18 of 297 source files are over the 100-line limit (6.1%)**; the worst file is 321 lines.

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

## The repository by area

| Area | Files | Of which audited source | Source lines |
| --- | --- | --- | --- |
| frontend | 264 | 162 | 8,032 |
| tooling | 129 | 0 | 0 |
| shared | 79 | 79 | 3,676 |
| backend | 47 | 47 | 2,929 |
| tests | 21 | 0 | 0 |
| docs | 18 | 0 | 0 |
| infrastructure | 14 | 0 | 0 |
| database | 8 | 0 | 0 |
| api | 8 | 8 | 264 |
| other | 2 | 1 | 4 |
| **whole repository** | **590** | **297** | **14,905** |

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
| fileAreas | totalFiles: 590, frontend: 264, tooling: 129, shared: 79, backend: 47, tests: 21, docs: 18, infrastructure: 14, database: 8, api: 8, other: 2 |

## Against the baseline

| Ratcheted figure | Baseline | Now | Verdict |
| --- | --- | --- | --- |
| code quality score | 89.7% | 89.7% | — |
| fileLength.filesOverLimit | 18 | 18 | held |
| fileLength.worstFileLines | 321 | 321 | held |
| functionShape.functionsOverLimit | 7 | 7 | held |
| functionShape.elseBlocks | 3 | 3 | held |
| duplication.duplicatedPercentage | 0.28 | 0.28 | held |
| comments.explanatoryCommentLines | 88 | 88 | held |
| magicValues.inlineHexColours | 57 | 57 | held |
| inventory.orphanComponents | 11 | 11 | held |
| orphans.orphanFunctions | 0 | 0 | held |
| prose.longMemberChainLines | 52 | 52 | held |
| prose.deeplyIndentedLines | 83 | 83 | held |
| functionNames.overlongFunctionNames | 0 | 0 | held |
| accessorNames.gluedAccessorNames | 0 | 0 | held |
| conditions.tangledConditionLines | 10 | 10 | held |
| conditions.literalComparisonLines | 27 | 27 | held |
| designPatterns.predictedFilesMissing | 0 | 0 | held |
| siteDefinition.handRolledElements | None | None | — |
| siteDefinition.boxedContentWidgets | None | None | — |
| inputValidation.unvalidatedDoors | 0 | 0 | held |
| inputValidation.looserLimits | 0 | 0 | held |

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
| src/lib/server/email.js | 121 |
| src/lib/server/login-attempts.js | 113 |
| src/routes/fire-flood-restoration/+page.svelte | 112 |

Full detail, including every offender list, is in `audit.json`.
