const nameLimits = { shortest: 2, longest: 120 };
const messageLimits = { shortest: 10, longest: 5000 };

export const enquiryLimits = {
	name: nameLimits,
	email: { shortest: 3, longest: 200 },
	phone: { fewestDigits: 10, longest: 50 },
	postcode: { shortest: 5, longest: 10 },
	message: messageLimits
};

export const enquiryProblems = {
	name: `Please tell us your name, in up to ${nameLimits.longest} characters.`,
	email: 'Please enter a valid email address.',
	phone: 'Please enter a valid phone number.',
	postcode: 'Please give the postcode of the property.',
	service: 'Please choose what you need help with.',
	message: `Please give us a few details about the job, in up to ${messageLimits.longest} characters.`
};
