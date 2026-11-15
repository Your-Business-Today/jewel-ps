/** @typedef {import('./shape-sampling.js').Point} Point */

/** The axis a shape turns about: upright, or the one facing the visitor. */
export const Spins = /** @type {const} */ ({ upright: 'upright', facing: 'facing' });

/**
 * @typedef {object} ShapeDrawing
 * @property {() => Point} edgePoint a point on one of the shape's lines
 * @property {() => Point} surfacePoint a point on one of the shape's faces
 * @property {number} edgeShare how many of the particles draw the lines rather than the faces
 * @property {(() => Point) | undefined} [risingPoint] where a rising particle, an ember, starts
 * @property {number} [risingShare]
 * @property {'upright' | 'facing'} [spin] turning about the upright axis, or about the axis facing the visitor
 */

/**
 * @typedef {object} ParticleShape
 * @property {Float32Array} positions three numbers to a particle
 * @property {Uint8Array} isRising one to a particle that drifts upwards
 * @property {number} count
 * @property {'upright' | 'facing'} spin
 */

/** @param {ShapeDrawing} drawing @param {number} index @param {number} count */
function pointFor(drawing, index, count) {
	const risingPoint = drawing.risingPoint;
	const risingCount = Math.round(count * (drawing.risingShare ?? 0));
	if (risingPoint && index < risingCount) return { point: risingPoint(), isRising: true };
	const isOnEdge = Math.random() < drawing.edgeShare;
	return { point: isOnEdge ? drawing.edgePoint() : drawing.surfacePoint(), isRising: false };
}

/** @param {ShapeDrawing} drawing @param {number} count @returns {ParticleShape} */
export function particleShape(drawing, count) {
	const positions = new Float32Array(count * 3);
	const isRising = new Uint8Array(count);
	for (let index = 0; index < count; index++) {
		const sample = pointFor(drawing, index, count);
		positions.set(sample.point, index * 3);
		isRising[index] = sample.isRising ? 1 : 0;
	}
	return { positions, isRising, count, spin: drawing.spin ?? Spins.upright };
}
