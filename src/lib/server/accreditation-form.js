import { AccreditationLimits } from '$lib/accreditation-limits.js';
import { isImageAddress } from '$lib/image-address.js';

const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const secureAddress = /^https:\/\/\S+$/;
const Positions = { first: 0, last: 1000 };

/** @param {FormData} form @param {string} field */
function textFrom(form, field) {
	const value = form.get(field);
	return typeof value === 'string' ? value.trim() : '';
}

/** @param {string} value */
function isRealDate(value) {
	const date = new Date(`${value}T00:00:00Z`);
	return isoDate.test(value) && !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

/**
 * @param {Record<string, string>} values
 * @returns {string} the first reason the values do not fit their columns, or nothing
 */
function problemWith(values) {
	const { name, image, registration, expires, href } = values;
	const position = Number(values.position);
	if (!name) return 'Give the scheme a name.';
	if (name.length > AccreditationLimits.longestName) return `The name can be at most ${AccreditationLimits.longestName} characters.`;
	if (!image) return 'Choose a logo.';
	if (image.length > AccreditationLimits.longestImage) return `The logo address can be at most ${AccreditationLimits.longestImage} characters.`;
	if (!isImageAddress(image)) return 'The logo must be one of the site’s images or an https:// address.';
	if (registration.length > AccreditationLimits.longestRegistration) return `The registration number can be at most ${AccreditationLimits.longestRegistration} characters.`;
	if (expires && !isRealDate(expires)) return 'The expiry date is not a real date.';
	if (href.length > AccreditationLimits.longestLink) return `The link can be at most ${AccreditationLimits.longestLink} characters.`;
	if (href && !secureAddress.test(href)) return 'The link must start with https://.';
	if (!Number.isInteger(position) || position < Positions.first || position > Positions.last) return `The order must be a whole number from ${Positions.first} to ${Positions.last}.`;
	return '';
}

/**
 * The accreditation a submitted admin form describes, checked against the table's columns.
 * @param {FormData} form
 * @returns {{ fields: import('./accreditations-store.js').AccreditationFields, problem: '' } | { fields: null, problem: string }}
 */
export function accreditationFromForm(form) {
	const values = Object.fromEntries(['name', 'image', 'registration', 'expires', 'href', 'position'].map((field) => [field, textFrom(form, field)]));
	const problem = problemWith(values);
	if (problem) return { fields: null, problem };
	const fields = { ...values, expires: values.expires || null, position: Number(values.position) };
	return { fields: /** @type {import('./accreditations-store.js').AccreditationFields} */ (fields), problem: '' };
}
