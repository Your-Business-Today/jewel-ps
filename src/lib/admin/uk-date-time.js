const ukDateTimeFormat = new Intl.DateTimeFormat('en-GB', {
	day: '2-digit',
	month: '2-digit',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	timeZone: 'Europe/London'
});

/** @param {string} iso */
export function ukDateTime(iso) {
	const moment = new Date(iso);
	return ukDateTimeFormat.format(moment);
}
