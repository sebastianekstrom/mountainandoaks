import { minutesToHours, hoursToMinutes } from "date-fns";

export const pluralizeMinutes = (minutes: number) => {
	if (minutes < 60) {
		const suffix = minutes === 1 ? "minute" : "minutes";
		return `${minutes} ${suffix}`;
	}

	const minuteToHour = minutesToHours(minutes);
	const suffix = minuteToHour === 1 ? "h" : "h";

	return `~${minuteToHour}${suffix}`;
};

export const pluraLizeHours = (hours: number) => {
	const suffix = hours === 1 ? "hour" : "hours";
	return `${hours} ${suffix}`;
};

export const getFormattedTotalTime = (minutes: number) => {
	const isWholeNumber = (minutes / 60) % 1 === 0;

	if (isWholeNumber) {
		return pluralizeMinutes(minutes);
	}

	const fullHours = minutesToHours(minutes);
	const decimal = hoursToMinutes((minutes / 60) % 1);
	return `${pluraLizeHours(fullHours)} ${pluralizeMinutes(decimal)}`;
};
