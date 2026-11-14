import { services, refurbServices, maintenanceServices, values, leadership, ecologi } from '$lib/site.js';

/** How much a slot holds: a line for a headline, a paragraph for anything longer. */
export const TextKinds = { line: 'line', paragraph: 'paragraph' };

/** The longest text each kind of slot keeps, read by the admin form and by the server that writes it. */
export const TextLimits = { [TextKinds.line]: 160, [TextKinds.paragraph]: 1200 };

/** @typedef {{ slot: string, page: string, label: string, kind: string, text: string }} TextSlot */

/** @param {string} title */
const slugOf = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** @type {TextSlot[]} */
const pageHeroes = [
	{ slot: 'about.hero.title', page: 'About', label: 'Headline', kind: TextKinds.line, text: "Maintenance, refurbishment, insurance works and building safety." },
	{ slot: 'about.hero.lede', page: 'About', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "A family business caring for properties across London and the South East, from day-to-day upkeep to high-end refurbishment, with the reliability and care clients have trusted for over two decades." },
	{ slot: 'refurbishment.hero.title', page: 'Refurbishment', label: 'Headline', kind: TextKinds.line, text: "From concept to completion." },
	{ slot: 'refurbishment.hero.lede', page: 'Refurbishment', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "Renovation and refurbishment by skilled professionals, with bespoke solutions for residential and commercial property. We work with you from first consultation to final finish." },
	{ slot: 'maintenance.hero.title', page: 'Maintenance', label: 'Headline', kind: TextKinds.line, text: "Maintaining your peace of mind." },
	{ slot: 'maintenance.hero.lede', page: 'Maintenance', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "Regular and specialised maintenance of your property and estate portfolio, keeping everything safe, compliant and running smoothly — with experts on call 24 hours a day." },
	{ slot: 'fire-flood-restoration.hero.title', page: 'Fire & flood restoration', label: 'Headline', kind: TextKinds.line, text: "Bringing your property back to life after disaster strikes." },
	{ slot: 'fire-flood-restoration.hero.lede', page: 'Fire & flood restoration', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "Seeing your property in disrepair is overwhelming. As a nominated main contractor for insurance companies across the UK, we’re here to help you every step of the way." },
	{ slot: 'emergency.hero.title', page: 'Emergency callout', label: 'Headline', kind: TextKinds.line, text: "A leak or an emergency? Call us now." },
	{ slot: 'emergency.hero.lede', page: 'Emergency callout', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "Our engineers are on standby day and night, 365 days a year, to stop the damage, make your property safe and put it right." },
	{ slot: 'managing-agents.hero.title', page: 'Managing agents', label: 'Headline', kind: TextKinds.line, text: "One contractor for your whole portfolio." },
	{ slot: 'managing-agents.hero.lede', page: 'Managing agents', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "Reactive repairs, planned maintenance and compliance testing across every building you manage, through one service desk that residents are happy to see." },
	{ slot: 'insurance-claims.hero.title', page: 'Insurers & loss adjusters', label: 'Headline', kind: TextKinds.line, text: "Reinstatement you can place with confidence." },
	{ slot: 'insurance-claims.hero.lede', page: 'Insurers & loss adjusters', label: 'Introduction under the headline', kind: TextKinds.paragraph, text: "A nominated main contractor for UK insurers, we take a claim from the first emergency call to the final sign-off, and keep you informed at every stage." },
];

/** @type {TextSlot[]} */
const sections = [
	...services.map((service) => ({ slot: `service.${service.id}.short`, page: 'Home', label: `${service.title} service card`, kind: TextKinds.line, text: service.short })),
	{ slot: 'ecologi', page: 'Home', label: 'Ecologi (also on About)', kind: TextKinds.paragraph, text: ecologi.text },
	{ slot: 'about.leadership', page: 'About', label: `Quote from ${leadership.name}`, kind: TextKinds.paragraph, text: leadership.quote },
	...values.map((value) => ({ slot: `about.value.${slugOf(value.title)}`, page: 'About', label: `Value: ${value.title}`, kind: TextKinds.paragraph, text: value.text })),
	...refurbServices.map((service) => ({ slot: `refurbishment.${slugOf(service.title)}`, page: 'Refurbishment', label: service.title, kind: TextKinds.paragraph, text: service.text })),
	...maintenanceServices.map((service) => ({ slot: `maintenance.${slugOf(service.title)}`, page: 'Maintenance', label: service.title, kind: TextKinds.paragraph, text: service.text }))
];

/** The text the office can change from /admin/text, each with the words the site shows until it is changed. */
export const textSlots = [...pageHeroes, ...sections];

const slotsByName = new Map(textSlots.map((textSlot) => [textSlot.slot, textSlot]));

/** @param {string} slot */
export const defaultTextFor = (slot) => slotsByName.get(slot)?.text ?? '';

/** @param {string} slot */
export const textSlotNamed = (slot) => slotsByName.get(slot);

/** @param {string} prefix @param {string} title */
export const slotForTitle = (prefix, title) => `${prefix}.${slugOf(title)}`;
