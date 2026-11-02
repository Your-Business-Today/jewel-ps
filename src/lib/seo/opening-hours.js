const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const everyDay = [...weekdays, 'Saturday', 'Sunday'];

export const officeHours = {
	'@type': 'OpeningHoursSpecification',
	dayOfWeek: weekdays,
	opens: '08:00',
	closes: '17:00'
};

export const emergencyCoverHours = {
	'@type': 'OpeningHoursSpecification',
	dayOfWeek: everyDay,
	opens: '00:00',
	closes: '23:59'
};
