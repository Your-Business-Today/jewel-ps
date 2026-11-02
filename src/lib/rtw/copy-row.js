import { elementById, field } from './dom.js';

const copiedLabelMilliseconds = 1600;
const wholeSelection = 999999;

/** @param {string} text */
function copyToClipboard(text) {
	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(text).then(() => {}).catch(() => {});
		return;
	}
	try {
		document.execCommand('copy');
	} catch {
		/* no-op */
	}
}

export function copyRow() {
	const rowOutput = field('rowOutput');
	rowOutput.select();
	rowOutput.setSelectionRange(0, wholeSelection);
	copyToClipboard(rowOutput.value);
	const button = elementById('copyBtn');
	button.textContent = 'Copied';
	setTimeout(() => {
		button.textContent = 'Copy row';
	}, copiedLabelMilliseconds);
}
