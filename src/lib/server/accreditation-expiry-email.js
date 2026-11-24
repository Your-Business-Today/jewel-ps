/**
 * The email that tells the office an accreditation on the website is about to lapse, sent through Resend.
 */
import { env } from '$env/dynamic/private';
import { site } from '$lib/site.js';
import { daysUntil } from '$lib/accreditation-expiry.js';

const Defaults = {
	from: 'Jewel Property Serve <website@jewelps.co.uk>',
	to: 'enquiries@jewelps.co.uk'
};

/** @param {string | undefined} value */
const trimmed = (value) => (value ?? '').trim();

/** @param {number} daysLeft */
const whenItLapses = (daysLeft) => (daysLeft === 0 ? 'expires today, and the site stops showing it tomorrow' : `expires in ${daysLeft} days`);

/** @param {import('$lib/site.js').Accreditation} accreditation @param {string} today */
function lineFor(accreditation, today) {
	const expires = accreditation.expires ?? '';
	const registration = accreditation.registration ? ` (${accreditation.registration})` : '';
	return `${accreditation.name}${registration} ${whenItLapses(daysUntil(expires, today))}: ${expires}`;
}

/**
 * Throws when Resend refuses it, so the cron run shows that it did not go.
 * @param {import('$lib/site.js').Accreditation[]} accreditations @param {string} today
 */
export async function sendAccreditationExpiryEmail(accreditations, today) {
	const adminLink = `${site.url}/admin/accreditations`;
	const lines = accreditations.map((accreditation) => lineFor(accreditation, today));
	const text = [
		'These accreditations on jewelps.co.uk are about to lapse. The site stops showing a scheme the day after its expiry date.',
		'',
		...lines.map((line) => `- ${line}`),
		'',
		`Once a scheme is renewed, put its new expiry date in at ${adminLink} and save.`
	].join('\n');
	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${trimmed(env.RESEND_API_KEY)}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: trimmed(env.CONTACT_FROM_EMAIL) || Defaults.from,
			to: [trimmed(env.CONTACT_TO_EMAIL) || Defaults.to],
			subject: 'Website accreditations due for renewal',
			text
		})
	});
	if (!response.ok) {
		const detail = await response.text().catch(() => '');
		throw new Error(`Resend responded ${response.status}: ${detail.slice(0, 300)}`);
	}
}
