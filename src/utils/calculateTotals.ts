import { IMonths, IStatiticsPerMonth } from "../interfaces/Date/IDate";
import { IProduct, ITestProduct } from "../interfaces/IProduct/IProduct";

export const calculateTotal = (
  data: {
    [index: string]: IStatiticsPerMonth;
  },
  allProducts: ITestProduct[]
) => {
  const total_sales = Object.values(data).reduce(
    (acc, value) => (acc += value.sales_amount),
    0
  );
  const total_pieces_sales = Object.values(data).reduce(
    (acc, value) => (acc += value.total_piece_sales),
    0
  );
  const total_storage = allProducts.reduce(
    (acc, product) => (acc += product.storage),
    0
  );
  return {
    total_sales,
    total_pieces_sales,
    total_storage,
  };
};
