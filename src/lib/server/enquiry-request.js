import { enquiryTypes } from '$lib/site.js';
import { enquiryLimits, enquiryProblems } from '$lib/enquiry/enquiry-limits.js';
import { readEnquiryPhotos } from './enquiry-photos.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nonDigits = /\D/g;
const phoneLimits = enquiryLimits.phone;

/** @param {FormData} formData @param {string} fieldName */
function textFrom(formData, fieldName) {
	const entry = formData.get(fieldName) ?? '';
	return String(entry).trim();
}

/** @param {FormData} formData */
function enquiryValuesFrom(formData) {
	return {
		name: textFrom(formData, 'name'),
		email: textFrom(formData, 'email'),
		phone: textFrom(formData, 'phone'),
		postcode: textFrom(formData, 'postcode'),
		service: textFrom(formData, 'service'),
		message: textFrom(formData, 'message')
	};
}

/** @param {string} value @param {{ shortest: number, longest: number }} limits */
function isWithin(value, limits) {
	return value.length >= limits.shortest && value.length <= limits.longest;
}

/** @param {string} phone */
function isPhone(phone) {
	if (!phone) return true;
	const digitCount = phone.replace(nonDigits, '').length;
	return digitCount >= phoneLimits.fewestDigits && phone.length <= phoneLimits.longest;
}

/** @param {ReturnType<typeof enquiryValuesFrom>} values */
function fieldChecks(values) {
	return {
		name: isWithin(values.name, enquiryLimits.name),
		email: isWithin(values.email, enquiryLimits.email) && emailPattern.test(values.email),
		phone: isPhone(values.phone),
		postcode: isWithin(values.postcode, enquiryLimits.postcode),
		service: enquiryTypes.includes(values.service),
		message: isWithin(values.message, enquiryLimits.message)
	};
}

/** @param {ReturnType<typeof enquiryValuesFrom>} values */
function problemsWith(values) {
	const checks = Object.entries(fieldChecks(values));
	const failedChecks = checks.filter(([, isFine]) => !isFine);
	const problemsByField = /** @type {Record<string, string>} */ (enquiryProblems);
	return Object.fromEntries(failedChecks.map(([fieldName]) => [fieldName, problemsByField[fieldName]]));
}

/** @param {FormData} formData */
export function readEnquiryRequest(formData) {
	const values = enquiryValuesFrom(formData);
	const errors = problemsWith(values);
	const { photos, problem: photoProblem } = readEnquiryPhotos(formData);
	if (photoProblem) errors.photos = photoProblem;
	return { values, errors, photos };
}
