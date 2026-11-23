import { longestImageAddress } from '$lib/image-address.js';

/** The limits of the completed_projects table's columns, read by the admin form and by the server that writes them. */
export const ProjectLimits = {
	longestName: 120,
	longestLocation: 120,
	longestSummary: 600,
	longestImage: longestImageAddress,
	longestAlt: 200,
	mostPhotos: 4
};

/** The service lines a completed project is shown under, each on its own page. */
export const ProjectServices = [
	{ id: 'refurbishment', label: 'Refurbishment' },
	{ id: 'maintenance', label: 'Maintenance' },
	{ id: 'fire-flood', label: 'Fire & flood' }
];
