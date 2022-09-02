import { IStatiticsPerMonth } from "../interfaces/Date/IDate";
import { MONTHS_DATA } from "../mock/monthsData";

export const getRelevantStatistics = (statistics: {
  [index: string]: IStatiticsPerMonth;
}) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const data_last_month = statistics[MONTHS_DATA[currentMonth - 1]];
  const data_current_month = statistics[MONTHS_DATA[currentMonth]];
  return {
    data_last_month,
    data_current_month,
  };
};
