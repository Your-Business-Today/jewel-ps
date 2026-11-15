import { FullTurn } from './shape-sampling.js';
import { brilliantJewel } from './brilliant-jewel.js';

/** @typedef {import('./shape-sampling.js').Point} Point */

const Halo = { radius: 1.3, thickness: 0.035, tilt: 1.15, share: 0.3 };

/** @returns {Point} */
function haloPoint() {
	const angle = Math.random() * FullTurn;
	const radius = Halo.radius + (Math.random() - 0.5) * Halo.thickness * 2;
	const flatY = radius * Math.sin(angle);
	return [radius * Math.cos(angle), flatY * Math.cos(Halo.tilt), flatY * Math.sin(Halo.tilt)];
}

/** @param {() => Point} jewelPoint */
const withHalo = (jewelPoint) => () => (Math.random() < Halo.share ? haloPoint() : jewelPoint());

/** The jewel with a halo ring around it: the last thing a visitor sees before getting in touch. */
export const haloedJewel = {
	edgePoint: withHalo(brilliantJewel.edgePoint),
	surfacePoint: withHalo(brilliantJewel.surfacePoint),
	edgeShare: brilliantJewel.edgeShare
};
