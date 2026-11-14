import { page } from '$app/state';
import { defaultPhotoFor, refurbishmentSlotFor } from '$lib/photo-slots.js';

/**
 * The photo a page shows in a slot: the one chosen at /admin/photos, else the default in code.
 * @param {string} slot
 */
export function photoFor(slot) {
	const siteData = page.data;
	const chosen = /** @type {Record<string, string> | undefined} */ (siteData.sitePhotos);
	return chosen?.[slot] || defaultPhotoFor(slot);
}

/** The photo for one of the refurbishment services, by its title. @param {string} title */
export const refurbishmentPhotoFor = (title) => photoFor(refurbishmentSlotFor(title));
