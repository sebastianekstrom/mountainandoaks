export const getBakersPercentage = ({
  itemWeight,
  flourWeight,
}: {
  itemWeight: number;
  flourWeight: number;
}) => {
  const bakersPercentage = (itemWeight / flourWeight) * 100;
  const fixed = bakersPercentage.toFixed(1).replace(/\.0+$/, "");
  const formatted = ` (${fixed}%)`;
  return formatted;
};
