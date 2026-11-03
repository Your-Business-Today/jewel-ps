import { field, isTicked, trimmedValue } from './dom.js';
import { isLimitedCompany } from './engagement.js';

/** @param {import('./types.js').CheckState} state */
function missingCheckAnswers(state) {
	/** @type {string[]} */
	const missing = [];
	if (!state.route) missing.push('select the check route');
	if (!(isTicked('c1') && isTicked('c2') && isTicked('c3'))) missing.push('tick all three confirmations');
	if (!state.limited) missing.push('answer the time-limited question');
	if (state.limited === 'yes' && !field('expiry').value) missing.push('enter the expiry date');
	if (!state.outcome) missing.push('select the outcome');
	return missing;
}

/** @param {import('./types.js').CheckState} state */
export function missingAnswers(state) {
	/** @type {string[]} */
	const missing = [];
	if (!trimmedValue('fullName')) missing.push("enter the individual's full name");
	if (!field('startDate').value) missing.push('enter the start date');
	if (!trimmedValue('checkedBy')) missing.push('enter your name as checker');
	if (!state.engType) missing.push('select the engagement type');
	if (isLimitedCompany(state.engType)) return missing;
	return [...missing, ...missingCheckAnswers(state)];
}
