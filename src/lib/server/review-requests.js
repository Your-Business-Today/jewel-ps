/**
 * The record of Google review requests the office has emailed, kept so a
 * client is not asked twice by accident. Table from
 * migrations/2026-11-04-review-requests.sql.
 */
import { dbConfigured, dbInsert, dbSelect } from '$lib/server/db.js';

/**
 * @typedef {Object} ReviewRequestRow
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} work
 * @property {string} sent_at
 */

const Table = 'review_requests';
const Limits = { requestsShown: 100, longestError: 400 };

/** @returns {Promise<{ requests: ReviewRequestRow[], dbError: string | null }>} */
export async function readRequestsSent() {
	if (!dbConfigured()) return { requests: [], dbError: null };
	try {
		const requests = await dbSelect(Table, `select=*&order=sent_at.desc&limit=${Limits.requestsShown}`);
		return { requests, dbError: null };
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return { requests: [], dbError: message.slice(0, Limits.longestError) };
	}
}

/**
 * @param {string} email
 * @returns {Promise<ReviewRequestRow | null>}
 */
export async function earlierRequestTo(email) {
	if (!dbConfigured()) return null;
	const address = encodeURIComponent(email);
	const query = `select=*&email=ilike.${address}&order=sent_at.desc&limit=1`;
	const earlier = /** @type {ReviewRequestRow[]} */ (await dbSelect(Table, query).catch(() => []));
	return earlier[0] ?? null;
}

/** @param {{ name: string, email: string, work: string }} request */
export async function recordRequestSent(request) {
	if (!dbConfigured()) return;
	await dbInsert(Table, request).catch((error) => console.error('Could not record the review request', error));
}
