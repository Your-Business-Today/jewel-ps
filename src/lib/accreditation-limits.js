import { longestImageAddress } from '$lib/image-address.js';

/** The limits of the accreditations table's columns, read by the admin form and by the server that writes them. */
export const AccreditationLimits = {
	longestName: 120,
	longestImage: longestImageAddress,
	longestRegistration: 60,
	longestLink: 500
};
