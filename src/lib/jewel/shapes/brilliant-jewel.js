import { FullTurn, edgePicker, pointBetween, pointOnCircle } from './shape-sampling.js';

/** @typedef {import('./shape-sampling.js').Edge} Edge */

const Cut = {
	facets: 8,
	girdleRadius: 1,
	girdleHeight: 0.12,
	tableRadius: 0.56,
	tableHeight: 0.5,
	culetHeight: -0.98
};

const halfFacet = FullTurn / Cut.facets / 2;

/** @param {number} angle */
const girdleAt = (angle) => pointOnCircle(Cut.girdleRadius, angle, Cut.girdleHeight);
/** @param {number} angle */
const tableAt = (angle) => pointOnCircle(Cut.tableRadius, angle + halfFacet, Cut.tableHeight);
/** @type {import('./shape-sampling.js').Point} */
const culet = [0, Cut.culetHeight, 0];

/** @param {number} facet @returns {Edge[]} */
function facetEdges(facet) {
	const angle = (facet / Cut.facets) * FullTurn;
	const nextAngle = ((facet + 1) / Cut.facets) * FullTurn;
	return [
		[girdleAt(angle), girdleAt(nextAngle)],
		[tableAt(angle), tableAt(nextAngle)],
		[girdleAt(angle), tableAt(angle)],
		[girdleAt(nextAngle), tableAt(angle)],
		[girdleAt(angle), culet]
	];
}

const jewelEdges = Array.from({ length: Cut.facets }, (_, facet) => facetEdges(facet)).flat();

function surfacePoint() {
	const angle = Math.random() * FullTurn;
	const isOnCrown = Math.random() < 0.5;
	const far = isOnCrown ? tableAt(angle - halfFacet) : culet;
	return pointBetween(girdleAt(angle), far, Math.random());
}

/** The cut gem of the Jewel name: an eight-facet brilliant, table up. */
export const brilliantJewel = {
	edgePoint: edgePicker(jewelEdges),
	surfacePoint,
	edgeShare: 0.72
};
