import { ParticleMotion } from './particle-settings.js';
import { Spins } from './shapes/particle-shape.js';

/** @typedef {import('./shapes/particle-shape.js').ParticleShape} ParticleShape */

/** The particles' positions and their pull towards the shape they are making. */
export class ParticleField {
	/** @param {ParticleShape} shape */
	constructor(shape) {
		this.shape = shape;
		this.count = shape.count;
		this.positions = Float32Array.from(shape.positions, (value) => value * (1 + Math.random() * 2));
		this.velocities = new Float32Array(this.count * 3);
		this.riseOffsets = Float32Array.from({ length: this.count }, () => Math.random() * ParticleMotion.riseHeight);
		this.turn = 0;
		this.pointer = { x: 0, y: 0, isNear: false };
	}

	/** @param {ParticleShape} shape */
	takeShape(shape) {
		this.shape = shape;
	}

	/** @param {number} x @param {number} y */
	scatterFrom(x, y) {
		for (let index = 0; index < this.count; index++) {
			const offset = index * 3;
			const awayX = this.positions[offset] - x;
			const awayY = this.positions[offset + 1] - y;
			const distance = Math.hypot(awayX, awayY) || 1;
			const speed = ParticleMotion.scatterSpeed * Math.random();
			this.velocities[offset] += (awayX / distance) * speed;
			this.velocities[offset + 1] += (awayY / distance) * speed;
			this.velocities[offset + 2] += (Math.random() - 0.5) * speed;
		}
	}

	step() {
		this.turn += ParticleMotion.rotationPerFrame;
		const cosine = Math.cos(this.turn);
		const sine = Math.sin(this.turn);
		for (let index = 0; index < this.count; index++) {
			this.moveParticle(index, cosine, sine);
		}
	}

	/** @param {number} index @param {number} cosine @param {number} sine */
	moveParticle(index, cosine, sine) {
		const home = this.homeOf(index, cosine, sine);
		const offset = index * 3;
		for (let axis = 0; axis < 3; axis++) {
			const pull = (home[axis] - this.positions[offset + axis]) * ParticleMotion.spring;
			this.velocities[offset + axis] = (this.velocities[offset + axis] + pull) * ParticleMotion.damping;
		}
		this.pushAwayFromPointer(offset);
		for (let axis = 0; axis < 3; axis++) this.positions[offset + axis] += this.velocities[offset + axis];
	}

	/** @param {number} index @param {number} cosine @param {number} sine */
	homeOf(index, cosine, sine) {
		const offset = index * 3;
		const { positions, isRising, spin } = this.shape;
		const x = positions[offset];
		const y = positions[offset + 1] + this.riseOf(index, isRising[index]);
		const z = positions[offset + 2];
		if (spin === Spins.facing) return [x * cosine - y * sine, x * sine + y * cosine, z];
		return [x * cosine + z * sine, y, z * cosine - x * sine];
	}

	/** @param {number} index @param {number} isRising */
	riseOf(index, isRising) {
		if (!isRising) return 0;
		this.riseOffsets[index] = (this.riseOffsets[index] + ParticleMotion.risePerFrame) % ParticleMotion.riseHeight;
		return this.riseOffsets[index];
	}

	/** @param {number} offset */
	pushAwayFromPointer(offset) {
		if (!this.pointer.isNear) return;
		const awayX = this.positions[offset] - this.pointer.x;
		const awayY = this.positions[offset + 1] - this.pointer.y;
		const distance = Math.hypot(awayX, awayY);
		if (distance >= ParticleMotion.repelRadius || distance === 0) return;
		const strength = ParticleMotion.repelStrength * (1 - distance / ParticleMotion.repelRadius);
		this.velocities[offset] += (awayX / distance) * strength;
		this.velocities[offset + 1] += (awayY / distance) * strength;
	}
}
