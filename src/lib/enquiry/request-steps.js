import { photoLimits } from './photo-limits.js';

export const requestSteps = [
	{
		title: 'The job',
		intro: 'What do you need, and where is the property?',
		fieldNames: ['service', 'postcode', 'message']
	},
	{
		title: 'Photos',
		intro: 'A close-up of the problem and a wide shot of the area let us price and plan the visit before we arrive.',
		fieldNames: [photoLimits.fieldName]
	},
	{
		title: 'Your details',
		intro: 'How we reach you with the next step.',
		fieldNames: ['name', 'email', 'phone']
	}
];

export const firstStepIndex = 0;
export const lastStepIndex = requestSteps.length - 1;

/** @param {Record<string, string>} errors */
export function firstStepWithProblem(errors) {
	const stepIndex = requestSteps.findIndex((step) => step.fieldNames.some((fieldName) => fieldName in errors));
	return Math.max(stepIndex, 0);
}
