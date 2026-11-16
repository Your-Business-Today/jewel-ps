const middleBand = '-45% 0px -45% 0px';

/**
 * Svelte action: calls back when the element reaches the middle of the screen.
 * @param {HTMLElement} node
 * @param {() => void} onCentred
 */
export function centredInView(node, onCentred) {
	let callback = onCentred;
	const watching = new IntersectionObserver(([entry]) => entry.isIntersecting && callback(), { rootMargin: middleBand });
	watching.observe(node);
	return {
		/** @param {() => void} nextOnCentred */
		update(nextOnCentred) {
			callback = nextOnCentred;
		},
		destroy() {
			watching.disconnect();
		}
	};
}
