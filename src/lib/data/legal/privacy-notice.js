import { company } from './company.js';

export const privacyNoticeIssue = { number: '2.0', date: '2 November 2026' };

export const privacyIntroduction = `This notice explains what personal information ${company.legalName} holds about the people we work with and for, why we hold it, who we share it with, how long we keep it, and the rights you have over it.`;

export const privacySections = [
	{
		title: 'Who we are',
		paragraphs: [
			`${company.legalName} (“${company.shortName}”, “we”, “us”), company number ${company.number}, registered office ${company.registeredOffice}, is the controller of the personal information described in this notice.`,
			`We are registered with the Information Commissioner’s Office (ICO) under number ${company.informationCommissionerNumber}.`,
			`If you have a question about this notice or your information, email ${company.email}, call ${company.phone}, or write to us at our registered office.`,
			'This notice covers our clients and their contacts; tenants, flat owners and other people connected with the buildings we work on; the people who work on our sites; and visitors to this website.'
		]
	},
	{
		title: 'Clients and their contacts',
		paragraphs: [
			'We hold your name and contact details, the addresses of the properties we work on, and the quotes, jobs, invoices and payments between us. We also hold the emails you send to our accounts@, enquiries@ and info@ mailboxes and our replies.',
			'We use it to quote for, carry out and invoice the work, to answer your messages and to keep our accounts. Our lawful bases are the contract with you, the legal duty to keep accounting records, and, for contacts at managing agents, insurers and other businesses, our legitimate interest in working with the organisation you represent.'
		]
	},
	{
		title: 'Tenants, flat owners and building contacts',
		paragraphs: [
			'When a managing agent, landlord, freeholder or insurer asks us to carry out work, they may give us the names and contact details of the people who live in or look after the property, so that we can arrange access.',
			'We may also hold access notes, such as entry instructions and alarm arrangements, and keys we hold on the owner’s or agent’s behalf.',
			'We use this information only to arrange and carry out the work we have been instructed to do. Our lawful basis is our legitimate interest in carrying out that work. Access notes and keys are kept securely and shared only with the people attending.'
		]
	},
	{
		title: 'People who work on our sites',
		paragraphs: [
			'For our operatives and subcontractors we hold profile and contact details, right to work checks, training records and qualifications, the times they sign in and out on site, and the photos they take on site days, which record when and where they were taken.',
			'We use it to meet our legal duties as an employer and contractor, including right to work and health and safety, to show our clients the work that was done, and to pay people correctly, including deductions under the Construction Industry Scheme (CIS). Our lawful bases are the contract with each person, our legal obligations, and our legitimate interest in evidencing our work.'
		]
	},
	{
		title: 'Visitors to this website',
		paragraphs: [
			'When you send an enquiry through this website we collect the details you give us, typically your name, email address, phone number, property postcode and a description of the work, together with your IP address to help us stop spam. We use them to reply to your enquiry and prepare a quote.',
			'If you agree when we ask, we use Google Analytics to see how visitors find and use this website, such as which pages lead to an enquiry and whether a phone number was tapped. Google Analytics sets cookies and receives your IP address and details of your device and browser; it does not receive anything you type into the enquiry form. We use it only in summary, to improve the website, on the basis of your consent, and Google keeps the data for 14 months. You can change your choice at any time with “Cookie choices” at the foot of any page.',
			'This website sets no marketing cookies. The map on our contact page is provided by Google and is subject to Google’s privacy policy.'
		]
	},
	{
		title: 'Who we share it with',
		paragraphs: [
			'We do not sell your information. We share it only where we need to, with service providers who process it for us under contract: Xero for accounts and invoicing; Microsoft 365 for email and documents; Dext for receipts and supplier bills, until we move that work into our own systems; Microsoft Azure, which hosts our business portal; Vercel, Supabase and Resend, which host this website and send its emails; WhatsApp, which our site teams use to send their day records and photos; Vapi, the AI call answering service on our phone line, which records calls and takes messages; Google, for the map on our contact page and, if you agree, website analytics; and Anthropic, whose AI assistant Claude helps our team read and draft emails and documents, with a member of our team checking its work.',
			'We share what is needed for the work with the people involved in it: the client who instructed us, their managing agent or insurer, loss adjusters, and the subcontractors who carry out part of the work.',
			'We give information to HMRC for tax and CIS, and to other authorities where the law requires it.'
		]
	},
	{
		title: 'Information processed outside the UK',
		paragraphs: [
			'Some of our service providers process information in the European Union or the United States. Where they do, we rely on the UK’s adequacy regulations, the UK–US data bridge or the ICO’s international data transfer agreement to keep it protected to the UK standard.'
		]
	},
	{
		title: 'How long we keep it',
		paragraphs: [
			'Enquiries that do not lead to work are deleted within 12 months.',
			'Quotes, jobs, invoices and other accounting records are kept for 6 years after the end of the financial year they relate to.',
			'Job records, including site photos, sign-in times and the emails about the job, are kept for 6 years after the work is complete, or until the end of any guarantee if that is later.',
			'Access notes are deleted once we no longer work at the property, and keys are returned when our instructions end.',
			'Right to work checks are kept for 2 years after someone stops working with us; other records about the people who work with us are kept for 6 years.'
		]
	},
	{
		title: 'Your rights',
		paragraphs: [
			'You can ask us for a copy of the information we hold about you, and ask us to correct it, delete it, restrict how we use it, or send it to you or someone else in a common format. You can object to our using it on the basis of our legitimate interests, and withdraw any consent you have given.',
			`To make a request, email ${company.email}. We may ask you to confirm who you are, and we will reply within one month. Some records, such as accounting records, we must keep by law even if you ask us to delete them.`
		]
	},
	{
		title: 'Complaints',
		paragraphs: [
			`If you are unhappy with how we have handled your information, please tell us first at ${company.email}.`,
			'You can also complain to the Information Commissioner’s Office at ico.org.uk or on 0303 123 1113.'
		]
	},
	{
		title: 'Changes to this notice',
		paragraphs: [
			'We update this notice when the way we use personal information changes. The issue number and date at the top show which version you are reading.'
		]
	}
];
