import {
  pluralizeMinutes,
  pluraLizeHours,
  getFormattedTotalTime,
} from "./index";

describe("pluralizeMinutes", () => {
  it("should return minutes with the correct suffix", () => {
    expect(pluralizeMinutes(1)).toBe("1 minute");
    expect(pluralizeMinutes(10)).toBe("10 minutes");
    expect(pluralizeMinutes(59)).toBe("59 minutes");
  });

  it("should return hours with the correct suffix", () => {
    expect(pluralizeMinutes(60)).toBe("~1h");
    expect(pluralizeMinutes(120)).toBe("~2h");
    expect(pluralizeMinutes(180)).toBe("~3h");
  });
});

describe("pluraLizeHours", () => {
  it("should return hours with the correct suffix", () => {
    expect(pluraLizeHours(1)).toBe("1 hour");
    expect(pluraLizeHours(2)).toBe("2 hours");
    expect(pluraLizeHours(10)).toBe("10 hours");
  });
});

describe("getFormattedTotalTime", () => {
  it("should return only hours for whole number inputs", () => {
    const oneHourInMinutes = 60;
    const twoHoursInMinutes = 2 * 60;
    const threeHoursInMinutes = 3 * 60;

    expect(getFormattedTotalTime(oneHourInMinutes)).toBe("~1h");
    expect(getFormattedTotalTime(twoHoursInMinutes)).toBe("~2h");
    expect(getFormattedTotalTime(threeHoursInMinutes)).toBe("~3h");
  });

  it("should return hours and minutes for non-whole number inputs", () => {
    const oneHourAndTenMinutes = 70;
    const twoHoursAndThirtyMinutes = 2 * 60 + 30;

    expect(getFormattedTotalTime(oneHourAndTenMinutes)).toBe(
      "1 hour 10 minutes"
    );
    expect(getFormattedTotalTime(twoHoursAndThirtyMinutes)).toBe(
      "2 hours 30 minutes"
    );
  });
});
