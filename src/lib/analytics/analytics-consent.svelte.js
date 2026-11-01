import { browser } from '$app/environment';

const consentStorageKey = 'jewelps-analytics-consent';

export const ConsentChoices = {
	granted: 'granted',
	declined: 'declined'
};

function readStoredChoice() {
	if (!browser) return null;
	try {
		return localStorage.getItem(consentStorageKey);
	} catch {
		return null;
	}
}

export const analyticsConsent = $state({ choice: readStoredChoice() });

/** @param {string} choice */
export function recordConsentChoice(choice) {
	analyticsConsent.choice = choice;
	try {
		localStorage.setItem(consentStorageKey, choice);
	} catch {
		return;
	}
}

export function reopenConsentChoice() {
	analyticsConsent.choice = null;
}
