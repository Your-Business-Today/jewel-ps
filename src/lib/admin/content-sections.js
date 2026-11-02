const icons = {
	media:
		'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 12h14l-4.5-6-3.5 4.66L8.5 12.5 5 17zm3-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
	brochure:
		'M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 5h8v2H8V8zm0 4h8v2H8v-2z',
	rightToWork:
		'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1 13-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6z'
};

/** @param {{ mediaCount: number | null, brochureCount: number | null, rtwCount: number | null }} counts */
export function contentSections(counts) {
	return [
		{
			href: '/admin/media',
			title: 'Media',
			count: counts.mediaCount,
			unit: 'uploaded photos',
			blurb: 'Upload and manage the photo library',
			icon: icons.media
		},
		{
			href: '/admin/brochure',
			title: 'Brochures',
			count: counts.brochureCount,
			unit: 'brochures',
			blurb: 'Build print-quality brochures, download as PDF',
			icon: icons.brochure
		},
		{
			href: '/admin/rtw',
			title: 'RTW checks',
			count: counts.rtwCount,
			unit: 'logged submissions',
			blurb: 'Right to Work checks completed at /rtw',
			icon: icons.rightToWork
		}
	];
}
