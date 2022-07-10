const classicCurrencyFormat = {
  style: "currency",
  minimumFractionDigits: 2,
  currency: "EUR",
};

export const formatCurrency = (value, options = classicCurrencyFormat) =>
  new Intl.NumberFormat("fr", { ...options }).format(value);
