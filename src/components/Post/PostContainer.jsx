import React, { useEffect } from "react";
import styled from "styled-components";
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
