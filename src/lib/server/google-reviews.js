/**
 * The Jewel Property Serve rating on Google, read live from the Places API
 * (New) and remembered for a few hours so the homepage never waits on Google.
 *
 * Settings (Vercel → Settings → Environment Variables):
 *   GOOGLE_PLACES_API_KEY — a Google Cloud API key with Places API (New) enabled
 *   GOOGLE_PLACE_ID       — the Place ID of the Business Profile at 48 Warwick Street
 *
 * Without the Place ID there is no review link; without the key there is no
 * live rating. Either way the site carries on without them.
 */
import { env } from '$env/dynamic/private';

/**
 * @typedef {Object} GoogleRating
 * @property {number} rating        the average, 1 to 5
 * @property {number} reviewCount   how many reviews it is the average of
 * @property {string} profileUrl    the Business Profile on Google Maps
 */

const PlacesApi = {
	placeUrl: 'https://places.googleapis.com/v1/places/',
	fieldsWanted: 'rating,userRatingCount,googleMapsUri'
};

const Durations = {
	ratingStaysFreshFor: 6 * 60 * 60 * 1000,
	retryAfterAFailure: 10 * 60 * 1000,
	longestWaitForGoogle: 2500
};

/** @type {{ rating: GoogleRating | null, nextReadAt: number }} */
let remembered = { rating: null, nextReadAt: 0 };

/** @param {string} name */
function setting(name) {
	return (env[name] ?? '').trim();
}

export function googlePlaceId() {
	return setting('GOOGLE_PLACE_ID');
}

export function googleRatingConfigured() {
	const apiKey = setting('GOOGLE_PLACES_API_KEY');
	const placeId = googlePlaceId();
	return Boolean(apiKey && placeId);
}

/** The page where a client writes a Google review of us, or '' until the Place ID is set. */
export function googleReviewLink() {
	const placeId = googlePlaceId();
	if (!placeId) return '';
	const encodedPlaceId = encodeURIComponent(placeId);
	return `https://search.google.com/local/writereview?placeid=${encodedPlaceId}`;
}

/** @returns {Promise<GoogleRating | null>} */
async function askGoogleForTheRating() {
	const placeId = encodeURIComponent(googlePlaceId());
	const response = await fetch(`${PlacesApi.placeUrl}${placeId}`, {
		headers: {
			'X-Goog-Api-Key': setting('GOOGLE_PLACES_API_KEY'),
			'X-Goog-FieldMask': PlacesApi.fieldsWanted
		},
		signal: AbortSignal.timeout(Durations.longestWaitForGoogle)
	});
	if (!response.ok) {
		const detail = await response.text().catch(() => '');
		throw new Error(`Google Places responded ${response.status}: ${detail.slice(0, 300)}`);
	}
	const place = await response.json();
	const rating = Number(place.rating);
	const reviewCount = Number(place.userRatingCount);
	const hasReviews = Number.isFinite(rating) && reviewCount > 0;
	if (!hasReviews) return null;
	return { rating, reviewCount, profileUrl: place.googleMapsUri ?? '' };
}

/**
 * The rating as Google last gave it. Read again once it is a few hours old;
 * when Google fails, the last good rating stands and it is tried again soon.
 * @returns {Promise<GoogleRating | null>}
 */
export async function readGoogleRating() {
	if (!googleRatingConfigured()) return null;
	const now = Date.now();
	const stillFresh = now < remembered.nextReadAt;
	if (stillFresh) return remembered.rating;
	try {
		const rating = await askGoogleForTheRating();
		remembered = { rating, nextReadAt: now + Durations.ratingStaysFreshFor };
	} catch (error) {
		console.error('Could not read the Google rating', error);
		remembered = { rating: remembered.rating, nextReadAt: now + Durations.retryAfterAFailure };
	}
	return remembered.rating;
}
