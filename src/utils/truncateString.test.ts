import { truncateString } from "./truncateString";

describe("truncateString", () => {
  it("returns the original string if its length is less than or equal to maxLength", () => {
    const input = "Hello, world!";
    const output = truncateString(input, 20);
    expect(output).toEqual("Hello, world!");
  });

  it("returns the original string if its length is equal to maxLength", () => {
    const input = "Hello, world!";
    const output = truncateString(input, 13);
    expect(output).toEqual("Hello, world!");
  });

  it('truncates the string at the last space before maxLength and appends "..."', () => {
    const input = "Hello, this is a long sentence.";
    const output = truncateString(input, 16);
    expect(output).toEqual("Hello, this is...");
  });

  it("handles empty string input", () => {
    const input = "";
    const output = truncateString(input, 10);
    expect(output).toEqual("");
  });

  it("does not truncate with a period", () => {
    const input = "Hello this is a weird. Sentence with a comma";
    const output = truncateString(input, 16);
    expect(output).toEqual("Hello this is a...");
  });

  it("does not truncate with a comma", () => {
    const input =
      "There are almost as many Bolognese recipes as there are Italians, each one unique. Yet, here's my favorite take on it. This tasty version combines beef, chicken stock and milk, simmering for over 2 hours.";
    const output = truncateString(input, 180);
    expect(output).toEqual(
      "There are almost as many Bolognese recipes as there are Italians, each one unique. Yet, here's my favorite take on it. This tasty version combines beef, chicken stock and milk...",
    );
  });

  it("returns truncated string with ellipsis at maxLength if no space found before maxLength", () => {
    const input = "1234567890";
    const output = truncateString(input, 5);
    expect(output).toEqual("12345...");
  });
});
