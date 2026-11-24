import { todayAsDate } from '$lib/accreditation-expiry.js';

/** @typedef {import('$lib/site.js').Accreditation} Accreditation */

/**
 * The schemes whose expiry date has not passed, so the site never shows a lapsed accreditation.
 * @param {Accreditation[]} accreditations
 */
export function accreditationsInForce(accreditations) {
	const today = todayAsDate();
	return accreditations.filter((accreditation) => !accreditation.expires || accreditation.expires >= today);
}
