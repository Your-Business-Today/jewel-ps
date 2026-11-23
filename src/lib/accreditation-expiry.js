/** @typedef {import('$lib/site.js').Accreditation} Accreditation */

/** How many days before its expiry date the office is told about a scheme, the last on the day it lapses. */
export const ReminderDays = { firstNotice: 28, finalNotice: 7, lapsed: 0 };

const reminderDays = Object.values(ReminderDays);
const millisecondsInADay = 86_400_000;

/** The date today, as the site's dates are kept. */
export const todayAsDate = () => new Date().toISOString().slice(0, 10);

/** @param {string} expires @param {string} today */
export function daysUntil(expires, today) {
	return Math.round((Date.parse(expires) - Date.parse(today)) / millisecondsInADay);
}

/** @param {string | null | undefined} expires @param {string} today */
export function isExpiringSoon(expires, today) {
	if (!expires) return false;
	const daysLeft = daysUntil(expires, today);
	return daysLeft >= ReminderDays.lapsed && daysLeft <= ReminderDays.firstNotice;
}

/**
 * The schemes the office is reminded about today: those exactly four weeks or one week from expiry, or lapsing today.
 * @param {Accreditation[]} accreditations @param {string} today
 */
export function accreditationsToRemindAbout(accreditations, today) {
	return accreditations.filter((accreditation) => accreditation.expires && reminderDays.includes(daysUntil(accreditation.expires, today)));
}
