import { company, toBeConfirmed } from './company.js';

export const consumerTermsIssue = { number: '1.0', date: '1 November 2026' };

export const consumerKeyFacts = [
	{ label: 'Who we are', text: `${company.legalName}, company number ${company.number}, registered office ${company.registeredOffice}. Email ${company.email} or call ${company.phone}.` },
	{ label: 'Who these terms are for', text: 'Private individuals having work done on their own home. Business clients, landlords letting as a business and managing agents are on our business terms.' },
	{ label: 'Quotes', text: 'Free and with no obligation. A quote is valid for 30 days unless it says otherwise.' },
	{ label: 'Approving a quote', text: 'By the link in your quote email, or in writing. The contract starts when you approve.' },
	{ label: 'Changes to the work', text: 'Explained and agreed with you in writing before that work carries on.' },
	{ label: 'Payment', text: 'By bank transfer within 14 days of the invoice date.' },
	{ label: 'Your right to cancel', text: '14 days from the day you approve the quote. See clause 5 and the form in Appendix A.' },
	{ label: 'Guarantee', text: `${toBeConfirmed} on our workmanship, on top of your legal rights.` },
	{ label: 'Complaints', text: `Email ${company.email} with “Complaint” in the subject. See clause 11.` }
];

export const consumerClauses = [
	{
		title: 'About these terms',
		paragraphs: [
			`These terms apply when you, as a private individual, ask ${company.legalName} (“${company.shortName}”, “we”, “us”) to carry out work at your own home.`,
			'If you are a business, a landlord letting as a business, a freeholder or a managing agent, our business terms apply instead.',
			'These terms, your quote and anything we agree with you in writing about the work make up our agreement. If your quote says something different from these terms, the quote applies.'
		]
	},
	{
		title: 'Quotes and approval',
		paragraphs: [
			'Our quotes are free and you are under no obligation to accept them. A quote is valid for 30 days from its date unless it says otherwise.',
			'A quote is based on what we could see and the information we were given when we prepared it.',
			'You approve a quote by the link in our quote email, or by telling us in writing, including by email. The contract between us starts when you approve.',
			'We confirm your approval by email, with a link to these terms and a copy of the cancellation form.'
		]
	},
	{
		title: 'Changes and things we find once work starts',
		paragraphs: [
			'If you ask to change the scope of the work, we will explain the cost and any effect on timing, and agree it with you in writing before that work carries on.',
			'If we find something once work starts that was not reasonably visible when we quoted, such as a hidden leak, defective pipework, rot, a structural problem or materials containing asbestos, we will stop that part of the work, explain what we found, and agree any variation or additional cost with you in writing before that work carries on.',
			'If something cannot safely be left as it is while you decide, we will make it safe and tell you straight away what we did.'
		]
	},
	{
		title: 'Price and payment',
		paragraphs: [
			'The price is the one in your quote, plus any variations agreed under clause 3. Your quote says whether VAT is included.',
			'We invoice when the work is complete, unless your quote sets out a deposit or stage payments.',
			'Please pay by bank transfer within 14 days of the invoice date. Our bank details are on every invoice and we will never change them by email. If you receive a message asking you to pay to different details, call us before paying.',
			'If an invoice is not paid on time, we may charge interest at 4% a year above the Bank of England base rate from the due date until it is paid.'
		]
	},
	{
		title: 'Your right to cancel',
		paragraphs: [
			'You can cancel the contract within 14 days of the day you approve the quote, without giving a reason.',
			`To cancel, tell us clearly before the 14 days end, by email to ${company.email} or by letter to ${company.legalName}, ${company.registeredOffice}. You can use the form in Appendix A, but you do not have to.`,
			'We will not start work within the 14 days unless you ask us to. If you ask us to start early and then cancel within the 14 days, you must pay a fair amount for the work done up to the time you tell us you are cancelling, and for materials ordered for your job that cannot be returned.',
			'If you asked us to start within the 14 days, you lose the right to cancel once the work is finished.',
			'We refund any money due to you within 14 days of the day you tell us you are cancelling, by the same method you paid, unless we agree another way with you.'
		]
	},
	{
		title: 'Access and your home',
		paragraphs: [
			'Please give us safe access at the agreed times, clear the working area of furniture and valuables where we ask, and let us use water and electricity.',
			'Please tell us anything you know about the property that could affect the work, such as concealed pipes and cables, an asbestos survey or past problems.',
			'If you live in a flat or a leasehold property, you are responsible for any permission the work needs from your landlord, freeholder or managing agent, unless we agree in writing to obtain it for you.',
			'We keep the working area tidy, protect your floors and furnishings, and take our waste away.'
		]
	},
	{
		title: 'Our workmanship and guarantee',
		paragraphs: [
			'We carry out the work with reasonable care and skill, using the materials described in your quote, in line with the Building Regulations and the standards that apply to the trade.',
			`We guarantee our workmanship for ${toBeConfirmed} from the date the work is complete. Parts and materials we supply carry the manufacturer’s warranty.`,
			'If something is wrong with our work, tell us promptly and let us inspect it and put it right.',
			'The guarantee does not cover fair wear and tear, misuse or accidental damage, work done by others, or materials you supplied.',
			'The guarantee is in addition to your legal rights. Under the Consumer Rights Act 2015 our work must be carried out with reasonable care and skill; if it is not, you can ask us to repeat or fix it, or in some cases receive some money back. Citizens Advice can tell you more.'
		]
	},
	{
		title: 'Our liability',
		paragraphs: [
			'We are responsible for loss or damage you suffer that is a foreseeable result of our breaking these terms or failing to use reasonable care and skill. Loss is foreseeable if it was obvious it would happen, or if we both knew it might happen when the contract started.',
			'We do not exclude or limit our liability where the law does not allow it, including for death or personal injury caused by our negligence, for fraud, or for breaking your legal rights in relation to the work.',
			'We carry out work for your domestic and private use. We are not responsible to you for any loss of profit, loss of business or loss of business opportunity.',
			`We hold public liability insurance of ${toBeConfirmed} and will send you the certificate on request.`
		]
	},
	{
		title: 'Delays',
		paragraphs: [
			'The dates we give are our best estimate. We are not responsible for delays caused by events outside our control, such as severe weather, supplier delays or access not being available, but we will tell you as soon as we can and agree a new date with you.'
		]
	},
	{
		title: 'Your information',
		paragraphs: [
			'We use your personal information to quote for and carry out the work and to keep in touch with you about it. Our privacy notice at jewelps.co.uk/privacy explains what we hold, why, for how long, and your rights.'
		]
	},
	{
		title: 'Complaints',
		paragraphs: [
			`If something is not right, please tell us straight away on ${company.phone}, or by email to ${company.email} with “Complaint” in the subject.`,
			`We acknowledge your complaint within ${toBeConfirmed} and aim to give you a full reply within ${toBeConfirmed}.`,
			'If you are not happy with our reply, Citizens Advice can tell you what you can do next.'
		]
	},
	{
		title: 'General',
		paragraphs: [
			'We may use vetted specialist subcontractors for parts of the work, but we remain responsible to you for it.',
			'If a court finds any part of these terms cannot be enforced, the rest still applies.',
			'We may update these terms. The terms that apply to your work are the ones in force on the day you approve the quote.',
			'These terms are governed by the law of England and Wales. You can bring proceedings in the courts of England and Wales or, if you live in Scotland or Northern Ireland, in the courts there.'
		]
	}
];

export const cancellationForm = {
	intro: 'Complete and return this form only if you want to cancel the contract.',
	recipient: `To: ${company.legalName}, ${company.registeredOffice}. Email: ${company.email}`,
	notice: 'I/We give notice that I/we cancel my/our contract for the supply of the following service:',
	fields: [
		'Description of the work',
		'Quote reference',
		'Date the quote was approved',
		'Your name(s)',
		'Address of the property',
		'Your signature (only if this form is sent on paper)',
		'Date'
	]
};
