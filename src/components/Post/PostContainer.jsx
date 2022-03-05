import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../../Api";
import Colors from "../../assets/Colors";
import { useComment } from "../../contexts/CommentContext";

import { getDate } from "../../Hooks/getDate";
import Loader from "../Loading/Loader";
import Post from "./Post";
const PostContainerEl = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  padding-bottom: 2rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${Colors.Ash};
`;

const PostContainer = () => {
  const { comments, loading } = useComment();

  useEffect(() => {
    console.log();
  }, [comments]);

  return (
    <PostContainerEl>
      {loading && <Loader />}
      {!loading &&
        comments?.map((post) => {
          const data = (post.date !== "now" && getDate(post)) || "now";

          // const data = "";

          return (
            <Post
              msg={post?.message}
              author={post?.author}
              key={post?.id}
              country={post?.country}
              date={data}
            />
          );
        })}
    </PostContainerEl>
  );
};

export default React.memo(PostContainer);
