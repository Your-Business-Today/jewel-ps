export const AnalyticsEvents = {
	enquirySent: 'generate_lead',
	phoneTapped: 'phone_tap'
};

const phoneLinkSelector = 'a[href^="tel:"]';

/** @param {string} eventName @param {Record<string, string>} parameters */
export function trackEvent(eventName, parameters) {
	const { gtag } = /** @type {any} */ (window);
	if (!gtag) return;
	gtag('event', eventName, parameters);
}

/** @param {string} pagePath */
export function trackEnquirySent(pagePath) {
	trackEvent(AnalyticsEvents.enquirySent, { page_path: pagePath });
}

/** @param {MouseEvent} clickEvent */
export function trackPhoneTap(clickEvent) {
	const clickedElement = clickEvent.target;
	if (!(clickedElement instanceof Element)) return;
	const tappedPhoneLink = clickedElement.closest(phoneLinkSelector);
	if (!tappedPhoneLink) return;
	const { pathname } = window.location;
	trackEvent(AnalyticsEvents.phoneTapped, { page_path: pathname });
}
