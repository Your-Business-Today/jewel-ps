import { elementById, field } from './dom.js';
import { emptyCheckState } from './engagement.js';
import { listenForAnswers } from './answers.js';
import { refreshProgress } from './progress.js';
import { missingAnswers } from './missing-answers.js';
import { readCheckRecord } from './check-record.js';
import { registerLogEntry } from './register-entry.js';
import { revealCheckRecord, showCheckRecord } from './show-record.js';
import { createRegisterLog } from './register-log.js';
import { copyRow } from './copy-row.js';

const typedFields = ['fullName', 'trade', 'checkedBy', 'shareCode', 'dob', 'docDetail', 'evidenceRef'];
const confirmationBoxes = ['c1', 'c2', 'c3'];

export function mountRightToWorkTool() {
	const state = emptyCheckState();
	const refresh = () => refreshProgress(state);
	const saveToLog = createRegisterLog();
	listenForAnswers(state, refresh);
	typedFields.forEach((id) => field(id).addEventListener('input', refresh));
	confirmationBoxes.forEach((id) => field(id).addEventListener('change', refresh));
	elementById('generateBtn').onclick = () => {
		const missing = missingAnswers(state);
		if (missing.length) {
			alert('Before generating: ' + missing.join('; ') + '.');
			return;
		}
		const record = readCheckRecord(state);
		showCheckRecord(record);
		saveToLog([registerLogEntry(record)]);
		revealCheckRecord();
	};
	elementById('copyBtn').onclick = copyRow;
}
