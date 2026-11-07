import { emergencyCalloutService } from '$lib/site.js';

export const requestLinkParameter = 'request';

/** @type {Record<string, string>} */
const servicesByRequest = {
	callout: emergencyCalloutService
};

/** @param {URL} pageAddress */
export function serviceRequestedIn(pageAddress) {
	const request = pageAddress.searchParams.get(requestLinkParameter) ?? '';
	return servicesByRequest[request] ?? '';
}
