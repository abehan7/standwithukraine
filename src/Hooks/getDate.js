export const getDate = (post) => {
  const timestamp = `${new Date(post?.date)}`;
  // console.log(timestamp);
  const dateItems = timestamp.split(" ");
  const timeItems = dateItems[4].split(":");
  const time = `${timeItems[0]}:${timeItems[1]}`;
  const date = `${dateItems[0]} ${dateItems[1]} ${dateItems[2]}  ${time}`;

  return date;
};
