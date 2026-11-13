import { accreditationsForSite } from '$lib/server/accreditations-store.js';
import { readChosenPhotos } from '$lib/server/site-photos-store.js';
import { readSavedText } from '$lib/server/site-text-store.js';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	const [accreditations, sitePhotos, siteText] = await Promise.all([accreditationsForSite(), readChosenPhotos(), readSavedText()]);
	return { accreditations, sitePhotos, siteText };
};
