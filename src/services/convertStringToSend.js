export const convertStringToSend = (str) => {
  return str.toLowerCase().replace(/ /g, "_");
};
