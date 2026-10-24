import { testimonials } from '$lib/site.js';

export const portfolioServices = [
	{ title: 'Single point of contact', text: 'One service desk for every trade across your portfolio, so you never chase several contractors for one block.' },
	{ title: 'Planned maintenance programmes', text: 'Preventative maintenance scheduled around your buildings and budgets, covering plant rooms, roofs, heating, lighting and common parts.' },
	{ title: 'Compliance testing & certificates', text: 'Emergency lighting, AOVs, sprinklers, electrical testing and PAT testing, with every certificate kept ready for your records.' },
	{ title: 'Detailed completion reports', text: 'A written report on every job, with photos and recommendations, so you can update residents and landlords with confidence.' },
	{ title: '24hr response for residents', text: 'Residents can reach our engineers day and night, 365 days a year, for leaks, failed heating and anything that cannot wait.' },
	{ title: 'Vetted, qualified engineers', text: 'Every engineer is fully vetted, qualified and DBS-checked, and works to the standards residents expect in their homes.' }
];

export const portfolioSteps = [
	{ step: '01', title: 'Instruct', text: 'Raise a job by phone or email with our service desk, whatever the trade and whichever building.' },
	{ step: '02', title: 'Attend', text: 'The right engineer is sent, with residents kept informed and access arranged for you.' },
	{ step: '03', title: 'Report', text: 'You receive a completion report with photos, certificates and any further works we recommend.' },
	{ step: '04', title: 'Plan ahead', text: 'Findings feed your planned maintenance programme, so small faults are fixed before they become claims.' }
];

export const chilternCourt = {
	since: '2006',
	testimonial: testimonials[2]
};
