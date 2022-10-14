import { MONTHS_DATA } from "../mock/monthsData";

export const formatDate = (date: Date): string => {
  const month = date.getMonth();
  const currentDate = new Date();
  const isToday =
    currentDate.getDay() === date.getDay() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getFullYear() === date.getFullYear();

  if (isToday) return `Hoje ás ${date.getHours()}:${date.getMinutes()}`;

  return `${date.getDate()} de ${
    MONTHS_DATA[month]
  } ás ${date.getHours()}:${date.getMinutes()}`;
};
