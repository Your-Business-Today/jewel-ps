import { elementById, hasValue, isTicked } from './dom.js';
import { isLimitedCompany } from './engagement.js';

const stepCount = 6;
const tickMark = '&#10003;';

/** @param {import('./types.js').CheckState} state */
function isRouteAnswered(state) {
	if (state.route === 'online') return hasValue('shareCode') && hasValue('dob');
	if (state.route === 'manual') return hasValue('docDetail');
	return false;
}

/** @type {Record<number, (state: import('./types.js').CheckState, isLtd: boolean) => boolean>} */
const isStepComplete = {
	1: () => hasValue('fullName') && hasValue('startDate') && hasValue('checkedBy'),
	2: (state) => !!state.engType,
	3: (state, isLtd) => isLtd || isRouteAnswered(state),
	4: (state, isLtd) => isLtd || (isTicked('c1') && isTicked('c2') && isTicked('c3')),
	5: (state, isLtd) =>
		isLtd || state.limited === 'no' || (state.limited === 'yes' && hasValue('expiry')),
	6: (state, isLtd) => isLtd || !!state.outcome
};

/**
 * @param {number} step
 * @param {boolean} isDone
 */
function markRailStep(step, isDone) {
	const railStep = /** @type {HTMLElement} */ (
		document.querySelector('.rail-step[data-for="step' + step + '"]')
	);
	railStep.classList.toggle('done', isDone);
	const dot = /** @type {HTMLElement} */ (railStep.querySelector('.dot'));
	dot.innerHTML = isDone ? tickMark : String(step);
}

/** @param {import('./types.js').CheckState} state */
export function refreshProgress(state) {
	const isLtd = isLimitedCompany(state.engType);
	for (let step = 1; step <= stepCount; step++) {
		const isDone = isStepComplete[step](state, isLtd);
		elementById('step' + step).classList.toggle('complete', isDone);
		markRailStep(step, isDone);
	}
}
