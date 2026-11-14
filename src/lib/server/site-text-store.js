import { dbConfigured, dbDeleteWhere, dbInsert, dbSelect } from '$lib/server/db.js';

const TABLE = 'site_text';

/** @param {string} slot */
const slotFilter = (slot) => `slot=eq.${encodeURIComponent(slot)}`;

/** The text changed in admin, by slot; empty when the database cannot be read, so the defaults show. */
export async function readSavedText() {
	if (!dbConfigured()) return /** @type {Record<string, string>} */ ({});
	try {
		const rows = /** @type {{ slot: string, text: string }[]} */ (await dbSelect(TABLE, 'select=slot,text'));
		return Object.fromEntries(rows.map((row) => [row.slot, row.text]));
	} catch {
		return {};
	}
}

/** @param {string} slot @param {string} text */
export async function saveText(slot, text) {
	await dbDeleteWhere(TABLE, slotFilter(slot));
	await dbInsert(TABLE, { slot, text, updated_at: new Date().toISOString() });
}

/** @param {string} slot */
export async function goBackToDefaultText(slot) {
	await dbDeleteWhere(TABLE, slotFilter(slot));
}
