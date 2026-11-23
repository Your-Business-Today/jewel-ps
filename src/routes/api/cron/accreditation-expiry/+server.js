import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { accreditationsForSite } from '$lib/server/accreditations-store.js';
import { accreditationsToRemindAbout, todayAsDate } from '$lib/accreditation-expiry.js';
import { emailConfigured } from '$lib/server/email.js';
import { sendAccreditationExpiryEmail } from '$lib/server/accreditation-expiry-email.js';

const HttpStatus = { unauthorised: 401, unavailable: 503 };
const vercelCronAgent = 'vercel-cron/';

/**
 * Vercel's scheduler signs its call with CRON_SECRET when one is set; until then only its own user agent is let in.
 * @param {Request} request
 */
function isCalledByTheScheduler(request) {
	const secret = (env.CRON_SECRET ?? '').trim();
	if (secret) return request.headers.get('authorization') === `Bearer ${secret}`;
	return (request.headers.get('user-agent') ?? '').startsWith(vercelCronAgent);
}

/** Runs once a day: emails the office about any accreditation four weeks or one week from expiry, or lapsing today. */
export async function GET({ request }) {
	if (!isCalledByTheScheduler(request)) return json({ error: 'Not the scheduler' }, { status: HttpStatus.unauthorised });
	if (!emailConfigured()) return json({ error: 'Email is not configured' }, { status: HttpStatus.unavailable });
	const today = todayAsDate();
	const dueForReminder = accreditationsToRemindAbout(await accreditationsForSite(), today);
	if (dueForReminder.length) await sendAccreditationExpiryEmail(dueForReminder, today);
	return json({ reminded: dueForReminder.map((accreditation) => accreditation.name) });
}
