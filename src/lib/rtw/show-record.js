import { elementById, field } from './dom.js';
import { passingOutcome } from './engagement.js';
import { registerRow, summaryPairs } from './register-entry.js';

/** @param {import('./check-record.js').CheckRecord} record */
function resultBanner(record) {
	if (record.isLtd)
		return {
			className: 'banner info',
			html: 'No check required by us. Confirm the RTW warranty is in the subcontract before they start.'
		};
	if (record.outcome === passingOutcome)
		return {
			className: 'banner ok',
			html: '<span class="pill pass">PASS</span> &nbsp;' + record.name + ' is cleared to start.'
		};
	return {
		className: 'banner stop',
		html:
			'<span class="pill fail">FAIL</span> &nbsp;' +
			record.name +
			' must not start. Refer to the procedure owner today.'
	};
}

/** @param {[string, string][]} pairs */
function fillSummaryGrid(pairs) {
	const grid = elementById('summaryGrid');
	grid.innerHTML = '';
	pairs.forEach(([term, detail]) => {
		const dt = document.createElement('dt');
		dt.textContent = term;
		const dd = document.createElement('dd');
		dd.textContent = detail;
		grid.appendChild(dt);
		grid.appendChild(dd);
	});
}

/** @param {import('./check-record.js').CheckRecord} record */
export function showCheckRecord(record) {
	field('rowOutput').value = registerRow(record);
	const banner = resultBanner(record);
	const bannerElement = elementById('resultBanner');
	bannerElement.className = banner.className;
	bannerElement.innerHTML = banner.html;
	fillSummaryGrid(summaryPairs(record));
}

export function revealCheckRecord() {
	const result = elementById('result');
	result.classList.remove('hidden');
	result.scrollIntoView({ behavior: 'smooth' });
}
