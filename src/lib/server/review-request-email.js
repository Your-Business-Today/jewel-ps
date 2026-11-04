/**
 * The email that asks a past client for a Google review, sent through Resend
 * from the site's own verified domain. A reply reaches the enquiries inbox, so
 * a client who was not happy can tell us instead.
 */
import { env } from '$env/dynamic/private';
import { reviewRequestHtml, reviewRequestText } from '$lib/server/review-request-email-body.js';

const Defaults = {
	from: 'Jewel Property Serve <website@jewelps.co.uk>',
	replyTo: 'enquiries@jewelps.co.uk'
};

/** @param {string | undefined} value */
function trimmed(value) {
	return (value ?? '').trim();
}

/**
 * Throws when Resend refuses it, so the office sees that it did not go.
 * @param {import('$lib/server/review-request-email-body.js').ReviewRequest} request
 * @param {string} reviewLink
 */
export async function sendReviewRequestEmail(request, reviewLink) {
	const from = trimmed(env.CONTACT_FROM_EMAIL) || Defaults.from;
	const replyTo = trimmed(env.CONTACT_TO_EMAIL) || Defaults.replyTo;
	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${trimmed(env.RESEND_API_KEY)}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from,
			to: [request.email],
			reply_to: replyTo,
			subject: 'How did we do? A quick Google review for Jewel Property Serve',
			html: reviewRequestHtml(request, reviewLink),
			text: reviewRequestText(request, reviewLink)
		})
	});
	if (!response.ok) {
		const detail = await response.text().catch(() => '');
		throw new Error(`Resend responded ${response.status}: ${detail.slice(0, 300)}`);
	}
}
