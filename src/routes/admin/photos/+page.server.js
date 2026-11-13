import { fail } from '@sveltejs/kit';
import { photoGroups } from '$lib/data/photos.js';
import { photoSlots } from '$lib/photo-slots.js';
import { dbConfigured, storageList } from '$lib/server/db.js';
import { MEDIA_FOLDER } from '$lib/server/brochures.js';
import { sitePhotoFromForm } from '$lib/server/site-photo-form.js';
import { choosePhoto, goBackToDefaultPhoto, readChosenPhotos } from '$lib/server/site-photos-store.js';

const HttpStatus = { badRequest: 400, serviceUnavailable: 503, badGateway: 502 };

/** @param {unknown} problem */
const messageFrom = (problem) => (problem instanceof Error ? problem.message : 'Unknown error');

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	if (!dbConfigured()) return { configured: false, slots: photoSlots, chosen: {}, uploads: [], groups: photoGroups, dbError: '' };
	try {
		const [chosen, uploads] = await Promise.all([readChosenPhotos(), storageList(MEDIA_FOLDER, 200)]);
		return { configured: true, slots: photoSlots, chosen, uploads: uploads.map((upload) => upload.publicUrl), groups: photoGroups, dbError: '' };
	} catch (problem) {
		return { configured: true, slots: photoSlots, chosen: {}, uploads: [], groups: photoGroups, dbError: messageFrom(problem) };
	}
};

/**
 * Checks the submitted slot (and photo) and hands it to the write, refusing by name anything its columns cannot hold.
 * @param {Request} request
 * @param {boolean} needsImage
 * @param {(slot: string, image: string) => Promise<void>} write
 */
async function writeChecked(request, needsImage, write) {
	if (!dbConfigured()) return fail(HttpStatus.serviceUnavailable, { error: 'Supabase is not connected.', slot: '' });
	const { slot, image, problem } = sitePhotoFromForm(await request.formData(), needsImage);
	if (problem) return fail(HttpStatus.badRequest, { error: problem, slot });
	try {
		await write(slot, image);
		return { savedSlot: slot };
	} catch (failure) {
		return fail(HttpStatus.badGateway, { error: messageFrom(failure), slot });
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	choose: ({ request }) => writeChecked(request, true, choosePhoto),
	reset: ({ request }) => writeChecked(request, false, goBackToDefaultPhoto)
};
