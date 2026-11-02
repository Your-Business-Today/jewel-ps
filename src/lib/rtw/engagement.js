/* Each company serves its own copy of this tool on its own site, so the engaging company is fixed per deployment. */
export const engagingCompany = 'JPS';

export const engagementTypes = [
	'Employee',
	'Sole-trader subcontractor',
	'Casual / temporary worker',
	'Platform engagement',
	'Ltd co subcontractor (no check - own staff)'
];

export const employeeEngagement = 'Employee';
export const limitedCompanyPrefix = 'Ltd co';
export const checksBecomeLawOn = '2026-10-01';
export const passingOutcome = 'Pass';

/** @param {string | null} engagementType */
export const isLimitedCompany = (engagementType) =>
	!!engagementType && engagementType.indexOf(limitedCompanyPrefix) === 0;

/** @returns {import('./types.js').CheckState} */
export const emptyCheckState = () => ({ engType: null, route: null, limited: null, outcome: null });
