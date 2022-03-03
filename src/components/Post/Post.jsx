import React from "react";
import styled from "styled-components";
const PostEl = styled.div`
  background-color: #fff;
  width: 90%;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const MsgWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  /* font-size: 1.1rem; */
`;

const Author = styled.span``;
const Date = styled.span``;
const SubTitle = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
`;
const Post = ({ msg, author, date, country }) => {
  return (
    <PostEl>
      <MsgWrapper>{msg}</MsgWrapper>
      <SubTitle>
        <Author>
          {author} from {country}
        </Author>
        <Date>{date}</Date>
      </SubTitle>
    </PostEl>
  );
};

export default Post;
