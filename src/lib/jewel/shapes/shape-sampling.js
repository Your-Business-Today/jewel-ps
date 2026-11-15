export const FullTurn = Math.PI * 2;

/** @typedef {[number, number, number]} Point */
/** @typedef {[Point, Point]} Edge */

/** @param {Point} start @param {Point} end @param {number} share @returns {Point} */
export function pointBetween(start, end, share) {
	return [
		start[0] + (end[0] - start[0]) * share,
		start[1] + (end[1] - start[1]) * share,
		start[2] + (end[2] - start[2]) * share
	];
}

/** @param {Edge} edge */
function edgeLength([start, end]) {
	return Math.hypot(end[0] - start[0], end[1] - start[1], end[2] - start[2]);
}

/**
 * Picks edges in proportion to their length, so long edges are drawn as densely as short ones.
 * @param {Edge[]} edges
 */
export function edgePicker(edges) {
	const lengths = edges.map(edgeLength);
	const totalLength = lengths.reduce((sum, length) => sum + length, 0);
	return () => {
		let distance = Math.random() * totalLength;
		const index = lengths.findIndex((length) => (distance -= length) <= 0);
		const edge = edges[Math.max(index, 0)];
		return pointBetween(edge[0], edge[1], Math.random());
	};
}

/** @param {number} radius @param {number} angle @param {number} height @returns {Point} */
export const pointOnCircle = (radius, angle, height) => [radius * Math.cos(angle), height, radius * Math.sin(angle)];

/** @param {number} sides @param {(angle: number) => Point} pointAt @returns {Edge[]} */
export function ringEdges(sides, pointAt) {
	return Array.from({ length: sides }, (_, side) => {
		const startAngle = (side / sides) * FullTurn;
		const endAngle = ((side + 1) / sides) * FullTurn;
		return [pointAt(startAngle), pointAt(endAngle)];
	});
}

/** @param {Point} corner @param {Point} oppositeCorner on the same flat face @returns {Edge[]} */
export function rectangleEdges(corner, oppositeCorner) {
	const [left, bottom, depth] = corner;
	const [right, top] = oppositeCorner;
	/** @type {Point[]} */
	const corners = [[left, bottom, depth], [right, bottom, depth], [right, top, depth], [left, top, depth]];
	return corners.map((point, index) => [point, corners[(index + 1) % corners.length]]);
}
