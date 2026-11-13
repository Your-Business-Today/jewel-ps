import { TextLimits, textSlotNamed } from '$lib/text-slots.js';

/** @param {FormData} form @param {string} field */
function textFrom(form, field) {
	const value = form.get(field);
	return typeof value === 'string' ? value.trim() : '';
}

/**
 * The slot a submitted admin form names, and its new words when the form carries them, checked against the column.
 * @param {FormData} form
 * @param {boolean} needsText
 */
export function siteTextFromForm(form, needsText) {
	const slot = textFrom(form, 'slot');
	const text = textFrom(form, 'text');
	const textSlot = textSlotNamed(slot);
	if (!textSlot) return { slot, text, problem: 'That is not a place on the site that takes text.' };
	if (!needsText) return { slot, text, problem: '' };
	const longest = TextLimits[textSlot.kind];
	if (!text) return { slot, text, problem: 'Write something, or use the default.' };
	if (text.length > longest) return { slot, text, problem: `This can be at most ${longest} characters; it is ${text.length}.` };
	return { slot, text, problem: '' };
}
