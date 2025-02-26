export const formatFloat = (value: number, decimal = 2) => {
  if (isNaN(value)) return 0;

  return parseFloat(value.toFixed(decimal));
};

export const formatCurrency = (
  value: number,
  locale: string | string[] | undefined,
  currencyCode: string,
  fractionDigits: number,
  shouldParse: boolean
) => {
  const v =
    !isNaN(value) && shouldParse
      ? formatFloat(value)
      : !isNaN(value) && !shouldParse
      ? value
      : 0;
  const formatted = Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: fractionDigits,
  })
    .format(v)
    .replace(/\s/g, "");

  return formatted;
};

export const formatCurrencyIDR = (
  value: number,
  fractionDigits: number = 0,
  shouldParse: boolean = false
) => {
  if (isNaN(value)) return "-";

  return formatCurrency(
    value,
    "id-ID",
    "IDR",
    fractionDigits ? fractionDigits : 0,
    shouldParse
  );
};
