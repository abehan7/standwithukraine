export const getDate = (post) => {
  const timestamp = `${new Date(post?.date?.seconds * 1000)}`;
  const dateItems = timestamp.split(" ");

  return {
    day: dateItems[0],
    month: dateItems[1],
    date: dateItems[2],
    year: dateItems[3],
    time: dateItems[4],
  };
};
