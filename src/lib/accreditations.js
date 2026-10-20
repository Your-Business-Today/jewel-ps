import { accreditations } from '$lib/site.js';

/** The schemes whose expiry date has not passed, so the site never shows a lapsed accreditation. */
export function accreditationsInForce() {
	const today = new Date().toISOString().slice(0, 10);
	return accreditations.filter((accreditation) => !accreditation.expires || accreditation.expires >= today);
}
