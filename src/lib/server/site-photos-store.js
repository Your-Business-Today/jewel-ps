import { dbConfigured, dbDeleteWhere, dbInsert, dbSelect } from '$lib/server/db.js';

const TABLE = 'site_photos';

/** @param {string} slot */
const slotFilter = (slot) => `slot=eq.${encodeURIComponent(slot)}`;

/** The photos chosen in admin, by slot; empty when the database cannot be read, so the defaults show. */
export async function readChosenPhotos() {
	if (!dbConfigured()) return /** @type {Record<string, string>} */ ({});
	try {
		const rows = /** @type {{ slot: string, image: string }[]} */ (await dbSelect(TABLE, 'select=slot,image'));
		return Object.fromEntries(rows.map((row) => [row.slot, row.image]));
	} catch {
		return {};
	}
}

/** @param {string} slot @param {string} image */
export async function choosePhoto(slot, image) {
	await dbDeleteWhere(TABLE, slotFilter(slot));
	await dbInsert(TABLE, { slot, image, updated_at: new Date().toISOString() });
}

/** @param {string} slot */
export async function goBackToDefaultPhoto(slot) {
	await dbDeleteWhere(TABLE, slotFilter(slot));
}
