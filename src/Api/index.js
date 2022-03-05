import { db } from "../db/firebase-config";

import { ref, onValue, push, update, serverTimestamp } from "firebase/database";

export const getComments = (setState) => {
  // console.log("getComments");
  const commentsRef = ref(db, "comments/");
  onValue(commentsRef, (snapshot) => {
    const _data = [];
    snapshot.forEach((childSnapshot) => {
      _data.push({ key: childSnapshot.key, ...childSnapshot.val() });
    });
    _data.sort((a, b) => new Date(b.date) - new Date(a.date));
    snapshot.exists() && setState(_data);
  });
};

export const fetchComment = ({ message, author, country }) => {
  console.log("fetchComment");
  const commentsRef = ref(db, "comments");
  const newCmtID = push(commentsRef).key;
  const updates = {};

  updates[newCmtID] = {
    author,
    country,
    message,
    date: serverTimestamp(),
  };

  update(ref(db, "comments/"), updates);
};
export const deleteComment = () => {};
export const updateComment = () => {};

export function getNewMessage(newData) {
  const starCountRef = ref(db, "teams/messages");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}
