export const getUTC = () => {
  const time = new Date().toUTCString();
  return time;
};
