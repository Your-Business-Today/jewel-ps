import { img, services, refurbServices, ecologi } from '$lib/site.js';

/** @typedef {{ slot: string, page: string, label: string, image: string }} PhotoSlot */

/** @param {string} title */
const slugOf = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** @type {PhotoSlot[]} */
const pagePhotos = [
	{ slot: 'home.hero', page: 'Home', label: 'Top of the page', image: img('50-Liverpool-st-Lounge-Area-Workroom-view_MC_HR_13.14-1920x1280.jpg') },
	{ slot: 'home.cared-for', page: 'Home', label: 'Beside “We put the Pro in property services”', image: img('9174928687_ba363209af_k.jpg') },
	{ slot: 'home.ecologi', page: 'Home', label: 'Ecologi forest', image: ecologi.image },
	{ slot: 'about.hero', page: 'About', label: 'Top of the page', image: img('jewel_style_prime_london_lobby_option_3-1.png') },
	{ slot: 'about.office', page: 'About', label: 'The office', image: img('Office-Picture-1.png') },
	{ slot: 'about.engineers', page: 'About', label: 'Engineers on site', image: img('construction-engineer-with-foreman-worker-checking-2021-08-26-17-34-59-utc_60.jpg') },
	{ slot: 'refurbishment.hero', page: 'Refurbishment', label: 'Top of the page', image: img('image6.jpg') },
	{ slot: 'maintenance.hero', page: 'Maintenance', label: 'Top of the page', image: img('common-roof-repairs.webp') },
	{ slot: 'fire-flood.hero', page: 'Fire & flood restoration', label: 'Top of the page', image: img('Jewel-repair.jpg') },
	{ slot: 'fire-flood.works', page: 'Fire & flood restoration', label: 'Restoration works in progress', image: img('Jewel-repair.jpg') },
	{ slot: 'emergency.hero', page: 'Emergency callout', label: 'Top of the page', image: img('Emergency-Callouts.jpg') },
	{ slot: 'managing-agents.hero', page: 'Managing agents', label: 'Top of the page', image: img('common-roof-repairs.webp') },
	{ slot: 'insurance-claims.hero', page: 'Insurers & loss adjusters', label: 'Top of the page', image: img('Jewel-repair.jpg') }
];

/** The photos the office can change from /admin/photos, each with the photo the site shows until one is chosen. */
export const photoSlots = [
	...pagePhotos,
	...services.map((service) => ({ slot: `service.${service.id}`, page: 'Home', label: `${service.title} service card`, image: service.image })),
	...refurbServices.map((service) => ({ slot: `refurbishment.${slugOf(service.title)}`, page: 'Refurbishment', label: service.title, image: service.image }))
];

/** @param {string} title */
export const refurbishmentSlotFor = (title) => `refurbishment.${slugOf(title)}`;

const defaultPhotos = new Map(photoSlots.map((photoSlot) => [photoSlot.slot, photoSlot.image]));

/** @param {string} slot */
export const defaultPhotoFor = (slot) => defaultPhotos.get(slot) ?? '';

/** @param {string} slot */
export const isPhotoSlot = (slot) => defaultPhotos.has(slot);
