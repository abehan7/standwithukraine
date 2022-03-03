import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../../Api";
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
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const comments = await getComments();
      setPosts(comments);
    };
    fn();
  }, []);
  return (
    <PostContainerEl>
      {posts.map((post, index) => {
        const { day, month, date, year, time } = getDate(post);
        const dateEl = `${day}  ${month}  ${date}  ${year}  ${time}`;

        return (
          <Post
            msg={post?.message}
            author={post?.author}
            key={post?.id}
            country={post?.country}
            date={dateEl}
          />
        );
      })}
    </PostContainerEl>
  );
};

export default PostContainer;
