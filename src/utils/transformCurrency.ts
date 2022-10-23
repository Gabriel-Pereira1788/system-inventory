export const formatCurrency = (value: string, currency: string = "R$") => {
  // eslint-disable-next-line no-param-reassign
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );
  return `${currency} ${result}`;
};

export const formatValueSubmit = (value: string) => {
  const newValue = value
    .trim()
    .replaceAll("R$", "")
    .replaceAll(".", "")
    .replaceAll(",", ".");
  return Number(newValue);
};
