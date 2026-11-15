import { BufferAttribute, BufferGeometry, PerspectiveCamera, Points, Scene, Vector3, WebGLRenderer } from 'three';
import { ParticleField } from './particle-field.js';
import { particleMaterial } from './particle-material.js';
import { particleColours, particleSizes } from './particle-colours.js';
import { SceneFraming } from './particle-settings.js';

/** @typedef {import('./shapes/particle-shape.js').ParticleShape} ParticleShape */

/** A canvas showing the particle jewel, turning and reaching for the shape it is given. */
export class JewelScene {
	/** @param {HTMLCanvasElement} canvas @param {ParticleShape} shape */
	constructor(canvas, shape) {
		const pixelRatio = Math.min(window.devicePixelRatio, SceneFraming.pixelRatioCeiling);
		this.canvas = canvas;
		this.renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
		this.renderer.setPixelRatio(pixelRatio);
		this.camera = new PerspectiveCamera(SceneFraming.fieldOfViewDegrees, 1, SceneFraming.nearPlane, SceneFraming.farPlane);
		this.field = new ParticleField(shape);
		this.geometry = new BufferGeometry();
		this.positionAttribute = new BufferAttribute(this.field.positions, 3);
		this.geometry.setAttribute('position', this.positionAttribute);
		this.geometry.setAttribute('size', new BufferAttribute(particleSizes(this.field.count), 1));
		this.paint(shape);
		this.scene = new Scene();
		this.scene.add(new Points(this.geometry, particleMaterial(pixelRatio)));
		this.isRunning = false;
		this.frame = 0;
	}

	/** @param {ParticleShape} shape */
	takeShape(shape) {
		this.field.takeShape(shape);
		this.paint(shape);
	}

	/** @param {ParticleShape} shape */
	paint(shape) {
		this.geometry.setAttribute('colour', new BufferAttribute(particleColours(shape.isRising), 3));
	}

	fitToCanvas() {
		const { clientWidth, clientHeight } = this.canvas;
		const aspect = clientWidth / Math.max(clientHeight, 1);
		const halfViewTangent = Math.tan((SceneFraming.fieldOfViewDegrees * Math.PI) / 360);
		const cameraPosition = this.camera.position;
		this.camera.aspect = aspect;
		cameraPosition.z = SceneFraming.visibleRadius / (halfViewTangent * Math.min(1, aspect));
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(clientWidth, clientHeight, false);
	}

	/** Where the visitor's pointer falls on the jewel's plane. @param {number} clientX @param {number} clientY */
	pointerOnJewel(clientX, clientY) {
		const bounds = this.canvas.getBoundingClientRect();
		const across = ((clientX - bounds.left) / bounds.width) * 2 - 1;
		const down = ((clientY - bounds.top) / bounds.height) * 2 - 1;
		const cameraPosition = this.camera.position;
		const ray = new Vector3(across, -down, 0.5).unproject(this.camera).sub(cameraPosition).normalize();
		const reach = -cameraPosition.z / ray.z;
		return { x: cameraPosition.x + ray.x * reach, y: cameraPosition.y + ray.y * reach };
	}

	/** @param {number} clientX @param {number} clientY @param {boolean} isNear */
	followPointer(clientX, clientY, isNear) {
		this.field.pointer = { ...this.pointerOnJewel(clientX, clientY), isNear };
	}

	/** @param {number} clientX @param {number} clientY */
	scatterAt(clientX, clientY) {
		const pointer = this.pointerOnJewel(clientX, clientY);
		this.field.scatterFrom(pointer.x, pointer.y);
	}

	start() {
		if (this.isRunning) return;
		this.isRunning = true;
		const draw = () => {
			this.field.step();
			this.positionAttribute.needsUpdate = true;
			this.renderer.render(this.scene, this.camera);
			this.frame = requestAnimationFrame(draw);
		};
		draw();
	}

	stop() {
		this.isRunning = false;
		cancelAnimationFrame(this.frame);
	}

	dispose() {
		this.stop();
		this.geometry.dispose();
		this.renderer.dispose();
	}
}
