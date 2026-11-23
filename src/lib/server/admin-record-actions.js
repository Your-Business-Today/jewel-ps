import { fail } from '@sveltejs/kit';
import { dbConfigured } from '$lib/server/db.js';

const uuidShape = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const HttpStatus = { badRequest: 400, serviceUnavailable: 503, badGateway: 502 };

/** @param {FormData} form */
function idFrom(form) {
	const id = String(form.get('id') ?? '');
	return uuidShape.test(id) ? id : '';
}

/** @param {unknown} problem */
export function messageFrom(problem) {
	return problem instanceof Error ? problem.message : 'Unknown error';
}

/**
 * @template Fields
 * @typedef {{
 *   recordName: string,
 *   fromForm: (form: FormData) => { fields: Fields | null, problem: string },
 *   add: (fields: Fields) => Promise<void>,
 *   save: (id: string, fields: Fields) => Promise<void>,
 *   remove: (id: string) => Promise<void>
 * }} RecordTable
 */

/** @param {{ recordName: string }} table */
const whichRecord = ({ recordName }) => `Which ${recordName}?`;

/**
 * Checks the submitted record and hands it to the write, refusing by name anything its columns cannot hold.
 * @template Fields
 * @param {RecordTable<Fields>} table @param {Request} request @param {boolean} isEdit
 * @param {(id: string, fields: Fields) => Promise<void>} write
 */
async function writeChecked(table, request, isEdit, write) {
	if (!dbConfigured()) return fail(HttpStatus.serviceUnavailable, { error: 'Supabase is not connected.', id: '' });
	const form = await request.formData();
	const id = idFrom(form);
	const missingRecord = { error: whichRecord(table), id };
	if (isEdit && !id) return fail(HttpStatus.badRequest, missingRecord);
	const { fields, problem } = table.fromForm(form);
	if (!fields) return fail(HttpStatus.badRequest, { error: problem, id });
	try {
		await write(id, fields);
		return { saved: true };
	} catch (failure) {
		return fail(HttpStatus.badGateway, { error: messageFrom(failure), id });
	}
}

/** @template Fields @param {RecordTable<Fields>} table @param {Request} request */
async function removeChecked(table, request) {
	const id = idFrom(await request.formData());
	const missingRecord = { error: whichRecord(table), id };
	if (!id) return fail(HttpStatus.badRequest, missingRecord);
	try {
		await table.remove(id);
		return { removed: true };
	} catch (failure) {
		return fail(HttpStatus.badGateway, { error: messageFrom(failure), id });
	}
}

/**
 * The add, save and remove actions of an admin page that keeps one table's records.
 * @template Fields @param {RecordTable<Fields>} table
 */
export function recordActions(table) {
	return {
		/** @param {{ request: Request }} event */
		add: ({ request }) => writeChecked(table, request, false, (_id, fields) => table.add(fields)),
		/** @param {{ request: Request }} event */
		save: ({ request }) => writeChecked(table, request, true, table.save),
		/** @param {{ request: Request }} event */
		remove: ({ request }) => removeChecked(table, request)
	};
}
