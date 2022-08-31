import { IMonths, IStatiticsPerMonth } from "../interfaces/Date/IDate";

export const calculateTotal = (data: {
  [index: string]: IStatiticsPerMonth;
}) => {
  const totalSales = Object.values(data).reduce(
    (acc, value) => (acc += value.sales_amount),
    0
  );
  const total_pieces_sales = Object.values(data).reduce(
    (acc, value) => (acc += value.total_piece_sales),
    0
  );
  return {
    totalSales,
    total_pieces_sales,
  };
};
