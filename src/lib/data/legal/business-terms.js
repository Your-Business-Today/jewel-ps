import { company, toBeConfirmed } from './company.js';

export const businessTermsIssue = { number: '1.0 (draft)', date: '1 November 2026' };

export const businessKeyFacts = [
	{ label: 'Who we are', text: `${company.legalName}, company number ${company.number}, registered office ${company.registeredOffice}. Email ${company.email} or call ${company.phone}.` },
	{ label: 'Who these terms are for', text: 'Managing agents, freeholders, landlords letting as a business, contractors, commercial owners and occupiers, and clients on a handyman or maintenance contract. Private individuals having work done on their own home are on our terms for private clients.' },
	{ label: 'Accepting a quote', text: 'By the link in our quote email, in writing, or by a purchase order or work order that refers to the quote.' },
	{ label: 'Changes to the work', text: 'Agreed in writing before the extra work carries on, except work needed to make a property safe.' },
	{ label: 'Payment', text: '30 days from the invoice date unless the quote says otherwise. Only the disputed part of an invoice may be withheld.' },
	{ label: 'Guarantee', text: `${toBeConfirmed} on our workmanship.` },
	{ label: 'Liability cap', text: `${toBeConfirmed}. See clause 12.` },
	{ label: 'Which terms win', text: 'These terms, unless a separate contract signed by a director of Jewel PS expressly replaces them. Terms printed on a purchase order or work order do not apply.' }
];

export const businessClauses = [
	{
		title: 'About these terms',
		paragraphs: [
			`These terms apply to every service ${company.legalName} (“${company.shortName}”, “we”, “us”) provides to a business client (“the Client”, “you”): maintenance, repairs, refurbishment, restoration and emergency callouts (“the Works”), for the price in our quote.`,
			'They apply to managing agents, freeholders, landlords letting as a business, contractors who engage us as a subcontractor, commercial owners and occupiers, and clients on a handyman or planned maintenance contract. A managing agent who instructs us on behalf of a building owner accepts these terms for the owner and confirms it has the owner’s authority to do so.',
			'These terms apply to all Works instructed by quote acceptance, email, letter, purchase order or work order, whether or not a separate contract is signed.',
			'A verbal instruction binds us both once either of us confirms it in writing and the other does not dispute that confirmation within 5 working days.'
		]
	},
	{
		title: 'Quotes and acceptance',
		paragraphs: [
			'A quote is valid for 30 days from its date unless it says otherwise. Prices exclude VAT unless the quote says they include it.',
			'A quote is based on what we could see and the information we were given when we prepared it. Where we give an estimate rather than a fixed price, it is our best assessment and the final price may differ; we will tell you as soon as we find anything that affects it.',
			'You accept a quote by the link in our quote email, by telling us in writing, or by issuing a purchase order or work order. A purchase order or work order that refers to a quote is acceptance of that quote on these terms.',
			'Where we rely on a survey, specification or other document prepared by someone else, we are entitled to rely on it being accurate. Extra work caused by an error or omission in it is a variation under clause 3.'
		]
	},
	{
		title: 'Variations and things we find once work starts',
		paragraphs: [
			'Any change to the scope of the Works, and any extra work, is agreed in writing before that work carries on. Agreed variations are charged at the rates in the quote or, where none apply, at our standard rates at the time.',
			'If we find something once work starts that was not reasonably visible when we quoted, such as a hidden leak, defective pipework, rot, a structural problem or concealed damage, we will stop that part of the work, tell you what we found and agree the cost before carrying on.',
			'If something cannot safely be left while you decide, we will make it safe and tell you straight away what we did. Make-safe work is charged as a variation.',
			'If you decline work we have told you is needed, we may decline to carry on where, in our reasonable opinion, the Works would otherwise be ineffective, unsafe or non-compliant. Work done up to that point remains payable.'
		]
	},
	{
		title: 'Emergency callouts',
		paragraphs: [
			'Our emergency callout service runs 24 hours a day, 365 days a year. When you call, we confirm the callout charge and our expected attendance time before we attend.',
			'An emergency attendance is to make the property safe and, where possible, carry out an immediate repair. Any further work is quoted separately.'
		]
	},
	{
		title: 'Price and payment',
		paragraphs: [
			'We invoice when the Works are complete, or in stages or monthly in arrears where the quote or a maintenance contract says so. We may ask for a deposit before ordering materials or booking labour; any deposit is stated in the quote and set against our invoices.',
			'The due date for each payment is the invoice date and the final date for payment is 30 days after it, unless the quote says otherwise. Our invoice is our notice of the sum we consider due.',
			'You may withhold only the part of an invoice you genuinely dispute, and only if you give us a pay less notice at least 7 days before the final date for payment, stating the sum you consider due and how it is calculated. The undisputed part remains payable by the final date for payment.',
			'If an invoice is not paid by the final date for payment, we may charge interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998, and, after giving you 7 days’ written notice, suspend the Works until it is paid. Time lost to a suspension is added to the programme, and our costs of stopping and restarting are payable.',
			'Our bank details are on every invoice and we will never change them by email. If you receive a message asking you to pay to different details, call us before paying.'
		]
	},
	{
		title: 'CIS and VAT',
		paragraphs: [
			'If you are a contractor for the purposes of the Construction Industry Scheme, you make the deductions the scheme requires from the labour element of our invoices, after verifying us with HMRC, and give us a statement of each deduction. If you are not a contractor for those purposes, you pay our invoices without deduction.',
			'If the VAT domestic reverse charge for building and construction services applies to the Works, our invoice will say so and you account for the VAT to HMRC. Before work starts, tell us in writing whether you are an end user or an intermediary supplier for those purposes; if you do not, we will invoice VAT in the normal way.'
		]
	},
	{
		title: 'Access, site conditions and what we need from you',
		paragraphs: [
			'You give us safe and unimpeded access to the property and the working area at the agreed times, with water, electricity and welfare facilities, and arrange access to residents’ homes where the Works need it.',
			'You obtain any permission the Works need, such as freeholder, landlord or residents’ consent, listed building consent or a party wall agreement, unless we agree in writing to obtain it.',
			'You give us the asbestos register and any survey, drawings or information you hold about the property that could affect the Works, including the position of concealed services. We are entitled to rely on them.',
			'If we cannot carry out the Works on an agreed date because access is not available, the property is unsafe or something you were to provide is missing, you pay a fair charge for the wasted attendance and for returning.'
		]
	},
	{
		title: 'Hazardous materials',
		paragraphs: [
			'If we find or suspect asbestos or another hazardous material, we stop work in the affected area, leave the material undisturbed and tell you. Testing, removal, delay and returning are charged as a variation.'
		]
	},
	{
		title: 'Building Safety Act, Building Regulations and CDM',
		paragraphs: [
			'We carry out the Works with reasonable skill and care, in line with good industry practice, the Building Regulations, BS 7671 for electrical work, and the other standards and regulations that apply to them.',
			'We act as a contractor. We do not act as principal designer or principal contractor under the Construction (Design and Management) Regulations 2015 or the Building Regulations 2010 unless we are appointed to that role in writing. Before work starts, you confirm in writing who holds those roles, or that no one has been appointed, in which case those duties fall to you as client.',
			'We comply with our own duties as a contractor under the Building Regulations 2010 and the Building Safety Act 2022, including reporting a compliance concern to the principal contractor or, if there is none, to you. Where carrying on would result in non-compliant work, we may suspend that part of the Works until the issue is resolved, without liability for the delay.',
			'You remain responsible for the building’s fire strategy, its health and safety documentation and any duties you hold as an accountable person or principal accountable person. We never withhold information the law requires us to give to you, a regulator or the Building Safety Regulator.'
		]
	},
	{
		title: 'Materials and ownership',
		paragraphs: [
			'Materials we supply remain ours until they are paid for, but are at your risk from delivery to the property. Once fixed in place they belong to you.',
			'Where you supply materials, we are not responsible for their suitability, quality or certification, or for delay they cause, and our guarantee does not cover them. We install them with reasonable skill and care following the manufacturer’s instructions you give us.',
			'Waste and removed items become ours and are taken away, unless you tell us before work starts that you want to keep them.'
		]
	},
	{
		title: 'Our workmanship and guarantee',
		paragraphs: [
			`We guarantee our workmanship for ${toBeConfirmed} from the date the Works are complete. Parts and materials we supply carry the manufacturer’s warranty.`,
			'If you believe there is a defect in our work, tell us in writing promptly and let us inspect it. Where the defect is ours we put it right at no charge; that is your first remedy.',
			'The guarantee does not cover fair wear and tear, misuse, neglect or accidental damage, work by others, or alteration of our work by anyone else after completion.'
		]
	},
	{
		title: 'Liability',
		paragraphs: [
			'Nothing in these terms limits the liability of either of us for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.',
			`Subject to that, our total liability to you arising from the Works is limited to ${toBeConfirmed}.`,
			'We are not liable for loss of profit, rent, revenue or business, or for any indirect or consequential loss.',
			'Where someone else is also responsible for a loss, our liability is limited to the share it is just and equitable for us to pay, having regard to their responsibility.',
			'We are not responsible for defects in the property that existed before we started and that we were not engaged to remedy, or for damage to concealed services whose position was not disclosed to us.'
		]
	},
	{
		title: 'Insurance',
		paragraphs: [
			`We hold public liability insurance of not less than ${toBeConfirmed} and employer’s liability insurance of not less than ${toBeConfirmed}. We will send certificates on reasonable written request.`
		]
	},
	{
		title: 'Programme and delays',
		paragraphs: [
			'Dates we give for starting and finishing are estimates made in good faith, and time is not of the essence unless a director of Jewel PS agrees otherwise in writing.',
			'Neither of us is responsible for delay caused by events beyond our reasonable control, such as severe weather, supplier lead times, late permissions or access not being available. We will tell you as soon as we can and agree a revised programme.'
		]
	},
	{
		title: 'Ending the contract',
		paragraphs: [
			'Either of us may end the contract by written notice if the other is in serious breach and has not put it right within 14 days of being asked to in writing. Not paying an undisputed invoice is a serious breach.',
			'If you end the contract, or it ends because of your breach, you pay for the Works done and materials ordered up to that date and the costs we have reasonably incurred. If it ends because of our breach, you pay for the Works done and nothing for work not yet carried out.'
		]
	},
	{
		title: 'Subcontracting and assignment',
		paragraphs: [
			'We may subcontract parts of the Works to vetted specialists, and remain responsible to you for their work.',
			'You may not transfer the contract to anyone else without our written consent.'
		]
	},
	{
		title: 'Data protection and confidentiality',
		paragraphs: [
			'Each of us complies with UK data protection law. We use personal information about you, your staff and your residents as our privacy notice at jewelps.co.uk/privacy explains. Where we process personal data on your behalf, we will agree a data processing agreement with you.',
			'Each of us keeps the other’s commercially sensitive information confidential during the contract and for 3 years after it, except where the law requires disclosure or to professional advisers bound to keep it confidential.'
		]
	},
	{
		title: 'Complaints and disputes',
		paragraphs: [
			`If something is not right, tell us straight away on ${company.phone} or by email to ${company.email} with “Complaint” in the subject. We will acknowledge it within ${toBeConfirmed} and aim to give you a full reply within ${toBeConfirmed}.`,
			'If a disagreement arises, we will both try to settle it quickly and in good faith. Either of us may refer a dispute to adjudication where the law allows it, or use any other process available at law.'
		]
	},
	{
		title: 'Which terms apply, and governing law',
		paragraphs: [
			'These terms, the quote and any variations agreed in writing are the whole agreement between us and replace anything said or written before about the same Works.',
			'These terms apply in place of any terms printed on, attached to or referred to by your purchase order, work order or other document. They are replaced or varied only by a separate written contract, signed by a director of Jewel PS, that says expressly that it replaces or varies them. Where these terms and the quote differ, the quote applies to that point.',
			'If any part of these terms is found to be unenforceable, the rest still applies. We may update these terms; the issue in force on the date of the quote applies.',
			'These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction.'
		]
	}
];
