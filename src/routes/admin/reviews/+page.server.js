import { fail } from '@sveltejs/kit';
import { dbConfigured } from '$lib/server/db.js';
import { emailConfigured } from '$lib/server/email.js';
import { googleRatingConfigured, googleReviewLink, readGoogleRating } from '$lib/server/google-reviews.js';
import { sendReviewRequestEmail } from '$lib/server/review-request-email.js';
import { earlierRequestTo, readRequestsSent, recordRequestSent } from '$lib/server/review-requests.js';

const Limits = { longestName: 120, longestWork: 160, longestError: 300 };
const emailShape = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @param {FormData} form @param {string} field */
function textFrom(form, field) {
	const value = form.get(field);
	return typeof value === 'string' ? value.trim() : '';
}

/**
 * @param {number} status
 * @param {{ name: string, email: string, work: string }} values
 * @param {string} error
 * @param {string} [askedBefore] when the same address was last asked, if it was
 */
function refuse(status, values, error, askedBefore = '') {
	return fail(status, { values, error, askedBefore });
}

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const [rating, sent] = await Promise.all([readGoogleRating(), readRequestsSent()]);
	return {
		reviewLink: googleReviewLink(),
		ratingConfigured: googleRatingConfigured(),
		rating,
		emailConfigured: emailConfigured(),
		dbConfigured: dbConfigured(),
		...sent
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	send: async ({ request }) => {
		const form = await request.formData();
		const name = textFrom(form, 'name').slice(0, Limits.longestName);
		const email = textFrom(form, 'email').toLowerCase();
		const work = textFrom(form, 'work').slice(0, Limits.longestWork);
		const askAgain = form.get('again') === 'yes';
		const values = { name, email, work };

		const reviewLink = googleReviewLink();
		if (!reviewLink) return refuse(400, values, 'The Google Place ID is not set yet, so there is no review link to send.');
		if (!emailConfigured()) return refuse(400, values, 'Email is not set up (RESEND_API_KEY), so nothing can be sent.');
		if (!name) return refuse(400, values, 'Give the client’s name, as the email greets them by it.');
		if (!emailShape.test(email)) return refuse(400, values, 'That email address does not look right.');

		const earlier = await earlierRequestTo(email);
		if (earlier && !askAgain) return refuse(409, values, `${email} was already asked for a review.`, earlier.sent_at);

		try {
			await sendReviewRequestEmail(values, reviewLink);
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Unknown error';
			return refuse(502, values, `The email did not go: ${message.slice(0, Limits.longestError)}`);
		}

		await recordRequestSent(values);
		return { sentTo: email };
	}
};
