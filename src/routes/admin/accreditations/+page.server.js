import { fail } from '@sveltejs/kit';
import { accreditations as accreditationsInCode } from '$lib/site.js';
import { photoGroups } from '$lib/data/photos.js';
import { dbConfigured, storageList } from '$lib/server/db.js';
import { MEDIA_FOLDER } from '$lib/server/brochures.js';
import { accreditationFromForm } from '$lib/server/accreditation-form.js';
import { addAccreditation, readAccreditationRows, removeAccreditation, saveAccreditation } from '$lib/server/accreditations-store.js';

const uuidShape = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const HttpStatus = { badRequest: 400, serviceUnavailable: 503, badGateway: 502 };
const logoGroup = { label: 'Accreditation logos', images: [...new Set(accreditationsInCode.map((accreditation) => accreditation.image))] };

/** @param {FormData} form */
function idFrom(form) {
	const id = String(form.get('id') ?? '');
	return uuidShape.test(id) ? id : '';
}

/** @param {unknown} problem */
function messageFrom(problem) {
	return problem instanceof Error ? problem.message : 'Unknown error';
}

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const groups = [logoGroup, ...photoGroups];
	if (!dbConfigured()) return { configured: false, rows: [], uploads: [], groups, dbError: '' };
	try {
		const [rows, uploads] = await Promise.all([readAccreditationRows(), storageList(MEDIA_FOLDER, 200)]);
		return { configured: true, rows, uploads: uploads.map((upload) => upload.publicUrl), groups, dbError: '' };
	} catch (problem) {
		return { configured: true, rows: [], uploads: [], groups, dbError: messageFrom(problem) };
	}
};

/**
 * Checks the submitted accreditation and hands it to the write, refusing by name anything its columns cannot hold.
 * @param {Request} request
 * @param {boolean} isEdit whether the form names an accreditation already kept
 * @param {(id: string, fields: import('$lib/server/accreditations-store.js').AccreditationFields) => Promise<void>} write
 */
async function writeChecked(request, isEdit, write) {
	if (!dbConfigured()) return fail(HttpStatus.serviceUnavailable, { error: 'Supabase is not connected.', id: '' });
	const form = await request.formData();
	const id = idFrom(form);
	if (isEdit && !id) return fail(HttpStatus.badRequest, { error: 'Which accreditation?', id });
	const { fields, problem } = accreditationFromForm(form);
	if (!fields) return fail(HttpStatus.badRequest, { error: problem, id });
	try {
		await write(id, fields);
		return { saved: fields.name };
	} catch (failure) {
		return fail(HttpStatus.badGateway, { error: messageFrom(failure), id });
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	add: ({ request }) => writeChecked(request, false, (_id, fields) => addAccreditation(fields)),
	save: ({ request }) => writeChecked(request, true, saveAccreditation),
	remove: async ({ request }) => {
		const id = idFrom(await request.formData());
		if (!id) return fail(HttpStatus.badRequest, { error: 'Which accreditation?', id });
		try {
			await removeAccreditation(id);
			return { removed: true };
		} catch (failure) {
			return fail(HttpStatus.badGateway, { error: messageFrom(failure), id });
		}
	}
};
