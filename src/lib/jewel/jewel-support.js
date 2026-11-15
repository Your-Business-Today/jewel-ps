import { prefersReducedMotion } from '$lib/motion.js';
import { ParticleCounts } from './particle-settings.js';

function hasWebGl() {
	const probe = document.createElement('canvas');
	return Boolean(probe.getContext('webgl2') ?? probe.getContext('webgl'));
}

/** Whether this visitor gets the moving jewel, rather than its still picture. */
export const canAnimateJewel = () => !prefersReducedMotion() && hasWebGl();

/** Fewer particles on phones, so the page stays quick. */
export function particleCount() {
	const isPhone = window.matchMedia(ParticleCounts.phoneWidthQuery).matches;
	return isPhone ? ParticleCounts.phone : ParticleCounts.desktop;
}
