export const roundValue = (value?: number) => {
	if (!value) {
		return 0;
	}

	if (value < 10) {
		return Math.round(value * 10) / 10;
	}
	return Math.round(value);
};
