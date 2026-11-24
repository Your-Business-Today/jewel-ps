import { photoGroups } from '$lib/data/photos.js';
import { dbConfigured, storageList } from '$lib/server/db.js';
import { MEDIA_FOLDER } from '$lib/server/brochures.js';
import { projectFromForm } from '$lib/server/project-form.js';
import { messageFrom, recordActions } from '$lib/server/admin-record-actions.js';
import { addProject, readProjectRows, removeProject, saveProject } from '$lib/server/projects-store.js';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	if (!dbConfigured()) return { configured: false, rows: [], uploads: [], groups: photoGroups, dbError: '' };
	try {
		const [rows, uploads] = await Promise.all([readProjectRows(), storageList(MEDIA_FOLDER, 200)]);
		return { configured: true, rows, uploads: uploads.map((upload) => upload.publicUrl), groups: photoGroups, dbError: '' };
	} catch (problem) {
		return { configured: true, rows: [], uploads: [], groups: photoGroups, dbError: messageFrom(problem) };
	}
};

/** @type {import('./$types').Actions} */
export const actions = recordActions({
	recordName: 'project',
	fromForm: projectFromForm,
	add: addProject,
	save: saveProject,
	remove: removeProject
});
