export const truncateString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) return str;

  let truncatedStr = str.substr(0, maxLength);

  let spaceIndex = truncatedStr.lastIndexOf(" ");

  let lastChar = truncatedStr[spaceIndex - 1];
  if (lastChar === "," || lastChar === ".") {
    spaceIndex--;
  }

  if (spaceIndex > -1) {
    return `${truncatedStr.substr(0, spaceIndex)}...`;
  }

  return `${truncatedStr}...`;
};
