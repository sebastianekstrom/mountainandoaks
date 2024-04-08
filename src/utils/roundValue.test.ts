import { roundValue } from "./roundValue";

describe("roundValue", () => {
	it("rounds numbers below 10 correctly", () => {
		expect(roundValue()).toEqual(0);
		expect(roundValue(1.222222)).toEqual(1.2);
		expect(roundValue(9.4123123)).toEqual(9.4);
		expect(roundValue(6.6000000000000005)).toEqual(6.6);
	});
	it("rounds numbers above 10 correctly", () => {
		expect(roundValue(10.41231232312)).toEqual(10);
		expect(roundValue(150.4123121121231)).toEqual(150);
		expect(roundValue(250.6123121121231)).toEqual(251);
		expect(roundValue(1559.3999999999999)).toEqual(1559);
	});
});
