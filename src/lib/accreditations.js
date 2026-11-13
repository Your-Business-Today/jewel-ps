/** @typedef {import('$lib/site.js').Accreditation} Accreditation */

/**
 * The schemes whose expiry date has not passed, so the site never shows a lapsed accreditation.
 * @param {Accreditation[]} accreditations
 */
export function accreditationsInForce(accreditations) {
	const today = new Date().toISOString().slice(0, 10);
	return accreditations.filter((accreditation) => !accreditation.expires || accreditation.expires >= today);
}
