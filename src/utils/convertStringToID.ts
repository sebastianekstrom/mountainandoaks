export const convertStringToID = (string?: string) => {
	if (!string) {
		return undefined;
	}

	const withoutSpecialChars = string.replace(/[^a-zA-Z0-9 ]/g, "");
	const withoutWhiteSpace = withoutSpecialChars.replace(/\s/g, "-");
	const formatted = withoutWhiteSpace.toLowerCase();
	return formatted;
};
