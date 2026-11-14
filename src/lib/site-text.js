import { page } from '$app/state';
import { defaultTextFor, slotForTitle } from '$lib/text-slots.js';

/**
 * The words a page shows in a slot: the text saved at /admin/text, else the default in code.
 * @param {string} slot
 */
export function textFor(slot) {
	const siteData = page.data;
	const saved = /** @type {Record<string, string> | undefined} */ (siteData.siteText);
	return saved?.[slot] || defaultTextFor(slot);
}

/** The words for an item of a page's list, by its title. @param {string} prefix @param {string} title */
export const listTextFor = (prefix, title) => textFor(slotForTitle(prefix, title));
