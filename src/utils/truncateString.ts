export const truncateString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) return str;

  let truncatedStr = str.substr(0, maxLength);

  // Find the last space in the truncated string
  let spaceIndex = truncatedStr.lastIndexOf(" ");

  // If the last character is a comma or a period, remove it
  let lastChar = truncatedStr[spaceIndex - 1];
  if (lastChar === "," || lastChar === ".") {
    spaceIndex--;
  }

  // If we found a space, return the string up to this point plus ellipsis
  if (spaceIndex > -1) {
    return `${truncatedStr.substr(0, spaceIndex)}...`;
  }

  // If no space was found, return the truncated string plus ellipsis
  return `${truncatedStr}...`;
};
