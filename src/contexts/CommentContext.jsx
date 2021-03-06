import React, { useContext, useEffect, useState } from "react";
import { getComments } from "../Api";

const CommentContext = React.createContext();

export const useComment = () => useContext(CommentContext);

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);

  const addComment = (comment) => {
    setComments([comment, ...comments]);
  };

  useEffect(() => {
    const fn = async () => {
      const data = await getComments();
      // console.log(data);
      setComments(data);
    };
    fn();
  }, []);

  useEffect(() => {
    comments && setLoading(false);
  }, [comments]);

  const value = { comments, loading, addComment };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};
