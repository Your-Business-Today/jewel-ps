const followUpDaysBeforeExpiry = 28;

/** @param {string} iso */
export function followupDate(iso) {
	const p = iso.split('-');
	const dt = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
	dt.setUTCDate(dt.getUTCDate() - followUpDaysBeforeExpiry);
	return dt.toISOString().slice(0, 10);
}

/** @param {string} iso */
export function ukDate(iso) {
	if (!iso) return '';
	const p = iso.split('-');
	return p[2] + '/' + p[1] + '/' + p[0];
}

/** @param {number} part */
const twoDigits = (part) => String(part).padStart(2, '0');

export function todayISO() {
	const n = new Date();
	return n.getFullYear() + '-' + twoDigits(n.getMonth() + 1) + '-' + twoDigits(n.getDate());
}
