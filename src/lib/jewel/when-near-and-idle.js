const nearMargin = '200px';
const idleWaitCeiling = 3000;
const pauseWithoutIdleCallback = 1200;

/** @param {() => void} task */
function whenIdle(task) {
	if ('requestIdleCallback' in window) return requestIdleCallback(task, { timeout: idleWaitCeiling });
	setTimeout(task, pauseWithoutIdleCallback);
}

/** @param {() => void} task */
function afterPageSettles(task) {
	const runWhenIdle = () => whenIdle(task);
	if (document.readyState === 'complete') return runWhenIdle();
	window.addEventListener('load', runWhenIdle, { once: true });
}

/**
 * Runs the task once the element is about to scroll into view and the page has finished loading,
 * so the jewel never slows the first paint of the words around it.
 * @param {HTMLElement} node
 * @param {() => void} task
 */
export function whenNearAndIdle(node, task) {
	const watching = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			watching.disconnect();
			afterPageSettles(task);
		},
		{ rootMargin: nearMargin }
	);
	watching.observe(node);
	return () => watching.disconnect();
}
