import { AdditiveBlending, ShaderMaterial } from 'three';
import { ParticleSizes } from './particle-settings.js';

const vertexShader = `
	attribute float size;
	attribute vec3 colour;
	uniform float pixelRatio;
	uniform float perspectiveScale;
	varying vec3 particleColour;
	void main() {
		vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix * viewPosition;
		gl_PointSize = size * pixelRatio * perspectiveScale / -viewPosition.z;
		particleColour = colour;
	}
`;

const fragmentShader = `
	varying vec3 particleColour;
	void main() {
		float distanceFromCentre = length(gl_PointCoord - vec2(0.5));
		float glow = smoothstep(0.5, 0.0, distanceFromCentre);
		gl_FragColor = vec4(particleColour * glow, glow);
	}
`;

/** Soft round points of light that brighten where they overlap. @param {number} pixelRatio */
export function particleMaterial(pixelRatio) {
	return new ShaderMaterial({
		uniforms: {
			pixelRatio: { value: pixelRatio },
			perspectiveScale: { value: ParticleSizes.perspectiveScale }
		},
		vertexShader,
		fragmentShader,
		blending: AdditiveBlending,
		depthWrite: false,
		transparent: true
	});
}
