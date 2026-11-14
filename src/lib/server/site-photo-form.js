import { isImageAddress, longestImageAddress } from '$lib/image-address.js';
import { isPhotoSlot } from '$lib/photo-slots.js';

/** @param {FormData} form @param {string} field */
function textFrom(form, field) {
	const value = form.get(field);
	return typeof value === 'string' ? value.trim() : '';
}

/** @param {string} image */
function problemWithImage(image) {
	if (!image) return 'Choose a photo.';
	if (image.length > longestImageAddress) return `The photo address can be at most ${longestImageAddress} characters.`;
	if (!isImageAddress(image)) return 'The photo must be one of the site’s images or an https:// address.';
	return '';
}

/**
 * The slot a submitted admin form names, and the photo chosen for it when the form carries one.
 * @param {FormData} form
 * @param {boolean} needsImage
 */
export function sitePhotoFromForm(form, needsImage) {
	const slot = textFrom(form, 'slot');
	const image = textFrom(form, 'image');
	if (!isPhotoSlot(slot)) return { slot, image, problem: 'That is not a place on the site that takes a photo.' };
	return { slot, image, problem: needsImage ? problemWithImage(image) : '' };
}
