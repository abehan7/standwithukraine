import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../../Api";
import { useComment } from "../../contexts/CommentContext";

import { getDate } from "../../Hooks/getDate";
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

const PostContainer = () => {
  const { comments } = useComment();

  useEffect(() => {
    console.log();
  }, [comments]);

  return (
    <PostContainerEl>
      {comments?.map((post) => {
        const data = getDate(post);
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
