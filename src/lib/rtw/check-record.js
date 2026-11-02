import { field, trimmedValue } from './dom.js';
import { followupDate, todayISO, ukDate } from './dates.js';
import {
	checksBecomeLawOn,
	employeeEngagement,
	engagingCompany,
	isLimitedCompany
} from './engagement.js';

/**
 * @param {import('./types.js').CheckState} state
 * @param {boolean} isLtd
 */
function checkMethod(state, isLtd) {
	if (isLtd) return 'Not required';
	if (state.route === 'online') return 'Home Office online (share code)';
	return 'Manual document check';
}

/**
 * @param {import('./types.js').CheckState} state
 * @param {boolean} isLtd
 */
function documentSeen(state, isLtd) {
	if (isLtd) return 'n/a - checks own staff';
	if (state.route !== 'online') return trimmedValue('docDetail');
	return 'Share code ' + trimmedValue('shareCode') + ', DOB ' + ukDate(field('dob').value);
}

/**
 * @param {import('./types.js').CheckState} state
 * @param {boolean} isLtd
 * @param {string} start
 */
function checkNotes(state, isLtd, start) {
	/** @type {string[]} */
	const notes = [];
	if (isLtd) notes.push('Ltd co with own staff - confirm RTW warranty in subcontract');
	const isVoluntary = start < checksBecomeLawOn && !isLtd && state.engType !== employeeEngagement;
	if (isVoluntary) notes.push('Voluntary check - engagement pre-dates 1 Oct 2026');
	return notes.join('. ');
}

/** @param {import('./types.js').CheckState} state */
export function readCheckRecord(state) {
	const isLtd = isLimitedCompany(state.engType);
	const start = field('startDate').value;
	const expiry = state.limited === 'yes' ? field('expiry').value : '';
	return {
		isLtd,
		entity: engagingCompany,
		name: trimmedValue('fullName'),
		trade: trimmedValue('trade'),
		engagementType: state.engType ?? '',
		start,
		checker: trimmedValue('checkedBy'),
		method: checkMethod(state, isLtd),
		docSeen: documentSeen(state, isLtd),
		outcome: isLtd ? 'n/a' : (state.outcome ?? ''),
		expiry,
		follow: expiry ? followupDate(expiry) : '',
		evidence: trimmedValue('evidenceRef'),
		checkDate: isLtd ? '' : todayISO(),
		notes: checkNotes(state, isLtd, start)
	};
}

/** @typedef {ReturnType<typeof readCheckRecord>} CheckRecord */
