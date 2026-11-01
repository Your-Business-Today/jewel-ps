import { site, services, refurbServices, maintenanceServices, restorationServices } from '$lib/site.js';
import { emergencyServices } from '$lib/content/emergency.js';

/** @type {Record<string, { title: string }[]>} */
const servicesByArea = {
	refurbishment: refurbServices,
	maintenance: maintenanceServices,
	restoration: restorationServices,
	emergency: emergencyServices
};

/** @param {string} serviceName @param {string} pageAddress */
function offerFor(serviceName, pageAddress) {
	return {
		'@type': 'Offer',
		itemOffered: { '@type': 'Service', name: serviceName, url: pageAddress }
	};
}

/** @param {{ id: string, title: string, href: string }} serviceArea */
function catalogueFor(serviceArea) {
	const pageAddress = `${site.url}${serviceArea.href}`;
	const offeredServices = servicesByArea[serviceArea.id] ?? [serviceArea];
	return {
		'@type': 'OfferCatalog',
		name: serviceArea.title,
		url: pageAddress,
		itemListElement: offeredServices.map((offered) => offerFor(offered.title, pageAddress))
	};
}

export const serviceCatalogue = {
	'@type': 'OfferCatalog',
	name: 'Property maintenance, refurbishment and restoration',
	itemListElement: services.map(catalogueFor)
};
