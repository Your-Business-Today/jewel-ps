import { JewelScene } from './jewel-scene.js';
import { jewelShapes } from './jewel-shapes.js';
import { particleShape } from './shapes/particle-shape.js';
import { particleCount } from './jewel-support.js';

/** @typedef {import('./jewel-shapes.js').JewelShapeName} JewelShapeName */

/** The particle jewel on one canvas, following the visitor's pointer and only running while it can be seen. */
export class JewelStage {
	/** @param {HTMLCanvasElement} canvas @param {JewelShapeName} shapeName */
	constructor(canvas, shapeName) {
		this.canvas = canvas;
		this.count = particleCount();
		/** @type {Map<JewelShapeName, import('./shapes/particle-shape.js').ParticleShape>} */
		this.shapes = new Map();
		this.scene = new JewelScene(canvas, this.shapeCalled(shapeName));
		this.scene.fitToCanvas();
		this.resizing = new ResizeObserver(() => this.scene.fitToCanvas());
		this.resizing.observe(canvas);
		this.watching = new IntersectionObserver(([entry]) => this.runWhileSeen(entry.isIntersecting));
		this.watching.observe(canvas);
		this.followPointer = (/** @type {PointerEvent} */ event) => this.pointerMovedTo(event);
		this.scatter = (/** @type {PointerEvent} */ event) => this.scatterAt(event);
		window.addEventListener('pointermove', this.followPointer, { passive: true });
		window.addEventListener('pointerdown', this.scatter, { passive: true });
	}

	/** @param {JewelShapeName} shapeName */
	shapeCalled(shapeName) {
		const known = this.shapes.get(shapeName);
		if (known) return known;
		const shape = particleShape(jewelShapes[shapeName], this.count);
		this.shapes.set(shapeName, shape);
		return shape;
	}

	/** @param {JewelShapeName} shapeName */
	show(shapeName) {
		this.scene.takeShape(this.shapeCalled(shapeName));
	}

	/** @param {boolean} isSeen */
	runWhileSeen(isSeen) {
		if (isSeen) return this.scene.start();
		this.scene.stop();
	}

	/** @param {PointerEvent} event */
	pointerMovedTo(event) {
		this.scene.followPointer(event.clientX, event.clientY, this.isOverCanvas(event));
	}

	/** @param {PointerEvent} event */
	scatterAt(event) {
		if (!this.isOverCanvas(event)) return;
		this.scene.scatterAt(event.clientX, event.clientY);
	}

	/** @param {PointerEvent} event */
	isOverCanvas(event) {
		const bounds = this.canvas.getBoundingClientRect();
		const isAcross = event.clientX >= bounds.left && event.clientX <= bounds.right;
		return isAcross && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
	}

	destroy() {
		window.removeEventListener('pointermove', this.followPointer);
		window.removeEventListener('pointerdown', this.scatter);
		this.resizing.disconnect();
		this.watching.disconnect();
		this.scene.dispose();
	}
}
