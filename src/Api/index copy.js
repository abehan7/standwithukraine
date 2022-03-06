import { db, db2, firebase } from "../db/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const CommentCollectionRef = collection(db, "comments");

export const getComments = async () => {
  const comments = await getDocs(CommentCollectionRef);
  return comments.docs.map((comment) => {
    // console.log(comment.id, comment.data());
    return {
      id: comment.id,
      ...comment.data(),
    };
  });
};

// export const getComments2 = async () => {

//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

export const createComment = async (post) => {
  await addDoc(CommentCollectionRef, {
    author: post.author,
    message: post.message,
    date: serverTimestamp(),
    country: post.country,
  });
};

export const deleteComment = async (id) => {
  const commentDoc = doc(db, "comments", id);
  await deleteDoc(commentDoc);
};

export const updateComment = async (id, message) => {
  const commentDoc = doc(db, "comments", id);
  const newFields = { message };
  await updateDoc(commentDoc, newFields);
};