/** @param {HTMLFieldSetElement} stepFieldset */
export function isStepReady(stepFieldset) {
	const fields = /** @type {HTMLInputElement[]} */ ([...stepFieldset.elements]);
	const firstUnfinished = fields.find((field) => !field.checkValidity());
	if (!firstUnfinished) return true;
	firstUnfinished.reportValidity();
	return false;
}
