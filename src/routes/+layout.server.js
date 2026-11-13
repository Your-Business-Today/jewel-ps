import { accreditationsForSite } from '$lib/server/accreditations-store.js';
import { readChosenPhotos } from '$lib/server/site-photos-store.js';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	const [accreditations, sitePhotos] = await Promise.all([accreditationsForSite(), readChosenPhotos()]);
	return { accreditations, sitePhotos };
};
