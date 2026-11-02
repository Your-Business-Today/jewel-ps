import { elementById, field, setHidden } from './dom.js';
import { followupDate, ukDate } from './dates.js';
import {
	checksBecomeLawOn,
	employeeEngagement,
	engagementTypes,
	isLimitedCompany,
	passingOutcome
} from './engagement.js';
import { radioGroup } from './radio-group.js';

/** @param {import('./types.js').CheckState} state */
function showPreOctoberNote(state) {
	const startDate = field('startDate').value;
	const isBeforeTheLaw =
		!!startDate &&
		startDate < checksBecomeLawOn &&
		!!state.engType &&
		state.engType !== employeeEngagement &&
		!isLimitedCompany(state.engType);
	setHidden('preOctBanner', !isBeforeTheLaw);
}

/** @param {string} expiry */
const followupNote = (expiry) =>
	'Follow-up check due by ' +
	ukDate(followupDate(expiry)) +
	' (four weeks before expiry). Diarise it now as well as recording it in the register. Work must not continue past ' +
	ukDate(expiry) +
	' without a new check.';

/**
 * @param {import('./types.js').CheckState} state
 * @param {() => void} refresh
 */
export function listenForAnswers(state, refresh) {
	radioGroup('engType', engagementTypes, 'data-val', (value) => {
		state.engType = value;
		setHidden('ltdBanner', !isLimitedCompany(value));
		showPreOctoberNote(state);
	}, refresh);
	field('startDate').addEventListener('change', () => {
		showPreOctoberNote(state);
		refresh();
	});
	radioGroup('routeGroup', [], 'data-route', (value) => {
		state.route = value;
		setHidden('onlineRoute', value !== 'online');
		setHidden('manualRoute', value !== 'manual');
	}, refresh);
	radioGroup('limitedGroup', [], 'data-lim', (value) => {
		state.limited = value;
		setHidden('expiryWrap', value !== 'yes');
	}, refresh);
	field('expiry').addEventListener('change', function () {
		if (!this.value) return;
		elementById('followupNote').textContent = followupNote(this.value);
		refresh();
	});
	radioGroup('outcomeGroup', [], 'data-out', (value) => {
		state.outcome = value;
		setHidden('failBanner', value === passingOutcome);
	}, refresh);
}
