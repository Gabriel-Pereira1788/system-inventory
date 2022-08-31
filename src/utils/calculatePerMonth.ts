import {
  IMonths,
  IStatiticsPerMonth,
  keyMonths,
} from "../interfaces/Date/IDate";
import { calculateTotal } from "./calculateTotals";

const separatePerMonth = (data: any[]) => {
  const MONTHS: IMonths = {
    janeiro: [],
    feveireiro: [],
    março: [],
    abril: [],
    maio: [],
    junho: [],
    julho: [],
    agosto: [],
    setembro: [],
    outubro: [],
    novembro: [],
    dezembro: [],
  };
  data.forEach((sales) => {
    const month = new Date(sales.date_sale).getMonth();
    switch (month) {
      case 0:
        MONTHS.janeiro.push(sales);
        break;
      case 1:
        MONTHS.feveireiro.push(sales);
        break;
      case 2:
        MONTHS.março.push(sales);
        break;
      case 3:
        MONTHS.abril.push(sales);
        break;
      case 4:
        MONTHS.maio.push(sales);
        break;
      case 5:
        MONTHS.junho.push(sales);
        break;
      case 6:
        MONTHS.julho.push(sales);
        break;
      case 7:
        MONTHS.agosto.push(sales);
        break;
      case 8:
        MONTHS.setembro.push(sales);
        break;
      case 9:
        MONTHS.outubro.push(sales);
        break;
      case 10:
        MONTHS.novembro.push(sales);
        break;
      case 11:
        MONTHS.dezembro.push(sales);
        break;
    }
  });
  return MONTHS;
};

const calculateTotalPerMonth = (days: any[]): IStatiticsPerMonth => {
  const sales_amount = days.reduce(
    (acc, day) => (acc += (day.priceSaled - day.pricePurchased) * day.sales),
    0
  );
  const total_piece_sales = days.reduce((acc, day) => (acc += day.sales), 0);
  const maxSaled = Math.max(...days.map((day) => day.sales));
  const best_selling = days.find((day) => day.sales === maxSaled);

  return {
    total_piece_sales,
    sales_amount,
    best_selling,
  };
};

export const calculatePerMonth = (data: any[]) => {
  // const userData = data.filter((dt) => dt.id_usuario === userId);
  const dataPerMonths = separatePerMonth(data);
  const keys = Object.keys(dataPerMonths) as keyMonths[];
  const dataTest = Object.entries(dataPerMonths)
    .filter((month) => month[1].length > 0)
    .map(([key, value]) => [key, calculateTotalPerMonth(value)])
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  console.log(dataTest);
  return dataTest;
};
