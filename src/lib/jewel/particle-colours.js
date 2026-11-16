import { Color } from 'three';
import { ParticleColours, ParticleSizes } from './particle-settings.js';

const gold = new Color(ParticleColours.gold);
const goldLight = new Color(ParticleColours.goldLight);
const blue = new Color(ParticleColours.blue);
const ember = new Color(ParticleColours.ember);

/** @param {boolean} isRising */
function colourFor(isRising) {
	if (isRising) return ember;
	const pick = Math.random();
	if (pick < ParticleColours.blueShare) return blue;
	return pick < ParticleColours.blueShare + ParticleColours.lightShare ? goldLight : gold;
}

/** Navy-site gold, a little light gold and a few sparks of blue; embers glow orange. @param {Uint8Array} isRising */
export function particleColours(isRising) {
	const colours = new Float32Array(isRising.length * 3);
	isRising.forEach((rising, index) => colourFor(rising === 1).toArray(colours, index * 3));
	return colours;
}

/** @param {number} count */
export const particleSizes = (count) =>
	Float32Array.from({ length: count }, () => ParticleSizes.smallest + Math.random() * (ParticleSizes.largest - ParticleSizes.smallest));
