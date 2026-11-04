import { googleReviewLink, readGoogleRating } from '$lib/server/google-reviews.js';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const googleRating = await readGoogleRating();
	return { googleRating, googleReviewLink: googleReviewLink() };
};
