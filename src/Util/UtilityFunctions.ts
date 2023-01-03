export const getCapitalized = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPercentageString = (x: number, y: number): string => {
  return ((x / y) * 100).toFixed(0) + "%";
};
