import { convertStringToID } from "./convertStringToID";

describe("convertStringToID", () => {
  it("properly removes special chars and white space", () => {
    expect(
      convertStringToID("This! Is. A String With special chars....."),
    ).toBe("this-is-a-string-with-special-chars");
  });
});
