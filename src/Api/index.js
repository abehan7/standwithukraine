import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
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
