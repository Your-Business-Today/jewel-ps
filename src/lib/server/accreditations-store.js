import { accreditations as accreditationsInCode } from '$lib/site.js';
import { dbConfigured, dbDelete, dbInsert, dbSelect, dbUpdate } from '$lib/server/db.js';

const TABLE = 'accreditations';

/**
 * @typedef {{ id: string, name: string, image: string, registration: string, expires: string | null, href: string, position: number }} AccreditationRow
 * @typedef {Omit<AccreditationRow, 'id'>} AccreditationFields
 */

/** Every accreditation the office keeps, in the order the site shows them. */
export async function readAccreditationRows() {
	return /** @type {AccreditationRow[]} */ (await dbSelect(TABLE, 'select=*&order=position.asc,name.asc'));
}

/** @param {AccreditationRow} row @returns {import('$lib/site.js').Accreditation} */
function accreditationFrom(row) {
	return {
		name: row.name,
		image: row.image,
		registration: row.registration || undefined,
		expires: row.expires ?? undefined,
		href: row.href || undefined
	};
}

/** The accreditations for the public pages; the list in code stands in when the database cannot be read. */
export async function accreditationsForSite() {
	if (!dbConfigured()) return accreditationsInCode;
	try {
		const rows = await readAccreditationRows();
		return rows.map(accreditationFrom);
	} catch {
		return accreditationsInCode;
	}
}

/** @param {AccreditationFields} fields */
export async function addAccreditation(fields) {
	await dbInsert(TABLE, fields);
}

/** @param {string} id @param {AccreditationFields} fields */
export async function saveAccreditation(id, fields) {
	await dbUpdate(TABLE, id, { ...fields, updated_at: new Date().toISOString() });
}

/** @param {string} id */
export async function removeAccreditation(id) {
	await dbDelete(TABLE, id);
}
