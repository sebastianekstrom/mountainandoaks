import { roundValue } from "./roundValue";

describe("roundValue", () => {
  it("rounds correctly", () => {
    expect(roundValue()).toEqual(0);
    expect(roundValue(9.600000000000001)).toEqual(9.6);
    expect(roundValue(6.6000000000000005)).toEqual(6.6);
    expect(roundValue(1559.3999999999999)).toEqual(1559.4);
    expect(roundValue(1.222222)).toEqual(1.2);
  });
});
