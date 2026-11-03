import { elementById } from './dom.js';

/**
 * @param {HTMLElement} box
 * @param {string[]} items
 * @param {string} attribute
 */
function optionsIn(box, items, attribute) {
	if (!items.length) return /** @type {HTMLElement[]} */ (Array.from(box.querySelectorAll('.radio-opt')));
	return items.map((item) => {
		const option = document.createElement('div');
		option.className = 'radio-opt';
		option.textContent = item;
		option.setAttribute(attribute, item);
		box.appendChild(option);
		return option;
	});
}

/**
 * @param {string} containerId
 * @param {string[]} items
 * @param {string} attribute
 * @param {(value: string) => void} onPick
 * @param {() => void} afterPick
 */
export function radioGroup(containerId, items, attribute, onPick, afterPick) {
	const options = optionsIn(elementById(containerId), items, attribute);
	options.forEach((option) => {
		option.onclick = () => {
			options.forEach((other) => other.classList.remove('on'));
			option.classList.add('on');
			onPick(option.getAttribute(attribute) ?? '');
			afterPick();
		};
	});
}
