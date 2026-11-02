import { site, contact, social } from '$lib/site.js';
import { officeHours, emergencyCoverHours } from './opening-hours.js';
import { serviceCatalogue } from './service-catalogue.js';

const officeAddress = {
	'@type': 'PostalAddress',
	streetAddress: contact.addressLines[0],
	addressLocality: contact.addressLines[1],
	postalCode: contact.addressLines[2],
	addressCountry: 'GB'
};

const areasServed = [
	{ '@type': 'City', name: 'London' },
	{ '@type': 'AdministrativeArea', name: 'South East England' }
];

const contactPoints = [
	{
		'@type': 'ContactPoint',
		contactType: 'customer service',
		telephone: contact.phoneInternational,
		email: contact.email,
		availableLanguage: 'en-GB',
		hoursAvailable: officeHours
	},
	{
		'@type': 'ContactPoint',
		contactType: 'emergency',
		telephone: contact.phoneInternational,
		availableLanguage: 'en-GB',
		hoursAvailable: emergencyCoverHours
	}
];

export const localBusiness = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': `${site.url}/#business`,
	name: site.legalName,
	url: site.url,
	logo: `${site.url}${site.logoPng}`,
	image: `${site.url}/og-image.png`,
	description: site.description,
	telephone: contact.phoneInternational,
	email: contact.email,
	address: officeAddress,
	areaServed: areasServed,
	openingHoursSpecification: [officeHours],
	contactPoint: contactPoints,
	hasOfferCatalog: serviceCatalogue,
	sameAs: Object.values(social)
};
