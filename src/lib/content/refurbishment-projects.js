import { img } from '$lib/site.js';

/** @param {string} fileName @param {string} alt */
const projectPhoto = (fileName, alt) => ({ src: img(`projects/${fileName}`), alt });

export const completedProjectsIntro = {
	kicker: 'Completed projects',
	title: 'Refurbishments we have handed over.',
	lede: 'A selection of finished homes, from a period flat in Chelsea to a detached family house in Wimbledon, each run by one project manager from first visit to final finish.'
};

export const completedProjects = [
	{
		name: 'Cadogan Square',
		location: 'Chelsea, London',
		summary: 'A period flat refurbished throughout: an open living and dining room around a three-sided fire, a handleless kitchen with mirrored splashbacks and a stone-lined bathroom.',
		photos: [
			projectPhoto('cadogan-square-living-room.webp', 'Living room at Cadogan Square with a three-sided fire, oak floor and shuttered sash windows'),
			projectPhoto('cadogan-square-kitchen.webp', 'Handleless dark-oak kitchen at Cadogan Square with mirrored splashbacks'),
			projectPhoto('cadogan-square-bathroom.webp', 'Stone-lined bathroom at Cadogan Square with a wall-hung basin and mirrored storage')
		]
	},
	{
		name: 'Hampton Court Residence',
		location: 'Hampton Court',
		summary: 'A family house finished to a contemporary standard: a long kitchen and dining room opening onto the garden through full-height glazing, and a freestanding bath beneath an arched sash window.',
		photos: [
			projectPhoto('hampton-court-kitchen.webp', 'Kitchen and dining room at the Hampton Court residence with full-height glazing to the garden'),
			projectPhoto('hampton-court-bathroom.webp', 'Freestanding bath beneath an arched sash window at the Hampton Court residence')
		]
	},
	{
		name: 'Wimbledon Residence',
		location: 'Wimbledon, London',
		summary: 'A detached family house finished outside as well as in, with a resin driveway, a timber carport and a terraced rear garden opening from folding glass doors.',
		photos: [
			projectPhoto('wimbledon-front.webp', 'Front of the Wimbledon residence with its resin driveway and double garage'),
			projectPhoto('wimbledon-rear.webp', 'Rear of the Wimbledon residence with folding glass doors onto a terraced garden'),
			projectPhoto('wimbledon-driveway.webp', 'Timber carport and garage beside the driveway at the Wimbledon residence')
		]
	}
];
