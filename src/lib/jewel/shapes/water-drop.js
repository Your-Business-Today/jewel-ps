import { FullTurn, edgePicker, ringEdges } from './shape-sampling.js';

/** @typedef {import('./shape-sampling.js').Point} Point */

const Drop = { meridians: 10, parallels: [0.35, 0.55, 0.7, 0.82], height: 1, bulge: 0.5, embersShare: 0.2, emberSpread: 0.9, emberFloor: -1.2 };

/** @param {number} sweep from 0 at the tip to one half-turn at the base @param {number} angle @returns {Point} */
function onDrop(sweep, angle) {
	const radius = Drop.bulge * (1 - Math.cos(sweep)) * Math.sin(sweep);
	return [radius * Math.cos(angle), Drop.height * Math.cos(sweep), radius * Math.sin(angle)];
}

const halfTurn = FullTurn / 2;
const meridianSteps = 24;

/** @param {number} angle */
const meridianEdges = (angle) =>
	Array.from({ length: meridianSteps }, (_, step) => /** @type {[Point, Point]} */ ([onDrop((step / meridianSteps) * halfTurn, angle), onDrop(((step + 1) / meridianSteps) * halfTurn, angle)]));

const dropEdges = [
	...Array.from({ length: Drop.meridians }, (_, meridian) => meridianEdges((meridian / Drop.meridians) * FullTurn)).flat(),
	...Drop.parallels.flatMap((share) => ringEdges(48, (angle) => onDrop(share * halfTurn + halfTurn / 4, angle)))
];

const surfacePoint = () => onDrop(Math.acos(1 - 2 * Math.random()), Math.random() * FullTurn);

/** @returns {Point} */
function emberStart() {
	const spread = () => (Math.random() - 0.5) * Drop.emberSpread * 2;
	return [spread(), Drop.emberFloor + Math.random() * 0.4, spread()];
}

/** A water drop with embers rising past it, for fire and flood restoration. */
export const waterDrop = {
	edgePoint: edgePicker(dropEdges),
	surfacePoint,
	edgeShare: 0.55,
	risingPoint: emberStart,
	risingShare: Drop.embersShare
};
