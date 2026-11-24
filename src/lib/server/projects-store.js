import { completedProjects as projectsInCode } from '$lib/content/refurbishment-projects.js';
import { dbConfigured, dbDelete, dbInsert, dbSelect, dbUpdate } from '$lib/server/db.js';

const TABLE = 'completed_projects';

/**
 * @typedef {{ src: string, alt: string }} ProjectPhoto
 * @typedef {{ id: string, name: string, location: string, service: string, summary: string, photos: ProjectPhoto[], position: number }} ProjectRow
 * @typedef {Omit<ProjectRow, 'id'>} ProjectFields
 */

/** Every completed project the office keeps, grouped by service line in the order the site shows them. */
export async function readProjectRows() {
	return /** @type {ProjectRow[]} */ (await dbSelect(TABLE, 'select=*&order=service.asc,position.asc,name.asc'));
}

/** @param {string} service */
const projectsInCodeFor = (service) => projectsInCode.filter((project) => project.service === service);

/**
 * The completed projects a service line's page shows; the list in code stands in when the database cannot be read.
 * @param {string} service
 * @returns {Promise<Omit<ProjectRow, 'id' | 'position'>[]>}
 */
export async function projectsForService(service) {
	if (!dbConfigured()) return projectsInCodeFor(service);
	try {
		return /** @type {ProjectRow[]} */ (await dbSelect(TABLE, `select=*&service=eq.${service}&order=position.asc,name.asc`));
	} catch {
		return projectsInCodeFor(service);
	}
}

/** @param {ProjectFields} fields */
export async function addProject(fields) {
	await dbInsert(TABLE, fields);
}

/** @param {string} id @param {ProjectFields} fields */
export async function saveProject(id, fields) {
	await dbUpdate(TABLE, id, { ...fields, updated_at: new Date().toISOString() });
}

/** @param {string} id */
export async function removeProject(id) {
	await dbDelete(TABLE, id);
}
