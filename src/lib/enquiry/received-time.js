const londonTime = 'Europe/London';
const millisecondsPerMinute = 60_000;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysShownAsAge = 7;

/** @param {string} iso */
export function receivedAt(iso) {
	return new Date(iso).toLocaleString('en-GB', {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: londonTime
	});
}

/** @param {string} iso */
export function receivedAgo(iso) {
	const mins = Math.floor((Date.now() - new Date(iso).getTime()) / millisecondsPerMinute);
	if (mins < 1) return 'just now';
	if (mins < minutesPerHour) return `${mins}m ago`;
	const hrs = Math.floor(mins / minutesPerHour);
	if (hrs < hoursPerDay) return `${hrs}h ago`;
	const days = Math.floor(hrs / hoursPerDay);
	if (days < daysShownAsAge) return `${days}d ago`;
	return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', timeZone: londonTime });
}
