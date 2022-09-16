export const calculatePercentage = (
  partialValue: number,
  totalValue: number
) => {
  console.log(`partial:${partialValue}, total:${totalValue}`);
  const calculate = (100 * partialValue) / totalValue;
  return Number(calculate);
};
