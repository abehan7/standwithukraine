const getNewMessage = (newData) => {
  const dataList = newData.sort((a, b) => new Date(a.date) - new Date(b.date));
  return dataList;
};
