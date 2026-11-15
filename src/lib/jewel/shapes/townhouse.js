import { edgePicker, rectangleEdges } from './shape-sampling.js';

/** @typedef {import('./shape-sampling.js').Point} Point */

const House = { left: -0.62, right: 0.62, bottom: -1, top: 0.72, front: 0.32, back: -0.32, parapet: 0.86 };
const Windows = { columns: 3, rows: 3, width: 0.22, height: 0.36, firstBottom: -0.36, rowGap: 0.36 };
const Door = { left: -0.13, right: 0.13, top: -0.52 };
const Chimney = { left: 0.24, right: 0.44, top: 1.08 };

/** @param {number} x @param {number} y @returns {Point} */
const onFront = (x, y) => [x, y, House.front];

const bodyEdges = [
	...rectangleEdges(onFront(House.left, House.bottom), onFront(House.right, House.parapet)),
	...rectangleEdges([House.left, House.bottom, House.back], [House.right, House.parapet, House.back]),
	...[House.left, House.right].flatMap((x) => [House.bottom, House.parapet].map((y) => /** @type {[Point, Point]} */ ([[x, y, House.front], [x, y, House.back]]))),
	/** @type {[Point, Point]} */ ([onFront(House.left, House.top), onFront(House.right, House.top)])
];

function windowEdges() {
	const columnWidth = (House.right - House.left) / Windows.columns;
	return Array.from({ length: Windows.columns * Windows.rows }, (_, index) => {
		const centre = House.left + columnWidth * ((index % Windows.columns) + 0.5);
		const bottom = Windows.firstBottom + Windows.rowGap * Math.floor(index / Windows.columns);
		const isDoorway = bottom === Windows.firstBottom && index % Windows.columns === 1;
		const sillBottom = isDoorway ? bottom + Windows.height / 3 : bottom;
		return rectangleEdges(onFront(centre - Windows.width / 2, sillBottom), onFront(centre + Windows.width / 2, bottom + Windows.height - Windows.rowGap / 6));
	}).flat();
}

const detailEdges = [
	...rectangleEdges(onFront(Door.left, House.bottom), onFront(Door.right, Door.top)),
	...rectangleEdges([Chimney.left, House.parapet, 0], [Chimney.right, Chimney.top, 0])
];

function surfacePoint() {
	const x = House.left + Math.random() * (House.right - House.left);
	const y = House.bottom + Math.random() * (House.parapet - House.bottom);
	return onFront(x, y);
}

/** A London townhouse: three storeys of sash windows, a front door and a chimney stack. */
export const townhouse = {
	edgePoint: edgePicker([...bodyEdges, ...windowEdges(), ...detailEdges]),
	surfacePoint,
	edgeShare: 0.86
};
