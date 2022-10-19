export const calculatePercentage = (
  partialValue: number,
  totalValue: number
) => {
  const calculate = (100 * partialValue) / totalValue;
  return Number(calculate);
};
