import moment from "moment";

export const formatNumberToPrice = number =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  }).format(number);

export const formatDate = (date, format) => moment(date).format(format);

export const capitalize = string => {
  if (typeof string !== "string") return string;
  return string[0].toUpperCase() + string.slice(1);
};

export const arrayToSelectOptions = optionsArray =>
  optionsArray.map(option => {
    let label = option
      .toString()
      .replace(/_/g, " ")
      .toLowerCase();
    return { label: capitalize(label), value: option };
  });
