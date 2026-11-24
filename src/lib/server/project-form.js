import { ProjectLimits, ProjectServices } from '$lib/project-limits.js';
import { isImageAddress } from '$lib/image-address.js';

const Positions = { first: 0, last: 1000 };
const serviceIds = ProjectServices.map((service) => service.id);

/** @param {FormData} form @param {string} field */
function textFrom(form, field) {
	const value = form.get(field);
	return typeof value === 'string' ? value.trim() : '';
}

/** @param {FormData} form @param {string} field */
const textsFrom = (form, field) => form.getAll(field).map((value) => (typeof value === 'string' ? value.trim() : ''));

/** @param {FormData} form @returns {{ src: string, alt: string }[]} */
function photosFrom(form) {
	const alts = textsFrom(form, 'photoAlt');
	return textsFrom(form, 'photoSrc').map((src, position) => ({ src, alt: alts[position] ?? '' }));
}

/** @param {{ src: string }} photo */
const isAllowedPhotoAddress = ({ src }) => src.length <= ProjectLimits.longestImage && isImageAddress(src);

/** @param {{ alt: string }} photo */
const isDescriptionTooLong = ({ alt }) => alt.length > ProjectLimits.longestAlt;

/** @param {{ src: string, alt: string }[]} photos @returns {string} */
function problemWithPhotos(photos) {
	if (!photos.length) return 'Add at least one photo.';
	if (photos.length > ProjectLimits.mostPhotos) return `A project can have at most ${ProjectLimits.mostPhotos} photos.`;
	if (!photos.every(isAllowedPhotoAddress)) return 'Each photo must be one of the site’s images or an https:// address.';
	if (photos.some((photo) => !photo.alt)) return 'Describe every photo, for people who cannot see it.';
	if (photos.some(isDescriptionTooLong)) return `A photo’s description can be at most ${ProjectLimits.longestAlt} characters.`;
	return '';
}

/** @param {Record<string, string>} values @returns {string} the first reason the values do not fit their columns, or nothing */
function problemWith(values) {
	const { name, location, service, summary } = values;
	const position = Number(values.position);
	if (!name) return 'Give the project a name.';
	if (name.length > ProjectLimits.longestName) return `The name can be at most ${ProjectLimits.longestName} characters.`;
	if (location.length > ProjectLimits.longestLocation) return `The location can be at most ${ProjectLimits.longestLocation} characters.`;
	if (!serviceIds.includes(service)) return 'Choose the page the project shows on.';
	if (!summary) return 'Say in a sentence or two what was done.';
	if (summary.length > ProjectLimits.longestSummary) return `The summary can be at most ${ProjectLimits.longestSummary} characters.`;
	if (!Number.isInteger(position) || position < Positions.first || position > Positions.last) return `The order must be a whole number from ${Positions.first} to ${Positions.last}.`;
	return '';
}

/**
 * The completed project a submitted admin form describes, checked against the table's columns.
 * @param {FormData} form
 * @returns {{ fields: import('./projects-store.js').ProjectFields, problem: '' } | { fields: null, problem: string }}
 */
export function projectFromForm(form) {
	const values = Object.fromEntries(['name', 'location', 'service', 'summary', 'position'].map((field) => [field, textFrom(form, field)]));
	const photos = photosFrom(form);
	const problem = problemWith(values) || problemWithPhotos(photos);
	if (problem) return { fields: null, problem };
	const fields = { ...values, photos, position: Number(values.position) };
	return { fields: /** @type {import('./projects-store.js').ProjectFields} */ (fields), problem: '' };
}
