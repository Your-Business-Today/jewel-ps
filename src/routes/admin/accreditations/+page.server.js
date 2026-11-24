import { accreditations as accreditationsInCode } from '$lib/site.js';
import { photoGroups } from '$lib/data/photos.js';
import { dbConfigured, storageList } from '$lib/server/db.js';
import { MEDIA_FOLDER } from '$lib/server/brochures.js';
import { accreditationFromForm } from '$lib/server/accreditation-form.js';
import { messageFrom, recordActions } from '$lib/server/admin-record-actions.js';
import { addAccreditation, readAccreditationRows, removeAccreditation, saveAccreditation } from '$lib/server/accreditations-store.js';

const logoGroup = { label: 'Accreditation logos', images: [...new Set(accreditationsInCode.map((accreditation) => accreditation.image))] };

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

/** @type {import('./$types').Actions} */
export const actions = recordActions({
	recordName: 'accreditation',
	fromForm: accreditationFromForm,
	add: addAccreditation,
	save: saveAccreditation,
	remove: removeAccreditation
});
