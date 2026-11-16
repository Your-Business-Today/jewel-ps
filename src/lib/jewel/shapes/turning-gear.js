import { FullTurn, edgePicker, ringEdges } from './shape-sampling.js';
import { Spins } from './particle-shape.js';

/** @typedef {import('./shape-sampling.js').Point} Point */

const Gear = { teeth: 12, outerRadius: 1.05, rootRadius: 0.84, holeRadius: 0.3, halfThickness: 0.16, profileSteps: 192 };
const toothShare = 0.5;

/** @param {number} angle */
function radiusAt(angle) {
	const toothPosition = ((angle / FullTurn) * Gear.teeth) % 1;
	return toothPosition < toothShare ? Gear.outerRadius : Gear.rootRadius;
}

/** @param {number} radius @param {number} angle @param {number} depth @returns {Point} */
const onFace = (radius, angle, depth) => [radius * Math.cos(angle), radius * Math.sin(angle), depth];

const faces = [Gear.halfThickness, -Gear.halfThickness];

const gearEdges = faces.flatMap((depth) => [
	...ringEdges(Gear.profileSteps, (angle) => onFace(radiusAt(angle), angle, depth)),
	...ringEdges(Gear.teeth * 2, (angle) => onFace(Gear.holeRadius, angle, depth))
]);

function surfacePoint() {
	const angle = Math.random() * FullTurn;
	const radius = Gear.holeRadius + Math.random() * (radiusAt(angle) - Gear.holeRadius);
	const depth = faces[Math.round(Math.random())];
	return onFace(radius, angle, depth);
}

/** A turning gear, for planned and reactive maintenance. It spins on the axis facing the visitor. */
export const turningGear = {
	edgePoint: edgePicker(gearEdges),
	surfacePoint,
	edgeShare: 0.6,
	spin: Spins.facing
};
