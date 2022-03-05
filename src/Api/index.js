import { db } from "../db/firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  limitToLast,
  query,
  collectionGroup,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

const CommentCollectionRef = collection(db, "comments");
const modelsRef = collection(db, "comments");
const Comments = query(collectionGroup(db, "comments"));

const qry = query(modelsRef, orderBy("date", "desc"), limit(20));
// https://stackoverflow.com/questions/69062808/firebase-9-getdocsqry-not-returning
// 여기에 나와있음
export const getComments = async () => {
  console.log("getComments");

  const comments = await getDocs(qry);
  console.log("comments: ", comments);
  return comments.docs.map((comment) => {
    return {
      id: comment.id,
      ...comment.data(),
    };
  });
};

export const fetchComment = async ({ message, author, country }) => {
  console.log("fetchComment");
  await addDoc(CommentCollectionRef, {
    author,
    country,
    message,
    date: serverTimestamp(),
  });
};

export const deleteComment = () => {};
export const updateComment = () => {};
