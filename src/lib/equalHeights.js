// Svelte action: give every element under `node` that matches `selector`
// the height of the tallest one, so cards meant to match stay the same size
// however their text wraps. Re-measures when the container changes width
// and once the web fonts have loaded.

/**
 * @param {HTMLElement} node
 * @param {string} selector
 */
export function equalHeights(node, selector) {
	let lastWidth = -1;

	function run() {
		const els = /** @type {HTMLElement[]} */ ([...node.querySelectorAll(selector)]);
		if (els.length < 2) return;
		for (const el of els) el.style.minHeight = '';
		const tallest = Math.max(...els.map((el) => el.offsetHeight));
		for (const el of els) el.style.minHeight = `${tallest}px`;
	}

	const ro = new ResizeObserver(([entry]) => {
		const width = Math.round(entry.contentRect.width);
		if (width === lastWidth) return;
		lastWidth = width;
		run();
	});
	ro.observe(node);
	document.fonts?.ready.then(run);

	return {
		/** @param {string} next */
		update(next) {
			selector = next;
			run();
		},
		destroy() {
			ro.disconnect();
		}
	};
}
