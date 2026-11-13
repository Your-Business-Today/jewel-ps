import { fail } from '@sveltejs/kit';
import { textSlots } from '$lib/text-slots.js';
import { dbConfigured } from '$lib/server/db.js';
import { siteTextFromForm } from '$lib/server/site-text-form.js';
import { goBackToDefaultText, readSavedText, saveText } from '$lib/server/site-text-store.js';

const HttpStatus = { badRequest: 400, serviceUnavailable: 503, badGateway: 502 };

/** @param {unknown} problem */
const messageFrom = (problem) => (problem instanceof Error ? problem.message : 'Unknown error');

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const saved = await readSavedText();
	return { configured: dbConfigured(), slots: textSlots, saved };
};

/**
 * Checks the submitted slot (and words) and hands it to the write, refusing by name anything its column cannot hold.
 * @param {Request} request
 * @param {boolean} needsText
 * @param {(slot: string, text: string) => Promise<void>} write
 */
async function writeChecked(request, needsText, write) {
	if (!dbConfigured()) return fail(HttpStatus.serviceUnavailable, { error: 'Supabase is not connected.', slot: '', text: '' });
	const { slot, text, problem } = siteTextFromForm(await request.formData(), needsText);
	if (problem) return fail(HttpStatus.badRequest, { error: problem, slot, text });
	try {
		await write(slot, text);
		return { savedSlot: slot };
	} catch (failure) {
		return fail(HttpStatus.badGateway, { error: messageFrom(failure), slot, text });
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	save: ({ request }) => writeChecked(request, true, saveText),
	reset: ({ request }) => writeChecked(request, false, goBackToDefaultText)
};
