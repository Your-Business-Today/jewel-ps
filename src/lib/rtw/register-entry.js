import { ukDate } from './dates.js';

/** @param {import('./check-record.js').CheckRecord} record */
export const registerRow = (record) =>
	[
		'',
		record.entity,
		record.name,
		record.trade,
		record.engagementType,
		ukDate(record.start),
		record.method,
		record.docSeen,
		ukDate(record.checkDate),
		record.checker,
		record.outcome,
		ukDate(record.expiry),
		ukDate(record.follow),
		record.evidence,
		record.notes
	].join('\t');

/**
 * @param {import('./check-record.js').CheckRecord} record
 * @returns {[string, string][]}
 */
export const summaryPairs = (record) => [
	['Individual', record.name + (record.trade ? ' (' + record.trade + ')' : '')],
	['Engaging company', record.entity],
	['Engagement type', record.engagementType],
	['Start date', ukDate(record.start)],
	['Check method', record.method],
	['Document / code', record.docSeen],
	['Check date', record.checkDate ? ukDate(record.checkDate) : 'n/a'],
	['Checked by', record.checker],
	['Outcome', record.outcome],
	['Permission expiry', record.expiry ? ukDate(record.expiry) : 'None'],
	['Follow-up due', record.follow ? ukDate(record.follow) : 'None'],
	['Evidence ref', record.evidence || '[not entered]']
];

/** @param {import('./check-record.js').CheckRecord} record */
export const registerLogEntry = (record) => ({
	entity: record.entity,
	full_name: record.name,
	trade: record.trade,
	engagement_type: record.engagementType,
	start_date: record.start,
	check_method: record.method,
	document_seen: record.docSeen,
	check_date: record.checkDate,
	checked_by: record.checker,
	outcome: record.outcome,
	permission_expiry: record.expiry,
	followup_due: record.follow,
	evidence_ref: record.evidence,
	notes: record.notes
});
