import { accreditationsForSite } from '$lib/server/accreditations-store.js';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	return { accreditations: await accreditationsForSite() };
};
