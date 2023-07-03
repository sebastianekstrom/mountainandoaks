export const roundValue = (value?: number) => {
  if (!value) {
    return 0;
  }
  return Math.round(value * 10) / 10;
};
