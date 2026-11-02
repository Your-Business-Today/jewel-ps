import { elementById } from './dom.js';

const savingMessage = 'Saving to the register log…';
const alreadySavedMessage = 'Already saved to the register log.';
const failedMessage =
	'Could not save to the register log - copy the row into the register as usual and tell the site admin.';

/** @param {number} saved */
const savedMessage = (saved) =>
	'Saved to the register log (' +
	saved +
	(saved === 1 ? ' row' : ' rows') +
	'). Still paste the row into the group register.';

/** @param {Record<string, unknown>[]} entries */
const postEntries = (entries) =>
	fetch('/rtw/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ entries })
	}).then((response) => (response.ok ? response.json() : Promise.reject()));

export function createRegisterLog() {
	let lastSavedKey = '';
	/** @param {Record<string, unknown>[]} entries */
	return function saveToLog(entries) {
		const status = elementById('saveStatus');
		const key = JSON.stringify(entries);
		if (key === lastSavedKey) {
			status.textContent = alreadySavedMessage;
			return;
		}
		status.textContent = savingMessage;
		postEntries(entries)
			.then((result) => {
				lastSavedKey = key;
				status.textContent = savedMessage(result.saved);
			})
			.catch(() => {
				status.textContent = failedMessage;
			});
	};
}
